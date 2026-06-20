import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Search, Bell, Calendar, Newspaper, Wrench, ChevronRight,
  Flame, GraduationCap, Building2, Droplets, Bus, Trash2,
  TreePine, Heart, BadgeAlert, MapPin
} from 'lucide-react'
import { useLang } from '../context/LangContext.jsx'

const stats = ['260.000+', '2', '1', '3']

const quickServices = [
  { icon: <Building2 size={22} />, idx: 0 },
  { icon: <Flame size={22} />, idx: 1 },
  { icon: <Bus size={22} />, idx: 2 },
  { icon: <Trash2 size={22} />, idx: 3 },
  { icon: <Droplets size={22} />, idx: 4 },
  { icon: <GraduationCap size={22} />, idx: 5 },
  { icon: <TreePine size={22} />, idx: 6 },
  { icon: <Heart size={22} />, idx: 7 },
]

const quickServiceKeys = [
  ['Bürgerbüro', 'Ausweis, Meldung, Ummeldung'],
  ['STAWAG', 'Strom, Gas, Wasser'],
  ['ASEAG', 'Bus & Bahnen im Stadtgebiet'],
  ['AWA', 'Abfallentsorgung & Recycling'],
  ['Carolus Thermen', 'Thermalquellen & Wellness'],
  ['RWTH Aachen', 'Technische Hochschule'],
  ['Grünflächen', 'Parks & Stadtwald'],
  ['Gesundheit', 'Uniklinik & Sozialamt'],
]

const upcomingEvents = [
  { date: '28. Jun', title_de: 'Aachener Weihnachtsmarkt', title_en: 'Aachen Christmas Market', location: 'Marktplatz', cat_de: 'Markt', cat_en: 'Market' },
  { date: '5. Jul', title_de: 'Reitturnier CHIO Aachen', title_en: 'CHIO Aachen Horse Show', location: 'Soers', cat_de: 'Sport', cat_en: 'Sport' },
  { date: '12. Jul', title_de: 'Stadtführung Dom & Rathaus', title_en: 'Dom & Town Hall Tour', location: 'Katschhof', cat_de: 'Kultur', cat_en: 'Culture' },
  { date: '19. Jul', title_de: 'Open-Air Kino Lousberg', title_en: 'Open-Air Cinema Lousberg', location: 'Lousberg', cat_de: 'Film', cat_en: 'Film' },
]

