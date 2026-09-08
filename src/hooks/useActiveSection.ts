import { useEffect, useState } from 'react'
import { navIds, type NavId } from '../data/content'

export function useActiveSection() {
  const [active, setActive] = useState<NavId | 'top'>('top')

  useEffect(() => {
    const sections = navIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (sections.length === 0) return

    const headerOffset = 96

    const update = () => {
      const scrollPos = window.scrollY + headerOffset
      let current: NavId | 'top' = 'top'

      for (const section of sections) {
        if (section.offsetTop <= scrollPos) {
          current = section.id as NavId
        }
      }

      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 24
      if (atBottom) current = 'contact'

      setActive(current)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return active
}
