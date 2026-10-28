import React from 'react'

export default function WhyChooseUs({ onBookClick }) {
  const REASONS = [
    {
      title: 'Personalized Treatment',
      text: 'Every fertility journey is unique. Our treatment plans are tailored according to individual medical needs and goals.',
      icon: (
        /* 1. Personalized Treatment: Patient-centric avatar in protective circle */
        <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="7" r="3.5" fill="currentColor" fillOpacity="0.15" />
          <path d="M6 18c0-3.3 2.7-6 6-6s6 2.7 6 6" fill="currentColor" fillOpacity="0.1" />
          <ellipse cx="12" cy="19.5" rx="7.5" ry="2" strokeWidth="1.5" />
          <path d="M9.5 15v3M14.5 15v3" />
        </svg>
      ),
    },
    {
      title: 'Advanced IVF Technology',
      text: 'We use modern fertility techniques and advanced laboratory practices to support IVF and ICSI treatment.',
      icon: (
        /* 2. Advanced IVF Technology: Modern laboratory inspection lamp & optical device */
        <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 6h10l2 7H5l2-7Z" fill="currentColor" fillOpacity="0.12" />
          <path d="M12 2v4" />
          <path d="M10 2h4" />
          <path d="M12 13v6" />
          <path d="M8 21h8" />
          <path d="M10 19h4" />
          <circle cx="12" cy="10" r="1.2" fill="currentColor" />
        </svg>
      ),
    },
    {
      title: 'Experienced Specialists',
      text: 'Our experienced team brings extensive expertise in reproductive medicine, embryology, and fertility care.',
      icon: (
        /* 3. Experienced Specialists: Radiating lightbulb of innovation over an open book */
        <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="2" x2="12" y2="3.5" />
          <line x1="6.5" y1="4.5" x2="7.8" y2="5.8" />
          <line x1="17.5" y1="4.5" x2="16.2" y2="5.8" />
          <line x1="4.5" y1="9" x2="6" y2="9" />
          <line x1="19.5" y1="9" x2="18" y2="9" />
          <path d="M9 9a3 3 0 1 1 6 0c0 1.2-.6 2.1-1.5 2.7-.3.2-.5.6-.5 1v.3h-2v-.3c0-.4-.2-.8-.5-1C9.6 11.1 9 10.2 9 9Z" fill="currentColor" fillOpacity="0.15" />
          <path d="M4.5 19.5c2.5-1.5 5-1.2 7.5 1 2.5-2.2 5-2.5 7.5-1v-4c-2.5-1.5-5-1.2-7.5 1-2.5-2.2-5-2.5-7.5-1v4Z" />
          <line x1="12" y1="16.5" x2="12" y2="20.5" />
        </svg>
      ),
    },
    {
      title: 'Compassionate Support',
      text: 'We provide dedicated guidance and emotional support throughout your fertility journey, from consultation to treatment.',
      icon: (
        /* 4. Compassionate Support: Counselor with headset, laptop, and speech bubble */
        <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h5a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H6.5L4 10.5V6a2 2 0 0 1 2-2Z" fill="currentColor" fillOpacity="0.15" />
          <circle cx="5.8" cy="6.5" r="0.4" fill="currentColor" />
          <circle cx="7.2" cy="6.5" r="0.4" fill="currentColor" />
          <circle cx="8.6" cy="6.5" r="0.4" fill="currentColor" />
          <circle cx="15.5" cy="8.5" r="2.5" />
          <path d="M13 8.2a2.8 2.8 0 0 1 5 0" />
          <path d="M18 8.5v1.5a1 1 0 0 1-1 1h-1" />
          <path d="M11.5 17c0-2.2 1.8-4 4-4s4 1.8 4 4" />
          <path d="M10 20h11" strokeWidth="2" />
          <path d="M12 17.5h7l1 2.5h-9l1-2.5Z" fill="currentColor" fillOpacity="0.1" />
        </svg>
      ),
    },
  ]

  return (
    <section id="why-choose-us" className="relative overflow-hidden bg-gradient-to-b from-white via-[#F5F2F8] to-white py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Heading, Content & Original Cutout Image */}
          <div className="lg:col-span-5">
            <span className="text-[#603085] font-bold text-xs sm:text-sm tracking-widest uppercase block mb-2">
              Why choose us
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] leading-tight font-medium tracking-tight">
              <span className="text-[#603085]">Advanced Fertility Care,</span>{' '}
              <span className="text-[#C49F64]">Personalized for You</span>
            </h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-[#603085] to-[#C49F64] mt-4 mb-5" />
            <p className="text-[#644B6F] text-[15px] sm:text-[16px] leading-relaxed max-w-md mb-7">
              At <strong className="font-semibold text-[#241132]">Sequel IVF</strong>, we combine medical expertise, advanced reproductive technology, and compassionate care to support every individual and couple on their fertility journey. Our personalized approach focuses on understanding your unique needs and providing guidance at every stage of treatment.
            </p>
            <div
              onClick={onBookClick}
              className="relative max-w-md cursor-pointer group"
            >
              <div className="relative overflow-hidden rounded-2xl img-shine-effect">
                <img
                  src="/images/Warm Pregnancy Consultation Cutout.png"
                  alt="Warm pregnancy consultation at Sequel IVF"
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                  style={{
                    maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                  }}
                />
                <div className="absolute inset-x-0 bottom-0 h-10 sm:h-12 bg-gradient-to-t from-[#F5F2F8] to-transparent pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Right Column: The 4 Reasons with Icons */}
          <div className="lg:col-span-7">
            {REASONS.map((reason, index) => (
              <div
                key={reason.title}
                className={`group flex items-start gap-4 sm:gap-6 py-5 sm:py-6 ${index !== REASONS.length - 1 ? 'border-b border-[#E4D4EE]' : ''}`}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-[#603085] to-[#451864] border border-[#743A9E]/30 shadow-[0_6px_16px_-4px_rgba(96,48,133,0.35)] flex items-center justify-center text-white shrink-0 transition-all duration-300 group-hover:scale-105 group-hover:from-[#72389C] group-hover:to-[#501D73] group-hover:shadow-[0_10px_22px_-4px_rgba(96,48,133,0.5)]">
                  {reason.icon}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-[#241132] text-base sm:text-[18px] mb-1.5 group-hover:text-[#603085] transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-[#644B6F] text-sm sm:text-[15px] leading-relaxed">
                    {reason.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

