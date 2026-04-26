import { useState } from 'react'
import { TopBar } from '../components/ui/TopBar'
import { Bookmark, Share2, Flag } from 'lucide-react'

const steps = [
  'Check if your landlord requires a guarantor or references.',
  'Ask for a written tenancy agreement before paying anything.',
  'Inspect the property and document any existing damage with photos.',
  'Confirm what is included in the rent (bills, council tax, internet).',
  'Check the deposit is protected in a government-approved scheme.',
  'Keep copies of all signed documents and receipts.',
]

export function ResourceDetail() {
  const [saved, setSaved] = useState(false)
  return (
    <div className="flex flex-col h-full bg-[#f8f9fb]">
      <TopBar
        title="Resource"
        back
        action={
          <button onClick={() => setSaved(s => !s)} className={saved ? 'text-[#4f6ef7]' : 'text-gray-400'}>
            <Bookmark size={18} fill={saved ? '#4f6ef7' : 'none'} />
          </button>
        }
      />
      <div className="flex-1 overflow-y-auto px-4 pt-4 pb-8 flex flex-col gap-4">
        <div className="bg-white rounded-2xl border border-[#e4e7ec] p-4 flex flex-col gap-3">
          <span className="text-[10px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full w-fit">Housing</span>
          <h2 className="text-base font-bold text-gray-900">Renting a room in the UK — checklist</h2>
          <div className="flex gap-3 text-xs text-gray-400">
            <span>Updated 3d ago</span>
            <span>•</span>
            <span>By Admin</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-[#e4e7ec] p-4 flex flex-col gap-3">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Checklist</p>
          {steps.map((s, i) => (
            <div key={i} className="flex gap-3 items-start">
              <span className="w-5 h-5 rounded-full bg-[#e0eaff] text-[#4f6ef7] text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                {i + 1}
              </span>
              <p className="text-sm text-gray-700 leading-relaxed">{s}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl border border-[#e4e7ec] p-4 flex flex-col gap-2">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Sources</p>
          <button className="text-sm text-[#4f6ef7] text-left">→ Thread: "Room contract pitfalls"</button>
          <button className="text-sm text-[#4f6ef7] text-left">→ Thread: "What to check before signing"</button>
        </div>

        <div className="flex gap-3">
          <button className="flex-1 flex items-center justify-center gap-2 border border-[#e4e7ec] rounded-xl py-2.5 text-sm text-gray-600 bg-white">
            <Share2 size={14} /> Share
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 border border-[#e4e7ec] rounded-xl py-2.5 text-sm text-gray-400 bg-white">
            <Flag size={14} /> Report
          </button>
        </div>
      </div>
    </div>
  )
}
