import { useEffect, useState } from 'react'

export const savedLocationKey = 'community-location-name'
export const savedLocationDistrictKey = 'community-location-district'
export const listingLocationKey = 'community-listing-location'
export const roomSearchLocationKey = 'community-room-search-location'

export function useSavedLocation(fallback = '', storageKey = savedLocationKey) {
  const [location, setLocation] = useState(() => localStorage.getItem(storageKey) || fallback)

  useEffect(() => {
    const syncLocation = () => {
      setLocation(localStorage.getItem(storageKey) || fallback)
    }

    syncLocation()
    window.addEventListener('focus', syncLocation)
    window.addEventListener('storage', syncLocation)

    return () => {
      window.removeEventListener('focus', syncLocation)
      window.removeEventListener('storage', syncLocation)
    }
  }, [fallback, storageKey])

  const updateLocation = (next: string) => {
    setLocation(next)
    if (next) {
      localStorage.setItem(storageKey, next)
    } else {
      localStorage.removeItem(storageKey)
      localStorage.removeItem(`${storageKey}-district`)
    }
  }

  return [location, updateLocation] as const
}
