import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { MapPin, Phone, Mail } from 'lucide-react'
import PageLayout from '../../components/PageLayout'
import PageHero from '../../components/PageHero'
import { usePhotoManifest } from '../../context/PhotoManifestContext'
import { activityPoolExcludingInquiry } from '../../utils/activityPhotos'

const TABS = ['tuition', 'calendar', 'weekly', 'daily']

export default function CampusPage({ campusKey, mapSrc, comingSoon }) {
  const { t } = useTranslation()
  const { manifest } = usePhotoManifest()
  const activityStrip = activityPoolExcludingInquiry(manifest)
  const [activeTab, setActiveTab] = useState('tuition')

  const fullAddr = t(`campuses.${campusKey}_full_addr`)
  const email = t(`campuses.${campusKey}_email`)
  const phone = t(`campuses.${campusKey}_phone`)
  const name = t(`campuses.${campusKey}`)

  return (
    <PageLayout>
      <PageHero title={name} breadcrumb={`${t('nav.campuses')} › ${name}`} />

      {activityStrip.length > 0 && (
        <section className="bg-white border-b border-gray-100 py-6 md:py-8">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-4 overflow-x-auto pb-1 snap-x snap-mandatory">
              {activityStrip.map((src, i) => (
                <div
                  key={i}
                  className="shrink-0 w-52 sm:w-64 md:w-72 h-48 sm:h-56 md:h-60 rounded-xl shadow-sm snap-start bg-neutral-100 flex items-center justify-center p-2"
                >
                  <img
                    src={src}
                    alt=""
                    className="max-w-full max-h-full w-auto h-auto object-contain object-center"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-[#f8f8f8] py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">

            {/* Left: contact card */}
            <div className="md:col-span-1 space-y-6">
              {/* Map */}
              <div className="rounded-lg overflow-hidden border border-gray-200 h-48">
                {mapSrc ? (
                  <iframe
                    title={`${name} Map`}
                    src={mapSrc}
                    className="w-full h-full border-0"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">Map coming soon</span>
                  </div>
                )}
              </div>

              {/* Contact */}
              <div className="bg-white rounded-lg border border-gray-100 p-5 space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-widest text-gray-600 mb-4">
                  {t('campus.address')}
                </h3>
                <div className="flex items-start gap-2 text-sm text-gray-600">
                  <MapPin size={14} className="mt-0.5 shrink-0 text-gray-400" />
                  <span>{fullAddr}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Phone size={14} className="shrink-0 text-gray-400" />
                  <a href={`tel:${phone.replace(/\s/g,'')}`} className="hover:text-sky-500 transition-colors">{phone}</a>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Mail size={14} className="shrink-0 text-gray-400" />
                  <a href={`mailto:${email}`} className="hover:text-sky-500 transition-colors">{email}</a>
                </div>
              </div>

              {/* CTA buttons */}
              <div className="space-y-2">
                <Link
                  to="/admissions/apply-to-evokids"
                  className="block text-center py-2.5 text-white text-sm font-bold uppercase tracking-wide transition-colors"
                  style={{ backgroundColor: '#4a90d9' }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#3a7bc8'}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#4a90d9'}
                >
                  {t('campus.apply_now')}
                </Link>
                <Link
                  to="/admissions/inquire-a-trial-class"
                  className="block text-center py-2.5 text-sm font-bold uppercase tracking-wide border transition-colors"
                  style={{ borderColor: '#4a90d9', color: '#4a90d9' }}
                  onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#4a90d9'; e.currentTarget.style.color = 'white' }}
                  onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#4a90d9' }}
                >
                  {t('campus.trial_class')}
                </Link>
              </div>
            </div>

            {/* Right: tabs */}
            <div className="md:col-span-2">
              {/* Tab bar */}
              <div className="flex border-b border-gray-200 mb-6 flex-wrap gap-0">
                {TABS.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2.5 text-xs font-bold uppercase tracking-wide transition-colors border-b-2 ${
                      activeTab === tab
                        ? 'text-sky-500 border-sky-400'
                        : 'text-gray-500 border-transparent hover:text-gray-700'
                    }`}
                  >
                    {t(`campus.${tab}`)}
                  </button>
                ))}
              </div>

              {/* Tab content */}
              <div className="bg-white rounded-lg border border-gray-100 p-8 min-h-[200px] flex items-center justify-center">
                {comingSoon ? (
                  <p className="text-gray-400 italic text-center">{t('campus.coming_soon')}</p>
                ) : (
                  <p className="text-gray-400 italic text-center">{t('campus.coming_soon')}</p>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </PageLayout>
  )
}
