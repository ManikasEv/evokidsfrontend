import { useTranslation } from 'react-i18next'

export default function About() {
  const { t } = useTranslation()

  return (
    <section id="about" className="bg-[#f8f8f8] py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Photo placeholder — replace with real campus photo */}
          <div className="bg-gray-300 rounded h-80 md:h-96 flex items-center justify-center">
            <span className="text-7xl">🏫</span>
          </div>

          {/* Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              {t('about.title')}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4 text-justify">
              {t('about.description')}
            </p>
            <p className="text-gray-600 leading-relaxed mb-4 text-justify">
              {t('about.description2')}
            </p>
            <p className="text-gray-600 leading-relaxed text-justify">
              {t('about.description3')}
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
