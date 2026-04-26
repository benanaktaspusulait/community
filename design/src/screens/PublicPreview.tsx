import { useNavigate } from 'react-router-dom'
import { ArrowRight, BookOpen, LockKeyhole, MapPin, MessageCircle, Search, Users } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'

const previewItems = [
  { title: 'Renting a room in the UK - checklist', type: 'resource' as const, meta: 'Preview: 6 steps, 2 source threads' },
  { title: 'Looking for a room in Milton Keynes', type: 'help' as const, meta: 'Open request - replies locked until join' },
  { title: 'Driver licence change steps', type: 'solved' as const, meta: 'Solved thread - full answer after joining' },
]

const groups = ['Housing', 'Legal', 'Health', 'Jobs', 'Services', 'Local']

export function PublicPreview() {
  const navigate = useNavigate()

  return (
    <div className="flex h-full flex-col bg-[#fffaf2]">
      <div className="brand-gradient px-5 pb-6 pt-5 text-white">
        <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-white/62">Public preview</p>
        <h1 className="mt-3 text-3xl font-black leading-[0.92] tracking-[-0.06em]">
          MK Community for Turkish speakers in the UK.
        </h1>
        <p className="mt-4 text-sm leading-6 text-white/72">
          See the value before joining: solved threads, useful resources, and topic groups without the chat noise.
        </p>

        <div className="mt-5 grid grid-cols-3 gap-2">
          {[
            { icon: Users, value: '1.2k', label: 'Members' },
            { icon: BookOpen, value: '128', label: 'Answers' },
            { icon: MessageCircle, value: '76%', label: 'Solved' },
          ].map(({ icon: Icon, value, label }) => (
            <div key={label} className="rounded-[18px] bg-white/14 p-3 backdrop-blur">
              <Icon size={15} className="text-white/75" />
              <p className="mt-2 text-lg font-black tracking-[-0.04em]">{value}</p>
              <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-white/60">{label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 pb-6 pt-4">
        <div className="mb-4 flex flex-wrap gap-2">
          {groups.map(group => (
            <span key={group} className="rounded-full border border-border bg-white/76 px-3 py-1.5 text-xs font-extrabold text-muted">
              {group}
            </span>
          ))}
        </div>

        <div className="mb-4 rounded-[24px] border border-brand-100 bg-brand-50 p-4">
          <div className="flex items-start gap-3">
            <Search size={18} className="mt-0.5 text-brand-700" />
            <div>
              <p className="text-sm font-black tracking-[-0.02em] text-brand-700">Search is unlocked after joining</p>
              <p className="mt-1 text-xs leading-5 text-muted">
                Preview cards show why this is better than scrolling through old WhatsApp, Facebook, or Telegram messages.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          {previewItems.map(item => (
            <Card key={item.title} className="flex flex-col gap-3">
              <Badge variant={item.type} />
              <p className="text-[15px] font-black leading-snug tracking-[-0.025em] text-ink">{item.title}</p>
              <div className="flex items-center justify-between text-xs font-medium text-muted">
                <span>{item.meta}</span>
                <LockKeyhole size={14} />
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className="border-t border-border bg-card/92 px-5 pb-7 pt-4 backdrop-blur-xl">
        <div className="mb-3 flex items-center gap-2 text-xs font-bold text-muted">
          <MapPin size={14} /> Milton Keynes, UK
        </div>
        <Button className="w-full py-3.5" onClick={() => navigate('/join')}>
          Join community
        </Button>
        <button
          onClick={() => navigate('/invite/landing')}
          className="mt-3 flex w-full items-center justify-center gap-2 text-xs font-extrabold text-brand-700"
        >
          Open invite landing <ArrowRight size={14} />
        </button>
      </div>
    </div>
  )
}
