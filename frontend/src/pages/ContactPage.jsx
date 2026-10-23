import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer.jsx'
import SEO from '../components/SEO.jsx'
import Schema from '../components/Schema.jsx'
import ConsultationForm from '../components/ConsultationForm.jsx'
import { PAGE_SEO } from '../config/seo.js'
import { CONTACT_PAGE_SCHEMA } from '../config/schema.js'

export default function ContactPage({ onBookClick }) {
  const [openFaq, setOpenFaq] = useState(null)

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const CONTACT_DETAILS = [
    {
      label: 'Helpline & Appointments',
      value: '+91 9665 279 369 / +91 9665 278 369',
      sub: 'Direct line to our patient care desk (Mon–Sat, 10 AM – 7 PM)',
      href: 'tel:+919665279369',
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
        </svg>
      ),
    },
    {
      label: 'WhatsApp Consultation',
      value: '+91 9665 279 369',
      sub: 'Instant chat for report reviews and appointment confirmations',
      href: 'https://wa.me/919665279369?text=Hello%20Sequel%20IVF%20Pune,%20I%20would%20like%20to%20inquire%20about%20a%20fertility%20consultation',
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
    },
    {
      label: 'Email Inquiries',
      value: 'info@sequelivf.com',
      sub: 'Confidential patient records & correspondence',
      href: 'mailto:info@sequelivf.com',
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      label: 'Clinic Address',
      value: '103-104, 1st Floor, Yash Complex, Near Bhosale Garden, Hadapsar, Pune – 411028',
      sub: 'Survey No. 161/7, Pune-Solapur Highway · Modern elevator & dedicated parking',
      href: 'https://maps.google.com/?q=Sequel+IVF+Hadapsar+Pune',
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      label: 'OPD & Working Hours',
      value: 'Monday – Saturday: 10:00 AM – 07:00 PM',
      sub: 'Sunday: Closed / Prior Appointment Only',
      href: '#',
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="9" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 3" />
        </svg>
      ),
    },
  ]

  const FAQS = [
    {
      question: 'Do both partners need to attend the first consultation?',
      answer:
        'Yes, whenever possible, we strongly recommend that both partners attend the initial consultation. Infertility is a shared journey, and evaluating both partners simultaneously ensures an accurate diagnosis, avoids unnecessary delays, and helps create a personalized treatment roadmap.',
    },
    {
      question: 'What documents and previous reports should I bring?',
      answer:
        'Please bring any past medical records you have, including previous semen analysis reports, pelvic ultrasound scans, HSG or laparoscopy reports, blood tests (such as AMH, FSH, TSH, prolactin), and discharge summaries from any prior IUI or IVF cycles.',
    },
    {
      question: 'Can I book an online video consultation if I live outside Pune?',
      answer:
        'Yes, absolutely. We offer comprehensive virtual video consultations with Dr. Leena Patankar and our medical specialists for outstation, national, and international patients. You can review your reports, receive expert guidance, and plan your visits conveniently before traveling.',
    },
    {
      question: 'Do you provide second opinions on previous IVF failures?',
      answer:
        'Yes. Sequel IVF frequently evaluates recurrent IVF failure, recurrent implantation failure, poor ovarian reserve, and complex male factor infertility cases. Dr. Patankar brings over 25 years of specialized expertise in reproductive medicine and clinical embryology to identify factors that may have been previously overlooked.',
    },
  ]

  return (
    <div className="bg-white min-h-screen flex flex-col font-body selection:bg-[#603085] selection:text-white">
      <SEO {...PAGE_SEO.contact} />
      <Schema data={CONTACT_PAGE_SCHEMA} />

      {/* ═══════════════ Hero / Breadcrumb Header ═══════════════ */}
      <section className="relative overflow-hidden py-10 sm:py-14 border-b border-[#F0D5E6]/80 bg-[#F5F2F8]">
        {/* Background Image with Multi-layer Soft Gradient Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="/images/image copy 5.png"
            alt="Sequel IVF Luxury Fertility Clinic Centre"
            className="w-full h-full object-cover object-[center_35%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-transparent sm:from-[#F5F2F8]/95 sm:via-[#F5F2F8]/85 sm:to-transparent lg:w-3/5" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-white/30" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl">
            {/* Breadcrumbs */}
            <nav className="inline-flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs font-medium px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white/90 backdrop-blur-md border border-[#F0D5E6] text-[#7C6285] mb-2 sm:mb-3 shadow-xs max-w-full overflow-x-auto whitespace-nowrap">
              <Link to="/" className="hover:text-[#603085] transition-colors shrink-0">
                Home
              </Link>
              <span className="text-[#C49F64] shrink-0">/</span>
              <span className="text-[#603085] font-semibold shrink-0">Contact Us</span>
            </nav>

            <span className="text-[#603085] font-bold text-xs tracking-widest uppercase block mb-1">
              GET IN TOUCH WITH SEQUEL IVF
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-medium tracking-tight mb-3 text-[#241132] leading-tight">
              <span className="text-[#603085]">Contact</span>{' '}
              <span className="text-[#C49F64]">Our Fertility Centre</span>
            </h1>

            <p className="text-[#555555] text-sm sm:text-base leading-relaxed mb-4 max-w-2xl">
              We understand that seeking fertility care is a deeply personal milestone. Whether you are scheduling your first evaluation, seeking a second opinion, or reaching out with questions, our dedicated medical team in Hadapsar, Pune is here to guide you with compassion, discretion, and clinical excellence.
            </p>

            {/* Quick Badges */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 border border-[#F0D5E6] text-[11px] font-semibold text-[#3C2048] shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#603085]" />
                Dr. Leena Patankar (25+ Yrs Exp)
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 border border-[#F0D5E6] text-[11px] font-semibold text-[#3C2048] shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C49F64]" />
                100% Confidential Care
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 border border-[#F0D5E6] text-[11px] font-semibold text-[#3C2048] shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]" />
                WhatsApp Coordination Available
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ Seamless 2-Column Section: Unboxed Info + Form ═══════════════ */}
      <section className="py-14 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Left 5 Columns: Seamless, Unboxed Contact Information */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              {/* Eyebrow */}
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#603085]" />
                <span className="text-[#603085] font-bold text-xs sm:text-sm tracking-widest uppercase">
                  APPOINTMENT & CLINIC DETAILS
                </span>
              </div>

              {/* Headline */}
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] leading-tight font-medium tracking-tight mb-3">
                <span className="text-[#603085]">Connect with</span>{' '}
                <span className="text-[#C49F64]">Our Specialists</span>
              </h2>

              {/* Accent divider line */}
              <div className="w-20 h-0.5 bg-gradient-to-r from-[#603085] to-[#C49F64] mb-5" />

              {/* Description */}
              <p className="text-[#555555] text-sm sm:text-[15px] leading-relaxed mb-7 sm:mb-8">
                Reach out directly via phone, WhatsApp, email, or fill out the appointment form. Our patient coordinator will connect with you within 24 hours to schedule your consultation with Dr. Leena Patankar.
              </p>

              {/* Seamless, Unboxed Contact Details List */}
              <div className="space-y-6 pt-1">
                {CONTACT_DETAILS.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 bg-[#F5F2F8] text-[#603085] group-hover:bg-[#603085] group-hover:text-white transition-all duration-300 mt-0.5 shadow-xs">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[#888888] text-xs uppercase tracking-wider font-semibold mb-0.5">
                        {item.label}
                      </p>
                      <p className="text-[#241132] text-sm sm:text-base font-semibold group-hover:text-[#603085] transition-colors leading-snug">
                        {item.value}
                      </p>
                      {item.sub && (
                        <p className="text-xs text-[#666666] mt-0.5 leading-relaxed">
                          {item.sub}
                        </p>
                      )}
                    </div>
                  </a>
                ))}
              </div>

              {/* Direct Quick Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-8 mt-6 border-t border-[#F0D5E6]/80">
                <a
                  href="tel:+919665279369"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#603085] hover:bg-[#4E276D] shadow-md shadow-[#603085]/20 transition-all"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  <span>Call Helpline</span>
                </a>
                <a
                  href="https://wa.me/919665279369?text=Hello%20Sequel%20IVF%20Pune,%20I%20would%20like%20to%20inquire%20about%20a%20fertility%20consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-[#241132] bg-[#FAF8FC] border border-[#F0D5E6] hover:bg-[#F5F2F8] hover:text-[#603085] transition-all"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#25D366]">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Right 7 Columns: Consultation Booking Form */}
            <div className="lg:col-span-7">
              <ConsultationForm />
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════ Dedicated Google Map Location Section ═══════════════ */}
      <section className="py-14 sm:py-18 bg-[#FAF8FC] border-t border-[#F0D5E6]">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-8">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-2 h-2 rounded-full bg-[#603085]" />
                <span className="text-[#603085] font-bold text-xs tracking-widest uppercase">
                  GOOGLE MAP LOCATION
                </span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-[38px] font-medium text-[#241132] leading-tight">
                <span className="text-[#603085]">Locate Sequel IVF</span>{' '}
                <span className="text-[#C49F64]">in Hadapsar, Pune</span>
              </h2>
              <p className="text-[#555555] text-xs sm:text-sm mt-1 max-w-2xl">
                103–104, 1st Floor, Yash Complex, Survey No. 161/7, Near Bhosale Garden, Hadapsar, Pune – 411028.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://maps.google.com/?q=Sequel+IVF+Hadapsar+Pune"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#603085] hover:bg-[#4E276D] shadow-md transition-all"
              >
                <span>Open in Google Maps</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          {/* Interactive Google Map Embed */}
          <div className="bg-white rounded-3xl border border-[#F0D5E6] shadow-sm overflow-hidden">
            <div className="w-full h-[400px] sm:h-[460px] lg:h-[500px] relative bg-gray-100">
              <iframe
                title="Sequel IVF Pune Clinic Google Map Location"
                src="https://maps.google.com/maps?q=Sequel+IVF+103+Yash+Complex+Hadapsar+Pune&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

            {/* Location Highlights Footer Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#F0D5E6] bg-white text-center p-4">
              <div className="p-3">
                <p className="text-[11px] text-[#888888] font-bold uppercase tracking-wider">Landmark</p>
                <p className="font-serif font-bold text-sm text-[#241132] mt-0.5">Near Bhosale Garden</p>
              </div>
              <div className="p-3">
                <p className="text-[11px] text-[#888888] font-bold uppercase tracking-wider">From Magarpatta</p>
                <p className="font-serif font-bold text-sm text-[#241132] mt-0.5">~10 Mins via Solapur Hwy</p>
              </div>
              <div className="p-3">
                <p className="text-[11px] text-[#888888] font-bold uppercase tracking-wider">From Hadapsar Gadital</p>
                <p className="font-serif font-bold text-sm text-[#241132] mt-0.5">~5 Mins</p>
              </div>
              <div className="p-3">
                <p className="text-[11px] text-[#888888] font-bold uppercase tracking-wider">Accessibility</p>
                <p className="font-serif font-bold text-sm text-[#241132] mt-0.5">Elevator & Patient Parking</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════ FAQ Section: Clean, Minimal Accordion ═══════════════ */}
      <section className="py-14 sm:py-18 bg-white border-t border-[#F0D5E6]/80">
        <div className="mx-auto max-w-[1000px] px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-8 sm:mb-10">
            <span className="text-[#603085] font-bold text-xs tracking-widest uppercase block mb-1">
              HELPFUL ANSWERS
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-[36px] font-medium text-[#241132]">
              <span className="text-[#603085]">Frequently Asked</span>{' '}
              <span className="text-[#C49F64]">Questions</span>
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-[#603085] to-[#C49F64] mx-auto mt-2.5" />
          </div>

          <div className="divide-y divide-[#F0D5E6] border-y border-[#F0D5E6]">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx
              return (
                <div key={idx} className="py-4">
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left py-1 flex items-center justify-between gap-4 cursor-pointer group"
                  >
                    <span className="font-serif font-bold text-sm sm:text-base text-[#241132] group-hover:text-[#603085] transition-colors">
                      {faq.question}
                    </span>
                    <span
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-[#603085] transition-transform duration-200 ${
                        isOpen ? 'rotate-180 bg-[#603085] text-white' : 'bg-[#F5F2F8]'
                      }`}
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pt-3 pb-2 text-xs sm:text-sm text-[#555555] leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer onBookClick={onBookClick} />
    </div>
  )
}
