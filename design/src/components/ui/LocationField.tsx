import { useNavigate } from 'react-router-dom'
import { MapPin, Navigation } from 'lucide-react'
import clsx from 'clsx'

interface LocationFieldProps {
  label: string
  value: string
  onChange?: (value: string) => void
  placeholder?: string
  returnTo: string
  storageKey?: string
  required?: boolean
  helper?: string
}

export function LocationField({
  label,
  value,
  onChange,
  placeholder = 'Choose area',
  returnTo,
  storageKey,
  required,
  helper,
}: LocationFieldProps) {
  const navigate = useNavigate()
  const pickerParams = new URLSearchParams({ returnTo })
  if (storageKey) pickerParams.set('storageKey', storageKey)
  const pickerUrl = `/location/map?${pickerParams.toString()}`

  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
        {label}{required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      <button
        type="button"
        onClick={() => navigate(pickerUrl)}
        className={clsx(
          'flex items-center gap-3 rounded-[16px] border px-3 py-3 text-left transition-colors',
          value
            ? 'border-brand-100 bg-brand-50 text-brand-700'
            : 'border-border bg-white/70 text-muted hover:border-brand-100 hover:bg-brand-50/50'
        )}
      >
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[13px] bg-white text-brand-700">
          <MapPin size={17} />
        </div>
        <div className="min-w-0 flex-1">
          <p className={clsx('truncate text-sm font-black', value ? 'text-ink' : 'text-muted')}>
            {value || placeholder}
          </p>
          <p className="mt-0.5 text-xs font-semibold text-muted">
            Select from map or search an area
          </p>
        </div>
        <Navigation size={16} className="shrink-0 text-brand-700" />
      </button>
      {helper && <p className="text-xs leading-5 text-gray-400">{helper}</p>}
      {onChange && value && (
        <button
          type="button"
          onClick={() => onChange('')}
          className="w-fit text-xs font-extrabold text-muted hover:text-brand-700"
        >
          Clear location
        </button>
      )}
    </div>
  )
}
