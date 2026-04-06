import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { MapPin, Phone, Mail } from 'lucide-react'

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

const navLinks = [
  { href: '/',                               key: 'nav.home'       },
  { href: '/about-us/our-mission',           key: 'nav.about'      },
  { href: '/campuses/zurich',                key: 'nav.campuses'   },
  { href: '/careers',                        key: 'nav.careers'    },
  { href: '/franchise',                      key: 'nav.franchise'  },
  { href: '/contact',                        key: 'nav.contact'    },
]

export default function Footer() {
  const { t } = useTranslation()
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  return (
    <footer style={{ backgroundColor: '#1e2330' }}>
      {/* Main footer grid */}
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4">

          {/* 1 — Map */}
          <div>
            <div className="w-full h-44 bg-gray-600 rounded overflow-hidden">
              <iframe
                title="EvoKids Map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=8.502%2C47.357%2C8.524%2C47.371&layer=mapnik&marker=47.3636%2C8.512"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </div>

          {/* 2 — Connect */}
          <div>
            <h4 className="text-white font-700 uppercase tracking-widest text-xs mb-5">
              {t('footer.connect')}
            </h4>
            <ul className="space-y-2.5 text-gray-400 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={14} className="shrink-0 mt-0.5 text-gray-500" />
                <span>{t('footer.address')}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="shrink-0 text-gray-500" />
                <a href="tel:0435421534" className="hover:text-white transition-colors">{t('footer.phone')}</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="shrink-0 text-gray-500" />
                <a href="mailto:info@evokids.ch" className="hover:text-white transition-colors">{t('footer.email')}</a>
              </li>
            </ul>

            {/* Social icons */}
            <div className="flex gap-2 mt-5">
              {[
                { href: 'https://www.facebook.com/evo.kids.7/', icon: <FacebookIcon />, label: 'Facebook' },
                { href: 'https://www.instagram.com/evokids_switzerland/', icon: <InstagramIcon />, label: 'Instagram' },
                { href: 'https://www.linkedin.com/in/evokidszurich/', icon: <LinkedinIcon />, label: 'LinkedIn' },
              ].map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-sky-400 hover:bg-sky-500 flex items-center justify-center text-white transition-colors duration-150"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* 3 — Links */}
          <div>
            <h4 className="text-white font-700 uppercase tracking-widest text-xs mb-5">
              {t('footer.our_campuses')}
            </h4>
            <ul className="space-y-2">
              {navLinks.map(({ href, key }, i) => (
                <li key={i}>
                  <Link to={href} className="text-gray-400 hover:text-white text-sm transition-colors duration-150">
                    {t(key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4 — Newsletter */}
          <div>
            <h4 className="text-white font-700 uppercase tracking-widest text-xs mb-5">
              {t('footer.newsletter_title')}
            </h4>
            {subscribed ? (
              <p className="text-sky-400 text-sm font-600">✓ Subscribed!</p>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); if (email.trim()) setSubscribed(true) }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('footer.newsletter_placeholder')}
                  className="w-full px-3 py-2.5 bg-gray-700 border border-gray-600 text-gray-300 text-sm placeholder-gray-500 focus:outline-none focus:border-sky-400 mb-2 transition-colors"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 bg-sky-400 hover:bg-sky-500 text-white font-700 text-sm uppercase tracking-wide transition-colors"
                >
                  {t('footer.newsletter_btn')}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-gray-700/50 py-4 text-center">
        <p className="text-xs text-gray-500">
          © COPYRIGHT EVOKIDS 2026.{' '}
          <a href="https://hextech-it.ch" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-300 font-700 uppercase">
            HEXTECH-IT.CH
          </a>
        </p>
      </div>
    </footer>
  )
}
