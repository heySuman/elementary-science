import { Moon } from './moon'
import { useRef } from 'react'
import { Earth } from './earth'
import type { Mesh } from 'three'
import { useFrame } from '@react-three/fiber'

const EARTH_ROTATION = 0.0015
const CLOUD_ROTATION = 0.0018
const MOON_ROTATION = 0.0018

export function EarthAndMoon() {
  const earthRef = useRef<Mesh>(null)
  const cloudsRef = useRef<Mesh>(null)
  const moonRef = useRef<Mesh>(null)
  const moonOrbitRef = useRef<Mesh>(null)

  useFrame((_state, delta) => {
    if (earthRef.current) {
      earthRef.current.rotation.y += EARTH_ROTATION
    }
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y += CLOUD_ROTATION
    }
    if (moonRef.current) {
      moonRef.current.rotation.y += MOON_ROTATION
    }
    if (moonOrbitRef.current) {
      moonOrbitRef.current.rotation.z += delta * 0.5
    }
  })

  return (
    <>
      <Earth earthRef={earthRef} cloudsRef={cloudsRef} />
      <group ref={moonOrbitRef}>
        <Moon moonRef={moonRef} />
      </group>
    </>
  )
}
