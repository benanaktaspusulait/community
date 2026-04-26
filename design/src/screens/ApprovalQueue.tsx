import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TopBar } from '../components/ui/TopBar'
import { Button } from '../components/ui/Button'
import clsx from 'clsx'

type Item = { id: string; type: string; label: string; meta: string; status: 'pending' | 'approved' | 'rejected' }

const items: Item[] = [
  { id: '1', type: 'JOIN', label: 'Fatma K. wants to join', meta: 'MK Community • 2h ago', status: 'pending' },
  { id: '2', type: 'AD', label: 'Ad: "Accountant services MK"', meta: 'by Ali Y. • Housing group • 3h ago', status: 'pending' },
  { id: '3', type: 'RESOURCE', label: 'Resource: "GP registration guide"', meta: 'by Mod • Health group • 1d ago', status: 'pending' },
  { id: '4', type: 'JOIN', label: 'Mehmet D. wants to join', meta: 'MK Community • 1d ago', status: 'approved' },
  { id: '5', type: 'AD', label: 'Ad: "Moving van hire"', meta: 'by Sara L. • Services group • 2d ago', status: 'rejected' },
]

const typeColors: Record<string, string> = {
  JOIN: 'bg-blue-100 text-blue-700',
  AD: 'bg-purple-100 text-purple-700',
  RESOURCE: 'bg-green-100 text-green-700',
}

const statusColors: Record<string, string> = {
  pending: 'bg-yellow-100 text-yellow-700',
  approved: 'bg-green-100 text-green-700',
  rejected: 'bg-red-100 text-red-600',
}

export function ApprovalQueue() {
  const navigate = useNavigate()
  const [filter, setFilter] = useState<'All' | 'Pending' | 'Decided'>('All')
  const [decisions, setDecisions] = useState<Record<string, 'approved' | 'rejected'>>({})

  const filtered = items.filter(i => {
    if (filter === 'Pending') return i.status === 'pending' && !decisions[i.id]
    if (filter === 'Decided') return i.status !== 'pending' || decisions[i.id]
    return true
  })

  return (
    <div className="flex flex-col h-full bg-[#f8f9fb]">
      <TopBar title="Approval queue" back />

      <div className="bg-white px-4 pb-3 border-b border-[#e4e7ec]">
        <div className="flex gap-2 pt-2">
          {(['All', 'Pending', 'Decided'] as const).map(f => (
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
        {filtered.map(item => {
          const decided = decisions[item.id]
          const currentStatus = decided ?? item.status
          return (
            <div key={item.id} className="bg-white rounded-2xl border border-[#e4e7ec] p-4 flex flex-col gap-3">
              <div className="flex items-start justify-between gap-2">
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2">
                    <span className={clsx('text-[10px] font-bold px-2 py-0.5 rounded-full', typeColors[item.type])}>
                      {item.type}
                    </span>
                    <span className={clsx('text-[10px] font-bold px-2 py-0.5 rounded-full', statusColors[currentStatus])}>
                      {currentStatus.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-gray-900">{item.label}</p>
                  <p className="text-xs text-gray-400">{item.meta}</p>
                </div>
              </div>

              {currentStatus === 'pending' && (
                <div className="flex gap-2">
                  <Button
                    variant="danger"
                    className="flex-1 py-2 text-xs"
                    onClick={() => setDecisions(d => ({ ...d, [item.id]: 'rejected' }))}
                  >
                    Reject
                  </Button>
                  <Button
                    className="flex-1 py-2 text-xs"
                    onClick={() => setDecisions(d => ({ ...d, [item.id]: 'approved' }))}
                  >
                    Approve
                  </Button>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
