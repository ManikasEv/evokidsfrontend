import { useTranslation } from 'react-i18next'
import PageLayout from '../../components/PageLayout'
import PageHero from '../../components/PageHero'

const PLACEHOLDER_COLORS = [
  '#bdd9ea', '#f5a623', '#7ed321', '#e8604c',
  '#9b59b6', '#4a90d9', '#f5a623', '#bdd9ea',
  '#e8604c', '#7ed321', '#4a90d9', '#9b59b6',
]

export default function KidsInActionPage() {
  const { t } = useTranslation()

  return (
    <PageLayout>
      <PageHero title={t('nav.kids')} breadcrumb={`${t('nav.about')} › ${t('nav.kids')}`} />

      <section className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <p className="text-center text-gray-500 italic mb-12 max-w-2xl mx-auto">
            {t('kids_page.subtitle')}
          </p>

          {/* Photo grid placeholder */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {PLACEHOLDER_COLORS.map((color, i) => (
              <div
                key={i}
                className="aspect-square rounded-lg flex items-center justify-center"
                style={{ backgroundColor: color }}
              >
                <span className="text-4xl text-white/50 select-none">📸</span>
              </div>
            ))}
          </div>

          <div
            className="mt-12 p-6 rounded-lg text-center"
            style={{ backgroundColor: '#f0f7fc' }}
          >
            <p className="text-gray-500 italic text-sm">{t('kids_page.placeholder')}</p>
          </div>

        </div>
      </section>
    </PageLayout>
  )
}
