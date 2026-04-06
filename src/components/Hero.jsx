import { useTranslation } from 'react-i18next'
import { CheckCircle2 } from 'lucide-react'
import { useGsapHeroEntrance } from '../hooks/useGsapEntrance'

export default function Hero() {
  const { t } = useTranslation()
  const ref = useGsapHeroEntrance()

  const taglines = [
    t('hero.tagline1'),
    t('hero.tagline2'),
    t('hero.tagline3'),
    t('hero.tagline4'),
  ]

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-500 via-pink-500 to-violet-600 pt-16"
    >
      {/* Dark overlay for text contrast */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />

      {/* Decorative blobs */}
      <div className="absolute top-10 left-10 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-yellow-300/20 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-40 h-40 bg-sky-300/20 rounded-full blur-2xl pointer-events-none" />

      {/* Floating decorative shapes */}
      <div className="absolute top-24 right-16 text-4xl opacity-60 select-none">🌟</div>
      <div className="absolute top-32 left-20 text-3xl opacity-50 select-none">🎨</div>
      <div className="absolute bottom-32 left-16 text-3xl opacity-50 select-none">📚</div>
      <div className="absolute bottom-24 right-20 text-4xl opacity-60 select-none">🎉</div>
      <div className="absolute top-1/2 left-8 text-2xl opacity-40 select-none">✏️</div>
      <div className="absolute top-1/2 right-8 text-2xl opacity-40 select-none">🌍</div>

      <div ref={ref} className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="hero-item mb-4">
          <span className="inline-block bg-black/25 backdrop-blur-sm text-white text-sm font-800 px-5 py-2 rounded-full border border-white/25">
            🎓 EvoKids™ Playschool
          </span>
        </div>

        <h1 className="hero-item text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-900 text-white leading-tight mb-3 drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]">
          {t('hero.headline')}
        </h1>
        <p className="hero-item text-xl sm:text-2xl md:text-3xl font-700 text-white mb-10 drop-shadow-[0_1px_6px_rgba(0,0,0,0.3)]">
          {t('hero.subheadline')}
        </p>

        <ul className="hero-item grid sm:grid-cols-2 gap-3 mb-10 text-left max-w-2xl mx-auto">
          {taglines.map((tag, i) => (
            <li key={i} className="flex items-start gap-2.5 bg-black/25 backdrop-blur-sm rounded-2xl px-4 py-3 border border-white/20">
              <CheckCircle2 size={18} className="text-white shrink-0 mt-0.5" />
              <span className="text-white font-700 text-sm leading-snug drop-shadow-sm">{tag}</span>
            </li>
          ))}
        </ul>

        <div className="hero-item flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 bg-white text-orange-500 font-800 rounded-2xl shadow-lg hover:shadow-xl hover:bg-orange-50 transition-all duration-200 text-base"
          >
            {t('hero.cta_apply')}
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white text-white font-800 rounded-2xl hover:bg-white/15 transition-all duration-200 text-base"
          >
            {t('hero.cta_trial')}
          </a>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 28C840 36 960 44 1080 44C1200 44 1320 36 1380 32L1440 28V60H0Z" fill="#FFFBF5" />
        </svg>
      </div>
    </section>
  )
}
