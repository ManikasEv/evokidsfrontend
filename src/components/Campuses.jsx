import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const campuses = [
  {
    key: 'zurich',
    to: '/campuses/zurich',
    addrKey: 'campuses.zurich_addr',
    color: '#4a90d9',       // sky-blue
    emoji: '🏙️',
  },
  {
    key: 'baden',
    to: '/campuses/baden',
    addrKey: 'campuses.baden_addr',
    color: '#e8604c',       // coral
    emoji: '🌳',
  },
  {
    key: 'bad_ragaz',
    to: '/campuses/bad-ragaz',
    addrKey: 'campuses.bad_ragaz_addr',
    color: '#7ed321',       // green
    emoji: '💧',
  },
  {
    key: 'zug',
    to: '/campuses/zug',
    addrKey: null,
    color: '#9b59b6',       // purple
    emoji: '⭐',
    comingSoon: true,
  },
]

export default function Campuses() {
  const { t } = useTranslation()
  const sectionRef = useRef(null)

  /* Staggered fade-up on scroll into view — pure CSS + IntersectionObserver */
  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll('.campus-card')
    if (!cards) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('campus-card--visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    cards.forEach((card) => observer.observe(card))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <style>{`
        .campus-card {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.55s ease, transform 0.55s ease, box-shadow 0.25s ease;
        }
        .campus-card:nth-child(1) { transition-delay: 0s; }
        .campus-card:nth-child(2) { transition-delay: 0.1s; }
        .campus-card:nth-child(3) { transition-delay: 0.2s; }
        .campus-card:nth-child(4) { transition-delay: 0.3s; }
        .campus-card--visible {
          opacity: 1;
          transform: translateY(0);
        }
        .campus-card:hover {
          box-shadow: 0 8px 28px rgba(0,0,0,0.12);
          transform: translateY(-4px);
        }
        .campus-card--visible:hover {
          transform: translateY(-4px);
        }
        .campus-see-link::after {
          content: '';
          display: block;
          height: 1px;
          background: currentColor;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.25s ease;
        }
        .campus-card:hover .campus-see-link::after {
          transform: scaleX(1);
        }
      `}</style>

      <section
        id="campuses"
        ref={sectionRef}
        className="relative z-20 bg-white -mt-14 sm:-mt-20 lg:-mt-24 shadow-[0_-12px_40px_rgba(0,0,0,0.12)]"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {campuses.map((campus) => (
            <div key={campus.key} className="campus-card border-r border-gray-100 last:border-r-0 flex flex-col">

              {/* Photo placeholder with campus colour */}
              <div
                className="h-52 flex flex-col items-center justify-center gap-2 relative overflow-hidden"
                style={{ backgroundColor: campus.color }}
              >
                {/* Subtle radial shine */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{ background: 'radial-gradient(circle at 40% 35%, #fff 0%, transparent 65%)' }}
                />
                <span className="text-6xl relative z-10 select-none">{campus.emoji}</span>
                <span
                  className="text-xs font-bold uppercase tracking-widest text-white/70 relative z-10"
                  style={{ letterSpacing: '0.2em' }}
                >
                  {t(`campuses.${campus.key}`)}
                </span>
              </div>

              {/* Info */}
              <div className="px-8 py-7 flex flex-col flex-1 text-center">
                <h3 className="text-sm font-black uppercase tracking-widest text-gray-800 mb-2">
                  {t(`campuses.${campus.key}`)}
                </h3>

                {campus.addrKey ? (
                  <p className="text-sm text-gray-500 mb-5">
                    {t(campus.addrKey)}
                  </p>
                ) : (
                  <p className="text-sm text-gray-400 italic mb-5">
                    {t('campuses.coming_soon')}
                  </p>
                )}

                <div className="mt-auto">
                  <Link
                    to={campus.to}
                    className="campus-see-link inline-block text-[11px] font-bold uppercase tracking-widest text-gray-500 hover:text-sky-500 transition-colors duration-200"
                  >
                    {t('campuses.see_campus')} &rsaquo;
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>
    </>
  )
}
