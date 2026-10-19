import { useEffect, useRef, useState } from 'react'

export default function Contact() {
  const ref = useRef(null)
  const [form, setForm] = useState({ name: '', phone: '', email: '', treatment: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('is-visible')),
      { threshold: 0.08 }
    )
    ref.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* ── Contact / Booking Form ── */}
      <section id="contact" ref={ref} className="relative py-24 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1e003a 0%, #3A006F 35%, #5B0EA6 70%, #8B1A6B 100%)' }}>

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-20 float-slow"
            style={{ background: 'radial-gradient(circle, #E91E8C, transparent)' }} />
          <div className="absolute -bottom-16 -left-16 w-80 h-80 rounded-full opacity-15 float-gentle"
            style={{ background: 'radial-gradient(circle, #7C3AED, transparent)' }} />
          <div className="absolute top-20 left-16 w-40 h-40 dots-pattern opacity-20" />
          <div className="absolute bottom-20 right-16 w-32 h-32 dots-pattern opacity-15" />
          {/* Chevrons decoration */}
          <div className="absolute top-1/2 left-8 text-white/10 text-7xl font-light select-none rotate-90">{'›'}</div>
          <div className="absolute top-1/2 right-8 text-white/10 text-7xl font-light select-none -rotate-90">{'‹'}</div>
        </div>

        <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-start">

            {/* Left info */}
            <div>
              <h2 className="reveal reveal-delay-1 font-heading font-800 text-3xl sm:text-4xl lg:text-5xl text-white mb-5 leading-tight">
                Begin Your <span className="grad-text-light">Free</span> Consultation
              </h2>
              <p className="reveal reveal-delay-2 text-white/75 text-lg leading-relaxed mb-10">
                Fill out the form and our fertility coordinator will reach out within 24 hours to schedule your detailed consultation with our specialist.
              </p>

              {/* Contact details */}
              <div className="reveal reveal-delay-3 space-y-4 sm:space-y-5">
                {[
                  {
                    label: 'Helpline',
                    value: '+91 9665 279 369',
                    href: 'tel:+919665279369',
                    icon: (
                      <svg viewBox="0 0 24 24" className="w-5 h-5 text-white group-hover:text-white" fill="currentColor">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                      </svg>
                    ),
                  },
                  {
                    label: 'Email',
                    value: 'info@sequelivf.com',
                    href: 'mailto:info@sequelivf.com',
                    icon: (
                      <svg viewBox="0 0 24 24" className="w-5 h-5 text-white group-hover:text-white" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                    ),
                  },
                  {
                    label: 'Address',
                    value: '103-104, Yash Complex, Near Bhosale Garden, Hadapsar, Pune – 411028',
                    href: 'https://maps.google.com/?q=Sequel+IVF+Hadapsar+Pune',
                    icon: (
                      <svg viewBox="0 0 24 24" className="w-5 h-5 text-white group-hover:text-white" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                      </svg>
                    ),
                  },
                  {
                    label: 'Hours',
                    value: 'Mon–Sat: 10:00 AM – 07:00 PM · Sunday: Closed',
                    href: '#',
                    icon: (
                      <svg viewBox="0 0 24 24" className="w-5 h-5 text-white group-hover:text-white" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="9"/>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 3"/>
                      </svg>
                    ),
                  },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0 bg-white/12 border border-white/20 group-hover:bg-[#A21CAF] group-hover:border-[#E8C586]/40 transition-all duration-300 shadow-sm">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-white/60 text-xs uppercase tracking-wider font-semibold">{item.label}</p>
                      <p className="text-white text-sm font-medium group-hover:text-pink-200 transition-colors">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Right form */}
            <div className="reveal-right glass-card rounded-3xl p-8 shadow-2xl">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 pulse-glow"
                    style={{ background: 'linear-gradient(135deg, #5B0EA6, #C2185B)' }}>
                    <svg viewBox="0 0 24 24" className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12l5 5L19 7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="font-heading font-700 text-2xl text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-gray-600">We'll contact you within 24 hours to confirm your consultation.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="font-heading font-800 text-2xl text-gray-900 mb-1">Book Your Consultation</h3>
                    <p className="text-gray-500 text-sm">Free · No obligation · Confidential</p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wider" htmlFor="name">Full Name *</label>
                      <input
                        id="name" name="name" type="text" required
                        value={form.name} onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all placeholder-gray-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wider" htmlFor="phone">Phone *</label>
                      <input
                        id="phone" name="phone" type="tel" required
                        value={form.phone} onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all placeholder-gray-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wider" htmlFor="email">Email</label>
                    <input
                      id="email" name="email" type="email"
                      value={form.email} onChange={handleChange}
                      placeholder="you@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all placeholder-gray-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wider" htmlFor="treatment">Treatment of Interest</label>
                    <select
                      id="treatment" name="treatment"
                      value={form.treatment} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select treatment…</option>
                      <option>IVF</option>
                      <option>IUI</option>
                      <option>ICSI</option>
                      <option>Egg Freezing</option>
                      <option>Donor Egg / Sperm</option>
                      <option>Not sure — need advice</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wider" htmlFor="message">Brief Message</label>
                    <textarea
                      id="message" name="message" rows={3}
                      value={form.message} onChange={handleChange}
                      placeholder="Tell us a little about your situation (optional)"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none placeholder-gray-400"
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full justify-center text-base py-4">
                    Request Free Consultation
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>

                  <p className="text-center text-xs text-gray-400">
                    Your information is 100% confidential and never shared.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
