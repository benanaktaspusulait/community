import { useNavigate } from 'react-router-dom'

const screens = [
  { path: '/', label: '🔐 Auth Landing' },
  { path: '/join', label: '📝 Join' },
  { path: '/verify', label: '🔢 Verify Code' },
  { path: '/onboarding', label: '🎯 Onboarding Interests' },
  { path: '/feed', label: '🏠 Home Feed' },
  { path: '/search', label: '🔍 Search' },
  { path: '/create', label: '✏️ Create Help Request' },
  { path: '/thread', label: '💬 Thread Detail' },
  { path: '/library', label: '📚 Library' },
  { path: '/resource', label: '📄 Resource Detail' },
  { path: '/special-day', label: '🎉 Special Day Group' },
  { path: '/admin', label: '🛡️ Admin Moderation' },
  { path: '/profile', label: '👤 Profile' },
]

export function ScreenIndex() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-[#f8f9fb] px-4 py-8">
      <div className="max-w-sm mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">Design Prototype</h1>
        <p className="text-sm text-gray-400 mb-6">Phase 1 — all screens</p>
        <div className="flex flex-col gap-2">
          {screens.map(s => (
            <button
              key={s.path}
              onClick={() => navigate(s.path)}
              className="flex items-center gap-3 bg-white rounded-xl border border-[#e4e7ec] px-4 py-3 text-sm font-medium text-gray-800 hover:border-[#4f6ef7] hover:text-[#4f6ef7] transition-colors text-left"
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
