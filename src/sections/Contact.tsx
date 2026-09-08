import { useRef } from 'react'
import { profile } from '../data/content'
import { useLocale } from '../i18n/LocaleContext'
import { useScrollReveal } from '../lib/motion'
import './Contact.css'

export function Contact() {
  const rootRef = useRef<HTMLElement>(null)
  const { t } = useLocale()

  useScrollReveal(rootRef, '.contact__reveal', {
    y: 36,
    duration: 0.7,
    stagger: 0.08,
    start: 'top 75%',
  })

  return (
    <section className="section contact" id="contact" ref={rootRef}>
      <div className="container">
        <p className="section-label contact__reveal">Contact</p>
        <h2 className="section-title contact__reveal">{t.contact.title}</h2>
        <p className="contact__intro contact__reveal">{t.contact.intro}</p>

        <div className="contact__grid">
          <a
            className="surface contact__card contact__reveal"
            href={`mailto:${profile.email}`}
          >
            <span className="contact__label">Email</span>
            <strong>{profile.email}</strong>
          </a>
          <a
            className="surface contact__card contact__reveal"
            href={profile.telegramUrl}
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact__label">Telegram</span>
            <strong>@{profile.telegram}</strong>
          </a>
          <a
            className="surface contact__card contact__reveal"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact__label">GitHub</span>
            <strong>github.com/DianaKurt</strong>
          </a>
        </div>
      </div>
    </section>
  )
}
