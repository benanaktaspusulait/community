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
    <div className="sticky top-0 z-20 flex items-center justify-between border-b border-border/80 bg-card/85 px-4 py-3 backdrop-blur-xl">
      <div className="w-8">
        {back && (
          <button
            onClick={() => navigate(-1)}
            className="flex h-8 w-8 items-center justify-center rounded-full text-muted transition-colors hover:bg-black/5 hover:text-ink"
            aria-label="Go back"
          >
            <ArrowLeft size={20} />
          </button>
        )}
      </div>
      <span className="text-sm font-extrabold tracking-[-0.02em] text-ink">{title}</span>
      <div className="w-8 flex justify-end">{action}</div>
    </div>
  )
}
