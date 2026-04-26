import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TopBar } from '../components/ui/TopBar'
import { Button } from '../components/ui/Button'
import { Input, Textarea } from '../components/ui/Input'
import clsx from 'clsx'

const groupTypes = [
  { key: 'TOPIC', label: '💬 Topic group', desc: 'e.g. Housing, Legal, Health' },
  { key: 'LOCATION', label: '📍 Location group', desc: 'e.g. Bletchley, Wolverton' },
]

export function SuggestGroup() {
  const navigate = useNavigate()
  const [type, setType] = useState('TOPIC')
  const [name, setName] = useState('')
  const [reason, setReason] = useState('')
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div className="flex flex-col h-full bg-white items-center justify-center px-6 gap-4 text-center">
        <div className="text-5xl">📬</div>
        <h2 className="text-lg font-bold text-gray-900">Suggestion sent</h2>
        <p className="text-sm text-gray-500">
          The community admin will review your suggestion. You'll be notified when a decision is made.
        </p>
        <Button className="w-full py-3 mt-2" onClick={() => navigate(-1)}>Back to community</Button>
      </div>
    )
  }

  return (
    <div className="flex flex-col h-full bg-white">
      <TopBar title="Suggest a group" back />
      <div className="flex-1 px-4 pt-6 flex flex-col gap-5">
        <div>
          <h2 className="text-base font-bold text-gray-900 mb-1">Suggest a new group</h2>
          <p className="text-sm text-gray-400">
            The admin will review your suggestion. If approved, the group will be created and you'll be notified.
          </p>
        </div>

        {/* type */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Group type</label>
          {groupTypes.map(t => (
            <button
              key={t.key}
              onClick={() => setType(t.key)}
              className={clsx(
                'flex items-center gap-3 px-4 py-3 rounded-xl border text-left transition-colors',
                type === t.key ? 'border-[#4f6ef7] bg-[#f0f4ff]' : 'border-[#e4e7ec] bg-white'
              )}
            >
              <span className="text-xl">{t.label.split(' ')[0]}</span>
              <div>
                <p className="text-sm font-semibold text-gray-900">{t.label.split(' ').slice(1).join(' ')}</p>
                <p className="text-xs text-gray-400">{t.desc}</p>
              </div>
            </button>
          ))}
        </div>

        <Input
          label="Proposed group name"
          placeholder={type === 'TOPIC' ? 'e.g. Education, Travel' : 'e.g. Bletchley, Wolverton'}
          value={name}
          onChange={setName}
          required
        />

        <Textarea
          label="Why is this group needed?"
          placeholder="Explain why this topic or location deserves its own group…"
          value={reason}
          onChange={setReason}
          rows={3}
          required
        />
      </div>

      <div className="px-4 pb-8 flex gap-3 border-t border-[#e4e7ec] pt-3">
        <Button variant="ghost" className="flex-1 py-3" onClick={() => navigate(-1)}>Cancel</Button>
        <Button className="flex-1 py-3" disabled={!name || !reason} onClick={() => setSubmitted(true)}>
          Send suggestion
        </Button>
      </div>
    </div>
  )
}
