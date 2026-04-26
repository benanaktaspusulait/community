import { useNavigate } from 'react-router-dom'
import { TopBar } from '../components/ui/TopBar'
import { BottomNav } from '../components/ui/BottomNav'
import { Card } from '../components/ui/Card'
import { Users, MapPin, ChevronRight } from 'lucide-react'

const groups = [
  { id: '1', name: 'Housing', threads: 34, members: 248, emoji: '🏠' },
  { id: '2', name: 'Legal', threads: 18, members: 190, emoji: '⚖️' },
  { id: '3', name: 'Health', threads: 22, members: 210, emoji: '🏥' },
  { id: '4', name: 'Jobs', threads: 15, members: 175, emoji: '💼' },
  { id: '5', name: 'Services', threads: 9, members: 130, emoji: '🔧' },
  { id: '6', name: 'Local', threads: 27, members: 260, emoji: '📍' },
]

export function CommunityHome() {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col h-full bg-[#f8f9fb]">
      <TopBar title="Milton Keynes" back />

      <div className="flex-1 overflow-y-auto pb-20">
        {/* community banner */}
        <div className="bg-gradient-to-br from-[#4f6ef7] to-[#7c3aed] px-4 py-6 flex flex-col gap-2">
          <h2 className="text-white font-bold text-xl">MK Community</h2>
          <div className="flex items-center gap-3 text-white/80 text-xs">
            <span className="flex items-center gap-1"><MapPin size={11} /> Milton Keynes, UK</span>
            <span className="flex items-center gap-1"><Users size={11} /> 1,240 members</span>
          </div>
          <p className="text-white/70 text-xs mt-1">
            A structured community for Turkish-speaking residents of Milton Keynes.
          </p>
          <button className="mt-2 bg-white text-[#4f6ef7] text-xs font-bold px-4 py-2 rounded-xl w-fit">
            Joined ✓
          </button>
        </div>

        <div className="px-4 pt-4 flex flex-col gap-4">
          {/* topic groups */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Topic groups</p>
              <button
                onClick={() => navigate('/group/create')}
                className="text-xs text-[#4f6ef7] font-semibold"
              >
                + New group
              </button>
            </div>
            <div className="flex flex-col gap-2">
              {groups.map(g => (
                <button
                  key={g.id}
                  onClick={() => navigate('/group')}
                  className="flex items-center gap-3 bg-white rounded-xl border border-[#e4e7ec] px-4 py-3"
                >
                  <span className="text-xl w-8">{g.emoji}</span>
                  <div className="flex-1 text-left">
                    <p className="text-sm font-semibold text-gray-900">{g.name}</p>
                    <p className="text-xs text-gray-400">{g.threads} threads • {g.members} members</p>
                  </div>
                  <ChevronRight size={14} className="text-gray-300" />
                </button>
              ))}

              {/* suggest a group — for members */}
              <button
                onClick={() => navigate('/group/suggest')}
                className="flex items-center gap-3 border-2 border-dashed border-[#e4e7ec] rounded-xl px-4 py-3 hover:border-[#4f6ef7] transition-colors"
              >
                <span className="text-xl w-8">💡</span>
                <div className="flex-1 text-left">
                  <p className="text-sm font-semibold text-gray-500">Suggest a new group</p>
                  <p className="text-xs text-gray-400">Send a suggestion to the admin</p>
                </div>
              </button>
            </div>
          </div>

          {/* rules */}
          <Card className="flex flex-col gap-2">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Community rules</p>
            {[
              'Stay on topic within each group',
              'No spam or unsolicited ads',
              'Be respectful and helpful',
              'Use structured posts — no free-form listings',
            ].map((r, i) => (
              <div key={i} className="flex gap-2 text-sm text-gray-700">
                <span className="text-[#4f6ef7] font-bold shrink-0">{i + 1}.</span>
                <span>{r}</span>
              </div>
            ))}
          </Card>
        </div>
      </div>

      <BottomNav />
    </div>
  )
}
