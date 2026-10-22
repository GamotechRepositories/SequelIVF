import React, { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

export default function PageLoader() {
  const location = useLocation()
  const [loading, setLoading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(false)
  const isFirstMount = useRef(true)
  const timerRef = useRef([])

  const clearAllTimers = () => {
    timerRef.current.forEach((t) => clearTimeout(t))
    timerRef.current = []
  }

  useEffect(() => {
    clearAllTimers()

    setLoading(true)
    setVisible(true)
    setProgress(20)

    const t1 = setTimeout(() => setProgress(65), 60)
    const t2 = setTimeout(() => setProgress(100), 180)
    const t3 = setTimeout(() => setVisible(false), isFirstMount.current ? 380 : 300)
    const t4 = setTimeout(() => {
      setLoading(false)
      setProgress(0)
      if (isFirstMount.current) isFirstMount.current = false
    }, isFirstMount.current ? 620 : 500)

    timerRef.current = [t1, t2, t3, t4]

    return () => clearAllTimers()
  }, [location.pathname, location.search])

  if (!loading) return null

  return (
    <>
      {/* ─── Ultra-slim Top Progress Bar ─── */}
      <div
        className={`fixed top-0 left-0 right-0 h-[3px] z-[10001] pointer-events-none transition-opacity duration-200 ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div
          className="h-full bg-gradient-to-r from-[#603085] via-[#C49F64] to-[#603085] shadow-[0_0_8px_rgba(196,159,100,0.6)] transition-all duration-200 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* ─── Minimalist Clean Logo Loader (Pure Brand, Zero Clutter) ─── */}
      <div
        aria-hidden="true"
        className={`fixed inset-0 z-[10000] flex items-center justify-center bg-white/75 sm:bg-white/80 backdrop-blur-sm transition-opacity duration-200 select-none pointer-events-none ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="flex flex-col items-center justify-center">
          {/* Subtle spinning circular accent ring with logo */}
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border-2 border-[#F0D5E6]/60 border-t-[#603085] border-r-[#C49F64] loader-spin-cw" />
            <img
              src="/images/SequelIVF Fertility Logo.png"
              alt="Loading"
              className="w-14 sm:w-16 h-auto object-contain drop-shadow-xs"
            />
          </div>

          {/* Minimal slim gradient progress bar */}
          <div className="w-16 sm:w-20 h-1 bg-[#F0D5E6] rounded-full overflow-hidden mt-3 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#603085] via-[#C49F64] to-[#603085] rounded-full loader-progress-animated" />
          </div>
        </div>
      </div>
    </>
  )
}
