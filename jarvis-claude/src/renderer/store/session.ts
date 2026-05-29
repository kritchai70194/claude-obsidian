import { create } from 'zustand'
import type {
  ClaudeEvent,
  StreamEventWrapper,
  AssistantEvent,
  ResultEvent,
  SystemInitEvent,
  ContentBlock,
  Lang
} from '../../shared/types'

export type AppState =
  | 'idle'
  | 'listening'
  | 'capturing'
  | 'thinking'
  | 'speaking'

const LANG_KEY = 'jarvis.language'
function loadLang(): Lang {
  try {
    const v = localStorage.getItem(LANG_KEY)
    if (v === 'th' || v === 'en') return v
  } catch {}
  return 'en'
}
function saveLang(lang: Lang) {
  try { localStorage.setItem(LANG_KEY, lang) } catch {}
}

export type ChatBubble = {
  id: string
  role: 'user' | 'assistant'
  text: string
  streaming?: boolean
}

export type ToolCard = {
  id: string
  name: string
  input: unknown
  done: boolean
}

type SessionState = {
  state: AppState
  sessionId: string | null
  model: string | null
  totalCostUsd: number
  messages: ChatBubble[]
  tools: ToolCard[]
  capturingTranscript: string
  errorBanner: string | null
  language: Lang

  setState: (s: AppState) => void
  setCapturing: (t: string) => void
  setError: (msg: string | null) => void
  setLanguage: (l: Lang) => void
  pushUserMessage: (text: string) => void
  applyEvent: (evt: ClaudeEvent) => void
  reset: () => void
}

let assistantSeq = 0

function newAssistantBubble(): ChatBubble {
  return {
    id: `assistant-${Date.now()}-${assistantSeq++}`,
    role: 'assistant',
    text: '',
    streaming: true
  }
}

function extractAssistantText(blocks: ContentBlock[]): string {
  return blocks
    .filter((b): b is Extract<ContentBlock, { type: 'text' }> => b.type === 'text')
    .map(b => b.text)
    .join('')
}

export const useSession = create<SessionState>((set, get) => ({
  state: 'idle',
  sessionId: null,
  model: null,
  totalCostUsd: 0,
  messages: [],
  tools: [],
  capturingTranscript: '',
  errorBanner: null,
  language: loadLang(),

  setState: s => set({ state: s }),
  setCapturing: t => set({ capturingTranscript: t }),
  setError: msg => set({ errorBanner: msg }),
  setLanguage: l => { saveLang(l); set({ language: l }) },

  pushUserMessage: text =>
    set(s => ({
      messages: [
        ...s.messages,
        { id: `user-${Date.now()}`, role: 'user', text },
        newAssistantBubble()
      ]
    })),

  applyEvent: evt => {
    if (!evt || typeof evt !== 'object' || !('type' in evt)) return
    const t = (evt as { type: string }).type

    if (t === 'system') {
      const sys = evt as SystemInitEvent
      if (sys.subtype === 'init') {
        set({
          sessionId: sys.session_id,
          model: sys.model,
          state: 'thinking'
        })
      }
      return
    }

    if (t === 'stream_event') {
      const wrapper = evt as StreamEventWrapper
      const inner = wrapper.event
      if (inner.type === 'content_block_start') {
        const cb = inner.content_block
        if (cb.type === 'tool_use') {
          set(s => ({
            tools: [
              ...s.tools,
              { id: cb.id, name: cb.name, input: cb.input, done: false }
            ]
          }))
        }
      } else if (inner.type === 'content_block_delta') {
        if (inner.delta.type === 'text_delta') {
          const chunk = inner.delta.text
          set(s => {
            const msgs = s.messages.slice()
            let last = msgs[msgs.length - 1]
            if (!last || last.role !== 'assistant') {
              last = newAssistantBubble()
              msgs.push(last)
            } else {
              last = { ...last, text: last.text + chunk }
              msgs[msgs.length - 1] = last
            }
            return { messages: msgs }
          })
        }
      } else if (inner.type === 'message_stop') {
        set(s => {
          const msgs = s.messages.slice()
          const last = msgs[msgs.length - 1]
          if (last && last.role === 'assistant') {
            msgs[msgs.length - 1] = { ...last, streaming: false }
          }
          return { messages: msgs }
        })
      }
      return
    }

    if (t === 'assistant') {
      const a = evt as AssistantEvent
      const text = extractAssistantText(a.message.content)
      if (text) {
        set(s => {
          const msgs = s.messages.slice()
          const last = msgs[msgs.length - 1]
          if (last && last.role === 'assistant' && (!last.text || last.text.length < text.length)) {
            msgs[msgs.length - 1] = { ...last, text, streaming: false }
          }
          return { messages: msgs }
        })
      }
      const toolResultIds = new Set<string>()
      for (const b of a.message.content) {
        if (b.type === 'tool_use') toolResultIds.add(b.id)
      }
      return
    }

    if (t === 'user') {
      const u = evt as { message: { content: ContentBlock[] } }
      const completed = new Set<string>()
      for (const b of u.message.content) {
        if (b.type === 'tool_result') completed.add(b.tool_use_id)
      }
      if (completed.size > 0) {
        set(s => ({
          tools: s.tools.map(c => completed.has(c.id) ? { ...c, done: true } : c)
        }))
      }
      return
    }

    if (t === 'result') {
      const r = evt as ResultEvent
      set(s => ({
        sessionId: r.session_id,
        totalCostUsd: s.totalCostUsd + (r.total_cost_usd ?? 0),
        state: 'speaking'
      }))
      const speakText = r.result?.trim()
      if (speakText) {
        window.api.tts.speak(speakText)
      } else {
        set({ state: 'listening' })
      }
      return
    }
  },

  reset: () =>
    set({
      state: 'idle',
      messages: [],
      tools: [],
      capturingTranscript: '',
      errorBanner: null
    })
}))
