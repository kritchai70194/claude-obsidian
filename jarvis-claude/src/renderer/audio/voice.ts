import { useSession } from '../store/session'

// vad-web's CJS entry has a dynamic require for onnxruntime-web/wasm that
// Vite cannot statically resolve. We load the prebuilt UMD bundle from the
// public dir at runtime instead. The bundle exposes `window.vad.MicVAD`.
type MicVADClass = {
  new: (opts: {
    positiveSpeechThreshold?: number
    negativeSpeechThreshold?: number
    redemptionMs?: number
    minSpeechMs?: number
    preSpeechPadMs?: number
    onSpeechStart?: () => void
    onSpeechEnd?: (audio: Float32Array) => void
    onVADMisfire?: () => void
  }) => Promise<MicVADInstance>
}
type MicVADInstance = {
  start: () => Promise<void>
  pause: () => void
  destroy: () => void
}

declare global {
  interface Window {
    vad?: { MicVAD: MicVADClass }
  }
}

async function loadVadBundle(): Promise<MicVADClass> {
  if (window.vad?.MicVAD) return window.vad.MicVAD
  await new Promise<void>((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>('script[data-vad-bundle]')
    if (existing) {
      if ((existing as any).__loaded) return resolve()
      existing.addEventListener('load', () => resolve())
      existing.addEventListener('error', () => reject(new Error('vad bundle load failed')))
      return
    }
    const s = document.createElement('script')
    s.src = '/vad.bundle.min.js'
    s.dataset.vadBundle = 'true'
    s.addEventListener('load', () => { (s as any).__loaded = true; resolve() })
    s.addEventListener('error', () => reject(new Error('vad bundle load failed')))
    document.head.appendChild(s)
  })
  if (!window.vad?.MicVAD) throw new Error('vad bundle loaded but window.vad.MicVAD missing')
  return window.vad.MicVAD
}

const WAKE_PHRASES_EXACT = [
  // English-mode wake phrases
  'hey claude', 'hey jarvis',
  // Thai-mode wake phrases — assistant is named "ข้าวกล้า" (Khaokla)
  'เฮ้ ข้าวกล้า', 'เฮ้ข้าวกล้า',
  'ไง ข้าวกล้า', 'ไงข้าวกล้า',
  'สวัสดี ข้าวกล้า', 'สวัสดีข้าวกล้า'
]
const WAKE_KEYWORDS_LATIN = ['jarvis', 'claude']
// Thai keyword + common Whisper mishears of the same name.
const WAKE_KEYWORDS_THAI = [
  'ข้าวกล้า',
  'ข้าวก้า',
  'ข้าวกล่า',
  'ข้าวกลา',
  'ข้าวกล้าว',
  'ข้าวกล่าว',
  'เข้ากล้า',
  'ขาวกล้า',
  // Added 2026-05-27 from observed Whisper mishears
  'ก้า',
  'ฮาวกล้า',
  'ฮาวก้า',
  'ดีก้่่า',
  'โหลก้า',
  'โลก้า',
  'โลกา',
  'โลกะ'
]
const WAKE_FUZZY_MAX = 2
const CMD_MIN_UTTERANCE_CHARS = 3

// Whisper hallucination defense-in-depth (Silero VAD already filters non-speech,
// so this is mostly belt-and-suspenders for occasional Whisper quirks).
const WHISPER_NOISE = [
  /\[BLANK_AUDIO\]/gi,
  /\[Music\]/gi,
  /\[Silence\]/gi,
  /\[Applause\]/gi,
  /\[Laughter\]/gi,
  /\[no\s*(audio|speech)\]/gi,
  /\(silence\)/gi,
  /\(blank audio\)/gi,
  /\(music\)/gi
]
const WHISPER_HALLUCINATIONS = [
  /^thanks for watching[!.]?$/i,
  /^thank you[.!]?$/i,
  /^bye[.!]?$/i,
  /^\.{2,}$/,
  /^you[.!]?$/i,
  /^okay[.!]?$/i,
  /^bye-bye[.!]?$/i
]

function cleanWhisper(text: string): string {
  let cleaned = text
  for (const re of WHISPER_NOISE) cleaned = cleaned.replace(re, ' ')
  cleaned = cleaned.replace(/^[->\s]+/, '')
  cleaned = cleaned.replace(/\s+/g, ' ').trim()
  if (!cleaned) return ''
  if (WHISPER_HALLUCINATIONS.some(re => re.test(cleaned))) return ''
  return cleaned
}

