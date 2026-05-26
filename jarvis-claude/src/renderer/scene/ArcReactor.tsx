import React, { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sparkles } from '@react-three/drei'
import * as THREE from 'three'
import { useSession, type AppState } from '../store/session'
import vertex from './shaders/core.vert?raw'
import fragment from './shaders/core.frag?raw'

const CYAN = new THREE.Color('#00d4ff')
const DEEP = new THREE.Color('#0a1628')
const AMBER = new THREE.Color('#ffaa00')

function colorsFor(state: AppState): { inner: THREE.Color; outer: THREE.Color } {
  if (state === 'thinking') return { inner: AMBER, outer: DEEP }
  return { inner: CYAN, outer: DEEP }
}

function CoreTorus() {
  const matRef = useRef<THREE.ShaderMaterial>(null)
  const state = useSession(s => s.state)

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uAmplitude: { value: 0.2 },
      uInner: { value: CYAN.clone() },
      uOuter: { value: DEEP.clone() }
    }),
    []
  )

  useFrame(({ clock }) => {
    if (!matRef.current) return
    const t = clock.getElapsedTime()
    uniforms.uTime.value = t

    let amp = 0.2
    if (state === 'speaking') amp = 0.5 + 0.5 * Math.sin(t * 8)
    else if (state === 'thinking') amp = 0.35 + 0.15 * Math.sin(t * 3)
    else if (state === 'capturing') amp = 0.55
    else if (state === 'listening') amp = 0.3 + 0.05 * Math.sin(t * 1.5)
    uniforms.uAmplitude.value = amp

    const { inner, outer } = colorsFor(state)
    uniforms.uInner.value.lerp(inner, 0.1)
    uniforms.uOuter.value.lerp(outer, 0.1)
  })

  return (
    <mesh rotation={[Math.PI / 2.4, 0, 0]}>
      <torusGeometry args={[1, 0.35, 64, 128]} />
      <shaderMaterial
        ref={matRef}
        uniforms={uniforms}
        vertexShader={vertex}
        fragmentShader={fragment}
        transparent
        depthWrite={false}
      />
    </mesh>
  )
}

export function ArcReactor() {
  return (
    <Canvas
      style={{ position: 'absolute', inset: 0 }}
      camera={{ position: [0, 0, 3.5], fov: 45 }}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[0, 0, 2]} intensity={1.2} color="#00d4ff" />
      <CoreTorus />
      <Sparkles count={400} scale={4} size={2} speed={0.3} color="#00d4ff" />
    </Canvas>
  )
}
