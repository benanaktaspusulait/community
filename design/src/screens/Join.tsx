import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TopBar } from '../components/ui/TopBar'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'
import { Globe2 } from 'lucide-react'

export function Join() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const countryName = localStorage.getItem('community-country-name') || 'United Kingdom'

  return (
    <div className="flex flex-col h-full bg-white">
      <TopBar title="Create account" back />
      <div className="flex-1 flex flex-col px-6 pt-8 gap-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-1">Welcome</h2>
          <p className="text-sm text-gray-500">Enter your email or phone to join the country community.</p>
        </div>

        <button
          onClick={() => navigate('/country')}
          className="flex items-center justify-between rounded-[18px] border border-brand-100 bg-brand-50 px-4 py-3 text-left"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-[14px] bg-white text-brand-700">
              <Globe2 size={18} />
            </div>
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-brand-700">Country community</p>
              <p className="text-sm font-black text-ink">{countryName}</p>
            </div>
          </div>
          <span className="text-xs font-extrabold text-brand-700">Change</span>
        </button>

        <Input
          label="Email or phone"
          placeholder="you@example.com"
          value={email}
          onChange={setEmail}
          required
        />

        <div className="flex flex-col gap-3 mt-2">
          <Button className="w-full py-3" onClick={() => navigate('/verify')} disabled={!email}>
            Continue
          </Button>

          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs text-gray-400">or</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          <button
            onClick={() => navigate('/join')}
            className="w-full flex items-center justify-center gap-2 border border-[#e4e7ec] rounded-xl py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            <img src="https://www.google.com/favicon.ico" className="w-4 h-4" alt="" />
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  )
}
