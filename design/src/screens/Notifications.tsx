import { useNavigate } from 'react-router-dom'
import { TopBar } from '../components/ui/TopBar'
import { BottomNav } from '../components/ui/BottomNav'
import clsx from 'clsx'

type NotifType = 'reply' | 'moderation' | 'approval' | 'special' | 'system'

const notifs = [
  {
    id: '1', type: 'reply' as NotifType, unread: true,
    title: 'Ayşe K. replied to your thread',
    body: '"I found a room through SpareRoom — worth checking…"',
    time: '5m ago', to: '/thread',
  },
  {
    id: '2', type: 'special' as NotifType, unread: true,
    title: '🎉 Ramazan Bayramı grubu aktif',
    body: 'Tüm üyeler davetlidir. Gruba katılmak için tıkla.',
    time: '1h ago', to: '/special-day',
  },
  {
    id: '3', type: 'approval' as NotifType, unread: true,
    title: 'Your ad was approved',
    body: '"Accountant services MK" is now live in the Housing group.',
    time: '2h ago', to: '/profile',
  },
  {
    id: '4', type: 'moderation' as NotifType, unread: false,
    title: 'Moderation notice',
    body: 'A warning was issued for your post in the Legal group. Reason: off-topic.',
    time: '1d ago', to: '/thread',
  },
  {
    id: '5', type: 'reply' as NotifType, unread: false,
    title: 'Mehmet D. replied to your thread',
    body: '"Also try local Facebook groups for MK…"',
    time: '2d ago', to: '/thread',
  },
  {
    id: '6', type: 'system' as NotifType, unread: false,
    title: 'Your join request was approved',
    body: 'Welcome to MK Community! Start by exploring the groups.',
    time: '1w ago', to: '/community',
  },
]

const icons: Record<NotifType, string> = {
  reply: '💬',
  moderation: '🛡️',
  approval: '✅',
  special: '🎉',
  system: 'ℹ️',
}

const colors: Record<NotifType, string> = {
  reply: 'bg-blue-50',
  moderation: 'bg-red-50',
  approval: 'bg-green-50',
  special: 'bg-pink-50',
  system: 'bg-gray-50',
}

export function Notifications() {
  const navigate = useNavigate()
  const unreadCount = notifs.filter(n => n.unread).length

  return (
    <div className="flex flex-col h-full bg-[#f8f9fb]">
      <TopBar title={`Notifications ${unreadCount > 0 ? `(${unreadCount})` : ''}`} back />

      <div className="flex-1 overflow-y-auto pb-20">
        {notifs.map((n, i) => (
          <button
            key={n.id}
            onClick={() => navigate(n.to)}
            className={clsx(
              'w-full flex items-start gap-3 px-4 py-4 border-b border-[#e4e7ec] text-left transition-colors',
              n.unread ? 'bg-white' : 'bg-[#f8f9fb]'
            )}
          >
            <div className={clsx('w-10 h-10 rounded-2xl flex items-center justify-center text-lg shrink-0', colors[n.type])}>
              {icons[n.type]}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <p className={clsx('text-sm leading-snug', n.unread ? 'font-semibold text-gray-900' : 'font-medium text-gray-600')}>
                  {n.title}
                </p>
                <span className="text-[10px] text-gray-400 shrink-0 mt-0.5">{n.time}</span>
              </div>
              <p className="text-xs text-gray-400 mt-0.5 line-clamp-2">{n.body}</p>
            </div>
            {n.unread && (
              <div className="w-2 h-2 rounded-full bg-[#4f6ef7] shrink-0 mt-1.5" />
            )}
          </button>
        ))}
      </div>

      <BottomNav />
    </div>
  )
}
