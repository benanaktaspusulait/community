import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { TopBar } from '../components/ui/TopBar'
import { Button } from '../components/ui/Button'
import { MapPin, Search, Navigation } from 'lucide-react'
import clsx from 'clsx'
import { savedLocationKey } from '../hooks/useSavedLocation'

// Mock map pins — represent searchable areas
const mapAreas = [
  { id: '1', name: 'MK Centre',       x: 52, y: 44, district: 'MK1' },
  { id: '2', name: 'Bletchley',        x: 38, y: 62, district: 'MK2' },
  { id: '3', name: 'Wolverton',        x: 48, y: 22, district: 'MK12' },
  { id: '4', name: 'Newport Pagnell',  x: 68, y: 18, district: 'MK16' },
  { id: '5', name: 'Stony Stratford',  x: 30, y: 28, district: 'MK11' },
  { id: '6', name: 'Olney',            x: 74, y: 10, district: 'MK46' },
  { id: '7', name: 'Buckingham',       x: 20, y: 14, district: 'MK18' },
  { id: '8', name: 'Woburn Sands',     x: 72, y: 58, district: 'MK17' },
]

const suggestions = [
  'MK Centre', 'Bletchley', 'Wolverton', 'Newport Pagnell',
  'Stony Stratford', 'Olney', 'Buckingham', 'Woburn Sands',
]

