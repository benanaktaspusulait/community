import { useState } from 'react'

export function useShare() {
  const [copied, setCopied] = useState(false)

  const share = async (title: string, text: string, url = window.location.href) => {
    if (navigator.share) {
      try {
        await navigator.share({ title, text, url })
      } catch {
        // user cancelled — no-op
      }
    } else {
      // fallback: copy link to clipboard
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return { share, copied }
}
