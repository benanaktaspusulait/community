import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TopBar } from '../components/ui/TopBar'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { Shield, Flag, Clock, History } from 'lucide-react'
import clsx from 'clsx'

const durations = ['1 day', '3 days', '7 days', '14 days', '30 days']
type Action = 'warn' | 'viewer' | 'remove' | ''
const scopes = ['Housing group', 'Health group', 'Jobs group', 'Services group']

const reportHistory = [
  { id: '1', reason: 'Spam', group: 'Housing', time: '3d ago', action: 'Warning sent' },
  { id: '2', reason: 'Off-topic', group: 'Legal', time: '1w ago', action: 'Dismissed' },
  { id: '3', reason: 'Harassment', group: 'Housing', time: '2w ago', action: 'Warning sent' },
]

export function AdminModeration() {
  const navigate = useNavigate()
  const [action, setAction] = useState<Action>('')
  const [scope, setScope] = useState('Housing group')
  const [duration, setDuration] = useState('7 days')
  const [applied, setApplied] = useState(false)

  return (
    <div className="flex flex-col h-full bg-[#f8f9fb]">
      <TopBar title="Member moderation" back />

      <div className="flex-1 overflow-y-auto px-4 pt-4 pb-8 flex flex-col gap-4">

        {/* member card */}
        <Card className="flex items-center gap-3">
          <button
            onClick={() => navigate('/member')}
            className="w-12 h-12 rounded-2xl bg-[#e0eaff] flex items-center justify-center text-lg font-bold text-[#4f6ef7] shrink-0"
          >
            M
          </button>
          <div className="flex-1">
            <button onClick={() => navigate('/member')} className="font-semibold text-gray-900 text-sm hover:text-[#4f6ef7]">
              Mehmet D.
            </button>
            <p className="text-xs text-gray-400">Member since Jan 2025 • Milton Keynes</p>
          </div>
          <div className="flex flex-col items-end gap-1">
            <span className="text-xs font-bold text-red-500 bg-red-50 px-2 py-0.5 rounded-full">3 reports</span>
            <span className="text-[10px] text-gray-400">Last: warning</span>
          </div>
        </Card>

        {/* report history */}
        <Card className="flex flex-col gap-3">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide flex items-center gap-1">
            <History size={12} /> Report history
          </p>
          {reportHistory.map(r => (
            <div key={r.id} className="flex items-center justify-between py-1 border-b border-[#f0f0f0] last:border-0">
              <div>
                <p className="text-xs font-semibold text-gray-800">{r.reason} — {r.group}</p>
                <p className="text-[10px] text-gray-400">{r.time}</p>
              </div>
              <span className="text-[10px] font-semibold bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">
                {r.action}
              </span>
            </div>
          ))}
        </Card>

        {/* scope */}
        <Card className="flex flex-col gap-2">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide flex items-center gap-1">
            <Shield size={12} /> Scope
          </p>
          <div className="flex gap-2">
            {scopes.map(s => (
              <button
                key={s}
                onClick={() => setScope(s)}
                className={clsx(
                  'flex-1 py-2 rounded-xl text-xs font-semibold border transition-colors',
                  scope === s
                    ? 'bg-[#4f6ef7] text-white border-[#4f6ef7]'
                    : 'bg-white text-gray-600 border-[#e4e7ec]'
                )}
              >
                {s}
              </button>
            ))}
          </div>
          <p className="text-[10px] text-gray-400">
            Viewer mode and removal are group-scoped in Phase 1. Platform escalation is separate from this action.
          </p>
        </Card>

        {/* action picker */}
        <Card className="flex flex-col gap-3">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide flex items-center gap-1">
            <Flag size={12} /> Action
          </p>
          {([
            { key: 'warn', label: '⚠️ Warn', desc: 'Send a formal warning to the member' },
            { key: 'viewer', label: '👁 Viewer mode', desc: 'Read-only for a set duration — cannot post or reply' },
            { key: 'remove', label: '🚫 Remove from group', desc: 'Permanently remove from this group' },
          ] as { key: Action; label: string; desc: string }[]).map(a => (
            <button
              key={a.key}
              onClick={() => setAction(a.key)}
              className={clsx(
                'flex items-center gap-3 rounded-xl px-3 py-3 border text-left transition-colors',
                action === a.key
                  ? 'border-[#4f6ef7] bg-[#f0f4ff]'
                  : 'border-[#e4e7ec] bg-white hover:border-gray-300'
              )}
            >
              <span className="text-lg">{a.label.split(' ')[0]}</span>
              <div>
                <p className="text-sm font-semibold text-gray-900">{a.label.split(' ').slice(1).join(' ')}</p>
                <p className="text-xs text-gray-400">{a.desc}</p>
              </div>
            </button>
          ))}
        </Card>

        {/* duration — viewer mode only */}
        {action === 'viewer' && (
          <Card className="flex flex-col gap-3">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide flex items-center gap-1">
              <Clock size={12} /> Duration
            </p>
            <div className="flex flex-wrap gap-2">
              {durations.map(d => (
                <button
                  key={d}
                  onClick={() => setDuration(d)}
                  className={clsx(
                    'px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors',
                    duration === d
                      ? 'bg-[#4f6ef7] text-white border-[#4f6ef7]'
                      : 'bg-white text-gray-600 border-[#e4e7ec]'
                  )}
                >
                  {d}
                </button>
              ))}
            </div>
            <p className="text-[10px] text-gray-400">
              Member will be notified with the reason and expiry date.
            </p>
          </Card>
        )}

        {/* applied confirmation */}
        {applied && (
          <div className="bg-green-50 border border-green-200 rounded-2xl p-4 text-center">
            <p className="text-green-700 font-semibold text-sm">✓ Action applied</p>
            <p className="text-green-600 text-xs mt-1">
              {action === 'viewer'
                ? `Viewer mode active for ${duration} in ${scope}`
                : action === 'warn'
                ? 'Warning sent to Mehmet D.'
                : `Mehmet D. removed from ${scope}`}
            </p>
          </div>
        )}
      </div>

      {!applied && (
        <div className="px-4 pb-8 flex gap-3 border-t border-[#e4e7ec] pt-3 bg-white">
          <Button variant="ghost" className="flex-1 py-3" onClick={() => navigate(-1)}>Cancel</Button>
          <Button
            variant={action === 'remove' ? 'danger' : 'primary'}
            className="flex-1 py-3"
            disabled={!action}
            onClick={() => setApplied(true)}
          >
            Apply action
          </Button>
        </div>
      )}
    </div>
  )
}
