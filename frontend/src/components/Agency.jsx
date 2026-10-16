import { useEffect, useRef } from 'react'

const ITEMS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'IVF Treatment',
    desc: 'In vitro fertilisation using the most advanced embryo culture techniques to maximise your chances of success.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Personalised Care',
    desc: 'Every journey is unique. We craft individual treatment protocols tailored to your specific medical profile.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'ICMR Certified',
    desc: 'Fully accredited by ICMR and NABH. Our lab meets international standards for quality and safety.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Expert Team',
    desc: 'Our panel of reproductive endocrinologists, embryologists and counsellors bring decades of combined experience.',
  },
]

export default function Agency() {
  const ref = useRef(null)

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('is-visible')),
      { threshold: 0.12 }
    )
    ref.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <section id="about" ref={ref} className="relative py-24 bg-white overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-1 grad-purple-magenta" />
        <div className="absolute top-12 right-0 w-80 h-80 rounded-full opacity-5 float-slow"
          style={{ background: 'radial-gradient(circle, #5B0EA6, transparent)' }} />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-5 float-gentle"
          style={{ background: 'radial-gradient(circle, #C2185B, transparent)' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="reveal section-badge mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
            Why Choose Us
          </span>
          <h2 className="reveal reveal-delay-1 font-heading font-800 text-3xl sm:text-4xl lg:text-5xl text-gray-900 mt-4 mb-5 leading-tight">
            Science. Compassion.{' '}
            <span className="grad-text">Results.</span>
          </h2>
          <p className="reveal reveal-delay-2 text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            At Sequeli IVF, we combine cutting-edge reproductive technology with deeply human care — because your dream of parenthood deserves both.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ITEMS.map((item, i) => (
            <div
              key={item.title}
              className={`reveal reveal-delay-${i + 1} group glass-card rounded-2xl p-7 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-purple-100 transition-all duration-300 cursor-default`}
            >
              <div className="mb-5 inline-flex w-14 h-14 items-center justify-center rounded-2xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300"
                style={{ background: 'linear-gradient(135deg, #5B0EA6, #C2185B)' }}>
                {item.icon}
              </div>
              <h3 className="font-heading font-700 text-lg text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>

              {/* Bottom accent line */}
              <div className="mt-5 h-0.5 w-0 rounded-full group-hover:w-full transition-all duration-500"
                style={{ background: 'linear-gradient(90deg, #5B0EA6, #C2185B)' }} />
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="reveal reveal-delay-5 mt-16 rounded-3xl overflow-hidden relative">
          <div className="grad-purple-magenta p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Decorative dots */}
            <div className="absolute right-0 top-0 w-48 h-48 dots-pattern opacity-20" />
            <div className="absolute left-0 bottom-0 w-32 h-32 dots-pattern opacity-15" />

            <div className="relative text-center sm:text-left">
              <p className="text-white/70 text-sm uppercase tracking-widest font-semibold mb-1">Ready to start?</p>
              <h3 className="font-heading font-800 text-2xl sm:text-3xl text-white">Begin Your Fertility Journey Today</h3>
            </div>
            <div className="relative flex flex-wrap gap-3 shrink-0">
              <a href="tel:+919999999999" className="btn-outline-white text-sm px-6 py-3">
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                Call Now
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white font-heading font-700 text-sm text-purple-800 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200">
                Book Appointment
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
