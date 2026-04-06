import { useTranslation } from 'react-i18next'

export default function Philosophy() {
  const { t } = useTranslation()

  return (
    <section className="py-16 md:py-20 text-center" style={{ backgroundColor: '#bdd9ea' }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl md:text-3xl font-600 text-white mb-4">
          {t('philosophy.title')}
        </h2>
        <p className="text-white/90 italic text-base md:text-lg leading-relaxed">
          {t('about.philosophy_desc')}
        </p>
      </div>
    </section>
  )
}
