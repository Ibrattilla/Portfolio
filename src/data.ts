/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TranslationContent, Project, Skill, ExperienceItem } from './types';

// Import images so Vite bundles them properly
import adminPanelImage from './assets/images/admin_panel.png';
import sinauwImage from './assets/images/sinauw.png';
import skySearchImage from './assets/images/sky_search.png';
import schoolProductsImage from './assets/images/school_products.png';
import arikImage from './assets/images/arik.png';

export const translations: Record<'en' | 'ru', TranslationContent> = {
  en: {
    navHome: 'Home',
    navProjects: 'Projects',
    navSkills: 'Skills',
    navExperience: 'Experience',
    navContact: 'Contact',
    
    heroGreeting: "Hi, I'm",
    heroTitle: 'Frontend Developer',
    heroSubtitle: '3+ years building modern web experiences with React, TypeScript & Tailwind CSS',
    heroIntro: 'I design and build lightweight, pixel-perfect, and highly performant web applications. My focus is on writing clean, modular code, implementing seamless transitions, and ensuring pristine UI/UX.',
    heroCtaProjects: 'View Projects',
    heroCtaContact: 'Contact Me',
    heroYearsExp: 'Years of IT Experience',
    heroProjectsDone: 'Completed Projects',
    heroSatisfiedClients: 'Happy Clients',
    
    projectsTitle: 'Featured Projects',
    projectsSubtitle: 'A selection of high-performance, responsive web applications I have built recently.',
    projectsViewMore: 'View Details',
    projectsDemo: 'Live Demo',
    projectsCode: 'Source Code',
    projectsClose: 'Close',
    projectsStack: 'Tech Stack',
    
    skillsTitle: 'Core Capabilities',
    skillsSubtitle: 'My toolkit of modern languages, libraries, framework systems, and productivity tools.',
    skillsCategoryFrontend: 'Frontend Core',
    skillsCategoryState: 'State & Query',
    skillsCategoryBackend: 'Backend & APIs',
    skillsCategoryTools: 'Development Tools',
    
    experienceTitle: 'Professional Path',
    experienceSubtitle: 'Over three years of contributing to tech teams and crafting scalable web solutions.',
    experiencePresent: 'Present',
    
    contactTitle: 'Get In Touch',
    contactSubtitle: "Have an exciting project in mind or want to discuss opportunities? Let's connect!",
    contactNameLabel: 'Your Name',
    contactEmailLabel: 'Email Address',
    contactMessageLabel: 'Your Message',
    contactPlaceholderName: 'John Doe',
    contactPlaceholderEmail: 'john@example.com',
    contactPlaceholderMessage: 'Hi Ibrattilla, I would love to collaborate on...',
    contactSendBtn: 'Send Message',
    contactSendingBtn: 'Sending...',
    contactSuccessMsg: 'Thank you! Your message has been sent successfully.',
    contactErrorMsg: 'Something went wrong. Please try again or reach out via socials.',
    
    footerText: 'Made with ❤️ by Ibrattilla',
    footerRights: 'All rights reserved.',
  },
  ru: {
    navHome: 'Главная',
    navProjects: 'Проекты',
    navSkills: 'Навыки',
    navExperience: 'Опыт',
    navContact: 'Контакты',
    
    heroGreeting: 'Привет, я',
    heroTitle: 'Frontend-разработчик',
    heroSubtitle: 'Более 3 лет создаю современные веб-приложения на React, TypeScript и Tailwind CSS',
    heroIntro: 'Я проектирую и разрабатываю легкие, пиксельно-точные и высокопроизводительные веб-приложения. Мой приоритет — чистый, модульный код, плавные интерфейсные переходы и безупречный пользовательский опыт.',
    heroCtaProjects: 'Смотреть проекты',
    heroCtaContact: 'Связаться со мной',
    heroYearsExp: 'Лет опыта в IT',
    heroProjectsDone: 'Выполненных проектов',
    heroSatisfiedClients: 'Довольных клиентов',
    
    projectsTitle: 'Избранные проекты',
    projectsSubtitle: 'Подборка высокопроизводительных, адаптивных веб-приложений, которые я разработал в последнее время.',
    projectsViewMore: 'Подробнее',
    projectsDemo: 'Демо-версия',
    projectsCode: 'Исходный код',
    projectsClose: 'Закрыть',
    projectsStack: 'Технологический стек',
    
    skillsTitle: 'Основные навыки',
    skillsSubtitle: 'Инструменты, языки, библиотеки и фреймворки, которые я использую для решения сложных задач.',
    skillsCategoryFrontend: 'Разработка интерфейса',
    skillsCategoryState: 'Управление состоянием',
    skillsCategoryBackend: 'Сервер и API',
    skillsCategoryTools: 'Инструменты разработки',
    
    experienceTitle: 'Профессиональный путь',
    experienceSubtitle: 'Более трех лет работы в технологических командах и создания масштабируемых веб-решений.',
    experiencePresent: 'Наст. время',
    
    contactTitle: 'Связаться со мной',
    contactSubtitle: 'У вас есть интересный проект или вы хотите обсудить сотрудничество? Напишите мне!',
    contactNameLabel: 'Ваше имя',
    contactEmailLabel: 'Электронная почта',
    contactMessageLabel: 'Ваше сообщение',
    contactPlaceholderName: 'Иван Иванов',
    contactPlaceholderEmail: 'ivan@example.com',
    contactPlaceholderMessage: 'Привет, Ибраттилла! Я хотел бы обсудить разработку...',
    contactSendBtn: 'Отправить сообщение',
    contactSendingBtn: 'Отправка...',
    contactSuccessMsg: 'Спасибо! Ваше сообщение было успешно отправлено.',
    contactErrorMsg: 'Что-то пошло не так. Пожалуйста, попробуйте еще раз или свяжитесь через соцсети.',
    
    footerText: 'Сделано с ❤️ Ибраттиллой',
    footerRights: 'Все права защищены.',
  }
};

