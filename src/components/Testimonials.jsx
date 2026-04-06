import { useState, useEffect, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { testimonials } from '../data/testimonials'

function Stars() {
  return (
    <div className="flex gap-0.5 justify-center mb-3">
      {[1, 2, 3, 4, 5].map((s) => (
        <span key={s} style={{ color: '#f5a623' }} className="text-xl">★</span>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const { t } = useTranslation()
  const [current, setCurrent] = useState(0)

  const next = useCallback(() =>
    setCurrent((c) => (c + 1) % testimonials.length), [])

  const prev = useCallback(() =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length), [])

  useEffect(() => {
    const timer = setInterval(next, 7000)
    return () => clearInterval(timer)
  }, [next])

  const item = testimonials[current]

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">

        <h2 className="text-2xl md:text-3xl font-400 text-gray-800 mb-12">
          {t('testimonials.title')}
        </h2>

        {/* Single testimonial */}
        <div className="min-h-[200px] flex flex-col items-center justify-center">
          <p className="font-700 text-gray-800 text-base mb-3">{item.name}</p>
          <Stars />
          <p className="text-gray-600 text-sm leading-relaxed max-w-xl mx-auto italic">
            "{item.text}"
          </p>
          <p className="text-xs text-sky-500 font-600 mt-3">{item.campus}</p>
        </div>

        {/* Dot navigation */}
        <div className="flex items-center justify-center gap-3 mt-10">
          <button
            onClick={prev}
            className="text-gray-400 hover:text-gray-700 transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-200 ${
                  i === current ? 'w-5 h-2 bg-sky-400' : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="text-gray-400 hover:text-gray-700 transition-colors"
            aria-label="Next"
          >
            <ChevronRight size={20} />
          </button>
        </div>

      </div>
    </section>
  )
}
