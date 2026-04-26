import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TopBar } from '../components/ui/TopBar'
import { Card } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { Flag, Ban, MessageCircle } from 'lucide-react'

const theirPosts = [
  { id: '1', type: 'help' as const, title: 'Looking for a room in MK centre', replies: 5, time: '2d ago' },
  { id: '2', type: 'solved' as const, title: 'GP registration — my experience', replies: 8, time: '1w ago' },
]

export function MemberProfile() {
  const navigate = useNavigate()
  const [blocked, setBlocked] = useState(false)
  const [blockConfirm, setBlockConfirm] = useState(false)

  return (
    <div className="flex flex-col h-full bg-[#f8f9fb]">
      <TopBar title="Member" back />

      {/* block confirm modal */}
      {blockConfirm && (
        <div className="absolute inset-0 z-50 bg-black/40 flex items-end">
          <div className="bg-white w-full rounded-t-3xl p-6 flex flex-col gap-4">
            <h3 className="font-bold text-gray-900">{blocked ? 'Unblock' : 'Block'} Mehmet D.?</h3>
            <p className="text-sm text-gray-500">
              {blocked
                ? 'They will be able to see your posts and interact with you again.'
                : "You won't see their posts and they won't be able to interact with you."}
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" className="flex-1 py-3" onClick={() => setBlockConfirm(false)}>Cancel</Button>
              <Button
                variant={blocked ? 'primary' : 'danger'}
                className="flex-1 py-3"
                onClick={() => { setBlocked(b => !b); setBlockConfirm(false) }}
              >
                {blocked ? 'Unblock' : 'Block'}
              </Button>
            </div>
          </div>
        </div>
      )}

      <div className="flex-1 overflow-y-auto pb-8">
        {/* profile header */}
        <div className="bg-white px-4 pt-4 pb-4 border-b border-[#e4e7ec] flex flex-col gap-3">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-[#e0eaff] flex items-center justify-center text-2xl font-bold text-[#4f6ef7]">
              M
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <p className="font-bold text-gray-900">Mehmet D.</p>
                {blocked && (
                  <span className="text-[10px] font-bold bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">Blocked</span>
                )}
              </div>
              <p className="text-xs text-gray-400 mt-0.5">Member since Mar 2025 • Milton Keynes</p>
            </div>
          </div>

          <div className="flex gap-3">
            {[
              { label: 'Posts', value: '7' },
              { label: 'Replies', value: '19' },
              { label: 'Groups', value: '3' },
            ].map((s, i) => (
              <div key={s.label} className={`flex-1 py-2 flex flex-col items-center gap-0.5 ${i < 2 ? 'border-r border-[#e4e7ec]' : ''}`}>
                <span className="text-sm font-bold text-[#4f6ef7]">{s.value}</span>
                <span className="text-[10px] text-gray-400">{s.label}</span>
              </div>
            ))}
          </div>

          {/* quick actions */}
          <div className="flex gap-2">
            <button
              onClick={() => navigate('/report?target=user')}
              className="flex-1 flex items-center justify-center gap-2 border border-red-200 text-red-500 rounded-xl py-2 text-xs font-semibold bg-red-50"
            >
              <Flag size={13} /> Report
            </button>
            <button
              onClick={() => setBlockConfirm(true)}
              className="flex-1 flex items-center justify-center gap-2 border border-[#e4e7ec] text-gray-600 rounded-xl py-2 text-xs font-semibold bg-white"
            >
              <Ban size={13} /> {blocked ? 'Unblock' : 'Block'}
            </button>
          </div>
        </div>

        {/* their posts */}
        <div className="px-4 pt-4 flex flex-col gap-3">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Recent posts</p>
          {blocked ? (
            <div className="text-center py-8 text-gray-400 text-sm">
              You've blocked this member. Their posts are hidden.
            </div>
          ) : (
            theirPosts.map(p => (
              <Card key={p.id} onClick={() => navigate('/thread')} className="flex flex-col gap-2">
                <Badge variant={p.type} />
                <p className="text-sm font-semibold text-gray-900">{p.title}</p>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span className="flex items-center gap-1"><MessageCircle size={11} /> {p.replies} replies</span>
                  <span>{p.time}</span>
                </div>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
