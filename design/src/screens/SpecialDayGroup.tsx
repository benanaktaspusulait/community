import { useState } from 'react'
import { TopBar } from '../components/ui/TopBar'
import { BottomNav } from '../components/ui/BottomNav'
import { Card } from '../components/ui/Card'
import { Send } from 'lucide-react'

const threads = [
  { id: '1', title: 'Bayram namazı saatleri — Milton Keynes', replies: 8, time: '1h ago' },
  { id: '2', title: 'Bayram yemeği organizasyonu', replies: 4, time: '3h ago' },
  { id: '3', title: 'Bayramınız mübarek olsun 🌙', replies: 21, time: '5h ago' },
]

export function SpecialDayGroup() {
  const [reply, setReply] = useState('')

  return (
    <div className="flex flex-col h-full bg-[#f8f9fb]">
      <TopBar title="Ramazan Bayramı 2025" back />

      {/* event header */}
      <div className="bg-gradient-to-r from-pink-500 to-orange-400 px-4 py-4 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-white font-bold text-sm">Special day group</span>
            <span className="bg-white/20 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">LIVE</span>
          </div>
          <p className="text-white/80 text-xs mt-0.5">Ends in 2 days • Invited from all groups</p>
        </div>
        <span className="text-3xl">🌙</span>
      </div>

      <div className="flex-1 overflow-y-auto pb-24 px-4 pt-4 flex flex-col gap-3">
        {/* pinned */}
        <div className="bg-[#fff8e1] border border-yellow-200 rounded-2xl p-4">
          <p className="text-[10px] font-bold text-yellow-600 uppercase tracking-wide mb-1">📌 Admin message</p>
          <p className="text-sm text-gray-800">
            Tüm topluluğumuza Ramazan Bayramı mübarek olsun! Bu grupta bayrama özel paylaşımlarınızı yapabilirsiniz. 🎉
          </p>
        </div>

        {/* threads */}
        {threads.map(t => (
          <Card key={t.id} className="flex flex-col gap-2">
            <p className="text-sm font-semibold text-gray-900">{t.title}</p>
            <div className="flex items-center justify-between text-xs text-gray-400">
              <span>{t.replies} replies</span>
              <span>{t.time}</span>
            </div>
          </Card>
        ))}
      </div>

      {/* composer */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[390px] bg-white border-t border-[#e4e7ec] px-4 py-3 flex gap-2 items-end">
        <textarea
          rows={1}
          value={reply}
          onChange={e => setReply(e.target.value)}
          placeholder="Bayram mesajınızı yazın…"
          className="flex-1 bg-[#f8f9fb] rounded-xl border border-[#e4e7ec] px-3 py-2.5 text-sm resize-none focus:outline-none focus:border-pink-400"
        />
        <button
          disabled={!reply}
          className="w-10 h-10 bg-gradient-to-r from-pink-500 to-orange-400 rounded-xl flex items-center justify-center text-white disabled:opacity-40"
        >
          <Send size={16} />
        </button>
      </div>

      <BottomNav />
    </div>
  )
}
