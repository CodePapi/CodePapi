import { useState, type ReactNode } from 'react'

type Language = 'en' | 'de'

const content = {
  en: {
    name: 'Samuel Egbajie',
    role: 'Senior Software Engineer',
    location: 'Germany',
    headline:
      'Full-stack engineer specializing in React, Node.js, and scalable web applications.',
    summary:
      'Experienced software developer and software architect with a strong background in designing, building, and optimizing user-centric products. Proven ability to ship reliable, high-performance systems using modern JavaScript/TypeScript, microservices, and cloud tooling.',
    contact: {
      email: 'oshiesam@gmail.com',
      phone: '+49 152 11623555',
      github: 'https://github.com/codepapi',
    },
    ctas: {
      primary: 'Download Resume (EN)',
      secondary: 'Download Resume (DE)',
    },
    sections: {
      summary: 'Summary',
      experience: 'Experience',
      skills: 'Skills',
      education: 'Education',
      certifications: 'Certifications',
      achievements: 'Achievements',
      projects: 'Projects & Links',
      languages: 'Languages',
    },
    atsNote: '',
    experience: [
      {
        title: 'Career Break (Health and Well-being)',
        company: 'Health and Well-being',
        location: 'Germany',
        period: 'Apr 2025 — Oct 2025',
        bullets: [
          'Career break focused on health and recovery.',
        ],
      },
      {
        title: 'Software Engineer ',
        company: 'publicplan GmbH',
        location: 'Germany',
        period: 'Jul 2023 — Mar 2025',
        bullets: [
          'Built and improved public-facing domains with a focus on usability and accessibility.',
          'Ensured engineering best practices and continuous improvement across the codebase.',
          'Contributed to architecture refinement and technical decision making.',
          'Improved performance and quality through testing and optimization.',
        ],
      },
      {
        title: 'Software Engineer (Full-Stack)',
        company: 'Lendis GmbH',
        location: 'Berlin, Germany (Hybrid)',
        period: 'Apr 2022 — Mar 2023',
        bullets: [
          'Implemented and updated application modules based on design specifications.',
          'Maintained reliable software through testing and ongoing optimization.',
          'Supported full-stack delivery with React, Node.js, and AWS services.',
        ],
      },
      {
        title: 'Senior Software Engineer',
        company: 'Baobab Partners',
        location: 'New York, United States (Remote)',
        period: 'Dec 2020 — Mar 2022',
        bullets: [
          'Built modern interfaces with React, Redux, and TypeScript.',
          'Delivered full-stack solutions with Node.js, Express, and MongoDB.',
          'Supported integrations with Salesforce/JSForce and scalable services.',
        ],
      },
      {
        title: 'Software Engineer ',
        company: 'CAD Consulting Limited',
        location: 'Port Harcourt, Rivers, Nigeria',
        period: 'Nov 2019 — Nov 2020',
        bullets: [
          'Built and maintained robust web applications for clients.',
          'Delivered interfaces using React, Redux, Ant Design, and Bootstrap.',
          'Worked on authentication, CORS, and API integration workflows.',
        ],
      },
      {
        title: 'Frontend Developer',
        company: 'Rootify',
        location: 'Frankfurt, Hesse, Germany (Remote)',
        period: 'Aug 2019 — Nov 2019',
        bullets: [
          'Built frontend features for a language-learning platform.',
          'Used React, ES6, Cloudinary, Netlify, and Git to deliver UI updates.',
        ],
      },
      {
        title: 'Program Instructor',
        company: 'TeenCoderz',
        location: 'Port Harcourt, Nigeria',
        period: 'Jun 2018 — Aug 2019',
        bullets: [
          'Taught Scratch, App Inventor, Python, JavaScript, HTML, and CSS.',
          'Supported learners with hands-on projects and problem solving.',
        ],
      },
      {
        title: 'Freelance Web Developer',
        company: 'Self Employed',
        location: 'Port Harcourt, Nigeria',
        period: '2017 — 2018',
        bullets: [
          'Built web applications and tutored students in programming fundamentals.',
          'Supported community initiatives and education programs with web solutions.',
        ],
      },
    ],
    skills: {
      Frontend: [
        'React',
        'React Hooks',
        'TypeScript',
        'JavaScript (ES6+)',
        'HTML5',
        'CSS3',
        'Redux',
        'Tailwind CSS',
        'Ant Design',
        'Next.js',
        'Material UI',
        'Bootstrap',
      ],
      Backend: [
        'Node.js',
        'NestJS',
        'Express.js',
        'REST APIs',
        'WebSockets',
        'Prisma',
        'GraphQL',
      ],
      Cloud: [
        'AWS',
        'Docker',
        'CI/CD',
        'GitHub Actions',
        'Deployment',
        'Microservices',
        'Appwrite',
        'Monorepo',
      ],
      Testing: [
        'Jest',
        'Vitest',
        'Cypress',
        'React Testing Library',
        'TDD',
        'API Testing',
        'Test Case Design',
        'Lighthouse',
      ],
      Data: ['MongoDB', 'PostgreSQL'],
      AI: ['LangChain', 'Ollama Models'],
      Engineering: [
        'Scalability',
        'Performance Optimization',
        'Software Maintenance',
        'Engineering Best Practices',
        'Code Reviews',
        'Microfrontend',
      ],
      'Other Tools & Automation': ['Make.com', 'GitHub Copilot'],
      Search: ['Algolia', 'Vector Search (Qdrant)'],
      Programming: ['Python', 'JavaScript', 'TypeScript'],
    },
    education: [
      {
        degree: 'B.Eng., Engineering',
        school: 'Caritas University, Enugu',
        period: '2010 — 2015',
      },
    ],
    certifications: [
      'iSAQB® Foundation Level (CPSA-F), Tectrain GmbH',
      'Developing Back-End Apps with Node.js & Express (IBM/Coursera)',
      'Developing Front-End Apps with React (IBM/Coursera)',
      'Introduction to Web Development (IBM/Coursera)',
      'Getting Started with Git and GitHub (IBM/Coursera)',
    ],
    achievements: [
      'HNG Finalist — Top Developers Finalist (2019)',
      'Lendis GmbH — Software Engineer: Redesigned the product search experience by introducing Algolia as a dedicated search infrastructure, reducing search latency and improving result relevance and interaction speed by over 50% across the platform.',
      'Lendis GmbH — Software Engineer: Identified performance bottlenecks through system analysis and implemented scalable solutions that improved overall application responsiveness as the platform scaled.',
      'Lendis GmbH — Software Engineer: Addressed a critical client-side security challenge involving password protection in the browser, leading to the design and development of the open-source package n-krypta, improving secure data handling in frontend environments.',
      'publicplan GmbH — Software Engineer: Resolved performance degradation in a high-traffic chatbot system by architecting and implementing Redis-based caching strategies, reducing repeated processing and improving response times under load.',
      'publicplan GmbH — Software Engineer: Improved backend scalability and stability by optimizing data access patterns and introducing caching layers for high-frequency operations.',
      'publicplan GmbH — Software Engineer: Drove modernization of legacy application components by migrating outdated codebases to modern architectures and standards, achieving 20%+ performance improvements, improved maintainability, and reduced technical debt.',
      'publicplan GmbH — Software Engineer: Contributed to system reliability improvements by proactively addressing performance constraints during scaling phases.',
      'Personal Projects — Full-Stack Development: Designed and scaled full-stack applications with a strong focus on performance and scalability, achieving 50%+ performance improvements through infrastructure optimization and resource scaling.',
      'Personal Projects — Full-Stack Development: Applied performance-driven engineering practices including load-aware resource allocation, backend optimization, and system tuning to support growing usage demands.',
      'Personal Projects — Full-Stack Development: Built and iterated systems with scalability considerations from early stages, enabling efficient growth without major architectural rewrites.',
    ],
    projects: [
      {
        title: 'PAWEN Mentorship',
        period: 'May 2022',
        summary:
          'Mentored women in tech across Africa to grow in web development.',
      },
      {
        title: 'ALC GAD Mentorship',
        period: 'Mar 2021 — Dec 2021',
        summary: 'Mentored learners as a Mobile Web Stack mentor.',
      },
      {
        title: 'Code Camp Mentor',
        period: 'Sep 2021',
        summary: 'Mentored full-stack engineers through hands-on projects.',
      },
      {
        title: 'n‑krypta (npm package)',
        period: '2023',
        summary: 'Open-source cryptography utilities published on npm.',
        link: 'https://www.npmjs.com/package/n-krypta',
      },
      {
        title: 'Best Practices for all developers',
        period: '2021',
        summary: 'Technical article on Dev.to outlining engineering best practices.',
        link: 'https://dev.to/codepapi/best-practices-for-all-developers-1ak0',
      },
      {
        title: 'Travellers App',
        period: '2020',
        summary: 'A travel booking application (wakapadi.io).',
        link: 'https://www.wakapadi.io',
      },
      {
        title: 'Portfolio Website',
        period: '2022',
        summary: 'This very portfolio built with React, Vite and Tailwind.',
        link: 'https://code-papi.vercel.app',
      },
      {
        title: 'GitHub Profile',
        period: 'Ongoing',
        summary: 'Source code and open-source work.',
        link: 'https://github.com/CodePapi',
      },
      {
        title: 'LinkedIn Profile',
        period: 'Ongoing',
        summary: 'Professional networking and contact.',
        link: 'https://www.linkedin.com/in/samuel-e-08662415b/',
      },
    ],
    languages: ['English', 'German'],
  },
  de: {
    name: 'Samuel Egbajie',
    role: 'Senior Software Engineer',
    location: 'Deutschland',
    headline:
      'Full-Stack-Engineer mit Fokus auf React, Node.js und skalierbare Webanwendungen.',
    summary:
      'Ergebnisorientierter Senior Software Engineer mit umfassender Erfahrung in Full-Stack-Entwicklung und Softwarearchitektur. Spezialisiert auf die Konzeption, Entwicklung und Optimierung skalierbarer Anwendungen, REST-APIs, Microservices und Echtzeitanwendungen mit hoher Performance.',
    contact: {
      email: 'oshiesam@gmail.com',
      phone: '+49 152 11623555',
      github: 'https://github.com/codepapi',
    },
    ctas: {
      primary: 'Lebenslauf herunterladen (DE)',
      secondary: 'Lebenslauf herunterladen (EN)',
    },
    sections: {
      summary: 'Zusammenfassung',
      experience: 'Berufserfahrung',
      skills: 'Kompetenzen',
      education: 'Ausbildung',
      certifications: 'Zertifikate',
      achievements: 'Erfolge',
      projects: 'Projects & Links',
      languages: 'Sprachen',
    },
    atsNote: '',
    experience: [
      {
        title: 'Karrierepause (Gesundheit und Wohlbefinden)',
        company: 'Health and Well-being',
        location: 'Deutschland',
        period: 'Apr 2025 — Okt 2025',
        bullets: [
          'Karrierepause mit Fokus auf Gesundheit und Erholung.',
        ],
      },
      {
        title: 'Software Engineer ',
        company: 'publicplan GmbH',
        location: 'Deutschland',
        period: 'Jul 2023 — Mär 2025',
        bullets: [
          'Aufbau und Verbesserung öffentlicher Bereiche mit Fokus auf Usability und Barrierefreiheit.',
          'Sicherstellung von Best Practices und kontinuierlicher Verbesserung.',
          'Beitrag zu Architektur-Verbesserungen und technischen Entscheidungen.',
          'Qualitätssicherung durch Tests und Performance-Optimierung.',
        ],
      },
      {
        title: 'Software Engineer (Full-Stack)',
        company: 'Lendis GmbH',
        location: 'Berlin, Deutschland (Hybrid)',
        period: 'Apr 2022 — Mär 2023',
        bullets: [
          'Implementierung und Aktualisierung von Modulen nach Designspezifikationen.',
          'Sicherstellung stabiler Software durch Tests und Optimierung.',
          'Unterstützung der Full-Stack-Entwicklung mit React, Node.js und AWS.',
        ],
      },
      {
        title: 'Senior Software Engineer',
        company: 'Baobab Partners',
        location: 'New York, USA (Remote)',
        period: 'Dez 2020 — Mär 2022',
        bullets: [
          'Entwicklung moderner Oberflächen mit React, Redux und TypeScript.',
          'Lieferung von Full-Stack-Lösungen mit Node.js, Express und MongoDB.',
          'Unterstützung von Integrationen mit Salesforce/JSForce.',
        ],
      },
      {
        title: 'Software Engineer ',
        company: 'CAD Consulting Limited',
        location: 'Port Harcourt, Rivers, Nigeria',
        period: 'Nov 2019 — Nov 2020',
        bullets: [
          'Entwicklung und Wartung robuster Webanwendungen für Kunden.',
          'Umsetzung mit React, Redux, Ant Design und Bootstrap.',
          'Zusammenarbeit bei Authentifizierung, CORS und API-Integration.',
        ],
      },
      {
        title: 'Frontend Developer',
        company: 'Rootify',
        location: 'Frankfurt, Hessen, Deutschland (Remote)',
        period: 'Aug 2019 — Nov 2019',
        bullets: [
          'Frontend-Features für eine Sprachlernplattform entwickelt.',
          'Einsatz von React, ES6, Cloudinary, Netlify und Git.',
        ],
      },
      {
        title: 'Program Instructor',
        company: 'TeenCoderz',
        location: 'Port Harcourt, Nigeria',
        period: 'Jun 2018 — Aug 2019',
        bullets: [
          'Unterricht in Scratch, App Inventor, Python, JavaScript, HTML und CSS.',
          'Betreuung praxisnaher Projekte und Problemlösung.',
        ],
      },
      {
        title: 'Freelance Web Developer',
        company: 'Self Employed',
        location: 'Port Harcourt, Nigeria',
        period: '2017 — 2018',
        bullets: [
          'Entwicklung von Webanwendungen und Unterricht in Programmiergrundlagen.',
          'Unterstützung von Bildungsinitiativen mit Weblösungen.',
        ],
      },
    ],
    skills: {
      Frontend: [
        'React',
        'React Hooks',
        'TypeScript',
        'JavaScript (ES6+)',
        'HTML5',
        'CSS3',
        'Redux',
        'Tailwind CSS',
        'Ant Design',
        'Next.js',
        'Material UI',
        'Bootstrap',
      ],
      Backend: [
        'Node.js',
        'NestJS',
        'Express.js',
        'REST-APIs',
        'WebSockets',
        'Prisma',
        'GraphQL',
      ],
      Cloud: [
        'AWS',
        'Docker',
        'CI/CD',
        'GitHub Actions',
        'Deployment',
        'Microservices',
        'Appwrite',
        'Monorepo',
      ],
      Testing: [
        'Jest',
        'Vitest',
        'Cypress',
        'React Testing Library',
        'TDD',
        'API-Testing',
        'Testfall-Design',
        'Lighthouse',
      ],
      Data: ['MongoDB', 'PostgreSQL'],
      AI: ['LangChain', 'Ollama-Modelle'],
      Engineering: [
        'Skalierbarkeit',
        'Performance-Optimierung',
        'Softwarewartung',
        'Engineering Best Practices',
        'Code Reviews',
        'Microfrontend',
      ],
      'Weitere Tools & Automatisierung': ['Make.com', 'GitHub Copilot'],
      Search: ['Algolia', 'Vektorsuche (Qdrant)'],
      Programming: ['Python', 'JavaScript', 'TypeScript'],
    },
    education: [
      {
        degree: 'B.Eng., Engineering',
        school: 'Caritas University, Enugu',
        period: '2010 — 2015',
      },
    ],
    certifications: [
      'iSAQB® Foundation Level (CPSA-F), Tectrain GmbH',
      'Developing Back-End Apps with Node.js & Express (IBM/Coursera)',
      'Developing Front-End Apps with React (IBM/Coursera)',
      'Introduction to Web Development (IBM/Coursera)',
      'Getting Started with Git and GitHub (IBM/Coursera)',
    ],
    achievements: [
      'HNG Finalist — Top Developers Finalist (2019)',
      'Lendis GmbH — Software Engineer: Das Produktsucherlebnis durch Einführung von Algolia als dedizierte Suchinfrastruktur neu gestaltet und dadurch Suchlatenz reduziert sowie Relevanz und Interaktionsgeschwindigkeit der Ergebnisse plattformweit um über 50% verbessert.',
      'Lendis GmbH — Software Engineer: Performance-Engpässe durch Systemanalyse identifiziert und skalierbare Lösungen umgesetzt, die die Gesamtreaktionsfähigkeit der Anwendung bei wachsender Plattformlast verbessert haben.',
      'Lendis GmbH — Software Engineer: Eine kritische clientseitige Sicherheitsanforderung beim Passwortschutz im Browser gelöst und dabei das Open-Source-Paket n-krypta entworfen und entwickelt, wodurch sichere Datenverarbeitung in Frontend-Umgebungen verbessert wurde.',
      'publicplan GmbH — Software Engineer: Performanceeinbußen in einem stark frequentierten Chatbot-System behoben, indem Redis-basiertes Caching entworfen und implementiert wurde, was Wiederholverarbeitung reduzierte und Antwortzeiten unter Last verbesserte.',
      'publicplan GmbH — Software Engineer: Backend-Skalierbarkeit und Stabilität durch Optimierung von Datenzugriffsmustern und Einführung von Caching-Schichten für hochfrequente Operationen verbessert.',
      'publicplan GmbH — Software Engineer: Die Modernisierung von Legacy-Komponenten vorangetrieben, veraltete Codebasen auf moderne Architekturen und Standards migriert und dabei 20%+ Performance-Verbesserungen, bessere Wartbarkeit und geringere technische Schulden erzielt.',
      'publicplan GmbH — Software Engineer: Zur Systemzuverlässigkeit beigetragen, indem Performance-Grenzen während Skalierungsphasen proaktiv adressiert wurden.',
      'Persönliche Projekte — Full-Stack-Entwicklung: Full-Stack-Anwendungen mit starkem Fokus auf Performance und Skalierbarkeit entworfen und skaliert, dabei durch Infrastruktur-Optimierung und Ressourcenskalierung 50%+ Performance-Verbesserungen erreicht.',
      'Persönliche Projekte — Full-Stack-Entwicklung: Performance-orientierte Engineering-Praktiken wie lastbewusste Ressourcenallokation, Backend-Optimierung und Systemtuning eingesetzt, um wachsende Nutzungsanforderungen zu unterstützen.',
      'Persönliche Projekte — Full-Stack-Entwicklung: Systeme von Beginn an mit Skalierbarkeit im Blick aufgebaut und iteriert, wodurch effizientes Wachstum ohne große Architektur-Überarbeitungen möglich wurde.',
    ],
    projects: [
      {
        title: 'PAWEN Mentorship',
        period: 'Mai 2022',
        summary:
          'Mentoring für Frauen in Tech in Afrika mit Fokus auf Webentwicklung.',
      },
      {
        title: 'ALC GAD Mentorship',
        period: 'Mär 2021 — Dez 2021',
        summary: 'Mentoring als Mobile-Web-Stack-Mentor.',
      },
      {
        title: 'Code Camp Mentor',
        period: 'Sep 2021',
        summary: 'Mentoring von Full-Stack-Engineers in Praxisprojekten.',
      },
      {
        title: 'n‑krypta (npm‑Paket)',
        period: '2023',
        summary: 'Open‑Source‑Kryptographie‑Utilities auf npm veröffentlicht.',
        link: 'https://www.npmjs.com/package/n-krypta',
      },
      {
        title: 'Best Practices für Entwickler*innen',
        period: '2021',
        summary: 'Technischer Artikel auf Dev.to mit bewährten Vorgehensweisen.',
        link: 'https://dev.to/codepapi/best-practices-for-all-developers-1ak0',
      },
      {
        title: 'Travellers Web App',
        period: '2020',
        summary: 'Reisebuchungs‑Anwendung (wakapadi.io).',
        link: 'https://www.wakapadi.io',
      },
      {
        title: 'Portfolio‑Webseite',
        period: '2022',
        summary: 'Diese Portfolio‑Seite selbst, gebaut mit React, Vite und Tailwind.',
        link: 'https://code-papi.vercel.app',
      },
      {
        title: 'GitHub‑Profil',
        period: 'Laufend',
        summary: 'Quellcode und Open‑Source‑Arbeiten.',
        link: 'https://github.com/CodePapi',
      },
      {
        title: 'LinkedIn‑Profil',
        period: 'Laufend',
        summary: 'Professionelles Netzwerk und Kontaktaufnahme.',
        link: 'https://www.linkedin.com/in/samuel-e-08662415b/',
      },
    ],
    languages: ['Englisch', 'Deutsch'],
  },
} as const

