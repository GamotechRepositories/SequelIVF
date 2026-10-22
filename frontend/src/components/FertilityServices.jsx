import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

export default function FertilityServices({ onBookClick }) {
  const scrollRef = useRef(null)
  const [activeSlide, setActiveSlide] = useState(0)

  const SERVICES = [
    {
      id: 'ivf',
      slug: 'ivf',
      image: 'https://res.cloudinary.com/exmvyjeq/image/upload/v1792655017/024cc721-d945-4dd0-bd03-0df90c20a63e.png',
      title: 'In-Vitro Fertilization (IVF) — Embrace Hope',
      desc: 'Embracing your hope, shielding your future..',
      icon: (
        /* 1. IVF: Clinical Embryology Microscope */
        <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 18h8" />
          <path d="M3 22h18" />
          <path d="M14 22a7 7 0 1 0 0-14h-1" />
          <path d="M9 14h2" />
          <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
          <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
        </svg>
      ),
    },
    {
      id: 'andrology',
      slug: 'andrology',
      image: 'https://res.cloudinary.com/exmvyjeq/image/upload/v1792656176/2fb64835-3b24-460f-9bdb-0541ca7dfced.png',
      title: 'Semen Analysis & Advanced Andrology',
      desc: 'Understanding the foundation, empowering the journey together.',
      icon: (
        /* 2. Andrology: Diagnostic Laboratory Conical Flask */
        <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 2v7.31L4.15 19.3A2 2 0 0 0 5.86 22h12.28a2 2 0 0 0 1.71-2.7L14 9.31V2" />
          <path d="M8.5 2h7" />
          <path d="M6.5 16h11" />
        </svg>
      ),
    },
    {
      id: 'lah',
      slug: 'laser-assisted-hatching',
      image: 'https://res.cloudinary.com/exmvyjeq/image/upload/v1792656415/69385e12-7dd1-4052-badd-90f280e7924f.png',
      title: 'Laser-Assisted Hatching (LAH)',
      desc: 'Assisting the embryo to hatch, opening the door to implantation.',
      icon: (
        /* 3. LAH: Precision Optical Laser Target Focus */
        <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="22" x2="18" y1="12" y2="12" />
          <line x1="6" x2="2" y1="12" y2="12" />
          <line x1="12" x2="12" y1="6" y2="2" />
          <line x1="12" x2="12" y1="22" y2="18" />
          <circle cx="12" cy="12" r="3" fill="currentColor" fillOpacity="0.25" />
        </svg>
      ),
    },
    {
      id: 'era',
      slug: 'era',
      image: 'https://res.cloudinary.com/exmvyjeq/image/upload/v1792656508/cc08fc70-37db-4c8f-b33d-5e86d2abcfd8.png',
      title: 'Endometrial Receptivity Assay (ERA)',
      desc: 'Finding the perfect window, preparing a welcoming home.',
      icon: (
        /* 4. ERA: Implantation Window Timing Calendar Clock */
        <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5" />
          <path d="M16 2v4" />
          <path d="M8 2v4" />
          <path d="M3 10h18" />
          <circle cx="16" cy="16" r="6" />
          <path d="M16 14v2l1.5 1" />
        </svg>
      ),
    },
    {
      id: 'counseling',
      slug: 'counseling',
      image: 'https://res.cloudinary.com/exmvyjeq/image/upload/v1792656342/93c654cd-8f74-4000-954d-5557ad3b11b9.png',
      title: 'Psychological & Emotional Counseling',
      desc: 'A safe space for your heart, walking beside you at every step.',
      icon: (
        /* 5. Counseling: Heart Handshake Compassionate Support */
        <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.86.86 2.22.86 3.08 0L15 8" />
          <path d="m14 10 1.5 1.5a2.17 2.17 0 0 0 3.08 0c.86-.86.86-2.22 0-3.08L17 7" />
        </svg>
      ),
    },
    {
      id: 'evaluation',
      slug: 'fertility-evaluation',
      image: 'https://res.cloudinary.com/exmvyjeq/image/upload/v1792589225/83bef9f7-efbf-47e1-b2a1-8e581657afdc.png',
      title: 'Comprehensive Fertility Evaluation',
      desc: 'Seeking clarity, illuminating your path forward.',
      icon: (
        /* 6. Evaluation: Clinical Checklist Diagnostic Evaluation */
        <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
          <path d="m9 14 2 2 4-4" />
        </svg>
      ),
    },
    {
      id: 'icsi',
      slug: 'icsi',
      image: 'https://res.cloudinary.com/exmvyjeq/image/upload/v1792589308/8f5c3c36-d8ee-42bc-a41d-061ab2ad4746.png',
      title: 'ICSI — Advanced Fertilization',
      desc: 'Precision at the cellular level, micro-engineered with love.',
      icon: (
        /* 7. ICSI: Precision Micromanipulator */
        <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="14" cy="12" r="7" />
          <path d="m4 12 5-2v4Z" fill="currentColor" fillOpacity="0.2" />
          <path d="M2 12h7" />
        </svg>
      ),
    },
    {
      id: 'surgeries',
      slug: 'fertility-enhancing-surgeries',
      image: 'https://res.cloudinary.com/exmvyjeq/image/upload/v1792654234/e876ba22-7f6a-41e5-834d-d84f97c4d7ed.png',
      title: 'Fertility Enhancing Surgeries',
      desc: 'Restoring harmony, clearing the way for life to bloom.',
      icon: (
        /* 8. Surgeries: Surgical Precision Laparoscopy */
        <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.5 4.5 19.5 9.5" />
          <path d="m6 18 8.5-8.5" />
          <circle cx="5" cy="19" r="2" />
          <path d="m18 6 3-3" />
        </svg>
      ),
    },
    {
      id: 'pgt',
      slug: 'pgt',
      image: 'https://res.cloudinary.com/exmvyjeq/image/upload/v1792655478/7cad0e96-55ef-4208-a692-3fcf2d36b0cd.png',
      title: 'Preimplantation Genetic Testing (PGT)',
      desc: 'Protecting your lineage, anchoring your hope in certainty.',
      icon: (
        /* 9. PGT: DNA Genetic Assessment */
        <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 15c6.667-6 13.333 0 20-6" />
          <path d="M2 9c6.667 6 13.333 0 20 6" />
          <path d="M5 10.5v3" />
          <path d="M9 13v-2" />
          <path d="M15 13v-2" />
          <path d="M19 10.5v3" />
        </svg>
      ),
    },
    {
      id: 'cryopreservation',
      slug: 'cryopreservation',
      image: 'https://res.cloudinary.com/exmvyjeq/image/upload/v1792655778/45cdf191-e190-413a-98e4-654c44ad5136.png',
      title: 'Cryopreservation & Freezing',
      desc: 'Time stands still, safeguarding your dreams for tomorrow.',
      icon: (
        /* 10. Cryopreservation: Cold Vitrification Snowflake */
        <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07 19.07 4.93" />
        </svg>
      ),
    },
    {
      id: 'iui',
      slug: 'iui',
      image: 'https://res.cloudinary.com/exmvyjeq/image/upload/v1792655834/59f41f88-18e4-4f88-98e0-7742870cc730.png',
      title: 'Intrauterine Insemination (IUI)',
      desc: 'A gentle, natural step closer to your miracle.',
      icon: (
        /* 11. IUI: Gentle Direct Conception Pathway */
        <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7Z" />
        </svg>
      ),
    },
  ]

  const handleScroll = (direction) => {
    if (!scrollRef.current) return
    const el = scrollRef.current
    const itemWidth = el.firstElementChild ? el.firstElementChild.clientWidth + 24 : el.clientWidth
    const offset = direction === 'left' ? -itemWidth : itemWidth
    el.scrollBy({ left: offset, behavior: 'smooth' })
  }

  const scrollToCard = (index) => {
    if (!scrollRef.current) return
    const el = scrollRef.current
    const target = el.children[index]
    if (target) {
      el.scrollTo({ left: target.offsetLeft - el.offsetLeft, behavior: 'smooth' })
    }
  }

  const handleScrollTrack = () => {
    if (!scrollRef.current) return
    const el = scrollRef.current
    const itemWidth = el.firstElementChild ? el.firstElementChild.clientWidth + 24 : el.clientWidth
    const current = Math.round(el.scrollLeft / itemWidth)
    setActiveSlide(Math.min(Math.max(current, 0), SERVICES.length - 1))
  }

  return (
    <section id="treatments" className="bg-[#F5F2F8] py-14 sm:py-20 relative overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10 mb-12 sm:mb-16">
          <div className="shrink-0">
            <span className="text-[#603085] font-bold text-xs sm:text-sm tracking-widest uppercase block mb-2">
              WHAT WE PROVIDE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] leading-tight font-medium tracking-tight">
              <span className="text-[#603085]">Advanced Fertility</span>{' '}
              <span className="text-[#C49F64]">Services</span>
            </h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-[#603085] to-[#C49F64] mt-3" />
          </div>

          <div className="max-w-xl lg:pt-4">
            <p className="text-[#555555] text-sm sm:text-[15px] leading-relaxed">
              Discover a comprehensive range of advanced fertility treatments, delivered by experienced specialists using cutting-edge technology and personalized care to help you achieve your dream of parenthood.
            </p>
          </div>
        </div>

        {/* Service Cards Carousel */}
        <div
          ref={scrollRef}
          onScroll={handleScrollTrack}
          className="flex overflow-x-auto pb-4 pt-2 gap-4 sm:gap-6 snap-x snap-mandatory scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {SERVICES.map((s) => (
            <Link
              key={s.id}
              to={`/services/${s.slug}`}
              className="relative w-[82vw] max-w-[310px] sm:w-[calc((100%-24px)/2)] sm:max-w-none lg:w-[calc((100%-72px)/4)] shrink-0 snap-start rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between group bg-[#F5F2F8] text-[#241132] border-2 border-[#603085]/45 hover:border-[#603085] shadow-[0_4px_16px_-4px_rgba(36,17,50,0.06)] hover:shadow-2xl hover:-translate-y-2 cursor-pointer [perspective:1000px] img-shine-effect"
            >
              <img
                src={s.image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-30 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-[#EDE4F5]/70 group-hover:bg-[#603085]/82 transition-colors duration-300" />

              <div className="relative z-10 p-5 sm:px-6 sm:pt-7 sm:pb-6 flex flex-col items-center text-center flex-1">
                <div className="service-icon-flip w-16 h-16 sm:w-18 sm:h-18 rounded-full flex items-center justify-center mb-4 shrink-0 bg-[#603085] text-white shadow-sm group-hover:bg-white group-hover:text-[#603085] transition-colors">
                  {s.icon}
                </div>

                <h3 className="font-serif text-base sm:text-[17.5px] font-medium leading-snug mb-2.5 min-h-[48px] flex items-center justify-center text-[#603085] group-hover:text-white transition-colors duration-300">
                  {s.title}
                </h3>

                <p className="text-xs sm:text-[13px] leading-relaxed text-[#4E276D] group-hover:text-white/95 transition-colors duration-300 italic min-h-[38px] flex items-center justify-center">
                  "{s.desc}"
                </p>
              </div>

              <span className="relative z-10 w-full py-3 bg-[#603085] group-hover:bg-white text-white group-hover:text-[#603085] text-xs font-bold uppercase tracking-widest transition-colors duration-200 text-center select-none rounded-b-2xl shrink-0">
                READ MORE
              </span>
            </Link>
          ))}
        </div>

        {/* Bottom Navigation Buttons & Pagination Dots */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 sm:mt-10">
          <div className="flex items-center gap-3">
            {/* Prev Button */}
            <button
              type="button"
              onClick={() => handleScroll('left')}
              className="w-11 h-11 rounded-full bg-white hover:bg-[#FAF0F7] text-[#241132] hover:text-[#603085] border border-[#F0D5E6] hover:border-[#603085] flex items-center justify-center shadow-xs hover:shadow-md transition-all active:scale-95 cursor-pointer"
              aria-label="Previous service"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center gap-1.5 sm:gap-2 px-3.5 py-2.5 bg-white rounded-full border border-[#F0D5E6] shadow-2xs">
              {SERVICES.map((s, idx) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => scrollToCard(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeSlide === idx
                      ? 'w-7 bg-[#603085]'
                      : 'w-2.5 bg-[#E2B8D5] hover:bg-[#603085]/60'
                  }`}
                  aria-label={`Go to ${s.title}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              type="button"
              onClick={() => handleScroll('right')}
              className="w-11 h-11 rounded-full bg-white hover:bg-[#FAF0F7] text-[#241132] hover:text-[#603085] border border-[#F0D5E6] hover:border-[#603085] flex items-center justify-center shadow-xs hover:shadow-md transition-all active:scale-95 cursor-pointer"
              aria-label="Next service"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <Link
            to="/services"
            className="text-xs font-bold uppercase tracking-widest text-[#603085] hover:text-[#4E276D]"
          >
            View all 11 services →
          </Link>
        </div>

      </div>
    </section>
  )
}
