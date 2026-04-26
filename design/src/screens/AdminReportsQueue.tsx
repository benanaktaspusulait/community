import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TopBar } from '../components/ui/TopBar'
import { Button } from '../components/ui/Button'
import clsx from 'clsx'

type Status = 'open' | 'resolved' | 'dismissed'

const reports = [
  {
    id: '1',
    reason: 'Spam',
    target: 'Post by Mehmet D.',
    targetPreview: '"Buy cheap followers here! Click link..."',
    reporter: 'Ayşe K.',
    group: 'Housing',
    count: 3,
    time: '20m ago',
    status: 'open' as Status,
    risk: 'high',
  },
  {
    id: '2',
    reason: 'Off-topic',
    target: 'Post by Sara L.',
    targetPreview: '"Anyone want to go to the cinema this weekend?"',
    reporter: 'Ali Y.',
    group: 'Legal',
    count: 1,
    time: '2h ago',
    status: 'open' as Status,
    risk: 'low',
  },
  {
    id: '3',
    reason: 'Harassment',
    target: 'User: Kemal B.',
    targetPreview: '"Stop messaging me or I will find you"',
    reporter: 'Fatma K.',
    group: 'Health',
    count: 2,
    time: '5h ago',
    status: 'open' as Status,
    risk: 'high',
  },
  {
    id: '4',
    reason: 'Scam',
    target: 'Post by Unknown',
    targetPreview: '"Send £50 deposit to secure the room..."',
    reporter: 'Mehmet D.',
    group: 'Housing',
    count: 5,
    time: '1d ago',
    status: 'resolved' as Status,
    risk: 'high',
  },
]

const riskColors = { high: 'bg-red-100 text-red-600', low: 'bg-yellow-100 text-yellow-700' }
const statusColors: Record<Status, string> = {
  open: 'bg-orange-100 text-orange-700',
  resolved: 'bg-green-100 text-green-700',
  dismissed: 'bg-gray-100 text-gray-500',
}

export function AdminReportsQueue() {
  const navigate = useNavigate()
  const [filter, setFilter] = useState<'All' | 'Open' | 'Resolved'>('Open')
  const [decisions, setDecisions] = useState<Record<string, Status>>({})
  const [expanded, setExpanded] = useState<string | null>(null)

  const filtered = reports.filter(r => {
    const status = decisions[r.id] ?? r.status
    if (filter === 'Open') return status === 'open'
    if (filter === 'Resolved') return status !== 'open'
    return true
  })

  const decide = (id: string, status: Status) => {
    setDecisions(d => ({ ...d, [id]: status }))
    setExpanded(null)
  }

  return (
    <div className="flex flex-col h-full bg-[#f8f9fb]">
      <TopBar title="Reports queue" back />

      <div className="bg-white px-4 pb-3 border-b border-[#e4e7ec]">
        <div className="flex gap-2 pt-2">
          {(['All', 'Open', 'Resolved'] as const).map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={clsx(
                'px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors',
                filter === f ? 'bg-[#4f6ef7] text-white border-[#4f6ef7]' : 'bg-white text-gray-600 border-[#e4e7ec]'
              )}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 pt-3 pb-8 flex flex-col gap-3">
        {filtered.length === 0 && (
          <div className="text-center py-12 text-gray-400 text-sm">No reports in this category</div>
        )}

        {filtered.map(r => {
          const currentStatus = decisions[r.id] ?? r.status
          const isOpen = currentStatus === 'open'
          const isExpanded = expanded === r.id

          return (
            <div key={r.id} className="bg-white rounded-2xl border border-[#e4e7ec] overflow-hidden">
              {/* summary row */}
              <button
                className="w-full flex items-start gap-3 p-4 text-left"
                onClick={() => setExpanded(isExpanded ? null : r.id)}
              >
                <div className="flex-1 flex flex-col gap-1.5">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={clsx('text-[10px] font-bold px-2 py-0.5 rounded-full', riskColors[r.risk as 'high' | 'low'])}>
                      {r.risk === 'high' ? '🔴 High risk' : '🟡 Low risk'}
                    </span>
                    <span className="text-[10px] font-bold bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                      {r.reason}
                    </span>
                    <span className={clsx('text-[10px] font-bold px-2 py-0.5 rounded-full', statusColors[currentStatus])}>
                      {currentStatus.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-gray-900">{r.target}</p>
                  <p className="text-xs text-gray-400 italic truncate">"{r.targetPreview}"</p>
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <span>Reported by {r.reporter}</span>
                    <span>•</span>
                    <span>{r.group} group</span>
                    <span>•</span>
                    <span>{r.count} report{r.count > 1 ? 's' : ''}</span>
                    <span>•</span>
                    <span>{r.time}</span>
                  </div>
                </div>
              </button>

              {/* expanded actions */}
              {isExpanded && (
                <div className="border-t border-[#e4e7ec] px-4 py-3 flex flex-col gap-2 bg-[#f8f9fb]">
                  {isOpen ? (
                    <>
                      <button
                        onClick={() => navigate('/admin/moderation')}
                        className="flex items-center gap-2 text-xs font-semibold text-[#4f6ef7] bg-[#f0f4ff] rounded-xl px-3 py-2.5"
                      >
                        🛡️ Open member moderation (warn / viewer mode / remove)
                      </button>
                      <div className="flex gap-2">
                        <Button
                          variant="ghost"
                          className="flex-1 py-2 text-xs"
                          onClick={() => decide(r.id, 'dismissed')}
                        >
                          Dismiss
                        </Button>
                        <Button
                          className="flex-1 py-2 text-xs"
                          onClick={() => decide(r.id, 'resolved')}
                        >
                          Mark resolved
                        </Button>
                      </div>
                    </>
                  ) : (
                    <p className="text-xs text-gray-400 text-center py-1">
                      This report has been {currentStatus}.
                    </p>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
