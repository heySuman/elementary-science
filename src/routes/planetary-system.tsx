import { Link, createFileRoute } from '@tanstack/react-router'
import { ArrowLeft, ArrowRight, Atom, Move3D, Sparkles } from 'lucide-react'
import { useState } from 'react'
import type { CSSProperties } from 'react'

import { planets } from '../components/planet-data'
import type { PlanetId } from '../components/planet-data'
import { SolarSystem } from '../components/solar-system'

export const Route = createFileRoute('/planetary-system')({
  component: PlanetarySystem,
})

function PlanetarySystem() {
  const [selectedId, setSelectedId] = useState<PlanetId>('earth')
  const selectedPlanet =
    planets.find((planet) => planet.id === selectedId) ?? planets[2]
  const selectedIndex = planets.findIndex((planet) => planet.id === selectedId)
  const previousPlanet =
    planets[(selectedIndex - 1 + planets.length) % planets.length]
  const nextPlanet = planets[(selectedIndex + 1) % planets.length]

  return (
    <main className="space-page">
      <header className="space-nav">
        <Link className="space-brand" to="/">
          <span className="space-brand-mark">
            <Atom size={19} />
          </span>
          <span>
            little big <strong>science</strong>
          </span>
        </Link>
        <Link className="space-back-link" to="/">
          <ArrowLeft size={15} /> Back to discover
        </Link>
      </header>

      <section className="space-content">
        <div className="space-heading">
          <div className="space-eyebrow">
            <Sparkles size={14} /> YOUR SOLAR SYSTEM FIELD TRIP
          </div>
          <h1>
            Pick a planet.
            <span> Let’s go!</span>
          </h1>
          <p>
            Travel from our Sun to the edge of our planetary neighborhood. Tap a
            planet to discover what makes it special.
          </p>
        </div>

        <div className="planetary-layout">
          <section
            className="solar-visual"
            aria-label="Interactive solar system"
          >
            <div className="solar-visual-top">
              <span className="solar-visual-label">
                <span className="live-dot" /> THE SOLAR SYSTEM
              </span>
              <span className="solar-visual-hint">
                <Move3D size={14} /> Drag to look around
              </span>
            </div>
            <SolarSystem
              selectedPlanet={selectedId}
              onSelectPlanet={setSelectedId}
            />
            <div className="solar-visual-bottom">
              <span>Sun</span>
              <span>Planet sizes and distances are shown for exploring</span>
              <span>Neptune</span>
            </div>
          </section>

          <aside className="planet-visit-card" aria-live="polite">
            <div className="visit-card-top">
              <span className="visit-kicker">PLANETARY VISIT</span>
              <span className="planet-order">
                {String(selectedPlanet.order).padStart(2, '0')} / 08
              </span>
            </div>
            <div
              className="visit-planet-orb"
              style={
                { '--planet-color': selectedPlanet.color } as CSSProperties
              }
              aria-hidden="true"
            >
              <span className="visit-orb-glow" />
              <span
                className={`visit-orb-surface visit-orb-${selectedPlanet.id}`}
              />
              {selectedPlanet.id === 'saturn' && (
                <span className="visit-saturn-ring" />
              )}
            </div>
            <h2>{selectedPlanet.name}</h2>
            <p className="visit-description">{selectedPlanet.description}</p>

            <div className="planet-facts">
              <div>
                <span>FROM THE SUN</span>
                <strong>{selectedPlanet.distance}</strong>
              </div>
              <div>
                <span>DIAMETER</span>
                <strong>{selectedPlanet.diameter}</strong>
              </div>
              <div>
                <span>ONE DAY</span>
                <strong>{selectedPlanet.day}</strong>
              </div>
              <div>
                <span>ONE YEAR</span>
                <strong>{selectedPlanet.year}</strong>
              </div>
            </div>

            <div className="planet-fun-fact">
              <Sparkles size={15} />
              <p>{selectedPlanet.fact}</p>
            </div>

            <div className="planet-picker-heading">
              <span>CHOOSE YOUR NEXT STOP</span>
              <span>8 planets</span>
            </div>
            <nav className="planet-picker" aria-label="Choose a planet">
              {planets.map((planet) => (
                <button
                  className={`planet-picker-button${planet.id === selectedId ? ' is-selected' : ''}`}
                  key={planet.id}
                  type="button"
                  aria-pressed={planet.id === selectedId}
                  onClick={() => setSelectedId(planet.id)}
                >
                  <span
                    className={`planet-picker-dot planet-dot-${planet.id}`}
                    style={{ '--planet-color': planet.color } as CSSProperties}
                  />
                  <span>{planet.name}</span>
                </button>
              ))}
            </nav>

            <div className="visit-navigation">
              <button
                type="button"
                onClick={() => setSelectedId(previousPlanet.id)}
                aria-label={`Visit ${previousPlanet.name}`}
              >
                <ArrowLeft size={16} />
              </button>
              <span>VISIT ANOTHER PLANET</span>
              <button
                type="button"
                onClick={() => setSelectedId(nextPlanet.id)}
                aria-label={`Visit ${nextPlanet.name}`}
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </aside>
        </div>

        <footer className="space-footer">
          <span>Eight planets. One star. Endless things to wonder about.</span>
          <span>Keep exploring ✦</span>
        </footer>
      </section>
    </main>
  )
}
