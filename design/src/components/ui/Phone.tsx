/** Wraps every screen in a mobile phone shell */
export function Phone({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div
        className="relative bg-white rounded-[40px] shadow-2xl overflow-hidden"
        style={{ width: 390, height: 844 }}
      >
        {/* status bar */}
        <div className="flex items-center justify-between px-6 pt-3 pb-1 text-xs font-semibold text-gray-800 bg-white">
          <span>9:41</span>
          <div className="w-28 h-6 bg-black rounded-full absolute left-1/2 -translate-x-1/2 top-2" />
          <div className="flex gap-1 items-center">
            <span>●●●</span>
          </div>
        </div>
        {/* screen content */}
        <div className="h-full overflow-y-auto pb-20">{children}</div>
      </div>
    </div>
  )
}
