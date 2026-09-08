import type { NavId } from '../data/content'

export type Locale = 'ru' | 'en'

export type Messages = {
  location: string
  tagline: string
  documentTitle: string
  metaDescription: string
  nav: Record<NavId, string>
  hero: {
    projectsCta: string
  }
  about: {
    title: string
    paragraphs: string[]
  }
  experience: {
    title: string
    role: string
    period: string
    project: string
    points: string[]
  }
  education: {
    title: string
    items: { place: string; detail: string; status: string }[]
  }
  projects: {
    title: string
    intro: string
    links: {
      github: string
      live: string
      play: string
      video: string
    }
  }
  projectDescriptions: Record<string, string>
  skills: {
    title: string
    groups: { name: string; items: string[] }[]
  }
  contact: {
    title: string
    intro: string
  }
  ui: {
    themeToLight: string
    themeToDark: string
    openMenu: string
    closeMenu: string
    switchToEn: string
    switchToRu: string
  }
}

export const messages: Record<Locale, Messages> = {
  ru: {
    location: 'Алматы',
    tagline:
      'Собираю отзывчивые интерфейсы на React: чистый код, понятная архитектура и внимание к деталям.',
    documentTitle: 'Diana Suchkova — Frontend Developer',
    metaDescription:
      'Diana Suchkova — Frontend Developer | React. Портфолио проектов и опыт.',
    nav: {
      about: 'Обо мне',
      experience: 'Опыт',
      education: 'Образование',
      projects: 'Проекты',
      skills: 'Навыки',
      contact: 'Контакты',
    },
    hero: {
      projectsCta: 'Смотреть проекты',
    },
    about: {
      title: 'Обо мне',
      paragraphs: [
        'Я frontend-разработчик из Алматы. Сейчас глубоко осваиваю экосистему React и строю проекты, которые можно показать и задеплоить.',
        'Коммерческий опыт — стажировка fullstack в Itransition Group. Параллельно веду pet-проекты: от лендингов до fullstack-приложений.',
        'Frontend осваивала самостоятельно больше 2 лет — через практику и pet-проекты. Скоро пройду курсы в Astana Hub и Tech Orda, чтобы системно подтвердить навыки сертификатами.',
      ],
    },
    experience: {
      title: 'Опыт',
      role: 'Full-stack стажёр',
      period: 'Январь 2026 — Апрель 2026',
      project:
        'Inventory Management System — учёт товаров и складских операций',
      points: [
        'Спроектировала модульную frontend-архитектуру по Feature-Sliced Design (app, entities, pages, shared).',
        'Реализовала динамические кастомные поля и гибкую фильтрацию/поиск по товарам.',
        'Оптимизировала работу с серверными данными через TanStack Query и Optimistic Updates.',
        'Сделала систему прав (Public/Private) и защищённую Admin-панель для ролей и пользователей.',
        'Спроектировала схему БД в PostgreSQL (Prisma) и настроила CI/CD (Vercel / Render).',
      ],
    },
    education: {
      title: 'Образование',
      items: [
        {
          place: 'Южно-Казахстанский исследовательский университет имени М. Ауэзова',
          detail: 'Высшая школа управления и бизнеса',
          status: 'Завершено',
        },
        {
          place: 'Astana Hub',
          detail:
            'Курсы по разработке — планирую пройти для системного подтверждения навыков',
          status: 'Скоро',
        },
        {
          place: 'Tech Orda',
          detail: 'Программа с сертификацией — в планах',
          status: 'Скоро',
        },
      ],
    },
    projects: {
      title: 'Проекты',
      intro:
        'Pet-проекты и учебные работы. Можно открыть демо или посмотреть код на GitHub.',
      links: {
        github: 'GitHub',
        live: 'Открыть',
        play: 'Играть',
        video: 'Видео',
      },
    },
    projectDescriptions: {
      inventory:
        'Fullstack-приложение для создания и управления кастомными инвентарями и товарами.',
      music:
        'Процедурный музыкальный магазин: генерация треков, обложек и аудио-превью по seed.',
      forms:
        'Клиентская валидация форм в реальном времени с понятной обратной связью.',
      tictac: 'Мультиплеерная игра в реальном времени.',
      multiplay:
        'Шесть полноценных страниц с большим количеством секций и сложным UI.',
      conference: 'SPA конференции с анимациями на GSAP.',
      weather:
        'Погода по выбранному городу через внешний API. Vanilla JavaScript.',
      landing: 'Pixel-perfect вёрстка учебного макета.',
      todo: 'Простое приложение для управления задачами на JavaScript.',
    },
    skills: {
      title: 'Навыки',
      groups: [
        {
          name: 'Frontend',
          items: [
            'JavaScript (ES6+)',
            'TypeScript',
            'React',
            'Hooks & Component Architecture',
            'HTML5',
            'CSS3',
            'GSAP',
          ],
        },
        {
          name: 'Архитектура и состояние',
          items: [
            'Feature-Sliced Design',
            'TanStack Query',
            'Optimistic Updates',
            'REST API',
          ],
        },
        {
          name: 'Вёрстка',
          items: ['Responsive & Adaptive', 'BEM', 'Flexbox', 'Grid'],
        },
        {
          name: 'Инструменты и backend',
          items: [
            'Git / GitHub',
            'NPM',
            'Vite',
            'PostgreSQL',
            'Prisma',
            'CI/CD (Vercel, Render)',
          ],
        },
      ],
    },
    contact: {
      title: 'Контакты',
      intro: 'Открыта к предложениям по frontend / React. Напишите — отвечу.',
    },
    ui: {
      themeToLight: 'Включить светлую тему',
      themeToDark: 'Включить тёмную тему',
      openMenu: 'Открыть меню',
      closeMenu: 'Закрыть меню',
      switchToEn: 'Switch to English',
      switchToRu: 'Переключить на русский',
    },
  },
  en: {
    location: 'Almaty',
    tagline:
      'I build responsive React interfaces: clean code, clear architecture, and attention to detail.',
    documentTitle: 'Diana Suchkova — Frontend Developer',
    metaDescription:
      'Diana Suchkova — Frontend Developer | React. Project portfolio and experience.',
    nav: {
      about: 'About',
      experience: 'Experience',
      education: 'Education',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact',
    },
    hero: {
      projectsCta: 'View projects',
    },
    about: {
      title: 'About',
      paragraphs: [
        'I am a frontend developer based in Almaty. I focus on the React ecosystem and ship projects that can be shown and deployed.',
        'Commercial experience: a fullstack internship at Itransition Group. Alongside that I build pet projects — from landing pages to fullstack apps.',
        'I have been teaching myself frontend for more than 2 years through practice and personal projects. Next I will take Astana Hub and Tech Orda courses to confirm the skills with certificates.',
      ],
    },
    experience: {
      title: 'Experience',
      role: 'Full-stack intern',
      period: 'January 2026 — April 2026',
      project: 'Inventory Management System — goods and warehouse operations',
      points: [
        'Designed a modular frontend architecture with Feature-Sliced Design (app, entities, pages, shared).',
        'Built dynamic custom fields and flexible product filtering/search.',
        'Optimized server data flow with TanStack Query and Optimistic Updates.',
        'Implemented access control (Public/Private) and a protected Admin panel for users and roles.',
        'Designed the PostgreSQL schema (Prisma) and set up CI/CD (Vercel / Render).',
      ],
    },
    education: {
      title: 'Education',
      items: [
        {
          place: 'M. Auezov South Kazakhstan University',
          detail: 'Higher School of Management and Business',
          status: 'Completed',
        },
        {
          place: 'Astana Hub',
          detail: 'Development courses — planned for structured skill confirmation',
          status: 'Upcoming',
        },
        {
          place: 'Tech Orda',
          detail: 'Certified program — planned',
          status: 'Upcoming',
        },
      ],
    },
    projects: {
      title: 'Projects',
      intro:
        'Pet projects and study work. Open a live demo or view the code on GitHub.',
      links: {
        github: 'GitHub',
        live: 'Open',
        play: 'Play',
        video: 'Video',
      },
    },
    projectDescriptions: {
      inventory:
        'Full-stack app for creating and managing customizable inventories and items.',
      music:
        'A procedural music store with seed-based songs, covers, and audio previews.',
      forms:
        'Real-time client-side form validation with clear user feedback.',
      tictac: 'Real-time multiplayer game.',
      multiplay:
        'Six fully built pages with many sections and complex UI components.',
      conference: 'Conference SPA with GSAP animations.',
      weather:
        'Current weather for a selected city via an external API. Vanilla JavaScript.',
      landing: 'Pixel-perfect layout of a training mockup.',
      todo: 'A simple task manager built with JavaScript.',
    },
    skills: {
      title: 'Skills',
      groups: [
        {
          name: 'Frontend',
          items: [
            'JavaScript (ES6+)',
            'TypeScript',
            'React',
            'Hooks & Component Architecture',
            'HTML5',
            'CSS3',
            'GSAP',
          ],
        },
        {
          name: 'Architecture & state',
          items: [
            'Feature-Sliced Design',
            'TanStack Query',
            'Optimistic Updates',
            'REST API',
          ],
        },
        {
          name: 'Layout',
          items: ['Responsive & Adaptive', 'BEM', 'Flexbox', 'Grid'],
        },
        {
          name: 'Tools & backend',
          items: [
            'Git / GitHub',
            'NPM',
            'Vite',
            'PostgreSQL',
            'Prisma',
            'CI/CD (Vercel, Render)',
          ],
        },
      ],
    },
    contact: {
      title: 'Contact',
      intro: 'Open to frontend / React roles. Write — I will reply.',
    },
    ui: {
      themeToLight: 'Switch to light theme',
      themeToDark: 'Switch to dark theme',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      switchToEn: 'Switch to English',
      switchToRu: 'Switch to Russian',
    },
  },
}
