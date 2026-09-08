import { useEffect, useState } from 'react'
import { navIds, profile } from '../data/content'
import { useActiveSection } from '../hooks/useActiveSection'
import { useLocale } from '../i18n/LocaleContext'
import { LanguageToggle } from './LanguageToggle'
import { ThemeToggle } from './ThemeToggle'
import './Header.css'

type HeaderProps = {
  theme: 'light' | 'dark'
  onToggleTheme: () => void
}

export function Header({ theme, onToggleTheme }: HeaderProps) {
  const { locale, t, toggleLocale } = useLocale()
  const active = useActiveSection()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__inner">
        <a href="#top" className="header__brand" onClick={() => setOpen(false)}>
          {profile.name}
        </a>

        <nav className={`header__nav ${open ? 'header__nav--open' : ''}`}>
          {navIds.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? 'is-active' : undefined}
              aria-current={active === id ? 'true' : undefined}
              onClick={() => setOpen(false)}
            >
              {t.nav[id]}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <LanguageToggle
            locale={locale}
            onToggle={toggleLocale}
            label={locale === 'ru' ? t.ui.switchToEn : t.ui.switchToRu}
          />
          <ThemeToggle
            theme={theme}
            onToggle={onToggleTheme}
            label={theme === 'dark' ? t.ui.themeToLight : t.ui.themeToDark}
          />
          <button
            type="button"
            className="header__menu"
            aria-label={open ? t.ui.closeMenu : t.ui.openMenu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
