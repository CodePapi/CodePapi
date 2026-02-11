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
      projects: 'Mentorship & Community',
      languages: 'Languages',
    },
    atsNote: 'Application ready formatting • Structured sections • Clear bullet points',
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
      projects: 'Mentoring & Community',
      languages: 'Sprachen',
    },
    atsNote: 'Anwendungsbereite Formatierung • Strukturierte Abschnitte • Klare Stichpunkte',
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
    ],
    languages: ['Englisch', 'Deutsch'],
  },
} as const

const Section = ({ title, children }: { title: string; children: ReactNode }) => (
  <section className="section">
    <div className="flex items-center gap-3">
      <div className="h-2 w-2 rounded-full bg-cyan-400" />
      <h2 className="text-xl font-semibold text-slate-100 sm:text-2xl">{title}</h2>
    </div>
    <div className="mt-5 space-y-4">{children}</div>
  </section>
)

function App() {
  const [lang, setLang] = useState<Language>('en')
  const data = content[lang]

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-slate-700/20 blur-[160px]" />
      <div className="pointer-events-none absolute -right-32 top-40 h-96 w-96 rounded-full bg-indigo-900/20 blur-[160px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-slate-800/20 blur-[180px]" />

      <div className="mx-auto max-w-6xl px-6 pb-16 pt-10 sm:px-8">
        <header className="glass rounded-3xl p-8 sm:p-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
                {data.location}
              </p>
              <h1 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">
                <span className="gradient-text">{data.name}</span>
              </h1>
              <p className="mt-2 text-lg text-slate-200 sm:text-xl">{data.role}</p>
              <p className="mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
                {data.headline}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:items-end">
              <div className="inline-flex rounded-full bg-slate-900/80 p-1">
                <button
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    lang === 'en'
                      ? 'bg-slate-100 text-slate-900'
                      : 'text-slate-300 hover:text-slate-100'
                  }`}
                  onClick={() => setLang('en')}
                  aria-pressed={lang === 'en'}
                >
                  English
                </button>
                <button
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    lang === 'de'
                      ? 'bg-slate-100 text-slate-900'
                      : 'text-slate-300 hover:text-slate-100'
                  }`}
                  onClick={() => setLang('de')}
                  aria-pressed={lang === 'de'}
                >
                  Deutsch
                </button>
              </div>
              <div className="flex flex-col gap-2 text-sm text-slate-300">
                <span>{data.contact.email}</span>
                <span>{data.contact.phone}</span>
                <a
                  href={data.contact.github}
                  className="text-cyan-300 transition hover:text-cyan-200"
                  target="_blank"
                  rel="noreferrer"
                >
                  {data.contact.github}
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-[1.4fr_1fr]">
            <div className="rounded-2xl border border-slate-800/70 bg-slate-900/50 p-6">
              <h3 className="text-lg font-semibold text-white">{data.sections.summary}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                {data.summary}
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                className="rounded-2xl border border-slate-500/40 bg-slate-800/40 px-6 py-4 text-center text-sm font-semibold text-slate-100 transition hover:bg-slate-800/60"
                href={lang === 'en' ? '/resume-en.pdf' : '/resume-de.pdf'}
                download
              >
                {data.ctas.primary}
              </a>
              <a
                className="rounded-2xl border border-slate-700/70 bg-slate-900/60 px-6 py-4 text-center text-sm font-semibold text-slate-100 transition hover:bg-slate-900"
                href={lang === 'en' ? '/resume-de.pdf' : '/resume-en.pdf'}
                download
              >
                {data.ctas.secondary}
              </a>
              <div className="rounded-2xl border border-slate-800/70 bg-slate-900/40 px-6 py-4 text-xs text-slate-400">
                {data.atsNote}
              </div>
            </div>
          </div>
        </header>

        <main className="mt-12 space-y-12">
          <Section title={data.sections.experience}>
            <div className="grid gap-5">
              {data.experience.map((role) => (
                <article key={`${role.company}-${role.period}`} className="glass rounded-2xl p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{role.title}</h3>
                      <p className="text-sm text-slate-300">
                        {role.company} • {role.location}
                      </p>
                    </div>
                    <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
                      {role.period}
                    </span>
                  </div>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-300 sm:text-base">
                    {role.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </Section>

          <Section title={data.sections.skills}>
            <div className="grid gap-5 md:grid-cols-2">
              {(Object.entries(data.skills) as [string, string[]][]).map(
                ([group, items]) => (
                <div key={group} className="glass rounded-2xl p-6">
                  <h3 className="text-base font-semibold text-white">{group}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-slate-700/70 bg-slate-900/60 px-3 py-1 text-xs text-slate-200"
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
            <Section title={data.sections.education}>
              {data.education.map((item) => (
                <div key={item.degree} className="glass rounded-2xl p-6">
                  <h3 className="text-base font-semibold text-white">{item.degree}</h3>
                  <p className="text-sm text-slate-300">
                    {item.school} • {item.period}
                  </p>
                </div>
              ))}
            </Section>

            <Section title={data.sections.certifications}>
              <div className="glass rounded-2xl p-6">
                <ul className="list-disc space-y-2 pl-5 text-sm text-slate-300 sm:text-base">
                  {data.certifications.map((cert) => (
                    <li key={cert}>{cert}</li>
                  ))}
                </ul>
              </div>
            </Section>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <Section title={data.sections.projects}>
              <div className="grid gap-4">
                {data.projects.map((project) => (
                  <div key={project.title} className="glass rounded-2xl p-6">
                    <h3 className="text-base font-semibold text-white">
                      {project.title}
                    </h3>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                      {project.period}
                    </p>
                    <p className="mt-2 text-sm text-slate-300 sm:text-base">
                      {project.summary}
                    </p>
                  </div>
                ))}
              </div>
            </Section>

            <Section title={data.sections.achievements}>
              <div className="glass rounded-2xl p-6">
                <ul className="list-disc space-y-2 pl-5 text-sm text-slate-300 sm:text-base">
                  {data.achievements.map((achievement) => (
                    <li key={achievement}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </Section>
          </div>

          <Section title={data.sections.languages}>
            <div className="glass rounded-2xl p-6">
              <div className="flex flex-wrap gap-2">
                {data.languages.map((language) => (
                  <span
                    key={language}
                    className="rounded-full border border-slate-700/70 bg-slate-900/60 px-4 py-2 text-xs text-slate-200"
                  >
                    {language}
                  </span>
                ))}
              </div>
            </div>
          </Section>
        </main>

        <footer className="mt-16 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} {data.name}. All rights reserved.
        </footer>
      </div>
    </div>
  )
}

export default App
