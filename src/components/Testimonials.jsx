import { useState, useEffect, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useGsapEntrance } from '../hooks/useGsapEntrance'
import { testimonials } from '../data/testimonials'

function StarRating() {
  return (
    <div className="flex gap-0.5 mb-4">
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className="text-yellow-400 text-lg">★</span>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const { t } = useTranslation()
  const [current, setCurrent] = useState(0)
  const headingRef = useGsapEntrance()

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  }, [])

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % testimonials.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  const getVisible = () => {
    const indices = []
    for (let i = 0; i < 3; i++) {
      indices.push((current + i) % testimonials.length)
    }
    return indices
  }

  return (
    <section className="bg-[#FFFBF5] py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-14">
          <span className="inline-block bg-violet-100 text-violet-700 text-sm font-800 px-4 py-1.5 rounded-full mb-4">
            💬 {t('testimonials.title')}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-900 text-gray-800 leading-tight mb-3">
            {t('testimonials.title')}
          </h2>
          <p className="text-base text-gray-500 font-500 max-w-xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Cards grid — shows 1 on mobile, 2 on md, 3 on lg */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getVisible().map((idx, i) => {
              const item = testimonials[idx]
              return (
                <div
                  key={`${idx}-${i}`}
                  className={`bg-white rounded-3xl p-7 shadow-sm border border-violet-100 flex flex-col ${
                    i > 0 ? 'hidden md:flex' : 'flex'
                  } ${i > 1 ? 'md:hidden lg:flex' : ''}`}
                >
                  <StarRating />
                  <p className="text-gray-600 font-500 text-sm leading-relaxed flex-1 mb-6 italic">
                    "{item.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-400 to-pink-400 flex items-center justify-center text-white font-800 text-sm shrink-0">
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-800 text-gray-800 text-sm leading-tight">{item.name}</p>
                      <p className="text-xs text-violet-500 font-600">{item.campus}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white border border-violet-200 text-violet-500 hover:bg-violet-100 flex items-center justify-center transition-colors duration-200 shadow-sm"
              aria-label="Previous"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-200 ${
                    i === current
                      ? 'w-6 h-2.5 bg-violet-500'
                      : 'w-2.5 h-2.5 bg-violet-200 hover:bg-violet-300'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-white border border-violet-200 text-violet-500 hover:bg-violet-100 flex items-center justify-center transition-colors duration-200 shadow-sm"
              aria-label="Next"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
