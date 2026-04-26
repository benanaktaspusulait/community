import { useNavigate } from 'react-router-dom'
import { Search, Bell, Plus } from 'lucide-react'
import { BottomNav } from '../components/ui/BottomNav'
import { Badge } from '../components/ui/Badge'
import { Card } from '../components/ui/Card'

const feed = [
  {
    id: '1', type: 'resource' as const,
    title: 'How to rent a room in the UK',
    meta: 'Checklist • Updated 2d ago', pinned: true,
  },
  {
    id: '2', type: 'help' as const,
    title: 'Looking for a room in Milton Keynes',
    meta: 'Budget £600 • Move-in Apr • Housing • 3 replies', pinned: false,
  },
  {
    id: '3', type: 'solved' as const,
    title: "Driver's licence change steps",
    meta: 'Legal • 12 replies', pinned: false,
  },
  {
    id: '4', type: 'help' as const,
    title: 'Anyone know a good GP near MK centre?',
    meta: 'Health • 5 replies', pinned: false,
  },
  {
    id: '5', type: 'resource' as const,
    title: 'National Insurance number — step by step',
    meta: 'Legal • Updated 1w ago', pinned: false,
  },
]

// Special day banner
function SpecialDayBanner({ onClick }: { onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="mx-4 mb-3 bg-gradient-to-r from-pink-500 to-orange-400 rounded-2xl p-4 flex items-center justify-between cursor-pointer"
    >
      <div>
        <p className="text-white font-bold text-sm">🎉 Ramazan Bayramı grubu aktif</p>
        <p className="text-white/80 text-xs mt-0.5">Tüm üyeler davetlidir</p>
      </div>
      <span className="text-white text-xs font-semibold bg-white/20 px-3 py-1.5 rounded-full">
        Gruba git →
      </span>
    </div>
  )
}

export function HomeFeed() {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col h-full bg-[#f8f9fb]">
      {/* header */}
      <div className="bg-white px-4 pt-4 pb-3 flex items-center justify-between border-b border-[#e4e7ec]">
        <div>
          <p className="text-xs text-gray-400 font-medium">Milton Keynes</p>
          <h1 className="text-lg font-bold text-gray-900">Community</h1>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => navigate('/search')}
            className="w-9 h-9 rounded-xl bg-[#f8f9fb] flex items-center justify-center text-gray-500"
          >
            <Search size={18} />
          </button>
          <button
            onClick={() => navigate('/notifications')}
            className="w-9 h-9 rounded-xl bg-[#f8f9fb] flex items-center justify-center text-gray-500 relative"
          >
            <Bell size={18} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pb-20">
        {/* topic chips */}
        <div className="flex gap-2 px-4 py-3 overflow-x-auto no-scrollbar">
          {['All', 'Housing', 'Legal', 'Health', 'Jobs', 'Services'].map((t, i) => (
            <button
              key={t}
              className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors ${
                i === 0
                  ? 'bg-[#4f6ef7] text-white border-[#4f6ef7]'
                  : 'bg-white text-gray-600 border-[#e4e7ec]'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* special day banner */}
        <SpecialDayBanner onClick={() => navigate('/special-day')} />

        {/* feed */}
        <div className="flex flex-col gap-3 px-4">
          {feed.map(item => (
            <Card key={item.id} onClick={() => navigate('/thread')} className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                {item.pinned && (
                  <span className="text-[10px] font-semibold text-[#4f6ef7] bg-[#e0eaff] px-2 py-0.5 rounded-full">
                    📌 Pinned
                  </span>
                )}
                <Badge variant={item.type} />
              </div>
              <p className="text-sm font-semibold text-gray-900 leading-snug">{item.title}</p>
              <p className="text-xs text-gray-400">{item.meta}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* FAB */}
      <button
        onClick={() => navigate('/create')}
        className="fixed bottom-20 right-6 w-14 h-14 bg-[#4f6ef7] rounded-2xl shadow-lg flex items-center justify-center text-white z-30"
      >
        <Plus size={24} />
      </button>

      <BottomNav />
    </div>
  )
}
