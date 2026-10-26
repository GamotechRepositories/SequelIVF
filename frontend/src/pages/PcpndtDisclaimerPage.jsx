import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer.jsx'
import SEO from '../components/SEO.jsx'

export default function PcpndtDisclaimerPage({ onBookClick }) {
  const LAST_UPDATED = 'October 23, 2026'

  return (
    <div className="bg-[#FAF8FC] min-h-screen text-[#241132] font-body selection:bg-[#603085] selection:text-white pt-24 sm:pt-28">
      <SEO
        title="PC-PNDT Act Statutory Disclaimer | Sequel IVF Centre Pune"
        description="Official Statutory Disclaimer under the Pre-Conception and Pre-Natal Diagnostic Techniques (Prohibition of Sex Selection) Act, 1994 at Sequel IVF Centre, Hadapsar, Pune."
      />

      {/* Header Banner */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#2A1137] to-[#1C0B25] text-white py-14 sm:py-16 px-4 sm:px-6 lg:px-10">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C49F64_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          {/* Breadcrumbs */}
          <nav className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C49F64] mb-4">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/70">Regulatory</span>
            <span>/</span>
            <span className="text-white">PC-PNDT Disclaimer</span>
          </nav>

          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[#F0D5E6] text-xs font-bold uppercase tracking-widest border border-white/15 mb-3">
            <svg className="w-3.5 h-3.5 text-[#C49F64]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            Pre-Conception and Pre-Natal Diagnostic Techniques Act, 1994
          </span>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-3">
            Statutory PC-PNDT Disclaimer
          </h1>

          <p className="text-white/70 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Strict zero-tolerance policy against sex determination and gender selection under the PC-PNDT Act, 1994 at Sequel IVF Fertility Centre, Hadapsar, Pune.
          </p>

          <div className="mt-5 inline-flex items-center gap-2 text-xs text-[#C49F64] bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
            <span>Current as of:</span>
            <strong className="text-white">{LAST_UPDATED}</strong>
            <span className="text-white/40">•</span>
            <span>Pune Municipal Corporation (PMC) Health Jurisdiction</span>
          </div>
        </div>
      </section>

      {/* Main Content Article */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-10">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#F0D5E6] shadow-sm space-y-8 sm:space-y-10 leading-relaxed text-sm sm:text-base text-[#4A3B52]">

          {/* Statutory Zero-Tolerance Notice */}
          <div className="p-6 sm:p-7 rounded-2xl bg-[#FFF5F7] border-2 border-[#E11D48]/30 text-xs sm:text-sm shadow-xs">
            <div className="flex items-start gap-3 mb-3">
              <span className="text-2xl">⚠️</span>
              <div>
                <span className="text-[#BE123C] font-extrabold text-xs uppercase tracking-wider block">
                  STATUTORY NOTICE UNDER SECTION 18 & 22 OF THE PC-PNDT ACT, 1994
                </span>
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#881337] mt-0.5">
                  Sex Selection & Prenatal Sex Determination is Strictly Prohibited & Punishable by Law
                </h2>
              </div>
            </div>

            <p className="text-[#4C0519] leading-relaxed text-sm sm:text-base font-medium mb-3">
              <strong>Sequel IVF Fertility Centre</strong> strictly adheres to the provisions of the <strong>Pre-Conception and Pre-Natal Diagnostic Techniques (Prohibition of Sex Selection) Act, 1994 (PC-PNDT Act)</strong> and subsequent rules enacted by the Government of India and the Government of Maharashtra.
            </p>

            <div className="p-4 rounded-xl bg-white/80 border border-[#FDA4AF] text-[#881337] text-xs sm:text-sm font-semibold">
              🚫 Pre-natal sex determination or sex selection before or after conception is NOT conducted, encouraged, facilitated, or entertained at our centre under any circumstances.
            </div>
          </div>

          {/* Section 1: Legal Provisions & Penalties */}
          <div>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#241132] mb-3 flex items-center gap-2">
              <span className="text-sm font-sans font-bold text-[#603085] bg-[#F2D7E8] w-7 h-7 rounded-full inline-flex items-center justify-center">1</span>
              Legal Provisions & Penal Sanctions
            </h2>
            <p className="mb-3">
              Under Sections 23, 24, and 25 of the PC-PNDT Act, 1994:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#555555]">
              <li>Any person who seeks the aid of any genetic clinic, ultrasound laboratory, or medical practitioner for conducting prenatal diagnostic techniques for sex selection is liable for <strong>rigorous imprisonment up to 3 to 5 years and a substantial fine</strong>.</li>
              <li>Any medical practitioner or clinic personnel involved in conducting or communicating fetal gender faces <strong>permanent cancellation of medical registration, suspension of practice, and immediate non-bailable criminal prosecution</strong>.</li>
              <li>Any advertisement, communication, or suggestion regarding gender selection or female feticide is a cognizable criminal offense.</li>
            </ul>
          </div>

          {/* Section 2: Ultrasound Registration & Form F Maintenance */}
          <div>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#241132] mb-3 flex items-center gap-2">
              <span className="text-sm font-sans font-bold text-[#603085] bg-[#F2D7E8] w-7 h-7 rounded-full inline-flex items-center justify-center">2</span>
              Ultrasound Registration & Form F Compliance
            </h2>
            <p className="mb-3">
              All ultrasound scanning machines, follicular monitoring systems, and imaging apparatus installed at Sequel IVF:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#555555]">
              <li>Are formally registered with the <strong>Appropriate Authority (PC-PNDT Bureau, Pune Municipal Corporation - PMC)</strong>.</li>
              <li>Are operated solely for clinical assessment of ovarian response, endometrial thickness, follicular maturity, and fetal cardiac viability.</li>
              <li>Require mandatory digital execution and monthly submission of <strong>Form F</strong> records to the statutory authorities as mandated by law.</li>
            </ul>
          </div>

          {/* Section 3: Patient Cooperation Notice */}
          <div>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#241132] mb-3 flex items-center gap-2">
              <span className="text-sm font-sans font-bold text-[#603085] bg-[#F2D7E8] w-7 h-7 rounded-full inline-flex items-center justify-center">3</span>
              Notice to Patients & Attendants
            </h2>
            <p className="text-[#555555] mb-3">
              All prospective parents, couples, and family members visiting Sequel IVF are respectfully informed:
            </p>
            <div className="space-y-2 text-xs sm:text-sm">
              <div className="p-3.5 bg-[#FAF8FC] rounded-xl border border-[#F0D5E6] flex items-start gap-2.5">
                <span className="text-[#603085] font-bold">1.</span>
                <span>Please do not ask our doctors, sonographers, or nursing staff about the gender of the fetus. Inquiring or requesting sex determination is a cognizable criminal offense under Indian Law.</span>
              </div>
              <div className="p-3.5 bg-[#FAF8FC] rounded-xl border border-[#F0D5E6] flex items-start gap-2.5">
                <span className="text-[#603085] font-bold">2.</span>
                <span>Government-recognized identity proof (Aadhaar Card / Voter ID / Passport) is compulsory for all diagnostic ultrasound examinations and assisted reproductive procedures.</span>
              </div>
              <div className="p-3.5 bg-[#FAF8FC] rounded-xl border border-[#F0D5E6] flex items-start gap-2.5">
                <span className="text-[#603085] font-bold">3.</span>
                <span>Any attempt to solicit or offer inducements for sex determination will be reported directly to the Appropriate Police and Health Authorities.</span>
              </div>
            </div>
          </div>

          {/* Section 4: Commitment to the Girl Child */}
          <div>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#241132] mb-3 flex items-center gap-2">
              <span className="text-sm font-sans font-bold text-[#603085] bg-[#F2D7E8] w-7 h-7 rounded-full inline-flex items-center justify-center">4</span>
              Institutional Commitment to Gender Equality
            </h2>
            <p className="text-[#555555]">
              Sequel IVF stands firmly committed to the <em>&quot;Beti Bachao, Beti Padhao&quot;</em> national mission and champions equal rights, dignity, and celebration for every child regardless of gender. Our medical practice is built solely on ethical science, transparency, and clinical excellence.
            </p>
          </div>

          {/* Statutory Registration Details */}
          <div className="p-5 rounded-2xl bg-[#FAF8FC] border border-[#F0D5E6] text-xs sm:text-sm space-y-1.5 text-[#3C2048]">
            <p><strong>Clinical & Diagnostic Centre:</strong></p>
            <p>Sequel IVF Fertility Centre (Under Medical Direction of Dr. Leena Patankar)</p>
            <p>103–104, 1st Floor, Yash Complex, Near Bhosale Garden, Hadapsar, Pune – 411028, Maharashtra</p>
            <p>Supervising Authority: Appropriate Authority PC-PNDT, Hadapsar Ward / Pune Municipal Corporation (PMC)</p>
            <p>Helpline: <a href="tel:+919665279369" className="text-[#603085] font-bold hover:underline">+91 9665 279 369</a> · Email: <a href="mailto:sequelivf@gmail.com" className="text-[#603085] font-bold hover:underline">sequelivf@gmail.com</a></p>
          </div>

          {/* Bottom Actions */}
          <div className="pt-6 border-t border-[#F0D5E6] flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-[#888888]">
              Related Compliance Documents:
              <span className="mx-2">|</span>
              <Link to="/art-act-compliance" className="text-[#603085] font-semibold hover:underline">ART Act Compliance</Link>
              <span className="mx-2">•</span>
              <Link to="/privacy-policy" className="text-[#603085] font-semibold hover:underline">Privacy Policy</Link>
            </div>

            <button
              type="button"
              onClick={() => onBookClick && onBookClick('Ethical Fertility Guidance')}
              className="px-5 py-2.5 rounded-xl bg-[#603085] hover:bg-[#4E276D] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm cursor-pointer"
            >
              Book Confidential Consultation
            </button>
          </div>

        </div>
      </section>

      <Footer onBookClick={onBookClick} />
    </div>
  )
}
