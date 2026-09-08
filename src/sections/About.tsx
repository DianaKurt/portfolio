import { useRef } from 'react'
import { profile } from '../data/content'
import { useLocale } from '../i18n/LocaleContext'
import { useScrollReveal } from '../lib/motion'
import './About.css'

export function About() {
  const rootRef = useRef<HTMLElement>(null)
  const { t } = useLocale()

  useScrollReveal(rootRef, '.about__reveal', {
    y: 40,
    duration: 0.8,
    stagger: 0.12,
  })

  return (
    <section className="section about" id="about" ref={rootRef}>
      <div className="container about__layout">
        <figure className="about__photo about__reveal">
          <img src={profile.photo} alt={profile.name} />
        </figure>

        <div className="about__copy">
          <p className="section-label about__reveal">About</p>
          <h2 className="section-title about__reveal">{t.about.title}</h2>
          <div className="about__grid">
            {t.about.paragraphs.map((text) => (
              <p key={text} className="about__text about__reveal">
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
