import { useNavigate } from 'react-router-dom'
import { Bell, BookOpen, CalendarDays, CheckCircle2, Plus, Search, ShieldCheck } from 'lucide-react'
import { BottomNav } from '../components/ui/BottomNav'
import { Badge } from '../components/ui/Badge'
import { Card } from '../components/ui/Card'

const feed = [
  { id: '1', type: 'resource' as const, title: 'How to rent a room in the UK', meta: 'Checklist • Updated 2d ago', pinned: true, signal: 'Admin pick' },
  { id: '2', type: 'help' as const, title: 'Looking for a room in Milton Keynes', meta: 'Budget £600 • Move-in Apr • Housing • 3 replies', pinned: false, signal: 'Open request' },
  { id: '3', type: 'solved' as const, title: "Driver's licence change steps", meta: 'Legal • 12 replies', pinned: false, signal: 'Solved' },
  { id: '4', type: 'help' as const, title: 'Anyone know a good GP near MK centre?', meta: 'Health • 5 replies', pinned: false, signal: 'Nearby' },
  { id: '5', type: 'resource' as const, title: 'National Insurance number — step by step', meta: 'Legal • Updated 1w ago', pinned: false, signal: 'Library' },
]

function SpecialDayBanner({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="mx-4 mb-4 flex w-[calc(100%-2rem)] items-center justify-between rounded-[26px] bg-gradient-to-br from-[#f7c66a] via-[#e98f45] to-[#bd5743] p-4 text-left shadow-[0_18px_38px_rgba(189,87,67,0.22)]"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/20 text-white backdrop-blur">
          <CalendarDays size={21} />
        </div>
        <div>
          <p className="text-sm font-black tracking-[-0.02em] text-white">Ramazan Bayrami group is live</p>
          <p className="mt-0.5 text-xs font-medium text-white/82">Invites sent from Housing, Jobs, Health, and Local</p>
        </div>
      </div>
      <span className="rounded-full bg-white/20 px-3 py-1.5 text-xs font-extrabold text-white">
        Open
      </span>
    </button>
  )
}

export function HomeFeed() {
  const navigate = useNavigate()

  return (
    <div className="relative flex h-full flex-col bg-[#f8f1e7]">
      <div className="brand-gradient px-4 pb-5 pt-4 text-white">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/62">Milton Keynes</p>
            <button onClick={() => navigate('/community')} className="mt-1 text-2xl font-black tracking-[-0.05em] text-left hover:text-white/80 transition-colors">
              Community memory
            </button>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => navigate('/search')}
              className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/14 text-white backdrop-blur transition-colors hover:bg-white/22"
              aria-label="Search"
            >
              <Search size={18} />
            </button>
            <button
              onClick={() => navigate('/notifications')}
              className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-white/14 text-white backdrop-blur transition-colors hover:bg-white/22"
              aria-label="Notifications"
            >
              <Bell size={18} />
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[#ffd166] ring-2 ring-[#168a7a]" />
            </button>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-2">
          {[
            { label: 'Answers', value: '128', icon: BookOpen, to: '/library' },
            { label: 'Solved', value: '76%', icon: CheckCircle2, to: '/search' },
            { label: 'Reports', value: '2', icon: ShieldCheck, to: '/admin/reports' },
          ].map(({ label, value, icon: Icon, to }) => (
            <button key={label} onClick={() => navigate(to)} className="rounded-[18px] bg-white/14 p-3 backdrop-blur text-left hover:bg-white/22 transition-colors">
              <Icon size={15} className="text-white/76" />
              <p className="mt-2 text-lg font-black tracking-[-0.04em]">{value}</p>
              <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-white/60">{label}</p>
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pb-24">
        <div className="flex gap-2 overflow-x-auto px-4 py-4 no-scrollbar">
          {['All', 'Housing', 'Legal', 'Health', 'Jobs', 'Services'].map((t, i) => (
            <button
              key={t}
              className={`shrink-0 rounded-full border px-3.5 py-2 text-xs font-extrabold transition-colors ${
                i === 0
                  ? 'border-ink bg-ink text-white'
                  : 'border-border bg-white/80 text-muted hover:border-brand-500 hover:text-brand-700'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <SpecialDayBanner onClick={() => navigate('/special-day')} />

        <div className="mb-2 flex items-center justify-between px-4">
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-muted/65">Today</p>
            <h2 className="text-base font-black tracking-[-0.03em] text-ink">Useful updates</h2>
          </div>
          <button className="rounded-full bg-white/80 px-3 py-1.5 text-xs font-extrabold text-brand-700 ring-1 ring-border">
            Curated
          </button>
        </div>

        <div className="flex flex-col gap-3 px-4">
          {feed.map(item => (
            <Card key={item.id} onClick={() => navigate('/thread')} className="flex flex-col gap-3">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Badge variant={item.type} />
                  <span className="text-[11px] font-bold text-muted/70">{item.signal}</span>
                </div>
                {item.pinned && (
                  <span className="rounded-full bg-brand-50 px-2 py-1 text-[10px] font-extrabold text-brand-700">
                    Pinned
                  </span>
                )}
              </div>
              <p className="text-[15px] font-black leading-snug tracking-[-0.025em] text-ink">{item.title}</p>
              <p className="text-xs font-medium text-muted">{item.meta}</p>
            </Card>
          ))}
        </div>
      </div>

      <button
        onClick={() => navigate('/create')}
        className="absolute bottom-[82px] right-5 z-30 flex h-14 w-14 items-center justify-center rounded-[22px] bg-ink text-white shadow-[0_18px_38px_rgba(23,33,31,0.28)] transition-transform active:scale-95"
        aria-label="Create"
      >
        <Plus size={24} />
      </button>

      <BottomNav />
    </div>
  )
}

