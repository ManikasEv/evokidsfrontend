import { useTranslation } from 'react-i18next'
import { useGsapEntrance, useGsapStagger } from '../hooks/useGsapEntrance'

const cards = [
  { key: 'card1', emoji: '🎮', bg: 'bg-orange-50', border: 'border-orange-200', accent: 'text-orange-500', iconBg: 'bg-orange-100' },
  { key: 'card2', emoji: '🌍', bg: 'bg-sky-50', border: 'border-sky-200', accent: 'text-sky-500', iconBg: 'bg-sky-100' },
  { key: 'card3', emoji: '👫', bg: 'bg-green-50', border: 'border-green-200', accent: 'text-green-600', iconBg: 'bg-green-100' },
  { key: 'card4', emoji: '❤️', bg: 'bg-pink-50', border: 'border-pink-200', accent: 'text-pink-500', iconBg: 'bg-pink-100' },
  { key: 'card5', emoji: '🎨', bg: 'bg-violet-50', border: 'border-violet-200', accent: 'text-violet-500', iconBg: 'bg-violet-100' },
  { key: 'card6', emoji: '⭐', bg: 'bg-amber-50', border: 'border-amber-200', accent: 'text-amber-500', iconBg: 'bg-amber-100' },
]

export default function Philosophy() {
  const { t } = useTranslation()
  const headingRef = useGsapEntrance()
  const cardsRef = useGsapStagger('.phil-card')

  return (
    <section className="bg-[#FFFBF5] py-20 md:py-28 border-y border-orange-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-14">
          <span className="inline-block bg-violet-100 text-violet-600 text-sm font-800 px-4 py-1.5 rounded-full mb-4">
            📚 {t('philosophy.title')}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-900 text-gray-800 leading-tight">
            {t('philosophy.title')}
          </h2>
        </div>

        {/* Cards */}
        <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map(({ key, emoji, bg, border, accent, iconBg }) => (
            <div
              key={key}
              className={`phil-card ${bg} border ${border} rounded-3xl p-7 hover:shadow-lg transition-all duration-300 group`}
            >
              <div className={`${iconBg} w-14 h-14 rounded-2xl flex items-center justify-center mb-5 text-2xl`}>
                {emoji}
              </div>
              <h3 className={`text-lg font-800 ${accent} mb-3`}>
                {t(`philosophy.${key}_title`)}
              </h3>
              <p className="text-gray-600 font-500 text-sm leading-relaxed">
                {t(`philosophy.${key}_desc`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
