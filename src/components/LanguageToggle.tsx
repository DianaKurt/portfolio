type LanguageToggleProps = {
  locale: 'ru' | 'en'
  onToggle: () => void
  label: string
}

export function LanguageToggle({ locale, onToggle, label }: LanguageToggleProps) {
  return (
    <button
      type="button"
      className="lang-toggle"
      onClick={onToggle}
      aria-label={label}
      title={label}
    >
      <span className={locale === 'ru' ? 'is-active' : undefined}>RU</span>
      <span className="lang-toggle__sep" aria-hidden>
        /
      </span>
      <span className={locale === 'en' ? 'is-active' : undefined}>EN</span>
    </button>
  )
}
