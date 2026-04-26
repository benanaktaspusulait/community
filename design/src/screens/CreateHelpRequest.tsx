import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TopBar } from '../components/ui/TopBar'
import { Button } from '../components/ui/Button'
import { Input, Textarea } from '../components/ui/Input'
import clsx from 'clsx'

const groups = ['Housing', 'Legal', 'Health', 'Jobs', 'Services', 'Local']
const types = [
  { key: 'help', label: '🙋 Help request', desc: 'Ask for help or advice' },
  { key: 'room', label: '🏠 Looking for a room', desc: 'Structured room search' },
  { key: 'question', label: '❓ Question', desc: 'Ask the community' },
  { key: 'listing', label: '📦 Listing', desc: 'Sell, rent or offer something' },
]
export function CreateHelpRequest() {
  const navigate = useNavigate()
  const [step, setStep] = useState<'type' | 'form'>('type')
  const [selectedType, setSelectedType] = useState('')
  const [group, setGroup] = useState('')
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [budget, setBudget] = useState('')
  const [location, setLocation] = useState('')

  const isRoom = selectedType === 'room'
  const canPublish = group && title && body && (!isRoom || (budget && location))

  if (step === 'type') {
    return (
      <div className="flex flex-col h-full bg-white">
        <TopBar title="Create" back />
        <div className="flex-1 px-4 pt-6 flex flex-col gap-4">
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-1">What do you want to post?</h2>
            <p className="text-sm text-gray-500">Choose the right format so others can help you better.</p>
          </div>
          <div className="flex flex-col gap-3">
            {types.map(t => (
              <button
                key={t.key}
                onClick={() => {
                  if (t.key === 'listing') { navigate('/listing/create'); return }
                  setSelectedType(t.key); setStep('form')
                }}
                className="flex items-center gap-4 bg-[#f8f9fb] border border-[#e4e7ec] rounded-2xl px-4 py-4 text-left hover:border-[#4f6ef7] transition-colors"
              >
                <span className="text-2xl">{t.label.split(' ')[0]}</span>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{t.label.split(' ').slice(1).join(' ')}</p>
                  <p className="text-xs text-gray-400">{t.desc}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col h-full bg-white">
      <TopBar title={isRoom ? 'Looking for a room' : 'Help request'} back />
      <div className="flex-1 overflow-y-auto px-4 pt-4 pb-4 flex flex-col gap-4">

        {/* group picker */}
        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
            Group <span className="text-red-500">*</span>
          </label>
          <div className="flex flex-wrap gap-2">
            {groups.map(g => (
              <button
                key={g}
                onClick={() => setGroup(g)}
                className={clsx(
                  'px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors',
                  group === g
                    ? 'bg-[#4f6ef7] text-white border-[#4f6ef7]'
                    : 'bg-white text-gray-600 border-[#e4e7ec]'
                )}
              >
                {g}
              </button>
            ))}
          </div>
        </div>

        <Input label="Title" placeholder="What do you need?" value={title} onChange={setTitle} required />
        <Textarea label="Details" placeholder="Describe your situation…" value={body} onChange={setBody} rows={4} required />

        {isRoom && (
          <div className="bg-[#f0f4ff] rounded-2xl p-4 flex flex-col gap-3">
            <p className="text-xs font-semibold text-[#4f6ef7] uppercase tracking-wide">Room details</p>
            <Input label="Budget (£/month)" placeholder="e.g. 600" value={budget} onChange={setBudget} required />
            <Input label="Preferred area" placeholder="e.g. MK centre, Bletchley" value={location} onChange={setLocation} required />
            <Input label="Move-in date" placeholder="e.g. 1 May 2025" />
          </div>
        )}
      </div>

      <div className="px-4 pb-8 flex gap-3 border-t border-[#e4e7ec] pt-3 bg-white">
        <Button variant="secondary" className="flex-1 py-3">Save draft</Button>
        <Button className="flex-1 py-3" disabled={!canPublish} onClick={() => navigate('/thread')}>
          Publish
        </Button>
      </div>
    </div>
  )
}
