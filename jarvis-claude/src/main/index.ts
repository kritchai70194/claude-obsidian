import { app, BrowserWindow, ipcMain, session, protocol, net } from 'electron'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'
import { ChildProcess } from 'node:child_process'

// Register custom `app://` scheme BEFORE app is ready.
// Production loads the renderer through this scheme so that root-absolute paths
// (`/vad.bundle.min.js`, `/silero_vad_v5.onnx`, `/ort-wasm-simd-threaded.wasm`)
// resolve to the asar bundle instead of the OS filesystem root, which is what
// `file://` would do.
protocol.registerSchemesAsPrivileged([
  {
    scheme: 'app',
    privileges: {
      standard: true,
      secure: true,
      supportFetchAPI: true,
      stream: true,
      corsEnabled: true
    }
  }
])
import { sendPrompt } from './claude-bridge'
import { speak, stopSpeaking } from './tts'
import { appendSessionEvent, closeAllStreams } from './logger'
import { transcribe, WHISPER_AVAILABLE } from './whisper'
import { IPC, SendArgs, Lang } from '../shared/types'

let mainWindow: BrowserWindow | null = null
let activeChild: ChildProcess | null = null
let currentLang: Lang = 'en'

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    frame: false,
    transparent: true,
    vibrancy: 'under-window',
    backgroundColor: '#00000000',
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: false
    }
  })

  if (process.env.ELECTRON_RENDERER_URL) {
    mainWindow.loadURL(process.env.ELECTRON_RENDERER_URL)
    mainWindow.webContents.openDevTools({ mode: 'detach' })
  } else {
    // Production: load through the custom `app://` protocol so absolute asset
    // paths used by VAD / ONNX Runtime resolve against the asar bundle.
    mainWindow.loadURL('app://./index.html')
  }
}

function killActive() {
  if (activeChild && !activeChild.killed) {
    activeChild.kill('SIGTERM')
  }
  activeChild = null
}

app.whenReady().then(() => {
  // Resolve `app://./<path>` to the renderer directory packaged inside asar.
  // `app://./index.html` → `<asar>/renderer/index.html`,
  // `app://./vad.bundle.min.js` → `<asar>/renderer/vad.bundle.min.js`, etc.
  protocol.handle('app', (request) => {
    const url = new URL(request.url)
    const filePath = join(__dirname, '../renderer', url.pathname)
    return net.fetch(pathToFileURL(filePath).toString())
  })

  session.defaultSession.setPermissionRequestHandler((_wc, permission, cb) => {
    cb(permission === 'media' || permission === 'mediaKeySystem')
  })

  ipcMain.handle(IPC.ClaudeSend, async (_e, { prompt, sessionId, model }: SendArgs) => {
    killActive()
    const sender = mainWindow?.webContents
    if (!sender) return { ok: false, error: 'no window' }

    activeChild = sendPrompt(prompt, sessionId ?? null, evt => {
      const e = evt as { session_id?: string }
      if (e.session_id) appendSessionEvent(e.session_id, evt)
      sender.send(IPC.ClaudeEvent, evt)
    }, { model })

    const child = activeChild
    return new Promise<{ ok: boolean; code: number | null }>(resolve => {
      child.on('exit', code => {
        if (activeChild === child) activeChild = null
        resolve({ ok: code === 0, code })
      })
    })
  })

  ipcMain.handle(IPC.ClaudeAbort, () => {
    killActive()
    stopSpeaking()
    return { ok: true }
  })

  ipcMain.handle(IPC.TtsSpeak, (_e, text: string) => {
    const sender = mainWindow?.webContents
    sender?.send(IPC.TtsSpeaking)
    const voice = currentLang === 'th' ? 'Kanya' : 'Daniel'
    speak(text, voice, () => sender?.send(IPC.TtsEnd))
    return { ok: true }
  })

  ipcMain.handle(IPC.TtsStop, () => {
    stopSpeaking()
    mainWindow?.webContents.send(IPC.TtsEnd)
    return { ok: true }
  })

  ipcMain.handle(IPC.WhisperAvailable, () => ({ available: WHISPER_AVAILABLE }))

  ipcMain.handle(IPC.WhisperTranscribe, async (_e, pcm: ArrayBuffer) => {
    try {
      const text = await transcribe(new Int16Array(pcm), { language: currentLang })
      return { ok: true, text }
    } catch (err) {
      return { ok: false, error: (err as Error).message }
    }
  })

  ipcMain.handle(IPC.LangSet, (_e, lang: Lang) => {
    if (lang === 'en' || lang === 'th') {
      currentLang = lang
      console.log('[lang] set to', lang)
      return { ok: true }
    }
    return { ok: false }
  })

  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  killActive()
  closeAllStreams()
  if (process.platform !== 'darwin') app.quit()
})

app.on('before-quit', () => {
  killActive()
  closeAllStreams()
})
