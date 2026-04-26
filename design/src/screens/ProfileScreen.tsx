import { useNavigate } from 'react-router-dom'
import { TopBar } from '../components/ui/TopBar'
import { BottomNav } from '../components/ui/BottomNav'
import { Card } from '../components/ui/Card'
import { ChevronRight, MapPin, Bell, Eye, Trash2, Shield } from 'lucide-react'

const settings = [
  { icon: MapPin, label: 'Location', value: 'Milton Keynes', to: '/profile' },
  { icon: Bell, label: 'Notifications', value: 'Topics only', to: '/profile' },
  { icon: Eye, label: 'Ad preferences', value: 'Ads off', to: '/profile' },
  { icon: Shield, label: 'Admin panel', value: '', to: '/admin' },
]

export function ProfileScreen() {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col h-full bg-[#f8f9fb]">
      <TopBar title="Profile" />
      <div className="flex-1 overflow-y-auto pb-20 px-4 pt-4 flex flex-col gap-4">

        {/* avatar */}
        <Card className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-[#e0eaff] flex items-center justify-center text-2xl font-bold text-[#4f6ef7]">
            A
          </div>
          <div>
            <p className="font-bold text-gray-900">Ali Yılmaz</p>
            <p className="text-xs text-gray-400">Member since Jan 2025 • Milton Keynes</p>
          </div>
        </Card>

        {/* stats */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: 'Posts', value: '12' },
            { label: 'Replies', value: '34' },
            { label: 'Saved', value: '8' },
          ].map(s => (
            <Card key={s.label} className="flex flex-col items-center py-3 gap-1">
              <span className="text-xl font-bold text-[#4f6ef7]">{s.value}</span>
              <span className="text-xs text-gray-400">{s.label}</span>
            </Card>
          ))}
        </div>

        {/* settings */}
        <div className="flex flex-col gap-1">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Settings</p>
          {settings.map(({ icon: Icon, label, value, to }) => (
            <button
              key={label}
              onClick={() => navigate(to)}
              className="flex items-center gap-3 bg-white rounded-xl border border-[#e4e7ec] px-4 py-3"
            >
              <Icon size={16} className="text-gray-400" />
              <span className="flex-1 text-sm font-medium text-gray-800 text-left">{label}</span>
              {value && <span className="text-xs text-gray-400">{value}</span>}
              <ChevronRight size={14} className="text-gray-300" />
            </button>
          ))}
        </div>

        {/* danger zone */}
        <button className="flex items-center gap-2 text-sm text-red-500 px-1 mt-2">
          <Trash2 size={14} /> Delete account
        </button>
      </div>
      <BottomNav />
    </div>
  )
}
