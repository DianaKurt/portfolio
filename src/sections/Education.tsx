import { useRef } from 'react'
import { useLocale } from '../i18n/LocaleContext'
import { useScrollReveal } from '../lib/motion'
import './Education.css'

export function Education() {
  const rootRef = useRef<HTMLElement>(null)
  const { t } = useLocale()

  useScrollReveal(rootRef, '.education__card', {
    y: 42,
    duration: 0.7,
    stagger: 0.08,
    start: 'top 72%',
  })

  return (
    <section className="section education" id="education" ref={rootRef}>
      <div className="container">
        <p className="section-label">Education</p>
        <h2 className="section-title">{t.education.title}</h2>

        <div className="education__grid">
          {t.education.items.map((item) => (
            <article key={item.place} className="surface education__card">
              <span className="education__status">{item.status}</span>
              <h3>{item.place}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