const Section = ({
  id,
  title,
  subtitle,
  children,
}: {
  id: string
  title: string
  subtitle?: string
  children: ReactNode
}) => (
  <section id={id} className="section scroll-mt-28 mt-16">
    <div className="mb-8">
      <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">{title}</h2>
      {subtitle ? (
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">{subtitle}</p>
      ) : null}
    </div>
    <div className="space-y-6">{children}</div>
  </section>
)

function App() {
  const [lang, setLang] = useState<Language>('en')
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const data = content[lang]

  const resumeUrl = lang === 'en' ? '/resume-en.pdf' : '/resume-de.pdf'
  const altResumeUrl = lang === 'en' ? '/resume-de.pdf' : '/resume-en.pdf'

  const navSections = [
    { id: 'summary', label: data.sections.summary },
    { id: 'experience', label: data.sections.experience },
    { id: 'skills', label: data.sections.skills },
    { id: 'projects', label: data.sections.projects },
    { id: 'achievements', label: data.sections.achievements },
    { id: 'education', label: data.sections.education },
    { id: 'certifications', label: data.sections.certifications },
    { id: 'languages', label: data.sections.languages },
  ]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (!element) return
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setMobileNavOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-900">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-sm">
              <span className="text-base font-semibold">SE</span>
            </div>
          </div>

          <nav className="hidden items-center gap-2 text-sm font-medium text-slate-600 md:flex">
            {navSections.map((section) => (
              <button
                key={section.id}
                type="button"
                onClick={() => scrollToSection(section.id)}
                className="rounded-full px-3 py-2 transition hover:bg-slate-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500/40"
              >
                {section.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-1 rounded-full bg-slate-100 p-1 md:flex">
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`rounded-full px-3 py-2 text-xs font-semibold transition ${
                  lang === 'en' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:bg-white'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLang('de')}
                className={`rounded-full px-3 py-2 text-xs font-semibold transition ${
                  lang === 'de' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:bg-white'
                }`}
              >
                DE
              </button>
            </div>

            <button
              type="button"
              onClick={() => setMobileNavOpen((open) => !open)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:bg-slate-50 md:hidden"
              aria-label="Toggle navigation"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

        {mobileNavOpen ? (
          <div className="fixed inset-x-0 top-14 z-40 md:hidden">
            <div className="mx-auto max-w-6xl overflow-y-auto rounded-b-3xl border-t border-slate-200/70 bg-white/95 backdrop-blur shadow-xl">
              <div className="flex flex-col gap-4 px-6 py-5">
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setLang('en')}
                      className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                        lang === 'en' ? 'bg-slate-100 text-slate-900' : 'text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      EN
                    </button>
                    <button
                      type="button"
                      onClick={() => setLang('de')}
                      className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                        lang === 'de' ? 'bg-slate-100 text-slate-900' : 'text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      DE
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => setMobileNavOpen(false)}
                    className="rounded-full p-2 text-slate-600 hover:bg-slate-100"
                    aria-label="Close menu"
                  >
                    ✕
                  </button>
                </div>

                <nav className="flex flex-col gap-2">
                  {navSections.map((section) => (
                    <button
                      key={section.id}
                      type="button"
                      onClick={() => scrollToSection(section.id)}
                      className="w-full rounded-xl px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:bg-slate-100"
                    >
                      {section.label}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        ) : null}

      <main className="mx-auto max-w-6xl px-6 pt-28">
        <div className="rounded-3xl bg-white/80 p-8 shadow-sm ring-1 ring-slate-200">
          <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">{data.name}</h1>
          <p className="mt-2 text-base text-slate-600">{data.role}</p>
          <p className="mt-4 text-sm text-slate-700 max-w-2xl">{data.headline}</p>
        </div>

        <Section
          id="summary"
          title={data.sections.summary}
          subtitle={data.headline}
        >
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <p className="text-base leading-relaxed text-slate-700">{data.summary}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
                >
                  {data.ctas.primary}
                </a>
                <a
                  href={altResumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  {data.ctas.secondary}
                </a>
              </div>
            </div>

            <aside className="lg:col-span-5">
              <div className="rounded-3xl bg-white/80 p-6 shadow-xl ring-1 ring-slate-200 backdrop-blur">
                <h3 className="text-sm font-semibold text-slate-900">Get in touch</h3>
                <p className="mt-2 text-sm text-slate-600">I typically reply within 24 hrs. Feel free to reach out.</p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">📧</span>
                    <div>
                      <p className="text-xs font-semibold text-slate-900">Email</p>
                      <a
                        href={`mailto:${data.contact.email}`}
                        className="text-sm font-medium text-indigo-600 hover:underline"
                      >
                        {data.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">📞</span>
                    <div>
                      <p className="text-xs font-semibold text-slate-900">Phone</p>
                      <p className="text-sm font-medium text-slate-700">{data.contact.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">💻</span>
                    <div>
                      <p className="text-xs font-semibold text-slate-900">GitHub</p>
                      <a
                        href={data.contact.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-indigo-600 hover:underline"
                      >
                        {data.contact.github.replace('https://', '')}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </Section>

        <Section id="experience" title={data.sections.experience}>
          <div className="grid gap-6">
            {data.experience.map((role) => (
              <article
                key={`${role.company}-${role.period}`}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{role.title}</h3>
                    <p className="mt-1 text-sm text-slate-600">
                      {role.company} • {role.location}
                    </p>
                  </div>
                  <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-700">
                    {role.period}
                  </span>
                </div>
                <ul className="mt-5 list-disc space-y-2 pl-5 text-sm text-slate-700">
                  {role.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        <Section id="skills" title={data.sections.skills}>
          <div className="grid gap-6 md:grid-cols-2">
            {(Object.entries(data.skills) as [string, string[]][]).map(([group, items]) => (
              <div key={group} className="overflow-hidden rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <h3 className="text-base font-semibold text-slate-900">{group}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <div className="grid gap-8 lg:grid-cols-2">
          <Section id="education" title={data.sections.education}>
            <div className="space-y-6">
              {data.education.map((item) => (
                <div
                  key={item.degree}
                  className="overflow-hidden rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
                >
                  <h3 className="text-base font-semibold text-slate-900">{item.degree}</h3>
                  <p className="mt-1 text-sm text-slate-600">
                    {item.school} • {item.period}
                  </p>
                </div>
              ))}
            </div>
          </Section>

          <Section id="certifications" title={data.sections.certifications}>
            <div className="overflow-hidden rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <ul className="list-disc space-y-2 pl-5 text-sm text-slate-700">
                {data.certifications.map((cert) => (
                  <li key={cert}>{cert}</li>
                ))}
              </ul>
            </div>
          </Section>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <Section id="projects" title={data.sections.projects}>
            <div className="grid gap-4">
              {data.projects.map((project) => (
                <div
                  key={project.title}
                  className="overflow-hidden rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-base font-semibold text-slate-900">{project.title}</h3>
                    {((project as any).link) && (
                      <a
                        href={(project as any).link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-indigo-600 hover:text-indigo-700"
                      >
                        visit ↗
                      </a>
                    )}
                  </div>
                  <p className="mt-2 text-xs uppercase tracking-wide text-slate-500">{project.period}</p>
                  <p className="mt-3 text-sm text-slate-700">{project.summary}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section id="achievements" title={data.sections.achievements}>
            <div className="overflow-hidden rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <ul className="list-disc space-y-2 pl-5 text-sm text-slate-700">
                {data.achievements.map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>
            </div>
          </Section>
        </div>

        <Section id="languages" title={data.sections.languages}>
          <div className="overflow-hidden rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <div className="flex flex-wrap gap-3">
              {data.languages.map((language) => (
                <span
                  key={language}
                  className="rounded-full bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-700"
                >
                  {language}
                </span>
              ))}
            </div>
          </div>
        </Section>

        <footer className="mt-20 border-t border-slate-200/70 pt-10 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} {data.name}. All rights reserved.
        </footer>
      </main>
    </div>
  )
}

export default App
