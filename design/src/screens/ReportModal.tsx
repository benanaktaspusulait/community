import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { TopBar } from '../components/ui/TopBar'
import { Button } from '../components/ui/Button'
import { Textarea } from '../components/ui/Input'
import clsx from 'clsx'

const contentReasons = [
  { key: 'spam', label: '🚫 Spam' },
  { key: 'scam', label: '⚠️ Scam' },
  { key: 'harassment', label: '😡 Harassment' },
  { key: 'offtopic', label: '📌 Off-topic' },
  { key: 'inappropriate', label: '🔞 Inappropriate content' },
  { key: 'other', label: '💬 Other' },
]

const userReasons = [
  { key: 'harassment', label: '😡 Harassment or threats' },
  { key: 'spam', label: '🚫 Spam or fake account' },
  { key: 'scam', label: '⚠️ Scam or fraud' },
  { key: 'impersonation', label: '🎭 Impersonation' },
  { key: 'other', label: '💬 Other' },
]

export function ReportModal() {
  const navigate = useNavigate()
  const [params] = useSearchParams()
  const isUserReport = params.get('target') === 'user'

  const reasons = isUserReport ? userReasons : contentReasons
  const [selected, setSelected] = useState('')
  const [note, setNote] = useState('')
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div className="flex flex-col h-full bg-white items-center justify-center px-6 gap-4 text-center">
        <div className="text-5xl">✅</div>
        <h2 className="text-lg font-bold text-gray-900">Report submitted</h2>
        <p className="text-sm text-gray-500">
          Our moderation team will review this. Thank you for keeping the community safe.
        </p>
        <Button className="w-full py-3 mt-2" onClick={() => navigate(-1)}>Go back</Button>
      </div>
    )
  }

  return (
    <div className="flex flex-col h-full bg-white">
      <TopBar title={isUserReport ? 'Report member' : 'Report content'} back />
      <div className="flex-1 px-4 pt-6 flex flex-col gap-5">
        <div>
          <h2 className="text-base font-bold text-gray-900 mb-1">
            {isUserReport ? 'Why are you reporting this member?' : 'Why are you reporting this?'}
          </h2>
          <p className="text-sm text-gray-400">Your report is anonymous and goes to the moderation team.</p>
        </div>

        <div className="flex flex-col gap-2">
          {reasons.map(r => (
            <button
              key={r.key}
              onClick={() => setSelected(r.key)}
              className={clsx(
                'flex items-center gap-3 px-4 py-3 rounded-xl border text-sm font-medium text-left transition-colors',
                selected === r.key
                  ? 'border-[#4f6ef7] bg-[#f0f4ff] text-[#4f6ef7]'
                  : 'border-[#e4e7ec] bg-white text-gray-700'
              )}
            >
              {r.label}
            </button>
          ))}
        </div>

        <Textarea
          label="Additional note (optional)"
          placeholder="Add more context if needed…"
          value={note}
          onChange={setNote}
          rows={3}
        />
      </div>

      <div className="px-4 pb-8 flex gap-3 border-t border-[#e4e7ec] pt-3">
        <Button variant="ghost" className="flex-1 py-3" onClick={() => navigate(-1)}>Cancel</Button>
        <Button className="flex-1 py-3" disabled={!selected} onClick={() => setSubmitted(true)}>
          Submit report
        </Button>
      </div>
    </div>
  )
}