export default function Home() {
  const [query, setQuery] = useState('')
  const { lang, tr } = useLang()
  const t = tr.home

  return (
    <div>
      {/* Hero — city photo background */}
      <section className="relative min-h-[520px] flex flex-col items-center justify-center text-white overflow-hidden">
        {/* Background photo */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1920&q=80)' }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Decorative circles */}
        <div className="absolute top-[-80px] right-[-80px] w-64 h-64 rounded-full bg-white/5" />
        <div className="absolute bottom-[-60px] left-[-40px] w-80 h-80 rounded-full bg-[#C8A951]/10" />

        <div className="relative text-center px-4 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin size={16} className="text-[#C8A951]" />
            <span className="text-[#C8A951] font-medium text-sm tracking-widest uppercase">{t.location}</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-3 leading-tight">
            {lang === 'de' ? 'Willkommen in' : 'Welcome to'}<br/>
            <span className="text-[#C8A951]">Aachen</span>
          </h1>
          <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto">{t.heroSubtitle}</p>
          <div className="flex gap-2 max-w-xl mx-auto">
            <div className="flex-1 flex items-center bg-white/10 backdrop-blur border border-white/20 rounded-xl px-4 gap-2">
              <Search size={18} className="text-blue-200 shrink-0" />
              <input
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder={t.searchPlaceholder}
                className="flex-1 bg-transparent py-3 text-white placeholder-blue-300 outline-none text-sm"
              />
            </div>
            <button className="bg-[#C8A951] hover:bg-yellow-400 text-[#003D73] font-semibold px-6 py-3 rounded-xl transition-colors text-sm shrink-0">
              {t.searchBtn}
            </button>
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative mt-14 w-full max-w-3xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {stats.map((val, i) => (
              <div key={i} className="bg-white/10 backdrop-blur border border-white/15 rounded-2xl p-4 text-center">
                <div className="text-2xl font-bold text-[#C8A951]">{val}</div>
                <div className="text-xs text-blue-200 mt-1">{t.statLabels[i]}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="pb-10" />
      </section>

      {/* Alerts */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center gap-2 mb-4">
          <BadgeAlert size={20} className="text-[#003D73] dark:text-blue-400" />
          <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100">{t.alertsTitle}</h2>
        </div>
        <div className="flex flex-col gap-2">
          {[
            { type: 'info', idx: 0 },
            { type: 'warn', idx: 1 },
            { type: 'ok', idx: 2 },
          ].map((a, i) => (
            <div key={i} className={`flex items-start gap-3 px-4 py-3 rounded-xl text-sm font-medium ${
              a.type === 'warn' ? 'bg-amber-50 text-amber-800 border border-amber-200 dark:bg-amber-900/30 dark:text-amber-200 dark:border-amber-700'
              : a.type === 'ok' ? 'bg-green-50 text-green-800 border border-green-200 dark:bg-green-900/30 dark:text-green-200 dark:border-green-700'
              : 'bg-blue-50 text-blue-800 border border-blue-200 dark:bg-blue-900/30 dark:text-blue-200 dark:border-blue-700'
            }`}>
              <span className="mt-0.5">{a.type === 'warn' ? '⚠️' : a.type === 'ok' ? '✅' : 'ℹ️'}</span>
              {t.alertTexts[a.idx]}
            </div>
          ))}
        </div>
      </section>

      {/* Live Updates */}
      <section className="max-w-7xl mx-auto px-4 pb-8">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2 text-center">{t.liveTitle}</h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm text-center mb-6">{t.liveSubtitle}</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: <Bell size={22} />, color: 'bg-red-100 text-red-600 dark:bg-red-900/40 dark:text-red-400', count: '3', labelIdx: 0 },
            { icon: <Calendar size={22} />, color: 'bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400', count: '12', labelIdx: 1 },
            { icon: <Newspaper size={22} />, color: 'bg-purple-100 text-purple-600 dark:bg-purple-900/40 dark:text-purple-400', count: '8', labelIdx: 2 },
            { icon: <Wrench size={22} />, color: 'bg-green-100 text-green-600 dark:bg-green-900/40 dark:text-green-400', count: '24', labelIdx: 3 },
          ].map(c => (
            <div key={c.labelIdx} className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-100 dark:border-gray-700 text-center">
              <div className={`w-12 h-12 rounded-xl ${c.color} flex items-center justify-center mx-auto mb-3`}>{c.icon}</div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{c.count}</div>
              <div className="text-xs text-gray-400 dark:text-gray-500 font-medium">{t.liveLabels[c.labelIdx]}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Services */}
      <section className="bg-[#E8F0F9] dark:bg-gray-800 py-10 transition-colors">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">{t.servicesTitle}</h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm">{t.servicesSubtitle}</p>
            </div>
            <Link to="/services" className="flex items-center gap-1 text-[#003D73] dark:text-blue-400 font-semibold text-sm hover:underline">
              {t.showAll} <ChevronRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickServices.map(s => {
              const [name_de, desc_de] = quickServiceKeys[s.idx]
              const enData = tr.services?.items?.[s.idx]
              const name = lang === 'en' && enData ? enData[0] : name_de
              const desc = lang === 'en' && enData ? enData[1] : desc_de
              return (
                <div key={s.idx} className="bg-white dark:bg-gray-700 rounded-2xl p-5 shadow-sm border border-gray-100 dark:border-gray-600 hover:shadow-md hover:border-[#003D73]/30 transition-all cursor-pointer group">
                  <div className="w-11 h-11 rounded-xl bg-[#003D73]/10 dark:bg-blue-900/40 text-[#003D73] dark:text-blue-300 flex items-center justify-center mb-3 group-hover:bg-[#003D73] group-hover:text-white transition-colors">{s.icon}</div>
                  <div className="font-semibold text-gray-900 dark:text-white text-sm mb-1">{name}</div>
                  <div className="text-xs text-gray-400 dark:text-gray-400">{desc}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">{t.eventsTitle}</h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm">{t.eventsSubtitle}</p>
          </div>
          <Link to="/events" className="flex items-center gap-1 text-[#003D73] dark:text-blue-400 font-semibold text-sm hover:underline">
            {t.allDates} <ChevronRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {upcomingEvents.map(e => (
            <div key={e.title_de} className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
              <div className="bg-[#003D73] text-white text-center py-3">
                <div className="text-[#C8A951] font-bold text-lg">{e.date.split(' ')[0]}</div>
                <div className="text-blue-200 text-xs">{e.date.split(' ')[1]}</div>
              </div>
              <div className="p-4">
                <span className="text-xs font-semibold text-[#003D73] dark:text-blue-300 bg-blue-50 dark:bg-blue-900/40 px-2 py-0.5 rounded-full">
                  {lang === 'en' ? e.cat_en : e.cat_de}
                </span>
                <div className="font-semibold text-gray-900 dark:text-white text-sm mt-2 mb-1">
                  {lang === 'en' ? e.title_en : e.title_de}
                </div>
                <div className="text-xs text-gray-400 flex items-center gap-1"><MapPin size={11} />{e.location}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
