import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import clsx from 'clsx'

const interests = ['Housing', 'Jobs', 'Legal', 'Health', 'School', 'Travel', 'Services', 'Local', 'Other']

export function OnboardingInterests() {
  const navigate = useNavigate()
  const [selected, setSelected] = useState<string[]>([])

  const toggle = (item: string) =>
    setSelected(s => s.includes(item) ? s.filter(x => x !== item) : [...s, item])

  return (
    <div className="flex flex-col h-full bg-white">
      {/* progress */}
      <div className="px-6 pt-6">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs text-gray-400 font-medium">Step 1 of 3</span>
          <button onClick={() => navigate('/feed')} className="text-xs text-[#4f6ef7] font-semibold">Skip</button>
        </div>
        <div className="h-1.5 bg-gray-100 rounded-full">
          <div className="h-1.5 bg-[#4f6ef7] rounded-full w-1/3" />
        </div>
      </div>

      <div className="flex-1 flex flex-col px-6 pt-6 gap-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-1">Choose your interests</h2>
          <p className="text-sm text-gray-500">We'll personalise your feed based on these.</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {interests.map(item => (
            <button
              key={item}
              onClick={() => toggle(item)}
              className={clsx(
                'px-4 py-2 rounded-full text-sm font-medium border transition-colors',
                selected.includes(item)
                  ? 'bg-[#4f6ef7] text-white border-[#4f6ef7]'
                  : 'bg-white text-gray-700 border-[#e4e7ec] hover:border-[#4f6ef7]'
              )}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="px-6 pb-10 flex gap-3">
        <Button variant="ghost" className="flex-1 py-3" onClick={() => navigate(-1)}>Back</Button>
        <Button className="flex-1 py-3" onClick={() => navigate('/feed')} disabled={selected.length === 0}>
          Next
        </Button>
      </div>
    </div>
  )
}
