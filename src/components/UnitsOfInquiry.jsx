import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useGsapEntrance, useGsapStagger } from '../hooks/useGsapEntrance'
import { inquiryMonths } from '../data/inquiryMonths'

function FlipCard({ month, lang }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div
      className="relative h-56 sm:h-60 cursor-pointer select-none"
      style={{ perspective: '1000px' }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped((f) => !f)}
    >
      {/* Flip wrapper */}
      <div
        className="relative w-full h-full [transform-style:preserve-3d] transition-all duration-500 ease-in-out"
        style={{ transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
      >
        {/* ── FRONT ── */}
        <div
          className={`absolute inset-0 [backface-visibility:hidden] rounded-3xl bg-gradient-to-br ${month.front} flex flex-col items-center justify-center gap-3 shadow-md overflow-hidden`}
        >
          {/* Decorative circles */}
          <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/10" />
          <div className="absolute -bottom-8 -left-6 w-28 h-28 rounded-full bg-white/10" />

          <div className="relative w-20 h-20 rounded-full bg-white/25 flex items-center justify-center">
            <span className="text-5xl">{month.emoji}</span>
          </div>
          <span className="relative text-white font-900 text-lg text-center px-4 drop-shadow-sm">
            {month[lang].name}
          </span>
          <span className="relative text-white/65 text-xs font-600">
            tap to explore ✨
          </span>
        </div>

        {/* ── BACK ── */}
        <div
          className={`absolute inset-0 [backface-visibility:hidden] rounded-3xl bg-gradient-to-br ${month.back} flex flex-col justify-between p-5 shadow-md overflow-hidden`}
          style={{ transform: 'rotateY(180deg)' }}
        >
          <div className="absolute top-0 right-0 w-20 h-20 rounded-full bg-white/10 -translate-y-6 translate-x-6" />

          <div className="flex items-center gap-2">
            <span className="text-xl">{month.emoji}</span>
            <span className="text-white font-900 text-base">{month[lang].name}</span>
          </div>
          <p className="text-white/90 text-sm font-500 leading-relaxed flex-1 mt-3">
            {month[lang].desc}
          </p>
          <div className="mt-3 flex justify-end">
            <span className="text-white/40 text-xs font-600">EvoKids™</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function UnitsOfInquiry() {
  const { t, i18n } = useTranslation()
  const headingRef = useGsapEntrance()
  const gridRef = useGsapStagger('.month-card')

  const getLang = () => {
    if (i18n.language === 'de') return 'de'
    if (i18n.language === 'el') return 'el'
    return 'en'
  }

  return (
    <section className="bg-[#FFFBF5] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-14">
          <span className="inline-block bg-green-100 text-green-700 text-sm font-800 px-4 py-1.5 rounded-full mb-4">
            🗓️ {t('inquiry.title')}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-900 text-gray-800 leading-tight mb-3">
            {t('inquiry.title')}
          </h2>
          <p className="text-base text-gray-500 font-500 max-w-xl mx-auto">
            {t('inquiry.subtitle')}
          </p>
        </div>

        {/* Cards grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5"
        >
          {inquiryMonths.map((month, i) => (
            <div key={i} className="month-card">
              <FlipCard month={month} lang={getLang()} />
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-gray-400 font-500 mt-8">
          Hover or tap a card to discover what we explore each month
        </p>
      </div>
    </section>
  )
}
