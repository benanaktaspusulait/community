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
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[390px] bg-white border-t border-[#e4e7ec] flex justify-around py-2 z-20">
      {items.map(({ to, icon: Icon, label }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            clsx('flex flex-col items-center gap-0.5 text-[10px] font-medium px-3 py-1 rounded-xl transition-colors',
              isActive ? 'text-[#4f6ef7]' : 'text-gray-400 hover:text-gray-600')
          }
        >
          <Icon size={22} />
          {label}
        </NavLink>
      ))}
    </div>
  )
}
