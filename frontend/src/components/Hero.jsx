import React from 'react'

export default function Hero({ onBookClick }) {
  return (
    <section className="w-full bg-[#FAF2F7] relative overflow-hidden pt-4 sm:pt-6 lg:pt-8 pb-12 sm:pb-16 border-b border-[#F0D5E6]/60">
      {/* Radiating Wave Rings & Ambient Glow behind everything in the Card */}
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

      {/* ── Hero Main Content ── */}
      <div className="relative z-10 px-4 sm:px-8 lg:px-12 xl:px-14">
        <div className="mx-auto max-w-[1380px]">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-center">

            {/* Left Column: Heading, Subtext, CTAs */}
            <div className="lg:col-span-6 pt-1 sm:pt-2">

              {/* Eyebrow Pill with Location */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F5D8EA]/80 border border-[#EDBFDD] text-[#86198F] text-[11px] sm:text-xs font-extrabold uppercase tracking-wider mb-3">
                <span className="w-2 h-2 rounded-full bg-[#A21CAF] animate-pulse" />
                <span>YOUR JOURNEY, OUR CARE</span>
                <span className="text-[#EDBFDD] font-normal">|</span>
                <span className="text-[#6E4276]">HADAPSAR, PUNE</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-heading font-extrabold text-[34px] sm:text-[44px] lg:text-[48px] xl:text-[54px] leading-[1.08] tracking-[-0.02em] text-[#241132] mb-4">
                <span className="text-[#A21CAF] block sm:inline">Where Hope Grows</span>{' '}
                Into Happiness
              </h1>

              {/* Subtext */}
              <div className="space-y-2.5 max-w-xl text-[#53385E] text-[14px] sm:text-[15.5px] leading-relaxed mb-4">
                <p>
                  Every parenthood journey is unique. We bring together advanced fertility technology, personalized treatment plans, and compassionate care to help you take the next step with confidence.
                </p>
                <p>
                  From fertility assessments and IVF treatments to advanced embryology and 4D pregnancy scans, discover comprehensive reproductive care designed around you.
                </p>
              </div>

              {/* CTAs */}
              <div className="mt-5 flex flex-wrap items-center gap-3 sm:gap-4">
                <button
                  type="button"
                  onClick={onBookClick}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white bg-[#A21CAF] hover:bg-[#86198F] active:scale-95 shadow-md shadow-fuchsia-900/15 transition-all duration-200 cursor-pointer"
                >
                  <span>Begin Your Journey</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                  </svg>
                </button>
                <a
                  href="tel:+919665279369"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#3C2048] hover:text-[#A21CAF] transition-colors py-2 px-2"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#A21CAF]" fill="currentColor">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  <span>Helpline: +91 9665 279 369</span>
                </a>
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#6E4276]">
                  <svg className="w-3.5 h-3.5 text-[#A21CAF]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  <span>Location: Hadapsar, Pune</span>
                </div>
              </div>

            </div>

            {/* Right Column: Fertility Puzzle Family Portrait */}
            <div className="lg:col-span-6 relative flex justify-center lg:justify-end mt-4 lg:mt-0">
              <div className="relative w-full max-w-[680px] xl:max-w-[760px]">
                <div className="absolute inset-0 m-auto w-[92%] h-[92%] rounded-full bg-gradient-to-tr from-[#FCE4F2]/80 to-[#FAF2F7]/50 -z-10 scale-105 blur-md" />
                <div className="relative flex justify-center lg:justify-end items-end">
                  <img
                    src="/images/fertility_puzzle.png"
                    alt="Sequeli IVF fertility puzzle family portrait - joyful couple with IVF journey pieces and baby"
                    className="w-full max-w-[680px] xl:max-w-[760px] h-auto object-contain drop-shadow-[0_25px_35px_rgba(80,20,65,0.14)] transition-transform duration-500 hover:scale-[1.02]"
                    loading="eager"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
