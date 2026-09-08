import { useRef } from 'react'
import { projects } from '../data/content'
import { useLocale } from '../i18n/LocaleContext'
import { useScrollReveal } from '../lib/motion'
import './Projects.css'

export function Projects() {
  const rootRef = useRef<HTMLElement>(null)
  const { t } = useLocale()

  useScrollReveal(rootRef, '.project-card', {
    y: 42,
    duration: 0.7,
    stagger: 0.08,
    start: 'top 70%',
  })

  return (
    <section className="section projects" id="projects" ref={rootRef}>
      <div className="container">
        <p className="section-label">Projects</p>
        <h2 className="section-title">{t.projects.title}</h2>
        <p className="projects__intro">{t.projects.intro}</p>

        <div className="projects__grid">
          {projects.map((project) => (
            <article
              key={project.id}
              className="surface project-card"
              data-cursor="hover"
            >
              <div className="project-card__media">
                <img src={project.image} alt={project.title} loading="lazy" />
              </div>
              <div className="project-card__body">
                <div className="project-card__tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <h3>{project.title}</h3>
                <p>{t.projectDescriptions[project.id]}</p>
                <div className="project-card__links">
                  {project.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {t.projects.links[link.kind]}
                      <span aria-hidden>→</span>
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