function levenshtein(a: string, b: string): number {
  if (a === b) return 0
  if (!a.length) return b.length
  if (!b.length) return a.length
  if (a.length < b.length) [a, b] = [b, a]
  let prev = new Array(b.length + 1)
  for (let j = 0; j <= b.length; j++) prev[j] = j
  const curr = new Array(b.length + 1)
  for (let i = 1; i <= a.length; i++) {
    curr[0] = i
    for (let j = 1; j <= b.length; j++) {
      const cost = a.charCodeAt(i - 1) === b.charCodeAt(j - 1) ? 0 : 1
      curr[j] = Math.min(curr[j - 1] + 1, prev[j] + 1, prev[j - 1] + cost)
    }
    [prev, curr[0]] = [curr.slice(), 0]
  }
  return prev[b.length]
}

function matchesWake(text: string, lang: 'en' | 'th'): string | null {
  const lower = text.toLowerCase()
  if (lang === 'th') {
    for (const p of WAKE_PHRASES_EXACT) {
      if (/[฀-๿]/.test(p) && lower.includes(p)) return p
    }
    for (const kw of WAKE_KEYWORDS_THAI) {
      if (text.includes(kw)) return kw
    }
    return null
  }
  for (const p of WAKE_PHRASES_EXACT) {
    if (/[฀-๿]/.test(p)) continue
    if (lower.includes(p)) return p
  }
  const tokens = lower.match(/[a-z']+/g) ?? []
  for (const tok of tokens) {
    if (tok.length < 4) continue
    for (const kw of WAKE_KEYWORDS_LATIN) {
      if (levenshtein(tok, kw) <= WAKE_FUZZY_MAX) return kw
    }
  }
  return null
}

function stripWakePhrase(text: string, lang: 'en' | 'th'): string {
  const lower = text.toLowerCase()
  if (lang === 'th') {
    for (const w of WAKE_PHRASES_EXACT) {
      if (!/[฀-๿]/.test(w)) continue
      const idx = lower.indexOf(w)
      if (idx >= 0) return text.slice(idx + w.length).replace(/^[\s,.!?]+/, '').trim()
    }
    for (const kw of WAKE_KEYWORDS_THAI) {
      const idx = text.indexOf(kw)
      if (idx >= 0) {
        let start = idx
        const before = text.slice(0, idx)
        const thaiLead = before.match(/(เฮ้|ไง)[\s,]*$/)
        if (thaiLead) start -= thaiLead[0].length
        return (text.slice(0, start) + ' ' + text.slice(idx + kw.length))
          .replace(/^[\s,.!?]+/, '').replace(/\s+/g, ' ').trim()
      }
    }
    return text.trim()
  }
  for (const w of WAKE_PHRASES_EXACT) {
    if (/[฀-๿]/.test(w)) continue
    const idx = lower.indexOf(w)
    if (idx >= 0) return text.slice(idx + w.length).replace(/^[\s,.!?]+/, '').trim()
  }
  const tokenRe = /[a-z']+/gi
  let m: RegExpExecArray | null
  while ((m = tokenRe.exec(text)) !== null) {
    const tok = m[0].toLowerCase()
    if (tok.length < 4) continue
    for (const kw of WAKE_KEYWORDS_LATIN) {
      if (levenshtein(tok, kw) <= WAKE_FUZZY_MAX) {
        const end = m.index + m[0].length
        let start = m.index
        const before = text.slice(0, start).toLowerCase()
        const heyMatch = before.match(/hey[\s,]+$/)
        if (heyMatch) start -= heyMatch[0].length
        return (text.slice(0, start) + ' ' + text.slice(end))
          .replace(/^[\s,.!?]+/, '').replace(/\s+/g, ' ').trim()
      }
    }
  }
  return text.trim()
}

function floatToInt16(samples: Float32Array): Int16Array {
  const out = new Int16Array(samples.length)
  for (let i = 0; i < samples.length; i++) {
    const s = Math.max(-1, Math.min(1, samples[i]))
    out[i] = s < 0 ? s * 0x8000 : s * 0x7fff
  }
  return out
}

export type VoiceController = {
  start: () => Promise<void>
  stop: () => void
  destroy: () => void
  beginPushToTalk: () => void
  endPushToTalk: () => void
}

export function createVoiceController(): VoiceController {
  const store = useSession.getState
  let vad: MicVADInstance | null = null
  let started = false
  let muted = false
  // Push-to-talk: when true, the NEXT utterance the VAD emits is treated as
  // "open mic" (no wake-word check required). Set on keydown; reset on
  // consumption inside onSpeechEnd OR via a delayed clear after keyup so the
  // VAD tail (≈720ms) still benefits from the held key.
  let pttActive = false
  let pttClearTimer: ReturnType<typeof setTimeout> | null = null

  async function onUtterance(audio: Float32Array) {
    if (muted) {
      console.debug('[voice] utterance dropped (muted during thinking/speaking)')
      return
    }
    const ptt = pttActive
    pttActive = false  // consume
    if (pttClearTimer) { clearTimeout(pttClearTimer); pttClearTimer = null }

    const lang = store().language
    const seconds = (audio.length / 16000).toFixed(2)
    store().setState('thinking')
    const t0 = performance.now()
    const pcm = floatToInt16(audio)
    const r = await window.api.whisper.transcribe(pcm.buffer as ArrayBuffer)
    const dt = (performance.now() - t0).toFixed(0)

    if (!r.ok) {
      console.warn('[voice] transcribe failed in', dt, 'ms:', r.error)
      store().setState('listening')
      return
    }
    const cleaned = cleanWhisper(r.text)
    console.info(
      '[voice/utterance]', seconds, 's |', dt, 'ms |',
      `"${cleaned}"`, '| lang', lang, '| ptt', ptt
    )
    if (!cleaned) {
      store().setState('listening')
      return
    }

    let utterance: string
    if (ptt) {
      utterance = cleaned  // bypass wake check
    } else {
      const matched = matchesWake(cleaned, lang)
      if (!matched) {
        console.info('[voice] no wake word in transcript, dropping')
        store().setState('listening')
        return
      }
      utterance = stripWakePhrase(cleaned, lang).trim()
      if (utterance.length < CMD_MIN_UTTERANCE_CHARS) {
        console.info('[voice] wake only, no command, dropping')
        store().setState('listening')
        return
      }
    }

    console.info('[voice] →claude:', `"${utterance}"`)
    store().pushUserMessage(utterance)
    store().setCapturing('')
    window.api.claude.send({
      prompt: utterance,
      sessionId: store().sessionId
    })
  }

  async function start() {
    if (started) return
    started = true

    const avail = await window.api.whisper.available()
    if (!avail.available) {
      store().setError('Whisper not installed. Voice disabled. Use text input below.')
      return
    }

    try {
      const MicVAD = await loadVadBundle()
      vad = await MicVAD.new({
        positiveSpeechThreshold: 0.5,
        negativeSpeechThreshold: 0.35,
        redemptionMs: 750,
        minSpeechMs: 200,
        preSpeechPadMs: 250,
        onSpeechStart: () => {
          if (muted) return
          store().setState('capturing')
        },
        onSpeechEnd: (audio: Float32Array) => {
          void onUtterance(audio)
        },
        onVADMisfire: () => {
          if (store().state === 'capturing') store().setState('listening')
        }
      })
      await vad.start()
      store().setState('listening')
      console.info('[voice] MicVAD started')
    } catch (err) {
      const msg = (err as Error).message
      console.error('[voice] MicVAD init failed:', err)
      store().setError(`Voice init failed: ${msg}`)
    }
  }

  function stop() {
    muted = true
    try { vad?.pause() } catch {}
  }

  function destroy() {
    muted = true
    try { vad?.pause() } catch {}
    try { vad?.destroy() } catch {}
    vad = null
  }

  function beginPushToTalk() {
    if (pttClearTimer) { clearTimeout(pttClearTimer); pttClearTimer = null }
    pttActive = true
    console.info('[voice] PTT engaged — next utterance is open-mic')
  }

  function endPushToTalk() {
    // Don't clear immediately: VAD's silence-redemption tail (~720ms) may still
    // be running and consuming the utterance. Give it ~1.5s grace.
    if (pttClearTimer) clearTimeout(pttClearTimer)
    pttClearTimer = setTimeout(() => {
      pttActive = false
      pttClearTimer = null
    }, 1500)
  }

  // TTS lifecycle: mute mic while assistant is speaking (existing behavior).
  const offSpeaking = window.api.tts.onSpeaking(() => {
    muted = true
    store().setState('speaking')
  })
  const offEnd = window.api.tts.onEnd(() => {
    muted = false
    store().setState('listening')
  })

  // Full state-machine gate: mute on thinking/speaking, unmute on listening.
  // This is what prevents background noise during "thinking" from leaking into
  // another VAD-detected utterance before the assistant has even responded.
  let prevAppState = store().state
  const unsubState = useSession.subscribe(s => {
    if (s.state === prevAppState) return
    prevAppState = s.state
    if (s.state === 'thinking' || s.state === 'speaking') {
      muted = true
    } else if (s.state === 'listening') {
      muted = false
    }
  })

  const originalDestroy = destroy
  function fullDestroy() {
    offSpeaking()
    offEnd()
    unsubState()
    if (pttClearTimer) { clearTimeout(pttClearTimer); pttClearTimer = null }
    originalDestroy()
  }

  return {
    start,
    stop,
    destroy: fullDestroy,
    beginPushToTalk,
    endPushToTalk
  }
}
