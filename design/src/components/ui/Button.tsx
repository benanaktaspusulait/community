import clsx from 'clsx'

type Variant = 'primary' | 'secondary' | 'ghost' | 'danger'

const styles: Record<Variant, string> = {
  primary: 'bg-brand-600 text-white shadow-[0_12px_28px_rgba(13,111,99,0.24)] hover:bg-brand-700 active:bg-brand-700',
  secondary: 'bg-brand-50 text-brand-700 ring-1 ring-brand-100 hover:bg-brand-100',
  ghost: 'bg-transparent text-muted hover:bg-black/5',
  danger: 'bg-red-50 text-red-700 ring-1 ring-red-100 hover:bg-red-100',
}

export function Button({ children, variant = 'primary', className, onClick, type = 'button', disabled }: {
  children: React.ReactNode
  variant?: Variant
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  disabled?: boolean
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        'rounded-[14px] px-4 py-2.5 text-sm font-bold tracking-[-0.01em] transition-all',
        'disabled:opacity-45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/30',
        'active:scale-[0.98]',
        styles[variant],
        className
      )}
    >
      {children}
    </button>
  )
}
