import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TopBar } from '../components/ui/TopBar'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'

export function Join() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')

  return (
    <div className="flex flex-col h-full bg-white">
      <TopBar title="Create account" back />
      <div className="flex-1 flex flex-col px-6 pt-8 gap-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-1">Welcome</h2>
          <p className="text-sm text-gray-500">Enter your email or phone to get started.</p>
        </div>

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
