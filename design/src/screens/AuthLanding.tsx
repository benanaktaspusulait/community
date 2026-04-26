import { useNavigate } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { Users } from 'lucide-react'

export function AuthLanding() {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col h-full bg-white">
      {/* hero */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 gap-6">
        <div className="w-20 h-20 rounded-3xl bg-[#e0eaff] flex items-center justify-center">
          <Users size={36} className="text-[#4f6ef7]" />
        </div>
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Community</h1>
          <p className="text-gray-500 text-sm leading-relaxed">
            Find answers fast.<br />Keep knowledge. Stay on-topic.
          </p>
        </div>

        {/* value props */}
        <div className="w-full flex flex-col gap-3 mt-2">
          {[
            { emoji: '🔍', text: 'Search past answers instantly' },
            { emoji: '📚', text: 'Curated knowledge library' },
            { emoji: '🛡️', text: 'Safe, moderated community' },
          ].map(({ emoji, text }) => (
            <div key={text} className="flex items-center gap-3 bg-[#f8f9fb] rounded-xl px-4 py-3">
              <span className="text-xl">{emoji}</span>
              <span className="text-sm text-gray-700 font-medium">{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* actions */}
      <div className="px-6 pb-10 flex flex-col gap-3">
        <Button className="w-full py-3 text-base" onClick={() => navigate('/join')}>
          Join community
        </Button>
        <Button variant="secondary" className="w-full py-3 text-base" onClick={() => navigate('/feed')}>
          Log in
        </Button>
        <p className="text-center text-xs text-gray-400 mt-1">
          By joining you agree to our Terms & Privacy Policy
        </p>
      </div>
    </div>
  )
}
