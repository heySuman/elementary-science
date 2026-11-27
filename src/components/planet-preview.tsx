import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere } from '@react-three/drei'
import { Suspense, useRef } from 'react'
import type { Mesh } from 'three'

import { Earth } from './earth'
import { Planet } from './planet'
import type { PlanetInfo } from './planet-data'

function EarthPreview() {
  const earthRef = useRef<Mesh>(null)
  const cloudsRef = useRef<Mesh>(null)

  useFrame((_state, delta) => {
    if (earthRef.current) earthRef.current.rotation.y += delta * 0.16
    if (cloudsRef.current) cloudsRef.current.rotation.y += delta * 0.19
  })

  return <Earth earthRef={earthRef} cloudsRef={cloudsRef} />
}

function PlanetModel({ planet }: { planet: PlanetInfo }) {
  if (planet.id === 'earth') return <EarthPreview />

  return (
    <Planet
      id={planet.id}
      size={planet.id === 'saturn' ? 0.72 : 1}
      color={planet.color}
    />
  )
}

export function PlanetPreview({ planet }: { planet: PlanetInfo }) {
  const fallbackSize = planet.id === 'saturn' ? 0.72 : 1

  return (
    <Canvas
      aria-hidden="true"
      camera={{ position: [0, 0, 4.4], fov: 36 }}
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={1.15} />
      <directionalLight position={[3, 2, 4]} intensity={2.6} />
      <Suspense
        fallback={
          <Sphere args={[fallbackSize, 32, 32]}>
            <meshStandardMaterial color={planet.color} />
          </Sphere>
        }
      >
        <PlanetModel planet={planet} />
      </Suspense>
    </Canvas>
  )
}
