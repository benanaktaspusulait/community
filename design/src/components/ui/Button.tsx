import clsx from 'clsx'

type Variant = 'primary' | 'secondary' | 'ghost' | 'danger'

const styles: Record<Variant, string> = {
  primary:   'bg-[#4f6ef7] text-white hover:bg-[#3b5bf0] active:bg-[#2a47e0]',
  secondary: 'bg-[#e0eaff] text-[#4f6ef7] hover:bg-[#c7d9ff]',
  ghost:     'bg-transparent text-gray-600 hover:bg-gray-100',
  danger:    'bg-red-50 text-red-600 hover:bg-red-100',
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
        'rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors disabled:opacity-40',
        styles[variant],
        className
      )}
    >
      {children}
    </button>
  )
}
