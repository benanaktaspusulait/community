import { useState } from 'react'
import { Bell, CheckCircle2, MessageCircle, ShieldAlert, Sparkles } from 'lucide-react'
import clsx from 'clsx'
import { TopBar } from '../components/ui/TopBar'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'

const examples = [
  {
    id: 'reply',
    title: 'New useful reply',
    body: 'Sara replied to your room request in Housing.',
    icon: MessageCircle,
  },
  {
    id: 'special',
    title: 'Special day group is live',
    body: 'Ramazan Bayrami group is open for invited members.',
    icon: Sparkles,
  },
  {
    id: 'moderation',
    title: 'Viewer mode notice',
    body: 'You can read Housing, but posting is paused for 3 days.',
    icon: ShieldAlert,
  },
]

export function PushNotificationDemo() {
  const [active, setActive] = useState(examples[0].id)
  const selected = examples.find(item => item.id === active) ?? examples[0]
  const Icon = selected.icon

  return (
    <div className="flex h-full flex-col bg-[#f8f1e7]">
      <TopBar title="Push preview" back />

      <div className="flex flex-1 flex-col gap-5 px-4 py-5">
        <div className="brand-gradient rounded-[28px] p-5 text-white">
          <Bell size={24} className="text-white/78" />
          <h1 className="mt-4 text-2xl font-black leading-[0.95] tracking-[-0.05em]">
            Notifications must feel useful, not noisy.
          </h1>
          <p className="mt-3 text-xs leading-5 text-white/72">
            The app should notify for replies, approvals, special day invitations, and moderation decisions only when the user opted in.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {examples.map(item => (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={clsx(
                'rounded-2xl border px-2 py-3 text-xs font-extrabold transition-all',
                active === item.id
                  ? 'border-brand-500 bg-brand-50 text-brand-700'
                  : 'border-border bg-white/70 text-muted'
              )}
            >
              {item.title.split(' ')[0]}
            </button>
          ))}
        </div>

        <Card className="mx-auto mt-2 w-full max-w-[320px] rounded-[28px] p-0">
          <div className="rounded-[28px] bg-[#171f1d] p-4 text-white shadow-[0_24px_54px_rgba(23,33,31,0.26)]">
            <div className="mb-3 flex items-center gap-2 text-[11px] font-bold text-white/58">
              <span>now</span>
              <span>Community</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/12">
                <Icon size={20} />
              </div>
              <div>
                <p className="text-sm font-black tracking-[-0.02em]">{selected.title}</p>
                <p className="mt-1 text-xs leading-5 text-white/66">{selected.body}</p>
              </div>
            </div>
          </div>
        </Card>

        <div className="mt-auto rounded-[24px] bg-white/72 p-4 ring-1 ring-border">
          <div className="flex items-center gap-2 text-sm font-black text-ink">
            <CheckCircle2 size={17} className="text-brand-700" />
            User control rule
          </div>
          <p className="mt-2 text-xs leading-5 text-muted">
            Every notification category must map to Settings, so users can keep only the alerts that help them move away from noisy group chats.
          </p>
        </div>

        <Button className="w-full py-3">Save notification preferences</Button>
      </div>
    </div>
  )
}
