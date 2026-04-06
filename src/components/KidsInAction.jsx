import { useTranslation } from 'react-i18next'
import { useGsapEntrance, useGsapStagger } from '../hooks/useGsapEntrance'

const activities = [
  {
    key: 'painting',
    emoji: '🎨',
    size: 'lg:col-span-2',
    gradient: 'from-orange-400 to-pink-400',
    lightBg: 'bg-orange-50',
    border: 'border-orange-200',
    text: 'text-orange-600',
  },
  {
    key: 'collage',
    emoji: '✂️',
    size: '',
    gradient: 'from-pink-400 to-violet-400',
    lightBg: 'bg-pink-50',
    border: 'border-pink-200',
    text: 'text-pink-600',
  },
  {
    key: 'music',
    emoji: '🎵',
    size: '',
    gradient: 'from-violet-400 to-sky-400',
    lightBg: 'bg-violet-50',
    border: 'border-violet-200',
    text: 'text-violet-600',
  },
  {
    key: 'story',
    emoji: '📖',
    size: '',
    gradient: 'from-sky-400 to-teal-400',
    lightBg: 'bg-sky-50',
    border: 'border-sky-200',
    text: 'text-sky-600',
  },
  {
    key: 'science',
    emoji: '🔬',
    size: '',
    gradient: 'from-teal-400 to-green-400',
    lightBg: 'bg-teal-50',
    border: 'border-teal-200',
    text: 'text-teal-600',
  },
  {
    key: 'nature',
    emoji: '🌿',
    size: 'lg:col-span-2',
    gradient: 'from-green-400 to-lime-400',
    lightBg: 'bg-green-50',
    border: 'border-green-200',
    text: 'text-green-600',
  },
  {
    key: 'roleplay',
    emoji: '🎭',
    size: '',
    gradient: 'from-amber-400 to-orange-400',
    lightBg: 'bg-amber-50',
    border: 'border-amber-200',
    text: 'text-amber-600',
  },
  {
    key: 'active',
    emoji: '🏃',
    size: '',
    gradient: 'from-red-400 to-orange-400',
    lightBg: 'bg-red-50',
    border: 'border-red-200',
    text: 'text-red-600',
  },
]

export default function KidsInAction() {
  const { t } = useTranslation()
  const headingRef = useGsapEntrance()
  const gridRef = useGsapStagger('.activity-card')

  return (
    <section id="kids" className="bg-[#FFFBF5] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-14">
          <span className="inline-block bg-pink-100 text-pink-600 text-sm font-800 px-4 py-1.5 rounded-full mb-4">
            ✂️ {t('kids.badge')}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-900 text-gray-800 leading-tight mb-3">
            {t('kids.title')}
          </h2>
          <p className="text-base text-gray-500 font-500 max-w-xl mx-auto">
            {t('kids.subtitle')}
          </p>
        </div>

        {/* Activity grid — bento-box style */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {activities.map(({ key, emoji, size, gradient, lightBg, border, text }) => (
            <div
              key={key}
              className={`activity-card ${size} ${lightBg} border-2 ${border} rounded-3xl overflow-hidden group hover:shadow-lg transition-all duration-300`}
            >
              {/* Colourful top strip */}
              <div className={`bg-gradient-to-r ${gradient} h-2 w-full`} />

              <div className="p-6 sm:p-7">
                {/* Icon bubble */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center text-2xl mb-5 shadow-sm`}>
                  {emoji}
                </div>

                <h3 className={`text-lg font-800 ${text} mb-2`}>
                  {t(`kids.${key}_title`)}
                </h3>
                <p className="text-sm font-500 text-gray-500 leading-relaxed">
                  {t(`kids.${key}_desc`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
