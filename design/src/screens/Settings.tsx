import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TopBar } from '../components/ui/TopBar'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { CheckCircle2 } from 'lucide-react'
import clsx from 'clsx'

type Vis = 'PUBLIC' | 'MEMBERS_ONLY' | 'HIDDEN'

const notifItems = [
  { key: 'replies', label: 'Replies to my threads', desc: 'When someone replies to your post' },
  { key: 'threads', label: 'New threads in my groups', desc: 'Activity in groups you joined' },
  { key: 'moderation', label: 'Moderation actions', desc: 'Warnings, viewer mode, removals' },
  { key: 'approvals', label: 'Approval decisions', desc: 'Ads, resources, join requests' },
  { key: 'special', label: 'Special day groups', desc: 'When a new event group goes live' },
]

const languages = [
  { code: 'tr', label: 'Türkçe', flag: '🇹🇷' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'ar', label: 'العربية', flag: '🇸🇦' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'pl', label: 'Polski', flag: '🇵🇱' },
]

export function Settings() {
  const navigate = useNavigate()
  const [showAds, setShowAds] = useState(false)
  const [locationVis, setLocationVis] = useState<Vis>('MEMBERS_ONLY')
  const [lang, setLang] = useState('tr')
  const [notifs, setNotifs] = useState<Record<string, boolean>>({
    replies: true, threads: false, moderation: true, approvals: true, special: true,
  })
  const [saved, setSaved] = useState(false)
  const [deleteStep, setDeleteStep] = useState<'idle' | 'confirm' | 'done'>('idle')

  const toggleNotif = (key: string) =>
    setNotifs(n => ({ ...n, [key]: !n[key] }))

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 2500)
  }

  if (deleteStep === 'confirm') {
    return (
      <div className="flex flex-col h-full bg-[#f8f9fb]">
        <TopBar title="Delete account" back />
        <div className="flex-1 flex flex-col items-center justify-center px-6 gap-6 text-center">
          <div className="w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center text-3xl">🗑️</div>
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-2">Delete your account?</h2>
            <p className="text-sm text-gray-500 leading-relaxed">
              This will permanently delete your profile, posts, and saved items.
              Your replies will be anonymised. This cannot be undone.
            </p>
          </div>
          <div className="w-full bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-3 text-xs text-yellow-700 text-left">
            ⚠️ If you have active ads or pending approvals, they will be cancelled.
          </div>
        </div>
        <div className="px-4 pb-8 flex flex-col gap-3 border-t border-[#e4e7ec] pt-3 bg-white">
          <Button variant="danger" className="w-full py-3" onClick={() => setDeleteStep('done')}>
            Yes, delete my account
          </Button>
          <Button variant="ghost" className="w-full py-3" onClick={() => setDeleteStep('idle')}>
            Cancel
          </Button>
        </div>
      </div>
    )
  }

  if (deleteStep === 'done') {
    return (
      <div className="flex flex-col h-full bg-white items-center justify-center px-6 gap-4 text-center">
        <div className="text-5xl">👋</div>
        <h2 className="text-lg font-bold text-gray-900">Account deleted</h2>
        <p className="text-sm text-gray-500">Your account has been scheduled for deletion. You'll receive a confirmation email.</p>
        <Button className="w-full py-3 mt-2" onClick={() => navigate('/auth')}>Back to start</Button>
      </div>
    )
  }

  return (
    <div className="flex flex-col h-full bg-[#f8f9fb]">
      <TopBar title="Settings" back />
      <div className="flex-1 overflow-y-auto px-4 pt-4 pb-8 flex flex-col gap-4">

        {saved && (
          <div className="flex items-center gap-2 bg-green-50 border border-green-200 rounded-xl px-4 py-3 text-sm text-green-700 font-medium">
            <CheckCircle2 size={16} className="text-green-600 shrink-0" />
            Settings saved successfully
          </div>
        )}

        {/* language */}
        <Card className="flex flex-col gap-3">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Language / Dil</p>
          <div className="flex flex-wrap gap-2">
            {languages.map(l => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={clsx(
                  'flex items-center gap-2 px-3 py-2 rounded-xl border text-sm font-medium transition-colors',
                  lang === l.code
                    ? 'border-[#4f6ef7] bg-[#f0f4ff] text-[#4f6ef7]'
                    : 'border-[#e4e7ec] bg-white text-gray-700'
                )}
              >
                <span>{l.flag}</span> {l.label}
              </button>
            ))}
          </div>
        </Card>

        {/* ad preference */}
        <Card className="flex flex-col gap-3">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Ad preferences</p>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-800">Show community ads</p>
              <p className="text-xs text-gray-400">Ads from local providers in your groups</p>
            </div>
            <button
              onClick={() => setShowAds(s => !s)}
              className={clsx('w-12 h-6 rounded-full transition-colors relative', showAds ? 'bg-[#4f6ef7]' : 'bg-gray-200')}
            >
              <span className={clsx('absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform', showAds ? 'translate-x-6' : 'translate-x-0.5')} />
            </button>
          </div>
          {!showAds && (
            <p className="text-xs text-gray-400 bg-gray-50 rounded-lg px-3 py-2">
              Ads are hidden. You won't see any community ads in your feed.
            </p>
          )}
        </Card>

        {/* location visibility */}
        <Card className="flex flex-col gap-3">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Location visibility</p>
          {([
            { key: 'PUBLIC', label: '🌍 Public', desc: 'Visible to all community members' },
            { key: 'MEMBERS_ONLY', label: '👥 Members only', desc: 'Only people in your groups' },
            { key: 'HIDDEN', label: '🔒 Hidden', desc: 'Not shown to anyone' },
          ] as { key: Vis; label: string; desc: string }[]).map(opt => (
            <button
              key={opt.key}
              onClick={() => setLocationVis(opt.key)}
              className={clsx(
                'flex items-center gap-3 px-3 py-2.5 rounded-xl border text-left transition-colors',
                locationVis === opt.key ? 'border-[#4f6ef7] bg-[#f0f4ff]' : 'border-[#e4e7ec] bg-white'
              )}
            >
              <div className={clsx('w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0', locationVis === opt.key ? 'border-[#4f6ef7]' : 'border-gray-300')}>
                {locationVis === opt.key && <div className="w-2 h-2 rounded-full bg-[#4f6ef7]" />}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800">{opt.label}</p>
                <p className="text-xs text-gray-400">{opt.desc}</p>
              </div>
            </button>
          ))}
        </Card>

        {/* notifications */}
        <Card className="flex flex-col gap-3">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Notifications</p>
          {notifItems.map(n => (
            <div key={n.key} className="flex items-center justify-between gap-3">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-800">{n.label}</p>
                <p className="text-xs text-gray-400">{n.desc}</p>
              </div>
              <button
                onClick={() => toggleNotif(n.key)}
                className={clsx('w-11 h-6 rounded-full transition-colors relative shrink-0', notifs[n.key] ? 'bg-[#4f6ef7]' : 'bg-gray-200')}
              >
                <span className={clsx('absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform', notifs[n.key] ? 'translate-x-5' : 'translate-x-0.5')} />
              </button>
            </div>
          ))}
        </Card>

        {/* account */}
        <Card className="flex flex-col gap-1">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Account</p>
          <button className="flex items-center gap-2 text-sm text-gray-700 py-2.5 border-b border-[#f0f0f0]">
            📦 Request my data
            <span className="ml-auto text-xs text-gray-400">Within 30 days</span>
          </button>
          <button
            onClick={() => setDeleteStep('confirm')}
            className="flex items-center gap-2 text-sm text-red-500 py-2.5 font-medium border-b border-[#f0f0f0]"
          >
            🗑️ Delete account
          </button>
          <button
            onClick={() => navigate('/auth')}
            className="flex items-center gap-2 text-sm text-gray-600 py-2.5 font-medium"
          >
            🚪 Log out
          </button>
        </Card>
      </div>

      <div className="px-4 pb-8 border-t border-[#e4e7ec] pt-3 bg-white">
        <Button className="w-full py-3" onClick={handleSave}>Save settings</Button>
      </div>
    </div>
  )
}
