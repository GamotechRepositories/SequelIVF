import React, { useState, useEffect, useRef } from 'react'

export default function Hero({ onBookClick }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const touchStartX = useRef(null)

  const TOTAL_SLIDES = 2

  const STATS = [
    {
      value: '2,00,000+',
      label: 'Couples Treated',
      subtag: 'Joyful Families',
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-5.5 sm:h-5.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      value: '39+ Yrs',
      label: 'Fertility Experience',
      subtag: 'Pioneering Care',
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-5.5 sm:h-5.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
          <path d="M4 22h16" />
          <path d="M10 14.66V17c0 .55-.45 1-1 1H8v4h8v-4h-1c-.55 0-1-.45-1-1v-2.34" />
          <path d="M18 4H6v7a6 6 0 0 0 12 0V4z" />
        </svg>
      ),
    },
    {
      value: '95+',
      label: 'Centres Across India',
      subtag: 'Nationwide Labs',
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-5.5 sm:h-5.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2C7.58 2 4 5.58 4 10c0 5.25 8 12 8 12s8-6.75 8-12c0-4.42-3.58-8-8-8z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
    },
    {
      value: '8',
      label: 'Languages Supported',
      subtag: 'Multilingual Care',
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-5.5 sm:h-5.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          <path d="M8 11.5h8M8 8.5h5" />
        </svg>
      ),
    },
  ]

  // Auto-advance slides every 6.5 seconds unless hovered/paused
  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % TOTAL_SLIDES)
    }, 6500)
    return () => clearInterval(timer)
  }, [isPaused])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % TOTAL_SLIDES)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + TOTAL_SLIDES) % TOTAL_SLIDES)

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (diff > 50) nextSlide()
    if (diff < -50) prevSlide()
    touchStartX.current = null
  }

  return (
    <section
      className="w-full bg-[#FAF2F7] relative overflow-hidden pt-2 sm:pt-5 lg:pt-8 pb-8 sm:pb-12 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Radiating Wave Rings & Ambient Glow behind everything in the Hero */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          className="absolute right-[-10%] top-[-5%] w-[900px] h-[900px] opacity-40"
          viewBox="0 0 800 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="480" cy="380" r="180" stroke="#F1C7E0" strokeWidth="1.2" strokeDasharray="3 3" />
          <circle cx="480" cy="380" r="260" stroke="#F1C7E0" strokeWidth="1.5" />
          <circle cx="480" cy="380" r="340" stroke="#F3D5E7" strokeWidth="1.5" />
          <circle cx="480" cy="380" r="420" stroke="#F6DEEE" strokeWidth="1.5" strokeDasharray="4 4" />
          <circle cx="480" cy="380" r="500" stroke="#F8E7F3" strokeWidth="1.8" />
          <circle cx="480" cy="380" r="580" stroke="#FAEFF7" strokeWidth="1.8" />
        </svg>
        <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] rounded-full bg-[#FCE4F2]/50 blur-3xl" />
      </div>

      {/* ── Strict Full-Width Slider Track with Adaptive Height ── */}
      <div className="relative z-10 w-full overflow-hidden">

        {/* ═══════════════ SLIDE 1: Where Hope Grows Into Happiness ═══════════════ */}
        <div
          className={`w-full transition-all duration-700 ease-in-out ${
            currentSlide === 0
              ? 'relative z-10 opacity-100 translate-x-0'
              : 'absolute top-0 left-0 opacity-0 pointer-events-none -translate-x-full'
          }`}
        >
          <div className="mx-auto max-w-[1400px] px-3.5 sm:px-6 lg:px-10">
            <div className="grid lg:grid-cols-12 lg:gap-x-8 items-center">
              
              {/* 1. Headline */}
              <div className="order-1 lg:col-span-6 lg:col-start-1 lg:row-start-1 lg:self-end pt-0.5 sm:pt-2 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-1.5 sm:gap-2 text-[8.5px] min-[340px]:text-[10px] min-[390px]:text-[11px] sm:text-xs font-bold uppercase tracking-tight min-[340px]:tracking-normal sm:tracking-wider text-[#86198F] whitespace-nowrap mb-1.5 sm:mb-2.5">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#A21CAF] animate-pulse shrink-0" />
                  <span>YOUR JOURNEY, OUR CARE</span>
                  <span className="text-[#C5A0BD] font-light">|</span>
                  <span className="text-[#6E4276]">HADAPSAR, PUNE</span>
                </div>

                <h1 className="font-heading font-extrabold text-[22px] min-[340px]:text-[26px] min-[390px]:text-[32px] sm:text-[44px] lg:text-[48px] xl:text-[54px] leading-[1.12] tracking-[-0.02em] text-[#241132] mb-1.5 sm:mb-2 lg:mb-2.5">
                  <span className="text-[#A21CAF] block sm:inline">Where Hope Grows</span>{' '}
                  Into Happiness
                </h1>
              </div>

              {/* 2. Fertility Puzzle Family Portrait */}
              <div className="order-2 lg:col-span-6 lg:col-start-7 lg:row-start-1 lg:row-span-2 lg:self-center relative flex justify-center lg:justify-end my-1 sm:my-3 lg:my-0">
                <div className="relative w-full max-w-[240px] min-[360px]:max-w-[280px] sm:max-w-[540px] lg:max-w-[680px] xl:max-w-[760px]">
                  <div className="absolute inset-0 m-auto w-[92%] h-[92%] rounded-full bg-gradient-to-tr from-[#FCE4F2]/80 to-[#FAF2F7]/50 -z-10 scale-105 blur-md" />
                  <div className="relative flex justify-center lg:justify-end items-end overflow-hidden">
                    <img
                      src="/images/fertility_puzzle.png"
                      alt="Sequeli IVF fertility puzzle family portrait - joyful couple with IVF journey pieces and baby"
                      className="w-full h-auto object-contain drop-shadow-[0_20px_30px_rgba(80,20,65,0.14)] transition-transform duration-500 hover:scale-[1.02]"
                      style={{
                        maskImage: 'linear-gradient(to bottom, black 86%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, black 86%, transparent 100%)',
                      }}
                      loading="eager"
                    />
                    {/* Subtle bottom gradient overlay for gentle edge softening */}
                    <div className="absolute inset-x-0 bottom-0 h-8 sm:h-12 bg-gradient-to-t from-[#FAF2F7] via-[#FAF2F7]/50 to-transparent pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* 3. Subtext & CTAs */}
              <div className="order-3 lg:col-span-6 lg:col-start-1 lg:row-start-2 lg:self-start text-center lg:text-left">
                <div className="space-y-1.5 sm:space-y-2.5 max-w-xl mx-auto lg:mx-0 text-[#53385E] text-[12.5px] sm:text-[15.5px] leading-snug sm:leading-relaxed mb-3 sm:mb-4">
                  <p>
                    Every parenthood journey is unique. We bring together advanced fertility technology, personalized treatment plans, and compassionate care to help you take the next step with confidence.
                  </p>
                  <p className="hidden sm:block">
                    From fertility assessments and IVF treatments to advanced embryology and 4D pregnancy scans, discover comprehensive reproductive care designed around you.
                  </p>
                </div>

                <div className="mt-3.5 sm:mt-5 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2.5 sm:gap-4">
                  {/* Primary CTA Button on its own line in mobile view */}
                  <button
                    type="button"
                    onClick={onBookClick}
                    className="w-full min-[420px]:w-auto inline-flex items-center justify-center gap-1.5 sm:gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg text-xs sm:text-sm font-bold text-white bg-[#A21CAF] hover:bg-[#86198F] active:scale-95 shadow-md shadow-fuchsia-900/15 transition-all duration-200 cursor-pointer"
                  >
                    <span>Begin Your Journey</span>
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                    </svg>
                  </button>

                  {/* Number and Location together on one line */}
                  <div className="flex items-center justify-center flex-wrap gap-x-2.5 sm:gap-x-3 gap-y-1">
                    <a
                      href="tel:+919665279369"
                      className="inline-flex items-center gap-1.5 text-[11px] min-[360px]:text-xs sm:text-sm font-bold text-[#3C2048] hover:text-[#A21CAF] transition-colors py-1 whitespace-nowrap"
                    >
                      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[#A21CAF] shrink-0" fill="currentColor">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                      </svg>
                      <span>Helpline: +91 9665 279 369</span>
                    </a>

                    <span className="text-[#C49F64] font-bold text-xs">•</span>

                    <div className="inline-flex items-center gap-1 text-[11px] min-[360px]:text-xs sm:text-sm font-semibold text-[#6E4276] whitespace-nowrap">
                      <svg className="w-3.5 h-3.5 text-[#A21CAF] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                      </svg>
                      <span>Hadapsar, Pune</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ═══════════════ SLIDE 2: Experienced Doctors Personalized Fertility Care ═══════════════ */}
        <div
          className={`w-full transition-all duration-700 ease-in-out ${
            currentSlide === 1
              ? 'relative z-10 opacity-100 translate-x-0'
              : 'absolute top-0 left-0 opacity-0 pointer-events-none translate-x-full'
          }`}
        >
          <div className="mx-auto max-w-[1400px] px-3.5 sm:px-6 lg:px-10">
            <div className="grid lg:grid-cols-12 lg:gap-x-8 items-center">
              
              {/* 1. Headline */}
              <div className="order-1 lg:col-span-6 lg:col-start-1 lg:row-start-1 lg:self-end pt-0.5 sm:pt-2 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-1 sm:gap-2 text-[7.5px] min-[330px]:text-[9px] min-[370px]:text-[10.5px] sm:text-xs font-bold uppercase tracking-tighter min-[340px]:tracking-tight sm:tracking-wider text-[#86198F] whitespace-nowrap mb-1.5 sm:mb-2.5">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#A21CAF] animate-pulse shrink-0" />
                  <span>TRUSTED FERTILITY SPECIALISTS</span>
                  <span className="text-[#C5A0BD] font-light">|</span>
                  <span className="text-[#6E4276]">HADAPSAR, PUNE</span>
                </div>

                <h2 className="font-heading font-extrabold text-[22px] min-[340px]:text-[26px] min-[390px]:text-[32px] sm:text-[44px] lg:text-[48px] xl:text-[54px] leading-[1.12] tracking-[-0.02em] text-[#241132] mb-1.5 sm:mb-2 lg:mb-2.5">
                  <span className="text-[#A21CAF] block sm:inline">Experienced Doctors</span>{' '}
                  Personalized Fertility Care
                </h2>
              </div>

              {/* 2. Doctor Consultation Graphic */}
              <div className="order-2 lg:col-span-6 lg:col-start-7 lg:row-start-1 lg:row-span-2 lg:self-center relative flex justify-center lg:justify-end my-1 sm:my-2 lg:my-0">
                <div className="relative w-full max-w-[240px] min-[360px]:max-w-[290px] sm:max-w-[440px] lg:max-w-[520px] xl:max-w-[580px]">
                  <div className="absolute inset-0 m-auto w-[90%] h-[90%] rounded-full bg-gradient-to-tr from-[#FCE4F2]/80 to-[#FAF2F7]/50 -z-10 scale-105 blur-md" />
                  <div className="relative flex justify-center lg:justify-end items-end overflow-hidden">
                    <img
                      src="/images/image copy 3.png"
                      alt="Experienced fertility specialist doctors and care team at Sequel IVF"
                      className="w-full h-auto max-h-[340px] sm:max-h-[420px] lg:max-h-[460px] object-contain drop-shadow-[0_16px_30px_rgba(80,20,65,0.14)] transition-transform duration-500 hover:scale-[1.02]"
                      style={{
                        maskImage: 'linear-gradient(to bottom, black 86%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, black 86%, transparent 100%)',
                      }}
                      loading="eager"
                    />
                    {/* Subtle bottom gradient overlay for gentle edge softening */}
                    <div className="absolute inset-x-0 bottom-0 h-8 sm:h-12 bg-gradient-to-t from-[#FAF2F7] via-[#FAF2F7]/50 to-transparent pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* 3. Subtext & CTAs */}
              <div className="order-3 lg:col-span-6 lg:col-start-1 lg:row-start-2 lg:self-start text-center lg:text-left">
                <div className="space-y-1.5 sm:space-y-2.5 max-w-xl mx-auto lg:mx-0 text-[#53385E] text-[12.5px] sm:text-[15.5px] leading-snug sm:leading-relaxed mb-3 sm:mb-4">
                  <p>
                    Our experienced fertility specialists combine advanced medical expertise with personalized fertility care, providing trusted guidance and unwavering support to help you achieve your dream of parenthood.
                  </p>
                  <p className="hidden sm:block">
                    Every consultation is tailored to your unique journey, ensuring ethical, transparent, and evidence-based reproductive solutions.
                  </p>
                </div>

                <div className="mt-3.5 sm:mt-5 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2.5 sm:gap-4">
                  {/* Primary CTA Button on its own line in mobile view */}
                  <button
                    type="button"
                    onClick={onBookClick}
                    className="w-full min-[420px]:w-auto inline-flex items-center justify-center gap-1.5 sm:gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg text-xs sm:text-sm font-bold text-white bg-[#A21CAF] hover:bg-[#86198F] active:scale-95 shadow-md shadow-fuchsia-900/15 transition-all duration-200 cursor-pointer"
                  >
                    <span>Consult Our Specialists</span>
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                    </svg>
                  </button>

                  {/* Number and Location together on one line */}
                  <div className="flex items-center justify-center flex-wrap gap-x-2.5 sm:gap-x-3 gap-y-1">
                    <a
                      href="tel:+919665279369"
                      className="inline-flex items-center gap-1.5 text-[11px] min-[360px]:text-xs sm:text-sm font-bold text-[#3C2048] hover:text-[#A21CAF] transition-colors py-1 whitespace-nowrap"
                    >
                      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[#A21CAF] shrink-0" fill="currentColor">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                      </svg>
                      <span>Helpline: +91 9665 279 369</span>
                    </a>

                    <span className="text-[#C49F64] font-bold text-xs">•</span>

                    <div className="inline-flex items-center gap-1 text-[11px] min-[360px]:text-xs sm:text-sm font-semibold text-[#6E4276] whitespace-nowrap">
                      <svg className="w-3.5 h-3.5 text-[#A21CAF] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                      </svg>
                      <span>Hadapsar, Pune</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* ── Slider Navigation & Dots ── */}
      <div className="relative z-10 mx-auto max-w-[1400px] px-3.5 sm:px-6 lg:px-10">
        <div className="mt-2.5 sm:mt-4 flex items-center justify-center lg:justify-start gap-2.5 sm:gap-3">
          {/* Slide Indicators / Pill Dots */}
          <div className="flex items-center gap-1.5 sm:gap-2 bg-white/75 backdrop-blur-xs px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full border border-[#F0D5E6]/80 shadow-2xs">
            <button
              type="button"
              onClick={() => setCurrentSlide(0)}
              className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 cursor-pointer ${
                currentSlide === 0 ? 'w-6 sm:w-7 bg-[#A21CAF]' : 'w-1.5 sm:w-2 bg-[#E5BFD8] hover:bg-[#A21CAF]/60'
              }`}
              aria-label="Slide 1: Where Hope Grows Into Happiness"
            />
            <button
              type="button"
              onClick={() => setCurrentSlide(1)}
              className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 cursor-pointer ${
                currentSlide === 1 ? 'w-6 sm:w-7 bg-[#A21CAF]' : 'w-1.5 sm:w-2 bg-[#E5BFD8] hover:bg-[#A21CAF]/60'
              }`}
              aria-label="Slide 2: Experienced Doctors Personalized Fertility Care"
            />
          </div>

          {/* Prev / Next Arrows */}
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={prevSlide}
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white hover:bg-[#FAF0F7] text-[#241132] border border-[#F0D5E6] flex items-center justify-center shadow-xs hover:shadow-md transition-all active:scale-95 cursor-pointer"
              aria-label="Previous banner"
            >
              <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={nextSlide}
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white hover:bg-[#FAF0F7] text-[#241132] border border-[#F0D5E6] flex items-center justify-center shadow-xs hover:shadow-md transition-all active:scale-95 cursor-pointer"
              aria-label="Next banner"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ── Trusted by families across India (Seamless inside Hero, exact same #FAF2F7 bg, no divider line) ── */}
      <div className="relative z-10 mx-auto max-w-[1400px] px-3.5 sm:px-6 lg:px-10 mt-5 sm:mt-7 pt-2">
        <div className="text-center mb-4 sm:mb-5">
          <h3 className="font-heading font-extrabold text-xl sm:text-2xl lg:text-[27px] text-[#241132] tracking-tight leading-tight">
            Trusted by Families Across India
          </h3>
          <p className="text-xs sm:text-[13.5px] text-[#6E4276] max-w-lg mx-auto mt-1 font-medium leading-relaxed">
            Leading fertility expertise delivering joy, confidence, and high clinical success.
          </p>
        </div>

        {/* 4 Luxury Elevated Metrics Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 lg:gap-4 xl:gap-5">
          {STATS.map((item) => (
            <div
              key={item.label}
              className="group relative rounded-2xl bg-gradient-to-b from-white via-white/95 to-[#FCF7FA] p-3.5 sm:p-4 lg:p-4 xl:p-5 border border-[#F0D5E6] hover:border-[#A21CAF]/50 shadow-[0_6px_20px_-6px_rgba(36,17,50,0.06)] hover:shadow-[0_16px_32px_-8px_rgba(162,28,175,0.2)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col lg:flex-row items-center text-center lg:text-left gap-2.5 sm:gap-3 lg:gap-3.5 xl:gap-4 overflow-hidden cursor-default"
            >
              {/* Top Accent Gradient Bar */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#A21CAF] to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Ambient Radial Dark Glow in top corner */}
              <div
                className="absolute -top-10 -right-10 w-24 h-24 rounded-full blur-2xl pointer-events-none opacity-15 group-hover:opacity-30 transition-opacity duration-500"
                style={{ background: '#241132' }}
              />

              {/* Subtle Watermark Icon in background */}
              <div className="absolute -right-2 -bottom-2 w-14 h-14 pointer-events-none text-[#241132]/[0.025] group-hover:text-[#A21CAF]/[0.06] transition-all duration-500 group-hover:scale-125 transform">
                {item.icon}
              </div>

              {/* Uniform Dark Icon Pod (Same dark background for all icons) */}
              <div className="relative shrink-0 my-0.5">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#2D133D] via-[#241132] to-[#1A0A26] text-white flex items-center justify-center shadow-md shadow-[#241132]/25 ring-2 ring-white/90 group-hover:scale-105 group-hover:bg-[#A21CAF] transition-all duration-300">
                  {item.icon}
                </div>
              </div>

              {/* Stat Value, Label, and Subtag (Horizontally aligned with icon on desktop view) */}
              <div className="w-full flex-1 min-w-0 flex flex-col justify-center text-center lg:text-left relative z-10">
                <span className="block font-heading font-black text-xl sm:text-2xl lg:text-[21px] xl:text-[24px] tracking-tight text-[#241132] group-hover:text-[#A21CAF] transition-colors duration-200 leading-none">
                  {item.value}
                </span>
                <span className="block text-xs sm:text-[12.5px] lg:text-[11.5px] xl:text-[12.5px] font-bold text-[#4A235A] leading-tight mt-1">
                  {item.label}
                </span>
                <span className="inline-flex items-center justify-center lg:justify-start gap-1 text-[9.5px] xl:text-[10.5px] font-semibold text-[#86198F] mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A21CAF] shrink-0 animate-pulse" />
                  <span className="truncate">{item.subtag}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
