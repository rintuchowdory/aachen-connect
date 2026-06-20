import { useState } from 'react'
import { MapPin, Clock, Search, X } from 'lucide-react'

const events = [
  { date: '28. Jun', month: '2025', title: 'Altstadtfest Aachen', location: 'Altstadt & Marktplatz', time: '14:00 – 22:00', cat: 'Stadtfest', desc: 'Das jährliche Altstadtfest mit Live-Musik, Ständen und Vorführungen rund um den historischen Marktplatz.', color: 'bg-blue-600' },
  { date: '5.–13. Jul', month: '2025', title: 'CHIO Aachen 2025', location: 'Reitanlage Soers', time: 'ganztägig', cat: 'Sport', desc: 'Das weltberühmte Reitturnier – „Wimbledon des Reitsports" – mit internationaler Beteiligung.', color: 'bg-green-600' },
  { date: '12. Jul', month: '2025', title: 'Stadtführung Dom & Rathaus', location: 'Katschhof / Domhof', time: '10:00 Uhr', cat: 'Kultur', desc: 'Geführte Tour durch UNESCO-Welterbe Aachener Dom und das historische Rathaus mit Stadtführer.', color: 'bg-purple-600' },
  { date: '19. Jul', month: '2025', title: 'Open-Air Kino Lousberg', location: 'Lousberg', time: 'ab 21:00', cat: 'Film', desc: 'Sommerfilme unter freiem Himmel auf dem Lousberg – Decke mitbringen empfohlen.', color: 'bg-amber-600' },
  { date: '26. Jul', month: '2025', title: 'Karneval der Kulturen', location: 'Pontstraße', time: '15:00 – 23:00', cat: 'Kultur', desc: 'Interkulturelles Fest mit Musik, Tanz und Speisen aus aller Welt in der Pontstraße.', color: 'bg-pink-600' },
  { date: '2. Aug', month: '2025', title: 'Radmarathon Aachen–Düren', location: 'Start: Marktplatz', time: '8:00 Uhr', cat: 'Sport', desc: 'Beliebter Radmarathon durch die Aachener Region mit verschiedenen Distanzen für alle Leistungsklassen.', color: 'bg-teal-600' },
  { date: '16. Aug', month: '2025', title: 'Klassik Open Air', location: 'Elisenbrunnen', time: 'ab 19:30', cat: 'Musik', desc: 'Klassikkonzert am Elisenbrunnen mit dem Sinfonieorchester Aachen bei freiem Eintritt.', color: 'bg-indigo-600' },
  { date: '6.–7. Sep', month: '2025', title: 'Mediaevent – Kaisergeschichten', location: 'Domhof', time: '10:00 – 18:00', cat: 'Geschichte', desc: 'Mittelalterliches Spektakel rund um Karls des Großen Erbe – Handwerk, Kostüme und historische Vorführungen.', color: 'bg-red-700' },
]

const catColors = {
  Stadtfest: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
  Sport: 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300',
  Kultur: 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300',
  Film: 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
  Musik: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300',
  Geschichte: 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300',
}

const ALL = 'Alle'
const categories = [ALL, ...Array.from(new Set(events.map(e => e.cat)))]

export default function Events() {
  const [active, setActive] = useState(ALL)
  const [query, setQuery] = useState('')

  const filtered = events.filter(e => {
    const matchCat = active === ALL || e.cat === active
    const q = query.toLowerCase()
    const matchSearch = !q || e.title.toLowerCase().includes(q) || e.location.toLowerCase().includes(q) || e.desc.toLowerCase().includes(q)
    return matchCat && matchSearch
  })

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Veranstaltungen in Aachen</h1>
        <p className="text-gray-500 dark:text-gray-400">Aktuelle & kommende Highlights in der Kaiserstadt</p>
      </div>

      {/* Search bar */}
      <div className="relative mb-5">
        <Search size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Veranstaltungen durchsuchen …"
          className="w-full pl-11 pr-10 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm text-gray-800 dark:text-gray-100 placeholder-gray-400 outline-none focus:border-[#003D73] focus:ring-2 focus:ring-[#003D73]/10 transition-all"
        />
        {query && (
          <button onClick={() => setQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
            <X size={16} />
          </button>
        )}
      </div>

      {/* Category filter tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all border ${
              active === cat
                ? 'bg-[#003D73] text-white border-[#003D73] shadow-sm'
                : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-600 hover:border-[#003D73] hover:text-[#003D73]'
            }`}
          >
            {cat}
            {cat !== ALL && (
              <span className={`ml-1.5 text-xs px-1.5 py-0.5 rounded-full ${active === cat ? 'bg-white/20 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400'}`}>
                {events.filter(e => e.cat === cat).length}
              </span>
            )}
          </button>
        ))}
      </div>

      <p className="text-sm text-gray-400 dark:text-gray-500 mb-4">
        {filtered.length} Ergebnis{filtered.length !== 1 ? 'se' : ''}
        {active !== ALL ? ` in „${active}"` : ''}
        {query ? ` für „${query}"` : ''}
      </p>

      {filtered.length === 0 ? (
        <div className="text-center py-20 text-gray-400 dark:text-gray-500">Keine Veranstaltungen gefunden.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filtered.map(e => (
            <div key={e.title} className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden hover:shadow-md transition-shadow flex">
              <div className={`${e.color} text-white flex flex-col items-center justify-center px-4 shrink-0 min-w-[72px]`}>
                <span className="text-2xl font-bold leading-none">{e.date.split('.')[0]}.</span>
                <span className="text-xs opacity-80 mt-1">{e.month}</span>
              </div>
              <div className="p-4 flex-1">
                <div className="mb-2">
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${catColors[e.cat] || 'bg-gray-100 text-gray-600'}`}>{e.cat}</span>
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-1">{e.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-xs mb-3 line-clamp-2">{e.desc}</p>
                <div className="flex items-center gap-3 text-xs text-gray-400 dark:text-gray-500">
                  <span className="flex items-center gap-1"><MapPin size={11} />{e.location}</span>
                  <span className="flex items-center gap-1"><Clock size={11} />{e.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
