import { useNavigate } from 'react-router-dom'
import { TopBar } from '../components/ui/TopBar'
import { Card } from '../components/ui/Card'
import { ClipboardList, Flag, Users, BookOpen, ChevronRight, AlertTriangle } from 'lucide-react'

const queues = [
  { icon: Users, label: 'Join requests', count: 7, urgent: false, to: '/admin/approvals' },
  { icon: Flag, label: 'Reports queue', count: 3, urgent: true, to: '/admin/reports' },
  { icon: ClipboardList, label: 'Approval queue', count: 5, urgent: false, to: '/admin/approvals' },
  { icon: BookOpen, label: 'Library manager', count: 2, urgent: false, to: '/admin/approvals' },
]

const tools = [
  { label: 'Invite links & user invites', to: '/admin/invites' },
  { label: 'Community structure', to: '/community' },
  { label: 'Role management', to: '/group' },
  { label: 'Audit log', to: '/admin/reports' },
]

export function AdminHome() {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col h-full bg-[#f8f9fb]">
      <TopBar title="Admin panel" back />

      <div className="flex-1 overflow-y-auto px-4 pt-4 pb-8 flex flex-col gap-4">

        {/* alert */}
        <div className="bg-red-50 border border-red-200 rounded-2xl px-4 py-3 flex items-center gap-3">
          <AlertTriangle size={16} className="text-red-500 shrink-0" />
          <p className="text-sm text-red-700 font-medium">3 high-risk reports need attention</p>
        </div>

        {/* queues */}
        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Queues</p>
          <div className="flex flex-col gap-2">
            {queues.map(({ icon: Icon, label, count, urgent, to }) => (
              <button
                key={label}
                onClick={() => navigate(to)}
                className="flex items-center gap-3 bg-white rounded-xl border border-[#e4e7ec] px-4 py-3"
              >
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${urgent ? 'bg-red-50' : 'bg-[#f0f4ff]'}`}>
                  <Icon size={16} className={urgent ? 'text-red-500' : 'text-[#4f6ef7]'} />
                </div>
                <span className="flex-1 text-sm font-medium text-gray-800 text-left">{label}</span>
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${urgent ? 'bg-red-100 text-red-600' : 'bg-[#e0eaff] text-[#4f6ef7]'}`}>
                  {count}
                </span>
                <ChevronRight size={14} className="text-gray-300" />
              </button>
            ))}
          </div>
        </div>

        {/* quick stats */}
        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Community health</p>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: 'Members', value: '1,240' },
              { label: 'Threads this week', value: '38' },
              { label: 'Solved threads', value: '24' },
              { label: 'Active groups', value: '6' },
            ].map(s => (
              <Card key={s.label} className="flex flex-col gap-1 py-3">
                <span className="text-xl font-bold text-[#4f6ef7]">{s.value}</span>
                <span className="text-xs text-gray-400">{s.label}</span>
              </Card>
            ))}
          </div>
        </div>

        {/* tools */}
        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Tools</p>
          {tools.map(t => (
            <button
              key={t.label}
              onClick={() => navigate(t.to)}
              className="w-full flex items-center justify-between bg-white rounded-xl border border-[#e4e7ec] px-4 py-3 mb-2 text-sm font-medium text-gray-800"
            >
              {t.label}
              <ChevronRight size={14} className="text-gray-300" />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
