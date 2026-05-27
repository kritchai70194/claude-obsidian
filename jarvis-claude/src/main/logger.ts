import { app } from 'electron'
import { mkdirSync, createWriteStream, WriteStream } from 'node:fs'
import { join } from 'node:path'

const streams = new Map<string, WriteStream>()

function logDir(): string {
  const base = app.getPath('userData')
  const dir = join(base, 'sessions')
  mkdirSync(dir, { recursive: true })
  return dir
}

export function appendSessionEvent(sessionId: string, event: unknown) {
  const date = new Date().toISOString().slice(0, 10)
  const key = `${date}-${sessionId}`
  let stream = streams.get(key)
  if (!stream) {
    const path = join(logDir(), `${key}.jsonl`)
    stream = createWriteStream(path, { flags: 'a', encoding: 'utf8' })
    streams.set(key, stream)
  }
  stream.write(JSON.stringify(event) + '\n')
}

export function closeAllStreams() {
  for (const s of streams.values()) s.end()
  streams.clear()
}
