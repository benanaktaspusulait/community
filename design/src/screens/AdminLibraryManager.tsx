import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Archive, BookOpenCheck, Edit3, Plus, Send } from 'lucide-react'
import clsx from 'clsx'
import { TopBar } from '../components/ui/TopBar'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { Input, Textarea } from '../components/ui/Input'

const resources = [
  { title: 'Renting a room in the UK - checklist', group: 'Housing', status: 'Published', tone: 'published' },
  { title: 'GP registration guide', group: 'Health', status: 'Draft', tone: 'draft' },
  { title: 'Driver licence change steps', group: 'Legal', status: 'Needs update', tone: 'warning' },
]

const statusStyles: Record<string, string> = {
  published: 'bg-emerald-100 text-emerald-800 ring-emerald-200',
  draft: 'bg-stone-100 text-stone-700 ring-stone-200',
  warning: 'bg-amber-100 text-amber-800 ring-amber-200',
}

export function AdminLibraryManager() {
  const navigate = useNavigate()
  const [draftOpen, setDraftOpen] = useState(false)

  return (
    <div className="flex h-full flex-col bg-[#f8f1e7]">
      <TopBar title="Library manager" back />

      <div className="flex-1 overflow-y-auto px-4 pb-8 pt-4">
        <div className="brand-gradient mb-4 rounded-[28px] p-5 text-white">
          <BookOpenCheck size={24} className="text-white/78" />
          <h1 className="mt-4 text-2xl font-black leading-[0.95] tracking-[-0.05em]">
            Turn repeated answers into golden knowledge.
          </h1>
          <p className="mt-3 text-xs leading-5 text-white/72">
            Draft, publish, archive, and link source threads so old group knowledge does not disappear.
          </p>
        </div>

        <Button className="mb-4 w-full py-3" onClick={() => setDraftOpen(open => !open)}>
          <Plus size={16} /> Create knowledge card
        </Button>

        {draftOpen && (
          <Card className="mb-4 flex flex-col gap-3">
            <Input label="Title" placeholder="e.g. School admissions checklist" />
            <Textarea label="Checklist / answer" placeholder="Write the reusable answer..." rows={4} />
            <Input label="Source thread" placeholder="Paste thread link or search title" />
            <div className="flex gap-2">
              <Button variant="secondary" className="flex-1">Save draft</Button>
              <Button className="flex-1">Submit</Button>
            </div>
          </Card>
        )}

        <div className="flex flex-col gap-3">
          {resources.map(item => (
            <Card key={item.title} className="flex flex-col gap-3">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className={clsx('rounded-full px-2 py-1 text-[10px] font-black ring-1', statusStyles[item.tone])}>
                    {item.status}
                  </span>
                  <p className="mt-3 text-sm font-black leading-snug tracking-[-0.02em] text-ink">{item.title}</p>
                  <p className="mt-1 text-xs text-muted">{item.group} - 2 source threads</p>
                </div>
                <button onClick={() => navigate('/resource')} className="rounded-2xl bg-brand-50 p-3 text-brand-700">
                  <Edit3 size={17} />
                </button>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button className="flex items-center justify-center gap-2 rounded-2xl border border-border bg-white/70 py-2 text-xs font-extrabold text-muted">
                  <Archive size={14} /> Archive
                </button>
                <button className="flex items-center justify-center gap-2 rounded-2xl bg-ink py-2 text-xs font-extrabold text-white">
                  <Send size={14} /> Publish
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
