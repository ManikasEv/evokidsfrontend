import { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Menu, X, ChevronDown } from 'lucide-react'

const langs = [
  { code: 'en', img: 'https://flagcdn.com/24x18/gb.png', label: 'English' },
  { code: 'de', img: 'https://flagcdn.com/24x18/de.png', label: 'Deutsch' },
  { code: 'el', img: 'https://flagcdn.com/24x18/gr.png', label: 'Ελληνικά' },
]

function DropdownMenu({ label, items, onClose }) {
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
    <div className="relative" ref={ref}>
      <button
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 px-4 py-5 text-[13px] font-700 uppercase tracking-wide text-gray-600 hover:text-sky-500 transition-colors duration-150 border-b-2 border-transparent hover:border-sky-400 cursor-pointer"
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
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState(null)
  const location = useLocation()
  const isHome = location.pathname === '/'

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
      <div className="flex justify-end px-4 sm:px-6 lg:px-8 pt-1.5 pb-0 gap-1.5">
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

      {/* Main nav row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">

          {/* Logo */}
          <Link to="/" className="flex flex-col leading-none select-none">
            <div className="flex items-end">
              <span className="text-2xl font-black" style={{ color: '#4a90d9' }}>E</span>
              <span className="text-2xl font-black" style={{ color: '#e8604c' }}>v</span>
              <span className="text-2xl font-black" style={{ color: '#f5a623' }}>o</span>
              <span className="text-2xl font-black" style={{ color: '#7ed321' }}>K</span>
              <span className="text-2xl font-black" style={{ color: '#4a90d9' }}>i</span>
              <span className="text-2xl font-black" style={{ color: '#e8604c' }}>d</span>
              <span className="text-2xl font-black" style={{ color: '#9b59b6' }}>s</span>
            </div>
            <span className="text-[9px] tracking-widest text-gray-400 uppercase mt-0.5">
              learning evolution
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-0">
            <Link
              to="/"
              className={`px-4 py-5 text-[13px] font-bold uppercase tracking-wide transition-colors duration-150 border-b-2 ${
                isHome ? 'text-sky-500 border-sky-400' : 'text-gray-600 hover:text-sky-500 border-transparent hover:border-sky-400'
              }`}
            >
              {t('nav.home')}
            </Link>

            <DropdownMenu label={t('nav.about')} items={aboutItems} />
            <DropdownMenu label={t('nav.campuses')} items={campusesItems} />

            <Link
              to="/careers"
              className="px-4 py-5 text-[13px] font-bold uppercase tracking-wide text-gray-600 hover:text-sky-500 transition-colors duration-150 border-b-2 border-transparent hover:border-sky-400"
            >
              {t('nav.careers')}
            </Link>

            <Link
              to="/franchise"
              className="px-4 py-5 text-[13px] font-bold uppercase tracking-wide text-gray-600 hover:text-sky-500 transition-colors duration-150 border-b-2 border-transparent hover:border-sky-400"
            >
              {t('nav.franchise')}
            </Link>

            <Link
              to="/contact"
              className="px-4 py-5 text-[13px] font-bold uppercase tracking-wide text-gray-600 hover:text-sky-500 transition-colors duration-150 border-b-2 border-transparent hover:border-sky-400"
            >
              {t('nav.contact')}
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-gray-600"
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
