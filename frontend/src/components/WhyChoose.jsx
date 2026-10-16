import { useEffect, useRef, useState } from 'react'

const TESTIMONIALS = [
  {
    name: 'Pooja & Sachin Kulkarni',
    city: 'Hadapsar, Pune',
    quote: "After 6 years of emotional struggle and failed IUI attempts elsewhere, Dr. Leena Patankar gave us clarity and honesty. With ICSI and Laser-Assisted Hatching, we welcomed our baby boy in 2024. Forever grateful to Sequel IVF!",
    treatment: 'ICSI with Blastocyst Transfer',
    rating: 5,
    initials: 'PK',
    color: '#A21CAF',
  },
  {
    name: 'Sneha & Amit Deshmukh',
    city: 'Kothrud, Pune',
    quote: "I was diagnosed with very low AMH (0.6) and lost all hope. Dr. Leena's individualized stimulation protocol worked on our first IVF attempt. The team treated us like family, not just patients.",
    treatment: 'IVF with ERA Protocol',
    rating: 5,
    initials: 'SD',
    color: '#B81D76',
  },
  {
    name: 'Priyanka & Rohan Shinde',
    city: 'Magarpatta City, Pune',
    quote: "The transparency and lab standards at Sequel IVF are unmatched in Pune. Every scan report was thoroughly explained, and the 4D pregnancy scan gave us unforgettable memories.",
    treatment: 'IUI → 4D Fetal Scans',
    rating: 5,
    initials: 'PS',
    color: '#701A75',
  },
]

const PILLARS = [
  {
    num: '01',
    title: 'Personalized Treatment Plans',
    desc: 'Every fertility journey is unique. Our protocols are tailored to your specific hormonal, genetic, and ovarian reserve profile.',
  },
  {
    num: '02',
    title: 'World-Class IVF & Embryology Lab',
    desc: 'Equipped with Laser-Assisted Hatching (LAH), time-lapse incubation, and cleanroom air handling meeting international standards.',
  },
  {
    num: '03',
    title: '24+ Years Clinical Leadership',
    desc: 'Led by Dr. Leena Patankar, one of Pune’s most respected fertility specialists, endoscopic surgeons, and clinical embryologists.',
  },
  {
    num: '04',
    title: 'Compassionate & Transparent Support',
    desc: 'From financial clarity to emotional counseling, we stand with you with honest advice, no hidden costs, and genuine care.',
  },
]

const FAQS = [
  {
    q: 'How long should we try naturally before seeing a fertility specialist?',
    a: 'Most healthy couples conceive within one year of regular, unprotected intercourse. If you are below 35 years of age, it is advisable to seek a fertility evaluation after one year. If you are 35 years or older, or have irregular periods, PCOS, or endometriosis, consult a specialist after six months.',
  },
  {
    q: 'What is a Test Tube Baby and how is IVF performed?',
    a: 'A "test tube baby" is a medical term for a baby conceived through In Vitro Fertilization (IVF). Eggs and sperm are fertilized in our state-of-the-art cleanroom embryology laboratory, and the resulting healthy embryo is transferred into the uterus. The pregnancy then progresses just like a natural one.',
  },
  {
    q: 'Is IVF painful?',
    a: 'Most patients find IVF much easier than expected. Daily stimulation injections use very fine, ultra-thin needles with minimal discomfort. Egg retrieval is conducted under short, gentle anesthesia so you feel no pain during the procedure.',
  },
  {
    q: 'What does low AMH mean for my fertility chances?',
    a: 'AMH (Anti-Müllerian Hormone) estimates your remaining ovarian reserve. A low AMH level indicates fewer remaining eggs, but it does NOT mean you cannot conceive. Dr. Leena Patankar designs customized mild or pooled stimulation protocols specifically for low AMH cases.',
  },
  {
    q: 'Can male factor infertility be treated with ICSI?',
    a: 'Yes. Intracytoplasmic Sperm Injection (ICSI) directly injects a single selected healthy sperm into an egg, overcoming low sperm count, low motility, and high DNA fragmentation.',
  },
  {
    q: 'Where is Sequel IVF located in Pune?',
    a: 'We are conveniently located at 103, 104, First Floor, Yash Complex, Survey No. 161/7, Near Bhosale Garden, Hadapsar, Pune – 411028. We are open Monday to Saturday from 10:00 AM to 07:00 PM.',
  },
]

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: rating }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className="w-4 h-4 text-amber-400 fill-current">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  )
}

