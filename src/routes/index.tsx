import { Link, createFileRoute } from '@tanstack/react-router'
import { ArrowRight, Rocket, Sparkles, Star } from 'lucide-react'

import { planets } from '../components/planet-data'

export const Route = createFileRoute('/')({ component: Home })

const planetHighlights = {
  mercury: 'The speedy little planet',
  venus: 'The super-hot neighbor',
  earth: 'Our cozy blue home',
  mars: 'The dusty red planet',
  jupiter: 'The giant with a big storm',
  saturn: 'The planet with icy rings',
  uranus: 'The planet that spins sideways',
  neptune: 'The windy blue giant',
}

function Home() {
  return (
    <div className="home-page" id="top">
      <header className="home-header">
        <div className="home-header-inner">
          <Link className="home-brand" to="/" aria-label="AstroKids home">
            <span className="home-brand-mark" aria-hidden="true">
              <Rocket size={21} strokeWidth={2.2} />
            </span>
            <span>AstroKids</span>
          </Link>

          <nav className="home-nav" aria-label="Main navigation">
            <a className="home-nav-link" href="#top" aria-current="page">
              Home
            </a>
            <a className="home-nav-link" href="#planets">
              Meet the planets
            </a>
            <Link
              className="home-nav-cta"
              to="/planetary-system"
              search={{ planet: 'earth' }}
            >
              Explore space <ArrowRight size={17} />
            </Link>
          </nav>
        </div>
      </header>

      <main className="home-main">
        <section className="home-dashboard" aria-labelledby="welcome-heading">
          <div className="home-welcome-card">
            <div className="home-welcome-copy">
              <div className="home-eyebrow">
                <Sparkles size={16} aria-hidden="true" />
                YOUR SPACE ADVENTURE STARTS HERE
              </div>
              <h1 id="welcome-heading">
                Hey, Space Explorer!
                <span>Let’s meet our neighbors.</span>
              </h1>
              <p>
                Zoom around the Sun, meet all eight planets, and find out what
                makes each one amazing.
              </p>
              <Link
                className="home-primary-button"
                to="/planetary-system"
                search={{ planet: 'earth' }}
              >
                Explore the planets <ArrowRight size={18} />
              </Link>
            </div>

            <div
              className="home-solar-art"
              role="img"
              aria-label="A cheerful illustration of the Sun and orbiting planets"
            >
              <span className="home-art-star home-art-star-one">✦</span>
              <span className="home-art-star home-art-star-two">✧</span>
              <span className="home-art-star home-art-star-three">✦</span>
              <span className="home-solar-orbit home-solar-orbit-one" />
              <span className="home-solar-orbit home-solar-orbit-two" />
              <span className="home-solar-orbit home-solar-orbit-three" />
              <span className="home-sun">
                <span>HI!</span>
              </span>
              <span className="home-art-planet home-art-mercury" />
              <span className="home-art-planet home-art-venus" />
              <span className="home-art-planet home-art-earth" />
              <span className="home-art-planet home-art-mars" />
              <span className="home-art-planet home-art-jupiter" />
              <span className="home-art-planet home-art-saturn" />
              <span className="home-art-planet home-art-uranus" />
              <span className="home-art-planet home-art-neptune" />
              <span className="home-art-caption">
                8 planets, one sunny star!
              </span>
            </div>
          </div>

          <aside className="home-side-cards" aria-label="Space activities">
            <article className="home-mission-card">
              <div className="home-card-badge">
                <Star size={15} fill="currentColor" aria-hidden="true" />
                YOUR NEXT MISSION
              </div>
              <h2>Find the Red Planet</h2>
              <p>
                Can you spot Mars? It has a giant volcano taller than Mount
                Everest!
              </p>
              <Link
                className="home-mission-button"
                to="/planetary-system"
                search={{ planet: 'mars' }}
              >
                Visit Mars <ArrowRight size={17} />
              </Link>
            </article>

            <article className="home-wonder-card">
              <div className="home-wonder-icon" aria-hidden="true">
                ✨
              </div>
              <div>
                <span className="home-wonder-label">A SPACE WONDER</span>
                <h2>Venus takes its time!</h2>
                <p>A day on Venus lasts longer than its whole year.</p>
              </div>
              <Link
                className="home-wonder-link"
                to="/planetary-system"
                search={{ planet: 'venus' }}
                aria-label="Explore Venus"
              >
                <ArrowRight size={18} />
              </Link>
            </article>
          </aside>
        </section>

        <section className="home-planets-section" id="planets">
          <div className="home-section-heading">
            <div>
              <span className="home-eyebrow">
                <Sparkles size={15} aria-hidden="true" />
                PICK YOUR FIRST STOP
              </span>
              <h2>Meet the 8 planets</h2>
              <p>Choose a planet to visit and discover a fun fact about it.</p>
            </div>
            <Link
              className="home-all-planets-link"
              to="/planetary-system"
              search={{ planet: 'earth' }}
            >
              See the whole solar system <ArrowRight size={17} />
            </Link>
          </div>

          <div className="home-planet-grid">
            {planets.map((planet) => (
              <Link
                className={`home-planet-card home-planet-card-${planet.id}`}
                key={planet.id}
                to="/planetary-system"
                search={{ planet: planet.id }}
                aria-label={`Explore ${planet.name}: ${planetHighlights[planet.id]}`}
              >
                <span className="home-planet-order">PLANET {planet.order}</span>
                <span
                  className={`home-planet-orb home-planet-orb-${planet.id}`}
                  aria-hidden="true"
                />
                <span className="home-planet-name">{planet.name}</span>
                <span className="home-planet-highlight">
                  {planetHighlights[planet.id]}
                </span>
                <span className="home-planet-link">
                  Let’s go <ArrowRight size={15} aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <footer className="home-footer">
        <span>
          <Sparkles size={15} aria-hidden="true" />
          Keep asking big questions!
        </span>
        <span>Made for curious young explorers</span>
      </footer>
    </div>
  )
}
