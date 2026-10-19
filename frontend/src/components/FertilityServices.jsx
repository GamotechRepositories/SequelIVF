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
        /* 1. IVF: Egg Cell with Suction Pipette & ICSI Micro-injection Needle */
        <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          {/* Egg Cell / Ovum */}
          <circle cx="13" cy="12.5" r="6.5" />
          {/* Dividing Blastomeres Inside */}
          <circle cx="11.5" cy="11.2" r="1.8" fill="currentColor" fillOpacity="0.3" />
          <circle cx="14.5" cy="11.2" r="1.8" fill="currentColor" fillOpacity="0.3" />
          <circle cx="13" cy="14" r="1.8" fill="currentColor" fillOpacity="0.3" />
          {/* Suction Pipette holding the egg from left */}
          <path d="M2 10.5h4.5v4H2" />
          {/* Micro-injection Needle fertilizing from top-right */}
          <path d="M22 4.5l-6 5.5" strokeWidth="2.2" />
          <path d="M16 10l-2.5 2" strokeWidth="2.5" />
          {/* Sparkle of life */}
          <path d="M21 17v2.5m-1.2-1.2h2.4" />
        </svg>
      ),
    },
    {
      id: 'andrology',
      title: 'Semen Analysis & Advanced Andrology',
      desc: 'At Sequel IVF, we ensure this essential test is handled with the highest clinical accuracy, evaluating sperm count, motility, vitality, morphology, and DNA fragmentation.',
      icon: (
        /* 2. Andrology: Sperm Motility & Laboratory Diagnostic Analysis */
        <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          {/* Primary Motile Sperm: Oval Head */}
          <path d="M6 8.5C6 7.12 7.12 6 8.5 6s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5S6 9.88 6 8.5z" fill="currentColor" fillOpacity="0.35" />
          {/* Smooth S-curve Motility Tail */}
          <path d="M11 8.5c2.5 0 3.8 2.5 6 2.5s3.5-2 5-2" />
          {/* Secondary Motile Sperm Cell */}
          <path d="M4 16c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5S4 16.83 4 16z" fill="currentColor" fillOpacity="0.35" />
          <path d="M7 16c1.8 0 2.5 1.5 4 1.5s2.5-1 3.5-1" />
          {/* Diagnostic Crosshair Lens */}
          <circle cx="18" cy="6" r="3.5" strokeDasharray="1.5 1.5" />
          <path d="M18 4.5v3m-1.5-1.5h3" />
          {/* Clinical Motility Marker */}
          <path d="M15 19.5h5m-2.5-2.5v5" />
        </svg>
      ),
    },
    {
      id: 'lah',
      title: 'Laser-Assisted Hatching (LAH)',
      desc: 'Laser-Assisted Hatching (LAH) is an advanced embryology laboratory technique used during IVF to thin the outer shell of the embryo, significantly enhancing implantation rates.',
      icon: (
        /* 3. LAH: Precision Laser Beam thinning Embryo Shell */
        <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          {/* Outer Embryo Zona Shell with Breach */}
          <path d="M16.5 8A7 7 0 1 0 17 15" />
          {/* Developing Embryo Cells inside */}
          <circle cx="10.5" cy="11.5" r="3.8" fill="currentColor" fillOpacity="0.25" />
          <circle cx="10.5" cy="11.5" r="1.8" fill="currentColor" />
          {/* Precision Laser Emitter Device */}
          <path d="M22 3.5l-4 4" strokeWidth="2.4" />
          <path d="M21.5 2l-1.5-1.5-2 2 1.5 1.5z" fill="currentColor" />
          {/* Concentrated Laser Beam Impulse */}
          <path d="M18 7.5l-3.5 3.5" strokeDasharray="1.5 1.5" strokeWidth="1.8" />
          {/* Laser Ablation Micro-Sparks */}
          <path d="M14.5 9.5l.8-1.5m.7 2.2l1.5-.5" />
        </svg>
      ),
    },
    {
      id: 'era',
      title: 'Endometrial Receptivity Assay (ERA)',
      desc: 'A successful pregnancy requires a beautifully synchronized dialogue between a healthy embryo and a receptive endometrial lining to identify your personalized window of implantation.',
      icon: (
        /* 4. ERA: Uterus Anatomy & Implantation Window Timing */
        <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          {/* Uterus & Cervix Outline */}
          <path d="M12 21c-3.5-3-5.5-6.5-5.5-10.5 0-2.5 1-4 3-4.5 1.5-.4 2.5.5 2.5 1.5 0-1 1-1.9 2.5-1.5 2 .5 3 2 3 4.5 0 4-2 7.5-5.5 10.5z" />
          {/* Fallopian Tubes */}
          <path d="M6.5 10.5C5 9.5 3.5 9.5 2 11c0-3 2.5-5 5-5" />
          <path d="M17.5 10.5c1.5-1 3-1 4.5.5 0-3-2.5-5-5-5" />
          {/* Receptive Implantation Window: Timing Dial in Endometrium */}
          <circle cx="12" cy="13" r="3" fill="currentColor" fillOpacity="0.25" />
          <path d="M12 11.5V13l1 .8" strokeWidth="1.6" />
          {/* Synchronization Sparkle */}
          <path d="M19 4v2.5m-1.2-1.2h2.4" />
        </svg>
      ),
    },
    {
      id: 'counseling',
      title: 'Psychological & Emotional Counseling',
      desc: 'At Sequel IVF, we believe that emotional care is not secondary to medical treatment. Our dedicated counselors support you through every emotional phase of your fertility journey.',
      icon: (
        /* 5. Counseling: Patient Emotional Wellbeing & Compassionate Care */
        <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          {/* Person / Patient */}
          <path d="M16 20v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 4 18.5V20" />
          <circle cx="10" cy="9" r="3.5" />
          {/* Healing Heart & Compassionate Care */}
          <path d="M18.5 7.5c-.8-.9-2.2-.7-2.7.3-.5-1-1.9-1.2-2.7-.3-.9 1 .1 2.3 2.7 4 2.6-1.7 3.6-3 2.7-4z" fill="currentColor" fillOpacity="0.3" />
          {/* Calming Support Waves */}
          <path d="M20.5 5.5c.8.8 1.2 1.8 1.2 2.5s-.4 1.7-1.2 2.5" />
          {/* Support Plus Sign */}
          <path d="M17 17.5h4m-2-2v4" />
        </svg>
      ),
    },
    {
      id: 'evaluation',
      title: 'Comprehensive Fertility Evaluation',
      desc: 'At Sequel IVF, we look at fertility evaluations not just as a set of diagnostic tests, but as an essential roadmap to understanding your complete reproductive health.',
      icon: (
        /* 6. Evaluation: Targeted Assessment Target Bullseye with Precision Arrow */
        <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          {/* Outer Target Circle */}
          <circle cx="11.5" cy="12.5" r="8.5" />
          {/* Middle Target Circle */}
          <circle cx="11.5" cy="12.5" r="5.5" strokeDasharray="2 2" />
          {/* Bullseye Center */}
          <circle cx="11.5" cy="12.5" r="2.5" fill="currentColor" fillOpacity="0.3" />
          <circle cx="11.5" cy="12.5" r="1" fill="currentColor" />
          {/* Precision Arrow Hitting Bullseye from Top-Right */}
          <path d="M21 3l-8.5 8.5" strokeWidth="2.2" />
          {/* Arrow Flights */}
          <path d="M17 3h4v4" />
          {/* Accuracy Sparkle */}
          <path d="M4 5.5v2m-1-1h2" />
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
    <section id="treatments" className="bg-white py-14 sm:py-20 border-t border-[#F5E8F0] relative overflow-hidden">
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

        {/* 6 Service Cards: Sharp rectangular shape, 4 cards visible on desktop */}
        <div
          ref={scrollRef}
          onScroll={handleScrollTrack}
          className="flex overflow-x-auto pb-4 pt-2 gap-6 snap-x snap-mandatory scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {SERVICES.map((s) => (
            <div
              key={s.id}
              className="w-full sm:w-[calc((100%-24px)/2)] lg:w-[calc((100%-72px)/4)] shrink-0 snap-start rounded-none overflow-hidden transition-all duration-300 flex flex-col justify-between group bg-white text-[#241132] border border-[#E5DFE4] shadow-sm hover:bg-[#7E1286] hover:border-[#7E1286] hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
            >
              {/* Card Body */}
              <div className="p-6 sm:px-6 sm:pt-8 sm:pb-7 flex flex-col items-center text-center flex-1">
                {/* Top Circle Icon: purple default -> white on card hover */}
                <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mb-6 transition-all duration-300 shrink-0 bg-[#7E1286] text-white shadow-sm group-hover:bg-white group-hover:text-[#7E1286] group-hover:scale-105">
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

              {/* Bottom Bar: READ MORE Button with sharp corners */}
              <button
                type="button"
                onClick={() => onBookClick && onBookClick(s.title)}
                className="w-full py-3.5 bg-[#5D3A20] hover:bg-[#482B15] active:bg-[#3D230F] text-white text-xs font-bold uppercase tracking-widest transition-colors duration-200 cursor-pointer text-center select-none rounded-none shrink-0"
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
            <div className="flex items-center gap-2 px-3.5 py-2.5 bg-[#FAF2F7] rounded-full border border-[#F0D5E6]">
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
