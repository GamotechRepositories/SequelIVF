import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer.jsx'
import SEO from '../components/SEO.jsx'

export default function ArtCompliancePage({ onBookClick }) {
  const LAST_UPDATED = 'October 23, 2026'

  return (
    <div className="bg-[#FAF8FC] min-h-screen text-[#241132] font-body selection:bg-[#603085] selection:text-white pt-24 sm:pt-28">
      <SEO
        title="ART Act Compliance | Sequel IVF Fertility Centre Pune"
        description="Statutory Compliance with the Assisted Reproductive Technology (Regulation) Act, 2021 & Surrogacy (Regulation) Act, 2021 at Sequel IVF Centre, Hadapsar, Pune."
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
            <span className="text-white">ART Act Compliance</span>
          </nav>

          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[#F0D5E6] text-xs font-bold uppercase tracking-widest border border-white/15 mb-3">
            <svg className="w-3.5 h-3.5 text-[#C49F64]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Assisted Reproductive Technology (Regulation) Act, 2021
          </span>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-3">
            ART Act Compliance & Ethical Fertility Practice
          </h1>

          <p className="text-white/70 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Statutory statement of compliance with the National ART & Surrogacy Board, ethical patient eligibility criteria, and clinical governance at Sequel IVF, Pune.
          </p>

          <div className="mt-5 inline-flex items-center gap-2 text-xs text-[#C49F64] bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
            <span>Current as of:</span>
            <strong className="text-white">{LAST_UPDATED}</strong>
            <span className="text-white/40">•</span>
            <span>National ART Registry & Maharashtra State Board</span>
          </div>
        </div>
      </section>

      {/* Main Content Article */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-10">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#F0D5E6] shadow-sm space-y-8 sm:space-y-10 leading-relaxed text-sm sm:text-base text-[#4A3B52]">

          {/* Statutory Commitment Box */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#FAF8FC] border-l-4 border-[#603085] text-xs sm:text-sm">
            <h2 className="font-serif text-lg sm:text-xl font-bold text-[#241132] mb-2 flex items-center gap-2">
              <span className="text-[#603085]">⚖️</span> Institutional Compliance Statement
            </h2>
            <p className="text-[#555555] leading-relaxed">
              <strong>Sequel IVF Fertility Centre</strong> (Hadapsar, Pune), operating under the medical direction of <strong>Dr. Leena Patankar</strong>, operates in strict conformity with <strong>The Assisted Reproductive Technology (Regulation) Act, 2021</strong> and <strong>The Surrogacy (Regulation) Act, 2021</strong> along with all rules, notifications, and directives issued by the <strong>Ministry of Health and Family Welfare (MoHFW), Government of India</strong> and the <strong>Maharashtra State Appropriate Authority</strong>.
            </p>
          </div>

          {/* Section 1: Statutory Registration */}
          <div>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#241132] mb-3 flex items-center gap-2">
              <span className="text-sm font-sans font-bold text-[#603085] bg-[#F2D7E8] w-7 h-7 rounded-full inline-flex items-center justify-center">1</span>
              Accreditation & Registry Status
            </h2>
            <p className="mb-3">
              Our centre fulfills all statutory infrastructure, embryology lab cleanroom specifications, and specialist qualifications mandated for Level 2 ART Clinics:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#555555]">
              <li><strong>National Registry Filing:</strong> Formally enrolled and compliant under the National ART and Surrogacy Registry of India.</li>
              <li><strong>State Appropriate Authority Supervision:</strong> Regulated by the Maharashtra State Appropriate Authority and Public Health Department.</li>
              <li><strong>Qualified Specialists:</strong> Led by recognized reproductive medicine specialists and certified clinical embryologists adhering to National Medical Commission ethical codes.</li>
            </ul>
          </div>

          {/* Section 2: Statutory Age & Eligibility Criteria */}
          <div>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#241132] mb-3 flex items-center gap-2">
              <span className="text-sm font-sans font-bold text-[#603085] bg-[#F2D7E8] w-7 h-7 rounded-full inline-flex items-center justify-center">2</span>
              Statutory Patient Eligibility Criteria
            </h2>
            <p className="mb-4">
              Under Section 21 of the ART (Regulation) Act, 2021, ART clinics in India can provide assisted reproductive treatments solely to patients who fulfill statutory eligibility parameters:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded-2xl bg-[#FAF8FC] border border-[#F0D5E6]">
                <span className="font-bold text-[#603085] block text-sm mb-1">Female Partner / Patient</span>
                <p className="text-[#3C2048] font-bold text-base mb-1">21 to 50 Years</p>
                <p className="text-[#777777] text-xs">Must have completed 21 years of age and not exceeded 50 years at the time of procedure initiation.</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF8FC] border border-[#F0D5E6]">
                <span className="font-bold text-[#603085] block text-sm mb-1">Male Partner / Patient</span>
                <p className="text-[#3C2048] font-bold text-base mb-1">21 to 55 Years</p>
                <p className="text-[#777777] text-xs">Must have completed 21 years of age and not exceeded 55 years at the time of procedure initiation.</p>
              </div>
            </div>

            <p className="text-xs text-[#777777] mt-3 italic">
              *Services are offered to legally married heterosexual couples and eligible single women (divorced or widowed) within prescribed legal parameters. Government-issued photo identification and marriage verification are verified prior to procedure initiation.
            </p>
          </div>

          {/* Section 3: Informed Consent & Mandatory Counseling */}
          <div>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#241132] mb-3 flex items-center gap-2">
              <span className="text-sm font-sans font-bold text-[#603085] bg-[#F2D7E8] w-7 h-7 rounded-full inline-flex items-center justify-center">3</span>
              Comprehensive Counseling & Informed Consent
            </h2>
            <p className="mb-3">
              The ART Act mandates that patients are provided with unbiased, thorough information before any clinical or laboratory intervention:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#555555]">
              <li><strong>Pre-Treatment Counseling:</strong> Every couple undergoes structured counseling covering clinical success estimates, procedure duration, emotional considerations, and complete cost transparency with zero hidden charges.</li>
              <li><strong>Tri-Lingual Documentation:</strong> Statutory consent forms are executed in writing in a language understood by the patient (English, Marathi, or Hindi).</li>
              <li><strong>Right to Withdraw:</strong> Patients retain the statutory right to withdraw consent at any stage prior to embryo transfer.</li>
            </ul>
          </div>

          {/* Section 4: Donor Gametes & ART Bank Norms */}
          <div>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#241132] mb-3 flex items-center gap-2">
              <span className="text-sm font-sans font-bold text-[#603085] bg-[#F2D7E8] w-7 h-7 rounded-full inline-flex items-center justify-center">4</span>
              Gamete Donor Ethics & Registered ART Banks
            </h2>
            <div className="bg-[#FFF9F3] border border-[#FDE6D2] p-4 sm:p-5 rounded-xl text-xs sm:text-sm text-[#7A3E00] mb-3">
              <strong>Zero Commercialization:</strong> Commercial buying, selling, or unauthorized procurement of human eggs, sperm, or embryos is strictly prohibited by law.
            </div>
            <p className="text-[#555555] mb-3">
              In cases where third-party reproduction is medically indicated:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#555555]">
              <li>All donor gametes are sourced strictly through government-registered ART Banks.</li>
              <li>Strict anonymity is maintained between the donor and the recipient couple.</li>
              <li>All donors undergo mandatory infectious disease screening, genetic carrier screening, and psychological evaluation in compliance with national protocols.</li>
            </ul>
          </div>

          {/* Section 5: Prohibition of Sex Selection */}
          <div>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#241132] mb-3 flex items-center gap-2">
              <span className="text-sm font-sans font-bold text-[#603085] bg-[#F2D7E8] w-7 h-7 rounded-full inline-flex items-center justify-center">5</span>
              Strict Prohibition of Sex Selection
            </h2>
            <p className="text-[#555555] mb-2">
              Section 28 of the ART Act explicitly prohibits pre-implantation sex selection:
            </p>
            <div className="p-4 bg-[#FAF8FC] border border-[#F0D5E6] rounded-xl text-xs sm:text-sm text-[#241132]">
              <em>&quot;No ART clinic or bank shall perform any treatment or procedure for the purpose of sex selection, or disclose the sex of the fetus or embryo at any stage.&quot;</em>
            </div>
            <p className="text-xs text-[#777777] mt-2">
              Pre-implantation Genetic Testing (PGT-A/PGT-M) is conducted exclusively to detect severe monogenic disorders or lethal aneuploidies under medical advice, and never for gender determination.
            </p>
          </div>

          {/* Section 6: Embryo Cryopreservation Standards */}
          <div>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#241132] mb-3 flex items-center gap-2">
              <span className="text-sm font-sans font-bold text-[#603085] bg-[#F2D7E8] w-7 h-7 rounded-full inline-flex items-center justify-center">6</span>
              Cryopreservation & Laboratory Safety
            </h2>
            <p className="text-[#555555]">
              Embryos, oocytes, and sperm samples are preserved in advanced liquid nitrogen storage systems with continuous temperature logging and dual alarm protocols. Storage is maintained strictly within statutory time limits (up to 10 years or as authorized by current regulations), with clear instructions from the commissioning couple.
            </p>
          </div>

          {/* Clinic Address & Authority Contact */}
          <div className="p-5 rounded-2xl bg-[#FAF8FC] border border-[#F0D5E6] text-xs sm:text-sm space-y-1.5 text-[#3C2048]">
            <p><strong>Clinical Direction & Compliance Oversight:</strong></p>
            <p>Dr. Leena Patankar (Chief Infertility Specialist & Medical Director)</p>
            <p>Sequel IVF Fertility Centre, 103–104, 1st Floor, Yash Complex, Near Bhosale Garden, Hadapsar, Pune – 411028</p>
            <p>Helpline: <a href="tel:+919665279369" className="text-[#603085] font-bold hover:underline">+91 9665 279 369</a> · Email: <a href="mailto:sequelivf@gmail.com" className="text-[#603085] font-bold hover:underline">sequelivf@gmail.com</a></p>
          </div>

          {/* Bottom Actions */}
          <div className="pt-6 border-t border-[#F0D5E6] flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-[#888888]">
              Related Compliance Documents:
              <span className="mx-2">|</span>
              <Link to="/pcpndt-disclaimer" className="text-[#603085] font-semibold hover:underline">PCPNDT Disclaimer</Link>
              <span className="mx-2">•</span>
              <Link to="/privacy-policy" className="text-[#603085] font-semibold hover:underline">Privacy Policy</Link>
            </div>

            <button
              type="button"
              onClick={() => onBookClick && onBookClick('Fertility Assessment')}
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
