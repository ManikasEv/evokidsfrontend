import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export function useGsapEntrance(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    if (prefersReducedMotion()) return
    const el = ref.current
    if (!el) return

    const ctx = gsap.context(() => {
      gsap.from(el, {
        immediateRender: false,
        opacity: 0,
        y: options.y ?? 24,
        duration: options.duration ?? 0.65,
        delay: options.delay ?? 0,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 92%',
          toggleActions: 'play none none none',
        },
      })
    }, el)

    return () => ctx.revert()
  }, [])

  return ref
}

export function useGsapStagger(selector = '.stagger-item', options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    if (prefersReducedMotion()) return
    const el = ref.current
    if (!el) return

    const ctx = gsap.context(() => {
      const items = Array.from(el.querySelectorAll(selector))
      if (!items.length) return

      gsap.from(items, {
        immediateRender: false,
        opacity: 0,
        y: 18,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          toggleActions: 'play none none none',
        },
        ...options,
      })
    }, el)

    return () => ctx.revert()
  }, [])

  return ref
}

export function useGsapHeroEntrance() {
  const ref = useRef(null)

  useEffect(() => {
    if (prefersReducedMotion()) return
    const el = ref.current
    if (!el) return

    const ctx = gsap.context(() => {
      gsap.from('.hero-item', {
        opacity: 0,
        y: 20,
        duration: 0.65,
        stagger: 0.12,
        delay: 0.15,
        ease: 'power2.out',
      })
    }, el)

    return () => ctx.revert()
  }, [])

  return ref
}
