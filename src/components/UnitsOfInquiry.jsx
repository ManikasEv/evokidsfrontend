import { useTranslation } from 'react-i18next'
import { inquirySeasons } from '../data/inquiryMonths'
import { useInquiryPhoto } from '../context/PhotoManifestContext'

const SEASON_ICONS = { spring: '🌸', summer: '☀️', autumn: '🍂', winter: '❄️' }

function FlipCard({ month, lang, season }) {
  const Svg = month.svgComponent
  const photoUrl = useInquiryPhoto(month.en.name)

  return (
    <div className="inquiry-flip-card" style={{ perspective: '900px' }}>
      <div className="inquiry-flip-inner">
        <div
          className="inquiry-face inquiry-front flex flex-col overflow-hidden rounded-2xl shadow-sm"
          style={{ backgroundColor: season.lightBg }}
        >
          <div className="flex min-h-0 w-full flex-1 items-center justify-center overflow-hidden bg-white/40 px-1.5 py-1.5 sm:px-2 sm:py-2">
            {photoUrl ? (
              <img
                src={photoUrl}
                alt=""
                className="h-full w-full max-h-full object-contain object-center"
              />
            ) : (
              <div className="flex h-full min-h-[200px] w-full items-center justify-center p-4">
                <div className="h-44 w-44 max-w-[85%] sm:h-52 sm:w-52">
                  <Svg />
                </div>
              </div>
            )}
          </div>
          <div
            className="shrink-0 px-3 py-2.5 text-center"
            style={{ backgroundColor: season.color }}
          >
            <p className="text-sm font-bold uppercase tracking-widest text-white sm:text-base">
              {month[lang].name}
            </p>
          </div>
        </div>

        <div
          className="inquiry-face inquiry-back flex flex-col items-center justify-center overflow-y-auto rounded-2xl p-4 shadow-sm sm:p-5"
          style={{ backgroundColor: season.color }}
        >
          <span
            className="mb-3 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest text-white"
            style={{ backgroundColor: 'rgba(255,255,255,0.22)' }}
          >
            {SEASON_ICONS[season.key]}&nbsp;&nbsp;{season[lang]}
          </span>
          <p className="mb-1.5 text-center text-[10px] font-bold uppercase tracking-widest text-white/70">
            {month[lang].name}
          </p>
          <p className="mb-3 px-1 text-center text-base font-black leading-snug text-white sm:text-lg">
            {month[lang].theme}
          </p>
          <p className="text-center text-xs leading-relaxed text-white/90">
            {month[lang].desc}
          </p>
          <p className="mt-4 text-[10px] uppercase tracking-widest text-white/40">
            hover to flip back
          </p>
        </div>
      </div>
    </div>
  )
}

function SeasonHeader({ season, lang }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <span className="text-2xl">{SEASON_ICONS[season.key]}</span>
      <h3 className="text-xl font-black uppercase tracking-widest" style={{ color: season.color }}>
        {season[lang]}
      </h3>
      <div className="h-px flex-1" style={{ backgroundColor: season.color, opacity: 0.25 }} />
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
          height: 380px;
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
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-2 text-center text-2xl font-light text-gray-800 md:text-3xl">
            {t('inquiry.title')}
          </h2>
          <p className="mb-14 text-center text-sm text-gray-400">
            Hover over a card to discover the monthly theme
          </p>

          <div className="space-y-12">
            {inquirySeasons.map((season) => (
              <div key={season.key}>
                <SeasonHeader season={season} lang={lang} />
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                  {season.months.map((month, i) => (
                    <FlipCard key={i} month={month} lang={lang} season={season} />
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
