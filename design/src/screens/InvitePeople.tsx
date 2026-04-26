import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { CheckCircle2, Clipboard, Link2, Mail, MessageCircle, QrCode, RotateCcw, Send, Users } from 'lucide-react'
import clsx from 'clsx'
import { TopBar } from '../components/ui/TopBar'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { Input, Textarea } from '../components/ui/Input'

const scopes = [
  { id: 'community', label: 'MK Community', meta: 'Community preview + onboarding' },
  { id: 'housing', label: 'Housing group', meta: 'Scoped access to Housing only' },
  { id: 'health', label: 'Health group', meta: 'Private group, approval required' },
  { id: 'jobs', label: 'Jobs group', meta: 'Open group, direct join allowed' },
]

const channels = [
  { id: 'whatsapp', label: 'WhatsApp', icon: MessageCircle },
  { id: 'email', label: 'Email', icon: Mail },
  { id: 'copy', label: 'Copy link', icon: Clipboard },
]

const recentInvites = [
  { name: 'a***@mail.com', scope: 'Housing', status: 'Accepted', tone: 'success' },
  { name: '+44 *** 5512', scope: 'Health', status: 'Opened', tone: 'open' },
  { name: 's***@gmail.com', scope: 'Jobs', status: 'Sent', tone: 'pending' },
]

const statusStyles: Record<string, string> = {
  success: 'bg-emerald-100 text-emerald-800 ring-emerald-200',
  open: 'bg-brand-50 text-brand-700 ring-brand-100',
  pending: 'bg-amber-100 text-amber-800 ring-amber-200',
}

export function InvitePeople() {
  const { pathname } = useLocation()
  const isAdmin = pathname.startsWith('/admin')
  const [scope, setScope] = useState('housing')
  const [contact, setContact] = useState('')
  const [message, setMessage] = useState('Join our Housing group so useful answers do not get lost in chat.')
  const [copied, setCopied] = useState(false)
  const [sent, setSent] = useState(false)

  const selectedScope = scopes.find(s => s.id === scope) ?? scopes[0]
  const inviteLink = `community.app/join/${selectedScope.id}-mk`

  const copyInvite = () => {
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1600)
  }

  const sendInvite = () => {
    setSent(true)
    window.setTimeout(() => setSent(false), 1800)
  }

  return (
    <div className="flex h-full flex-col bg-[#f8f1e7]">
      <TopBar title={isAdmin ? 'Invite hub' : 'Invite people'} back />

      <div className="flex-1 overflow-y-auto px-4 pb-8 pt-4">
        <div className="brand-gradient mb-4 rounded-[28px] p-5 text-white shadow-[0_18px_38px_rgba(13,111,99,0.2)]">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-white/62">
                Migration bridge
              </p>
              <h1 className="mt-2 text-2xl font-black leading-[0.95] tracking-[-0.05em]">
                Bring people from old groups without creating chaos.
              </h1>
              <p className="mt-3 text-xs leading-5 text-white/72">
                Invite by scoped link, QR, WhatsApp, email, or direct contact. Access stays limited to the selected group.
              </p>
            </div>
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/16">
              <Users size={24} />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <section>
            <p className="mb-2 text-xs font-black uppercase tracking-[0.16em] text-muted/70">Invite scope</p>
            <div className="grid grid-cols-2 gap-2">
              {scopes.map(item => (
                <button
                  key={item.id}
                  onClick={() => setScope(item.id)}
                  className={clsx(
                    'rounded-[20px] border p-3 text-left transition-all',
                    scope === item.id
                      ? 'border-brand-500 bg-brand-50 text-brand-700 shadow-sm'
                      : 'border-border bg-white/70 text-ink hover:border-brand-500'
                  )}
                >
                  <p className="text-sm font-extrabold tracking-[-0.02em]">{item.label}</p>
                  <p className="mt-1 text-[11px] leading-4 text-muted">{item.meta}</p>
                </button>
              ))}
            </div>
          </section>

          <Card className="flex flex-col gap-3">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-black tracking-[-0.02em] text-ink">Shareable invite</p>
                <p className="text-xs text-muted">Best for posting back into WhatsApp, Facebook, or Telegram.</p>
              </div>
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                <Link2 size={19} />
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-white/72 px-3 py-3">
              <p className="font-mono text-xs font-bold text-ink">{inviteLink}</p>
              <p className="mt-1 text-[11px] text-muted">
                {selectedScope.meta}. Expires in 14 days, 100 uses.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {channels.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={copyInvite}
                  className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-white/70 px-2 py-3 text-xs font-extrabold text-muted transition-colors hover:border-brand-500 hover:text-brand-700"
                >
                  <Icon size={17} />
                  {label}
                </button>
              ))}
            </div>

            {copied && (
              <div className="flex items-center gap-2 rounded-2xl bg-emerald-50 px-3 py-2 text-xs font-bold text-emerald-700">
                <CheckCircle2 size={14} /> Invite link ready to share
              </div>
            )}
          </Card>

          <Card className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-black tracking-[-0.02em] text-ink">Direct user invite</p>
                <p className="text-xs text-muted">Invite a specific person by email or phone.</p>
              </div>
              <Send size={19} className="text-brand-700" />
            </div>

            <Input
              label="Email or phone"
              placeholder="name@email.com or +44..."
              value={contact}
              onChange={setContact}
            />
            <Textarea
              label="Invite message"
              value={message}
              onChange={setMessage}
              rows={3}
            />

            <Button className="w-full py-3" disabled={!contact} onClick={sendInvite}>
              Send scoped invite
            </Button>

            {sent && (
              <div className="flex items-center gap-2 rounded-2xl bg-brand-50 px-3 py-2 text-xs font-bold text-brand-700">
                <CheckCircle2 size={14} /> Invite sent to {contact}
              </div>
            )}
          </Card>

          <div className="grid grid-cols-[1fr_1.3fr] gap-3">
            <Card className="flex flex-col items-center justify-center gap-3 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-[24px] bg-white text-ink ring-1 ring-border">
                <QrCode size={44} />
              </div>
              <p className="text-xs font-bold text-muted">QR for events and local businesses</p>
            </Card>

            <Card className="flex flex-col gap-3">
              <p className="text-sm font-black tracking-[-0.02em] text-ink">Migration status</p>
              {recentInvites.map(item => (
                <div key={`${item.name}-${item.scope}`} className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white text-xs font-black text-brand-700 ring-1 ring-border">
                    {item.scope[0]}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-xs font-bold text-ink">{item.name}</p>
                    <p className="text-[10px] text-muted">{item.scope}</p>
                  </div>
                  <span className={clsx('rounded-full px-2 py-1 text-[10px] font-black ring-1', statusStyles[item.tone])}>
                    {item.status}
                  </span>
                </div>
              ))}
            </Card>
          </div>

          {isAdmin && (
            <Card className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-black tracking-[-0.02em] text-ink">Admin controls</p>
                <p className="text-xs leading-5 text-muted">
                  Revoke expired links, resend failed direct invites, and prevent duplicate invites.
                </p>
              </div>
              <button className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-orange-100 text-orange-800">
                <RotateCcw size={18} />
              </button>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
