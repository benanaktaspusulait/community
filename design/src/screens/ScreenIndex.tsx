import { useNavigate } from 'react-router-dom'
import { ArrowRight, Layers3, Smartphone } from 'lucide-react'

const sections = [
  {
    title: '🔐 Auth & Onboarding',
    screens: [
      { path: '/splash', label: 'Splash Screen' },
      { path: '/', label: 'Auth Landing' },
      { path: '/join', label: 'Join' },
      { path: '/verify', label: 'Verify Code' },
      { path: '/onboarding/location', label: 'Onboarding — Location setup' },
      { path: '/location/map', label: 'Map Location Picker' },
      { path: '/onboarding', label: 'Onboarding — Interests' },
    ],
  },
  {
    title: '🏠 Main',
    screens: [
      { path: '/feed', label: 'Home Feed' },
      { path: '/notifications', label: 'Notifications' },
      { path: '/notifications/push-demo', label: 'Push Notification Preview' },
      { path: '/community', label: 'Community Home' },
      { path: '/group', label: 'Topic Group (thread list)' },
      { path: '/invite', label: 'Invite People' },
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
      { path: '/admin/invites', label: 'Invite Links & User Invites' },
      { path: '/admin/reports', label: 'Reports Queue (şikayetleri görme)' },
      { path: '/admin/approvals', label: 'Approval Queue' },
      { path: '/admin/moderation', label: 'Member Moderation (warn / viewer / remove)' },
    ],
  },
]

export function ScreenIndex() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen px-5 py-8">
      <div className="mx-auto flex max-w-5xl flex-col gap-8">
        <div className="soft-panel overflow-hidden rounded-[32px]">
          <div className="brand-gradient grid gap-6 p-7 text-white md:grid-cols-[1.15fr_0.85fr] md:p-9">
            <div>
              <p className="mb-3 w-fit rounded-full bg-white/16 px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.18em] text-white/78">
                Phase 1 high fidelity
              </p>
              <h1 className="max-w-2xl text-4xl font-black leading-[0.95] tracking-[-0.06em] md:text-5xl">
                Community app design prototype
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-6 text-white/74">
                Browse the mobile screens that turn scattered WhatsApp, Facebook, and Telegram groups into structured community memory.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 self-end">
              <div className="rounded-[24px] bg-white/14 p-4 backdrop-blur">
                <Smartphone size={20} className="text-white/75" />
                <p className="mt-4 text-2xl font-black tracking-[-0.05em]">30+</p>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/58">Screens</p>
              </div>
              <div className="rounded-[24px] bg-white/14 p-4 backdrop-blur">
                <Layers3 size={20} className="text-white/75" />
                <p className="mt-4 text-2xl font-black tracking-[-0.05em]">7</p>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/58">Journeys</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {sections.map(section => (
            <div key={section.title} className="soft-panel rounded-[28px] p-4">
              <p className="mb-3 text-xs font-black uppercase tracking-[0.16em] text-muted/70">{section.title}</p>
              <div className="flex flex-col gap-2">
              {section.screens.map(s => (
                <button
                  key={s.path}
                  onClick={() => navigate(s.path)}
                    className="group flex items-center justify-between rounded-2xl border border-border bg-white/68 px-4 py-3 text-left text-sm font-bold text-ink transition-all hover:-translate-y-0.5 hover:border-brand-500 hover:bg-white"
                >
                    <span>{s.label}</span>
                    <span className="flex items-center gap-2 text-xs font-mono text-muted/55 group-hover:text-brand-700">
                      {s.path}
                      <ArrowRight size={13} />
                    </span>
                </button>
              ))}
            </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
