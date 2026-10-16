import { useEffect, useRef, useState } from 'react'

const DOCTORS = [
  {
    name: 'Dr. Leena Patankar',
    title: 'Clinical & Managing Director',
    qualification: 'Endoscopic Surgeon & Clinical Embryologist',
    speciality: 'Advanced IVF, ICSI, Complex Infertility & Endoscopy',
    exp: '24 years',
    initials: 'LP',
    color: { from: '#A21CAF', to: '#B81D76' },
  },
  {
    name: 'Dr. Monika Thavare',
    title: 'Fertility Consultant / Specialist',
    qualification: 'MD (OBGY), Fellowship in Reproductive Medicine',
    speciality: 'Ovarian Stimulation, Follicular Tracking & IUI',
    exp: '10+ years',
    initials: 'MT',
    color: { from: '#C026D3', to: '#E879F9' },
  },
  {
    name: 'Dr. Chirag Sharma',
    title: 'Reproductive Medicine Specialist',
    qualification: 'M.B.B.S, M.S. OBGY, Fellowship Reproductive Medicine',
    speciality: 'Male Factor Infertility & Clinical Embryology',
    exp: '3 years',
    initials: 'CS',
    color: { from: '#B81D76', to: '#A21CAF' },
  },
]

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
      {/* ── Doctors Section ── */}
      <section id="doctors" ref={ref} className="relative py-24 overflow-hidden"
        style={{ background: 'linear-gradient(175deg, #faf7ff 0%, #f3e8ff 100%)' }}>

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-1 grad-purple-magenta" />
          <div className="absolute top-12 right-0 w-72 h-72 rounded-full opacity-8 float-slow"
            style={{ background: 'radial-gradient(circle, #7C3AED, transparent)', transform: 'translate(40%, -30%)' }} />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="reveal section-badge mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
              Our Specialists
            </span>
            <h2 className="reveal reveal-delay-1 font-heading font-800 text-3xl sm:text-4xl lg:text-5xl text-gray-900 mt-4 mb-5">
              Meet Our{' '}
              <span className="grad-text">Expert Team</span>
            </h2>
            <p className="reveal reveal-delay-2 text-gray-600 text-lg max-w-2xl mx-auto">
              Our doctors are internationally trained, published researchers and — above all — compassionate healers dedicated to your family dream.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {DOCTORS.map((doc, i) => (
              <div
                key={doc.name}
                className={`reveal reveal-delay-${i + 1} group glass-card rounded-3xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-400`}
              >
                {/* Gradient banner */}
                <div className="h-2 w-full" style={{ background: `linear-gradient(90deg, ${doc.color.from}, ${doc.color.to})` }} />
                <div className="h-28 relative flex items-center justify-center"
                  style={{ background: `linear-gradient(135deg, ${doc.color.from}15, ${doc.color.to}10)` }}>
                  {/* Avatar */}
                  <div className="w-20 h-20 rounded-full flex items-center justify-center text-white font-heading font-800 text-2xl shadow-xl border-4 border-white"
                    style={{ background: `linear-gradient(135deg, ${doc.color.from}, ${doc.color.to})` }}>
                    {doc.initials}
                  </div>
                  {/* Exp badge */}
                  <div className="absolute top-3 right-4 px-2.5 py-1 rounded-full text-xs font-bold"
                    style={{ background: `${doc.color.from}20`, color: doc.color.from }}>
                    {doc.exp} exp.
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-heading font-700 text-xl text-gray-900 mb-0.5">{doc.name}</h3>
                  <p className="text-sm font-semibold mb-2" style={{ color: doc.color.from }}>{doc.title}</p>
                  <p className="text-xs text-gray-400 mb-4">{doc.qualification}</p>

                  <div className="flex items-start gap-2 p-3 rounded-xl" style={{ background: `${doc.color.from}08` }}>
                    <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0 mt-0.5" fill="none" stroke={doc.color.from} strokeWidth="2">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <p className="text-xs text-gray-600">{doc.speciality}</p>
                  </div>

                  <a href="#contact"
                    className="mt-5 flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:gap-3"
                    style={{ background: `linear-gradient(135deg, ${doc.color.from}, ${doc.color.to})`, color: '#fff' }}>
                    Book Appointment
                    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact / Booking Form ── */}
      <section id="contact" className="relative py-24 overflow-hidden"
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
              <span className="reveal inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-white/15 text-white border border-white/25 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-400 dot-ping" />
                Get In Touch
              </span>
              <h2 className="reveal reveal-delay-1 font-heading font-800 text-3xl sm:text-4xl lg:text-5xl text-white mb-5 leading-tight">
                Begin Your <span className="grad-text-light">Free</span> Consultation
              </h2>
              <p className="reveal reveal-delay-2 text-white/75 text-lg leading-relaxed mb-10">
                Fill out the form and our fertility coordinator will reach out within 24 hours to schedule your detailed consultation with our specialist.
              </p>

              {/* Contact details */}
              <div className="reveal reveal-delay-3 space-y-5">
                {[
                  { icon: '📞', label: 'Helpline', value: '+91 9665 279 369', href: 'tel:+919665279369' },
                  { icon: '📧', label: 'Email', value: 'info@sequelivf.com', href: 'mailto:info@sequelivf.com' },
                  { icon: '📍', label: 'Address', value: '103-104, Yash Complex, Near Bhosale Garden, Hadapsar, Pune – 411028', href: 'https://maps.google.com/?q=Sequel+IVF+Hadapsar+Pune' },
                  { icon: '🕐', label: 'Hours', value: 'Mon–Sat: 10:00 AM – 07:00 PM · Sunday: Closed', href: '#' },
                ].map((item) => (
                  <a key={item.label} href={item.href}
                    className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl shrink-0"
                      style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.18)' }}>
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-white/50 text-xs uppercase tracking-wider font-semibold">{item.label}</p>
                      <p className="text-white text-sm font-medium group-hover:text-pink-300 transition-colors">{item.value}</p>
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
