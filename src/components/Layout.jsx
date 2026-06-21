import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Sun, Moon } from 'lucide-react'
import { useLang } from '../context/LangContext.jsx'

export default function Layout({ children }) {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const { lang, toggleLang, tr } = useLang()
  const [dark, setDark] = useState(() => {
    if (typeof window !== 'undefined') return localStorage.getItem('theme') === 'dark'
    return false
  })

  useEffect(() => {
    if (dark) { document.documentElement.classList.add('dark'); localStorage.setItem('theme', 'dark') }
    else { document.documentElement.classList.remove('dark'); localStorage.setItem('theme', 'light') }
  }, [dark])

  const nav = [
    { to: '/', label: tr.nav.home },
    { to: '/services', label: tr.nav.services },
    { to: '/events', label: tr.nav.events },
    { to: '/news', label: tr.nav.news },
  ]

  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900 dark:text-gray-100 transition-colors">
      <header className="bg-[#003D73] text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#C8A951] flex items-center justify-center text-[#003D73] font-bold text-lg">A</div>
            <div>
              <div className="font-bold text-base leading-tight">Aachen</div>
              <div className="text-xs text-blue-200 leading-tight">Stadtportal</div>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            {nav.map(n => (
              <Link key={n.to} to={n.to}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname === n.to ? 'bg-white/20 text-white' : 'text-blue-100 hover:bg-white/10'
                }`}>
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button
              onClick={toggleLang}
              className="h-8 px-2.5 rounded-lg bg-white/10 hover:bg-white/20 flex items-center gap-1.5 text-white transition-colors text-xs font-bold"
              title={lang === 'de' ? 'Switch to English' : 'Auf Deutsch wechseln'}
            >
              <span className="text-base">{lang === 'de' ? '🇩🇪' : '🇬🇧'}</span>
              {lang === 'de' ? 'DE' : 'EN'}
            </button>
            <button
              onClick={() => setDark(!dark)}
              className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              title={dark ? 'Light mode' : 'Dark mode'}
            >
              {dark ? <Sun size={15} /> : <Moon size={15} />}
            </button>
            <a href="tel:024118" className="hidden md:flex items-center gap-2 bg-[#C8A951] text-[#003D73] font-semibold text-sm px-3 py-2 rounded-lg hover:bg-yellow-400 transition-colors">
              <Phone size={13} /> 0241 180
            </a>
            <button className="md:hidden text-white p-1" onClick={() => setOpen(!open)}>
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden border-t border-blue-700 bg-[#003D73] px-4 py-3 flex flex-col gap-1">
            {nav.map(n => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  pathname === n.to ? 'bg-white/20 text-white' : 'text-blue-100'
                }`}>
                {n.label}
              </Link>
            ))}
          </div>
        )}
      </header>
      <main className="flex-1">{children}</main>
      <footer className="bg-[#003D73] text-blue-200 text-center text-sm py-6 mt-12 dark:bg-gray-950">
        <p className="font-semibold text-white mb-1">{tr.footer.title}</p>
        <p>{tr.footer.address}</p>
        <Link to="/datenschutz" className="mt-3 inline-block text-[#C8A951] hover:text-yellow-400 transition-colors text-xs font-semibold">
          Datenschutzerklärung (DSGVO)
        </Link>
        <span className="mx-2 text-blue-400">•</span>
        <Link to="/impressum" className="text-[#C8A951] hover:text-yellow-400 transition-colors text-xs font-semibold">
          Impressum
        </Link>
        <p className="mt-2 text-xs text-blue-300">{tr.footer.copyright}</p>
      </footer>
    </div>
  )
}
