import type { Ref } from 'react'
import type { Mesh } from 'three'
import { Sphere, useTexture } from '@react-three/drei'

import earthDayTexture from '../assets/earth/2k_earth_daymap.jpg'
import earthNightTexture from '../assets/earth/2k_earth_nightmap.jpg'
import earthCloudTexture from '../assets/earth/2k_earth_clouds.jpg'
import earthNormalTexture from '../assets/earth/2k_earth_normal_map.jpg'
import earthSpecularTexture from '../assets/earth/2k_earth_specular_map.jpg'

type EarthProps = {
  earthRef: Ref<Mesh>
  cloudsRef: Ref<Mesh>
}

export function Earth({ earthRef, cloudsRef }: EarthProps) {
  const [dayMap, nightMap, cloudsMap, normalMap, specularMap] = useTexture([
    earthDayTexture,
    earthNightTexture,
    earthCloudTexture,
    earthNormalTexture,
    earthSpecularTexture,
  ])

  return (
    <group>
      <Sphere ref={earthRef} args={[1, 64, 64]}>
        <meshStandardMaterial
          map={dayMap}
          normalMap={normalMap}
          roughnessMap={specularMap}
          roughness={0.8}
          metalness={0.1}
          emissiveMap={nightMap}
          emissive="white"
          emissiveIntensity={1.2}
        />
      </Sphere>

      <Sphere ref={cloudsRef} args={[1.01, 64, 64]}>
        <meshStandardMaterial
          map={cloudsMap}
          transparent
          opacity={0.4}
          depthWrite={false}
        />
      </Sphere>

      <Sphere args={[1.02, 64, 64]}>
        <meshBasicMaterial color="#4a90e2" transparent opacity={0.1} side={2} />
      </Sphere>
    </group>
  )
}
