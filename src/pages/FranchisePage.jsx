import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import PageLayout from '../components/PageLayout'
import PageHero from '../components/PageHero'

const STEP_COLORS = ['#4a90d9', '#e8604c', '#f5a623', '#7ed321', '#9b59b6', '#4a90d9', '#e8604c']

export default function FranchisePage() {
  const { t } = useTranslation()

  const steps = Array.from({ length: 7 }, (_, i) => ({
    num: i + 1,
    title: t(`franchise.step${i + 1}_title`),
    body: t(`franchise.step${i + 1}_body`),
    color: STEP_COLORS[i],
  }))

  return (
    <PageLayout>
      <PageHero title={t('franchise.title')} breadcrumb={t('franchise.title')} />

      {/* Locations banner */}
      <section className="py-10 text-center" style={{ backgroundColor: '#f0f7fc' }}>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-800 mb-2">{t('franchise.available')}</h2>
          <p className="text-gray-600">{t('franchise.locations')}</p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-600 text-center text-lg mb-14">{t('franchise.intro')}</p>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-12">
            {t('franchise.process_title')}
          </h2>

          {/* Steps */}
          <div className="space-y-6">
            {steps.map((step) => (
              <div key={step.num} className="flex gap-6 bg-white border border-gray-100 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                {/* Number circle */}
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-full text-white font-black text-lg flex items-center justify-center"
                  style={{ backgroundColor: step.color }}
                >
                  {step.num}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-base font-bold text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div
            className="mt-16 rounded-lg p-10 text-center"
            style={{ backgroundColor: '#bdd9ea' }}
          >
            <h3 className="text-xl font-bold text-white mb-3">{t('franchise.contact_title')}</h3>
            <p className="text-white/90 mb-6">{t('franchise.contact_body')}</p>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 bg-white font-bold text-sm uppercase tracking-widest transition-colors hover:bg-gray-100"
              style={{ color: '#4a90d9' }}
            >
              {t('franchise.contact_btn')}
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
