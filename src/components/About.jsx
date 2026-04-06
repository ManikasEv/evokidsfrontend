import { useTranslation } from 'react-i18next'
import { homeAboutPhoto } from '../data/homeSectionPhotos'

export default function About() {
  const { t } = useTranslation()

  return (
    <section id="about" className="bg-[#f8f8f8] py-10 md:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 md:items-center">

          <div className="relative flex h-56 items-center justify-center overflow-hidden rounded bg-gray-200 sm:h-72 md:h-96">
            <img
              src={homeAboutPhoto}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="mb-4 text-2xl font-bold text-gray-800 md:mb-6 md:text-4xl">
              {t('about.title')}
            </h2>
            <p className="mb-3 text-justify text-sm leading-relaxed text-gray-600 md:text-base">
              {t('about.description')}
            </p>
            <p className="mb-3 text-justify text-sm leading-relaxed text-gray-600 md:text-base">
              {t('about.description2')}
            </p>
            <p className="text-justify text-sm leading-relaxed text-gray-600 md:text-base">
              {t('about.description3')}
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
