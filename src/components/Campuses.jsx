import { useTranslation } from 'react-i18next'
import { MapPin, ExternalLink } from 'lucide-react'
import { useGsapEntrance, useGsapStagger } from '../hooks/useGsapEntrance'

const campusData = [
  {
    key: 'zurich',
    nameKey: 'campuses.zurich',
    addrKey: 'campuses.zurich_addr',
    emoji: '🏙️',
    headerBg: 'bg-gradient-to-br from-orange-400 to-orange-600',
    badge: 'bg-orange-100 text-orange-700',
    mapUrl: 'https://maps.google.com/?q=Leimbachstrasse+21+8041+Zurich',
    comingSoon: false,
  },
  {
    key: 'baden',
    nameKey: 'campuses.baden',
    addrKey: 'campuses.baden_addr',
    emoji: '🌳',
    headerBg: 'bg-gradient-to-br from-sky-400 to-sky-600',
    badge: 'bg-sky-100 text-sky-700',
    mapUrl: 'https://maps.google.com/?q=Haselstrasse+6+5400+Baden',
    comingSoon: false,
  },
  {
    key: 'bad_ragaz',
    nameKey: 'campuses.bad_ragaz',
    addrKey: 'campuses.bad_ragaz_addr',
    emoji: '🏔️',
    headerBg: 'bg-gradient-to-br from-green-400 to-green-600',
    badge: 'bg-green-100 text-green-700',
    mapUrl: 'https://maps.google.com/?q=Floraweg+1A+7310+Bad+Ragaz',
    comingSoon: false,
  },
  {
    key: 'zug',
    nameKey: 'campuses.zug',
    addrKey: null,
    emoji: '🌄',
    headerBg: 'bg-gradient-to-br from-violet-400 to-violet-600',
    badge: 'bg-violet-100 text-violet-700',
    mapUrl: null,
    comingSoon: true,
  },
]

export default function Campuses() {
  const { t } = useTranslation()
  const headingRef = useGsapEntrance()
  const cardsRef = useGsapStagger('.campus-card')

  return (
    <section id="campuses" className="bg-[#FFFBF5] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-14">
          <span className="inline-block bg-sky-100 text-sky-700 text-sm font-800 px-4 py-1.5 rounded-full mb-4">
            📍 {t('campuses.title')}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-900 text-gray-800 leading-tight mb-3">
            {t('campuses.title')}
          </h2>
          <p className="text-base text-gray-500 font-500 max-w-xl mx-auto">
            {t('campuses.subtitle')}
          </p>
        </div>

        {/* Campus cards */}
        <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {campusData.map((campus) => (
            <div
              key={campus.key}
              className={`campus-card bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 ${
                campus.comingSoon ? 'opacity-75' : ''
              }`}
            >
              {/* Color header */}
              <div className={`${campus.headerBg} p-8 flex flex-col items-center justify-center text-white`}>
                <span className="text-5xl mb-3">{campus.emoji}</span>
                <h3 className="text-xl font-900">{t(campus.nameKey)}</h3>
                {campus.comingSoon && (
                  <span className="mt-2 bg-white/25 text-white text-xs font-800 px-3 py-1 rounded-full">
                    {t('campuses.coming_soon')}
                  </span>
                )}
              </div>

              {/* Card body */}
              <div className="p-6">
                {campus.addrKey && (
                  <div className="flex items-start gap-2 text-gray-600 mb-5">
                    <MapPin size={16} className="shrink-0 mt-0.5 text-gray-400" />
                    <span className="text-sm font-600">{t(campus.addrKey)}</span>
                  </div>
                )}

                {!campus.comingSoon ? (
                  <div className="flex flex-col gap-2">
                    <a
                      href="#contact"
                      className="block w-full text-center py-2.5 bg-orange-400 hover:bg-orange-500 text-white font-700 text-sm rounded-xl transition-colors duration-200"
                    >
                      {t('campuses.see_campus')}
                    </a>
                    {campus.mapUrl && (
                      <a
                        href={campus.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5 py-2.5 border border-gray-200 text-gray-600 hover:border-sky-300 hover:text-sky-600 font-600 text-sm rounded-xl transition-colors duration-200"
                      >
                        <ExternalLink size={13} />
                        {t('campuses.get_directions')}
                      </a>
                    )}
                  </div>
                ) : (
                  <p className="text-sm text-gray-400 font-600 text-center py-1">
                    {t('campuses.coming_soon')}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
