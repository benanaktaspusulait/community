import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FileText, Image, Link2, PlayCircle, Search } from 'lucide-react'
import clsx from 'clsx'
import { TopBar } from '../components/ui/TopBar'
import { Card } from '../components/ui/Card'

const filters = ['All', 'Links', 'Images', 'Videos', 'Files'] as const

const items = [
  { title: 'SpareRoom search filters for MK', type: 'Links', group: 'Housing', source: 'Room request thread', icon: Link2 },
  { title: 'Tenancy agreement sample checklist.pdf', type: 'Files', group: 'Housing', source: 'Renting checklist', icon: FileText },
  { title: 'School catchment map screenshot', type: 'Images', group: 'Education', source: 'Primary school advice', icon: Image },
  { title: 'How to register with a GP - video guide', type: 'Videos', group: 'Health', source: 'GP registration guide', icon: PlayCircle },
]

export function MediaArchive() {
  const navigate = useNavigate()
  const [filter, setFilter] = useState<(typeof filters)[number]>('All')
  const visible = filter === 'All' ? items : items.filter(item => item.type === filter)

  return (
    <div className="flex h-full flex-col bg-[#f8f1e7]">
      <TopBar title="Media & links" back />

      <div className="border-b border-border bg-card/88 px-4 pb-4 pt-3 backdrop-blur-xl">
        <div className="flex items-center gap-2 rounded-2xl border border-border bg-white/72 px-3 py-2.5">
          <Search size={15} className="text-muted" />
          <input
            placeholder="Find old links, files, images, videos..."
            className="flex-1 bg-transparent text-sm text-ink outline-none placeholder:text-muted/55"
          />
        </div>
        <div className="mt-3 flex gap-2 overflow-x-auto no-scrollbar">
          {filters.map(item => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={clsx(
                'shrink-0 rounded-full border px-3 py-1.5 text-xs font-extrabold',
                filter === item
                  ? 'border-ink bg-ink text-white'
                  : 'border-border bg-white/70 text-muted'
              )}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 pb-8 pt-4">
        <div className="mb-3">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-muted/65">Archive</p>
          <h1 className="text-xl font-black tracking-[-0.04em] text-ink">Everything shared, still findable</h1>
        </div>

        <div className="flex flex-col gap-3">
          {visible.map(({ title, type, group, source, icon: Icon }) => (
            <Card key={title} onClick={() => navigate(type === 'Links' ? '/thread' : '/resource')} className="flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                <Icon size={19} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-white px-2 py-0.5 text-[10px] font-black text-muted ring-1 ring-border">{type}</span>
                  <span className="text-[10px] font-bold text-muted/70">{group}</span>
                </div>
                <p className="mt-2 text-sm font-black leading-snug tracking-[-0.02em] text-ink">{title}</p>
                <p className="mt-1 text-xs text-muted">Source: {source}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
