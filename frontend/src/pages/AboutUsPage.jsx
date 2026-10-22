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
      {/* ═══════════════ Hero / Breadcrumb Header ═══════════════ */}
      <section className="relative overflow-hidden py-10 sm:py-14 border-b border-[#F0D5E6]/80 bg-[#F5F2F8]">
        {/* Background Image with Multi-layer Soft Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/image copy 5.png"
            alt="Sequel IVF Luxury Fertility Clinic Centre"
            className="w-full h-full object-cover object-[center_35%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-transparent sm:from-[#F5F2F8]/95 sm:via-[#F5F2F8]/80 sm:to-transparent lg:w-3/5" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-white/30" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl">
            {/* Breadcrumbs */}
            <nav className="inline-flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs font-medium px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white/85 backdrop-blur-md border border-[#F0D5E6] text-[#7C6285] mb-2 sm:mb-3 shadow-xs max-w-full overflow-x-auto whitespace-nowrap">
              <Link to="/" className="hover:text-[#603085] transition-colors shrink-0">Home</Link>
              <span className="text-[#C49F64] shrink-0">/</span>
              <span className="text-[#603085] font-semibold shrink-0">About Us</span>
            </nav>

            <span className="text-[#603085] font-bold text-xs tracking-widest uppercase block mb-1">
              ABOUT SEQUEL IVF
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-medium tracking-tight mb-3">
              <span className="text-[#603085]">About</span>{' '}
              <span className="text-[#C49F64]">Our Centre</span>
            </h1>

            {/* Legacy Statement Quote */}
            <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed italic border-l-2 border-[#C49F64] pl-3.5 mt-2">
              <strong className="text-[#603085] not-italic font-bold">“Since 1998”</strong> our experts have been dedicated to supporting infertile couples on their path to parenthood and establishing world-class ART centers. We are proud to introduce our newest facility, continuing our legacy of science and care.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════ Main Content Section ═══════════════ */}
      <section className="py-10 sm:py-14 flex-1">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-14 items-start">
            
            {/* Left Column: Natural Editorial Flow without blocky cards */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              {/* Eyebrow / Kicker */}
              <span className="text-[#603085] font-bold text-xs tracking-wider uppercase block mb-1.5">
                WELCOME TO SEQUEL IVF
              </span>

              {/* Main Headline */}
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-[34px] leading-[1.2] font-medium tracking-tight text-[#C49F64] mb-4">
                Where Hope Begins and Families Grow
              </h2>

              {/* Narrative paragraphs */}
              <div className="space-y-3.5 text-[#4B5563] text-sm sm:text-[14.5px] leading-[1.75]">
                <p>
                  Welcome to <strong>Sequel IVF</strong>, a world-class fertility service where we believe that every fertility journey is unique and deserves a dedicated “next chapter”—a sequel filled with hope, precision care, and success.
                </p>

                <p>
                  At Sequel IVF in Pune, we believe that a challenging diagnosis is never the end of your story. It is simply a page turning to a new chapter—and we are here to help you write it. Combining advanced reproductive science with compassionate, tender care, our expert team walks beside you every step of the way to bring the joy of a new beginning into your family.
                </p>

                <p>
                  We are a specialized, state-of-the-art fertility center dedicated exclusively to guiding childless couples through the complexities of reproductive medicine. By bringing world-class embryology standards directly to patient care, we ensure your dreams are shielded by the very best that modern science has to offer.
                </p>
              </div>

              {/* Mission & Vision (Clean typographic block) */}
              <div className="my-6 grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-[#F5F2F8]/70 border border-[#F0D5E6]/80">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#603085] block mb-1">
                    Our Mission
                  </span>
                  <p className="text-xs sm:text-[13px] text-[#4B5563] leading-relaxed">
                    <strong className="text-[#241132]">Your next generation – Sequel:</strong> To stand as your most trusted companion on the road to parenthood, combining cutting-edge reproductive science with a compassionate, gentle touch to give every couple the highest possible chance of bringing their baby home.
                  </p>
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#C49F64] block mb-1">
                    Our Vision
                  </span>
                  <p className="text-xs sm:text-[13px] text-[#4B5563] leading-relaxed">
                    To be a sanctuary of hope and clinical perfection in Pune, where complex reproductive challenges are overcome through rigorous scientific innovation and deeply personalized patient care.
                  </p>
                </div>
              </div>

              {/* Why Couples Trust Their Dreams to Us */}
              <div className="mb-6">
                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#241132] mb-3">
                  Why Couples Trust Their Dreams to Us
                </h3>
                <ul className="space-y-3 text-xs sm:text-[13.5px] text-[#4B5563] leading-relaxed">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#603085] shrink-0 mt-2" />
                    <span>
                      <strong className="text-[#241132]">A Sanctuary for Your Future Embryos:</strong> The earliest stages of life require a flawless environment. Our clinic features an elite, custom-engineered laboratory cleanroom where we strictly control Volatile Organic Compounds (VOCs) and utilize advanced air filtration. We treat the laboratory as a sacred space, protecting your developing cells with absolute scientific devotion.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C49F64] shrink-0 mt-2" />
                    <span>
                      <strong className="text-[#241132]">Precision and Vigilance:</strong> Behind our clinic doors lies advanced medical technology, including specialized incubator systems that replicate the natural warmth and environment of a mother’s body. Every step of your treatment is monitored with microscopic precision to ensure optimal baby/embryo/blastocyst development.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#603085] shrink-0 mt-2" />
                    <span>
                      <strong className="text-[#241132]">The Right Treatment at the Right Time:</strong> Our goal is to recommend the treatment that offers the highest chance of pregnancy while avoiding unnecessary delays. We offer the entire spectrum of fertility treatment—from natural conception guidance to advanced IVF and ICSI—and recommend the treatment that gives each couple the best chance of success, at the right time.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Four Core Pillars (Clean structured list) */}
              <div className="mb-6 pt-4 border-t border-[#F0D5E6]/80">
                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#241132] mb-2">
                  Four Core Pillars
                </h3>
                <p className="text-xs sm:text-[13.5px] text-[#4B5563] mb-3 leading-relaxed">
                  Choosing a partner for your fertility journey is a profound decision. <strong>Dr. Leena Patankar and team</strong> have built their reputation on four core pillars:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-3 text-xs sm:text-[13px] text-[#4B5563]">
                  <div className="p-2.5 rounded-lg bg-[#FAF7FC] border border-[#F0D5E6]/60">
                    <h4 className="font-bold text-[#603085] mb-0.5">1. Consistency you can count on</h4>
                    <p className="leading-relaxed">In embryology, absolute consistency yields results. From strict ambient cleanroom environments to continuous microscopic incubator monitoring, we ensure an unchanging, optimal sanctuary for your embryos.</p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#FAF7FC] border border-[#F0D5E6]/60">
                    <h4 className="font-bold text-[#603085] mb-0.5">2. Transparency at every step</h4>
                    <p className="leading-relaxed">Trust is built on absolute clarity. From clear diagnostic explanations to open discussions about personalized treatment pathways, we keep you fully informed and empowered.</p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#FAF7FC] border border-[#F0D5E6]/60">
                    <h4 className="font-bold text-[#603085] mb-0.5">3. Proficiency driven by decades of expertise</h4>
                    <p className="leading-relaxed">Since 1998, our experts have been at the absolute forefront of reproductive medicine, handling advanced micro-environments with elite precision to bring global scientific mastery to your care.</p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#FAF7FC] border border-[#F0D5E6]/60">
                    <h4 className="font-bold text-[#603085] mb-0.5">4. Reliability when it matters most</h4>
                    <p className="leading-relaxed">We combine rigid laboratory safety protocols with a warm, supportive team strictly dedicated to your emotional well-being, comfort, and ultimate success.</p>
                  </div>
                </div>
              </div>

              {/* Divider & CTA Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <button
                  type="button"
                  onClick={onBookClick}
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#603085] hover:bg-[#4E276D] active:scale-95 text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-md transition-all cursor-pointer"
                >
                  MAKE AN APPOINTMENT
                </button>
                <Link
                  to="/our-team"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white hover:bg-[#F5F2F8] text-[#241132] border border-[#F0D5E6] font-bold text-xs uppercase tracking-wider rounded-lg transition-all"
                >
                  MEET OUR TEAM
                </Link>
              </div>
            </div>

            {/* Right Column: Doctor Photo & Trust Card (Sticky on Desktop) */}
            <div className="lg:col-span-5 flex justify-center items-center lg:sticky lg:top-28 pt-2 lg:pt-0">
              <div className="relative w-full max-w-[360px] sm:max-w-[400px]">
                {/* Doctor Showcase Image Card */}
                <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-[0_16px_40px_-10px_rgba(36,17,50,0.14)] border border-[#F0D5E6]/80 bg-white">
                  <img
                    src="/images/image copy 6.png"
                    alt="Sequel IVF – Advanced Fertility Specialists"
                    className="w-full h-auto object-cover transition-transform duration-500 hover:scale-[1.01]"
                    loading="lazy"
                  />

                  {/* Play Video Button in Top-Left */}
                  <button
                    type="button"
                    onClick={() => setIsVideoModalOpen(true)}
                    className="absolute top-4 left-4 sm:top-5 sm:left-5 w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-white/95 backdrop-blur-md shadow-xl border border-white/80 flex items-center justify-center text-[#241132] hover:text-[#603085] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer group z-10"
                    aria-label="Play Sequel IVF Video"
                  >
                    <span className="absolute inset-0 rounded-full bg-white/60 animate-ping opacity-75 pointer-events-none" />
                    <svg className="w-5 h-5 fill-current ml-0.5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>

                {/* Floating "9650+ CUSTOMERS TRUST US" Badge */}
                <div className="absolute -bottom-4 -left-3 sm:-bottom-5 sm:-left-5 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-3 sm:px-5 sm:py-3.5 shadow-[0_14px_35px_-8px_rgba(36,17,50,0.18)] border border-[#F0D5E6] z-20">
                  <div className="font-bold text-xl sm:text-2xl text-[#241132] leading-none mb-0.5">
                    9650<span className="text-[#603085] ml-0.5 font-extrabold">+</span>
                  </div>
                  <div className="text-[10px] font-bold text-[#C49F64] tracking-wider uppercase">
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
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-[#603085] text-white flex items-center justify-center border border-white/20 transition-all cursor-pointer hover:scale-105"
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
