import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer.jsx'

export default function AboutUsPage({ onBookClick }) {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  // Handle ESC key and body scroll lock when video modal is open
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsVideoModalOpen(false)
      }
    }
    if (isVideoModalOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isVideoModalOpen])
  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Hero / Breadcrumb Header with Clinic Background Image */}
      <section className="relative overflow-hidden py-14 sm:py-20 lg:py-24 border-b border-[#F0D5E6]/80 bg-[#FAF2F7]">
        {/* Background Image with Multi-layer Soft Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/image copy 5.png"
            alt="Sequel IVF Luxury Fertility Clinic Centre"
            className="w-full h-full object-cover object-[center_35%]"
          />
          {/* Left-to-right fade so text remains 100% crisp while reception logo is clearly visible */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent sm:from-[#FAF2F7]/95 sm:via-[#FAF2F7]/70 sm:to-transparent lg:w-1/2" />
          {/* Vertical soft gradient for top-bottom edge blending */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-white/30" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <div className="max-w-xl">
            {/* Breadcrumbs with subtle frosted pill badge */}
            <nav className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#F0D5E6] text-[#7C6285] mb-4 uppercase tracking-wider shadow-xs">
              <Link to="/" className="hover:text-[#A21CAF] transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[#A21CAF] font-bold">About Us</span>
            </nav>

            <span className="text-[#800080] font-bold text-xs sm:text-sm tracking-widest uppercase block mb-2">
              ABOUT SEQUEL IVF
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-[46px] font-medium tracking-tight">
              <span className="text-[#A21CAF]">About</span>{' '}
              <span className="text-[#C49F64]">Our Centre</span>
            </h1>
            <div className="w-20 h-0.5 bg-gradient-to-r from-[#A21CAF] to-[#C49F64] mt-3.5" />
          </div>
        </div>
      </section>

      {/* Main Content Section matching user reference */}
      <section className="py-12 sm:py-16 lg:py-20 flex-1">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-start">
            
            {/* Left Column: Content */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              {/* Eyebrow / Kicker */}
              <span className="text-[#800080] font-bold text-xs sm:text-sm tracking-wider uppercase block mb-2 sm:mb-3">
                WELCOME TO SEQUEL IVF
              </span>

              {/* Main Headline */}
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-[38px] xl:text-[42px] leading-[1.2] font-medium tracking-tight text-[#C49F64] mb-5 sm:mb-6">
                Where Hope Begins and Families Grow
              </h2>

              {/* Paragraph 1 */}
              <p className="text-[#4B5563] text-sm sm:text-[15px] leading-[1.75] mb-4 text-justify sm:text-left">
                At <strong>Sequel IVF</strong>, we believe that every journey to parenthood is unique. Our mission is to provide compassionate, ethical, and personalized fertility care to individuals and couples at every stage of their reproductive journey. By combining advanced reproductive technology with clinical expertise and a patient-centered approach, we strive to turn hope into possibility and dreams into families.
              </p>

              {/* Paragraph 2 */}
              <p className="text-[#4B5563] text-sm sm:text-[15px] leading-[1.75] mb-7 sm:mb-8 text-justify sm:text-left">
                We understand that fertility treatment can be an emotional journey. That is why our team is committed to creating a supportive and comfortable environment where every patient feels heard, respected, and cared for. From the first consultation through diagnosis, treatment, and beyond, we stand beside you with guidance, transparency, and compassion.
              </p>

              {/* Career Impact Section */}
              <div className="mb-6">
                <h3 className="text-base sm:text-lg font-bold text-[#241132] mb-3.5">
                  Career Impact
                </h3>

                <ul className="space-y-2 mb-6 text-sm sm:text-[14.5px] text-[#374151] font-medium">
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#A21CAF] font-bold text-base leading-none mt-1">•</span>
                    <span>20,000+ IVF & ICSI Treatment Cycles Performed and Guided</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#A21CAF] font-bold text-base leading-none mt-1">•</span>
                    <span>50+ IVF Success Stories</span>
                  </li>
                </ul>

                {/* Paragraph 3 */}
                <p className="text-[#4B5563] text-sm sm:text-[15px] leading-[1.75] text-justify sm:text-left">
                  At <strong>Sequel IVF</strong>, our expertise extends across the complete spectrum of assisted reproductive care, including hands-on embryology, advanced IVF and ICSI procedures, comprehensive fertility evaluation, laboratory quality management, and personalized clinical guidance. Our experienced team is committed to maintaining high standards of care and supporting patients throughout every stage of their fertility journey. With a focus on advanced technology, ethical practices, and compassionate care, Sequel IVF strives to deliver consistent excellence across every critical stage of fertility treatment.
                </p>
              </div>

              {/* Subtle divider & CTA Button */}
              <div className="pt-4 border-t border-[#F0D5E6]/80 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={onBookClick}
                  className="inline-flex items-center justify-center px-7 py-3.5 bg-[#A21CAF] hover:bg-[#86198F] active:scale-95 text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-md transition-all cursor-pointer"
                >
                  MAKE AN APPOINTMENT
                </button>
                <Link
                  to="/our-team"
                  className="inline-flex items-center justify-center px-7 py-3.5 bg-white hover:bg-[#FAF2F7] text-[#241132] border border-[#F0D5E6] font-bold text-xs uppercase tracking-wider rounded-lg transition-all"
                >
                  MEET OUR TEAM
                </Link>
              </div>
            </div>

            {/* Right Column: Doctor Photo & Trust Card */}
            <div className="lg:col-span-5 flex justify-center items-center pt-2 lg:pt-0">
              <div className="relative w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[440px]">
                {/* Doctor Showcase Image Card */}
                <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-[0_16px_40px_-10px_rgba(36,17,50,0.14)] border border-[#F0D5E6]/80 bg-white">
                  <img
                    src="/images/image copy 6.png"
                    alt="Sequel IVF – Advanced Fertility Specialists"
                    className="w-full h-auto object-cover transition-transform duration-500 hover:scale-[1.01]"
                    loading="lazy"
                  />

                  {/* Play Video Button in Top-Left (Triggers Video Modal) */}
                  <button
                    type="button"
                    onClick={() => setIsVideoModalOpen(true)}
                    className="absolute top-4 left-4 sm:top-5 sm:left-5 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/95 backdrop-blur-md shadow-xl border border-white/80 flex items-center justify-center text-[#241132] hover:text-[#A21CAF] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer group z-10"
                    aria-label="Play Sequel IVF Video"
                  >
                    {/* Subtle radiating pulse ring */}
                    <span className="absolute inset-0 rounded-full bg-white/60 animate-ping opacity-75 pointer-events-none" />
                    
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current ml-0.5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>

                {/* Floating "9650+ CUSTOMERS TRUST US" Badge matching user mockup */}
                <div className="absolute -bottom-5 -left-4 sm:-bottom-6 sm:-left-6 bg-white/95 backdrop-blur-md rounded-2xl px-5 py-4 sm:px-6 sm:py-4.5 shadow-[0_14px_35px_-8px_rgba(36,17,50,0.18)] border border-[#F0D5E6] z-20">
                  <div className="font-bold text-2xl sm:text-3xl text-[#241132] leading-none mb-1">
                    9650<span className="text-[#A21CAF] ml-0.5 font-extrabold">+</span>
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-bold text-[#C49F64] tracking-wider uppercase">
                    CUSTOMERS TRUST US
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer onBookClick={onBookClick} />

      {/* Video Modal Popup (Plays YouTube Video on Click) */}
      {isVideoModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/85 backdrop-blur-md animate-fadeIn"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl bg-black rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-[#A21CAF] text-white flex items-center justify-center border border-white/20 transition-all cursor-pointer hover:scale-105"
              aria-label="Close video"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Responsive 16:9 Aspect Ratio Container */}
            <div className="relative pt-[56.25%] w-full bg-black">
              <iframe
                src="https://www.youtube.com/embed/cERKNRIBjGA?autoplay=1&rel=0"
                title="Sequel IVF Video"
                className="absolute inset-0 w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
