import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TopBar } from '../components/ui/TopBar'
import { Button } from '../components/ui/Button'
import { Input, Textarea } from '../components/ui/Input'
import clsx from 'clsx'

const groupTypes = [
  { key: 'TOPIC', label: '💬 Topic group', desc: 'e.g. Housing, Legal, Health' },
  { key: 'LOCATION', label: '📍 Location group', desc: 'e.g. Bletchley, Wolverton' },
  { key: 'SPECIAL_DAY', label: '🎉 Special day group', desc: 'Time-boxed event group' },
]

const emojis = ['🏠', '⚖️', '🏥', '💼', '🔧', '📍', '🎓', '✈️', '🛒', '🎉', '🌙', '🤝']

export function CreateGroup() {
  const navigate = useNavigate()
  const [type, setType] = useState('TOPIC')
  const [name, setName] = useState('')
  const [emoji, setEmoji] = useState('💬')
  const [desc, setDesc] = useState('')
  const [postApproval, setPostApproval] = useState(false)
  const [visibility, setVisibility] = useState('PUBLIC')
  const [eventDate, setEventDate] = useState('')
  const [activeFrom, setActiveFrom] = useState('')
  const [activeTo, setActiveTo] = useState('')
  const [created, setCreated] = useState(false)

  if (created) {
    return (
      <div className="flex flex-col h-full bg-white items-center justify-center px-6 gap-4 text-center">
        <div className="text-5xl">{emoji}</div>
        <h2 className="text-lg font-bold text-gray-900">Group created</h2>
        <p className="text-sm text-gray-500">
          "{name}" is now live. Members can find it in the community groups list.
        </p>
        <Button className="w-full py-3 mt-2" onClick={() => navigate('/community')}>
          Go to community
        </Button>
      </div>
    )
  }

  return (
    <div className="flex flex-col h-full bg-white">
      <TopBar title="Create group" back />
      <div className="flex-1 overflow-y-auto px-4 pt-4 pb-4 flex flex-col gap-5">

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

        {/* emoji picker */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Icon</label>
          <div className="flex flex-wrap gap-2">
            {emojis.map(e => (
              <button
                key={e}
                onClick={() => setEmoji(e)}
                className={clsx(
                  'w-10 h-10 rounded-xl text-xl border transition-colors',
                  emoji === e ? 'border-[#4f6ef7] bg-[#f0f4ff]' : 'border-[#e4e7ec] bg-white'
                )}
              >
                {e}
              </button>
            ))}
          </div>
        </div>

        <Input label="Group name" placeholder="e.g. Education, Bletchley" value={name} onChange={setName} required />
        <Textarea label="Description (optional)" placeholder="What is this group for?" value={desc} onChange={setDesc} rows={2} />

        {/* visibility */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Visibility</label>
          <div className="flex gap-2">
            {['PUBLIC', 'PRIVATE'].map(v => (
              <button
                key={v}
                onClick={() => setVisibility(v)}
                className={clsx(
                  'flex-1 py-2.5 rounded-xl text-xs font-semibold border transition-colors',
                  visibility === v ? 'bg-[#4f6ef7] text-white border-[#4f6ef7]' : 'bg-white text-gray-600 border-[#e4e7ec]'
                )}
              >
                {v === 'PUBLIC' ? '🌍 Public' : '🔒 Private'}
              </button>
            ))}
          </div>
        </div>

        {/* post approval toggle */}
        <div className="flex items-center justify-between bg-[#f8f9fb] rounded-xl border border-[#e4e7ec] px-4 py-3">
          <div>
            <p className="text-sm font-medium text-gray-800">Require post approval</p>
            <p className="text-xs text-gray-400">New posts need mod/admin approval before going live</p>
          </div>
          <button
            onClick={() => setPostApproval(p => !p)}
            className={clsx('w-12 h-6 rounded-full transition-colors relative', postApproval ? 'bg-[#4f6ef7]' : 'bg-gray-200')}
          >
            <span className={clsx('absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform', postApproval ? 'translate-x-6' : 'translate-x-0.5')} />
          </button>
        </div>

        {/* special day fields */}
        {type === 'SPECIAL_DAY' && (
          <div className="bg-pink-50 border border-pink-200 rounded-2xl p-4 flex flex-col gap-3">
            <p className="text-xs font-semibold text-pink-600 uppercase tracking-wide">Special day settings</p>
            <Input label="Event date" placeholder="e.g. 23 Apr 2025" value={eventDate} onChange={setEventDate} required />
            <Input label="Active from" placeholder="e.g. 21 Apr 2025" value={activeFrom} onChange={setActiveFrom} required />
            <Input label="Active until" placeholder="e.g. 25 Apr 2025" value={activeTo} onChange={setActiveTo} required />
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Invite members from</label>
              <div className="flex flex-wrap gap-2">
                {['All groups', 'Housing', 'Legal', 'Health', 'Jobs'].map(g => (
                  <button key={g} className="px-3 py-1.5 rounded-full text-xs font-semibold border bg-white text-gray-600 border-[#e4e7ec] hover:border-pink-400">
                    {g}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="px-4 pb-8 flex gap-3 border-t border-[#e4e7ec] pt-3 bg-white">
        <Button variant="ghost" className="flex-1 py-3" onClick={() => navigate(-1)}>Cancel</Button>
        <Button className="flex-1 py-3" disabled={!name} onClick={() => setCreated(true)}>
          Create group
        </Button>
      </div>
    </div>
  )
}
