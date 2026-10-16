import React from 'react'

const LINKS = {
  'Fertility Treatments': [
    'In-Vitro Fertilization (IVF)',
    'Intracytoplasmic Sperm Injection (ICSI)',
    'Laser-Assisted Hatching (LAH)',
    'Endometrial Receptivity Assay (ERA)',
    'Semen Analysis & Andrology',
    'Egg & Embryo Vitrification',
  ],
  'Pregnancy Scans': [
    'Early Pregnancy Scan (6–8 wks)',
    'Private Harmony NIPT Blood Test',
    '4D Growth & Wellbeing (24–32 wks)',
    '4D Anatomy Anomaly Scan (19–22 wks)',
    'Pelvic & Follicular Tracking',
  ],
  'Clinic & Support': [
    'Dr. Leena Patankar (Clinical Director)',
    'Dr. Monika Thavare (Specialist)',
    'Dr. Chirag Sharma (Fellowship)',
    'Frequently Asked Questions (FAQs)',
    'Online Video Consultation',
    'In-Clinic Hadapsar Consultation',
  ],
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #180924 0%, #241132 50%, #30143F 100%)' }}>

      {/* Top wave */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-8" fill="none">
          <path d="M0 60V30C240 0 480 60 720 30C960 0 1200 60 1440 30V60H0Z" fill="#FAF2F7" />
        </svg>
      </div>

      <div className="relative pt-18 pb-8">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">

          {/* Top section */}
          <div className="grid lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">

            {/* Brand & Authentic Address */}
            <div className="lg:col-span-1">
              <div className="mb-4 inline-block bg-white rounded-2xl p-2.5 shadow-md">
                <img
                  src="/images/sequelivf.png"
                  alt="Sequel IVF Pune"
                  className="h-9 w-auto object-contain"
                />
              </div>

              <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-4">
                <strong>Sequel IVF — Taking Generations Ahead</strong>. Pune&apos;s trusted fertility and pregnancy scan centre with 24+ years of clinical excellence led by Dr. Leena Patankar.
              </p>

              <div className="text-white/60 text-xs space-y-1.5 mb-5">
                <p className="text-white/80 font-medium">
                  📍 103, 104, First Floor, Yash Complex, Survey No. 161/7, Near Bhosale Garden, Hadapsar, Pune – 411028.
                </p>
                <p>
                  📞 Helpline: <a href="tel:+919665279369" className="text-pink-300 font-bold hover:underline">+91-9665 279 369</a>
                </p>
                <p>
                  📧 Email: <a href="mailto:info@sequelivf.com" className="text-pink-300 hover:underline">info@sequelivf.com</a>
                </p>
                <p>
                  🕐 Mon–Sat: 10:00 AM – 07:00 PM | Sun: Closed
                </p>
              </div>

              {/* Accreditations */}
              <div className="flex flex-wrap gap-1.5">
                {['ICMR Registered', 'NABH Compliant', 'ART Act Certified'].map((b) => (
                  <span key={b} className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-white/10 text-white/80 border border-white/15">
                    {b}
                  </span>
                ))}
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(LINKS).map(([heading, links]) => (
              <div key={heading}>
                <h4 className="font-heading font-extrabold text-white text-xs uppercase tracking-widest mb-4">
                  {heading}
                </h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#contact" className="text-white/60 text-xs sm:text-sm hover:text-white transition-colors duration-150 flex items-center gap-1.5 group">
                        <span className="w-0 group-hover:w-2 overflow-hidden transition-all duration-200 text-[#E879F9]">›</span>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/40 text-xs">
            <p>© {new Date().getFullYear()} Sequel IVF Centre, Hadapsar, Pune. All rights reserved.</p>
            <div className="flex gap-5">
              <a href="#" className="hover:text-white/70 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white/70 transition-colors">ART Act Compliance</a>
              <a href="#" className="hover:text-white/70 transition-colors">PCPNDT Disclaimer</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
