import React from 'react'
import { useSession, type AppState } from '../store/session'

const bar: React.CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  height: 56,
  padding: '0 18px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  color: '#cfe8ff',
  fontSize: 12,
  letterSpacing: 1,
  textTransform: 'uppercase'
}

function dotColor(state: AppState): string {
  switch (state) {
    case 'listening': return '#00d4ff'
    case 'capturing': return '#00d4ff'
    case 'thinking': return '#ffaa00'
    case 'speaking': return '#4a9eff'
    default: return '#3a4a5e'
  }
}

function dotGlow(state: AppState): string {
  if (state === 'speaking' || state === 'thinking') {
    return `0 0 16px ${dotColor(state)}`
  }
  if (state === 'capturing') return `0 0 22px ${dotColor(state)}`
  if (state === 'listening') return `0 0 10px ${dotColor(state)}`
  return 'none'
}

export function StatusPanel() {
  const { state, sessionId, model, totalCostUsd, errorBanner } = useSession()

  return (
    <div style={bar} className="drag-region">
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <span
          style={{
            display: 'inline-block',
            width: 10,
            height: 10,
            borderRadius: '50%',
            background: dotColor(state),
            boxShadow: dotGlow(state),
            transition: 'all 220ms ease'
          }}
        />
        <span style={{ opacity: 0.9 }}>{state}</span>
        {errorBanner && (
          <span style={{ color: '#ff7676', marginLeft: 12 }}>{errorBanner}</span>
        )}
      </div>
      <div
        className="no-drag"
        style={{ display: 'flex', alignItems: 'center', gap: 18, opacity: 0.85 }}
      >
        <span>{model ?? '—'}</span>
        <span>session {sessionId ? sessionId.slice(-6) : '——————'}</span>
        <span>${totalCostUsd.toFixed(4)}</span>
      </div>
    </div>
  )
}
