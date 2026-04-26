import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TopBar } from '../components/ui/TopBar'
import { Button } from '../components/ui/Button'
import { Input, Textarea } from '../components/ui/Input'
import { Camera, MapPin } from 'lucide-react'
import clsx from 'clsx'

type ListingType = 'for_sale' | 'for_rent' | 'looking_for_work' | 'service'

const listingTypes = [
  { key: 'for_sale' as ListingType, label: '🛒 For sale', desc: 'Sell an item' },
  { key: 'for_rent' as ListingType, label: '🏠 For rent', desc: 'Rent a room or property' },
  { key: 'looking_for_work' as ListingType, label: '💼 Looking for work', desc: 'Find a job or gig' },
  { key: 'service' as ListingType, label: '🔧 Offering a service', desc: 'Plumber, cleaner, tutor…' },
]

const conditions = ['New', 'Like new', 'Good', 'Fair', 'For parts']

export function CreateListing() {
  const navigate = useNavigate()
  const [type, setType] = useState<ListingType | null>(null)
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [price, setPrice] = useState('')
  const [location, setLocation] = useState('')
  const [condition, setCondition] = useState('')
  const [availability, setAvailability] = useState('')
  const [photos, setPhotos] = useState<string[]>([])

  function handlePhotoAdd(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files || [])
    files.forEach(file => {
      const url = URL.createObjectURL(file)
      setPhotos(p => p.length < 5 ? [...p, url] : p)
    })
    e.target.value = ''
  }

  if (!type) {
    return (
      <div className="flex flex-col h-full bg-white">
        <TopBar title="Create listing" back />
        <div className="flex-1 px-4 pt-6 flex flex-col gap-4">
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-1">What are you listing?</h2>
            <p className="text-sm text-gray-500">Choose the right type for better visibility.</p>
          </div>
          <div className="flex flex-col gap-3">
            {listingTypes.map(t => (
              <button
                key={t.key}
                onClick={() => setType(t.key)}
                className="flex items-center gap-4 bg-[#f8f9fb] border border-[#e4e7ec] rounded-2xl px-4 py-4 text-left hover:border-[#4f6ef7] transition-colors"
              >
                <span className="text-2xl">{t.label.split(' ')[0]}</span>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{t.label.split(' ').slice(1).join(' ')}</p>
                  <p className="text-xs text-gray-400">{t.desc}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    )
  }

  const isForSale = type === 'for_sale'
  const isForRent = type === 'for_rent'
  const isWork = type === 'looking_for_work'
  const isService = type === 'service'
  const needsPrice = isForSale || isForRent || isService
  const canPublish = title && desc && location && (!needsPrice || price)

  return (
    <div className="flex flex-col h-full bg-white">
      <TopBar title={listingTypes.find(t => t.key === type)!.label.split(' ').slice(1).join(' ')} back />

      <div className="flex-1 overflow-y-auto px-4 pt-4 pb-4 flex flex-col gap-4">

        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
            Photos {isForSale ? <span className="text-red-500">*</span> : '(optional)'}
          </label>
          <div className="flex gap-2 flex-wrap">
            {photos.map((src, i) => (
              <div key={i} className="w-20 h-20 rounded-xl overflow-hidden relative">
                <img src={src} className="w-full h-full object-cover" />
                <button
                  onClick={() => setPhotos(p => p.filter((_, j) => j !== i))}
                  className="absolute top-1 right-1 bg-black/50 text-white rounded-full w-4 h-4 text-[10px] flex items-center justify-center"
                >✕</button>
              </div>
            ))}
            {photos.length < 5 && (
              <label className="w-20 h-20 rounded-xl border-2 border-dashed border-[#e4e7ec] flex flex-col items-center justify-center gap-1 text-gray-400 hover:border-[#4f6ef7] cursor-pointer">
                <Camera size={18} />
                <span className="text-[10px]">Add photo</span>
                <input type="file" accept="image/*" multiple className="hidden" onChange={handlePhotoAdd} />
              </label>
            )}
          </div>
          {photos.length > 0 && <p className="text-[10px] text-gray-400">{photos.length}/5 photos added</p>}
        </div>

        <Input label="Title" placeholder={
          isForSale ? 'e.g. IKEA desk — good condition' :
          isForRent ? 'e.g. Double room in MK centre' :
          isWork ? 'e.g. Looking for cleaning work' :
          'e.g. Professional plumbing services'
        } value={title} onChange={setTitle} required />

        <Textarea label="Description" placeholder="Describe in detail…" value={desc} onChange={setDesc} rows={3} required />

        {/* price */}
        {needsPrice && (
          <Input
            label={isForRent ? 'Monthly rent (£)' : isService ? 'Price / rate (£)' : 'Price (£)'}
            placeholder={isForRent ? 'e.g. 650' : isService ? 'e.g. 25/hr or fixed price' : 'e.g. 45'}
            value={price}
            onChange={setPrice}
            required
          />
        )}

        {/* condition — for sale only */}
        {isForSale && (
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Condition</label>
            <div className="flex flex-wrap gap-2">
              {conditions.map(c => (
                <button
                  key={c}
                  onClick={() => setCondition(c)}
                  className={clsx(
                    'px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors',
                    condition === c ? 'bg-[#4f6ef7] text-white border-[#4f6ef7]' : 'bg-white text-gray-600 border-[#e4e7ec]'
                  )}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* availability — rent / service */}
        {(isForRent || isService) && (
          <Input
            label={isForRent ? 'Available from' : 'Availability'}
            placeholder={isForRent ? 'e.g. 1 May 2025' : 'e.g. Weekdays, evenings'}
            value={availability}
            onChange={setAvailability}
          />
        )}

        {/* work type — looking for work */}
        {isWork && (
          <div className="flex flex-col gap-3">
            <Input label="Role / type of work" placeholder="e.g. Cleaning, delivery, admin" value={price} onChange={setPrice} />
            <Input label="Work preference" placeholder="e.g. Part-time, flexible hours" value={availability} onChange={setAvailability} />
          </div>
        )}

        {/* location */}
        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
            Location <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center gap-2 bg-[#f8f9fb] rounded-xl border border-[#e4e7ec] px-3 py-2.5">
            <MapPin size={14} className="text-gray-400 shrink-0" />
            <input
              value={location}
              onChange={e => setLocation(e.target.value)}
              placeholder="e.g. MK centre, Bletchley"
              className="flex-1 bg-transparent text-sm outline-none placeholder:text-gray-400"
            />
          </div>
        </div>

        {/* contact preference */}
        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Contact preference</label>
          <div className="flex gap-2">
            {['Reply in thread', 'WhatsApp', 'Email'].map(c => (
              <button
                key={c}
                className="px-3 py-1.5 rounded-full text-xs font-semibold border bg-white text-gray-600 border-[#e4e7ec] hover:border-[#4f6ef7]"
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="px-4 pb-8 flex gap-3 border-t border-[#e4e7ec] pt-3 bg-white">
        <Button variant="secondary" className="flex-1 py-3">Save draft</Button>
        <Button className="flex-1 py-3" disabled={!canPublish} onClick={() => navigate('/thread')}>
          Publish listing
        </Button>
      </div>
    </div>
  )
}
