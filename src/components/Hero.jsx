import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import heroImage from '../assets/hero/h1.jpg'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <img src={heroImage} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/45" />

      {/* Content — extra bottom padding so campus cards can overlap into hero without crowding the CTA */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto pt-24 sm:pt-28 md:pt-32 pb-28 sm:pb-32 md:pb-36">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-wide leading-snug mb-6 drop-shadow-lg max-w-3xl mx-auto">
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