export default function WhyChoose() {
  const ref = useRef(null)
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <>
      {/* ── Success Stories (Authentic Pune Patient Reviews) ── */}
      <section id="success" ref={ref} className="relative py-20 sm:py-26 bg-white overflow-hidden">
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-[#FAF0F7] text-[#A21CAF] border border-[#F0D5E6] mb-3">
              Stories of Hope
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#241132] mt-2 mb-4 tracking-tight">
              Real Families. <span className="text-[#A21CAF]">Real Miracles.</span>
            </h2>
            <p className="text-[#644B6F] text-base leading-relaxed">
              Every smile in our clinic is a testament to perseverance, medical precision, and the gift of parenthood.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-[26px] p-7 border border-[#F1D7E7] hover:border-[#A21CAF]/40 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="mb-4">
                    <svg viewBox="0 0 40 30" className="w-8 h-6 text-[#A21CAF] opacity-30" fill="currentColor">
                      <path d="M0 30V18.5Q0 11 4 6T16 0l2 4Q12 5.5 9.5 9T7 18h6V30H0zm22 0V18.5Q22 11 26 6T38 0l2 4Q34 5.5 31.5 9T29 18h6V30H22z"/>
                    </svg>
                  </div>
                  <p className="text-[#53385E] text-sm leading-relaxed mb-6 italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-[#F8E7F2]">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0 bg-[#A21CAF]">
                    {t.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-heading font-extrabold text-[#241132] text-sm truncate">{t.name}</p>
                    <p className="text-[#7C6285] text-xs">{t.city} · {t.treatment}</p>
                  </div>
                  <StarRating rating={t.rating} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Core Value Pillars from Section 2.6 of Audit ── */}
      <section className="relative py-20 sm:py-24 bg-[#FAF2F7] border-y border-[#F0D5E6]">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-white text-[#A21CAF] border border-[#F0D5E6] mb-3">
              Why Choose Sequel IVF
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#241132] tracking-tight">
              Advanced Fertility Care, <span className="text-[#A21CAF]">Personalized for You</span>
            </h2>
            <p className="text-[#644B6F] text-sm sm:text-base mt-2">
              Combining world-class reproductive science, ethical protocols, and 24+ years of clinical excellence in Pune.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PILLARS.map((p) => (
              <div
                key={p.num}
                className="bg-white rounded-[24px] p-6 border border-[#F1D7E7] shadow-xs hover:shadow-md transition-shadow"
              >
                <span className="font-heading font-extrabold text-2xl text-[#A21CAF] block mb-3">{p.num}</span>
                <h3 className="font-heading font-extrabold text-lg text-[#241132] mb-2 leading-snug">{p.title}</h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Real Clinical FAQs from Section 2.7 of Audit ── */}
      <section id="faqs" className="py-20 sm:py-26 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-[#FAF0F7] text-[#A21CAF] border border-[#F0D5E6] mb-3">
              Doctor Answers
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#241132] tracking-tight">
              Frequently Asked <span className="text-[#A21CAF]">Questions</span>
            </h2>
            <p className="text-[#644B6F] text-sm sm:text-base mt-2">
              Clear, authentic answers from Dr. Leena Patankar and our fertility clinical panel.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index
              return (
                <div
                  key={faq.q}
                  className={`rounded-[20px] border transition-all duration-200 overflow-hidden ${
                    isOpen ? 'border-[#A21CAF] bg-[#FAF2F7]/50 shadow-sm' : 'border-[#F1D7E7] bg-white hover:border-[#E8C2DB]'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-heading font-extrabold text-base sm:text-lg text-[#241132] cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'bg-[#A21CAF] text-white rotate-180' : 'bg-[#FAF0F7] text-[#A21CAF]'
                    }`}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                      </svg>
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 text-sm text-[#53385E] leading-relaxed border-t border-[#F2D7E8]/60 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          <div className="mt-12 text-center p-6 rounded-3xl bg-[#FAF2F7] border border-[#F1D7E7]">
            <p className="font-heading font-extrabold text-base text-[#241132] mb-1">
              Have a specific medical question about your reports?
            </p>
            <p className="text-xs text-gray-500 mb-4">
              Call our Hadapsar, Pune helpline directly to speak with our clinical coordinator.
            </p>
            <a
              href="tel:+919665279369"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold text-white bg-[#A21CAF] hover:bg-[#86198F] shadow-sm transition-all"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              <span>Call Helpline: +91 9665 279 369</span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
