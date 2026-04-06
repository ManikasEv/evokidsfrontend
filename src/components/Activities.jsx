import { useTranslation } from 'react-i18next'
import { useGsapEntrance, useGsapStagger } from '../hooks/useGsapEntrance'

const activities = [
  { key: 'painting',  emoji: '🎨', size: 'lg:col-span-2', accent: 'emerald' },
  { key: 'collage',   emoji: '✂️', size: '',              accent: 'amber'   },
  { key: 'music',     emoji: '🎵', size: '',              accent: 'emerald' },
  { key: 'story',     emoji: '📖', size: '',              accent: 'amber'   },
  { key: 'science',   emoji: '🔬', size: '',              accent: 'emerald' },
  { key: 'nature',    emoji: '🌿', size: 'lg:col-span-2', accent: 'amber'   },
  { key: 'roleplay',  emoji: '🎭', size: '',              accent: 'emerald' },
  { key: 'active',    emoji: '🏃', size: '',              accent: 'amber'   },
]

export default function Activities() {
  const { t } = useTranslation()
  const headingRef = useGsapEntrance()
  const gridRef = useGsapStagger('.activity-card')

  return (
    <section id="activities" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div ref={headingRef} className="text-center mb-14">
          <span className="inline-block bg-amber-100 text-amber-700 text-sm font-800 px-4 py-1.5 rounded-full mb-5">
            ✂️ {t('kids.badge')}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-900 text-stone-800 leading-tight mb-3">
            {t('kids.title')}
          </h2>
          <p className="text-base text-stone-500 font-500 max-w-xl mx-auto">
            {t('kids.subtitle')}
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {activities.map(({ key, emoji, size, accent }) => (
            <div
              key={key}
              className={`activity-card ${size} bg-stone-50 border border-stone-100 rounded-2xl overflow-hidden hover:shadow-md hover:border-emerald-100 transition-all duration-300 group`}
            >
              {/* Top accent strip */}
              <div className={`h-1.5 w-full ${accent === 'emerald' ? 'bg-emerald-600' : 'bg-amber-400'}`} />

              <div className="p-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-4 ${
                  accent === 'emerald' ? 'bg-emerald-100' : 'bg-amber-100'
                }`}>
                  {emoji}
                </div>
                <h3 className={`text-base font-800 mb-1.5 ${
                  accent === 'emerald' ? 'text-emerald-700' : 'text-amber-700'
                }`}>
                  {t(`kids.${key}_title`)}
                </h3>
                <p className="text-sm font-500 text-stone-500 leading-relaxed">
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
