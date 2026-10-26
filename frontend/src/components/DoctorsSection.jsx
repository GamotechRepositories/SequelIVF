import React, { useRef, useState } from 'react'

export default function DoctorsSection() {
  const scrollRef = useRef(null)
  const [activeSlide, setActiveSlide] = useState(0)

  const handleScroll = (direction) => {
    if (!scrollRef.current) return
    const container = scrollRef.current
    const card = container.firstElementChild
    const cardWidth = card ? card.offsetWidth : 380
    const scrollAmount = (cardWidth + 24) * (direction === 'left' ? -1 : 1)
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' })
  }

  const handleScrollTrack = () => {
    if (!scrollRef.current) return
    const el = scrollRef.current
    const card = el.firstElementChild
    const cardWidth = card ? card.offsetWidth : 380
    const current = Math.round(el.scrollLeft / (cardWidth + 24))
    setActiveSlide(Math.min(Math.max(current, 0), DOCTORS.length - 1))
  }

  const scrollToDoctor = (index) => {
    if (!scrollRef.current) return
    const container = scrollRef.current
    const card = container.firstElementChild
    const cardWidth = card ? card.offsetWidth : 380
    container.scrollTo({ left: index * (cardWidth + 24), behavior: 'smooth' })
    setActiveSlide(index)
  }

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
      imageHover: '/images/dr_leena_patankar.jpg',
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
      imageHover: '/images/dr_monika_thavare.jpg',
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
      imageHover: '/images/dr_chirag_sharma.jpg',
    },
    {
      name: 'Emb. Sushil Waghmare',
      role: 'Founder & Lab Director | ESHRE-Certified Senior Clinical Embryologist',
      phone: '+91 9763 845 143',
      phoneHref: 'tel:+919763845143',
      email: 'sushil1june@gmail.com',
      emailHref: 'mailto:sushil1june@gmail.com',
      experience: '16 Years Experience',
      image: '/images/dr_chirag_sharma.jpg',
    },
    {
      name: 'Emb. Bharat Harpude',
      role: 'Founder & Lab Director | ESHRE-Certified Senior Clinical Embryologist',
      phone: '+91 9011 920 589',
      phoneHref: 'tel:+919011920589',
      email: 'bharat.harpudeg@gmail.com',
      emailHref: 'mailto:bharat.harpudeg@gmail.com',
      experience: '16+ Years Experience',
      image: '/images/dr_chirag_sharma.jpg',
    },
  ]

  return (
    <section id="specialist" className="bg-white py-14 sm:py-20 border-t border-[#F5E8F0] relative overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">

        {/* Section Header: Heading and text close together without large gap */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10 mb-10 sm:mb-14">
          {/* Left: Eyebrow, Heading & Line */}
          <div className="shrink-0">
            <span className="text-[#603085] font-bold text-xs sm:text-sm tracking-widest uppercase block mb-2">
              OUR PROFESSIONAL TEAM
            </span>
            {/* Dual-tone Heading: Web Purple + Gold/Silver Combo */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] leading-tight font-medium tracking-tight">
              <span className="text-[#603085]">Meet Our</span>{' '}
              <span className="text-[#C49F64]">Doctors</span>
            </h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-[#603085] to-[#C49F64] mt-3" />
          </div>

          {/* Right: Description text close to heading */}
          <div className="max-w-xl lg:pt-4">
            <p className="text-[#555555] text-sm sm:text-[15px] leading-relaxed">
              We think it’s really important that clinicians have a mixture of clinical skill and human qualities that mean you can place your trust in them.
            </p>
          </div>
        </div>

        {/* Specialists: one horizontal row on every screen size */}
        <div
          ref={scrollRef}
          onScroll={handleScrollTrack}
          className="flex flex-nowrap overflow-x-auto pb-4 pt-1 gap-4.5 sm:gap-6 scroll-smooth snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {DOCTORS.map((doc) => (
            <div
              key={doc.name}
              className="w-[84vw] max-w-[340px] sm:w-[380px] md:w-[410px] lg:w-[calc((100%-3rem)/3)] lg:max-w-none shrink-0 snap-start bg-[#F5F2F8] rounded-2xl p-4.5 sm:p-5 lg:p-4.5 xl:p-5 border border-[#F0D5E6] hover:border-[#C49F64]/70 shadow-[0_4px_16px_-4px_rgba(36,17,50,0.05)] hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row gap-4 sm:gap-4.5 items-start group"
            >
              {/* Doctor photos: cutout by default, clinic photo on hover */}
              <div className="relative w-full sm:w-36 md:w-40 lg:w-36 xl:w-40 h-52 sm:h-56 lg:h-52 xl:h-56 shrink-0 overflow-hidden rounded-xl bg-white/70 img-shine-effect">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="absolute inset-0 w-full h-full object-contain object-bottom"
                  loading="lazy"
                />
                {doc.imageHover && (
                  <img
                    src={doc.imageHover}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover object-[center_18%] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    loading="lazy"
                  />
                )}
              </div>

              {/* Doctor Details on right */}
              <div className="flex-1 min-w-0 flex flex-col justify-between h-full w-full">
                <div>
                  {/* Name: Purple by default, Gold on hover */}
                  <h3 className="font-serif text-[#603085] text-lg sm:text-xl font-medium leading-snug mb-1.5 group-hover:text-[#C49F64] transition-colors duration-300">
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

                  {/* Contact Info (Icons: Purple by default, Gold on hover) */}
                  <div className="space-y-2 text-xs text-[#4B5563]">
                    {/* Phone */}
                    <a
                      href={doc.phoneHref}
                      className="flex items-center gap-2 hover:text-[#603085] transition-colors truncate"
                    >
                      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[#603085] group-hover:text-[#C49F64] transition-colors duration-300 shrink-0" fill="currentColor">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                      </svg>
                      <span className="truncate">{doc.phone}</span>
                    </a>

                    {/* Email */}
                    <a
                      href={doc.emailHref}
                      className="flex items-center gap-2 hover:text-[#603085] transition-colors truncate"
                    >
                      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[#603085] group-hover:text-[#C49F64] transition-colors duration-300 shrink-0" fill="currentColor">
                        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                      <span className="truncate">{doc.email}</span>
                    </a>

                    {/* Experience */}
                    <div className="flex items-center gap-2 text-[#4B5563]">
                      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[#603085] group-hover:text-[#C49F64] transition-colors duration-300 shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
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

        {/* Navigation Controls: Arrows + Dots on every screen size */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
          <div className="flex items-center gap-3">
            {/* Prev Button */}
            <button
              type="button"
              onClick={() => handleScroll('left')}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white hover:bg-[#FAF0F7] text-[#241132] hover:text-[#603085] border border-[#F0D5E6] hover:border-[#603085] flex items-center justify-center shadow-xs hover:shadow-md transition-all active:scale-95 cursor-pointer"
              aria-label="Previous doctor"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center gap-2 px-3 py-2 bg-[#F5F2F8] rounded-full border border-[#F0D5E6]">
              {DOCTORS.map((doc, idx) => (
                <button
                  key={doc.name}
                  type="button"
                  onClick={() => scrollToDoctor(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    activeSlide === idx
                      ? 'w-6 bg-[#603085]'
                      : 'w-2 bg-[#E2B8D5] hover:bg-[#603085]/60'
                  }`}
                  aria-label={`Go to ${doc.name}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              type="button"
              onClick={() => handleScroll('right')}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white hover:bg-[#FAF0F7] text-[#241132] hover:text-[#603085] border border-[#F0D5E6] hover:border-[#603085] flex items-center justify-center shadow-xs hover:shadow-md transition-all active:scale-95 cursor-pointer"
              aria-label="Next doctor"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <span className="text-[11px] sm:text-xs font-semibold text-[#7C6285]">
            Scroll or use arrows to view all {DOCTORS.length} specialists
          </span>
        </div>

      </div>
    </section>
  )
}
