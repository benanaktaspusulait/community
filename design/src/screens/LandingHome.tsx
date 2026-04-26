import { useNavigate } from 'react-router-dom'
import { Users, Calendar, MapPin, ArrowRight, Menu, Moon, Sun } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { useTheme } from '../contexts/ThemeContext'

const features = [
  { 
    title: 'Find Communities', 
    description: 'Discover local groups that match your interests',
    icon: '🔍'
  },
  { 
    title: 'Share Events', 
    description: 'Create and join community events near you',
    icon: '📅'
  },
  { 
    title: 'Meet People', 
    description: 'Connect with neighbors and make new friends',
    icon: '👥'
  },
]

const communities = [
  { name: 'Tech Meetup', members: '1.2k', category: 'Technology', color: 'from-blue-500 to-blue-600' },
  { name: 'Book Club', members: '856', category: 'Culture', color: 'from-purple-500 to-purple-600' },
  { name: 'Student Network', members: '2.4k', category: 'Education', color: 'from-green-500 to-green-600' },
]

export function LandingHome() {
  const navigate = useNavigate()
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="flex h-full flex-col bg-white dark:bg-gray-950">
      {/* Navbar */}
      <nav className="flex items-center justify-between border-b border-gray-100 bg-white px-5 py-4 dark:border-gray-800 dark:bg-gray-900">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-sm">
            <Users size={18} />
          </div>
          <span className="text-lg font-black tracking-tight text-gray-900 dark:text-white">CommunityHub</span>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-xl text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <button 
            className="flex h-9 w-9 items-center justify-center rounded-xl text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors"
            aria-label="Menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </nav>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Hero Section */}
        <div className="px-5 pb-8 pt-10">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 dark:bg-blue-950">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400"></span>
            <span className="text-xs font-bold text-blue-700 dark:text-blue-300">Connect locally</span>
          </div>
          
          <h1 className="mb-4 text-[32px] font-black leading-[1.1] tracking-tight text-gray-900 dark:text-white">
            Build and discover local communities
          </h1>
          
          <p className="mb-6 text-base leading-relaxed text-gray-600 dark:text-gray-400">
            Join groups, share events, and connect with people around you.
          </p>

          <div className="flex flex-col gap-3">
            <Button 
              className="w-full py-3.5 text-base font-bold shadow-lg shadow-blue-600/25"
              onClick={() => navigate('/join')}
            >
              Explore Communities
            </Button>
            <Button 
              variant="secondary" 
              className="w-full py-3.5 text-base font-bold"
              onClick={() => navigate('/group/create')}
            >
              Create a Community
            </Button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="bg-gray-50 px-5 py-8 dark:bg-gray-900">
          <h2 className="mb-5 text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
            What you can do
          </h2>
          <div className="grid gap-4">
            {features.map((feature) => (
              <Card 
                key={feature.title}
                className="flex items-start gap-4 bg-white p-5 shadow-sm dark:bg-gray-800 dark:border-gray-700"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 text-2xl">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="mb-1 text-base font-black tracking-tight text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Community Cards */}
        <div className="px-5 py-8">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Popular Communities
            </h2>
            <button 
              onClick={() => navigate('/search')}
              className="flex items-center gap-1 text-sm font-bold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              View all
              <ArrowRight size={14} />
            </button>
          </div>
          
          <div className="flex flex-col gap-3">
            {communities.map((community) => (
              <Card 
                key={community.name}
                onClick={() => navigate('/community')}
                className="overflow-hidden bg-white shadow-sm dark:bg-gray-800 dark:border-gray-700"
              >
                <div className={`h-20 bg-gradient-to-br ${community.color}`} />
                <div className="p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="text-lg font-black tracking-tight text-gray-900 dark:text-white">
                      {community.name}
                    </h3>
                    <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-bold text-gray-700 dark:bg-gray-700 dark:text-gray-300">
                      {community.members}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-gray-600 dark:text-gray-400">
                    <span className="flex items-center gap-1">
                      <MapPin size={12} />
                      Milton Keynes
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {community.category}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 px-5 py-10 text-white dark:from-blue-700 dark:to-blue-900">
          <h2 className="mb-3 text-2xl font-black tracking-tight">
            Ready to get started?
          </h2>
          <p className="mb-6 text-sm leading-relaxed text-blue-50 dark:text-blue-100">
            Join thousands of people building stronger local communities.
          </p>
          <Button 
            className="w-full bg-white py-3.5 text-base font-bold text-blue-600 hover:bg-blue-50 dark:bg-gray-100 dark:hover:bg-white"
            onClick={() => navigate('/join')}
          >
            Sign up now
          </Button>
        </div>
      </div>
    </div>
  )
}
