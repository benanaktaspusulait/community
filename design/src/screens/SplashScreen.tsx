import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Users } from 'lucide-react'

export function SplashScreen() {
  const navigate = useNavigate()

  useEffect(() => {
    const t = setTimeout(() => navigate('/'), 2200)
    return () => clearTimeout(t)
  }, [navigate])

  return (
    <div className="flex flex-col h-full bg-[#4f6ef7] items-center justify-center gap-6">
      {/* logo */}
      <div className="flex flex-col items-center gap-4 animate-fade-in">
        <div className="w-24 h-24 rounded-3xl bg-white/20 backdrop-blur flex items-center justify-center shadow-2xl">
          <Users size={44} className="text-white" />
        </div>
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white tracking-tight">Community</h1>
          <p className="text-white/70 text-sm mt-1">Milton Keynes</p>
        </div>
      </div>

      {/* loading dots */}
      <div className="flex gap-2 mt-8">
        {[0, 1, 2].map(i => (
          <div
            key={i}
            className="w-2 h-2 rounded-full bg-white/60"
            style={{ animation: `pulse 1.2s ease-in-out ${i * 0.2}s infinite` }}
          />
        ))}
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}
