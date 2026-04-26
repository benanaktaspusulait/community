import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TopBar } from '../components/ui/TopBar'
import { BottomNav } from '../components/ui/BottomNav'
import { Card } from '../components/ui/Card'
import { FileText, Image, Link2, PlayCircle } from 'lucide-react'
import clsx from 'clsx'

const categories = ['All', 'Housing', 'Legal', 'Health', 'Jobs', 'Services', 'Travel']

const resources = [
  { id: '1', title: 'Renting a room in the UK — checklist', category: 'Housing', updated: '3d ago' },
  { id: '2', title: 'National Insurance number — step by step', category: 'Legal', updated: '1w ago' },
  { id: '3', title: 'Registering with a GP', category: 'Health', updated: '5d ago' },
  { id: '4', title: "Driver's licence — how to change to UK", category: 'Legal', updated: '2w ago' },
  { id: '5', title: 'Finding a job in the UK — where to start', category: 'Jobs', updated: '3w ago' },
  { id: '6', title: 'Council tax — who pays and how', category: 'Housing', updated: '1w ago' },
  { id: '7', title: 'NHS dentist — how to register', category: 'Health', updated: '4d ago' },
]

export function LibraryHome() {
  const navigate = useNavigate()
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? resources
    : resources.filter(r => r.category === activeCategory)

  return (
    <div className="flex flex-col h-full bg-[#f8f9fb]">
      <TopBar title="Library" />
      <div className="flex-1 overflow-y-auto pb-20 px-4 pt-4 flex flex-col gap-4">

        {/* categories */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar -mx-4 px-4">
          {categories.map(c => (
            <button
              key={c}
              onClick={() => setActiveCategory(c)}
              className={clsx(
                'shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors',
                activeCategory === c
                  ? 'bg-[#4f6ef7] text-white border-[#4f6ef7]'
                  : 'bg-white border-[#e4e7ec] text-gray-700 hover:border-[#4f6ef7]'
              )}
            >
              {c}
            </button>
          ))}
        </div>

        {/* media archive shortcut */}
        <Card onClick={() => navigate('/media')} className="flex items-center gap-3">
          <div className="grid h-12 w-12 shrink-0 grid-cols-2 place-items-center rounded-2xl bg-[#e0eaff] text-[#4f6ef7]">
            <Link2 size={13} />
            <Image size={13} />
            <PlayCircle size={13} />
            <FileText size={13} />
          </div>
          <div className="flex-1">
            <p className="text-sm font-bold text-gray-900">Media & links archive</p>
            <p className="mt-0.5 text-xs text-gray-400">Find old links, images, videos, and files.</p>
          </div>
        </Card>

        {/* resources */}
        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
            {activeCategory === 'All' ? 'All resources' : activeCategory} ({filtered.length})
          </p>
          {filtered.length === 0 ? (
            <div className="text-center py-8 text-gray-400 text-sm">No resources in this category yet.</div>
          ) : (
            <div className="flex flex-col gap-3">
              {filtered.map(r => (
                <Card key={r.id} onClick={() => navigate('/resource')} className="flex flex-col gap-1.5">
                  <span className="text-[10px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full w-fit">
                    {r.category}
                  </span>
                  <p className="text-sm font-semibold text-gray-900">{r.title}</p>
                  <p className="text-xs text-gray-400">Updated {r.updated}</p>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
      <BottomNav />
    </div>
  )
}
