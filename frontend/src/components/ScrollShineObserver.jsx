import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * ScrollShineObserver
 * Active strictly on mobile / Android / touch screens where mouse cursor does not exist.
 * On desktop view, this observer is completely dormant, so animations only trigger on hover.
 */
export default function ScrollShineObserver() {
  const location = useLocation()

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return

    const checkIsMobileOrTouch = () => {
      const isCoarse = window.matchMedia?.('(pointer: coarse)').matches
      const isHoverNone = window.matchMedia?.('(hover: none)').matches
      const isSmallScreen = window.innerWidth < 1024
      return isCoarse || isHoverNone || isSmallScreen
    }

    // On desktop, keep dormant so it only animates on hover
    if (!checkIsMobileOrTouch()) {
      document.querySelectorAll('.shine-active').forEach((el) => el.classList.remove('shine-active'))
      return
    }

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('shine-active')
          // Trigger DOM reflow to cleanly restart the shine sweep
          void entry.target.offsetWidth
          entry.target.classList.add('shine-active')
        } else {
          entry.target.classList.remove('shine-active')
        }
      })
    }

    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.18,
    })

    const observeAll = () => {
      if (!checkIsMobileOrTouch()) return
      const targets = document.querySelectorAll('.img-shine-effect, .service-card-frame')
      targets.forEach((el) => observer.observe(el))
    }

    observeAll()
    const timer = setTimeout(observeAll, 250)

    const mutObserver = new MutationObserver(() => {
      observeAll()
    })

    mutObserver.observe(document.body, { childList: true, subtree: true })

    const handleResize = () => {
      if (!checkIsMobileOrTouch()) {
        observer.disconnect()
        document.querySelectorAll('.shine-active').forEach((el) => el.classList.remove('shine-active'))
      } else {
        observeAll()
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('resize', handleResize)
      observer.disconnect()
      mutObserver.disconnect()
    }
  }, [location.pathname])

  return null
}
