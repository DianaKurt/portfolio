type ThemeToggleProps = {
  theme: 'light' | 'dark'
  onToggle: () => void
  label: string
}

export function ThemeToggle({ theme, onToggle, label }: ThemeToggleProps) {
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={onToggle}
      aria-label={label}
      title={label}
    >
      <span className="theme-toggle__track" data-theme-active={theme}>
        <span className="theme-toggle__thumb" />
        <span className="theme-toggle__icon" aria-hidden>
          {isDark ? (
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none">
              <path
                d="M20 14.5A7.5 7.5 0 0 1 9.5 4 7.6 7.6 0 1 0 20 14.5Z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none">
              <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
              <path
                d="M12 2v2.2M12 19.8V22M4.2 12H2M22 12h-2.2M5.6 5.6l1.6 1.6M16.8 16.8l1.6 1.6M18.4 5.6l-1.6 1.6M7.2 16.8l-1.6 1.6"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          )}
        </span>
      </span>
    </button>
  )
}
