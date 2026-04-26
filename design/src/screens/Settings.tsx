import { useState } from 'react'
import { TopBar } from '../components/ui/TopBar'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import clsx from 'clsx'

export function Settings() {
  const [showAds, setShowAds] = useState(false)
  const [locationVis, setLocationVis] = useState<'PUBLIC' | 'MEMBERS_ONLY' | 'HIDDEN'>('MEMBERS_ONLY')
  const [saved, setSaved] = useState(false)

  return (
    <div className="flex flex-col h-full bg-[#f8f9fb]">
      <TopBar title="Settings" back />
      <div className="flex-1 overflow-y-auto px-4 pt-4 pb-8 flex flex-col gap-4">

        {/* ad preference */}
        <Card className="flex flex-col gap-3">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Ad preferences</p>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-800">Show ads</p>
              <p className="text-xs text-gray-400">Community ads from local providers</p>
            </div>
            <button
              onClick={() => setShowAds(s => !s)}
              className={clsx(
                'w-12 h-6 rounded-full transition-colors relative',
                showAds ? 'bg-[#4f6ef7]' : 'bg-gray-200'
              )}
            >
              <span className={clsx(
                'absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform',
                showAds ? 'translate-x-6' : 'translate-x-0.5'
              )} />
            </button>
          </div>
        </Card>

        {/* location visibility */}
        <Card className="flex flex-col gap-3">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Location visibility</p>
          <div className="flex flex-col gap-2">
            {([
              { key: 'PUBLIC', label: 'Public', desc: 'Visible to everyone' },
              { key: 'MEMBERS_ONLY', label: 'Members only', desc: 'Only community members' },
              { key: 'HIDDEN', label: 'Hidden', desc: 'Not shown to anyone' },
            ] as const).map(opt => (
              <button
                key={opt.key}
                onClick={() => setLocationVis(opt.key)}
                className={clsx(
                  'flex items-center gap-3 px-3 py-2.5 rounded-xl border text-left transition-colors',
                  locationVis === opt.key
                    ? 'border-[#4f6ef7] bg-[#f0f4ff]'
                    : 'border-[#e4e7ec] bg-white'
                )}
              >
                <div className={clsx(
                  'w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0',
                  locationVis === opt.key ? 'border-[#4f6ef7]' : 'border-gray-300'
                )}>
                  {locationVis === opt.key && <div className="w-2 h-2 rounded-full bg-[#4f6ef7]" />}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800">{opt.label}</p>
                  <p className="text-xs text-gray-400">{opt.desc}</p>
                </div>
              </button>
            ))}
          </div>
        </Card>

        {/* notifications */}
        <Card className="flex flex-col gap-3">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Notifications</p>
          {[
            { label: 'Replies to my threads', on: true },
            { label: 'New threads in my groups', on: false },
            { label: 'Moderation actions', on: true },
          ].map(n => (
            <div key={n.label} className="flex items-center justify-between">
              <p className="text-sm text-gray-700">{n.label}</p>
              <div className={clsx('w-10 h-5 rounded-full relative', n.on ? 'bg-[#4f6ef7]' : 'bg-gray-200')}>
                <span className={clsx('absolute top-0.5 w-4 h-4 bg-white rounded-full shadow', n.on ? 'translate-x-5' : 'translate-x-0.5')} />
              </div>
            </div>
          ))}
        </Card>

        {/* account */}
        <Card className="flex flex-col gap-2">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Account</p>
          <button className="text-sm text-gray-700 text-left py-1">Request my data</button>
          <button className="text-sm text-red-500 text-left py-1">Delete account</button>
        </Card>

        {saved && (
          <div className="bg-green-50 border border-green-200 rounded-xl px-4 py-3 text-sm text-green-700 font-medium text-center">
            ✓ Settings saved
          </div>
        )}
      </div>

      <div className="px-4 pb-8 border-t border-[#e4e7ec] pt-3 bg-white">
        <Button className="w-full py-3" onClick={() => setSaved(true)}>Save settings</Button>
      </div>
    </div>
  )
}
