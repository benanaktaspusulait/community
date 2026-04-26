import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TopBar } from '../components/ui/TopBar'
import { BottomNav } from '../components/ui/BottomNav'
import { Card } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { ChevronRight, MapPin, Bell, Eye, Shield, Bookmark, MessageCircle, LogOut } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const myPosts = [
  { id: '1', type: 'help' as const, title: 'Looking for a room in MK centre', replies: 5, time: '2d ago' },
  { id: '2', type: 'solved' as const, title: 'How to register with a GP in MK?', replies: 8, time: '1w ago' },
  { id: '3', type: 'help' as const, title: 'Anyone recommend a good accountant?', replies: 3, time: '2w ago' },
]

const myGroups = [
  { name: 'Housing', emoji: '🏠' },
  { name: 'Legal', emoji: '⚖️' },
  { name: 'Health', emoji: '🏥' },
]

const settingsItems = [
  { icon: MapPin, label: 'Location', value: 'Milton Keynes', to: '/location/map' },
  { icon: Bell, label: 'Notifications', value: 'Topics only', to: '/settings' },
  { icon: Eye, label: 'Ad preferences', value: 'Ads off', to: '/settings' },
  { icon: Shield, label: 'Admin panel', value: '', to: '/admin' },
]

type Tab = 'posts' | 'saved' | 'groups'

export function ProfileScreen() {
  const navigate = useNavigate()
  const [tab, setTab] = useState<Tab>('posts')

  return (
    <div className="flex flex-col h-full bg-[#f8f9fb]">
      <TopBar title="Profile" />
      <div className="flex-1 overflow-y-auto pb-20">

        {/* header card */}
        <div className="bg-white px-4 pt-4 pb-0 border-b border-[#e4e7ec]">
          <div className="flex items-start gap-4 pb-4">
            <div className="w-16 h-16 rounded-2xl bg-[#e0eaff] flex items-center justify-center text-2xl font-bold text-[#4f6ef7] shrink-0">
              A
            </div>
            <div className="flex-1">
              <p className="font-bold text-gray-900 text-base">Ali Yılmaz</p>
              <p className="text-xs text-gray-400 mt-0.5">Member since Jan 2025</p>
              <button
                onClick={() => navigate('/location/map')}
                className="flex items-center gap-1 mt-1 text-xs text-gray-500 hover:text-[#4f6ef7]"
              >
                <MapPin size={11} /> Milton Keynes
              </button>
            </div>
            <button
              onClick={() => navigate('/settings')}
              className="text-xs text-[#4f6ef7] font-semibold border border-[#4f6ef7] rounded-full px-3 py-1"
            >
              Edit
            </button>
          </div>

          {/* stats — tıklanabilir, ilgili tab'a gider */}
          <div className="flex border-t border-[#e4e7ec]">
            {([
              { label: 'Posts', value: '12', tab: 'posts' as Tab },
              { label: 'Replies', value: '34', tab: 'posts' as Tab },
              { label: 'Saved', value: '8', tab: 'saved' as Tab },
            ]).map((s, i) => (
              <button
                key={s.label}
                onClick={() => setTab(s.tab)}
                className={`flex-1 py-3 flex flex-col items-center gap-0.5 transition-colors ${i < 2 ? 'border-r border-[#e4e7ec]' : ''} ${tab === s.tab ? 'bg-[#f0f4ff]' : 'hover:bg-gray-50'}`}
              >
                <span className="text-base font-bold text-[#4f6ef7]">{s.value}</span>
                <span className="text-[10px] text-gray-400">{s.label}</span>
              </button>
            ))}
          </div>

          {/* tabs */}
          <div className="flex gap-1 pt-2 pb-0">
            {([
              { key: 'posts', label: 'My posts', icon: MessageCircle },
              { key: 'saved', label: 'Saved', icon: Bookmark },
              { key: 'groups', label: 'Groups', icon: Shield },
            ] as { key: Tab; label: string; icon: LucideIcon }[]).map(t => (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={`flex-1 flex items-center justify-center gap-1 py-2.5 text-xs font-semibold border-b-2 transition-colors ${
                  tab === t.key
                    ? 'border-[#4f6ef7] text-[#4f6ef7]'
                    : 'border-transparent text-gray-400'
                }`}
              >
                <t.icon size={13} /> {t.label}
              </button>
            ))}
          </div>
        </div>

        <div className="px-4 pt-4 flex flex-col gap-3">
          {/* posts tab */}
          {tab === 'posts' && myPosts.map(p => (
            <Card key={p.id} onClick={() => navigate('/thread')} className="flex flex-col gap-2">
              <Badge variant={p.type} />
              <p className="text-sm font-semibold text-gray-900">{p.title}</p>
              <div className="flex items-center justify-between text-xs text-gray-400">
                <span className="flex items-center gap-1"><MessageCircle size={11} /> {p.replies} replies</span>
                <span>{p.time}</span>
              </div>
            </Card>
          ))}

          {/* saved tab */}
          {tab === 'saved' && (
            <>
              {[
                { title: 'Renting checklist (UK)', type: 'resource' as const, meta: 'Housing • Saved 3d ago' },
                { title: 'Driver licence change steps', type: 'solved' as const, meta: 'Legal • Saved 1w ago' },
              ].map(s => (
                <Card key={s.title} onClick={() => navigate('/resource')} className="flex flex-col gap-2">
                  <Badge variant={s.type} />
                  <p className="text-sm font-semibold text-gray-900">{s.title}</p>
                  <p className="text-xs text-gray-400">{s.meta}</p>
                </Card>
              ))}
            </>
          )}

          {/* groups tab */}
          {tab === 'groups' && (
            <>
              {myGroups.map(g => (
                <button
                  key={g.name}
                  onClick={() => navigate('/group')}
                  className="flex items-center gap-3 bg-white rounded-xl border border-[#e4e7ec] px-4 py-3"
                >
                  <span className="text-xl">{g.emoji}</span>
                  <span className="flex-1 text-sm font-medium text-gray-800 text-left">{g.name}</span>
                  <ChevronRight size={14} className="text-gray-300" />
                </button>
              ))}
            </>
          )}

          {/* settings section */}
          <div className="mt-2">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Settings</p>
            {settingsItems.map(({ icon: Icon, label, value, to }) => (
              <button
                key={label}
                onClick={() => navigate(to)}
                className="w-full flex items-center gap-3 bg-white rounded-xl border border-[#e4e7ec] px-4 py-3 mb-2"
              >
                <Icon size={16} className="text-gray-400" />
                <span className="flex-1 text-sm font-medium text-gray-800 text-left">{label}</span>
                {value && <span className="text-xs text-gray-400">{value}</span>}
                <ChevronRight size={14} className="text-gray-300" />
              </button>
            ))}
            <button
              onClick={() => navigate('/auth')}
              className="w-full flex items-center gap-3 bg-white rounded-xl border border-[#e4e7ec] px-4 py-3 mb-2 text-gray-600"
            >
              <LogOut size={16} className="text-gray-400" />
              <span className="flex-1 text-sm font-medium text-left">Log out</span>
            </button>
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  )
}
