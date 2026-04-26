import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TopBar } from '../components/ui/TopBar'
import { Button } from '../components/ui/Button'
import { Input, Textarea } from '../components/ui/Input'
import clsx from 'clsx'

const groups = ['Housing', 'Legal', 'Health', 'Jobs', 'Services', 'Local']
const adTypes = [
  { key: 'service', label: '🔧 Service', desc: 'Plumber, cleaner, accountant…' },
  { key: 'product', label: '📦 Product', desc: 'Sell something' },
  { key: 'event', label: '📅 Event', desc: 'Community event or gathering' },
  { key: 'announcement', label: '📢 Announcement', desc: 'Business or community notice' },
]

export function AdCreate() {
  const navigate = useNavigate()
  const [step, setStep] = useState<'type' | 'form' | 'preview'>('type')
  const [adType, setAdType] = useState('')
  const [group, setGroup] = useState('')
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const selectedAdType = adTypes.find(t => t.key === adType)

  if (step === 'type') {
    return (
      <div className="flex flex-col h-full bg-white">
        <TopBar title="Create ad" back />
        <div className="flex-1 px-4 pt-6 flex flex-col gap-4">
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-1">What type of ad?</h2>
            <p className="text-sm text-gray-400">All ads require approval before going live.</p>
          </div>
          <div className="flex flex-col gap-3">
            {adTypes.map(t => (
              <button
                key={t.key}
                onClick={() => { setAdType(t.key); setStep('form') }}
                className="flex items-center gap-4 bg-[#f8f9fb] border border-[#e4e7ec] rounded-2xl px-4 py-4 text-left hover:border-[#4f6ef7]"
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

  if (step === 'preview') {
    return (
      <div className="flex flex-col h-full bg-white">
        <TopBar title="Ad preview" back />
        <div className="flex-1 px-4 pt-6 flex flex-col gap-4">
          <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide">How your ad will look</p>
          <div className="bg-[#f8f9fb] border border-[#e4e7ec] rounded-2xl p-4 flex flex-col gap-2">
            <span className="text-[10px] font-bold text-purple-600 bg-purple-50 px-2 py-0.5 rounded-full w-fit">
              {selectedAdType?.label.split(' ').slice(1).join(' ') || 'Ad'} • {group}
            </span>
            <p className="text-sm font-bold text-gray-900">{title || 'Your ad title'}</p>
            <p className="text-sm text-gray-600">{body || 'Your ad description will appear here.'}</p>
            <p className="text-xs text-[#4f6ef7] font-semibold mt-1">Contact →</p>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-3 text-xs text-yellow-700">
            ⏳ This ad will be reviewed before going live. Usually within 24 hours.
          </div>
        </div>
        <div className="px-4 pb-8 flex gap-3 border-t border-[#e4e7ec] pt-3">
          <Button variant="secondary" className="flex-1 py-3" onClick={() => setStep('form')}>Edit</Button>
          <Button className="flex-1 py-3" onClick={() => navigate('/profile')}>Submit for review</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col h-full bg-white">
      <TopBar title="Create ad" back />
      <div className="flex-1 overflow-y-auto px-4 pt-4 pb-4 flex flex-col gap-4">
        {/* target group */}
        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
            Target group <span className="text-red-500">*</span>
          </label>
          <div className="flex flex-wrap gap-2">
            {groups.map(g => (
              <button
                key={g}
                onClick={() => setGroup(g)}
                className={clsx(
                  'px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors',
                  group === g ? 'bg-[#4f6ef7] text-white border-[#4f6ef7]' : 'bg-white text-gray-600 border-[#e4e7ec]'
                )}
              >
                {g}
              </button>
            ))}
          </div>
        </div>

        <Input label="Title" placeholder="e.g. Professional accountant services" value={title} onChange={setTitle} required />
        <Textarea label="Description" placeholder="Describe your service or product…" value={body} onChange={setBody} rows={4} required />

        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Image (optional)</label>
          <div className="border-2 border-dashed border-[#e4e7ec] rounded-xl py-6 flex flex-col items-center gap-2 text-gray-400">
            <span className="text-2xl">📷</span>
            <span className="text-xs">Tap to upload image</span>
          </div>
        </div>
      </div>

      <div className="px-4 pb-8 flex gap-3 border-t border-[#e4e7ec] pt-3 bg-white">
        <Button variant="secondary" className="flex-1 py-3">Save draft</Button>
        <Button className="flex-1 py-3" disabled={!group || !title || !body} onClick={() => setStep('preview')}>
          Preview
        </Button>
      </div>
    </div>
  )
}
