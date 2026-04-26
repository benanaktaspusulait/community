import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

interface TopBarProps {
  title: string
  back?: boolean
  action?: React.ReactNode
}

export function TopBar({ title, back, action }: TopBarProps) {
  const navigate = useNavigate()
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-white border-b border-[#e4e7ec] sticky top-0 z-10">
      <div className="w-8">
        {back && (
          <button onClick={() => navigate(-1)} className="text-gray-500 hover:text-gray-800">
            <ArrowLeft size={20} />
          </button>
        )}
      </div>
      <span className="font-semibold text-sm text-gray-900">{title}</span>
      <div className="w-8 flex justify-end">{action}</div>
    </div>
  )
}
