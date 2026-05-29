import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron'
import { IPC, ClaudeEvent, SendArgs, Lang } from '../shared/types'

type Unsub = () => void

const api = {
  claude: {
    send: (args: SendArgs) => ipcRenderer.invoke(IPC.ClaudeSend, args),
    abort: () => ipcRenderer.invoke(IPC.ClaudeAbort),
    onEvent: (cb: (evt: ClaudeEvent) => void): Unsub => {
      const listener = (_e: IpcRendererEvent, evt: ClaudeEvent) => cb(evt)
      ipcRenderer.on(IPC.ClaudeEvent, listener)
      return () => ipcRenderer.off(IPC.ClaudeEvent, listener)
    }
  },
  tts: {
    speak: (text: string) => ipcRenderer.invoke(IPC.TtsSpeak, text),
    stop: () => ipcRenderer.invoke(IPC.TtsStop),
    onSpeaking: (cb: () => void): Unsub => {
      const listener = () => cb()
      ipcRenderer.on(IPC.TtsSpeaking, listener)
      return () => ipcRenderer.off(IPC.TtsSpeaking, listener)
    },
    onEnd: (cb: () => void): Unsub => {
      const listener = () => cb()
      ipcRenderer.on(IPC.TtsEnd, listener)
      return () => ipcRenderer.off(IPC.TtsEnd, listener)
    }
  },
  whisper: {
    available: (): Promise<{ available: boolean }> =>
      ipcRenderer.invoke(IPC.WhisperAvailable),
    transcribe: (
      pcm: ArrayBuffer
    ): Promise<{ ok: true; text: string } | { ok: false; error: string }> =>
      ipcRenderer.invoke(IPC.WhisperTranscribe, pcm)
  },
  lang: {
    set: (lang: Lang): Promise<{ ok: true }> =>
      ipcRenderer.invoke(IPC.LangSet, lang)
  }
}

export type JarvisAPI = typeof api

contextBridge.exposeInMainWorld('api', api)
