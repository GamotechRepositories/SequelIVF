import React, { useState, useLayoutEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { Baby } from 'lucide-react'

export default function PageLoader() {
  const location = useLocation()
  const [loading, setLoading] = useState(true)
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
    document.documentElement.classList.add('page-loading')

    const hideHtmlPreloader = () => {
      const el = document.getElementById('initial-preloader')
      if (!el) return
      el.style.transition = 'opacity 400ms ease'
      el.style.opacity = '0'
    }

    const t1 = setTimeout(() => {
      setVisible(false)
      hideHtmlPreloader()
    }, 1400)
    const t2 = setTimeout(() => {
      setLoading(false)
      document.documentElement.classList.remove('page-loading')
      document.getElementById('initial-preloader')?.remove()
    }, 1750)

    timerRef.current = [t1, t2]

    return () => {
      clearAllTimers()
      document.documentElement.classList.remove('page-loading')
    }
  }, [location.pathname, location.search])

  if (!loading) return null

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[10000] flex items-center justify-center bg-[#FBF8FC] transition-opacity duration-300 select-none ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="flex flex-col items-center px-8">
        <p className="font-serif text-[1.75rem] font-medium tracking-[0.06em] text-[#603085] sm:text-3xl">
          Sequel IVF
        </p>

        <div className="relative mt-8 flex h-[4.5rem] w-[4.5rem] items-center justify-center">
          <div className="absolute inset-0 rounded-full border-[1.5px] border-[#EDE0E8] border-t-[#603085] border-r-[#C49F64] loader-spin" />
          <Baby className="h-7 w-7 text-[#603085]" strokeWidth={1.75} />
        </div>

        <p className="mt-6 text-[9px] font-medium uppercase tracking-[0.42em] text-[#8A6B93] sm:text-[10px]">
          Taking Generations Ahead
        </p>
      </div>
    </div>
  )
}
