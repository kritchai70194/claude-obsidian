import React, { useEffect, useRef, useState, KeyboardEvent } from 'react'
import { ArcReactor } from './scene/ArcReactor'
import { ChatPanel } from './panels/ChatPanel'
import { ToolCallPanel } from './panels/ToolCallPanel'
import { StatusPanel } from './panels/StatusPanel'
import { Visualizer } from './audio/Visualizer'
import { useSession } from './store/session'
import { createVoiceController, VoiceController } from './audio/voice'
import type { Lang } from '../shared/types'

export default function App() {
  const applyEvent = useSession(s => s.applyEvent)
  const language = useSession(s => s.language)
  const startedVoice = useRef(false)
  const ctrlRef = useRef<VoiceController | null>(null)

  useEffect(() => {
    const off = window.api.claude.onEvent(applyEvent)
    return off
  }, [applyEvent])

  // Push the current language to the main process whenever it changes
  // (including initial mount, so the choice from localStorage takes effect).
  useEffect(() => {
    window.api.lang.set(language)
  }, [language])

  useEffect(() => {
    if (startedVoice.current) return
    startedVoice.current = true
    const ctrl = createVoiceController()
    ctrlRef.current = ctrl
    ctrl.start()
    return () => {
      ctrlRef.current = null
      ctrl.destroy()
    }
  }, [])

  // Push-to-talk: hold Space (window focus, not in text input) to capture command directly.
  useEffect(() => {
    function isTypingTarget(el: EventTarget | null): boolean {
      if (!(el instanceof HTMLElement)) return false
      const tag = el.tagName
      if (tag === 'TEXTAREA' || tag === 'INPUT') return true
      if (el.isContentEditable) return true
      return false
    }
    function onKeyDown(e: KeyboardEvent | globalThis.KeyboardEvent) {
      if (e.code !== 'Space' || e.repeat) return
      if (isTypingTarget(e.target)) return
      e.preventDefault()
      ctrlRef.current?.beginPushToTalk()
    }
    function onKeyUp(e: KeyboardEvent | globalThis.KeyboardEvent) {
      if (e.code !== 'Space') return
      if (isTypingTarget(e.target)) return
      e.preventDefault()
      ctrlRef.current?.endPushToTalk()
    }
    window.addEventListener('keydown', onKeyDown as EventListener)
    window.addEventListener('keyup', onKeyUp as EventListener)
    return () => {
      window.removeEventListener('keydown', onKeyDown as EventListener)
      window.removeEventListener('keyup', onKeyUp as EventListener)
    }
  }, [])

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background:
          'radial-gradient(ellipse at center, rgba(10, 22, 40, 0.85) 0%, rgba(5, 11, 22, 0.95) 100%)'
      }}
    >
      <ArcReactor />
      <Visualizer />
      <StatusPanel />
      <LanguageToggle />
      <ChatPanel />
      <ToolCallPanel />
      <PromptInput />
      <PushToTalkHint />
    </div>
  )
}

function LanguageToggle() {
  const language = useSession(s => s.language)
  const setLanguage = useSession(s => s.setLanguage)
  const choices: { id: Lang; label: string }[] = [
    { id: 'en', label: 'EN' },
    { id: 'th', label: 'TH' }
  ]
  return (
    <div
      className="no-drag"
      style={{
        position: 'absolute',
        top: 24,
        right: 24,
        display: 'flex',
        gap: 4,
        padding: 4,
        background: 'rgba(10, 22, 40, 0.55)',
        backdropFilter: 'blur(14px) saturate(150%)',
        WebkitBackdropFilter: 'blur(14px) saturate(150%)',
        border: '1px solid rgba(0, 212, 255, 0.3)',
        borderRadius: 999,
        boxShadow: '0 0 20px rgba(0, 212, 255, 0.12)'
      }}
    >
      {choices.map(c => {
        const active = language === c.id
        return (
          <button
            key={c.id}
            onClick={() => setLanguage(c.id)}
            style={{
              padding: '6px 14px',
              minWidth: 44,
              background: active ? 'rgba(0, 212, 255, 0.22)' : 'transparent',
              color: active ? '#dff5ff' : 'rgba(207, 232, 255, 0.55)',
              border: 'none',
              borderRadius: 999,
              cursor: 'pointer',
              fontSize: 11,
              letterSpacing: 1.5,
              fontWeight: 600,
              transition: 'all 120ms ease-out'
            }}
          >
            {c.label}
          </button>
        )
      })}
    </div>
  )
}

