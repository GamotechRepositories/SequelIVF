import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer.jsx'

export default function AboutInfertilityPage({ onBookClick }) {
  return (
    <div className="bg-white min-h-screen flex flex-col font-body selection:bg-[#603085] selection:text-white">
      {/* ═══════════════ Hero Header ═══════════════ */}
      <section className="relative overflow-hidden py-8 sm:py-12 md:py-16 border-b border-[#F0D5E6]/80 bg-[#F5F2F8]">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/image copy 5.png"
            alt="Sequel IVF Fertility Clinic"
            className="w-full h-full object-cover object-[center_30%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-white/75 sm:from-[#F5F2F8]/95 sm:via-[#F5F2F8]/85 sm:to-white/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <nav className="inline-flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs font-medium px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white/90 backdrop-blur-md border border-[#F0D5E6] text-[#7C6285] mb-2 sm:mb-3 shadow-xs max-w-full overflow-x-auto whitespace-nowrap">
              <Link to="/" className="hover:text-[#603085] transition-colors shrink-0">Home</Link>
              <span className="text-[#C49F64] shrink-0">/</span>
              <span className="text-[#603085] font-semibold shrink-0">About Infertility</span>
            </nav>

            <span className="text-[#603085] font-bold text-[10px] sm:text-xs tracking-wider sm:tracking-widest uppercase block mb-1">
              PATIENT EDUCATION & CLINICAL GUIDANCE
            </span>
            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-medium tracking-tight mb-3 sm:mb-4 text-[#241132] leading-tight">
              Infertility: <span className="text-[#603085]">Understanding</span>{' '}
              <span className="text-[#C49F64]">the Possible Causes</span>
            </h1>

            <p className="text-[#4B5563] text-xs sm:text-sm md:text-base leading-relaxed mb-3 sm:mb-4">
              Infertility can affect either partner, both partners together, or sometimes no specific cause can be identified despite appropriate evaluation. The ability to conceive depends on several steps working together: healthy ovulation and eggs, open fallopian tubes, a healthy uterus, adequate sperm production and movement, and successful fertilization and implantation.
            </p>

            <p className="text-[#3C2048] font-medium text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">
              A fertility evaluation therefore looks at both partners, rather than assuming that infertility is caused only by the woman or only by the man. Fertility is the result of an interaction between both partners, and a couple may have more than one contributing factor.
            </p>

            <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => onBookClick && onBookClick('Couple Fertility Consultation')}
                className="w-full sm:w-auto text-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-[#603085] hover:bg-[#4E276D] shadow-md shadow-[#603085]/20 transition-colors"
              >
                Book Couple Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ Zig-Zag Alternating Layout ═══════════════ */}
      <section className="py-6 sm:py-10 lg:py-12 bg-white">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">

          {/* ── Section 1: Female Infertility (Image Left, Text Right) ── */}
          <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-14 py-8 sm:py-12 border-b border-[#F0D5E6]/60">
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border border-[#F0D5E6]/80 aspect-[4/3] sm:aspect-[16/11]">
                <img
                  src="https://res.cloudinary.com/exmvyjeq/image/upload/v1792662978/ad61a54b-de20-4623-beb1-815a791b6b5d.png"
                  alt="Female Infertility Factors"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#241132]/60 via-[#241132]/10 to-transparent pointer-events-none" />
                <div className="absolute bottom-2.5 sm:bottom-4 left-3 sm:left-5 right-3 sm:right-5 text-white">
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold opacity-90 block">Overview</span>
                  <p className="font-serif text-xs sm:text-sm md:text-base lg:text-lg font-medium leading-snug">Female Reproductive Factors</p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <span className="inline-block px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#603085]/10 text-[#603085] text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2">
                Female Factor Infertility
              </span>
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-[32px] text-[#241132] font-medium leading-tight mb-2 sm:mb-3">
                Female Infertility Factors
              </h2>
              <p className="text-[#4B5563] text-xs sm:text-sm md:text-[15px] leading-relaxed mb-3 sm:mb-4">
                Female infertility can result from problems involving ovulation, ovarian reserve, fallopian tubes, the uterus, endometriosis, hormonal function, or age-related changes.
              </p>

              <h4 className="font-heading font-bold text-[#603085] text-[11px] sm:text-xs uppercase tracking-wider mb-2">
                Key Factors Explored:
              </h4>
              <ul className="space-y-1.5 text-xs sm:text-sm text-[#4B5563] mb-4 sm:mb-6">
                <li>• <strong>Ovulatory Disorders:</strong> PCOS, thyroid disorders, hyperprolactinemia, hypothalamic conditions</li>
                <li>• <strong>Diminished Ovarian Reserve & Age:</strong> Egg quantity, AMH testing, follicular potential</li>
                <li>• <strong>Fallopian Tube Problems:</strong> Blockages, PID, ectopic history, adhesions, hydrosalpinx</li>
                <li>• <strong>Uterine & Pelvic Factors:</strong> Endometriosis, fibroids, polyps, congenital abnormalities</li>
              </ul>

              <Link
                to="/female-infertility"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-[#603085] hover:bg-[#4E276D] shadow-md shadow-[#603085]/20 transition-all text-center"
              >
                <span>Read Detailed Guide: Female Infertility</span>
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* ── Section 2: Male Infertility (Text Left, Image Right) ── */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-6 sm:gap-8 lg:gap-14 py-8 sm:py-12 border-b border-[#F0D5E6]/60">
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border border-[#F0D5E6]/80 aspect-[4/3] sm:aspect-[16/11]">
                <img
                  src="https://res.cloudinary.com/exmvyjeq/image/upload/v1792663018/3917659f-ad13-4315-911d-34a20432b776.png"
                  alt="Male Infertility Factors"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#241132]/60 via-[#241132]/10 to-transparent pointer-events-none" />
                <div className="absolute bottom-2.5 sm:bottom-4 left-3 sm:left-5 right-3 sm:right-5 text-white">
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold opacity-90 block">Overview</span>
                  <p className="font-serif text-xs sm:text-sm md:text-base lg:text-lg font-medium leading-snug">Male Reproductive Factors</p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <span className="inline-block px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#C49F64]/15 text-[#916E36] text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2">
                Male Factor Infertility
              </span>
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-[32px] text-[#241132] font-medium leading-tight mb-2 sm:mb-3">
                Male Infertility Factors
              </h2>
              <p className="text-[#4B5563] text-xs sm:text-sm md:text-[15px] leading-relaxed mb-3 sm:mb-4">
                Male factors contribute to infertility in a substantial proportion of couples. A male factor may be the only cause of infertility or may occur together with female factors. The first and most important investigation for evaluating male fertility is generally a semen analysis, which assesses sperm concentration, movement, morphology and other semen characteristics.
              </p>

              <h4 className="font-heading font-bold text-[#916E36] text-[11px] sm:text-xs uppercase tracking-wider mb-2">
                Key Factors Explored:
              </h4>
              <ul className="space-y-1.5 text-xs sm:text-sm text-[#4B5563] mb-4 sm:mb-6">
                <li>• <strong>Sperm Production:</strong> Oligozoospermia, azoospermia, motility, and morphology</li>
                <li>• <strong>Varicocele & Hormones:</strong> Enlarged testicular veins, testosterone, LH, FSH axis</li>
                <li>• <strong>Transport Blockages & Genetics:</strong> Vas deferens blockage, Klinefelter syndrome</li>
                <li>• <strong>Infections & Function:</strong> Inflammatory markers, ejaculatory and sexual health</li>
              </ul>

              <Link
                to="/male-infertility"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-[#603085] hover:bg-[#4E276D] shadow-md shadow-[#603085]/20 transition-all text-center"
              >
                <span>Read Detailed Guide: Male Infertility</span>
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* ── Section 3: When Both Partners Contribute & Unexplained (Image Left, Text Right) ── */}
          <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-14 py-8 sm:py-12 border-b border-[#F0D5E6]/60">
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border border-[#F0D5E6]/80 aspect-[4/3] sm:aspect-[16/11]">
                <img
                  src="https://res.cloudinary.com/exmvyjeq/image/upload/v1792663570/6896d604-7e1d-46ab-83c5-0fefe30fb0b0.png"
                  alt="When Both Partners May Contribute & Whole Couple Fertility"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#241132]/60 via-[#241132]/10 to-transparent pointer-events-none" />
                <div className="absolute bottom-2.5 sm:bottom-4 left-3 sm:left-5 right-3 sm:right-5 text-white">
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold opacity-90 block">Whole Couple Focus</span>
                  <p className="font-serif text-xs sm:text-sm md:text-base lg:text-lg font-medium leading-snug">Combined & Unexplained Fertility</p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="mb-5 sm:mb-6">
                <span className="inline-block px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#603085]/10 text-[#603085] text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2">
                  Combined Factors
                </span>
                <h3 className="font-serif text-lg sm:text-2xl md:text-3xl text-[#241132] font-medium mb-2 sm:mb-3">
                  When Both Partners May Contribute
                </h3>
                <p className="text-[#4B5563] text-xs sm:text-sm md:text-[15px] leading-relaxed mb-2.5 sm:mb-3">
                  Infertility is not always caused by a single problem. A couple may have a combination of factors—for example, reduced ovarian reserve together with reduced sperm count, or tubal disease together with an ovulatory disorder.
                </p>
                <p className="text-[#4B5563] text-xs sm:text-sm md:text-[15px] leading-relaxed">
                  This is why fertility assessment is generally performed for both partners. This includes the basic evaluation as including assessment of ovulation, semen analysis, and evaluation of the uterine cavity and fallopian tube patency, with additional investigations guided by the couple's history and clinical findings.
                </p>
              </div>

              <div>
                <span className="inline-block px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#C49F64]/15 text-[#916E36] text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2">
                  Clinical Perspective
                </span>
                <h3 className="font-serif text-lg sm:text-2xl md:text-3xl text-[#241132] font-medium mb-2 sm:mb-3">
                  Unexplained Infertility
                </h3>
                <p className="text-[#4B5563] text-xs sm:text-sm md:text-[15px] leading-relaxed mb-2.5 sm:mb-3">
                  Sometimes the standard fertility evaluation does not identify a clear reason for difficulty conceiving. This is referred to as unexplained infertility.
                </p>
                <p className="text-[#4B5563] text-xs sm:text-sm md:text-[15px] leading-relaxed">
                  This does not mean that pregnancy is impossible. Rather, it means that currently available routine investigations have not identified a specific cause. Fertility is a complex process involving multiple biological steps, and subtle abnormalities may not always be detectable with standard tests.
                </p>
              </div>
            </div>
          </div>

          {/* ── Section 4: A Fertility Evaluation Looks at the Whole Couple ── */}
          <div className="py-8 sm:py-12">
            <div className="max-w-3xl mb-6 sm:mb-8">
              <span className="text-[#603085] font-bold text-[11px] sm:text-xs tracking-widest uppercase block mb-1">
                INDIVIDUALIZED DIAGNOSTICS
              </span>
              <h3 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#241132] mb-2 sm:mb-3">
                A Fertility Evaluation Looks at the Whole Couple
              </h3>
              <p className="text-[#4B5563] text-xs sm:text-sm md:text-[15px] leading-relaxed">
                A proper fertility evaluation is individualized according to age, medical history, menstrual pattern, duration of infertility and other risk factors. The goal is not simply to label infertility as “male” or “female” factor, but to understand the specific factors affecting the couple and identify the most appropriate path toward pregnancy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
              {/* For women */}
              <div>
                <h4 className="font-heading font-bold text-[#603085] text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3">
                  For women, evaluation may include assessment of:
                </h4>
                <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-[#4B5563] mb-3 sm:mb-4">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#603085]" />
                    <span>Ovulation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#603085]" />
                    <span>Ovarian reserve</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#603085]" />
                    <span>Fallopian tube patency</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#603085]" />
                    <span>Uterine cavity</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#603085]" />
                    <span>Endometriosis and pelvic factors</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#603085]" />
                    <span>Hormonal function</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#603085]" />
                    <span>Relevant medical and lifestyle factors</span>
                  </li>
                </ul>
                <Link
                  to="/female-infertility"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#603085] hover:text-[#4E276D]"
                >
                  <span>Explore female infertility factors →</span>
                </Link>
              </div>

              {/* For men */}
              <div>
                <h4 className="font-heading font-bold text-[#916E36] text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3">
                  For men, evaluation commonly begins with:
                </h4>
                <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-[#4B5563] mb-3 sm:mb-4">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C49F64]" />
                    <span>Reproductive and medical history</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C49F64]" />
                    <span>Physical examination</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C49F64]" />
                    <span>Semen analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C49F64]" />
                    <span>Hormonal assessment when indicated</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C49F64]" />
                    <span>Genetic evaluation in selected cases</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C49F64]" />
                    <span>Assessment of the testes and reproductive tract when required</span>
                  </li>
                </ul>
                <Link
                  to="/male-infertility"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#916E36] hover:text-[#725424]"
                >
                  <span>Explore male infertility factors →</span>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════ CTA Banner ═══════════════ */}
      <section className="py-8 sm:py-12 bg-[#FBF8FD] border-t border-[#F0D5E6]/60">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#241132] via-[#3C2048] to-[#603085] p-6 sm:p-10 lg:p-12 text-white shadow-xl">
            <div className="max-w-2xl relative z-10">
              <span className="text-[#E7C876] text-[10px] sm:text-xs font-bold uppercase tracking-widest block mb-1.5 sm:mb-2">
                PERSONALIZED CLINICAL SUPPORT
              </span>
              <h3 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium mb-2.5 sm:mb-3">
                Begin Your Fertility Journey With Clarity
              </h3>
              <p className="text-white/80 text-xs sm:text-sm md:text-base leading-relaxed mb-5 sm:mb-6">
                Our team of senior reproductive specialists, fertility surgeons, and certified embryologists provides comprehensive whole-couple evaluations with transparent guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center">
                <button
                  type="button"
                  onClick={() => onBookClick && onBookClick('Couple Fertility Consultation')}
                  className="w-full sm:w-auto text-center justify-center px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl font-bold text-xs sm:text-sm bg-[#C49F64] text-[#241132] hover:bg-[#D4AF74] transition-colors shadow-lg shadow-black/20"
                >
                  Book Your Consultation
                </button>
                <a
                  href="tel:+919665279369"
                  className="inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-white/90 hover:text-white py-2"
                >
                  <svg className="w-4 h-4 text-[#C49F64]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Helpline: +91 9665 279 369</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
