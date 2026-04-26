import clsx from 'clsx'

export function Card({ children, className, onClick }: {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}) {
  return (
    <div
      onClick={onClick}
      className={clsx(
        'app-card rounded-[22px] p-4',
        onClick && 'cursor-pointer transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_38px_rgba(43,35,25,0.1)] active:scale-[0.985]',
        className
      )}
    >
      {children}
    </div>
  )
}
