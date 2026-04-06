import { useTranslation } from 'react-i18next'
import { inquirySeasons } from '../data/inquiryMonths'

/* Season icon emojis */
const SEASON_ICONS = { spring: '🌸', summer: '☀️', autumn: '🍂', winter: '❄️' }

function FlipCard({ month, lang, season }) {
  const Svg = month.svgComponent

  return (
    <div
      className="inquiry-flip-card"
      style={{ perspective: '900px' }}
    >
      <div className="inquiry-flip-inner">

        {/* FRONT */}
        <div
          className="inquiry-face inquiry-front rounded-2xl overflow-hidden shadow-sm"
          style={{ backgroundColor: season.lightBg }}
        >
          {/* SVG illustration */}
          <div className="flex items-center justify-center p-5" style={{ height: '158px' }}>
            <div style={{ width: '120px', height: '120px' }}>
              <Svg />
            </div>
          </div>

          {/* Month name bar */}
          <div
            className="py-2.5 px-3 text-center"
            style={{ backgroundColor: season.color }}
          >
            <p className="text-white font-bold text-sm uppercase tracking-widest">
              {month[lang].name}
            </p>
          </div>
        </div>

        {/* BACK */}
        <div
          className="inquiry-face inquiry-back rounded-2xl flex flex-col items-center justify-center p-5 shadow-sm"
          style={{ backgroundColor: season.color }}
        >
          {/* Season badge */}
          <span
            className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3"
            style={{ backgroundColor: 'rgba(255,255,255,0.22)', color: '#fff' }}
          >
            {SEASON_ICONS[season.key]}&nbsp;&nbsp;{season[lang]}
          </span>

          <p className="text-white font-black text-lg mb-3 text-center">
            {month[lang].name}
          </p>

          <p className="text-white/90 text-xs leading-relaxed text-center">
            {month[lang].desc}
          </p>

          {/* Hint */}
          <p className="text-white/40 text-[10px] mt-4 uppercase tracking-widest">
            hover to flip back
          </p>
        </div>
      </div>
    </div>
  )
}

function SeasonHeader({ season, lang }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="text-2xl">{SEASON_ICONS[season.key]}</span>
      <h3 className="text-xl font-black uppercase tracking-widest" style={{ color: season.color }}>
        {season[lang]}
      </h3>
      <div className="flex-1 h-px" style={{ backgroundColor: season.color, opacity: 0.25 }} />
    </div>
  )
}

export default function UnitsOfInquiry() {
  const { t, i18n } = useTranslation()
  const lang = ['de', 'el'].includes(i18n.language) ? i18n.language : 'en'

  return (
    <>
      <style>{`
        .inquiry-flip-card {
          height: 210px;
          position: relative;
        }
        .inquiry-flip-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transition: transform 0.65s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .inquiry-flip-card:hover .inquiry-flip-inner {
          transform: rotateY(180deg);
        }
        .inquiry-face {
          position: absolute;
          inset: 0;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .inquiry-front {
          transform: rotateY(0deg);
        }
        .inquiry-back {
          transform: rotateY(180deg);
        }
      `}</style>

      <section className="bg-white py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="text-2xl md:text-3xl font-light text-gray-800 text-center mb-2">
            {t('inquiry.title')}
          </h2>
          <p className="text-sm text-gray-400 text-center mb-14">
            Hover over a card to discover the monthly theme
          </p>

          <div className="space-y-12">
            {inquirySeasons.map((season) => (
              <div key={season.key}>
                <SeasonHeader season={season} lang={lang} />
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  {season.months.map((month, i) => (
                    <FlipCard
                      key={i}
                      month={month}
                      lang={lang}
                      season={season}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}
