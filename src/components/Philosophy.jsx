import { useTranslation } from 'react-i18next'
import { useHomeActivityPhotos } from '../context/ActivityPhotosContext'

export default function Philosophy() {
  const { t } = useTranslation()
  const side = useHomeActivityPhotos()?.philosophy

  return (
    <section className="py-16 md:py-20" style={{ backgroundColor: '#bdd9ea' }}>
      <div
        className={`max-w-6xl mx-auto px-4 sm:px-6 grid gap-10 md:gap-14 items-center ${
          side ? 'md:grid-cols-2' : ''
        }`}
      >
        {side && (
          <div className="order-2 md:order-1 rounded-2xl overflow-hidden shadow-lg aspect-[4/3] bg-white/10">
            <img src={side} alt="" className="w-full h-full object-cover" />
          </div>
        )}
        <div className={`text-center ${side ? 'md:text-left md:order-2' : 'max-w-3xl mx-auto'}`}>
          <h2 className="text-2xl md:text-3xl font-600 text-white mb-4">
            {t('philosophy.title')}
          </h2>
          <p className="text-white/90 italic text-base md:text-lg leading-relaxed">
            {t('about.philosophy_desc')}
          </p>
        </div>
      </div>
    </section>
  )
}
