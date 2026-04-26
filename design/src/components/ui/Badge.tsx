import clsx from 'clsx'

type Variant = 'help' | 'resource' | 'solved' | 'open' | 'ad' | 'special'

const styles: Record<Variant, string> = {
  help:     'bg-orange-100 text-orange-700',
  resource: 'bg-blue-100 text-blue-700',
  solved:   'bg-green-100 text-green-700',
  open:     'bg-gray-100 text-gray-600',
  ad:       'bg-purple-100 text-purple-700',
  special:  'bg-pink-100 text-pink-700',
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
    <span className={clsx('text-[10px] font-semibold px-2 py-0.5 rounded-full', styles[variant])}>
      {labels[variant]}
    </span>
  )
}
