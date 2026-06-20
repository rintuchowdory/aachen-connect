import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Bell } from 'lucide-react'

const nav = [
  { to: '/', label: 'Startseite' },
  { to: '/services', label: 'Stadtservices' },
  { to: '/events', label: 'Veranstaltungen' },
  { to: '/news', label: 'Nachrichten' },
]

export default function Layout({ children }) {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <div className="min-h-screen flex flex-col">
      {/* Topbar */}
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
          <div className="flex items-center gap-3">
            <a href="tel:0241180" className="hidden md:flex items-center gap-2 bg-[#C8A951] text-[#003D73] font-semibold text-sm px-4 py-2 rounded-lg hover:bg-yellow-400 transition-colors">
              <Phone size={14} /> 0241 180
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
                className={`px-4 py-3 rounded-lg text-sm font-medium ${
                  pathname === n.to ? 'bg-white/20 text-white' : 'text-blue-100'
                }`}>
                {n.label}
              </Link>
            ))}
          </div>
        )}
      </header>
      <main className="flex-1">{children}</main>
      <footer className="bg-[#003D73] text-blue-200 text-center text-sm py-6 mt-12">
        <p className="font-semibold text-white mb-1">Stadt Aachen — Stadtportal</p>
        <p>Markt 39, 52058 Aachen · 0241 180 · stadtportal@aachen.de</p>
        <p className="mt-2 text-xs text-blue-300">© 2025 Stadt Aachen. Alle Rechte vorbehalten.</p>
      </footer>
    </div>
  )
}