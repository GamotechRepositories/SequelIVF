import React, { useState } from 'react'

export default function Footer({ onBookClick }) {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (!email) return
    setSubscribed(true)
    setTimeout(() => {
      setEmail('')
      setSubscribed(false)
    }, 4000)
  }

  const USEFUL_LINKS = [
    { label: 'Make Appointment', href: '#contact' },
    { label: 'Customer Services', href: '#treatments' },
    { label: 'About Company', href: '#about' },
    { label: 'Meet Our Experts', href: '#specialist' },
    { label: 'Our Case Studies', href: '#faq' },
    { label: 'Contact Us', href: '#contact' },
    { label: 'Customer Review', href: '#about' },
  ]

  return (
    <footer className="relative overflow-hidden bg-[#18181B] text-white">
      {/* Top divider accent */}
      <div className="w-full h-1 bg-gradient-to-r from-[#A21CAF] via-[#C49F64] to-[#A21CAF]" />

      <div className="relative pt-14 pb-8 sm:pt-16 sm:pb-10">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">

          {/* 4-Column Responsive Grid matching reference image */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12">

            {/* Column 1: Brand Info & Support Box */}
            <div className="flex flex-col">
              {/* Logo Card */}
              <div className="mb-5 inline-block self-start bg-white rounded-lg p-2.5 shadow-md">
                <img
                  src="/images/Firefly.png"
                  alt="Sequel IVF – Taking Generations Ahead"
                  className="h-9.5 w-auto object-contain"
                />
              </div>

              {/* Mission Statement */}
              <p className="text-white/70 text-xs sm:text-[13.5px] leading-relaxed mb-6">
                At <strong>Sequel IVF</strong>, we believe that every journey to parenthood is unique. Our mission is to provide compassionate, ethical, and personalized fertility care to individuals and couples at every stage of their reproductive journey.
              </p>

              {/* Talk To Our Support Box */}
              <div className="mt-auto bg-[#232328] border border-white/10 rounded-xl p-3.5 sm:p-4 flex items-center gap-3.5 max-w-[280px]">
                <div className="w-11 h-11 rounded-full bg-[#C49F64] flex items-center justify-center text-white shrink-0 shadow-sm relative">
                  <div className="flex flex-col items-center justify-center leading-none">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 mb-0.5" fill="currentColor">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                    <span className="text-[9px] font-extrabold tracking-tighter">24</span>
                  </div>
                </div>
                <div>
                  <span className="block text-white/70 text-[11px] font-semibold uppercase tracking-wider">
                    Talk To Our Support
                  </span>
                  <a
                    href="tel:+919665278369"
                    className="block text-white font-extrabold text-sm sm:text-[15px] hover:text-[#C49F64] transition-colors leading-tight mt-0.5"
                  >
                    +91-9665278369
                  </a>
                </div>
              </div>
            </div>

            {/* Column 2: USEFUL LINKS */}
            <div>
              <h4 className="font-heading font-extrabold text-white text-[15px] sm:text-base tracking-wider uppercase mb-2">
                USEFUL LINKS
              </h4>
              <div className="w-12 h-0.5 bg-[#C49F64] mb-5" />

              <ul className="space-y-2.5 text-xs sm:text-[13.5px]">
                {USEFUL_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={() => {
                        if (link.label === 'Make Appointment' && onBookClick) {
                          onBookClick()
                        }
                      }}
                      className="text-white/70 hover:text-white transition-colors duration-150 flex items-center gap-2 group"
                    >
                      <span className="text-[#A21CAF] group-hover:text-[#C49F64] font-bold text-sm transition-colors">
                        ›
                      </span>
                      <span className="group-hover:translate-x-0.5 transition-transform duration-150">
                        {link.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: GET IN TOUCH */}
            <div>
              <h4 className="font-heading font-extrabold text-white text-[15px] sm:text-base tracking-wider uppercase mb-2">
                GET IN TOUCH
              </h4>
              <div className="w-12 h-0.5 bg-[#C49F64] mb-5" />

              <div className="space-y-4 text-xs sm:text-[13.5px]">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#C49F64] shrink-0 mt-1" fill="currentColor">
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                  </svg>
                  <p className="text-white/70 leading-relaxed">
                    103, 104, First Floor, Yash Complex, Survey No. 161/7, Bhosale Garden, Hadapsar, Pune, Maharashtra – 411028.
                  </p>
                </div>

                {/* Support 24/7 Phone */}
                <div className="flex items-start gap-3">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#C49F64] shrink-0 mt-1" fill="currentColor">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  <div>
                    <span className="block text-white/55 text-[11px] font-medium">We Support 24/7</span>
                    <a
                      href="tel:+919665279369"
                      className="block text-white font-bold hover:text-[#C49F64] transition-colors mt-0.5"
                    >
                      +91-9665 279 369
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#C49F64] shrink-0 mt-1" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                  <div>
                    <span className="block text-white/55 text-[11px] font-medium">Mail Us</span>
                    <a
                      href="mailto:info@sequelivf.com"
                      className="block text-white font-bold hover:text-[#C49F64] transition-colors mt-0.5"
                    >
                      info@sequelivf.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 4: NEWSLETTER & EVENT */}
            <div>
              <h4 className="font-heading font-extrabold text-white text-[15px] sm:text-base tracking-wider uppercase mb-2">
                NEWSLETTER & EVENT
              </h4>
              <div className="w-12 h-0.5 bg-[#C49F64] mb-5" />

              <p className="text-white/70 text-xs sm:text-[13px] leading-relaxed mb-4">
                Receive resources & tools that can help you prepare for the future. You can cancel anytime.
              </p>

              {/* Newsletter Form */}
              <form onSubmit={handleSubscribe} className="space-y-2 mb-4">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="w-full bg-white text-gray-900 px-4 py-2.5 sm:py-3 italic text-xs sm:text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#800080]"
                />

                <button
                  type="submit"
                  className="w-full py-2.5 sm:py-3 px-4 bg-[#800080] hover:bg-[#680068] active:scale-98 text-white font-extrabold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M8.5 12.5l2.5 2.5 5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>{subscribed ? 'SUBSCRIBED!' : 'SUBSCRIBE'}</span>
                </button>
              </form>

              {/* Timings */}
              <div className="flex items-start gap-2.5 pt-1 text-xs text-white/80">
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#C49F64] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="9" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 3" />
                </svg>
                <div>
                  <span className="block font-semibold text-white/95">Timings</span>
                  <span className="block text-white/70 mt-0.5">10:00 AM to 7:00 PM (Mon - Sat)</span>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Bar: Copyright & Compliance */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/50 text-xs">
            <p>© {new Date().getFullYear()} Sequel IVF Centre, Hadapsar, Pune. All rights reserved.</p>
            <div className="flex flex-wrap gap-4 sm:gap-6 justify-center">
              <a href="#about" className="hover:text-white/80 transition-colors">Privacy Policy</a>
              <a href="#regulated" className="hover:text-white/80 transition-colors">ART Act Compliance</a>
              <a href="#regulated" className="hover:text-white/80 transition-colors">PCPNDT Disclaimer</a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}
