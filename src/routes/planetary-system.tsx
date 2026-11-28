import { Link, createFileRoute, useNavigate } from '@tanstack/react-router'
import {
  ArrowLeft,
  ArrowRight,
  Clock3,
  Lightbulb,
  Move3D,
  Orbit,
  Rocket,
  Ruler,
  Sparkles,
  Sun,
} from 'lucide-react'

import { PlanetPreview } from '../components/planet-preview'
import { PlanetQuiz } from '../components/planet-quiz'
import { planets } from '../components/planet-data'
import type { PlanetId } from '../components/planet-data'
import { SolarSystem } from '../components/solar-system'

export const Route = createFileRoute('/planetary-system')({
  validateSearch: (search: Record<string, unknown>) => {
    const selectedPlanet = planets.find((planet) => planet.id === search.planet)
    return selectedPlanet ? { planet: selectedPlanet.id } : {}
  },
  component: PlanetarySystem,
})

const planetIntros: Record<PlanetId, string> = {
  mercury:
    'Meet the smallest planet! Mercury zips around the Sun on a rocky world covered in craters.',
  venus:
    'Venus is wrapped in thick golden clouds. It is the hottest planet, and its days are longer than its years!',
  earth:
    'This is our one-of-a-kind home, with blue oceans, green lands, and all the life we know.',
  mars: 'Rusty red dust gives Mars its nickname, the Red Planet. It has giant volcanoes, deep canyons, and exploring robots!',
  jupiter:
    'Jupiter is the biggest planet, with swirling clouds and a giant storm called the Great Red Spot.',
  saturn:
    'Saturn is a giant world with bright rings made from countless pieces of ice and rock.',
  uranus:
    'This pale blue-green ice giant spins on its side as it travels around the Sun.',
  neptune:
    'Neptune is a deep-blue world far from the Sun, with some of the fastest winds around.',
}

const planetKinds: Record<PlanetId, string> = {
  mercury: 'Rocky planet',
  venus: 'Rocky planet',
  earth: 'Rocky planet',
  mars: 'Rocky planet',
  jupiter: 'Gas giant',
  saturn: 'Gas giant',
  uranus: 'Ice giant',
  neptune: 'Ice giant',
}

function getOrdinal(value: number) {
  const remainder = value % 100
  const suffix =
    remainder >= 11 && remainder <= 13
      ? 'th'
      : (['th', 'st', 'nd', 'rd'][value % 10] ?? 'th')

  return `${value}${suffix}`
}

