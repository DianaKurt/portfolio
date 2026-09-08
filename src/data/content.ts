export const profile = {
  name: 'Diana Suchkova',
  role: 'Frontend Developer | React',
  email: 'dialeejee18@gmail.com',
  telegram: 'Deaignis',
  telegramUrl: 'https://t.me/Deaignis',
  github: 'https://github.com/DianaKurt',
  photo: '/photo.jpg',
  heroBg: '/hero-bg.jpg',
}

export const navIds = [
  'about',
  'experience',
  'education',
  'projects',
  'skills',
  'contact',
] as const

export type NavId = (typeof navIds)[number]

export type ProjectLinkKind = 'github' | 'live' | 'play' | 'video'

export type Project = {
  id: string
  title: string
  image: string
  tags: string[]
  links: { kind: ProjectLinkKind; url: string }[]
}

export const projects: Project[] = [
  {
    id: 'inventory',
    title: 'Inventory Management Application',
    image: '/projects/inventory.jpg',
    tags: ['React', 'Fullstack', 'FSD'],
    links: [
      { kind: 'github', url: 'https://github.com/DianaKurt/inventory-app' },
      { kind: 'video', url: 'https://youtu.be/x-Ji-ZMc-xU' },
    ],
  },
  {
    id: 'music',
    title: 'Seeded Music Store',
    image: '/projects/music.jpg',
    tags: ['React', 'Procedural'],
    links: [
      {
        kind: 'github',
        url: 'https://github.com/DianaKurt/web-application-music',
      },
      { kind: 'video', url: 'https://youtu.be/Q639tuiiGHQ' },
    ],
  },
  {
    id: 'forms',
    title: 'Form Validation App',
    image: '/projects/forms.jpg',
    tags: ['JavaScript', 'Forms'],
    links: [
      { kind: 'github', url: 'https://github.com/DianaKurt/auth-project' },
      { kind: 'video', url: 'https://youtu.be/DE4JfcbuPqg' },
    ],
  },
  {
    id: 'tictac',
    title: 'TicTac Game',
    image: '/projects/tictac.jpg',
    tags: ['Realtime', 'Game'],
    links: [
      { kind: 'play', url: 'https://project-game-kwfy.onrender.com' },
      { kind: 'video', url: 'https://youtu.be/CkzPiRkOEz8' },
    ],
  },
  {
    id: 'multiplay',
    title: 'Multi-play Application',
    image: '/projects/multiplay.jpg',
    tags: ['UI', 'SPA'],
    links: [
      { kind: 'live', url: 'https://dianakurt.github.io/stream-vibe/' },
    ],
  },
  {
    id: 'conference',
    title: 'Web — IT Conference',
    image: '/projects/conference.jpg',
    tags: ['GSAP', 'SPA'],
    links: [
      { kind: 'live', url: 'https://dianakurt.github.io/It-conf-project/' },
    ],
  },
  {
    id: 'weather',
    title: 'Weather',
    image: '/projects/weather.jpg',
    tags: ['API', 'JS'],
    links: [{ kind: 'live', url: 'https://dianakurt.github.io/Weather/' }],
  },
  {
    id: 'landing',
    title: 'Landing Page',
    image: '/projects/landing.jpg',
    tags: ['HTML', 'CSS'],
    links: [{ kind: 'live', url: 'https://dianakurt.github.io/Project1/' }],
  },
  {
    id: 'todo',
    title: 'To-Do App',
    image: '/projects/todo.jpg',
    tags: ['JavaScript'],
    links: [{ kind: 'live', url: 'https://dianakurt.github.io/ToDo-List/' }],
  },
]