function PushToTalkHint() {
  const state = useSession(s => s.state)
  const active = state === 'capturing'
  return (
    <div
      style={{
        position: 'absolute',
        left: 24,
        bottom: 24,
        padding: '6px 12px',
        background: active
          ? 'rgba(0, 212, 255, 0.18)'
          : 'rgba(10, 22, 40, 0.45)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        border: `1px solid rgba(0, 212, 255, ${active ? 0.6 : 0.25})`,
        borderRadius: 8,
        color: active ? '#dff5ff' : 'rgba(207, 232, 255, 0.55)',
        fontSize: 11,
        letterSpacing: 1,
        textTransform: 'uppercase',
        pointerEvents: 'none',
        userSelect: 'none',
        transition: 'all 120ms ease-out'
      }}
    >
      {active ? '● Listening (release Space to send)' : 'Hold Space to talk'}
    </div>
  )
}

function PromptInput() {
  const [text, setText] = useState('')
  const sessionId = useSession(s => s.sessionId)
  const pushUser = useSession(s => s.pushUserMessage)
  const setState = useSession(s => s.setState)
  const state = useSession(s => s.state)
  const busy = state === 'thinking' || state === 'speaking'

  function submit() {
    const prompt = text.trim()
    if (!prompt || busy) return
    pushUser(prompt)
    setState('thinking')
    window.api.claude.send({ prompt, sessionId })
    setText('')
  }

  function onKeyDown(e: KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      submit()
    }
  }

  return (
    <div
      className="no-drag"
      style={{
        position: 'absolute',
        left: '50%',
        bottom: 32,
        transform: 'translateX(-50%)',
        width: 'min(720px, calc(100% - 48px))',
        display: 'flex',
        gap: 12,
        alignItems: 'flex-end',
        padding: '14px 18px',
        background: 'rgba(10, 22, 40, 0.55)',
        backdropFilter: 'blur(20px) saturate(150%)',
        WebkitBackdropFilter: 'blur(20px) saturate(150%)',
        border: '1px solid rgba(0, 212, 255, 0.35)',
        borderRadius: 14,
        boxShadow:
          '0 0 40px rgba(0, 212, 255, 0.18), inset 0 0 24px rgba(0, 212, 255, 0.06)'
      }}
    >
      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
        onKeyDown={onKeyDown}
        placeholder={
          busy
            ? 'Working...'
            : 'Type a command or press Fn-Fn for macOS Dictation. Enter to send.'
        }
        disabled={busy}
        rows={1}
        style={{
          flex: 1,
          resize: 'none',
          background: 'transparent',
          border: 'none',
          outline: 'none',
          color: '#cfe8ff',
          fontSize: 14,
          fontFamily: 'system-ui, -apple-system, sans-serif',
          lineHeight: 1.5,
          minHeight: 22,
          maxHeight: 120,
          opacity: busy ? 0.5 : 1
        }}
      />
      <button
        onClick={submit}
        disabled={busy || !text.trim()}
        style={{
          padding: '8px 16px',
          background:
            busy || !text.trim()
              ? 'rgba(0, 212, 255, 0.05)'
              : 'rgba(0, 212, 255, 0.18)',
          color: busy || !text.trim() ? 'rgba(207, 232, 255, 0.4)' : '#cfe8ff',
          border: '1px solid rgba(0, 212, 255, 0.5)',
          borderRadius: 8,
          cursor: busy || !text.trim() ? 'not-allowed' : 'pointer',
          fontSize: 12,
          letterSpacing: 1,
          textTransform: 'uppercase',
          fontWeight: 500
        }}
      >
        Send
      </button>
    </div>
  )
}
