import { useLayoutEffect, useRef } from 'react'
import { profile } from '../data/content'
import { useLocale } from '../i18n/LocaleContext'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { gsap } from '../lib/motion'
import './Hero.css'

export function Hero() {
  const rootRef = useRef<HTMLElement>(null)
  const { t } = useLocale()
  const reduced = usePrefersReducedMotion()

  useLayoutEffect(() => {
    if (reduced) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.from('.hero__media', { scale: 1.08, duration: 1.4 }).from(
        '.hero__content > *',
        { y: 36, opacity: 0, duration: 0.85, stagger: 0.1 },
        '-=1',
      )
    }, rootRef)

    return () => ctx.revert()
  }, [reduced])

  return (
    <section className="hero" id="top" ref={rootRef}>
      <div className="hero__media" aria-hidden>
        <img src={profile.heroBg} alt="" />
        <div className="hero__overlay" />
      </div>

      <div className="container hero__content">
        <p className="hero__eyebrow">{t.location}</p>
        <h1 className="hero__name">{profile.name}</h1>
        <p className="hero__role">{profile.role}</p>
        <p className="hero__tagline">{t.tagline}</p>
        <div className="hero__actions">
          <a className="btn btn-primary" href="#projects">
            {t.hero.projectsCta}
          </a>
          <a
            className="btn btn-ghost"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
