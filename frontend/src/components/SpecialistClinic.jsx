import React from 'react'

export default function SpecialistClinic({ onBookScan }) {
  const SPECIALTIES = [
    {
      id: 'ivf-icsi',
      title: 'In-Vitro Fertilization (IVF) & ICSI',
      desc: 'Controlled ovarian stimulation, precision micromanipulation, cleanroom embryo culture, and personalized embryo transfer.',
      badge: 'Flagship Care',
      image: '/images/scan_harmony_nipt.jpg',
    },
    {
      id: 'lah-era',
      title: 'Laser-Assisted Hatching & ERA',
      desc: 'Advanced laser micromanipulation to thin the zona pellucida and Endometrial Receptivity Assay for optimal implantation.',
      badge: 'Advanced Tech',
      image: '/images/scan_early_pregnancy.jpg',
    },
    {
      id: 'andrology',
      title: 'Semen Analysis & Andrology',
      desc: 'Complete male fertility evaluation including sperm motility, concentration, vitality, and strict morphology testing.',
      badge: 'Diagnostic Lab',
      image: '/images/clinic_doctor_team.jpg',
    },
  ]

  const CONSULTATION_MODES = [
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#A21CAF]" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Direct In-Clinic Counseling',
      desc: 'One-on-one confidential consultation at our Hadapsar clinic with comprehensive pelvic scans and doctor guidance.',
      cta: 'Visit Hadapsar Clinic',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#A21CAF]" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Online Video Counseling',
      desc: 'Connect with our experienced specialists from home for detailed report reviews and customized treatment roadmaps.',
      cta: 'Book Video Consult',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#A21CAF]" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Advice by Phone Helpline',
      desc: 'Speak directly with our clinical coordinators for quick answers regarding treatment costs, timelines, and appointments.',
      cta: 'Call: +91 9665 279 369',
      isPhone: true,
    },
  ]

  return (
    <section id="specialist" className="bg-[#FAF2F7] py-18 sm:py-26 relative overflow-hidden">
      {/* Background soft ambient accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#FCE4F2]/40 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 relative z-10">

        {/* Hero Section of the Specialist Clinic (matching the right screen in the reference) */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">

          {/* Left Text */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#F0D5E6] text-xs font-bold text-[#A21CAF] mb-4">
              <span>Medical Leadership · 24+ Years Trust</span>
            </div>
            <h2 className="font-heading font-extrabold text-[36px] sm:text-[48px] lg:text-[56px] leading-[1.1] text-[#241132] tracking-tight mb-6">
              <span className="text-[#A21CAF] block">Specialist</span> fertility clinic
            </h2>
            <div className="space-y-3 text-[#53385E] text-[15px] sm:text-[17px] leading-relaxed max-w-xl mb-8">
              <p>
                Led by <strong>Dr. Leena Patankar</strong> (Clinical & Managing Director, Endoscopic Surgeon & Clinical Embryologist with 24 years of experience), our senior medical panel combines deep reproductive science with human empathy.
              </p>
              <p>
                Together with <strong>Dr. Monika Thavare</strong> and <strong>Dr. Chirag Sharma</strong>, our team provides trusted, transparent, and ethically certified fertility care.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onBookScan('Specialist Consultation with Dr. Leena Patankar')}
                className="px-7 py-3.5 rounded-full text-sm font-bold text-white bg-[#A21CAF] hover:bg-[#86198F] active:scale-95 shadow-md shadow-fuchsia-900/15 transition-all duration-200 cursor-pointer"
              >
                Book with a specialist
              </button>
              <a
                href="tel:+919665279369"
                className="px-6 py-3 rounded-full text-sm font-bold text-[#241132] bg-white border border-[#E9CCE0] hover:bg-[#FAF0F7] transition-colors"
              >
                Helpline: +91 9665 279 369
              </a>
            </div>
          </div>

          {/* Right Doctors Team Image in curved organic frame */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[540px]">
              <div className="relative rounded-[32px] overflow-hidden shadow-2xl shadow-purple-950/10 border-4 border-white">
                <img
                  src="/images/clinic_doctor_team.jpg"
                  alt="Sequel IVF medical doctors team led by Dr. Leena Patankar"
                  className="w-full h-[380px] sm:h-[440px] object-cover object-top"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent p-6 text-white">
                  <p className="font-heading font-extrabold text-lg">Dr. Leena Patankar & Senior Team</p>
                  <p className="text-xs text-white/90">Clinical Director · 24 Years Reproductive Medicine Excellence · Hadapsar, Pune</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 3 Consultation Modalities from Section 2.2 of Audit */}
        <div className="mb-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {CONSULTATION_MODES.map((mode) => (
            <div
              key={mode.title}
              className="bg-white/90 rounded-[24px] p-6 border border-[#F2D8E8] shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FAF0F7] border border-[#F0CEE3] flex items-center justify-center mb-4">
                  {mode.icon}
                </div>
                <h3 className="font-heading font-extrabold text-lg text-[#241132] mb-2">{mode.title}</h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-5">{mode.desc}</p>
              </div>
              {mode.isPhone ? (
                <a
                  href="tel:+919665279369"
                  className="text-xs font-bold text-[#A21CAF] hover:text-[#701A75] flex items-center gap-1.5 transition-colors"
                >
                  <span>{mode.cta}</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                  </svg>
                </a>
              ) : (
                <button
                  type="button"
                  onClick={() => onBookScan(mode.title)}
                  className="text-left text-xs font-bold text-[#A21CAF] hover:text-[#701A75] flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>{mode.cta}</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                  </svg>
                </button>
              )}
            </div>
          ))}
        </div>

        {/* 3 Specialized Treatment Cards below (matching the 3 cards in reference) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {SPECIALTIES.map((spec) => (
            <div
              key={spec.id}
              onClick={() => onBookScan(spec.title)}
              className="group cursor-pointer bg-white rounded-[26px] p-4 border border-[#F1D7E7] hover:border-[#A21CAF] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative rounded-[18px] overflow-hidden aspect-[16/10] bg-[#FAF2F7] mb-5">
                  <img
                    src={spec.image}
                    alt={spec.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[11px] font-bold bg-white/95 text-[#A21CAF] shadow-sm">
                    {spec.badge}
                  </div>
                </div>

                <h3 className="font-heading font-extrabold text-xl text-[#241132] group-hover:text-[#A21CAF] transition-colors mb-2">
                  {spec.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-4">
                  {spec.desc}
                </p>
              </div>

              {/* Distinctive Magenta bottom underline bar matching reference */}
              <div className="pt-3 border-t border-[#F8E7F2] flex items-center justify-between">
                <span className="text-xs font-bold text-[#A21CAF]">Schedule consultation</span>
                <span className="w-8 h-1 rounded-full bg-[#A21CAF] group-hover:w-14 transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
