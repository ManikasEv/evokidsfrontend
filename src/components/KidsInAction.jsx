import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Camera } from 'lucide-react'
import { useGsapEntrance } from '../hooks/useGsapEntrance'

gsap.registerPlugin(ScrollTrigger)

// Each "slide" is a bento-grid config — 6 placeholder slots with labels
const slides = [
  [
    { label: 'Painting',       emoji: '🎨', cols: 'col-span-2 row-span-2', bg: 'bg-emerald-50  border-emerald-100' },
    { label: 'Story Time',     emoji: '📖', cols: '',                       bg: 'bg-amber-50   border-amber-100'   },
    { label: 'Music',          emoji: '🎵', cols: '',                       bg: 'bg-stone-100  border-stone-200'   },
    { label: 'Garden Walk',    emoji: '🌿', cols: 'col-span-2',             bg: 'bg-emerald-50  border-emerald-100' },
    { label: 'Science',        emoji: '🔬', cols: '',                       bg: 'bg-amber-50   border-amber-100'   },
    { label: 'Crafts',         emoji: '✂️', cols: '',                       bg: 'bg-stone-100  border-stone-200'   },
  ],
  [
    { label: 'Role Play',      emoji: '🎭', cols: '',                       bg: 'bg-amber-50   border-amber-100'   },
    { label: 'Active Play',    emoji: '🏃', cols: '',                       bg: 'bg-stone-100  border-stone-200'   },
    { label: 'Collage',        emoji: '✂️', cols: 'col-span-2 row-span-2', bg: 'bg-emerald-50  border-emerald-100' },
    { label: 'Reading',        emoji: '📚', cols: 'col-span-2',             bg: 'bg-amber-50   border-amber-100'   },
    { label: 'Team Games',     emoji: '👫', cols: '',                       bg: '  border-stone-200'   },
    { label: 'Outdoor',        emoji: '🌤️', cols: '',                       bg: 'bg-emerald-50  border-emerald-100' },
  ],
  [
    { label: 'Drawing',        emoji: '✏️', cols: 'col-span-2',             bg: 'bg-stone-100  border-stone-200'   },
    { label: 'Dancing',        emoji: '💃', cols: '',                       bg: 'bg-amber-50   border-amber-100'   },
    { label: 'Lunch Time',     emoji: '🥗', cols: '',                       bg: 'bg-emerald-50  border-emerald-100' },
    { label: 'Nature',         emoji: '🍂', cols: 'col-span-2 row-span-2', bg: 'bg-emerald-50  border-emerald-100' },
    { label: 'Building',       emoji: '🧱', cols: '',                       bg: 'bg-amber-50   border-amber-100'   },
    { label: 'Sand & Water',   emoji: '🌊', cols: '',                       bg: 'bg-stone-100  border-stone-200'   },
  ],
]

export default function KidsInAction() {
  const { t } = useTranslation()
  const headingRef = useGsapEntrance()
  const gridRef = useRef(null)
  const [activeSlide, setActiveSlide] = useState(0)
  const isAnimating = useRef(false)
  const intervalRef = useRef(null)

  const transitionTo = (nextIdx) => {
    if (isAnimating.current || !gridRef.current) return
    isAnimating.current = true

    const cards = gridRef.current.querySelectorAll('.photo-slot')

    gsap.to(cards, {
      opacity: 0,
      scale: 0.94,
      y: 10,
      duration: 0.45,
      stagger: 0.04,
      ease: 'power2.in',
      onComplete: () => {
        setActiveSlide(nextIdx)
        // After state updates, fade in the new cards
        requestAnimationFrame(() => {
          const newCards = gridRef.current?.querySelectorAll('.photo-slot')
          if (!newCards) { isAnimating.current = false; return }
          gsap.fromTo(
            newCards,
            { opacity: 0, scale: 0.94, y: 10 },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 0.5,
              stagger: 0.06,
              ease: 'power2.out',
              onComplete: () => { isAnimating.current = false },
            }
          )
        })
      },
    })
  }

  // Auto-cycle every 5 seconds
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveSlide((prev) => {
        const next = (prev + 1) % slides.length
        transitionTo(next)
        return prev // actual update happens inside transitionTo
      })
    }, 5000)
    return () => clearInterval(intervalRef.current)
  }, [])

  // Entrance animation on scroll
  useEffect(() => {
    if (!gridRef.current) return
    const ctx = gsap.context(() => {
      gsap.from('.photo-slot', {
        immediateRender: false,
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.07,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 88%',
          toggleActions: 'play none none none',
        },
      })
    }, gridRef.current)
    return () => ctx.revert()
  }, [])

  const current = slides[activeSlide]

  return (
    <section id="kids" className="bg-stone-50 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div ref={headingRef} className="text-center mb-14">
          <span className="inline-block bg-emerald-100 text-emerald-700 text-sm font-800 px-4 py-1.5 rounded-full mb-5">
            📸 Kids in Action
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-900 text-stone-800 leading-tight mb-3">
            {t('kids.title')}
          </h2>
          <p className="text-base text-stone-500 font-500 max-w-xl mx-auto">
            {t('kids.subtitle')}
          </p>
        </div>

        {/* Bento photo grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-3 sm:grid-cols-4 auto-rows-[180px] gap-3 sm:gap-4"
        >
          {current.map((slot, i) => (
            <div
              key={i}
              className={`photo-slot ${slot.cols} ${slot.bg} border-2 rounded-2xl flex flex-col items-center justify-center gap-2 overflow-hidden relative group`}
            >
              {/* Placeholder content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4">
                <Camera size={22} className="text-stone-300" />
                <span className="text-3xl">{slot.emoji}</span>
                <span className="text-xs font-700 text-stone-400 text-center leading-tight">
                  {slot.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Slide indicators */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => transitionTo(i)}
              className={`rounded-full transition-all duration-300 ${
                i === activeSlide
                  ? 'w-6 h-2.5 bg-emerald-700'
                  : 'w-2.5 h-2.5 bg-stone-300 hover:bg-stone-400'
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        <p className="text-center text-sm text-stone-400 font-500 mt-4">
          📷 Photos coming soon — our little ones in action!
        </p>

      </div>
    </section>
  )
}
