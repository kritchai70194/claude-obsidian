import { spawn, ChildProcess } from 'node:child_process'
import { CLAUDE_BIN } from './paths'

type EventHandler = (event: unknown) => void

export function sendPrompt(
  prompt: string,
  sessionId: string | null,
  onEvent: EventHandler,
  opts: { model?: string } = {}
): ChildProcess {
  const args = [
    '-p',
    '--output-format', 'stream-json',
    '--verbose',
    '--include-partial-messages'
  ]
  if (opts.model) args.push('--model', opts.model)
  if (sessionId) args.push('--resume', sessionId)
  args.push(prompt)

  const child = spawn(CLAUDE_BIN, args, { env: process.env })

  let buf = ''
  child.stdout.on('data', (chunk: Buffer) => {
    buf += chunk.toString('utf8')
    let nl: number
    while ((nl = buf.indexOf('\n')) >= 0) {
      const line = buf.slice(0, nl)
      buf = buf.slice(nl + 1)
      if (!line.trim()) continue
      try {
        onEvent(JSON.parse(line))
      } catch (err) {
        console.error('[claude-bridge] failed to parse line:', line.slice(0, 200), err)
      }
    }
  })

  child.stderr.on('data', (d: Buffer) => {
    console.error('[claude]', d.toString('utf8'))
  })

  child.on('error', err => {
    console.error('[claude-bridge] spawn error:', err)
  })

  return child
}
