import { useTranslation } from 'react-i18next'
import { useGsapEntrance, useGsapStagger } from '../hooks/useGsapEntrance'

const stats = [
  { key: 'stat1', emoji: '🏫' },
  { key: 'stat2', emoji: '⭐' },
  { key: 'stat3', emoji: '👶' },
  { key: 'stat4', emoji: '🌍' },
]

export default function About() {
  const { t } = useTranslation()
  const headingRef = useGsapEntrance()
  const textRef = useGsapEntrance({ delay: 0.1 })
  const statsRef = useGsapStagger('.stat-card')

  return (
    <section id="about" className="bg-[#FFFBF5] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-12">
          <span className="inline-block bg-orange-100 text-orange-600 text-sm font-800 px-4 py-1.5 rounded-full mb-4">
            🌟 {t('about.philosophy')}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-900 text-gray-800 leading-tight mb-4">
            {t('about.title')}
          </h2>
        </div>

        {/* Description */}
        <div ref={textRef} className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg text-gray-600 font-500 leading-relaxed mb-4">
            {t('about.description')}
          </p>
          <p className="text-lg text-gray-600 font-500 leading-relaxed">
            {t('about.description2')}
          </p>
        </div>

        {/* Stats */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map(({ key, emoji }) => (
            <div
              key={key}
              className="stat-card bg-white rounded-2xl p-6 text-center shadow-sm border border-orange-100 hover:shadow-md hover:border-orange-200 transition-all duration-200"
            >
              <div className="text-4xl mb-3">{emoji}</div>
              <div className="text-3xl md:text-4xl font-900 text-orange-500 leading-none mb-1">
                {t(`about.${key}_value`)}
              </div>
              <div className="text-sm font-700 text-gray-500 mt-1">
                {t(`about.${key}_label`)}
              </div>
            </div>
          ))}
        </div>

        {/* Philosophy subtitle */}
        <div className="text-center mt-16">
          <p className="text-base font-600 text-gray-500 italic">
            {t('about.philosophy_desc')}
          </p>
        </div>
      </div>
    </section>
  )
}