function PlanetarySystem() {
  const { planet: requestedPlanet } = Route.useSearch()
  const navigate = useNavigate({ from: '/planetary-system' })
  const selectedPlanet =
    planets.find((planet) => planet.id === requestedPlanet) ?? planets[2]
  const selectedIndex = planets.findIndex(
    (planet) => planet.id === selectedPlanet.id,
  )
  const nextPlanet = planets[(selectedIndex + 1) % planets.length]

  const explorerCards = [
    {
      label: 'Planet size',
      value: selectedPlanet.diameter,
      note: 'Measured across the middle',
      icon: Ruler,
      color: 'purple',
    },
    {
      label: 'From the Sun',
      value: selectedPlanet.distance,
      note: 'Earth–Sun distances',
      icon: Sun,
      color: 'yellow',
    },
    {
      label: 'One day',
      value: selectedPlanet.day,
      note: 'Time for one spin',
      icon: Clock3,
      color: 'peach',
    },
    {
      label: 'One year',
      value: selectedPlanet.year,
      note: 'One trip around the Sun',
      icon: Orbit,
      color: 'blue',
    },
  ]

  return (
    <div className="planet-explorer-page">
      <header className="planet-explorer-header">
        <div className="planet-explorer-header-inner">
          <Link className="planet-explorer-brand" to="/">
            <span className="planet-explorer-brand-mark" aria-hidden="true">
              <Rocket size={19} />
            </span>
            <span>AstroKids</span>
          </Link>
          <nav className="planet-explorer-nav" aria-label="Main navigation">
            <Link to="/" className="planet-explorer-nav-link">
              Home
            </Link>
            <a
              href="#planet-selector"
              className="planet-explorer-nav-link is-current"
              aria-current="page"
            >
              Explore planets
            </a>
            <a href="#planet-quiz" className="planet-explorer-nav-link">
              Take the quiz
            </a>
          </nav>
        </div>
      </header>

      <main className="planet-explorer-main">
        <div className="planet-explorer-toolbar">
          <Link className="planet-back-link" to="/">
            <ArrowLeft size={16} aria-hidden="true" />
            Back to Space Hub
          </Link>
          <nav
            className="planet-selector"
            id="planet-selector"
            aria-label="Choose a planet"
          >
            {planets.map((planet) => (
              <Link
                key={planet.id}
                className={`planet-selector-link${planet.id === selectedPlanet.id ? ' is-selected' : ''}`}
                to="/planetary-system"
                search={{ planet: planet.id }}
                aria-current={
                  planet.id === selectedPlanet.id ? 'page' : undefined
                }
              >
                {planet.name}
              </Link>
            ))}
          </nav>
        </div>

        <section
          className="planet-profile-card"
          aria-labelledby="selected-planet-name"
        >
          <div className="planet-profile-art">
            <div
              className={`planet-preview-circle planet-preview-circle-${selectedPlanet.id}`}
              role="img"
              aria-label={`${selectedPlanet.name}, shown as a rotating 3D planet`}
            >
              <span className="planet-preview-sparkle" aria-hidden="true">
                ✦
              </span>
              <PlanetPreview key={selectedPlanet.id} planet={selectedPlanet} />
            </div>
          </div>
          <div className="planet-profile-copy" aria-live="polite">
            <div className="planet-profile-badges">
              <span className="planet-profile-badge planet-profile-badge-order">
                {getOrdinal(selectedPlanet.order)} planet from the Sun
              </span>
              <span className="planet-profile-badge planet-profile-badge-kind">
                <Sparkles size={13} aria-hidden="true" />
                {planetKinds[selectedPlanet.id]}
              </span>
            </div>
            <h1 id="selected-planet-name">{selectedPlanet.name}</h1>
            <p>{planetIntros[selectedPlanet.id]}</p>
          </div>
        </section>

        <section
          className="planet-explorer-facts"
          aria-labelledby="facts-title"
        >
          <div className="planet-section-heading">
            <h2 id="facts-title">Planet Explorer Cards</h2>
            <p>Four quick facts for your space notebook.</p>
          </div>
          <div className="planet-fact-grid">
            {explorerCards.map(({ label, value, note, icon: Icon, color }) => (
              <article className="planet-fact-card" key={label}>
                <div className="planet-fact-heading">
                  <span
                    className={`planet-fact-icon planet-fact-icon-${color}`}
                  >
                    <Icon size={16} aria-hidden="true" />
                  </span>
                  <h3>{label}</h3>
                </div>
                <p className="planet-fact-value">{value}</p>
                <p className="planet-fact-note">{note}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="planet-explorer-bottom">
          <aside className="planet-did-you-know" aria-live="polite">
            <span className="planet-did-you-know-icon" aria-hidden="true">
              <Lightbulb size={20} />
            </span>
            <div>
              <h2>Did You Know?</h2>
              <p>{selectedPlanet.fact}</p>
            </div>
          </aside>
          <div className="planet-next-stop">
            <span>Ready for your next mission?</span>
            <Link
              className="planet-next-button"
              to="/planetary-system"
              search={{ planet: nextPlanet.id }}
            >
              Explore {nextPlanet.name} next
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </section>

        <PlanetQuiz planetId={selectedPlanet.id} />

        <details className="planet-system-details">
          <summary>
            <Move3D size={17} aria-hidden="true" />
            See all eight planets moving around the Sun
          </summary>
          <div
            className="planet-system-view"
            aria-label="Interactive solar system"
          >
            <SolarSystem
              selectedPlanet={selectedPlanet.id}
              onSelectPlanet={(planetId) => {
                void navigate({ search: { planet: planetId } })
              }}
            />
          </div>
          <p>Drag to look around. Tap any planet to explore it!</p>
        </details>
      </main>

      <footer className="planet-explorer-footer">
        <span>
          AstroKids Space Explorer — Made for curious young astronauts!
        </span>
        <span>Keep looking up at the stars! ✦</span>
      </footer>
    </div>
  )
}
