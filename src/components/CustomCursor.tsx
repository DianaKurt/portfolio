import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

function isHoverTarget(target: EventTarget | null) {
  if (!(target instanceof Element)) return false
  return Boolean(target.closest('a, button, [data-cursor="hover"]'))
}

export function CustomCursor() {
  const reduced = usePrefersReducedMotion()
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (reduced) return

    const finePointer = window.matchMedia('(pointer: fine)').matches
    if (!finePointer) return

    document.body.classList.add('has-custom-cursor')

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    const xTo = gsap.quickTo(dot, 'x', { duration: 0.12, ease: 'power3' })
    const yTo = gsap.quickTo(dot, 'y', { duration: 0.12, ease: 'power3' })
    const ringX = gsap.quickTo(ring, 'x', { duration: 0.35, ease: 'power3' })
    const ringY = gsap.quickTo(ring, 'y', { duration: 0.35, ease: 'power3' })

    const onMove = (e: MouseEvent) => {
      xTo(e.clientX)
      yTo(e.clientY)
      ringX(e.clientX)
      ringY(e.clientY)
    }

    const onOver = (e: MouseEvent) => {
      if (!isHoverTarget(e.target)) return
      gsap.to(ring, { scale: 1.55, duration: 0.25, ease: 'power2.out' })
      gsap.to(dot, { scale: 0.55, duration: 0.25 })
    }

    const onOut = (e: MouseEvent) => {
      if (!isHoverTarget(e.target)) return
      const related = e.relatedTarget
      if (isHoverTarget(related)) return
      gsap.to(ring, { scale: 1, duration: 0.25, ease: 'power2.out' })
      gsap.to(dot, { scale: 1, duration: 0.25 })
    }

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)

    return () => {
      document.body.classList.remove('has-custom-cursor')
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
    }
  }, [reduced])

  if (reduced) return null

  return (
    <>
      <div className="cursor-dot" ref={dotRef} aria-hidden />
      <div className="cursor-ring" ref={ringRef} aria-hidden />
    </>
  )
}
