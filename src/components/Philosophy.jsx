import { useTranslation } from 'react-i18next'
import { homePhilosophyPhoto } from '../data/homeSectionPhotos'

export default function Philosophy() {
  const { t } = useTranslation()

  return (
    <section className="py-10 md:py-16 lg:py-20" style={{ backgroundColor: '#bdd9ea' }}>
      <div
        className="mx-auto grid max-w-6xl items-center gap-6 px-4 sm:px-6 md:grid-cols-2 md:gap-14"
      >
        <div className="order-2 aspect-[4/3] overflow-hidden rounded-2xl bg-white/10 shadow-lg md:order-1">
          <img src={homePhilosophyPhoto} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="text-center md:order-2 md:text-left">
          <h2 className="mb-3 text-xl font-600 text-white md:mb-4 md:text-3xl">
            {t('philosophy.title')}
          </h2>
          <p className="text-sm italic leading-relaxed text-white/90 md:text-lg">
            {t('about.philosophy_desc')}
          </p>
        </div>
      </div>
    </section>
  )
}