export function MapLocationPicker() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [selected, setSelected] = useState<string | null>(null)
  const [query, setQuery] = useState('')
  const [showSearch, setShowSearch] = useState(false)
  const returnTo = searchParams.get('returnTo')
  const storageKey = searchParams.get('storageKey') || savedLocationKey

  const filtered = suggestions.filter(s =>
    query === '' || s.toLowerCase().includes(query.toLowerCase())
  )

  const handleConfirm = () => {
    if (selected) {
      const district = mapAreas.find(a => a.name === selected)?.district || 'Milton Keynes'
      localStorage.setItem(storageKey, selected)
      localStorage.setItem(`${storageKey}-district`, district)
    }
    if (returnTo) {
      navigate(returnTo)
    } else {
      navigate(-1)
    }
  }

  return (
    <div className="flex flex-col h-full bg-[#f8f9fb]">
      <TopBar title="Choose location" back />

      {/* map container */}
      <div className="relative flex-1 overflow-hidden">

        {/* mock map background — styled to look like a map */}
        <div className="absolute inset-0 bg-[#e8f0e8]">
          {/* road grid */}
          <svg className="absolute inset-0 w-full h-full opacity-40" xmlns="http://www.w3.org/2000/svg">
            {/* horizontal roads */}
            {[15, 28, 42, 55, 68, 80].map(y => (
              <line key={`h${y}`} x1="0" y1={`${y}%`} x2="100%" y2={`${y}%`} stroke="#c8d8c8" strokeWidth="2" />
            ))}
            {/* vertical roads */}
            {[12, 25, 38, 52, 65, 78].map(x => (
              <line key={`v${x}`} x1={`${x}%`} y1="0" x2={`${x}%`} y2="100%" stroke="#c8d8c8" strokeWidth="2" />
            ))}
            {/* main roads — thicker */}
            <line x1="0" y1="44%" x2="100%" y2="44%" stroke="#b8c8b8" strokeWidth="4" />
            <line x1="52%" y1="0" x2="52%" y2="100%" stroke="#b8c8b8" strokeWidth="4" />
            {/* motorway */}
            <line x1="0" y1="38%" x2="100%" y2="52%" stroke="#d4c090" strokeWidth="6" opacity="0.6" />
          </svg>

          {/* green areas */}
          <div className="absolute bg-[#c8dcc8] rounded-full opacity-50" style={{ left: '55%', top: '30%', width: 80, height: 60 }} />
          <div className="absolute bg-[#c8dcc8] rounded-full opacity-40" style={{ left: '20%', top: '55%', width: 60, height: 50 }} />
          <div className="absolute bg-[#b8d4e8] rounded-full opacity-40" style={{ left: '60%', top: '60%', width: 40, height: 30 }} />

          {/* map pins */}
          {mapAreas.map(area => (
            <button
              key={area.id}
              onClick={() => setSelected(area.name)}
              className="absolute transform -translate-x-1/2 -translate-y-full"
              style={{ left: `${area.x}%`, top: `${area.y}%` }}
            >
              <div className="flex flex-col items-center">
                <div className={clsx(
                  'flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-bold shadow-md transition-all',
                  selected === area.name
                    ? 'bg-[#4f6ef7] text-white scale-110'
                    : 'bg-white text-gray-700 hover:bg-[#f0f4ff]'
                )}>
                  <MapPin size={10} className={selected === area.name ? 'text-white' : 'text-[#4f6ef7]'} />
                  {area.name}
                </div>
                <div className={clsx(
                  'w-2 h-2 rounded-full mt-0.5',
                  selected === area.name ? 'bg-[#4f6ef7]' : 'bg-gray-400'
                )} />
              </div>
            </button>
          ))}

          {/* "You are here" dot */}
          <div className="absolute transform -translate-x-1/2 -translate-y-1/2" style={{ left: '52%', top: '44%' }}>
            <div className="w-4 h-4 rounded-full bg-blue-500 border-2 border-white shadow-lg">
              <div className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-60" />
            </div>
          </div>
        </div>

        {/* search bar overlay */}
        <div className="absolute top-3 left-3 right-3 z-10">
          <div
            className="flex items-center gap-2 bg-white rounded-xl shadow-lg px-3 py-2.5 border border-[#e4e7ec]"
            onClick={() => setShowSearch(true)}
          >
            <Search size={15} className="text-gray-400 shrink-0" />
            <input
              value={query}
              onChange={e => { setQuery(e.target.value); setShowSearch(true) }}
              placeholder="Search area or postcode…"
              className="flex-1 bg-transparent text-sm outline-none placeholder:text-gray-400"
            />
            {query && (
              <button onClick={() => { setQuery(''); setShowSearch(false) }} className="text-gray-400 text-xs">✕</button>
            )}
          </div>

          {/* search dropdown */}
          {showSearch && query && (
            <div className="mt-1 bg-white rounded-xl shadow-xl border border-[#e4e7ec] overflow-hidden">
              {filtered.map(s => (
                <button
                  key={s}
                  onClick={() => { setSelected(s); setQuery(''); setShowSearch(false) }}
                  className="w-full flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-[#f0f4ff] border-b border-[#f0f0f0] last:border-0"
                >
                  <MapPin size={13} className="text-[#4f6ef7] shrink-0" /> {s}
                </button>
              ))}
              {filtered.length === 0 && (
                <div className="px-4 py-3 text-sm text-gray-400">No results</div>
              )}
            </div>
          )}
        </div>

        {/* use current location button */}
        <button
          onClick={() => setSelected('MK Centre')}
          className="absolute bottom-4 right-4 z-10 flex items-center gap-2 bg-white rounded-xl shadow-lg px-3 py-2.5 text-xs font-semibold text-[#4f6ef7] border border-[#e4e7ec]"
        >
          <Navigation size={13} /> Use my location
        </button>
      </div>

      {/* bottom sheet */}
      <div className="bg-white border-t border-[#e4e7ec] px-4 pt-4 pb-8 flex flex-col gap-3">
        {selected ? (
          <>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#e0eaff] flex items-center justify-center">
                <MapPin size={18} className="text-[#4f6ef7]" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">{selected}</p>
                <p className="text-xs text-gray-400">
                  {mapAreas.find(a => a.name === selected)?.district} • Milton Keynes
                </p>
              </div>
            </div>
            <Button className="w-full py-3" onClick={handleConfirm}>
              Confirm location
            </Button>
          </>
        ) : (
          <p className="text-sm text-gray-400 text-center py-2">
            Tap an area on the map or search above
          </p>
        )}
      </div>
    </div>
  )
}
