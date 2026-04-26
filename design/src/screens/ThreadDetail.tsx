import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TopBar } from '../components/ui/TopBar'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { Flag, Bookmark, Send } from 'lucide-react'

const replies = [
  { id: '1', author: 'Ayşe K.', time: '2h ago', body: 'I found a room through SpareRoom — worth checking. Filter by MK postcode.' },
  { id: '2', author: 'Mehmet D.', time: '1h ago', body: 'Also try local Facebook groups for MK. Sometimes cheaper than SpareRoom.' },
  { id: '3', author: 'Sara L.', time: '45m ago', body: 'I rented in MK centre for £580 last year. DM me if you want the landlord contact.' },
]

export function ThreadDetail() {
  const navigate = useNavigate()
  const [reply, setReply] = useState('')
  const [saved, setSaved] = useState(false)

  return (
    <div className="flex flex-col h-full bg-[#f8f9fb]">
      <TopBar
        title="Thread"
        back
        action={
          <button onClick={() => setSaved(s => !s)} className={saved ? 'text-[#4f6ef7]' : 'text-gray-400'}>
            <Bookmark size={18} fill={saved ? '#4f6ef7' : 'none'} />
          </button>
        }
      />

      <div className="flex-1 overflow-y-auto pb-24">
        {/* original post */}
        <div className="bg-white mx-4 mt-4 rounded-2xl border border-[#e4e7ec] p-4 flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <Badge variant="help" />
            <span className="text-xs text-orange-600 font-semibold bg-orange-50 px-2 py-0.5 rounded-full">OPEN</span>
          </div>
          <h2 className="text-base font-bold text-gray-900">Looking for a room in Milton Keynes</h2>
          <div className="bg-[#f8f9fb] rounded-xl p-3 text-sm text-gray-700 leading-relaxed">
            Hi everyone, I'm moving to MK in May and looking for a room. Budget is around £600/month.
            Prefer somewhere close to the centre or with good bus links. Any leads appreciated!
          </div>
          <div className="flex items-center justify-between text-xs text-gray-400">
            <span>Housing • by <span className="font-medium text-gray-600">Ali Y.</span></span>
            <span>3h ago</span>
          </div>
          <div className="flex gap-2 pt-1">
            <button className="flex items-center gap-1 text-xs text-gray-400 hover:text-red-500">
              <Flag size={13} /> Report
            </button>
            <button
              onClick={() => navigate('/thread/close')}
              className="ml-auto text-xs text-gray-400 hover:text-gray-700 border border-[#e4e7ec] rounded-lg px-2 py-1"
            >
              Mark solved
            </button>
          </div>
        </div>

        {/* replies */}
        <div className="px-4 mt-3 flex flex-col gap-2">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">{replies.length} replies</p>
          {replies.map(r => (
            <div key={r.id} className="bg-white rounded-2xl border border-[#e4e7ec] p-4 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#e0eaff] flex items-center justify-center text-xs font-bold text-[#4f6ef7]">
                    {r.author[0]}
                  </div>
                  <span className="text-xs font-semibold text-gray-800">{r.author}</span>
                </div>
                <span className="text-xs text-gray-400">{r.time}</span>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">{r.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* reply composer */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[390px] bg-white border-t border-[#e4e7ec] px-4 py-3 flex gap-2 items-end">
        <textarea
          rows={1}
          value={reply}
          onChange={e => setReply(e.target.value)}
          placeholder="Write a reply…"
          className="flex-1 bg-[#f8f9fb] rounded-xl border border-[#e4e7ec] px-3 py-2.5 text-sm resize-none focus:outline-none focus:border-[#4f6ef7]"
        />
        <button
          disabled={!reply}
          className="w-10 h-10 bg-[#4f6ef7] rounded-xl flex items-center justify-center text-white disabled:opacity-40"
        >
          <Send size={16} />
        </button>
      </div>
    </div>
  )
}
