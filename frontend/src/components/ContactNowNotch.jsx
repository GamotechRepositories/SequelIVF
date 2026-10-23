import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function ContactNowNotch() {
  const location = useLocation()
  const navigate = useNavigate()

  const handleContactClick = (e) => {
    e.preventDefault()
    if (location.pathname === '/contact' || location.pathname === '/contact-us') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      navigate('/contact')
    }
  }

  return (
    <>
      {/* Sticky Bottom Notch "Contact Now" Tab - Flush to Bottom of Screen */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 z-50 pointer-events-auto">
        <Link
          id="bottom-contact-now-tab"
          to="/contact"
          onClick={handleContactClick}
          aria-label="Contact Sequel IVF Clinic Now"
          className="relative group inline-flex items-center justify-center w-[210px] sm:w-[260px] h-11 sm:h-12 select-none cursor-pointer"
        >
          {/* Trapezoid Tab SVG Background with Rounded Top Corners */}
          <svg
            className="absolute inset-0 w-full h-full drop-shadow-[0_-4px_12px_rgba(96,48,133,0.3)] transition-all duration-200 group-hover:drop-shadow-[0_-6px_16px_rgba(96,48,133,0.45)]"
            viewBox="0 0 260 44"
            preserveAspectRatio="none"
            fill="none"
          >
            <path
              d="M 0 44 L 20 8 C 23 3, 27 0, 34 0 L 226 0 C 233 0, 237 3, 240 8 L 260 44 Z"
              className="fill-[#603085] group-hover:fill-[#4E276D] transition-colors duration-200"
            />
          </svg>

          {/* Tab Label */}
          <span className="relative z-10 font-bold text-white text-[14px] sm:text-[15px] tracking-wide whitespace-nowrap mb-0.5 group-hover:scale-102 transition-transform duration-200">
            Contact Now
          </span>
        </Link>
      </div>

      {/* Right Corner: Floating WhatsApp & Call Buttons */}
      <div className="fixed bottom-4 sm:bottom-6 right-3 sm:right-6 z-50 flex flex-col items-end gap-2.5 sm:gap-3">
        {/* WhatsApp */}
        <a
          href="https://wa.me/919665279369?text=Hello%20Sequel%20IVF%20Clinic,%20I%20would%20like%20to%20book%20a%20consultation"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="group w-11 h-11 sm:w-13 sm:h-13 rounded-full flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all duration-300"
          style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>

        {/* Call button */}
        <a
          href="tel:+919665279369"
          aria-label="Call Sequeli IVF clinic"
          className="group w-11 h-11 sm:w-13 sm:h-13 rounded-full flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all duration-300"
          style={{ background: 'linear-gradient(135deg, #603085, #B81D76)' }}
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
          </svg>
        </a>
      </div>
    </>
  )
}
