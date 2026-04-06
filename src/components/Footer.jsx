import { useTranslation } from 'react-i18next'
import { MapPin, Phone, Mail } from 'lucide-react'

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  )
}

const campusLinks = ['zurich', 'baden', 'bad_ragaz', 'zug']

export default function Footer() {
  const { t } = useTranslation()

  const quickLinks = [
    { href: '#hero', labelKey: 'nav.home' },
    { href: '#about', labelKey: 'nav.about' },
    { href: '#campuses', labelKey: 'nav.campuses' },
    { href: '#contact', labelKey: 'nav.admissions' },
    { href: '#contact', labelKey: 'nav.contact' },
  ]

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🌟</span>
              <span className="text-2xl font-900 text-white [text-shadow:0_1px_4px_rgba(0,0,0,0.35)]">
                EvoKids™
              </span>
            </div>
            <p className="text-sm font-500 leading-relaxed text-gray-400 mb-5">
              {t('footer.tagline')}
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/evo.kids.7/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-gray-800 hover:bg-orange-500 flex items-center justify-center transition-colors duration-200"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://www.instagram.com/evokids_switzerland/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-gray-800 hover:bg-pink-500 flex items-center justify-center transition-colors duration-200"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-800 text-sm mb-5">{t('footer.quick_links')}</h4>
            <ul className="space-y-2.5">
              {quickLinks.map(({ href, labelKey }, i) => (
                <li key={i}>
                  <a
                    href={href}
                    className="text-sm font-500 text-gray-400 hover:text-orange-400 transition-colors duration-200"
                  >
                    {t(labelKey)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Campuses */}
          <div>
            <h4 className="text-white font-800 text-sm mb-5">{t('footer.our_campuses')}</h4>
            <ul className="space-y-2.5">
              {campusLinks.map((key) => (
                <li key={key}>
                  <a
                    href="#campuses"
                    className="text-sm font-500 text-gray-400 hover:text-orange-400 transition-colors duration-200"
                  >
                    {t(`campuses.${key}`)}
                    {key === 'zug' && (
                      <span className="ml-2 text-xs bg-violet-800 text-violet-300 px-1.5 py-0.5 rounded-md">
                        {t('campuses.coming_soon')}
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div>
            <h4 className="text-white font-800 text-sm mb-5">{t('footer.connect')}</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm font-500 text-gray-400">
                <MapPin size={15} className="shrink-0 mt-0.5 text-orange-400" />
                {t('footer.address')}
              </li>
              <li className="flex items-center gap-2.5 text-sm font-500 text-gray-400">
                <Phone size={15} className="shrink-0 text-orange-400" />
                <a href="tel:+41435421534" className="hover:text-orange-400 transition-colors duration-200">
                  {t('footer.phone')}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm font-500 text-gray-400">
                <Mail size={15} className="shrink-0 text-orange-400" />
                <a href="mailto:info@evokids.ch" className="hover:text-orange-400 transition-colors duration-200">
                  {t('footer.email')}
                </a>
              </li>
            </ul>

          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500 font-500">
            © 2026 EvoKids™. Designed & Powered by{' '}
            <a
              href="https://hextech-it.ch"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-orange-300 font-700 transition-colors duration-200"
            >
              hextech-it.ch
            </a>
          </p>
          <div className="flex items-center gap-1">
            <span className="text-xs text-gray-500 font-500">Made with</span>
            <span className="text-red-400 text-sm">❤️</span>
            <span className="text-xs text-gray-500 font-500">for children everywhere</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
