import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', treatment: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  const CONTACT_INFO = [
    {
      label: 'Helpline',
      value: '+91 9665 279 369',
      href: 'tel:+919665279369',
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
        </svg>
      ),
    },
    {
      label: 'Email',
      value: 'info@sequelivf.com',
      href: 'mailto:info@sequelivf.com',
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      label: 'Clinic Address',
      value: '103-104, Yash Complex, Near Bhosale Garden, Hadapsar, Pune – 411028',
      href: 'https://maps.google.com/?q=Sequel+IVF+Hadapsar+Pune',
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      label: 'Working Hours',
      value: 'Mon–Sat: 10:00 AM – 07:00 PM · Sunday: Closed',
      href: '#',
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="9" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 3" />
        </svg>
      ),
    },
  ]

  return (
    <section id="contact" className="bg-white py-14 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">

          {/* Left Column: Heading and Contact Information */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#603085]" />
              <span className="text-[#603085] font-bold text-xs sm:text-sm tracking-widest uppercase">
                APPOINTMENT & CONSULTATION
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] leading-tight font-medium tracking-tight mb-3">
              <span className="text-[#603085]">Begin Your</span>{' '}
              <span className="text-[#C49F64]">Free Consultation</span>
            </h2>

            {/* Accent divider line */}
            <div className="w-20 h-0.5 bg-gradient-to-r from-[#603085] to-[#C49F64] mb-5" />

            {/* Description */}
            <p className="text-[#555555] text-sm sm:text-[15px] leading-relaxed mb-7 sm:mb-9">
              Fill out the form and our fertility coordinator will reach out within 24 hours to schedule your detailed consultation with our specialist.
            </p>

            {/* Contact Details List: Seamless, unboxed list */}
            <div className="space-y-5 sm:space-y-6 pt-2">
              {CONTACT_INFO.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-11 h-11 rounded-full flex items-center justify-center shrink-0 bg-[#F5F2F8] text-[#603085] group-hover:bg-[#603085] group-hover:text-white transition-all duration-200 mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[#888888] text-xs uppercase tracking-wider font-semibold mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-[#241132] text-sm sm:text-[15px] font-semibold group-hover:text-[#603085] transition-colors leading-relaxed">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Consultation Form (Wider & Compact Card) */}
          <div className="lg:col-span-7 flex flex-col lg:items-end">
            <div className="w-full max-w-2xl lg:max-w-[650px] xl:max-w-[680px] sm:bg-[#FAF8FC] sm:rounded-2xl sm:border sm:border-[#F0D5E6] sm:shadow-md sm:shadow-[#603085]/5 p-0 sm:p-6 lg:p-7 transition-all duration-200">
              {submitted ? (
                <div className="text-center py-8 sm:py-10">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3 bg-[#603085] text-white shadow-md">
                    <svg viewBox="0 0 24 24" className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12l5 5L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#241132] mb-1.5">Thank You!</h3>
                  <p className="text-[#555555] text-xs sm:text-sm max-w-md mx-auto">
                    We have received your details. Our patient coordinator will contact you within 24 hours to confirm your consultation schedule.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5">
                  <div className="mb-2 sm:mb-3">
                    <span className="text-[#603085] font-bold text-[11px] tracking-wider uppercase block mb-0.5">
                      CONFIDENTIAL INQUIRY
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#241132] mb-0.5">
                      Book Your Consultation
                    </h3>
                    <p className="text-xs text-[#666666]">
                      Free · No obligation · 100% Confidential
                    </p>
                  </div>

                  {/* Row 1: Name and Phone */}
                  <div className="grid sm:grid-cols-2 gap-3 sm:gap-3.5">
                    <div>
                      <label className="block text-[11px] font-bold text-[#603085] mb-1 uppercase tracking-wider" htmlFor="name">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#D8C7E2] bg-white text-[#241132] text-xs sm:text-sm focus:outline-none focus:border-[#603085] focus:ring-1 focus:ring-[#603085] transition-all placeholder-gray-400"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-[#603085] mb-1 uppercase tracking-wider" htmlFor="phone">
                        Phone *
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#D8C7E2] bg-white text-[#241132] text-xs sm:text-sm focus:outline-none focus:border-[#603085] focus:ring-1 focus:ring-[#603085] transition-all placeholder-gray-400"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email and Treatment of Interest (Side-by-side for compact layout) */}
                  <div className="grid sm:grid-cols-2 gap-3 sm:gap-3.5">
                    <div>
                      <label className="block text-[11px] font-bold text-[#603085] mb-1 uppercase tracking-wider" htmlFor="email">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@email.com"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#D8C7E2] bg-white text-[#241132] text-xs sm:text-sm focus:outline-none focus:border-[#603085] focus:ring-1 focus:ring-[#603085] transition-all placeholder-gray-400"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-[#603085] mb-1 uppercase tracking-wider" htmlFor="treatment">
                        Treatment of Interest
                      </label>
                      <select
                        id="treatment"
                        name="treatment"
                        value={form.treatment}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#D8C7E2] bg-white text-[#241132] text-xs sm:text-sm focus:outline-none focus:border-[#603085] focus:ring-1 focus:ring-[#603085] transition-all cursor-pointer"
                      >
                        <option value="">Select treatment…</option>
                        <option>In-Vitro Fertilization (IVF)</option>
                        <option>Intrauterine Insemination (IUI)</option>
                        <option>ICSI (Intracytoplasmic Sperm Injection)</option>
                        <option>Egg / Sperm Freezing</option>
                        <option>Comprehensive Fertility Evaluation</option>
                        <option>Not sure — need expert advice</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Brief Message (2 rows for compactness) */}
                  <div>
                    <label className="block text-[11px] font-bold text-[#603085] mb-1 uppercase tracking-wider" htmlFor="message">
                      Brief Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={2}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us a little about your situation (optional)"
                      className="w-full px-3.5 py-2 rounded-lg border border-[#D8C7E2] bg-white text-[#241132] text-xs sm:text-sm focus:outline-none focus:border-[#603085] focus:ring-1 focus:ring-[#603085] transition-all resize-none placeholder-gray-400"
                    />
                  </div>

                  {/* Submit Button: Compact & Bold */}
                  <button
                    type="submit"
                    className="w-full py-3 sm:py-3.5 px-6 rounded-lg font-bold text-white bg-[#603085] hover:bg-[#4E276D] active:scale-[0.99] shadow-sm hover:shadow-md text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer uppercase tracking-wider"
                  >
                    <span>Request Free Consultation</span>
                    <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-4.5 sm:h-4.5" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  {/* Privacy note */}
                  <p className="text-center text-[11px] text-[#777777] pt-0.5">
                    Your information is 100% confidential and never shared.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
