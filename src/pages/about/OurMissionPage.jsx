import { useTranslation } from 'react-i18next'
import PageLayout from '../../components/PageLayout'
import PageHero from '../../components/PageHero'

export default function OurMissionPage() {
  const { t } = useTranslation()

  const values = [
    t('mission.value1'),
    t('mission.value2'),
    t('mission.value3'),
    t('mission.value4'),
    t('mission.value5'),
  ]

  return (
    <PageLayout>
      <PageHero title={t('nav.mission')} breadcrumb={`${t('nav.about')} › ${t('nav.mission')}`} />

      <section className="bg-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Title banner */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
            {t('mission.title')}
          </h2>

          {/* Intro paragraphs */}
          <div className="prose prose-gray max-w-none mb-10 space-y-4">
            <p className="text-gray-600 leading-relaxed text-justify">{t('mission.intro')}</p>
            <p className="text-gray-600 leading-relaxed text-justify">{t('mission.intro2')}</p>
            <p className="text-gray-600 leading-relaxed text-justify">{t('mission.body1')}</p>
            <p className="text-gray-600 leading-relaxed text-justify">{t('mission.body2')}</p>
            <p className="text-gray-600 leading-relaxed text-justify">{t('mission.body3')}</p>
          </div>

          {/* Values */}
          <div
            className="rounded-lg p-8 mt-8"
            style={{ backgroundColor: '#f0f7fc' }}
          >
            <h3 className="text-lg font-bold text-gray-800 mb-6">
              {t('mission.values_title')}
            </h3>
            <ol className="space-y-4">
              {values.map((val, i) => (
                <li key={i} className="flex gap-4">
                  <span
                    className="flex-shrink-0 w-8 h-8 rounded-full text-white flex items-center justify-center font-bold text-sm"
                    style={{ backgroundColor: '#4a90d9' }}
                  >
                    {i + 1}
                  </span>
                  <p className="text-gray-600 leading-relaxed pt-0.5">{val}</p>
                </li>
              ))}
            </ol>
          </div>

        </div>
      </section>
    </PageLayout>
  )
}
