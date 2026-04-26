import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, SlidersHorizontal } from 'lucide-react'
import { TopBar } from '../components/ui/TopBar'
import { BottomNav } from '../components/ui/BottomNav'
import { Badge } from '../components/ui/Badge'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'

const results = [
  { id: '1', type: 'resource' as const, title: 'Renting checklist (UK)', meta: 'Housing • Updated 3d ago' },
  { id: '2', type: 'solved' as const, title: 'Room contract pitfalls', meta: 'Solved • 8 replies • Housing' },
  { id: '3', type: 'help' as const, title: 'Looking for a room — MK centre', meta: 'Open • Budget £550 • 2 replies' },
]

export function SearchScreen() {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')
  const [activeType, setActiveType] = useState<'All' | 'Thread' | 'Resource'>('All')

  const hasResults = query.length > 0

  return (
    <div className="flex flex-col h-full bg-[#f8f9fb]">
      <TopBar title="Search" />

      <div className="bg-white px-4 pb-3 border-b border-[#e4e7ec]">
        {/* search input */}
        <div className="flex items-center gap-2 bg-[#f8f9fb] rounded-xl px-3 py-2.5 border border-[#e4e7ec]">
          <Search size={16} className="text-gray-400 shrink-0" />
          <input
            autoFocus
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search community knowledge…"
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-gray-400"
          />
          {query && (
            <button onClick={() => setQuery('')} className="text-gray-400 text-xs">✕</button>
          )}
        </div>

        {/* filters */}
        <div className="flex items-center gap-2 mt-2 overflow-x-auto no-scrollbar">
          {(['All', 'Thread', 'Resource'] as const).map(t => (
            <button
              key={t}
              onClick={() => setActiveType(t)}
              className={`shrink-0 px-3 py-1 rounded-full text-xs font-semibold border transition-colors ${
                activeType === t
                  ? 'bg-[#4f6ef7] text-white border-[#4f6ef7]'
                  : 'bg-white text-gray-600 border-[#e4e7ec]'
              }`}
            >
              {t}
            </button>
          ))}
          <button className="shrink-0 ml-auto flex items-center gap-1 text-xs text-gray-500 border border-[#e4e7ec] rounded-full px-3 py-1">
            <SlidersHorizontal size={12} /> Filters
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pb-20 px-4 pt-4">
        {!hasResults ? (
          /* empty state */
          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Recent searches</p>
            {['room rent milton keynes', 'driver licence change', 'national insurance'].map(s => (
              <button
                key={s}
                onClick={() => setQuery(s)}
                className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 border border-[#e4e7ec] text-sm text-gray-700 text-left"
              >
                <Search size={14} className="text-gray-400" /> {s}
              </button>
            ))}
          </div>
        ) : results.length > 0 ? (
          /* results */
          <div className="flex flex-col gap-3">
            <p className="text-xs text-gray-400">{results.length} results for "{query}"</p>
            {results.map(r => (
              <Card key={r.id} onClick={() => navigate('/thread')} className="flex flex-col gap-2">
                <Badge variant={r.type} />
                <p className="text-sm font-semibold text-gray-900">{r.title}</p>
                <p className="text-xs text-gray-400">{r.meta}</p>
              </Card>
            ))}
          </div>
        ) : (
          /* no results */
          <div className="flex flex-col items-center gap-4 pt-12 text-center">
            <div className="text-4xl">🔍</div>
            <div>
              <p className="font-semibold text-gray-800">No results for "{query}"</p>
              <p className="text-sm text-gray-400 mt-1">Try different keywords or create a help request.</p>
            </div>
            <Button onClick={() => navigate('/create')} className="px-6">
              Create help request
            </Button>
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  )
}
