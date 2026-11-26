import { OrbitControls, Sphere, Stars, useTexture } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { Suspense, useRef } from 'react'
import type { Group } from 'three'

import { EarthAndMoon } from './earth-moon'
import { planets } from './planet-data'
import { Planet } from './planet'
import type { PlanetId } from './planet-data'
import sunTexture from '../assets/sun/2k_sun.jpg'

type SolarSystemProps = {
  selectedPlanet: PlanetId
  onSelectPlanet: (planetId: PlanetId) => void
}

function Sun() {
  const [texture] = useTexture([sunTexture])

  return (
    <group>
      <Sphere args={[0.75, 48, 48]}>
        <meshBasicMaterial map={texture} />
      </Sphere>
      <pointLight intensity={95} distance={40} decay={2} />
    </group>
  )
}

function OrbitingPlanet({
  planet,
  selected,
  onSelect,
}: {
  planet: (typeof planets)[number]
  selected: boolean
  onSelect: () => void
}) {
  const orbitRef = useRef<Group>(null)

  useFrame((_state, delta) => {
    if (orbitRef.current) {
      orbitRef.current.rotation.z += delta * planet.orbitSpeed * 0.08
    }
  })

  return (
    <>
      <mesh>
        <ringGeometry
          args={[planet.orbitRadius - 0.008, planet.orbitRadius + 0.008, 128]}
        />
        <meshBasicMaterial color="#b4d1cb" transparent opacity={0.17} />
      </mesh>
      <group ref={orbitRef} rotation={[0, 0, planet.order * 0.71]}>
        <group position={[planet.orbitRadius, 0, 0]}>
          {planet.id === 'earth' ? (
            <group
              scale={planet.size}
              onClick={(event) => {
                event.stopPropagation()
                onSelect()
              }}
            >
              {selected && (
                <Sphere args={[1.4, 24, 24]}>
                  <meshBasicMaterial
                    color={planet.color}
                    transparent
                    opacity={0.25}
                    wireframe
                  />
                </Sphere>
              )}
              <EarthAndMoon />
            </group>
          ) : (
            <Planet
              id={planet.id}
              size={planet.size}
              color={planet.color}
              selected={selected}
              onSelect={onSelect}
            />
          )}
        </group>
      </group>
    </>
  )
}

function SolarSystemScene({
  selectedPlanet,
  onSelectPlanet,
}: SolarSystemProps) {
  return (
    <>
      <color attach="background" args={['#08151d']} />
      <ambientLight intensity={0.55} />
      <Stars radius={24} depth={12} count={180} factor={1.5} fade speed={0.2} />
      <Sun />
      {planets.map((planet) => (
        <OrbitingPlanet
          key={planet.id}
          planet={planet}
          selected={planet.id === selectedPlanet}
          onSelect={() => onSelectPlanet(planet.id)}
        />
      ))}
      <OrbitControls
        enablePan={false}
        minDistance={12}
        maxDistance={25}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={(Math.PI * 2) / 3}
      />
    </>
  )
}

export function SolarSystem({
  selectedPlanet,
  onSelectPlanet,
}: SolarSystemProps) {
  return (
    <Canvas camera={{ position: [0, 0, 22], fov: 48 }}>
      <Suspense fallback={null}>
        <SolarSystemScene
          selectedPlanet={selectedPlanet}
          onSelectPlanet={onSelectPlanet}
        />
      </Suspense>
    </Canvas>
  )
}
