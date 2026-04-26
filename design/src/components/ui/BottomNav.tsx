import { Home, Search, PlusCircle, BookOpen, User } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import clsx from 'clsx'

const items = [
  { to: '/feed', icon: Home, label: 'Home' },
  { to: '/search', icon: Search, label: 'Search' },
  { to: '/create', icon: PlusCircle, label: 'Create' },
  { to: '/library', icon: BookOpen, label: 'Library' },
  { to: '/profile', icon: User, label: 'Profile' },
]

export function BottomNav() {
  return (
    <div className="absolute inset-x-0 bottom-0 z-30 flex justify-around border-t border-border/80 bg-card/92 px-2 pb-2 pt-2 backdrop-blur-xl">
      {items.map(({ to, icon: Icon, label }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            clsx(
              'flex min-w-14 flex-col items-center gap-0.5 rounded-2xl px-3 py-1.5 text-[10px] font-bold transition-all',
              isActive
                ? 'bg-brand-50 text-brand-700 shadow-sm'
                : 'text-muted/65 hover:bg-black/5 hover:text-muted'
            )
          }
        >
          <Icon size={22} />
          {label}
        </NavLink>
      ))}
    </div>
  )
}
