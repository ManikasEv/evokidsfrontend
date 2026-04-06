import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #2c3e50 0%, #3d5a6e 40%, #4a7a8a 70%, #2c3e50 100%)' }}
    >
      {/* Photo placeholder overlay — replace with real bg image later */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content — extra bottom padding so campus cards can overlap into hero without crowding the CTA */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto pt-24 pb-28 sm:pb-32 md:pb-36">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-wide leading-tight mb-6 drop-shadow-lg">
          {t('hero.headline')}
          <br />
          {t('hero.subheadline')}
        </h1>

        <div className="text-white/90 text-base sm:text-lg font-medium space-y-1 mb-10">
          <p>∗ {t('hero.tagline1')} ∗</p>
          <p>∗ {t('hero.tagline2')} ∗</p>
          <p>∗ {t('hero.tagline3')} ∗</p>
          <p>∗ {t('hero.tagline4')} ∗</p>
        </div>

        <Link
          to="/contact"
          className="inline-block px-10 py-3.5 border-2 border-white text-white font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-gray-800 transition-all duration-200"
        >
          Contact Us ›
        </Link>
      </div>
    </section>
  )
}
