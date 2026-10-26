import React from 'react'
import ConsultationForm from './ConsultationForm.jsx'

export default function Contact() {

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
      value: 'sequelivf@gmail.com',
      href: 'mailto:sequelivf@gmail.com',
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

          {/* Right Column: Consultation Form (Matching Contact Us page) */}
          <div className="lg:col-span-7 flex flex-col lg:items-end">
            <div className="w-full max-w-2xl lg:max-w-[650px] xl:max-w-[680px]">
              <ConsultationForm />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
