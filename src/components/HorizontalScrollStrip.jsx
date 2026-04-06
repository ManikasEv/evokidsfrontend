import { useRef, useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'

/**
 * Mobile / tablet: horizontal scroll with obvious affordances — edge fades + arrow buttons + optional hint.
 * Desktop: pass `lg:overflow-visible` etc. so arrows/gradients hide via `lg:hidden` on controls.
 */
export default function HorizontalScrollStrip({
  children,
  className = '',
  scrollClassName = '',
  /** Tailwind gradient origin, e.g. `from-white` or `from-[#f8f8f8]` */
  gradientFrom = 'from-white',
  showHint = true,
}) {
  const scrollRef = useRef(null)
  const { t } = useTranslation()
  const [state, setState] = useState({ left: false, right: false, overflow: false })

  const update = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    const { scrollLeft, scrollWidth, clientWidth } = el
    const overflow = scrollWidth > clientWidth + 2
    setState({
      overflow,
      left: overflow && scrollLeft > 4,
      right: overflow && scrollLeft < scrollWidth - clientWidth - 4,
    })
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    update()
    el.addEventListener('scroll', update, { passive: true })
    const ro = new ResizeObserver(() => update())
    ro.observe(el)
    window.addEventListener('resize', update)
    return () => {
      el.removeEventListener('scroll', update)
      ro.disconnect()
      window.removeEventListener('resize', update)
    }
  }, [update])

  const scrollByDir = (dir) => {
    const el = scrollRef.current
    if (!el) return
    const step = Math.min(el.clientWidth * 0.82, 360)
    el.scrollBy({ left: dir * step, behavior: 'smooth' })
  }

  return (
    <div className={`relative ${className}`}>
      {state.overflow && (
        <>
          <div
            className={`pointer-events-none absolute inset-y-0 left-0 z-[1] w-14 bg-gradient-to-r ${gradientFrom} to-transparent transition-opacity duration-300 lg:hidden ${
              state.left ? 'opacity-100' : 'opacity-0'
            }`}
            aria-hidden
          />
          <div
            className={`pointer-events-none absolute inset-y-0 right-0 z-[1] w-14 bg-gradient-to-l ${gradientFrom} to-transparent transition-opacity duration-300 lg:hidden ${
              state.right ? 'opacity-100' : 'opacity-0'
            }`}
            aria-hidden
          />
        </>
      )}

      <button
        type="button"
        aria-label={t('ui.scroll_left')}
        onClick={() => scrollByDir(-1)}
        className={`absolute left-0 top-1/2 z-[2] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200/90 bg-white/95 text-gray-700 shadow-lg backdrop-blur-sm transition-all duration-200 hover:border-sky-300 hover:bg-sky-50 hover:text-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 active:scale-95 lg:hidden ${
          state.left ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <ChevronLeft size={22} strokeWidth={2.25} aria-hidden />
      </button>
      <button
        type="button"
        aria-label={t('ui.scroll_right')}
        onClick={() => scrollByDir(1)}
        className={`absolute right-0 top-1/2 z-[2] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200/90 bg-white/95 text-gray-700 shadow-lg backdrop-blur-sm transition-all duration-200 hover:border-sky-300 hover:bg-sky-50 hover:text-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 active:scale-95 lg:hidden ${
          state.right ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <ChevronRight size={22} strokeWidth={2.25} aria-hidden />
      </button>

      <div ref={scrollRef} className={scrollClassName}>
        {children}
      </div>

      {showHint && state.overflow && (
        <p className="mt-3 flex items-center justify-center gap-2 text-center lg:hidden">
          <span className="flex h-7 w-7 shrink-0 animate-pulse items-center justify-center rounded-full bg-sky-100 text-sky-600">
            <ChevronLeft size={15} strokeWidth={2.5} aria-hidden />
          </span>
          <span className="max-w-[14rem] text-[11px] font-semibold uppercase leading-tight tracking-[0.1em] text-gray-500">
            {t('ui.scroll_for_more')}
          </span>
          <span className="flex h-7 w-7 shrink-0 animate-pulse items-center justify-center rounded-full bg-sky-100 text-sky-600 [animation-delay:300ms]">
            <ChevronRight size={15} strokeWidth={2.5} aria-hidden />
          </span>
        </p>
      )}
    </div>
  )
}
