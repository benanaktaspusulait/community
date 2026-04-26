import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AlertTriangle, CheckCircle2, Clock, LockKeyhole, Users } from 'lucide-react'
import clsx from 'clsx'
import { Button } from '../components/ui/Button'
import { TopBar } from '../components/ui/TopBar'

type InviteState = 'valid' | 'private' | 'expired'

const states: { key: InviteState; label: string }[] = [
  { key: 'valid', label: 'Valid' },
  { key: 'private', label: 'Private' },
  { key: 'expired', label: 'Expired' },
]

export function InviteLanding() {
  const navigate = useNavigate()
  const [state, setState] = useState<InviteState>('valid')

  const content = {
    valid: {
      icon: CheckCircle2,
      title: 'You are invited to Housing group',
      body: 'This invite gives access only to the Housing group inside MK Community.',
      action: 'Accept invite',
      tone: 'brand',
    },
    private: {
      icon: LockKeyhole,
      title: 'Health group requires approval',
      body: 'You can request to join. Admins will review your request before access is granted.',
      action: 'Request to join',
      tone: 'brand',
    },
    expired: {
      icon: AlertTriangle,
      title: 'This invite has expired',
      body: 'Ask the group admin or the person who invited you to send a fresh scoped invite.',
      action: 'View public preview',
      tone: 'danger',
    },
  }[state]

  const Icon = content.icon

  return (
    <div className="flex h-full flex-col bg-[#fffaf2]">
      <TopBar title="Invite" back />

      <div className="flex flex-1 flex-col justify-between px-5 pb-7 pt-5">
        <div>
          <div className="mb-4 flex gap-2">
            {states.map(item => (
              <button
                key={item.key}
                onClick={() => setState(item.key)}
                className={clsx(
                  'rounded-full px-3 py-1.5 text-xs font-extrabold ring-1 transition-colors',
                  state === item.key
                    ? 'bg-ink text-white ring-ink'
                    : 'bg-white/70 text-muted ring-border'
                )}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="brand-gradient rounded-[30px] p-6 text-white">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/16">
              <Icon size={27} />
            </div>
            <h1 className="mt-5 text-3xl font-black leading-[0.92] tracking-[-0.06em]">{content.title}</h1>
            <p className="mt-4 text-sm leading-6 text-white/72">{content.body}</p>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="soft-panel rounded-[24px] p-4">
              <Users size={18} className="text-brand-700" />
              <p className="mt-3 text-sm font-black tracking-[-0.02em] text-ink">Scoped access</p>
              <p className="mt-1 text-xs leading-5 text-muted">Joining one group does not unlock sibling groups.</p>
            </div>
            <div className="soft-panel rounded-[24px] p-4">
              <Clock size={18} className="text-brand-700" />
              <p className="mt-3 text-sm font-black tracking-[-0.02em] text-ink">14 days left</p>
              <p className="mt-1 text-xs leading-5 text-muted">Admins can revoke invites any time.</p>
            </div>
          </div>
        </div>

        <div>
          <Button
            variant={content.tone === 'danger' ? 'secondary' : 'primary'}
            className="w-full py-3.5"
            onClick={() => navigate(state === 'expired' ? '/preview' : state === 'private' ? '/join/pending' : '/verify')}
          >
            {content.action}
          </Button>
          <button onClick={() => navigate('/preview')} className="mt-3 w-full text-xs font-extrabold text-muted">
            See public preview first
          </button>
        </div>
      </div>
    </div>
  )
}
