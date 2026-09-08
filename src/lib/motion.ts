import { useLayoutEffect, type RefObject } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

gsap.registerPlugin(ScrollTrigger)

type RevealOptions = {
  y?: number
  duration?: number
  stagger?: number
  start?: string
}

export function useScrollReveal(
  rootRef: RefObject<HTMLElement | null>,
  selector: string,
  options: RevealOptions = {},
) {
  const reduced = usePrefersReducedMotion()
  const {
    y = 42,
    duration = 0.8,
    stagger = 0.1,
    start = 'top 75%',
  } = options

  useLayoutEffect(() => {
    if (reduced) return

    const ctx = gsap.context(() => {
      gsap.from(selector, {
        y,
        opacity: 0,
        duration,
        stagger,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: rootRef.current,
          start,
        },
      })
    }, rootRef)

    return () => ctx.revert()
  }, [reduced, selector, y, duration, stagger, start, rootRef])
}

export { gsap }
