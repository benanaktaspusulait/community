import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { MapPin, Search } from 'lucide-react'
import clsx from 'clsx'

const suggestions = [
  'Milton Keynes', 'MK Centre', 'Bletchley', 'Wolverton',
  'Newport Pagnell', 'Stony Stratford', 'Olney', 'Buckingham',
]

const visibilityOptions = [
  { key: 'PUBLIC', label: 'Public', desc: 'Visible to all community members', emoji: '🌍' },
  { key: 'MEMBERS_ONLY', label: 'Members only', desc: 'Only people in your groups', emoji: '👥' },
  { key: 'HIDDEN', label: 'Hidden', desc: 'Not shown to anyone', emoji: '🔒' },
]

export function LocationSetup() {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState('')
  const [visibility, setVisibility] = useState('MEMBERS_ONLY')

  const filtered = suggestions.filter(s =>
    query === '' || s.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="flex flex-col h-full bg-white">
      {/* progress */}
      <div className="px-6 pt-6">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs text-gray-400 font-medium">Step 2 of 3</span>
          <button onClick={() => navigate('/onboarding/interests')} className="text-xs text-[#4f6ef7] font-semibold">Skip</button>
        </div>
        <div className="h-1.5 bg-gray-100 rounded-full">
          <div className="h-1.5 bg-[#4f6ef7] rounded-full w-2/3" />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-6 pt-6 pb-4 flex flex-col gap-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-1">Where are you based?</h2>
          <p className="text-sm text-gray-500">Used to show you relevant local content. Not a precise address.</p>
        </div>

        {/* search */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 bg-[#f8f9fb] rounded-xl border border-[#e4e7ec] px-3 py-2.5">
            <Search size={15} className="text-gray-400 shrink-0" />
            <input
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search city or area…"
              className="flex-1 bg-transparent text-sm outline-none placeholder:text-gray-400"
            />
          </div>

          <div className="flex flex-col gap-1">
            {filtered.map(s => (
              <button
                key={s}
                onClick={() => setSelected(s)}
                className={clsx(
                  'flex items-center gap-3 px-4 py-3 rounded-xl border text-sm text-left transition-colors',
                  selected === s
                    ? 'border-[#4f6ef7] bg-[#f0f4ff] text-[#4f6ef7] font-semibold'
                    : 'border-[#e4e7ec] bg-white text-gray-700'
                )}
              >
                <MapPin size={14} className={selected === s ? 'text-[#4f6ef7]' : 'text-gray-400'} />
                {s}
                {selected === s && <span className="ml-auto text-[#4f6ef7]">✓</span>}
              </button>
            ))}
          </div>
        </div>

        {/* visibility */}
        {selected && (
          <div className="flex flex-col gap-3">
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-1">Who can see your location?</p>
              <p className="text-xs text-gray-400">You can change this any time in settings.</p>
            </div>
            {visibilityOptions.map(opt => (
              <button
                key={opt.key}
                onClick={() => setVisibility(opt.key)}
                className={clsx(
                  'flex items-center gap-3 px-4 py-3 rounded-xl border text-left transition-colors',
                  visibility === opt.key
                    ? 'border-[#4f6ef7] bg-[#f0f4ff]'
                    : 'border-[#e4e7ec] bg-white'
                )}
              >
                <span className="text-xl">{opt.emoji}</span>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900">{opt.label}</p>
                  <p className="text-xs text-gray-400">{opt.desc}</p>
                </div>
                <div className={clsx(
                  'w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0',
                  visibility === opt.key ? 'border-[#4f6ef7]' : 'border-gray-300'
                )}>
                  {visibility === opt.key && <div className="w-2 h-2 rounded-full bg-[#4f6ef7]" />}
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="px-6 pb-10 flex gap-3">
        <Button variant="ghost" className="flex-1 py-3" onClick={() => navigate(-1)}>Back</Button>
        <Button className="flex-1 py-3" disabled={!selected} onClick={() => navigate('/onboarding/interests')}>
          Next
        </Button>
      </div>
    </div>
  )
}
