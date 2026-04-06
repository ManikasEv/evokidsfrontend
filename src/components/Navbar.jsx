import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Menu, X } from 'lucide-react'

const langs = [
  { code: 'en', label: 'EN' },
  { code: 'de', label: 'DE' },
  { code: 'el', label: 'ΕΛ' },
]

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { href: '#hero', label: t('nav.home') },
    { href: '#about', label: t('nav.about') },
    { href: '#kids', label: t('nav.kids') },
    { href: '#campuses', label: t('nav.campuses') },
    { href: '#contact', label: t('nav.admissions') },
    { href: '#contact', label: t('nav.contact') },
  ]

  const handleLinkClick = () => setMobileOpen(false)

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#FFFBF5]/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 group">
            <span className="text-2xl md:text-3xl">🌟</span>
            <span className="font-black text-xl md:text-2xl leading-none text-white [text-shadow:0_1px_4px_rgba(0,0,0,0.35)]">
              EvoKids™
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className={`px-3 py-2 text-sm font-700 rounded-xl transition-all duration-200 ${
                  scrolled
                    ? 'text-gray-600 hover:text-orange-500 hover:bg-orange-50'
                    : 'text-white hover:text-white/80 hover:bg-white/15'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Language switcher + hamburger */}
          <div className="flex items-center gap-2">
            <div className={`flex items-center gap-1 rounded-xl p-1 transition-all duration-300 ${scrolled ? 'bg-gray-100' : 'bg-white/20'}`}>
              {langs.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => i18n.changeLanguage(lang.code)}
                  className={`px-2.5 py-1 text-xs font-800 rounded-lg transition-all duration-200 cursor-pointer ${
                    i18n.language === lang.code
                      ? 'bg-orange-400 text-white shadow-sm'
                      : scrolled
                        ? 'text-gray-500 hover:text-orange-500'
                        : 'text-white/80 hover:text-white'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>

            {/* Hamburger (mobile) */}
            <button
              className={`lg:hidden p-2 rounded-xl transition-colors ${
                scrolled
                  ? 'text-gray-600 hover:bg-orange-50 hover:text-orange-500'
                  : 'text-white hover:bg-white/15'
              }`}
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#FFFBF5] border-t border-orange-100 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                onClick={handleLinkClick}
                className="px-4 py-3 text-sm font-700 text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-xl transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
