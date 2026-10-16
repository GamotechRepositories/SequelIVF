import React from 'react'

export default function TrustAccreditation() {
  const BADGES = [
    {
      title: 'Indian Council of Medical Research',
      code: 'ICMR',
      subtitle: 'Registered ART & IVF Clinic',
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#53385E]" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M12 2L4 6v6c0 5.5 3.5 10.7 8 12 4.5-1.3 8-6.5 8-12V6l-8-4z" />
          <path d="M9 12l2 2 4-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: 'National Accreditation Board',
      code: 'NABH',
      subtitle: 'Quality & Patient Safety Certified',
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#53385E]" fill="none" stroke="currentColor" strokeWidth="1.6">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 3" strokeLinecap="round" />
          <circle cx="12" cy="12" r="3" fill="currentColor" fillOpacity="0.2" />
        </svg>
      ),
    },
    {
      title: 'General Medical Council',
      code: 'GMC & NMC',
      subtitle: 'Certified Reproductive Specialists',
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#53385E]" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
          <path d="M6 6h10M6 10h10M6 14h6" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: 'Royal College of Radiologists',
      code: 'RCR & IFUMB',
      subtitle: 'Fetal Ultrasound Excellence',
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#53385E]" fill="none" stroke="currentColor" strokeWidth="1.6">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" strokeLinecap="round" />
          <path d="M7 10c2-3 4-3 6 0s4 3 6 0" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: 'Royal College of Obstetricians',
      code: 'RCOG & FOGSI',
      subtitle: 'Gold Standard Maternity Care',
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#53385E]" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      ),
    },
    {
      title: 'Care Quality Commission',
      code: 'CQC & ISO 9001',
      subtitle: 'Accredited Lab Environments',
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#53385E]" fill="none" stroke="currentColor" strokeWidth="1.6">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 8v4l2.5 2.5" strokeLinecap="round" />
          <path d="M8.5 15.5l7-7" strokeLinecap="round" strokeDasharray="1 2" />
        </svg>
      ),
    },
  ]

  return (
    <section id="regulated" className="bg-white py-14 sm:py-18 border-b border-[#F5E6F0]">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-center">

          {/* Left Text (4 cols): Registered & regulated */}
          <div className="lg:col-span-4">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#241132] tracking-tight leading-tight mb-4">
              Registered<br />& regulated
            </h2>
            <p className="text-[#644B6F] text-[15px] sm:text-[16px] leading-relaxed max-w-sm">
              Welcome to Sequel IVF Clinic in Hadapsar, Pune. ICMR registered and NABH accredited, delivering internationally certified fertility care with 24+ years of clinical excellence.
            </p>
          </div>

          {/* Right Badges Grid (8 cols): 2 rows of 3 logos matching reference */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 items-center">
              {BADGES.map((b) => (
                <div
                  key={b.title}
                  className="flex items-center gap-3.5 p-3 rounded-2xl hover:bg-[#FAF4F8] transition-colors duration-200 group cursor-default"
                >
                  <div className="shrink-0 p-2 rounded-xl bg-[#FAF0F7] group-hover:bg-[#F5E3EF] transition-colors">
                    {b.icon}
                  </div>
                  <div>
                    <span className="block font-heading font-extrabold text-[15px] text-[#241132] leading-tight">
                      {b.code}
                    </span>
                    <span className="block text-[11px] font-medium text-[#7C6285] leading-tight mt-0.5 line-clamp-1">
                      {b.title}
                    </span>
                    <span className="block text-[10px] text-gray-400 leading-tight">
                      {b.subtitle}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
