import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TopBar } from '../components/ui/TopBar'
import { Button } from '../components/ui/Button'

export function VerifyCode() {
  const navigate = useNavigate()
  const [code, setCode] = useState(['', '', '', '', '', ''])

  const handleChange = (i: number, val: string) => {
    if (!/^\d?$/.test(val)) return
    const next = [...code]
    next[i] = val
    setCode(next)
    if (val && i < 5) {
      document.getElementById(`otp-${i + 1}`)?.focus()
    }
  }

  const filled = code.every(c => c !== '')

  return (
    <div className="flex flex-col h-full bg-white">
      <TopBar title="Verify" back />
      <div className="flex-1 flex flex-col px-6 pt-8 gap-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-1">Check your inbox</h2>
          <p className="text-sm text-gray-500">We sent a 6-digit code to your email.</p>
        </div>

        <div className="flex gap-2 justify-center">
          {code.map((c, i) => (
            <input
              key={i}
              id={`otp-${i}`}
              maxLength={1}
              value={c}
              onChange={e => handleChange(i, e.target.value)}
              className="w-12 h-14 text-center text-xl font-bold border-2 border-[#e4e7ec] rounded-xl focus:outline-none focus:border-[#4f6ef7] bg-[#f8f9fb]"
            />
          ))}
        </div>

        <p className="text-center text-xs text-gray-400">Code expires in 10 minutes.</p>

        <Button className="w-full py-3" disabled={!filled} onClick={() => navigate('/onboarding')}>
          Verify
        </Button>

        <button className="text-center text-sm text-[#4f6ef7] font-medium">
          Resend code
        </button>
      </div>
    </div>
  )
}
