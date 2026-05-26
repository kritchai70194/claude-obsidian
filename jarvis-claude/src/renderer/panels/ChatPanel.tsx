import React, { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSession, type ChatBubble } from '../store/session'

const glass: React.CSSProperties = {
  position: 'absolute',
  right: 24,
  top: 80,
  bottom: 24,
  width: 420,
  padding: 16,
  background: 'rgba(10, 22, 40, 0.45)',
  backdropFilter: 'blur(20px) saturate(150%)',
  WebkitBackdropFilter: 'blur(20px) saturate(150%)',
  border: '1px solid rgba(0, 212, 255, 0.3)',
  borderRadius: 18,
  boxShadow:
    '0 0 40px rgba(0, 212, 255, 0.2), inset 0 0 20px rgba(0, 212, 255, 0.05)',
  overflowY: 'auto',
  color: '#cfe8ff'
}

function bubbleStyle(b: ChatBubble): React.CSSProperties {
  return {
    margin: '10px 0',
    padding: '10px 14px',
    borderRadius: 14,
    background:
      b.role === 'user'
        ? 'rgba(0, 212, 255, 0.10)'
        : 'rgba(74, 158, 255, 0.06)',
    border:
      b.role === 'user'
        ? '1px solid rgba(0, 212, 255, 0.35)'
        : '1px solid rgba(74, 158, 255, 0.25)',
    fontSize: 14,
    lineHeight: 1.45,
    transformOrigin: 'right center'
  }
}

export function ChatPanel() {
  const messages = useSession(s => s.messages)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) ref.current.scrollTop = ref.current.scrollHeight
  }, [messages])

  return (
    <motion.div
      ref={ref}
      style={glass}
      className="no-drag"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
    >
      <AnimatePresence initial={false}>
        {messages.map((m, i) => {
          const latest = i >= messages.length - 2
          return (
            <motion.div
              key={m.id}
              style={bubbleStyle(m)}
              initial={{ opacity: 0, y: 8, scale: 0.95 }}
              animate={{ opacity: latest ? 1 : 0.6, y: 0, scale: latest ? 1.03 : 0.92 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <div
                style={{
                  fontSize: 11,
                  textTransform: 'uppercase',
                  letterSpacing: 1.5,
                  color: m.role === 'user' ? '#00d4ff' : '#4a9eff',
                  marginBottom: 4
                }}
              >
                {m.role}
                {m.streaming ? ' …' : ''}
              </div>
              <div style={{ whiteSpace: 'pre-wrap' }}>{m.text || ' '}</div>
            </motion.div>
          )
        })}
      </AnimatePresence>
    </motion.div>
  )
}
