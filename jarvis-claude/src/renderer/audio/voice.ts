import { useSession } from '../store/session'

const WAKE_PHRASES = ['hey claude', 'hey jarvis', 'jarvis']
const SILENCE_MS = 1500
const ROLLING_WINDOW_MS = 5000

type RestartTracker = { times: number[] }

export type VoiceController = {
  start: () => void
  stop: () => void
  destroy: () => void
}

function stripWakePhrase(text: string): string {
  const lower = text.toLowerCase()
  for (const w of WAKE_PHRASES) {
    const idx = lower.indexOf(w)
    if (idx >= 0) return text.slice(idx + w.length).replace(/^[\s,.!?]+/, '').trim()
  }
  return text.trim()
}

export function createVoiceController(): VoiceController {
  const SR = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition
  if (!SR) {
    console.warn('[voice] Web Speech API not available; voice disabled.')
    useSession.getState().setError('Voice unavailable in this build')
    return { start() {}, stop() {}, destroy() {} }
  }

  const recognition = new SR()
  recognition.continuous = true
  recognition.interimResults = true
  recognition.lang = 'en-US'

  let running = false
  let manuallyStopped = false
  let silenceTimer: ReturnType<typeof setTimeout> | null = null
  let rollingBuf: { ts: number; text: string }[] = []
  const restart: RestartTracker = { times: [] }
  const offHandlers: Array<() => void> = []

  function rollingText(): string {
    const now = Date.now()
    rollingBuf = rollingBuf.filter(e => now - e.ts < ROLLING_WINDOW_MS)
    return rollingBuf.map(e => e.text).join(' ').toLowerCase()
  }

  function pushRolling(text: string) {
    rollingBuf.push({ ts: Date.now(), text })
  }

  function clearSilenceTimer() {
    if (silenceTimer) {
      clearTimeout(silenceTimer)
      silenceTimer = null
    }
  }

  function finalizeUtterance() {
    const state = useSession.getState()
    if (state.state !== 'capturing') return
    const utterance = stripWakePhrase(state.capturingTranscript)
    if (!utterance) {
      state.setState('listening')
      state.setCapturing('')
      return
    }
    state.pushUserMessage(utterance)
    state.setCapturing('')
    state.setState('thinking')
    window.api.claude.send({
      prompt: utterance,
      sessionId: state.sessionId
    })
  }

  function scheduleSilenceFinalize() {
    clearSilenceTimer()
    silenceTimer = setTimeout(finalizeUtterance, SILENCE_MS)
  }

  recognition.onresult = (ev: SpeechRecognitionEvent) => {
    let interim = ''
    let final = ''
    for (let i = ev.resultIndex; i < ev.results.length; i++) {
      const r = ev.results[i]
      const text = r[0].transcript
      if (r.isFinal) final += text
      else interim += text
    }

    const heard = (final + ' ' + interim).trim()
    if (!heard) return

    pushRolling(heard)
    const store = useSession.getState()

    if (store.state === 'listening' || store.state === 'idle') {
      const window = rollingText()
      const matched = WAKE_PHRASES.some(w => window.includes(w))
      if (matched) {
        store.setState('capturing')
        store.setCapturing(heard)
        rollingBuf = []
        scheduleSilenceFinalize()
      }
      return
    }

    if (store.state === 'capturing') {
      const next = (store.capturingTranscript + ' ' + heard).trim()
      store.setCapturing(next)
      scheduleSilenceFinalize()
    }
  }

  recognition.onerror = (ev: SpeechRecognitionErrorEvent) => {
    if (ev.error === 'no-speech') return
    if (ev.error === 'audio-capture' || ev.error === 'network') {
      useSession.getState().setError(`Mic: ${ev.error}`)
    } else {
      console.warn('[voice] error', ev.error)
    }
  }

  recognition.onend = () => {
    running = false
    if (manuallyStopped) return
    const now = Date.now()
    restart.times = restart.times.filter(t => now - t < 10_000)
    if (restart.times.length > 5) {
      useSession.getState().setError('Voice restart back-off')
      setTimeout(() => start(), 5_000)
      return
    }
    restart.times.push(now)
    start()
  }

  recognition.onstart = () => {
    running = true
    manuallyStopped = false
    if (useSession.getState().state === 'idle') {
      useSession.getState().setState('listening')
    }
  }

  function start() {
    if (running) return
    try {
      recognition.start()
    } catch (err) {
      console.warn('[voice] start threw (probably already started):', err)
    }
  }

  function stop() {
    manuallyStopped = true
    clearSilenceTimer()
    try { recognition.stop() } catch {}
  }

  const offSpeaking = window.api.tts.onSpeaking(() => {
    useSession.getState().setState('speaking')
    stop()
  })
  offHandlers.push(offSpeaking)

  const offEnd = window.api.tts.onEnd(() => {
    useSession.getState().setState('listening')
    manuallyStopped = false
    start()
  })
  offHandlers.push(offEnd)

  return {
    start,
    stop,
    destroy: () => {
      stop()
      for (const off of offHandlers) off()
    }
  }
}
