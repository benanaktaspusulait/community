import { useNavigate } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { BookOpen, Search, ShieldCheck, Users } from 'lucide-react'

const valueProps = [
  { icon: Search, title: 'Past answers stay findable', text: 'No more lost links inside noisy group chats.' },
  { icon: BookOpen, title: 'Golden knowledge library', text: 'Admins can curate the answers people ask for again and again.' },
  { icon: ShieldCheck, title: 'Scoped moderation', text: 'Group-level rules, reports, viewer mode, and removals.' },
]

export function AuthLanding() {
  const navigate = useNavigate()
  return (
    <div className="relative flex h-full flex-col overflow-hidden bg-[#fffaf2]">
      <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-brand-100/70 blur-3xl" />
      <div className="absolute -bottom-16 -left-16 h-52 w-52 rounded-full bg-orange-100/80 blur-3xl" />

      <div className="relative flex flex-1 flex-col justify-between px-6 pb-7 pt-8">
        <div className="appear-up flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink text-white shadow-[0_16px_34px_rgba(23,33,31,0.22)]">
              <Users size={24} />
            </div>
            <span className="rounded-full bg-white/80 px-3 py-1 text-[11px] font-extrabold text-brand-700 ring-1 ring-brand-100">
              Phase 1 prototype
            </span>
          </div>

          <div>
            <p className="mb-3 w-fit rounded-full bg-brand-50 px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.16em] text-brand-700">
              Community memory
            </p>
            <h1 className="text-balance text-[34px] font-black leading-[0.94] tracking-[-0.06em] text-ink">
              Replace noisy groups with searchable local knowledge.
            </h1>
            <p className="mt-4 text-sm leading-6 text-muted">
              A structured home for topic groups, help requests, trusted resources, special days, ads, and moderation.
            </p>
          </div>
        </div>

        <div className="appear-up flex flex-col gap-3" style={{ animationDelay: '120ms' }}>
          {valueProps.map(({ icon: Icon, title, text }) => (
            <div key={title} className="soft-panel flex items-start gap-3 rounded-[22px] p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                <Icon size={19} />
              </div>
              <div>
                <p className="text-sm font-extrabold tracking-[-0.02em] text-ink">{title}</p>
                <p className="mt-0.5 text-xs leading-5 text-muted">{text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="appear-up flex flex-col gap-3" style={{ animationDelay: '220ms' }}>
          <Button className="w-full py-3.5 text-base" onClick={() => navigate('/join')}>
            Join community
          </Button>
          <Button variant="secondary" className="w-full py-3.5 text-base" onClick={() => navigate('/preview')}>
            Preview product
          </Button>
          <button
            onClick={() => navigate('/join/pending')}
            className="text-center text-xs font-extrabold text-brand-700"
          >
            View public community preview
          </button>
          <p className="text-center text-[11px] leading-4 text-muted/70">
            Designed for communities moving from WhatsApp, Facebook, and Telegram groups.
          </p>
        </div>
      </div>
    </div>
  )
}
