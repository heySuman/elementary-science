import { Sphere, useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import type { ThreeEvent } from '@react-three/fiber'
import type { Mesh } from 'three'
import { useRef } from 'react'

import jupiterTexture from '../assets/jupiter/2k_jupiter.jpg'
import marsTexture from '../assets/mars/2k_mars.jpg'
import mercuryTexture from '../assets/mercury/2k_mercury.jpg'
import neptuneTexture from '../assets/neptune/2k_neptune.jpg'
import saturnTexture from '../assets/saturn/2k_saturn.jpg'
import uranusTexture from '../assets/uranus/2k_uranus.jpg'
import venusTexture from '../assets/venus/2k_venus_surface.jpg'
import type { PlanetId } from './planet-data'

const planetTextures = {
  jupiter: jupiterTexture,
  mars: marsTexture,
  mercury: mercuryTexture,
  neptune: neptuneTexture,
  saturn: saturnTexture,
  uranus: uranusTexture,
  venus: venusTexture,
}

type PlanetProps = {
  id: Exclude<PlanetId, 'earth'>
  size: number
  color: string
  selected?: boolean
  onSelect?: () => void
}

export function Planet({ id, size, color, selected, onSelect }: PlanetProps) {
  const meshRef = useRef<Mesh>(null)
  const [texture] = useTexture([planetTextures[id]])

  useFrame((_state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.18
    }
  })

  const selectPlanet = (event: ThreeEvent<MouseEvent>) => {
    if (!onSelect) return
    event.stopPropagation()
    onSelect()
  }

  return (
    <group>
      {selected && (
        <Sphere args={[size * 1.4, 24, 24]}>
          <meshBasicMaterial
            color={color}
            transparent
            opacity={0.25}
            wireframe
          />
        </Sphere>
      )}
      <Sphere
        ref={meshRef}
        args={[size, 40, 40]}
        onClick={onSelect ? selectPlanet : undefined}
        onPointerOver={
          onSelect
            ? () => {
                document.body.style.cursor = 'pointer'
              }
            : undefined
        }
        onPointerOut={
          onSelect
            ? () => {
                document.body.style.cursor = 'auto'
              }
            : undefined
        }
      >
        <meshStandardMaterial map={texture} roughness={0.9} />
      </Sphere>
      {id === 'saturn' && (
        <mesh
          rotation={[Math.PI / 2.5, 0, 0]}
          onClick={onSelect ? selectPlanet : undefined}
        >
          <ringGeometry args={[size * 1.25, size * 1.85, 64]} />
          <meshStandardMaterial
            color="#d7be8f"
            side={2}
            transparent
            opacity={0.85}
          />
        </mesh>
      )}
    </group>
  )
}
