import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Footer({ onBookClick }) {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [subscribing, setSubscribing] = useState(false)
  const [subscribeError, setSubscribeError] = useState('')

  const handleSubscribe = async (e) => {
    e.preventDefault()
    if (!email || subscribing) return
    setSubscribing(true)
    setSubscribeError('')

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
    if (!accessKey) {
      setSubscribing(false)
      setSubscribeError('Subscription failed. Please try again.')
      return
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New Newsletter Subscriber: ${email}`,
          from_name: 'Sequeli IVF Website',
          name: 'Newsletter Subscriber',
          email: email,
          subscriber_email: email,
          form_type: 'Newsletter & Event Subscription',
          message: `A new visitor subscribed to the Sequeli IVF newsletter: ${email}`,
        }),
      })

      const data = await response.json()
      if (data.success) {
        setSubscribed(true)
        setEmail('')
        setTimeout(() => {
          setSubscribed(false)
        }, 6000)
      } else {
        setSubscribeError(data.message || 'Subscription failed. Please try again.')
      }
    } catch (err) {
      console.error('Newsletter subscription error:', err)
      setSubscribeError('Unable to connect. Please try again.')
    } finally {
      setSubscribing(false)
    }
  }

  const USEFUL_LINKS = [
    { label: 'Make Appointment', href: '/#contact', isAppointment: true },
    { label: 'About Us', href: '/about-us' },
    { label: 'Our Team', href: '/our-team' },
    { label: 'About Infertility', href: '/about-infertility' },
    { label: 'Male Infertility', href: '/male-infertility' },
    { label: 'Female Infertility', href: '/female-infertility' },
    { label: 'Fertility Services', href: '/services' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact Us', href: '/contact' },
  ]

  return (
    <footer className="relative overflow-hidden bg-[#261132] text-white">
      {/* Top divider accent */}
      <div className="w-full h-1 bg-gradient-to-r from-[#603085] via-[#C49F64] to-[#603085]" />

      <div className="relative pt-14 pb-8 sm:pt-16 sm:pb-10">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">

          {/* 4-Column Responsive Grid matching reference image */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12">

            {/* Column 1: Brand Info & Support Box */}
            <div className="flex flex-col">
              <div className="mb-5 self-start bg-white px-3.5 py-2 rounded-lg shadow-md border border-white/20">
                <img
                  src="/images/SequelIVF Fertility Logo.png"
                  alt="Sequel IVF – Taking Generations Ahead"
                  className="h-12 sm:h-14 w-auto object-contain"
                />
              </div>

              {/* Mission Statement */}
              <p className="text-white/70 text-xs sm:text-[13.5px] leading-relaxed mb-5">
                At <strong>Sequel IVF</strong>, we believe that every journey to parenthood is unique. Our mission is to provide compassionate, ethical, and personalized fertility care to individuals and couples at every stage of their reproductive journey.
              </p>

              <div className="flex items-start gap-3">
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#C49F64] shrink-0 mt-1" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                <div>
                  <span className="block text-white/55 text-[11px] font-medium uppercase tracking-wider">
                    Talk To Our Support
                  </span>
                  <a
                    href="tel:+919665278369"
                    className="block text-white font-bold hover:text-[#C49F64] transition-colors mt-0.5"
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
                    <Link
                      to={link.href}
                      onClick={() => {
                        if (link.isAppointment && onBookClick) {
                          onBookClick()
                        }
                      }}
                      className="text-white/70 hover:text-white transition-colors duration-150 flex items-center gap-2 group"
                    >
                      <span className="text-[#C49F64] group-hover:text-white font-bold text-sm transition-colors">
                        ›
                      </span>
                      <span className="group-hover:translate-x-0.5 transition-transform duration-150">
                        {link.label}
                      </span>
                    </Link>
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
                      href="mailto:sequelivf@gmail.com"
                      className="block text-white font-bold hover:text-[#C49F64] transition-colors mt-0.5"
                    >
                      sequelivf@gmail.com
                    </a>
                  </div>
                </div>

                {/* Timings */}
                <div className="flex items-start gap-3">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#C49F64] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="9" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 3" />
                  </svg>
                  <div>
                    <span className="block text-white/55 text-[11px] font-medium">Timings</span>
                    <span className="block text-white/70 mt-0.5">10:00 AM to 7:00 PM (Mon - Sat)</span>
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
                {/* Honeypot spam protection */}
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  style={{ display: 'none' }}
                  tabIndex="-1"
                  autoComplete="off"
                />

                <input
                  type="email"
                  required
                  disabled={subscribing || subscribed}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full bg-white text-gray-900 px-4 py-2.5 sm:py-3 italic text-xs sm:text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#603085] disabled:opacity-75"
                />

                <button
                  type="submit"
                  disabled={subscribing || subscribed}
                  className="w-full py-2.5 sm:py-3 px-4 bg-[#603085] hover:bg-[#4E276D] active:scale-98 text-white font-extrabold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm disabled:opacity-80"
                >
                  {subscribing ? (
                    <>
                      <svg className="animate-spin w-4 h-4 text-white" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                      </svg>
                      <span>SUBSCRIBING...</span>
                    </>
                  ) : subscribed ? (
                    <>
                      <svg viewBox="0 0 24 24" className="w-4 h-4 text-green-300" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <circle cx="12" cy="12" r="9" />
                        <path d="M8.5 12.5l2.5 2.5 5-5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="text-green-300">SUBSCRIBED!</span>
                    </>
                  ) : (
                    <>
                      <svg viewBox="0 0 24 24" className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <circle cx="12" cy="12" r="9" />
                        <path d="M8.5 12.5l2.5 2.5 5-5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>SUBSCRIBE</span>
                    </>
                  )}
                </button>

                {subscribed && (
                  <p className="text-[11.5px] text-green-300 font-medium pt-1">
                    ✓ Thank you! You have been added to our updates list.
                  </p>
                )}

                {subscribeError && (
                  <p className="text-[11.5px] text-rose-300 pt-1">
                    {subscribeError}
                  </p>
                )}
              </form>
            </div>

          </div>

          {/* Bottom Bar: Copyright & Compliance */}
          <div className="pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/50 text-xs">
            <p>© {new Date().getFullYear()} Sequel IVF Centre, Hadapsar, Pune. All rights reserved.</p>
            <div className="flex flex-wrap gap-4 sm:gap-6 justify-center">
              <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/art-act-compliance" className="hover:text-white transition-colors">ART Act Compliance</Link>
              <Link to="/pcpndt-disclaimer" className="hover:text-white transition-colors">PCPNDT Disclaimer</Link>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}
