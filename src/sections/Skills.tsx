import { useRef } from 'react'
import { useLocale } from '../i18n/LocaleContext'
import { useScrollReveal } from '../lib/motion'
import './Skills.css'

export function Skills() {
  const rootRef = useRef<HTMLElement>(null)
  const { t } = useLocale()

  useScrollReveal(rootRef, '.skills__group', {
    y: 36,
    duration: 0.7,
    stagger: 0.1,
    start: 'top 72%',
  })

  return (
    <section className="section skills" id="skills" ref={rootRef}>
      <div className="container">
        <p className="section-label">Skills</p>
        <h2 className="section-title">{t.skills.title}</h2>

        <div className="skills__grid">
          {t.skills.groups.map((group) => (
            <article key={group.name} className="surface skills__group">
              <h3>{group.name}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
