import { useNavigate } from 'react-router-dom'

const sections = [
  {
    title: '🔐 Auth & Onboarding',
    screens: [
      { path: '/', label: 'Auth Landing' },
      { path: '/join', label: 'Join' },
      { path: '/verify', label: 'Verify Code' },
      { path: '/onboarding/location', label: 'Onboarding — Location setup' },
      { path: '/onboarding', label: 'Onboarding — Interests' },
    ],
  },
  {
    title: '🏠 Main',
    screens: [
      { path: '/feed', label: 'Home Feed' },
      { path: '/notifications', label: 'Notifications' },
      { path: '/community', label: 'Community Home' },
      { path: '/group', label: 'Topic Group (thread list)' },
      { path: '/group/create', label: 'Create Group (admin)' },
      { path: '/group/suggest', label: 'Suggest Group (member)' },
      { path: '/thread', label: 'Thread Detail (replies + library save)' },
      { path: '/special-day', label: 'Special Day Group' },
    ],
  },
  {
    title: '🔍 Search & Create',
    screens: [
      { path: '/search', label: 'Search' },
      { path: '/create', label: 'Create (help request / question)' },
      { path: '/listing/create', label: 'Create Listing (for sale / rent / work / service)' },
      { path: '/report', label: 'Report Content' },
      { path: '/report?target=user', label: 'Report Member' },
    ],
  },
  {
    title: '📚 Library',
    screens: [
      { path: '/library', label: 'Library Home' },
      { path: '/resource', label: 'Resource Detail' },
    ],
  },
  {
    title: '📢 Ads',
    screens: [
      { path: '/ad/create', label: 'Create Ad' },
    ],
  },
  {
    title: '👤 Profile & Settings',
    screens: [
      { path: '/profile', label: 'My Profile (posts, saved, groups)' },
      { path: '/member', label: 'Member Profile (report, block)' },
      { path: '/settings', label: 'Settings (ads, location, notifications)' },
    ],
  },
  {
    title: '🛡️ Admin',
    screens: [
      { path: '/admin', label: 'Admin Home' },
      { path: '/admin/reports', label: 'Reports Queue (şikayetleri görme)' },
      { path: '/admin/approvals', label: 'Approval Queue' },
      { path: '/admin/moderation', label: 'Member Moderation (warn / viewer / remove)' },
    ],
  },
]

export function ScreenIndex() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-[#f8f9fb] px-4 py-8">
      <div className="max-w-sm mx-auto flex flex-col gap-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Design Prototype</h1>
          <p className="text-sm text-gray-400">Phase 1 — all screens. Click any to preview in phone shell.</p>
        </div>

        {sections.map(section => (
          <div key={section.title}>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">{section.title}</p>
            <div className="flex flex-col gap-1.5">
              {section.screens.map(s => (
                <button
                  key={s.path}
                  onClick={() => navigate(s.path)}
                  className="flex items-center justify-between bg-white rounded-xl border border-[#e4e7ec] px-4 py-3 text-sm font-medium text-gray-800 hover:border-[#4f6ef7] hover:text-[#4f6ef7] transition-colors text-left"
                >
                  {s.label}
                  <span className="text-xs text-gray-300 font-mono">{s.path}</span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
