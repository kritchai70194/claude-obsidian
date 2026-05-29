import { spawn } from 'node:child_process'
import { writeFile, mkdtemp, rm } from 'node:fs/promises'
import { join, dirname } from 'node:path'
import { tmpdir } from 'node:os'
import { existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

function resolveWhisperPaths(): { bin: string; model: string } | null {
  // Production .app: node_modules is NOT bundled in asar (electron-builder
  // ships only `out/**` and `package.json`), so the only reliable lookup is
  // the absolute path to the dev tree on this Mac. Try the absolute fallback
  // FIRST so we never hit asar-magic false positives where existsSync returns
  // truthy on a path inside the asar that can't actually be spawned.
  // Dev mode: process.cwd() is the project root, so candidate 2 still works.
  const candidates = [
    '/Users/simon/claude-obsidian/jarvis-claude/node_modules/nodejs-whisper/cpp/whisper.cpp',
    join(process.cwd(), 'node_modules/nodejs-whisper/cpp/whisper.cpp'),
    join(__dirname, '../../node_modules/nodejs-whisper/cpp/whisper.cpp'),
    join(__dirname, '../../../node_modules/nodejs-whisper/cpp/whisper.cpp')
  ]
  // Prefer multilingual small (supports Thai + English), fall back to English-only models
  const modelPriority = [
    'ggml-small.bin',
    'ggml-base.bin',
    'ggml-base.en.bin',
    'ggml-tiny.en.bin'
  ]
  for (const base of candidates) {
    const bin = join(base, 'build/bin/whisper-cli')
    if (!existsSync(bin)) continue
    for (const m of modelPriority) {
      const model = join(base, 'models', m)
      if (existsSync(model)) return { bin, model }
    }
  }
  return null
}

const paths = resolveWhisperPaths()

// Surface resolved paths in main-process logs so the renderer can show the
// user what went wrong if whisper is unavailable in production.
if (paths) {
  console.log('[whisper] resolved bin:', paths.bin)
  console.log('[whisper] resolved model:', paths.model)
} else {
  console.error('[whisper] no whisper.cpp build found. Check that nodejs-whisper is installed and whisper-cli + ggml-small.bin exist under node_modules/nodejs-whisper/cpp/whisper.cpp/')
}

export const WHISPER_AVAILABLE = paths !== null

function wavHeader(pcmLen: number): Buffer {
  const buf = Buffer.alloc(44)
  buf.write('RIFF', 0)
  buf.writeUInt32LE(36 + pcmLen, 4)
  buf.write('WAVE', 8)
  buf.write('fmt ', 12)
  buf.writeUInt32LE(16, 16)
  buf.writeUInt16LE(1, 20)
  buf.writeUInt16LE(1, 22)
  buf.writeUInt32LE(16000, 24)
  buf.writeUInt32LE(16000 * 2, 28)
  buf.writeUInt16LE(2, 32)
  buf.writeUInt16LE(16, 34)
  buf.write('data', 36)
  buf.writeUInt32LE(pcmLen, 40)
  return buf
}

function parseWhisperOutput(stdout: string): string {
  return stdout
    .split('\n')
    .map(line => {
      const m = line.match(/\][^\]]*?\s+(.+)$/)
      return m ? m[1].trim() : ''
    })
    .filter(Boolean)
    .join(' ')
    .trim()
}

export type TranscribeOpts = {
  language?: 'en' | 'th'
}

export async function transcribe(
  pcm16: Int16Array,
  opts: TranscribeOpts = {}
): Promise<string> {
  if (!paths) throw new Error('whisper not installed')
  const dir = await mkdtemp(join(tmpdir(), 'jarvis-whisper-'))
  const wavPath = join(dir, 'audio.wav')
  try {
    const pcmBuf = Buffer.from(pcm16.buffer, pcm16.byteOffset, pcm16.byteLength)
    const header = wavHeader(pcmBuf.length)
    await writeFile(wavPath, Buffer.concat([header, pcmBuf]))

    const isMultilingual = !paths.model.endsWith('.en.bin')
    const lang = opts.language ?? 'en'
    const text = await new Promise<string>((resolve, reject) => {
      // No --prompt anymore: the renderer-side VAD ensures we only ever see
      // clean utterance audio, so we don't need wake-word biasing. The prompt
      // was the cause of the silence/noise echo class of hallucinations.
      const args = [
        '-m', paths.model,
        '-f', wavPath,
        '--no-prints',
        '--threads', '8',
        '--no-fallback',
        '--no-speech-thold', '0.8',
        '--logprob-thold', '-0.7'
      ]
      if (isMultilingual) {
        args.push('--language', lang)
      }
      // Explicit cwd: when Jarvis.app is launched via Finder, process.cwd()
      // can be the asar archive file (not a real directory), which makes
      // spawn() fail with ENOTDIR even when the binary path is correct.
      let child
      try {
        child = spawn(paths.bin, args, { cwd: dir })
      } catch (spawnErr) {
        console.error('[whisper] spawn threw synchronously:', spawnErr, 'bin=', paths.bin, 'cwd=', dir)
        throw spawnErr
      }
      let stdout = ''
      let stderr = ''
      child.stdout.on('data', d => { stdout += d.toString('utf8') })
      child.stderr.on('data', d => { stderr += d.toString('utf8') })
      child.on('error', (err) => {
        console.error('[whisper] child error event:', err, 'bin=', paths.bin, 'cwd=', dir, 'wav=', wavPath)
        reject(err)
      })
      child.on('exit', code => {
        if (code !== 0) {
          reject(new Error(`whisper exit ${code}: ${stderr.slice(0, 200)}`))
          return
        }
        resolve(parseWhisperOutput(stdout))
      })
    })
    return text
  } finally {
    rm(dir, { recursive: true, force: true }).catch(() => {})
  }
}
