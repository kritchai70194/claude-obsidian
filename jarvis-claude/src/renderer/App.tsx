import React, { useEffect, useRef } from 'react'
import { ArcReactor } from './scene/ArcReactor'
import { ChatPanel } from './panels/ChatPanel'
import { ToolCallPanel } from './panels/ToolCallPanel'
import { StatusPanel } from './panels/StatusPanel'
import { Visualizer } from './audio/Visualizer'
import { useSession } from './store/session'
import { createVoiceController } from './audio/voice'

export default function App() {
  const applyEvent = useSession(s => s.applyEvent)
  const startedVoice = useRef(false)

  useEffect(() => {
    const off = window.api.claude.onEvent(applyEvent)
    return off
  }, [applyEvent])

  useEffect(() => {
    if (startedVoice.current) return
    startedVoice.current = true
    const ctrl = createVoiceController()
    ctrl.start()
    return () => ctrl.destroy()
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
      <ChatPanel />
      <ToolCallPanel />
      <DebugSendButton />
    </div>
  )
}

function DebugSendButton() {
  const sessionId = useSession(s => s.sessionId)
  const pushUser = useSession(s => s.pushUserMessage)
  const setState = useSession(s => s.setState)
  return (
    <button
      className="no-drag"
      onClick={() => {
        const prompt = 'say hello in five words'
        pushUser(prompt)
        setState('thinking')
        window.api.claude.send({ prompt, sessionId })
      }}
      style={{
        position: 'absolute',
        left: 24,
        top: 80,
        padding: '8px 14px',
        background: 'rgba(0, 212, 255, 0.10)',
        color: '#cfe8ff',
        border: '1px solid rgba(0, 212, 255, 0.4)',
        borderRadius: 8,
        cursor: 'pointer',
        fontSize: 12,
        letterSpacing: 1,
        textTransform: 'uppercase'
      }}
    >
      Test send
    </button>
  )
}
