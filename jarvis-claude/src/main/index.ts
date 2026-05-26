import { app, BrowserWindow, ipcMain, session } from 'electron'
import { join } from 'node:path'
import { ChildProcess } from 'node:child_process'
import { sendPrompt } from './claude-bridge'
import { speak, stopSpeaking } from './tts'
import { appendSessionEvent, closeAllStreams } from './logger'
import { IPC, SendArgs } from '../shared/types'

let mainWindow: BrowserWindow | null = null
let activeChild: ChildProcess | null = null

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
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }
}

function killActive() {
  if (activeChild && !activeChild.killed) {
    activeChild.kill('SIGTERM')
  }
  activeChild = null
}

app.whenReady().then(() => {
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
    speak(text, 'Daniel', () => sender?.send(IPC.TtsEnd))
    return { ok: true }
  })

  ipcMain.handle(IPC.TtsStop, () => {
    stopSpeaking()
    mainWindow?.webContents.send(IPC.TtsEnd)
    return { ok: true }
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
