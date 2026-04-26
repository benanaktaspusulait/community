import clsx from 'clsx'

type Variant = 'help' | 'resource' | 'solved' | 'open' | 'ad' | 'special'

const styles: Record<Variant, string> = {
  help: 'bg-amber-100 text-amber-800 ring-1 ring-amber-200/70',
  resource: 'bg-brand-50 text-brand-700 ring-1 ring-brand-100',
  solved: 'bg-emerald-100 text-emerald-800 ring-1 ring-emerald-200/80',
  open: 'bg-stone-100 text-stone-700 ring-1 ring-stone-200',
  ad: 'bg-orange-100 text-orange-800 ring-1 ring-orange-200',
  special: 'bg-rose-100 text-rose-800 ring-1 ring-rose-200',
}

const labels: Record<Variant, string> = {
  help:     'Help request',
  resource: 'Resource',
  solved:   'Solved',
  open:     'Open',
  ad:       'Ad',
  special:  'Special day',
}

export function Badge({ variant }: { variant: Variant }) {
  return (
    <span className={clsx('w-fit text-[10px] font-extrabold px-2.5 py-1 rounded-full tracking-[-0.01em]', styles[variant])}>
      {labels[variant]}
    </span>
  )
}
