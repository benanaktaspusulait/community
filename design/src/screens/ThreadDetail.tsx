import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TopBar } from '../components/ui/TopBar'
import { Badge } from '../components/ui/Badge'
import { Flag, Bookmark, Send, CheckCircle2, BookMarked, MoreHorizontal, Share2, Link } from 'lucide-react'
import { useShare } from '../hooks/useShare'

const replies = [
  {
    id: '1',
    author: 'Ayşe K.',
    avatar: 'A',
    time: '2h ago',
    body: 'I found a room through SpareRoom — worth checking. Filter by MK postcode.',
    helpful: false,
  },
  {
    id: '2',
    author: 'Mehmet D.',
    avatar: 'M',
    time: '1h ago',
    body: 'Also try local Facebook groups for MK. Sometimes cheaper than SpareRoom.',
    helpful: false,
  },
  {
    id: '3',
    author: 'Sara L.',
    avatar: 'S',
    time: '45m ago',
    body: 'SpareRoom, Rightmove, and Zoopla all have MK listings. Set alerts for your budget. Also check the Housing group pinned resource for a full checklist.',
    helpful: true, // pre-marked as the best answer
  },
]

export function ThreadDetail() {
  const navigate = useNavigate()
  const [reply, setReply] = useState('')
  const [saved, setSaved] = useState(false)
  const [solved, setSolved] = useState(false)
  const [solutionId, setSolutionId] = useState<string | null>('3') // pre-selected
  const [addedToLibrary, setAddedToLibrary] = useState<string[]>([])
  const [menuOpen, setMenuOpen] = useState<string | null>(null)

  const { share, copied } = useShare()

  const markSolution = (id: string) => {
    setSolutionId(id)
    setSolved(true)
    setMenuOpen(null)
  }

  const addToLibrary = (id: string) => {
    setAddedToLibrary(prev => [...prev, id])
    setMenuOpen(null)
  }

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
            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${solved ? 'bg-green-100 text-green-700' : 'bg-orange-50 text-orange-600'}`}>
              {solved ? '✓ SOLVED' : 'OPEN'}
            </span>
          </div>
          <h2 className="text-base font-bold text-gray-900">Looking for a room in Milton Keynes</h2>
          <div className="bg-[#f8f9fb] rounded-xl p-3 text-sm text-gray-700 leading-relaxed">
            Hi everyone, I'm moving to MK in May and looking for a room. Budget is around £600/month.
            Prefer somewhere close to the centre or with good bus links. Any leads appreciated!
          </div>
          <div className="flex items-center justify-between text-xs text-gray-400">
            <span>Housing • by <button className="font-medium text-gray-600 hover:text-[#4f6ef7]" onClick={() => navigate('/member')}>Ali Y.</button></span>
            <span>3h ago</span>
          </div>
          <div className="flex gap-2 pt-1">
            <button
              className="flex items-center gap-1 text-xs text-gray-400 hover:text-red-500"
              onClick={() => navigate('/report')}
            >
              <Flag size={13} /> Report
            </button>
            <button
              onClick={() => share('Looking for a room in Milton Keynes', 'Thread from MK Community')}
              className="flex items-center gap-1 text-xs text-gray-400 hover:text-[#4f6ef7]"
            >
              {copied ? <><Link size={13} /> Copied!</> : <><Share2 size={13} /> Share</>}
            </button>
            {!solved && (
              <button
                onClick={() => setSolved(true)}
                className="ml-auto text-xs text-gray-500 hover:text-green-600 border border-[#e4e7ec] rounded-lg px-2 py-1"
              >
                Mark solved
              </button>
            )}
          </div>
        </div>

        {/* replies */}
        <div className="px-4 mt-3 flex flex-col gap-2">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">{replies.length} replies</p>

          {replies.map(r => {
            const isSolution = solutionId === r.id
            const inLibrary = addedToLibrary.includes(r.id)
            const isMenuOpen = menuOpen === r.id

            return (
              <div
                key={r.id}
                className={`bg-white rounded-2xl border p-4 flex flex-col gap-2 ${
                  isSolution ? 'border-green-300 bg-green-50/40' : 'border-[#e4e7ec]'
                }`}
              >
                {/* solution badge */}
                {isSolution && (
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-green-700">
                    <CheckCircle2 size={13} className="text-green-600" />
                    Best answer
                  </div>
                )}

                {/* author row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button onClick={() => navigate('/member')} className="w-7 h-7 rounded-full bg-[#e0eaff] flex items-center justify-center text-xs font-bold text-[#4f6ef7]">
                      {r.avatar}
                    </button>
                    <button onClick={() => navigate('/member')} className="text-xs font-semibold text-gray-800 hover:text-[#4f6ef7]">{r.author}</button>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-400">{r.time}</span>
                    {/* action menu trigger */}
                    <button
                      onClick={() => setMenuOpen(isMenuOpen ? null : r.id)}
                      className="text-gray-400 hover:text-gray-600 p-0.5"
                    >
                      <MoreHorizontal size={15} />
                    </button>
                  </div>
                </div>

                <p className="text-sm text-gray-700 leading-relaxed">{r.body}</p>

                {/* inline action menu */}
                {isMenuOpen && (
                  <div className="flex flex-col gap-1 border-t border-[#e4e7ec] pt-2 mt-1">
                    {!isSolution && (
                      <button
                        onClick={() => markSolution(r.id)}
                        className="flex items-center gap-2 text-xs font-semibold text-green-700 bg-green-50 rounded-lg px-3 py-2 hover:bg-green-100"
                      >
                        <CheckCircle2 size={13} /> Mark as best answer
                      </button>
                    )}
                    {!inLibrary ? (
                      <button
                        onClick={() => addToLibrary(r.id)}
                        className="flex items-center gap-2 text-xs font-semibold text-[#4f6ef7] bg-[#f0f4ff] rounded-lg px-3 py-2 hover:bg-[#e0eaff]"
                      >
                        <BookMarked size={13} /> Add to library (save as resource)
                      </button>
                    ) : (
                      <div className="flex items-center gap-2 text-xs font-semibold text-gray-400 px-3 py-2">
                        <BookMarked size={13} /> Added to library ✓
                      </div>
                    )}
                    <button
                      onClick={() => navigate('/report')}
                      className="flex items-center gap-2 text-xs text-red-500 bg-red-50 rounded-lg px-3 py-2 hover:bg-red-100"
                    >
                      <Flag size={13} /> Report this reply
                    </button>
                  </div>
                )}

                {/* library added confirmation */}
                {inLibrary && !isMenuOpen && (
                  <div className="flex items-center gap-1.5 text-xs text-[#4f6ef7] font-medium">
                    <BookMarked size={12} /> Saved to library
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* reply composer */}
      <div className="absolute inset-x-0 bottom-0 z-30 flex items-end gap-2 border-t border-border/80 bg-card/92 px-4 py-3 backdrop-blur-xl">
        <textarea
          rows={1}
          value={reply}
          onChange={e => setReply(e.target.value)}
          placeholder="Write a reply…"
          className="flex-1 resize-none rounded-[14px] border border-border bg-white/70 px-3 py-2.5 text-sm text-ink focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
        />
        <button
          disabled={!reply}
          className="flex h-10 w-10 items-center justify-center rounded-[14px] bg-brand-600 text-white shadow-[0_10px_22px_rgba(13,111,99,0.2)] disabled:opacity-40"
        >
          <Send size={16} />
        </button>
      </div>
    </div>
  )
}
