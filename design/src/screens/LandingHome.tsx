import { useNavigate } from 'react-router-dom'
import {
  ArrowRight,
  BookOpen,
  Calendar,
  CheckCircle2,
  HandHeart,
  MapPin,
  Menu,
  Moon,
  Search,
  ShieldCheck,
  Sparkles,
  Sun,
  Users,
} from 'lucide-react'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { useTheme } from '../contexts/useTheme'

const features = [
  { 
    title: 'Verified local groups',
    description: 'Join trusted spaces for neighbours, parents, students, and makers.',
    icon: ShieldCheck,
  },
  { 
    title: 'Useful community memory',
    description: 'Turn repeated questions, links, and recommendations into a shared library.',
    icon: BookOpen,
  },
  { 
    title: 'Help that moves quickly',
    description: 'Ask for advice, offer items, organise meetups, and keep people in the loop.',
    icon: HandHeart,
  },
]

const communities = [
  { name: 'Lakeside Parents', members: '1.2k', category: 'Family', accent: 'bg-brand-600' },
  { name: 'Neighbourhood Exchange', members: '856', category: 'Marketplace', accent: 'bg-accent' },
  { name: 'Milton Keynes Makers', members: '2.4k', category: 'Skills', accent: 'bg-warning' },
]

export function LandingHome() {
  const navigate = useNavigate()
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="flex h-full flex-col bg-[#fffdf8] text-ink dark:bg-[#111614] dark:text-white">
      <nav className="flex items-center justify-between border-b border-border/70 bg-card/90 px-5 py-4 backdrop-blur-xl dark:border-white/10 dark:bg-[#151c19]/92">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-[14px] bg-brand-600 text-white shadow-[0_10px_24px_rgba(13,111,99,0.2)]">
            <Users size={18} />
          </div>
          <span className="text-lg font-black tracking-tight">CommunityHub</span>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-[14px] text-muted transition-colors hover:bg-black/5 dark:text-white/64 dark:hover:bg-white/10"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <button 
            className="flex h-9 w-9 items-center justify-center rounded-[14px] text-muted transition-colors hover:bg-black/5 dark:text-white/64 dark:hover:bg-white/10"
            aria-label="Menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </nav>

      <div className="flex-1 overflow-y-auto">
        <section className="relative overflow-hidden bg-[#fffdf8] px-5 pb-7 pt-8 dark:bg-[#111614]">
          <div className="absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_24%_18%,rgba(22,138,122,0.2),transparent_42%),radial-gradient(circle_at_84%_0%,rgba(216,122,56,0.16),transparent_34%)] dark:bg-[radial-gradient(circle_at_24%_18%,rgba(22,138,122,0.18),transparent_40%),radial-gradient(circle_at_84%_0%,rgba(216,122,56,0.1),transparent_34%),linear-gradient(180deg,#151c19_0%,#111614_78%)]" />
          <div className="relative">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-3 py-1.5 text-brand-700 dark:border-white/10 dark:bg-white/8 dark:text-brand-100">
              <Sparkles size={13} />
              <span className="text-xs font-extrabold uppercase tracking-[0.12em]">Trusted local network</span>
            </div>

            <h1 className="mb-4 text-[34px] font-black leading-[1.02] tracking-tight text-[#17211f]">
              Build a community people can actually rely on
            </h1>

            <p className="mb-6 text-[15px] leading-6 text-muted dark:text-white/66">
              Bring invites, discussions, local knowledge, and community care into one calmer place.
            </p>

            <div className="grid grid-cols-3 overflow-hidden rounded-[20px] border border-border bg-card/88 shadow-[0_18px_42px_rgba(43,35,25,0.08)] backdrop-blur dark:border-white/10 dark:bg-white/8">
              {[
                ['38', 'screens'],
                ['7', 'journeys'],
                ['24h', 'review'],
              ].map(([value, label]) => (
                <div key={label} className="border-r border-border/70 px-3 py-3 last:border-r-0 dark:border-white/10">
                  <p className="text-lg font-black tracking-tight">{value}</p>
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.13em] text-muted dark:text-white/48">{label}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-3">
              <Button
                className="flex w-full items-center justify-center gap-2 py-3.5 text-base"
                onClick={() => navigate('/join')}
              >
                Explore Communities
                <ArrowRight size={17} />
              </Button>
              <Button
                variant="secondary"
                className="flex w-full items-center justify-center gap-2 py-3.5 text-base"
                onClick={() => navigate('/search')}
              >
                <Search size={17} />
                Browse Topics
              </Button>
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-[#f6f1e8] px-5 py-7 dark:border-white/10 dark:bg-[#0d1210]">
          <h2 className="mb-5 text-xs font-black uppercase tracking-[0.16em] text-muted dark:text-white/48">
            Core experience
          </h2>
          <div className="grid gap-3">
            {features.map((feature) => (
              <Card 
                key={feature.title}
                className="flex items-start gap-4 rounded-[20px] bg-card p-4 shadow-sm dark:border-white/10 dark:bg-white/8"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[16px] bg-brand-50 text-brand-700 dark:bg-brand-500/16 dark:text-brand-100">
                  <feature.icon size={20} />
                </div>
                <div>
                  <h3 className="mb-1 text-[15px] font-black tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-5 text-muted dark:text-white/58">
                    {feature.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="px-5 py-7">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-xs font-black uppercase tracking-[0.16em] text-muted dark:text-white/48">
              Active now
            </h2>
            <button 
              onClick={() => navigate('/search')}
              className="flex items-center gap-1 text-sm font-extrabold text-brand-700 transition-colors hover:text-brand-600 dark:text-brand-100"
            >
              View all
              <ArrowRight size={14} />
            </button>
          </div>
          
          <div className="flex flex-col gap-3">
            {communities.map((community) => (
              <Card 
                key={community.name}
                onClick={() => navigate('/community')}
                className="overflow-hidden rounded-[20px] bg-card p-0 shadow-sm dark:border-white/10 dark:bg-white/8"
              >
                <div className="flex items-center gap-4 p-4">
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-[18px] ${community.accent} text-white`}>
                    <Users size={20} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="mb-1 flex items-center justify-between gap-3">
                      <h3 className="truncate text-[15px] font-black tracking-tight">
                        {community.name}
                      </h3>
                      <span className="rounded-full bg-surface px-2.5 py-1 text-xs font-extrabold text-ink dark:bg-white/10 dark:text-white">
                        {community.members}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-xs font-semibold text-muted dark:text-white/52">
                      <span className="flex items-center gap-1">
                        <MapPin size={12} />
                        Milton Keynes
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {community.category}
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="px-5 pb-8">
          <div className="rounded-[24px] bg-ink p-5 text-white shadow-[0_18px_44px_rgba(23,33,31,0.22)] dark:bg-white dark:text-ink">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-[16px] bg-white/12 dark:bg-ink/8">
              <CheckCircle2 size={21} />
            </div>
            <h2 className="mb-2 text-2xl font-black tracking-tight">
              Start with a trusted invite
            </h2>
            <p className="mb-5 text-sm leading-6 text-white/68 dark:text-ink/62">
              Keep growth intentional with approvals, group roles, and clearer community expectations.
            </p>
            <Button
              className="w-full bg-white py-3.5 text-base font-black text-ink hover:bg-brand-50 dark:bg-ink dark:text-white dark:hover:bg-brand-700"
              onClick={() => navigate('/invite/landing')}
            >
              Create Invite Link
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
