import { spawn, ChildProcess } from 'node:child_process'
import { SAY_BIN } from './paths'

let current: ChildProcess | null = null

export function speak(text: string, voice = 'Daniel', onEnd?: () => void) {
  if (current) {
    try { current.kill() } catch {}
    current = null
  }
  if (!text.trim()) {
    onEnd?.()
    return
  }
  current = spawn(SAY_BIN, ['-v', voice, text])
  current.on('exit', () => {
    current = null
    onEnd?.()
  })
  current.on('error', err => {
    console.error('[tts] say error:', err)
    current = null
    onEnd?.()
  })
}

export function stopSpeaking() {
  if (current) {
    try { current.kill() } catch {}
    current = null
  }
}

export function isSpeaking() {
  return current !== null
}
