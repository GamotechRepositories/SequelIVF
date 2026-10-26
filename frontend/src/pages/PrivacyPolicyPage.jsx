import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer.jsx'
import SEO from '../components/SEO.jsx'

export default function PrivacyPolicyPage({ onBookClick }) {
  const LAST_UPDATED = 'October 23, 2026'

  return (
    <div className="bg-[#FAF8FC] min-h-screen text-[#241132] font-body selection:bg-[#603085] selection:text-white pt-24 sm:pt-28">
      <SEO
        title="Privacy Policy | Sequel IVF Fertility Centre Pune"
        description="Patient Privacy Policy and Data Protection declaration for Sequel IVF Centre, Pune. Compliant with the Digital Personal Data Protection (DPDP) Act, 2023 and Indian IT regulations."
      />

      {/* Header Banner */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#2A1137] to-[#1C0B25] text-white py-14 sm:py-16 px-4 sm:px-6 lg:px-10">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C49F64_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          {/* Breadcrumbs */}
          <nav className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C49F64] mb-4">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/70">Legal</span>
            <span>/</span>
            <span className="text-white">Privacy Policy</span>
          </nav>

          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[#F0D5E6] text-xs font-bold uppercase tracking-widest border border-white/15 mb-3">
            <svg className="w-3.5 h-3.5 text-[#C49F64]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clipRule="evenodd" />
            </svg>
            Statutory Patient Data Protection
          </span>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-3">
            Privacy Policy & Health Data Governance
          </h1>

          <p className="text-white/70 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Protecting the confidentiality of your reproductive health records, consultation details, and personal identity under Indian healthcare data standards.
          </p>

          <div className="mt-5 inline-flex items-center gap-2 text-xs text-[#C49F64] bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
            <span>Current as of:</span>
            <strong className="text-white">{LAST_UPDATED}</strong>
            <span className="text-white/40">•</span>
            <span>Compliant with DPDP Act, 2023 & IT Act</span>
          </div>
        </div>
      </section>

      {/* Main Content Article */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-10">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#F0D5E6] shadow-sm space-y-8 sm:space-y-10 leading-relaxed text-sm sm:text-base text-[#4A3B52]">

          {/* Clinical Confidentiality Pledge */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#FAF8FC] border-l-4 border-[#603085] text-xs sm:text-sm">
            <h2 className="font-serif text-lg sm:text-xl font-bold text-[#241132] mb-2 flex items-center gap-2">
              <span className="text-[#603085]">🔒</span> Clinical Confidentiality Pledge
            </h2>
            <p className="text-[#555555] leading-relaxed">
              At <strong>Sequel IVF Fertility Centre</strong> (Hadapsar, Pune), we recognize that fertility treatment is deeply personal. All patient inquiries, treatment histories, diagnostic reports, and medical consultations are safeguarded with strict medical confidentiality and encrypted infrastructure in full accordance with the <strong>Digital Personal Data Protection Act, 2023 (DPDP Act)</strong>, the <strong>Information Technology Act, 2000</strong>, and <strong>National Medical Commission (NMC)</strong> ethical guidelines.
            </p>
          </div>

          {/* Section 1 */}
          <div>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#241132] mb-3 flex items-center gap-2">
              <span className="text-sm font-sans font-bold text-[#603085] bg-[#F2D7E8] w-7 h-7 rounded-full inline-flex items-center justify-center">1</span>
              Information We Collect
            </h2>
            <p className="mb-3">
              We collect information that you voluntarily provide when booking a consultation, submitting inquiries through our web forms, reaching our helpline, or visiting our clinic in Hadapsar, Pune:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#555555]">
              <li><strong>Contact Information:</strong> Full name, telephone/mobile number, email address, and residential city.</li>
              <li><strong>Medical & Fertility Context:</strong> Services of interest (e.g. IVF, ICSI, IUI, Male Infertility evaluation, Egg Freezing), preferred appointment dates, and voluntary notes regarding previous treatments.</li>
              <li><strong>Technical Browsing Data:</strong> Non-personally identifiable analytical logs (browser version, operating system, pages visited, and interaction timestamps) collected strictly to optimize website accessibility and performance.</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#241132] mb-3 flex items-center gap-2">
              <span className="text-sm font-sans font-bold text-[#603085] bg-[#F2D7E8] w-7 h-7 rounded-full inline-flex items-center justify-center">2</span>
              Purpose of Information Processing
            </h2>
            <p className="mb-3">
              Your data is processed strictly for legitimate clinical, administrative, and communication purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#555555]">
              <li>To schedule, confirm, or reschedule your doctor consultation with Dr. Leena Patankar and our medical team.</li>
              <li>To provide patient coordinators with the context necessary to guide you before your clinic OPD visit.</li>
              <li>To respond to your inquiries via phone calls, SMS, WhatsApp, or confidential email notifications.</li>
              <li>To comply with regulatory audit requirements established under the <strong>Assisted Reproductive Technology (Regulation) Act, 2021</strong>.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#241132] mb-3 flex items-center gap-2">
              <span className="text-sm font-sans font-bold text-[#603085] bg-[#F2D7E8] w-7 h-7 rounded-full inline-flex items-center justify-center">3</span>
              Zero Commercial Sharing & Non-Disclosure
            </h2>
            <div className="bg-[#FFF9F3] border border-[#FDE6D2] p-4 sm:p-5 rounded-xl text-xs sm:text-sm text-[#7A3E00] mb-3">
              <strong>Strict Guarantee:</strong> Sequel IVF does <u>NOT</u> sell, rent, lease, or commercially trade patient contact details or medical information to any marketing agencies, pharmaceutical vendors, or unauthorized third parties.
            </div>
            <p className="text-[#555555]">
              Information is only shared with authorized clinical personnel (consulting embryologists, gynecologists, accredited diagnostic pathology laboratories) directly involved in your care pathway, or when strictly mandated by a court of law or statutory healthcare authority.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#241132] mb-3 flex items-center gap-2">
              <span className="text-sm font-sans font-bold text-[#603085] bg-[#F2D7E8] w-7 h-7 rounded-full inline-flex items-center justify-center">4</span>
              Digital Communications & WhatsApp Consent
            </h2>
            <p className="text-[#555555] mb-3">
              When you submit your mobile number through our appointment forms or initiate a WhatsApp consultation, you grant consent for Sequel IVF patient coordinators to contact you regarding your appointment details, clinical guidelines, and clinic directions.
            </p>
            <p className="text-[#555555]">
              You may withdraw communication consent or request to switch communication channels at any time by replying &quot;STOP&quot; on WhatsApp or emailing our desk at <a href="mailto:sequelivf@gmail.com" className="text-[#603085] font-semibold underline">sequelivf@gmail.com</a>.
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#241132] mb-3 flex items-center gap-2">
              <span className="text-sm font-sans font-bold text-[#603085] bg-[#F2D7E8] w-7 h-7 rounded-full inline-flex items-center justify-center">5</span>
              Patient Rights Under DPDP Act, 2023
            </h2>
            <p className="mb-3">
              Under current Indian data protection legislation, you are entitled to the following rights regarding your personal data:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="p-3.5 bg-[#FAF8FC] rounded-xl border border-[#F0D5E6]">
                <strong className="block text-[#603085] mb-1">Right to Access</strong>
                Request a summary of your personal data processed by our clinic.
              </div>
              <div className="p-3.5 bg-[#FAF8FC] rounded-xl border border-[#F0D5E6]">
                <strong className="block text-[#603085] mb-1">Right to Rectification</strong>
                Update inaccurate or outdated contact information in our records.
              </div>
              <div className="p-3.5 bg-[#FAF8FC] rounded-xl border border-[#F0D5E6]">
                <strong className="block text-[#603085] mb-1">Right to Erasure</strong>
                Request data deletion, subject to statutory medical record retention laws.
              </div>
              <div className="p-3.5 bg-[#FAF8FC] rounded-xl border border-[#F0D5E6]">
                <strong className="block text-[#603085] mb-1">Grievance Redressal</strong>
                Contact our data compliance officer for prompt resolution of privacy concerns.
              </div>
            </div>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#241132] mb-3 flex items-center gap-2">
              <span className="text-sm font-sans font-bold text-[#603085] bg-[#F2D7E8] w-7 h-7 rounded-full inline-flex items-center justify-center">6</span>
              Clinic Contact & Grievance Officer
            </h2>
            <p className="text-[#555555] mb-4">
              If you have any questions, wish to exercise your data rights, or have privacy-related inquiries, please contact our administrative desk:
            </p>
            <div className="p-5 rounded-2xl bg-[#FAF8FC] border border-[#F0D5E6] text-xs sm:text-sm space-y-1.5 text-[#3C2048]">
              <p><strong>Sequel IVF Fertility Centre</strong></p>
              <p>Attn: Patient Privacy & Compliance Coordinator</p>
              <p>103–104, 1st Floor, Yash Complex, Near Bhosale Garden, Hadapsar, Pune – 411028, Maharashtra, India</p>
              <p>Helpline: <a href="tel:+919665279369" className="text-[#603085] font-bold hover:underline">+91 9665 279 369</a> / <a href="tel:+919665278369" className="text-[#603085] font-bold hover:underline">+91 9665 278 369</a></p>
              <p>Email: <a href="mailto:sequelivf@gmail.com" className="text-[#603085] font-bold hover:underline">sequelivf@gmail.com</a></p>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="pt-6 border-t border-[#F0D5E6] flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-[#888888]">
              Related Compliance Documents:
              <span className="mx-2">|</span>
              <Link to="/art-act-compliance" className="text-[#603085] font-semibold hover:underline">ART Act Compliance</Link>
              <span className="mx-2">•</span>
              <Link to="/pcpndt-disclaimer" className="text-[#603085] font-semibold hover:underline">PCPNDT Disclaimer</Link>
            </div>

            <button
              type="button"
              onClick={() => onBookClick && onBookClick('Consultation Inquiry')}
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
