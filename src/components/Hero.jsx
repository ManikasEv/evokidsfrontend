import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import heroImage from '../assets/hero/h1.jpg'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section
      id="hero"
      className="hero-viewport-height relative flex shrink-0 items-center justify-center overflow-hidden"
    >
      <img src={heroImage} alt="" className="absolute inset-0 h-full w-full min-h-full object-cover" />
      <div className="absolute inset-0 bg-black/45" />

      {/* Content — extra bottom padding so campus cards can overlap into hero without crowding the CTA */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 pb-20 pt-20 text-center sm:px-6 sm:pb-28 sm:pt-28 md:pb-36 md:pt-32">
        <h1 className="mx-auto mb-4 max-w-3xl text-2xl font-black uppercase leading-snug tracking-wide text-white drop-shadow-lg sm:mb-6 sm:text-3xl md:text-4xl lg:text-5xl">
          {t('hero.headline')}
          <br />
          {t('hero.subheadline')}
        </h1>

        <div className="mb-6 space-y-0.5 text-sm font-medium text-white/90 sm:mb-10 sm:space-y-1 sm:text-base md:text-lg">
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
