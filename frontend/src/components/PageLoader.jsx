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
    setProgress(15)

    // Stage 1: Initial quick move (250ms)
    const t1 = setTimeout(() => setProgress(45), 250)

    // Stage 2: Mid loading stage (600ms)
    const t2 = setTimeout(() => setProgress(75), 600)

    // Stage 3: Near complete (950ms)
    const t3 = setTimeout(() => setProgress(92), 950)

    // Stage 4: 100% full progress (1200ms)
    const t4 = setTimeout(() => setProgress(100), 1200)

    // Stage 5: Begin smooth fade-out (1350ms ~ 1.35 sec)
    const t5 = setTimeout(() => {
      setVisible(false)
    }, 1350)

    // Stage 6: Complete cleanup after fade-out transition (1650ms ~ 1.65 sec)
    const t6 = setTimeout(() => {
      setLoading(false)
      setProgress(0)
      if (isFirstMount.current) isFirstMount.current = false
    }, 1650)

    timerRef.current = [t1, t2, t3, t4, t5, t6]

    return () => clearAllTimers()
  }, [location.pathname, location.search])

  if (!loading) return null

  return (
    <>
      {/* ─── Ultra-slim Top Progress Bar ─── */}
      <div
        className={`fixed top-0 left-0 right-0 h-[3px] z-[10001] pointer-events-none transition-opacity duration-300 ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div
          className="h-full bg-gradient-to-r from-[#603085] via-[#C49F64] to-[#603085] shadow-[0_0_10px_rgba(196,159,100,0.8)] transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* ─── Pure CSS Luxury Spinner (No Logo / No Image Dependency) ─── */}
      <div
        aria-hidden="true"
        className={`fixed inset-0 z-[10000] flex items-center justify-center bg-white/90 sm:bg-white/95 backdrop-blur-md transition-opacity duration-300 select-none pointer-events-none ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="flex flex-col items-center justify-center">
          {/* Dual Concentric Orbital Rings */}
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
            {/* Outer Clockwise Purple-Gold Ring */}
            <div className="absolute inset-0 rounded-full border-2 border-[#F0D5E6]/70 border-t-[#603085] border-r-[#C49F64] loader-spin-cw" />
            
            {/* Inner Counter-Clockwise Gold-Accent Ring */}
            <div className="absolute inset-2 sm:inset-2.5 rounded-full border-2 border-[#F0D5E6]/50 border-b-[#C49F64] border-l-[#8B5AA8] loader-spin-ccw" />
            
            {/* Center Glowing Core Dot */}
            <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-[#603085] to-[#C49F64] shadow-[0_0_10px_rgba(196,159,100,0.9)] animate-pulse" />
          </div>

          {/* Minimal slim gradient progress bar */}
          <div className="w-16 sm:w-20 h-1 bg-[#F0D5E6] rounded-full overflow-hidden mt-3.5 relative shadow-inner">
            <div className="absolute inset-0 bg-gradient-to-r from-[#603085] via-[#C49F64] to-[#603085] rounded-full loader-progress-animated" />
          </div>
        </div>
      </div>
    </>
  )
}
