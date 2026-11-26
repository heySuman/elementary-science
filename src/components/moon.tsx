import type { Ref } from 'react'
import type { Mesh } from 'three'
import { Sphere, useTexture } from '@react-three/drei'

import moonTextute from '../assets/earth/2k_moon.jpg'

type MoonProps = {
  moonRef: Ref<Mesh>
}

export function Moon({ moonRef }: MoonProps) {
  const [moonMap] = useTexture([moonTextute])

  return (
    <Sphere ref={moonRef} args={[0.4, 64, 64]} position={[3, 0, 0]}>
      <meshStandardMaterial map={moonMap} emissiveIntensity={0.5} />
    </Sphere>
  )
}
