import { useState, useRef, useEffect, useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Menu, X, ChevronDown } from 'lucide-react'
import { usePhotoManifest } from '../context/PhotoManifestContext'

const langs = [
  { code: 'en', img: 'https://flagcdn.com/24x18/gb.png', label: 'English' },
  { code: 'de', img: 'https://flagcdn.com/24x18/de.png', label: 'Deutsch' },
  { code: 'el', img: 'https://flagcdn.com/24x18/gr.png', label: 'Ελληνικά' },
]

/* Border hugs the label — not the full bar height (no h-full stretch) */
const navLinkClass = (active) =>
  `inline-flex items-center gap-1 shrink-0 px-3 pt-2 pb-1 text-[12px] font-700 uppercase tracking-wide transition-colors duration-150 border-b-2 border-solid ${
    active
      ? 'text-sky-500 border-sky-400'
      : 'text-gray-600 border-transparent hover:text-sky-500 hover:border-sky-400'
  }`

function DropdownMenu({ label, items, onClose, active }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    function handler(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div className="relative flex items-center" ref={ref}>
      <button
        type="button"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onClick={() => setOpen((v) => !v)}
        className={`${navLinkClass(active)} cursor-pointer`}
      >
        {label}
        <ChevronDown size={12} className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div
          className="absolute top-full left-0 bg-white border border-gray-100 shadow-lg min-w-[200px] z-50"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          {items.map((item, i) => (
            <Link
              key={i}
              to={item.href}
              onClick={() => { setOpen(false); onClose && onClose() }}
              className="block px-4 py-2.5 text-[12px] uppercase tracking-wide text-gray-600 hover:text-sky-500 hover:bg-gray-50 border-b border-gray-50 last:border-0 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const { manifest } = usePhotoManifest()
  const logoSrc = useMemo(() => {
    const code = (i18n.language || 'en').split('-')[0]
    return manifest.logo[code] || manifest.logo.en || ''
  }, [i18n.language, manifest.logo])
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState(null)
  const location = useLocation()
  const path = location.pathname
  const isHome = path === '/'
  const isAbout = path.startsWith('/about-us')
  const isCampuses = path.startsWith('/campuses')
  const isCareers = path === '/careers'
  const isFranchise = path === '/franchise'
  const isContact = path === '/contact'

  const aboutItems = [
    { href: '/about-us/our-mission',     label: t('nav.mission')   },
    { href: '/about-us/advisory-board',  label: t('nav.board')     },
    { href: '/about-us/our-team',        label: t('nav.team')      },
    { href: '/about-us/kids-in-action',  label: t('nav.kids')      },
  ]

  const campusesItems = [
    { href: '/campuses/zurich',    label: t('campuses.zurich')    },
    { href: '/campuses/baden',     label: t('campuses.baden')     },
    { href: '/campuses/bad-ragaz', label: t('campuses.bad_ragaz') },
    { href: '/campuses/zug',       label: t('campuses.zug')       },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      {/* Language flags strip */}
      <div className="flex justify-end px-4 sm:px-6 lg:px-8 py-0.5 gap-1.5">
        {langs.map((l) => (
          <button
            key={l.code}
            onClick={() => i18n.changeLanguage(l.code)}
            title={l.label}
            aria-label={l.label}
            className={`cursor-pointer transition-opacity rounded-sm overflow-hidden border ${
              i18n.language === l.code
                ? 'opacity-100 border-sky-400'
                : 'opacity-50 hover:opacity-80 border-transparent hover:border-gray-300'
            }`}
          >
            <img
              src={l.img}
              alt={l.label}
              width={24}
              height={18}
              className="block"
            />
          </button>
        ))}
      </div>

      {/* Compact bar; links use tight underline, not full-height stretch */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12 sm:h-14 md:h-16">

          {/* Logo — fills row height; same visual size as before */}
          <Link
            to="/"
            className="flex items-center h-full min-w-0 shrink pr-2 sm:pr-4 leading-none select-none"
          >
            {logoSrc ? (
              <img
                src={logoSrc}
                alt="EvoKids"
                className="h-full w-auto max-h-full max-w-[min(100vw-10rem,28rem)] object-contain object-left"
              />
            ) : (
              <>
                <div className="flex flex-col justify-center h-full">
                  <div className="flex items-end">
                    <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black" style={{ color: '#4a90d9' }}>E</span>
                    <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black" style={{ color: '#e8604c' }}>v</span>
                    <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black" style={{ color: '#f5a623' }}>o</span>
                    <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black" style={{ color: '#7ed321' }}>K</span>
                    <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black" style={{ color: '#4a90d9' }}>i</span>
                    <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black" style={{ color: '#e8604c' }}>d</span>
                    <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black" style={{ color: '#9b59b6' }}>s</span>
                  </div>
                  <span className="text-[9px] sm:text-[10px] tracking-widest text-gray-400 uppercase mt-0.5">
                    learning evolution
                  </span>
                </div>
              </>
            )}
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            <Link to="/" className={navLinkClass(isHome)}>
              {t('nav.home')}
            </Link>

            <DropdownMenu label={t('nav.about')} items={aboutItems} active={isAbout} />
            <DropdownMenu label={t('nav.campuses')} items={campusesItems} active={isCampuses} />

            <Link to="/careers" className={navLinkClass(isCareers)}>
              {t('nav.careers')}
            </Link>

            <Link to="/franchise" className={navLinkClass(isFranchise)}>
              {t('nav.franchise')}
            </Link>

            <Link to="/contact" className={navLinkClass(isContact)}>
              {t('nav.contact')}
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex items-center justify-center p-2 text-gray-600 shrink-0"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-md max-h-[80vh] overflow-y-auto">
          <Link
            to="/"
            onClick={() => setMobileOpen(false)}
            className="block px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-gray-600 hover:text-sky-500 hover:bg-gray-50 border-b border-gray-100"
          >
            {t('nav.home')}
          </Link>

          {/* About Us accordion */}
          <div>
            <button
              onClick={() => setMobileExpanded(mobileExpanded === 'about' ? null : 'about')}
              className="w-full flex items-center justify-between px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-gray-600 hover:text-sky-500 hover:bg-gray-50 border-b border-gray-100"
            >
              {t('nav.about')}
              <ChevronDown size={14} className={`transition-transform ${mobileExpanded === 'about' ? 'rotate-180' : ''}`} />
            </button>
            {mobileExpanded === 'about' && aboutItems.map((item, i) => (
              <Link
                key={i}
                to={item.href}
                onClick={() => setMobileOpen(false)}
                className="block px-10 py-2.5 text-sm text-gray-500 hover:text-sky-500 hover:bg-gray-50 border-b border-gray-50"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Campuses accordion */}
          <div>
            <button
              onClick={() => setMobileExpanded(mobileExpanded === 'campuses' ? null : 'campuses')}
              className="w-full flex items-center justify-between px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-gray-600 hover:text-sky-500 hover:bg-gray-50 border-b border-gray-100"
            >
              {t('nav.campuses')}
              <ChevronDown size={14} className={`transition-transform ${mobileExpanded === 'campuses' ? 'rotate-180' : ''}`} />
            </button>
            {mobileExpanded === 'campuses' && campusesItems.map((item, i) => (
              <Link
                key={i}
                to={item.href}
                onClick={() => setMobileOpen(false)}
                className="block px-10 py-2.5 text-sm text-gray-500 hover:text-sky-500 hover:bg-gray-50 border-b border-gray-50"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Link
            to="/careers"
            onClick={() => setMobileOpen(false)}
            className="block px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-gray-600 hover:text-sky-500 hover:bg-gray-50 border-b border-gray-100"
          >
            {t('nav.careers')}
          </Link>

          <Link
            to="/franchise"
            onClick={() => setMobileOpen(false)}
            className="block px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-gray-600 hover:text-sky-500 hover:bg-gray-50 border-b border-gray-100"
          >
            {t('nav.franchise')}
          </Link>

          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="block px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-gray-600 hover:text-sky-500 hover:bg-gray-50 border-b border-gray-100"
          >
            {t('nav.contact')}
          </Link>
        </div>
      )}
    </nav>
  )
}
