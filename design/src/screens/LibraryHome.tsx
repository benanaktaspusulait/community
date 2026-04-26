import { useNavigate } from 'react-router-dom'
import { TopBar } from '../components/ui/TopBar'
import { BottomNav } from '../components/ui/BottomNav'
import { Card } from '../components/ui/Card'

const categories = ['Housing', 'Legal', 'Health', 'Jobs', 'Services', 'Travel']

const featured = [
  { id: '1', title: 'Renting a room in the UK — checklist', category: 'Housing', updated: '3d ago' },
  { id: '2', title: 'National Insurance number — step by step', category: 'Legal', updated: '1w ago' },
  { id: '3', title: 'Registering with a GP', category: 'Health', updated: '5d ago' },
  { id: '4', title: "Driver's licence — how to change to UK", category: 'Legal', updated: '2w ago' },
]

export function LibraryHome() {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col h-full bg-[#f8f9fb]">
      <TopBar title="Library" />
      <div className="flex-1 overflow-y-auto pb-20 px-4 pt-4 flex flex-col gap-4">

        {/* categories */}
        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Categories</p>
          <div className="flex flex-wrap gap-2">
            {categories.map(c => (
              <button key={c} className="px-3 py-1.5 rounded-full text-xs font-semibold bg-white border border-[#e4e7ec] text-gray-700 hover:border-[#4f6ef7]">
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* featured */}
        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Featured</p>
          <div className="flex flex-col gap-3">
            {featured.map(r => (
              <Card key={r.id} onClick={() => navigate('/resource')} className="flex flex-col gap-1">
                <span className="text-[10px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full w-fit">
                  {r.category}
                </span>
                <p className="text-sm font-semibold text-gray-900">{r.title}</p>
                <p className="text-xs text-gray-400">Updated {r.updated}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  )
}
