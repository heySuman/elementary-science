export type PlanetId =
  | 'mercury'
  | 'venus'
  | 'earth'
  | 'mars'
  | 'jupiter'
  | 'saturn'
  | 'uranus'
  | 'neptune'

export type PlanetInfo = {
  id: PlanetId
  name: string
  order: number
  color: string
  size: number
  orbitRadius: number
  orbitSpeed: number
  distance: string
  diameter: string
  day: string
  year: string
  description: string
  fact: string
}

export const planets: PlanetInfo[] = [
  {
    id: 'mercury',
    name: 'Mercury',
    order: 1,
    color: '#b9a999',
    size: 0.12,
    orbitRadius: 1.8,
    orbitSpeed: 0.9,
    distance: '0.39 AU',
    diameter: '4,879 km',
    day: '59 Earth days',
    year: '88 Earth days',
    description:
      'The smallest planet is also the closest to the Sun. Its rocky surface is covered in ancient craters.',
    fact: 'Mercury has huge temperature swings because it has almost no atmosphere to hold onto heat.',
  },
  {
    id: 'venus',
    name: 'Venus',
    order: 2,
    color: '#e5b982',
    size: 0.18,
    orbitRadius: 2.65,
    orbitSpeed: 0.68,
    distance: '0.72 AU',
    diameter: '12,104 km',
    day: '243 Earth days',
    year: '225 Earth days',
    description:
      'Venus is wrapped in thick clouds and has a rocky surface hidden beneath its golden atmosphere.',
    fact: 'A day on Venus is longer than its year, and the planet spins in the opposite direction to most planets.',
  },
  {
    id: 'earth',
    name: 'Earth',
    order: 3,
    color: '#67b9a2',
    size: 0.2,
    orbitRadius: 3.5,
    orbitSpeed: 0.54,
    distance: '1 AU',
    diameter: '12,742 km',
    day: '24 hours',
    year: '365 days',
    description:
      'Our home is a world of oceans, continents, and a life-supporting atmosphere.',
    fact: 'So far, Earth is the only place we know of that has life.',
  },
  {
    id: 'mars',
    name: 'Mars',
    order: 4,
    color: '#d98265',
    size: 0.15,
    orbitRadius: 4.35,
    orbitSpeed: 0.44,
    distance: '1.52 AU',
    diameter: '6,779 km',
    day: '24 hours 37 minutes',
    year: '687 Earth days',
    description:
      'This cold, dusty world gets its rusty-red color from iron-rich minerals in its soil.',
    fact: 'Mars is home to Olympus Mons, the tallest volcano in the solar system.',
  },
  {
    id: 'jupiter',
    name: 'Jupiter',
    order: 5,
    color: '#e2b58d',
    size: 0.48,
    orbitRadius: 5.55,
    orbitSpeed: 0.24,
    distance: '5.2 AU',
    diameter: '139,820 km',
    day: 'About 10 hours',
    year: '11.86 Earth years',
    description:
      'Jupiter is a giant world of swirling clouds, powerful storms, and many moons.',
    fact: 'The Great Red Spot is a storm that has raged for hundreds of years.',
  },
  {
    id: 'saturn',
    name: 'Saturn',
    order: 6,
    color: '#d9c18c',
    size: 0.4,
    orbitRadius: 6.85,
    orbitSpeed: 0.17,
    distance: '9.58 AU',
    diameter: '116,460 km',
    day: 'About 10.5 hours',
    year: '29.4 Earth years',
    description:
      'Saturn is a gas giant best known for its bright rings, made mostly of icy and rocky pieces.',
    fact: 'Saturn is so low in density that it would float in a bathtub large enough to hold it.',
  },
  {
    id: 'uranus',
    name: 'Uranus',
    order: 7,
    color: '#9ad9da',
    size: 0.31,
    orbitRadius: 8.1,
    orbitSpeed: 0.12,
    distance: '19.2 AU',
    diameter: '50,724 km',
    day: 'About 17 hours',
    year: '84 Earth years',
    description:
      'This distant ice giant has a pale blue-green color from methane in its atmosphere.',
    fact: 'Uranus spins on its side, making its seasons especially unusual.',
  },
  {
    id: 'neptune',
    name: 'Neptune',
    order: 8,
    color: '#577cda',
    size: 0.3,
    orbitRadius: 9.3,
    orbitSpeed: 0.1,
    distance: '30.1 AU',
    diameter: '49,244 km',
    day: 'About 16 hours',
    year: '165 Earth years',
    description:
      'Neptune is a deep-blue ice giant far from the Sun, with a cold and windy atmosphere.',
    fact: 'Neptune has some of the fastest winds measured anywhere in the solar system.',
  },
]
