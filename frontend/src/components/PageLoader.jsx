import React, { useState, useLayoutEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

export default function PageLoader() {
  const location = useLocation()
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(15)
  const [visible, setVisible] = useState(true)
  const timerRef = useRef([])

  const clearAllTimers = () => {
    timerRef.current.forEach((t) => clearTimeout(t))
    timerRef.current = []
  }

  useLayoutEffect(() => {
    clearAllTimers()

    setLoading(true)
    setVisible(true)
    setProgress(15)
    document.documentElement.classList.add('page-loading')

    const hideHtmlPreloader = () => {
      const el = document.getElementById('initial-preloader')
      if (!el) return
      el.style.transition = 'opacity 300ms ease'
      el.style.opacity = '0'
    }

    const t1 = setTimeout(() => setProgress(45), 250)
    const t2 = setTimeout(() => setProgress(75), 600)
    const t3 = setTimeout(() => setProgress(92), 950)
    const t4 = setTimeout(() => setProgress(100), 1200)
    const t5 = setTimeout(() => {
      setVisible(false)
      hideHtmlPreloader()
    }, 1350)
    const t6 = setTimeout(() => {
      setLoading(false)
      setProgress(0)
      document.documentElement.classList.remove('page-loading')
      document.getElementById('initial-preloader')?.remove()
    }, 1650)

    timerRef.current = [t1, t2, t3, t4, t5, t6]

    return () => {
      clearAllTimers()
      document.documentElement.classList.remove('page-loading')
    }
  }, [location.pathname, location.search])

  if (!loading) return null

  return (
    <>
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

      <div
        aria-hidden="true"
        className={`fixed inset-0 z-[10000] flex items-center justify-center bg-white transition-opacity duration-300 select-none ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-2 border-[#F0D5E6]/70 border-t-[#603085] border-r-[#C49F64] loader-spin-cw" />
          <div className="absolute inset-2 sm:inset-2.5 rounded-full border-2 border-[#F0D5E6]/50 border-b-[#C49F64] border-l-[#8B5AA8] loader-spin-ccw" />
          <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-[#603085] to-[#C49F64] shadow-[0_0_10px_rgba(196,159,100,0.9)] animate-pulse" />
        </div>
      </div>
    </>
  )
}
