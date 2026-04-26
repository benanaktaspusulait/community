import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Check, Globe2, MapPin, Search, UsersRound } from 'lucide-react'
import clsx from 'clsx'
import { Button } from '../components/ui/Button'
import { TopBar } from '../components/ui/TopBar'

const countries = [
  {
    code: 'GB',
    name: 'United Kingdom',
    subtitle: 'For Turkish speakers living across the UK',
    communities: ['Oxford residents', 'Milton Keynes residents', 'Travellers', 'Turkish restaurants'],
    active: '1.2k members',
  },
  {
    code: 'TR',
    name: 'Turkiye',
    subtitle: 'Local city groups, services, events, and trusted recommendations',
    communities: ['Istanbul locals', 'Ankara services', 'Family support', 'Job leads'],
    active: 'Opening soon',
  },
  {
    code: 'DE',
    name: 'Germany',
    subtitle: 'A country community for city-level groups and practical knowledge',
    communities: ['Berlin residents', 'Students', 'New arrivals', 'Local services'],
    active: 'Opening soon',
  },
  {
    code: 'NL',
    name: 'Netherlands',
    subtitle: 'Neighbourhood help, country-specific resources, and interest groups',
    communities: ['Amsterdam residents', 'Housing', 'Parents', 'Food spots'],
    active: 'Opening soon',
  },
]

export function CountrySelect() {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState('GB')

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase()
    if (!term) return countries
    return countries.filter(country =>
      [country.name, country.code, country.subtitle, ...country.communities]
        .some(value => value.toLowerCase().includes(term))
    )
  }, [query])

  const selectedCountry = countries.find(country => country.code === selected)

  const continueToJoin = () => {
    if (selectedCountry) {
      localStorage.setItem('community-country', selectedCountry.code)
      localStorage.setItem('community-country-name', selectedCountry.name)
    }
    navigate('/join')
  }

  return (
    <div className="flex h-full flex-col bg-[#fffdf8]">
      <TopBar title="Choose country" back />

      <div className="flex-1 overflow-y-auto px-5 pb-5 pt-6">
        <div className="mb-5 rounded-[24px] bg-ink p-5 text-white shadow-[0_18px_44px_rgba(23,33,31,0.18)]">
          <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-[16px] bg-white/12">
            <Globe2 size={21} />
          </div>
          <p className="mb-2 text-[11px] font-extrabold uppercase tracking-[0.16em] text-white/52">
            Country first
          </p>
          <h1 className="text-[28px] font-black leading-[1.02] tracking-tight">
            Pick the country community you belong to.
          </h1>
          <p className="mt-3 text-sm leading-6 text-white/66">
            Cities, neighbourhoods, traveller circles, restaurants, and topic groups live inside this country.
          </p>
        </div>

        <div className="mb-4 flex items-center gap-2 rounded-[16px] border border-border bg-white/82 px-3 py-3 shadow-inner shadow-black/[0.02]">
          <Search size={16} className="shrink-0 text-muted" />
          <input
            value={query}
            onChange={event => setQuery(event.target.value)}
            placeholder="Search country, city, or group"
            className="min-w-0 flex-1 bg-transparent text-sm font-semibold text-ink outline-none placeholder:text-muted/55"
          />
        </div>

        <div className="flex flex-col gap-3">
          {filtered.map(country => {
            const isSelected = selected === country.code
            return (
              <button
                key={country.code}
                onClick={() => setSelected(country.code)}
                className={clsx(
                  'rounded-[22px] border bg-card p-4 text-left transition-all',
                  isSelected
                    ? 'border-brand-500 shadow-[0_16px_36px_rgba(13,111,99,0.12)] ring-4 ring-brand-500/10'
                    : 'border-border hover:border-brand-100 hover:bg-brand-50/45'
                )}
              >
                <div className="mb-3 flex items-start justify-between gap-3">
                  <div>
                    <div className="mb-1 flex items-center gap-2">
                      <span className="rounded-full bg-surface px-2 py-1 text-[10px] font-black text-muted">
                        {country.code}
                      </span>
                      <h2 className="text-lg font-black tracking-tight text-ink">{country.name}</h2>
                    </div>
                    <p className="text-sm leading-5 text-muted">{country.subtitle}</p>
                  </div>
                  <span className={clsx(
                    'flex h-6 w-6 shrink-0 items-center justify-center rounded-full border',
                    isSelected ? 'border-brand-600 bg-brand-600 text-white' : 'border-border text-transparent'
                  )}>
                    <Check size={14} />
                  </span>
                </div>

                <div className="mb-3 flex items-center gap-2 text-xs font-bold text-muted">
                  <UsersRound size={14} />
                  {country.active}
                </div>

                <div className="flex flex-wrap gap-2">
                  {country.communities.map(group => (
                    <span
                      key={group}
                      className="rounded-full border border-border bg-white/72 px-2.5 py-1 text-xs font-extrabold text-muted"
                    >
                      {group}
                    </span>
                  ))}
                </div>
              </button>
            )
          })}
        </div>

        <div className="mt-5 rounded-[20px] border border-brand-100 bg-brand-50 p-4">
          <div className="flex items-start gap-3">
            <MapPin size={18} className="mt-0.5 text-brand-700" />
            <p className="text-sm leading-6 text-brand-700">
              After the country is set, members can join city groups like Oxford and Milton Keynes, plus interest groups like travellers or Turkish restaurants.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-border bg-card/92 px-5 pb-8 pt-4 backdrop-blur-xl">
        <Button className="w-full py-3.5 text-base" onClick={continueToJoin} disabled={!selectedCountry}>
          Continue in {selectedCountry?.name ?? 'selected country'}
        </Button>
      </div>
    </div>
  )
}
