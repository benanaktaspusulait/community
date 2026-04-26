import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TopBar } from '../components/ui/TopBar'
import { BottomNav } from '../components/ui/BottomNav'
import { Badge } from '../components/ui/Badge'
import { Card } from '../components/ui/Card'
import { Plus, MessageCircle, Users, ChevronRight, MoreVertical, Shield, Flag, Eye } from 'lucide-react'

const members = [
  { id: '1', name: 'Ali Y.', role: 'Admin', avatar: 'A', posts: 24 },
  { id: '2', name: 'Ayşe K.', role: 'Moderator', avatar: 'A', posts: 18 },
  { id: '3', name: 'Mehmet D.', role: 'Member', avatar: 'M', posts: 7 },
  { id: '4', name: 'Sara L.', role: 'Member', avatar: 'S', posts: 12 },
  { id: '5', name: 'Fatma K.', role: 'Member', avatar: 'F', posts: 3 },
]

const threads = [
  { id: '1', type: 'help' as const, title: 'Looking for a room in MK centre', replies: 5, time: '20m ago', status: 'open' },
  { id: '2', type: 'solved' as const, title: 'Best letting agents in Milton Keynes?', replies: 12, time: '2h ago', status: 'solved' },
  { id: '3', type: 'resource' as const, title: 'Renting checklist — what to check before signing', replies: 0, time: '1d ago', status: 'pinned' },
  { id: '4', type: 'help' as const, title: 'Anyone know a good plumber near Bletchley?', replies: 3, time: '3h ago', status: 'open' },
  { id: '5', type: 'open' as const, title: 'Room available in Wolverton — £550/month', replies: 7, time: '5h ago', status: 'open' },
]

const roleColors: Record<string, string> = {
  Admin: 'text-[#4f6ef7] bg-[#e0eaff]',
  Moderator: 'text-purple-600 bg-purple-100',
  Member: 'text-gray-500 bg-gray-100',
}

export function TopicGroup() {
  const navigate = useNavigate()
  const [tab, setTab] = useState<'threads' | 'members'>('threads')
  const [memberMenu, setMemberMenu] = useState<string | null>(null)
  // In a real app this would come from auth context
  const isAdmin = true

  return (
    <div className="flex flex-col h-full bg-[#f8f9fb]">
      {/* header */}
      <div className="bg-white border-b border-[#e4e7ec]">
        <TopBar title="Housing" back />
        <div className="px-4 pb-3 flex items-center justify-between">
          <div className="flex items-center gap-3 text-xs text-gray-400">
            <span className="flex items-center gap-1"><Users size={12} /> 248 members</span>
            <span className="flex items-center gap-1"><MessageCircle size={12} /> 34 threads</span>
          </div>
          <button className="text-xs text-[#4f6ef7] font-semibold border border-[#4f6ef7] rounded-full px-3 py-1">
            Rules
          </button>
        </div>

        <div className="flex gap-1 px-4 pb-3 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setTab('threads')}
            className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors ${tab === 'threads' ? 'bg-[#4f6ef7] text-white border-[#4f6ef7]' : 'bg-white text-gray-600 border-[#e4e7ec]'}`}
          >Threads</button>
          {['Open', 'Solved', 'Resources'].map(t => (
            <button key={t} className="shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold border bg-white text-gray-600 border-[#e4e7ec]">{t}</button>
          ))}
          <button
            onClick={() => setTab('members')}
            className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors ${tab === 'members' ? 'bg-[#4f6ef7] text-white border-[#4f6ef7]' : 'bg-white text-gray-600 border-[#e4e7ec]'}`}
          >Members</button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pb-20 px-4 pt-3 flex flex-col gap-3">

        {/* threads tab */}
        {tab === 'threads' && threads.map(t => (
          <Card key={t.id} onClick={() => navigate('/thread')} className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              {t.status === 'pinned' && (
                <span className="text-[10px] font-semibold text-[#4f6ef7] bg-[#e0eaff] px-2 py-0.5 rounded-full">📌 Pinned</span>
              )}
              <Badge variant={t.type} />
            </div>
            <p className="text-sm font-semibold text-gray-900 leading-snug">{t.title}</p>
            <div className="flex items-center justify-between text-xs text-gray-400">
              <span className="flex items-center gap-1"><MessageCircle size={11} /> {t.replies} replies</span>
              <span>{t.time}</span>
            </div>
          </Card>
        ))}

        {/* members tab */}
        {tab === 'members' && (
          <>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">248 members</p>
            {members.map(m => (
              <div key={m.id} className="relative">
                <div className="flex items-center gap-3 bg-white rounded-xl border border-[#e4e7ec] px-4 py-3">
                  {/* avatar — taps to profile */}
                  <button onClick={() => navigate('/member')} className="shrink-0">
                    <div className="w-9 h-9 rounded-full bg-[#e0eaff] flex items-center justify-center text-sm font-bold text-[#4f6ef7]">
                      {m.avatar}
                    </div>
                  </button>

                  {/* name + role — taps to profile */}
                  <button className="flex-1 text-left" onClick={() => navigate('/member')}>
                    <p className="text-sm font-semibold text-gray-900">{m.name}</p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${roleColors[m.role]}`}>
                        {m.role}
                      </span>
                      <span className="text-[10px] text-gray-400">{m.posts} posts</span>
                    </div>
                  </button>

                  {/* 3-dot — only for admin, only for non-admin members */}
                  {isAdmin && m.role !== 'Admin' && (
                    <button
                      onClick={() => setMemberMenu(memberMenu === m.id ? null : m.id)}
                      className="text-gray-400 hover:text-gray-600 p-1"
                    >
                      <MoreVertical size={16} />
                    </button>
                  )}

                  {/* if not admin, just chevron */}
                  {!isAdmin && <ChevronRight size={14} className="text-gray-300" />}
                </div>

                {/* admin action dropdown */}
                {isAdmin && memberMenu === m.id && (
                  <div className="absolute right-4 top-14 z-50 bg-white rounded-2xl border border-[#e4e7ec] shadow-xl overflow-hidden w-52">
                    <button
                      onClick={() => { navigate('/member'); setMemberMenu(null) }}
                      className="w-full flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      <Eye size={14} className="text-gray-400" /> View profile
                    </button>
                    <button
                      onClick={() => { navigate('/admin/moderation'); setMemberMenu(null) }}
                      className="w-full flex items-center gap-3 px-4 py-3 text-sm text-orange-600 hover:bg-orange-50 border-t border-[#e4e7ec]"
                    >
                      <Shield size={14} /> Warn / viewer mode
                    </button>
                    <button
                      onClick={() => { navigate('/admin/moderation'); setMemberMenu(null) }}
                      className="w-full flex items-center gap-3 px-4 py-3 text-sm text-red-500 hover:bg-red-50 border-t border-[#e4e7ec]"
                    >
                      <Flag size={14} /> Remove from group
                    </button>
                  </div>
                )}
              </div>
            ))}
          </>
        )}
      </div>

      <button
        onClick={() => navigate('/create')}
        className="absolute bottom-[82px] right-5 z-30 flex h-14 w-14 items-center justify-center rounded-[22px] bg-ink text-white shadow-[0_18px_38px_rgba(23,33,31,0.28)] transition-transform active:scale-95"
      >
        <Plus size={24} />
      </button>

      <BottomNav />
    </div>
  )
}
