import React from 'react'
import { useSession } from '../store/session'

export function Visualizer() {
  const state = useSession(s => s.state)
  if (state !== 'speaking' && state !== 'capturing') return null

  const accent = state === 'capturing' ? '#00d4ff' : '#4a9eff'
  return (
    <div
      style={{
        position: 'absolute',
        left: '50%',
        bottom: 80,
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: 4,
        pointerEvents: 'none'
      }}
    >
      {Array.from({ length: 24 }).map((_, i) => (
        <span
          key={i}
          style={{
            width: 3,
            height: 14 + (i % 7) * 4,
            background: accent,
            borderRadius: 2,
            opacity: 0.7,
            animation: `vbar 800ms ease-in-out ${i * 60}ms infinite alternate`
          }}
        />
      ))}
      <style>{`@keyframes vbar { from { transform: scaleY(0.3); } to { transform: scaleY(1.4); } }`}</style>
    </div>
  )
}
