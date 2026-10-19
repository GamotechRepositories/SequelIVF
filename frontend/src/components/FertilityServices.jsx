import React, { useRef, useState } from 'react'

export default function FertilityServices({ onBookClick }) {
  const scrollRef = useRef(null)
  const [activeSlide, setActiveSlide] = useState(0)

  const SERVICES = [
    {
      id: 'ivf',
      title: 'In-Vitro Fertilization (IVF)',
      desc: "At Sequel IVF, we understand that you aren't just looking for a treatment, but a pathway to your family dream. Our advanced IVF programs combine individualized protocols with highest cleanroom embryology standards.",
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
      title: 'Semen Analysis & Advanced Andrology',
      desc: 'At Sequel IVF, we ensure this essential test is handled with the highest clinical accuracy, evaluating sperm count, motility, vitality, morphology, and DNA fragmentation.',
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
      title: 'Laser-Assisted Hatching (LAH)',
      desc: 'Laser-Assisted Hatching (LAH) is an advanced embryology laboratory technique used during IVF to thin the outer shell of the embryo, significantly enhancing implantation rates.',
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
      title: 'Endometrial Receptivity Assay (ERA)',
      desc: 'A successful pregnancy requires a beautifully synchronized dialogue between a healthy embryo and a receptive endometrial lining to identify your personalized window of implantation.',
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
      title: 'Psychological & Emotional Counseling',
      desc: 'At Sequel IVF, we believe that emotional care is not secondary to medical treatment. Our dedicated counselors support you through every emotional phase of your fertility journey.',
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
      title: 'Comprehensive Fertility Evaluation',
      desc: 'At Sequel IVF, we look at fertility evaluations not just as a set of diagnostic tests, but as an essential roadmap to understanding your complete reproductive health.',
      icon: (
        /* 6. Evaluation: Clinical Checklist Diagnostic Evaluation */
        <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
          <path d="m9 14 2 2 4-4" />
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
    <section id="treatments" className="bg-[#FAF2F7] py-14 sm:py-20 relative overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">

        {/* Section Header: Dual-tone heading + close description */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10 mb-12 sm:mb-16">
          {/* Left: Eyebrow, Heading & Line */}
          <div className="shrink-0">
            <span className="text-[#800080] font-bold text-xs sm:text-sm tracking-widest uppercase block mb-2">
              WE PROVIDE WHAT
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] leading-tight font-medium tracking-tight">
              <span className="text-[#A21CAF]">Advanced Fertility</span>{' '}
              <span className="text-[#C49F64]">Services</span>
            </h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-[#A21CAF] to-[#C49F64] mt-3" />
          </div>

          {/* Right: Description text close to heading */}
          <div className="max-w-xl lg:pt-4">
            <p className="text-[#555555] text-sm sm:text-[15px] leading-relaxed">
              Discover a comprehensive range of advanced fertility treatments, delivered by experienced specialists using cutting-edge technology and personalized care to help you achieve your dream of parenthood.
            </p>
          </div>
        </div>

        {/* 6 Service Cards: Sharp rectangular shape, 4 cards visible on desktop, compact on mobile */}
        <div
          ref={scrollRef}
          onScroll={handleScrollTrack}
          className="flex overflow-x-auto pb-4 pt-2 gap-4 sm:gap-6 snap-x snap-mandatory scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {SERVICES.map((s) => (
            <div
              key={s.id}
              className="w-[82vw] max-w-[310px] sm:w-[calc((100%-24px)/2)] sm:max-w-none lg:w-[calc((100%-72px)/4)] shrink-0 snap-start rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between group bg-white text-[#241132] border border-[#F0D5E6] shadow-[0_4px_16px_-4px_rgba(36,17,50,0.06)] hover:bg-[#7E1286] hover:border-[#7E1286] hover:shadow-2xl hover:-translate-y-2 cursor-pointer [perspective:1000px]"
            >
              {/* Card Body */}
              <div className="p-5 sm:px-6 sm:pt-8 sm:pb-7 flex flex-col items-center text-center flex-1">
                {/* Top Circle Icon: 3D Flip 360 on card hover + purple/white color swap */}
                <div className="service-icon-flip w-18 h-18 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mb-6 shrink-0 bg-[#7E1286] text-white shadow-sm group-hover:bg-white group-hover:text-[#7E1286]">
                  {s.icon}
                </div>

                {/* Title: Champagne Gold default -> White on card hover */}
                <h3 className="font-serif text-lg sm:text-[19px] font-medium leading-snug mb-3 min-h-[52px] flex items-center justify-center text-[#C49F64] group-hover:text-white transition-colors duration-300">
                  {s.title}
                </h3>

                {/* Description: Gray default -> White on card hover */}
                <p className="text-xs sm:text-[13px] leading-relaxed text-[#555555] group-hover:text-white/95 transition-colors duration-300">
                  {s.desc}
                </p>
              </div>

              {/* Bottom Bar: READ MORE Button */}
              <button
                type="button"
                onClick={() => onBookClick && onBookClick(s.title)}
                className="w-full py-3.5 bg-[#5D3A20] hover:bg-[#482B15] active:bg-[#3D230F] text-white text-xs font-bold uppercase tracking-widest transition-colors duration-200 cursor-pointer text-center select-none rounded-b-2xl shrink-0"
              >
                READ MORE
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Navigation Buttons & Pagination Dots */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 sm:mt-10">
          <div className="flex items-center gap-3">
            {/* Prev Button */}
            <button
              type="button"
              onClick={() => handleScroll('left')}
              className="w-11 h-11 rounded-full bg-white hover:bg-[#FAF0F7] text-[#241132] hover:text-[#A21CAF] border border-[#F0D5E6] hover:border-[#A21CAF] flex items-center justify-center shadow-xs hover:shadow-md transition-all active:scale-95 cursor-pointer"
              aria-label="Previous service"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Pagination Dots for all 6 cards */}
            <div className="flex items-center gap-2 px-3.5 py-2.5 bg-white rounded-full border border-[#F0D5E6] shadow-2xs">
              {SERVICES.map((s, idx) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => scrollToCard(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeSlide === idx
                      ? 'w-7 bg-[#A21CAF]'
                      : 'w-2.5 bg-[#E2B8D5] hover:bg-[#A21CAF]/60'
                  }`}
                  aria-label={`Go to ${s.title}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              type="button"
              onClick={() => handleScroll('right')}
              className="w-11 h-11 rounded-full bg-white hover:bg-[#FAF0F7] text-[#241132] hover:text-[#A21CAF] border border-[#F0D5E6] hover:border-[#A21CAF] flex items-center justify-center shadow-xs hover:shadow-md transition-all active:scale-95 cursor-pointer"
              aria-label="Next service"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <span className="text-xs font-semibold text-[#7C6285]">
            Use arrows or swipe to explore all 6 services
          </span>
        </div>

      </div>
    </section>
  )
}
