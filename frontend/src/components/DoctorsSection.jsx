import React from 'react'

export default function DoctorsSection() {
  const DOCTORS = [
    {
      name: 'Dr. Leena Patankar',
      role: 'Clinical & Managing Director | Fertility Specialist | Endoscopic Surgeon | Clinical Embryologist',
      phone: '+91-9665 279 369',
      phoneHref: 'tel:+919665279369',
      email: 'info@sequelivf.com',
      emailHref: 'mailto:info@sequelivf.com',
      experience: '24 Years Experience',
      image: '/images/285b926543910d790975aa5d1826a1c0-removebg-preview.png',
    },
    {
      name: 'Dr. Monika Thavare',
      role: 'Fertility Consultant & Specialist | MD (OBGY), Fellowship in Reproductive Medicine',
      phone: '+91 9763 845 143',
      phoneHref: 'tel:+919763845143',
      email: 'info@sequelivf.com',
      emailHref: 'mailto:info@sequelivf.com',
      experience: '10+ Years Experience',
      image: '/images/9bc0ceb83d86f8767d2f02151de1ee7c-removebg-preview.png',
    },
    {
      name: 'Dr. Chirag Sharma',
      role: 'Reproductive Medicine Specialist | M.B.B.S, M.S. OBGY, Fellowship Reproductive Medicine',
      phone: '+91-9665 279 369',
      phoneHref: 'tel:+919665279369',
      email: 'info@sequelivf.com',
      emailHref: 'mailto:info@sequelivf.com',
      experience: '3+ Years Experience',
      image: '/images/ee463ed89c8028009bb195f9798676ec-removebg-preview.png',
    },
  ]

  return (
    <section id="specialist" className="bg-white py-14 sm:py-20 border-t border-[#F5E8F0] relative overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">

        {/* Section Header: Heading and text close together without large gap */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10 mb-10 sm:mb-14">
          {/* Left: Eyebrow, Heading & Line */}
          <div className="shrink-0">
            <span className="text-[#800080] font-bold text-xs sm:text-sm tracking-widest uppercase block mb-2">
              OUR PROFESSIONAL TEAM
            </span>
            {/* Dual-tone Heading: Web Purple + Gold/Silver Combo */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] leading-tight font-medium tracking-tight">
              <span className="text-[#A21CAF]">Meet Our</span>{' '}
              <span className="text-[#C49F64]">Doctors</span>
            </h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-[#A21CAF] to-[#C49F64] mt-3" />
          </div>

          {/* Right: Description text close to heading */}
          <div className="max-w-xl lg:pt-4">
            <p className="text-[#555555] text-sm sm:text-[15px] leading-relaxed">
              We think it’s really important that clinicians have a mixture of clinical skill and human qualities that mean you can place your trust in them.
            </p>
          </div>
        </div>

        {/* 3 Doctors Grid (Horizontal scroll on mobile, responsive grid on md+) */}
        <div className="flex overflow-x-auto pb-4 pt-1 gap-4.5 sm:gap-6 snap-x snap-mandatory scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-2 xl:grid-cols-3 md:overflow-visible md:pb-0">
          {DOCTORS.map((doc) => (
            <div
              key={doc.name}
              className="w-[84vw] max-w-[330px] shrink-0 snap-center md:w-auto md:max-w-none md:shrink bg-[#FAF2F7] rounded-2xl p-5 sm:p-6 border border-[#F0D5E6] hover:border-[#C49F64]/70 shadow-[0_4px_16px_-4px_rgba(36,17,50,0.05)] hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row gap-4.5 sm:gap-5 items-start group"
            >
              {/* Doctor Avatar / Image on left (Direct cutout, no inner card/box) */}
              <div className="relative w-full sm:w-36 md:w-40 lg:w-40 h-48 sm:h-56 shrink-0 overflow-hidden">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Doctor Details on right */}
              <div className="flex-1 min-w-0 flex flex-col justify-between h-full w-full">
                <div>
                  {/* Name */}
                  <h3 className="font-serif text-[#C49F64] text-lg sm:text-xl font-medium leading-snug mb-1.5 group-hover:text-[#A21CAF] transition-colors">
                    {doc.name}
                  </h3>

                  {/* Role / Qualifications */}
                  <p className="text-[#6B7280] text-xs leading-relaxed mb-3">
                    {doc.role}
                  </p>
                </div>

                <div>
                  {/* Subtle Divider Line */}
                  <div className="border-b border-[#F5E6F0] mb-3" />

                  {/* Contact Info (No Read More button) */}
                  <div className="space-y-2 text-xs text-[#4B5563]">
                    {/* Phone */}
                    <a
                      href={doc.phoneHref}
                      className="flex items-center gap-2 hover:text-[#800080] transition-colors truncate"
                    >
                      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[#C49F64] shrink-0" fill="currentColor">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                      </svg>
                      <span className="truncate">{doc.phone}</span>
                    </a>

                    {/* Email */}
                    <a
                      href={doc.emailHref}
                      className="flex items-center gap-2 hover:text-[#800080] transition-colors truncate"
                    >
                      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[#C49F64] shrink-0" fill="currentColor">
                        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                      <span className="truncate">{doc.email}</span>
                    </a>

                    {/* Experience */}
                    <div className="flex items-center gap-2 text-[#4B5563]">
                      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[#C49F64] shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 6v6l4 2" strokeLinecap="round" />
                      </svg>
                      <span>{doc.experience}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Swipe Hint */}
        <div className="flex items-center justify-center gap-1.5 mt-3 md:hidden">
          <span className="text-[11px] font-medium text-[#7C6285] flex items-center gap-1">
            <span>Swipe horizontally to view all doctors</span>
            <svg className="w-3.5 h-3.5 animate-pulse text-[#A21CAF]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>

      </div>
    </section>
  )
}