export const projects: Project[] = [
  {
    id: 'admin-panel-ai',
    title: 'Admin Panel (AI)',
    description: {
      en: 'An intelligent, AI-assisted business analytics and administrative dashboard featuring real-time charts, predictive metrics, and user management.',
      ru: 'Интеллектуальная панель администратора со встроенным ИИ для бизнес-аналитики, мониторинга метрик в реальном времени и управления пользователями.'
    },
    details: {
      en: [
        'Integrated interactive charts and circular statistics using Recharts and custom canvas visualizers.',
        'Designed a clean, intuitive layout with a responsive sidebar navigation and quick search engine.',
        'Implemented simulated AI-driven predictive insights and telemetry analysis reports.',
        'Built modular forms and tables for user administration, project tracking, and risk assessment.'
      ],
      ru: [
        'Интегрировал интерактивные графики и круговые диаграммы с использованием Recharts и кастомных холстов.',
        'Разработал чистый и интуитивный макет с адаптивной боковой панелью и движком быстрого поиска.',
        'Реализовал демонстрационные предиктивные инсайты на базе ИИ и отчеты телеметрии.',
        'Создал модульные формы и таблицы для администрирования пользователей, отслеживания проектов и оценки рисков.'
      ]
    },
    image: adminPanelImage,
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts', 'Zustand', 'Lucide Icons'],
    demoUrl: 'https://admin-panel-six-weld.vercel.app/',
    githubUrl: 'https://github.com/ibrattilla/admin-panel',
    accentClass: 'text-violet-400 border-violet-400/20 bg-violet-400/10 hover:border-violet-400/40',
    glowClass: 'shadow-violet-400/10 hover:shadow-violet-400/20'
  },
  {
    id: 'sinauw-learning',
    title: 'Sinauw (Learning Centre)',
    description: {
      en: 'A modern, highly interactive online learning platform designed to connect students with professional courses, webinars, and expert tutors.',
      ru: 'Современная интерактивная платформа для онлайн-обучения, связывающая студентов с профессиональными курсами, вебинарами и экспертами.'
    },
    details: {
      en: [
        'Developed a responsive course catalog featuring category-based filtering and instant search options.',
        'Created dynamic user dashboards for students and instructors to track learning progress and assignments.',
        'Implemented smooth Framer Motion transitions and subtle hover states to maximize user engagement.',
        'Built interactive webinar registration panels and subscription plan comparison tables.'
      ],
      ru: [
        'Разработал адаптивный каталог курсов с фильтрацией по категориям и возможностью мгновенного поиска.',
        'Создал динамические личные кабинеты для студентов и преподавателей для отслеживания прогресса и заданий.',
        'Внедрил плавные анимации Framer Motion и микро-эффекты наведения для максимальной интерактивности.',
        'Разработал формы записи на вебинары и таблицы сравнения тарифных планов подписки.'
      ]
    },
    image: sinauwImage,
    tech: ['React', 'JavaScript', 'Tailwind CSS', 'Framer Motion', 'Lucide Icons'],
    demoUrl: 'https://sinauw-xi.vercel.app/',
    githubUrl: 'https://github.com/ibrattilla/Sinauw',
    accentClass: 'text-orange-400 border-orange-400/20 bg-orange-400/10 hover:border-orange-400/40',
    glowClass: 'shadow-orange-400/10 hover:shadow-orange-400/20'
  },
  {
    id: 'sky-search',
    title: 'SkySearch',
    description: {
      en: 'A high-performance flight booking and travel search engine allowing users to find best deals, hotels, and schedule trips dynamically.',
      ru: 'Высокопроизводительный поисковик авиабилетов и туров, позволяющий пользователям находить лучшие цены, отели и планировать поездки.'
    },
    details: {
      en: [
        'Built an advanced ticket search form supporting round-trip, one-way, and multi-city route configurations.',
        'Integrated date pickers and auto-completing destination inputs for frictionless booking flows.',
        'Designed a stunning hero section with high-quality media integration and smooth parallax effects.',
        'Optimized search results list rendering, enabling instant filtering by budget, airlines, and flight duration.'
      ],
      ru: [
        'Создал продвинутую форму поиска билетов с поддержкой маршрутов "туда-обратно", "в одну сторону" и сложного маршрута.',
        'Интегрировал удобные календари выбора дат и автодополнение городов назначения для быстрого бронирования.',
        'Спроектировал впечатляющий первый экран (hero-секцию) с интеграцией медиа и плавными параллакс-эффектами.',
        'Оптимизировал рендеринг результатов поиска с мгновенной фильтрацией по цене, авиакомпаниям и длительности.'
      ]
    },
    image: skySearchImage,
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Lucide Icons'],
    demoUrl: 'https://sky-search-tau.vercel.app/',
    githubUrl: 'https://github.com/ibrattilla/SkySearch',
    accentClass: 'text-blue-400 border-blue-400/20 bg-blue-400/10 hover:border-blue-400/40',
    glowClass: 'shadow-blue-400/10 hover:shadow-blue-400/20'
  },
  {
    id: 'school-products',
    title: 'SchoolProducts',
    description: {
      en: 'A full-featured e-commerce storefront for school and office accessories, featuring catalog filters, a persistent shopping cart, and quick checkouts.',
      ru: 'Полнофункциональный интернет-магазин канцелярских товаров и школьных принадлежностей с удобной фильтрацией и корзиной.'
    },
    details: {
      en: [
        'Developed responsive grid views for product listings with category filtering, sorting, and search options.',
        'Implemented a client-side shopping cart with instant quantity updates and persistent memory.',
        'Created clean product page layouts with detailed descriptions, review ratings, and related item recommendations.',
        'Styled a premium blue-themed design using utility classes for a professional retail brand vibe.'
      ],
      ru: [
        'Разработал адаптивную сетку каталога товаров с фильтрацией по категориям, сортировкой и поиском.',
        'Реализовал корзину на стороне клиента с моментальным пересчетом количества товаров и сохранением состояния.',
        'Создал чистые карточки товаров с подробными описаниями, рейтингом на основе отзывов и блоком рекомендаций.',
        'Стилизовал премиальный синий дизайн интернет-магазина для создания доверительного имиджа бренда.'
      ]
    },
    image: schoolProductsImage,
    tech: ['React', 'JavaScript', 'Tailwind CSS', 'Zustand', 'Lucide Icons'],
    demoUrl: 'https://ibrattilla.github.io/ShoolProducts/',
    githubUrl: 'https://github.com/ibrattilla/ShoolProducts',
    accentClass: 'text-indigo-400 border-indigo-400/20 bg-indigo-400/10 hover:border-indigo-400/40',
    glowClass: 'shadow-indigo-400/10 hover:shadow-indigo-400/20'
  },
  {
    id: 'arik-portfolio',
    title: 'Arik',
    description: {
      en: 'A sleek, dark-themed personal brand portfolio for a creative designer and developer, focusing on high-end typography and layouts.',
      ru: 'Элегантный темный личный сайт-портфолио веб-дизайнера и разработчика с акцентом на эффектную типографику и композицию.'
    },
    details: {
      en: [
        'Coded a high-contrast dark visual design with custom fonts, bold slogans, and minimal UI decoration.',
        'Structured a clean multi-page structure with fluid navigation and call-to-action sections.',
        'Optimized page load speed and asset delivery for high rankings on search engine results.',
        'Crafted micro-animations on interactive cards and contact forms to elevate the studio identity.'
      ],
      ru: [
        'Разработал высококонтрастный темный дизайн с кастомной каллиграфической типографикой и минималистичным интерфейсом.',
        'Структурировал удобный многостраничный переход с плавной навигацией и кнопками призыва к действию.',
        'Оптимизировал скорость загрузки страниц и медиа-ресурсов для максимального балла в поисковых системах.',
        'Реализовал микро-анимации на интерактивных карточках и формах обратной связи для укрепления имиджа.'
      ]
    },
    image: arikImage,
    tech: ['React', 'JavaScript', 'Tailwind CSS', 'Framer Motion', 'Lucide Icons'],
    demoUrl: 'https://arik-three.vercel.app/',
    githubUrl: 'https://github.com/ibrattilla/Arik',
    accentClass: 'text-amber-400 border-amber-400/20 bg-amber-400/10 hover:border-amber-400/40',
    glowClass: 'shadow-amber-400/10 hover:shadow-amber-400/20'
  },
  {
    id: 'the-book-bot',
    title: 'TheB00K_bot',
    description: {
      en: 'A Telegram bot for reading and buying books with an integrated mini-app, featuring a curated collection of literary masterpieces and one-touch ordering.',
      ru: 'Telegram-бот для чтения и покупки книг с интегрированным мини-приложением, предлагающий коллекцию литературных шедевров и заказ в один клик.'
    },
    details: {
      en: [
        'Developed a Telegram bot with inline navigation and quick book search functionality.',
        'Built a responsive mini-app with category filtering (Fantasy, Detective, Novel, Horror, Psychology, Classics).',
        'Implemented one-touch ordering system with seamless Telegram integration.',
        'Designed a modern dark-themed UI with smooth animations and intuitive user experience.'
      ],
      ru: [
        'Разработал Telegram-бот с инлайн-навигацией и быстрым поиском книг.',
        'Создал адаптивное мини-приложение с фильтрацией по категориям (Фантастика, Детектив, Роман, Ужасы, Психология, Классика).',
        'Реализовал систему заказа в один клик с бесшовной интеграцией в Telegram.',
        'Спроектировал современный темный интерфейс с плавными анимациями и интуитивным пользовательским опытом.'
      ]
    },
    image: sinauwImage,
    tech: ['Telegram Bot API', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    demoUrl: 'https://t.me/TheB00K_bot',
    githubUrl: '',
    accentClass: 'text-emerald-400 border-emerald-400/20 bg-emerald-400/10 hover:border-emerald-400/40',
    glowClass: 'shadow-emerald-400/10 hover:shadow-emerald-400/20'
  }
];

export const skills: Skill[] = [
  // Frontend
  { name: 'React 18 / 19', iconName: 'Atom', level: 95, category: 'frontend' },
  { name: 'TypeScript', iconName: 'Code', level: 90, category: 'frontend' },
  { name: 'Tailwind CSS', iconName: 'Palette', level: 95, category: 'frontend' },
  { name: 'JavaScript (ES6+)', iconName: 'FileJson', level: 95, category: 'frontend' },
  { name: 'HTML5 / CSS3', iconName: 'Layout', level: 95, category: 'frontend' },
  
  // State
  { name: 'Zustand', iconName: 'Cpu', level: 88, category: 'state' },
  { name: 'TanStack Query', iconName: 'RefreshCw', level: 90, category: 'state' },
  { name: 'Redux Toolkit', iconName: 'Layers', level: 80, category: 'state' },
  
  // Backend
  { name: 'Node.js', iconName: 'Server', level: 75, category: 'backend' },
  { name: 'Express.js', iconName: 'Compass', level: 78, category: 'backend' },
  { name: 'REST APIs / JSON', iconName: 'Database', level: 90, category: 'backend' },
  
  // Tools
  { name: 'Vite / Webpack', iconName: 'Zap', level: 88, category: 'tools' },
  { name: 'Git & GitHub', iconName: 'Github', level: 90, category: 'tools' },
  { name: 'Framer Motion', iconName: 'Sparkles', level: 85, category: 'tools' },
];

export const experience: ExperienceItem[] = [
  {
    period: '2024 - Present',
    role: {
      en: 'Lead Frontend Developer',
      ru: 'Ведущий Frontend-разработчик'
    },
    company: 'Udevs / IT Solutions Agency',
    description: {
      en: 'Responsible for architectural planning and frontend implementation of enterprise web dashboards and responsive client apps.',
      ru: 'Отвечаю за проектирование архитектуры и фронтенд-разработку корпоративных панелей управления и адаптивных веб-приложений.'
    },
    achievements: {
      en: [
        'Led transition of core projects to Vite and Tailwind CSS v4, improving compilation times by 50%.',
        'Implemented custom data visualization framework reducing bundle sizes and rendering latency by 35%.',
        'Mentored junior developers, introduced comprehensive code review practices and CI/CD lint checking pipelines.'
      ],
      ru: [
        'Руководил переносом ключевых проектов на Vite и Tailwind CSS v4, что ускорило сборку и компиляцию на 50%.',
        'Внедрил кастомные средства визуализации данных, сократив размер бандла и задержки рендеринга на 35%.',
        'Курировал младших разработчиков, ввел практики детального код-ревью и настроил пайплайны линтинга в CI/CD.'
      ]
    }
  },
  {
    period: '2023 - 2024',
    role: {
      en: 'Frontend Developer',
      ru: 'Frontend-разработчик'
    },
    company: 'Nova Lab Startup Ecosystem',
    description: {
      en: 'Developed headless e-commerce structures, customized catalog systems, and dashboard management tools.',
      ru: 'Разрабатывал headless e-commerce платформы, оптимизированные системы каталогов и инструменты для аналитики.'
    },
    achievements: {
      en: [
        'Architected offline-first state machines for catalog browsing using Zustand and local caching mechanisms.',
        'Refactored legacy application codebase into modern React hooks and strict TypeScript, reducing runtime errors by 70%.',
        'Optimized core web vitals, raising SEO and performance ratings from average to excellent.'
      ],
      ru: [
        'Спроектировал отказоустойчивые offline-first хранилища для каталога товаров с использованием Zustand и локального кэша.',
        'Провел рефакторинг устаревшего кода на современные хуки React и строгий TypeScript, сократив ошибки во время работы на 70%.',
        'Оптимизировал показатели Core Web Vitals, подняв рейтинг производительности и SEO до отличных показателей.'
      ]
    }
  },
  {
    period: '2023',
    role: {
      en: 'Junior Frontend Developer',
      ru: 'Младший Frontend-разработчик'
    },
    company: 'Tech Solutions Studio',
    description: {
      en: 'Coded high-fidelity user interfaces based on Figma design system layouts, built interactive landing pages and reusable component kits.',
      ru: 'Занимался версткой пиксельно-точных пользовательских интерфейсов по макетам Figma, создавал интерактивные лендинги и библиотеки UI-компонентов.'
    },
    achievements: {
      en: [
        'Developed an internal library of accessible, styled UI components, reducing design-to-code iteration times.',
        'Implemented full cross-browser and adaptive styling on multiple high-traffic landing pages.',
        'Integrated RESTful APIs and set up automated unit-testing suites for client verification.'
      ],
      ru: [
        'Разработал внутреннюю библиотеку доступных (WAI-ARIA) стилизованных UI-компонентов, ускорив циклы разработки.',
        'Реализовал полную кроссбраузерную и адаптивную верстку на десятках высоконагруженных посадочных страниц.',
        'Интегрировал RESTful API и настроил автоматизированное юнит-тестирование для проверки корректности данных.'
      ]
    }
  }
];
