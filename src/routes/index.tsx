import { Link, createFileRoute } from '@tanstack/react-router'
import { ArrowDown, ArrowRight, Atom, Sparkles } from 'lucide-react'

export const Route = createFileRoute('/')({ component: Home })

const elements = [
  {
    number: 1,
    symbol: 'H',
    name: 'Hydrogen',
    column: 1,
    row: 1,
    color: 'mint',
  },
  {
    number: 2,
    symbol: 'He',
    name: 'Helium',
    column: 18,
    row: 1,
    color: 'peach',
  },
  {
    number: 3,
    symbol: 'Li',
    name: 'Lithium',
    column: 1,
    row: 2,
    color: 'peach',
  },
  {
    number: 4,
    symbol: 'Be',
    name: 'Beryllium',
    column: 2,
    row: 2,
    color: 'peach',
  },
  {
    number: 5,
    symbol: 'B',
    name: 'Boron',
    column: 13,
    row: 2,
    color: 'yellow',
  },
  { number: 6, symbol: 'C', name: 'Carbon', column: 14, row: 2, color: 'mint' },
  {
    number: 7,
    symbol: 'N',
    name: 'Nitrogen',
    column: 15,
    row: 2,
    color: 'mint',
  },
  { number: 8, symbol: 'O', name: 'Oxygen', column: 16, row: 2, color: 'mint' },
  {
    number: 9,
    symbol: 'F',
    name: 'Fluorine',
    column: 17,
    row: 2,
    color: 'mint',
  },
  {
    number: 10,
    symbol: 'Ne',
    name: 'Neon',
    column: 18,
    row: 2,
    color: 'peach',
  },
  {
    number: 11,
    symbol: 'Na',
    name: 'Sodium',
    column: 1,
    row: 3,
    color: 'peach',
  },
  {
    number: 12,
    symbol: 'Mg',
    name: 'Magnesium',
    column: 2,
    row: 3,
    color: 'peach',
  },
  {
    number: 13,
    symbol: 'Al',
    name: 'Aluminum',
    column: 13,
    row: 3,
    color: 'yellow',
  },
  {
    number: 14,
    symbol: 'Si',
    name: 'Silicon',
    column: 14,
    row: 3,
    color: 'yellow',
  },
  {
    number: 15,
    symbol: 'P',
    name: 'Phosphorus',
    column: 15,
    row: 3,
    color: 'mint',
  },
  {
    number: 16,
    symbol: 'S',
    name: 'Sulfur',
    column: 16,
    row: 3,
    color: 'mint',
  },
  {
    number: 17,
    symbol: 'Cl',
    name: 'Chlorine',
    column: 17,
    row: 3,
    color: 'mint',
  },
  {
    number: 18,
    symbol: 'Ar',
    name: 'Argon',
    column: 18,
    row: 3,
    color: 'peach',
  },
]

function Home() {
  return (
    <main className="wonder-page">
      <header className="wonder-nav page-wrap">
        <a
          className="wonder-brand"
          href="#top"
          aria-label="Little Big Science home"
        >
          <span className="brand-mark">
            <Atom size={21} strokeWidth={2.2} />
          </span>
          <span>
            little big <strong>science</strong>
          </span>
        </a>
        <nav aria-label="Main navigation">
          <a className="wonder-nav-link" href="#discover">
            Discover
          </a>
          <a className="wonder-nav-link" href="#elements">
            Elements
          </a>
          <Link className="wonder-nav-cta" to="/planetary-system">
            Let’s explore <ArrowRight size={15} />
          </Link>
        </nav>
      </header>

      <section className="wonder-hero page-wrap" id="top">
        <div className="hero-copy">
          <div className="hero-eyebrow">
            <Sparkles size={15} /> BIG QUESTIONS START HERE
          </div>
          <h1 className="display-title">
            The world is full of <span>wow.</span>
          </h1>
          <p>
            From teeny-tiny atoms to giant, faraway planets, let’s explore the
            amazing things that make up our universe.
          </p>
          <div className="hero-actions">
            <Link className="primary-button" to="/planetary-system">
              Start exploring <ArrowRight size={17} />
            </Link>
            <a className="text-button" href="#discover">
              See what’s inside <ArrowDown size={16} />
            </a>
          </div>
          <div className="hero-note">
            <span className="note-sparkle">✳</span>
            Made for curious minds, big and small
          </div>
        </div>

        <div className="hero-art" aria-label="Explore planets and elements">
          <div className="orbit-doodle orbit-doodle-one" aria-hidden="true">
            ✦
          </div>
          <div className="orbit-doodle orbit-doodle-two" aria-hidden="true">
            ✳
          </div>
          <div className="orbit-card" id="discover">
            <div className="orbit-card-heading">
              <span className="card-icon planet-icon">✦</span>
              <span>
                <span className="card-eyebrow">OUR NEIGHBORHOOD</span>
                <strong>The solar system</strong>
              </span>
              <span className="card-arrow">
                <ArrowRight size={16} />
              </span>
            </div>
            <Link
              to="/planetary-system"
              className="solar-scene"
              aria-label="Explore the solar system"
            >
              <span className="orbit-ring orbit-ring-one" />
              <span className="orbit-ring orbit-ring-two" />
              <span className="orbit-ring orbit-ring-three" />
              <span className="orbit-sun" />
              <span className="orbit-planet orbit-earth" />
              <span className="orbit-planet orbit-mars" />
              <span className="orbit-planet orbit-saturn">
                <i />
              </span>
              <span className="solar-label label-sun">SUN</span>
              <span className="solar-label label-earth">EARTH</span>
              <span className="solar-label label-saturn">SATURN</span>
              <span className="solar-star star-a">✦</span>
              <span className="solar-star star-b">·</span>
              <span className="solar-star star-c">✧</span>
            </Link>
            <div className="orbit-card-footer">
              <span>8 planets. 1 very big sun.</span>
              <span className="mini-pill">SPACE</span>
            </div>
          </div>

          <a className="elements-card" href="#elements" id="elements">
            <div className="elements-card-heading">
              <span className="card-icon atom-icon">
                <Atom size={20} />
              </span>
              <span>
                <span className="card-eyebrow">THE BUILDING BLOCKS</span>
                <strong>Meet the elements</strong>
              </span>
              <span className="card-arrow">
                <ArrowRight size={16} />
              </span>
            </div>
            <div
              className="mini-periodic-table"
              aria-label="Preview of the first 18 elements"
            >
              {elements.map((element) => (
                <span
                  className={`element-tile tile-${element.color}`}
                  key={element.symbol}
                  style={{ gridColumn: element.column, gridRow: element.row }}
                  title={`${element.number}. ${element.name}`}
                >
                  <small>{element.number}</small>
                  <strong>{element.symbol}</strong>
                </span>
              ))}
            </div>
            <div className="elements-card-footer">
              <span>Everything is made of something!</span>
              <span className="mini-pill mini-pill-peach">MATTER</span>
            </div>
          </a>
        </div>
      </section>

      <footer className="wonder-footer page-wrap">
        <span>
          <span className="footer-sun">☼</span> Keep asking “why?”
        </span>
        <span>A little science goes a long way.</span>
      </footer>
    </main>
  )
}
