import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { messages, type Locale, type Messages } from './messages'

const STORAGE_KEY = 'portfolio-locale'

type LocaleContextValue = {
  locale: Locale
  t: Messages
  toggleLocale: () => void
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

function getInitialLocale(): Locale {
  if (typeof window === 'undefined') return 'ru'
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'ru' || stored === 'en') return stored
  return navigator.language.toLowerCase().startsWith('en') ? 'en' : 'ru'
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(getInitialLocale)

  useEffect(() => {
    document.documentElement.lang = locale
    document.title = messages[locale].documentTitle
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', messages[locale].metaDescription)
  }, [locale])

  const toggleLocale = useCallback(() => {
    setLocale((prev) => {
      const next = prev === 'ru' ? 'en' : 'ru'
      localStorage.setItem(STORAGE_KEY, next)
      return next
    })
  }, [])

  const value = useMemo(
    () => ({
      locale,
      t: messages[locale],
      toggleLocale,
    }),
    [locale, toggleLocale],
  )

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  )
}

export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error('useLocale must be used within LocaleProvider')
  return ctx
}
