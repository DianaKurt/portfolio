import { useRef } from 'react'
import { useLocale } from '../i18n/LocaleContext'
import { useScrollReveal } from '../lib/motion'
import './Experience.css'

export function Experience() {
  const rootRef = useRef<HTMLElement>(null)
  const { t } = useLocale()

  useScrollReveal(rootRef, '.experience__card', {
    y: 48,
    duration: 0.9,
    stagger: 0,
    start: 'top 72%',
  })

  const item = t.experience

  return (
    <section className="section experience" id="experience" ref={rootRef}>
      <div className="container">
        <p className="section-label">Experience</p>
        <h2 className="section-title">{item.title}</h2>

        <article className="surface experience__card">
          <div className="experience__head">
            <div>
              <h3>{item.role}</h3>
              <p className="experience__company">Itransition Group</p>
            </div>
            <p className="experience__period">{item.period}</p>
          </div>

          <p className="experience__project">{item.project}</p>

          <ul className="experience__list">
            {item.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}
