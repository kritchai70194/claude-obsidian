import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSession, type ToolCard } from '../store/session'

const panel: React.CSSProperties = {
  position: 'absolute',
  left: 24,
  bottom: 24,
  width: 360,
  maxHeight: 320,
  padding: 14,
  background: 'rgba(10, 22, 40, 0.45)',
  backdropFilter: 'blur(20px) saturate(150%)',
  WebkitBackdropFilter: 'blur(20px) saturate(150%)',
  border: '1px solid rgba(255, 170, 0, 0.3)',
  borderRadius: 16,
  boxShadow:
    '0 0 32px rgba(255, 170, 0, 0.18), inset 0 0 16px rgba(255, 170, 0, 0.05)',
  overflowY: 'auto',
  color: '#ffe2b3'
}

function summarizeInput(input: unknown): string {
  if (input == null) return ''
  try {
    const s = typeof input === 'string' ? input : JSON.stringify(input)
    return s.length > 120 ? s.slice(0, 117) + '…' : s
  } catch {
    return String(input)
  }
}

function Card({ tool }: { tool: ToolCard }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: tool.done ? 0.45 : 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      onClick={() => setOpen(o => !o)}
      style={{
        margin: '8px 0',
        padding: '10px 12px',
        borderRadius: 10,
        background: tool.done
          ? 'rgba(255, 170, 0, 0.05)'
          : 'rgba(255, 170, 0, 0.10)',
        border: '1px solid rgba(255, 170, 0, 0.3)',
        cursor: 'pointer',
        fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
        fontSize: 12
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span style={{ color: '#ffaa00', fontWeight: 600 }}>{tool.name}</span>
        <span style={{ opacity: 0.7 }}>{tool.done ? '✓' : '…'}</span>
      </div>
      <div style={{ marginTop: 4, opacity: 0.85 }}>
        {open ? (
          <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
            {JSON.stringify(tool.input, null, 2)}
          </pre>
        ) : (
          <span>{summarizeInput(tool.input)}</span>
        )}
      </div>
    </motion.div>
  )
}

export function ToolCallPanel() {
  const tools = useSession(s => s.tools)
  if (tools.length === 0) return null
  return (
    <div style={panel} className="no-drag">
      <div
        style={{
          fontSize: 11,
          textTransform: 'uppercase',
          letterSpacing: 1.5,
          color: '#ffaa00',
          marginBottom: 6
        }}
      >
        Tool Calls
      </div>
      <AnimatePresence initial={false}>
        {tools.map(t => (
          <Card key={t.id} tool={t} />
        ))}
      </AnimatePresence>
    </div>
  )
}
