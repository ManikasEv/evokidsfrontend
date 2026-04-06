import { useState, useEffect, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { testimonials } from '../data/testimonials'
import { useHomeActivityPhotos } from '../context/ActivityPhotosContext'
import HorizontalScrollStrip from './HorizontalScrollStrip'

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
  const tPhotos = useHomeActivityPhotos()?.testimonials ?? []
  const [left, center, right] = tPhotos
  const accentRow = [left, center, right].filter(Boolean)
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
    <section className="bg-white py-10 md:py-16 lg:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">

        {accentRow.length > 0 && (
          <HorizontalScrollStrip
            className="mb-6 md:mb-10"
            gradientFrom="from-white"
            scrollClassName="
              -mx-4 flex justify-start gap-3 overflow-x-auto px-4 pb-1 hide-scrollbar
              sm:mx-0 sm:justify-center sm:overflow-visible sm:px-0 sm:pb-0
            "
          >
            {accentRow.map((src, i) => (
              <div
                key={i}
                className={`h-20 w-20 shrink-0 overflow-hidden rounded-2xl shadow-md ring-2 ring-white sm:h-28 sm:w-28 ${
                  i % 2 === 1 ? 'rotate-[2deg]' : '-rotate-2'
                }`}
              >
                <img
                  src={src}
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </div>
            ))}
          </HorizontalScrollStrip>
        )}

        <h2 className="mb-8 text-xl font-400 text-gray-800 md:mb-12 md:text-3xl">
          {t('testimonials.title')}
        </h2>

        {/* Single testimonial */}
        <div className="flex min-h-[140px] flex-col items-center justify-center md:min-h-[200px]">
          <p className="font-700 text-gray-800 text-base mb-3">{item.name}</p>
          <Stars />
          <p className="text-gray-600 text-sm leading-relaxed max-w-xl mx-auto italic">
            "{item.text}"
          </p>
          <p className="text-xs text-sky-500 font-600 mt-3">{item.campus}</p>
        </div>

        {/* Dot navigation */}
        <div className="mt-6 flex items-center justify-center gap-3 md:mt-10">
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
