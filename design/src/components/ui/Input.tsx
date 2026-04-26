import clsx from 'clsx'

export function Input({ label, placeholder, value, onChange, type = 'text', required }: {
  label?: string
  placeholder?: string
  value?: string
  onChange?: (v: string) => void
  type?: string
  required?: boolean
}) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
          {label}{required && <span className="text-red-500 ml-0.5">*</span>}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={e => onChange?.(e.target.value)}
        className={clsx(
          'w-full rounded-[14px] border border-border bg-white/70 px-3 py-2.5 text-sm text-ink',
          'shadow-inner shadow-black/[0.02] transition-colors',
          'focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500',
          'placeholder:text-muted/55'
        )}
      />
    </div>
  )
}

export function Textarea({ label, placeholder, value, onChange, rows = 3, required }: {
  label?: string
  placeholder?: string
  value?: string
  onChange?: (v: string) => void
  rows?: number
  required?: boolean
}) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
          {label}{required && <span className="text-red-500 ml-0.5">*</span>}
        </label>
      )}
      <textarea
        rows={rows}
        placeholder={placeholder}
        value={value}
        onChange={e => onChange?.(e.target.value)}
        className={clsx(
          'w-full rounded-[14px] border border-border bg-white/70 px-3 py-2.5 text-sm text-ink resize-none',
          'shadow-inner shadow-black/[0.02] transition-colors',
          'focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500',
          'placeholder:text-muted/55'
        )}
      />
    </div>
  )
}
