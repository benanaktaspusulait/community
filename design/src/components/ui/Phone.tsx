/** Wraps every screen in a mobile phone shell */
export function Phone({ children }: { children: React.ReactNode }) {
  return (
    <div className="phone-stage">
      <div className="phone-frame">
        <div className="phone-device">
          <div className="phone-status">
            <span>9:41</span>
            <div className="phone-island" />
            <div className="flex items-center gap-1.5">
              <span className="tracking-[-0.18em]">|||</span>
              <span className="relative inline-block h-2.5 w-4 rounded-[4px] border border-ink/70">
                <span className="absolute inset-0.5 rounded-[2px] bg-ink" />
              </span>
            </div>
          </div>

          <div className="phone-screen">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
