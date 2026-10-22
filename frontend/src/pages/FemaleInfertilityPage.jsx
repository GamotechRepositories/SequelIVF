import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer.jsx'

export default function FemaleInfertilityPage({ onBookClick }) {
  return (
    <div className="bg-white min-h-screen flex flex-col font-body selection:bg-[#603085] selection:text-white">
      {/* ═══════════════ Hero Header ═══════════════ */}
      <section className="relative overflow-hidden py-8 sm:py-12 md:py-16 border-b border-[#F0D5E6]/80 bg-[#F5F2F8]">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/image copy 5.png"
            alt="Female Fertility Specialist Consultation"
            className="w-full h-full object-cover object-[center_35%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-white/70 sm:from-[#F5F2F8]/95 sm:via-[#F5F2F8]/85 sm:to-white/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl">
            {/* Breadcrumbs */}
            <nav className="inline-flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs font-medium px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white/90 backdrop-blur-md border border-[#F0D5E6] text-[#7C6285] mb-2 sm:mb-3 shadow-xs max-w-full overflow-x-auto whitespace-nowrap">
              <Link to="/" className="hover:text-[#603085] transition-colors shrink-0">Home</Link>
              <span className="text-[#C49F64] shrink-0">/</span>
              <Link to="/about-infertility" className="hover:text-[#603085] transition-colors shrink-0">About Infertility</Link>
              <span className="text-[#C49F64] shrink-0">/</span>
              <span className="text-[#603085] font-semibold shrink-0">Female Infertility</span>
            </nav>

            <span className="text-[#603085] font-bold text-[10px] sm:text-xs tracking-wider sm:tracking-widest uppercase block mb-1">
              WOMAN'S REPRODUCTIVE HEALTH
            </span>
            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-medium tracking-tight mb-3 sm:mb-4 text-[#241132] leading-tight">
              Female <span className="text-[#603085]">Infertility</span>{' '}
              <span className="text-[#C49F64]">Factors</span>
            </h1>

            <p className="text-[#4B5563] text-xs sm:text-sm md:text-base leading-relaxed mb-5 sm:mb-6">
              Female infertility can result from problems involving ovulation, ovarian reserve, fallopian tubes, the uterus, endometriosis, hormonal function, or age-related changes.
            </p>

            <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => onBookClick && onBookClick('Female Fertility Consultation')}
                className="w-full sm:w-auto text-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-[#603085] hover:bg-[#4E276D] shadow-md shadow-[#603085]/20 transition-colors"
              >
                Book Female Fertility Consultation
              </button>
              <Link
                to="/male-infertility"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-2.5 sm:py-3 rounded-xl font-semibold text-xs uppercase tracking-wider text-[#3C2048] bg-white border border-[#E4D4EE] hover:bg-[#F5F2F8] transition-colors text-center"
              >
                <span>Switch to Male Infertility</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ Zig-Zag Alternating Layout ═══════════════ */}
      <section className="py-6 sm:py-10 lg:py-12 bg-white">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">

          {/* ── Factor 1: Image Left, Text Right ── */}
          <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-14 py-8 sm:py-12 border-b border-[#F0D5E6]/60">
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border border-[#F0D5E6]/80 aspect-[4/3] sm:aspect-[16/11]">
                <img
                  src="https://res.cloudinary.com/exmvyjeq/image/upload/v1792664942/c8a330c8-c064-45b5-a979-2e5a074de4b3.png"
                  alt="Ovulatory Disorders"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-2.5 sm:bottom-4 left-3 sm:left-5 right-3 sm:right-5 text-white">
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold opacity-90 block">Factor 01</span>
                  <p className="font-serif text-xs sm:text-sm md:text-base lg:text-lg font-medium leading-snug">Ovulatory Function & Hormonal Balance</p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <span className="inline-block px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#603085]/10 text-[#603085] text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2">
                Factor 1
              </span>
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-[32px] text-[#241132] font-medium leading-tight mb-2 sm:mb-3">
                Ovulatory Disorders
              </h2>
              <p className="text-[#4B5563] text-xs sm:text-sm md:text-[15px] leading-relaxed mb-3 sm:mb-4">
                Ovulatory disorders occur when an egg is not released regularly or ovulation does not occur. Because ovulation is essential for natural conception, irregular or absent periods can be an important sign of an ovulatory problem. The book identifies ovulatory infertility as one of the most common causes of female-factor infertility.
              </p>

              <div className="space-y-3 pt-1">
                <div>
                  <h3 className="font-heading font-bold text-[#603085] text-xs sm:text-sm mb-1">
                    Polycystic Ovary Syndrome (PCOS)
                  </h3>
                  <p className="text-[#4B5563] text-xs sm:text-sm leading-relaxed">
                    PCOS is one of the most common causes of irregular or absent ovulation. Women with PCOS may have infrequent periods, features of increased androgen activity such as excess facial or body hair, acne, or other signs of hormonal imbalance.
                  </p>
                </div>

                <div>
                  <h3 className="font-heading font-bold text-[#603085] text-xs sm:text-sm mb-1">
                    Thyroid Disorders
                  </h3>
                  <p className="text-[#4B5563] text-xs sm:text-sm leading-relaxed">
                    The thyroid plays an important role in reproductive hormone regulation. Thyroid dysfunction can interfere with normal menstrual cycles and ovulation and may therefore contribute to difficulty conceiving. Thyroid-stimulating hormone (TSH) testing may be used when evaluating ovulatory problems.
                  </p>
                </div>

                <div>
                  <h3 className="font-heading font-bold text-[#603085] text-xs sm:text-sm mb-1">
                    Hyperprolactinemia
                  </h3>
                  <p className="text-[#4B5563] text-xs sm:text-sm leading-relaxed">
                    Increased prolactin levels can interfere with the normal hormonal signals required for ovulation. Hyperprolactinemia may lead to irregular or absent periods and can be associated with difficulty conceiving.
                  </p>
                </div>

                <div>
                  <h3 className="font-heading font-bold text-[#603085] text-xs sm:text-sm mb-1">
                    Hypothalamic or Pituitary Disorders
                  </h3>
                  <p className="text-[#4B5563] text-xs sm:text-sm leading-relaxed mb-1">
                    The hypothalamus and pituitary gland coordinate the hormonal signals that stimulate the ovaries. Disturbances in this system can result in low levels of reproductive hormones and failure of ovulation.
                  </p>
                  <p className="text-[#6B7280] text-[11px] sm:text-xs leading-relaxed">
                    This may occur in association with significant weight loss, restrictive eating, excessive physical activity, or other hypothalamic or pituitary conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Factor 2: Text Left, Image Right (Reverse) ── */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-6 sm:gap-8 lg:gap-14 py-8 sm:py-12 border-b border-[#F0D5E6]/60">
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border border-[#F0D5E6]/80 aspect-[4/3] sm:aspect-[16/11]">
                <img
                  src="https://res.cloudinary.com/exmvyjeq/image/upload/v1792664983/54b413a5-b10e-43b2-b712-6080dc0ad839.png"
                  alt="Diminished Ovarian Reserve"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-2.5 sm:bottom-4 left-3 sm:left-5 right-3 sm:right-5 text-white">
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold opacity-90 block">Factor 02</span>
                  <p className="font-serif text-xs sm:text-sm md:text-base lg:text-lg font-medium leading-snug">Ovarian Reserve Assessment & Biological Markers</p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <span className="inline-block px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#603085]/10 text-[#603085] text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2">
                Factor 2
              </span>
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-[32px] text-[#241132] font-medium leading-tight mb-2 sm:mb-3">
                Diminished Ovarian Reserve
              </h2>
              <p className="text-[#4B5563] text-xs sm:text-sm md:text-[15px] leading-relaxed mb-3">
                Ovarian reserve refers broadly to the remaining supply of eggs within the ovaries. As women age, the number of available follicles gradually decreases, and reproductive potential declines.
              </p>
              <p className="text-[#4B5563] text-xs sm:text-sm md:text-[15px] leading-relaxed mb-3 sm:mb-4">
                Diminished ovarian reserve may also be encountered in women with a history of ovarian surgery, a single ovary, or a previous poor response to fertility medications. Tests such as AMH, antral follicle count (AFC), and FSH may be used as part of the assessment.
              </p>

              <div className="border-l-2 border-[#C49F64] pl-3 sm:pl-4 py-1 mt-3">
                <h4 className="font-heading font-bold text-[#603085] text-[11px] sm:text-xs uppercase tracking-wider mb-1">
                  Important Clinical Consideration
                </h4>
                <p className="text-[#4B5563] text-xs sm:text-sm leading-relaxed">
                  It is important to understand that ovarian reserve tests mainly provide information about the quantity of eggs and expected ovarian response to stimulation. They do not, by themselves, determine whether a woman can or cannot become pregnant. Female age remains an important predictor of reproductive potential.
                </p>
              </div>
            </div>
          </div>

          {/* ── Factor 3: Image Left, Text Right ── */}
          <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-14 py-8 sm:py-12 border-b border-[#F0D5E6]/60">
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border border-[#F0D5E6]/80 aspect-[4/3] sm:aspect-[16/11]">
                <img
                  src="https://res.cloudinary.com/exmvyjeq/image/upload/v1792665006/c9875414-c013-492a-b36a-3d17003b3d7d.png"
                  alt="Age-Related Fertility Decline"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-2.5 sm:bottom-4 left-3 sm:left-5 right-3 sm:right-5 text-white">
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold opacity-90 block">Factor 03</span>
                  <p className="font-serif text-xs sm:text-sm md:text-base lg:text-lg font-medium leading-snug">Reproductive Potential & Timely Evaluation</p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <span className="inline-block px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#603085]/10 text-[#603085] text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2">
                Factor 3
              </span>
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-[32px] text-[#241132] font-medium leading-tight mb-2 sm:mb-3">
                Age-Related Fertility Decline
              </h2>
              <p className="text-[#4B5563] text-xs sm:text-sm md:text-[15px] leading-relaxed mb-2.5 sm:mb-3">
                Female fertility gradually declines with increasing age. This is related not only to a reduction in the number of available eggs but also to changes in egg quality.
              </p>
              <p className="text-[#4B5563] text-xs sm:text-sm md:text-[15px] leading-relaxed mb-2.5 sm:mb-3">
                The decline in fertility may begin before menstrual cycles become noticeably irregular. With advancing reproductive age, the likelihood of conception decreases and the risk of miscarriage increases.
              </p>
              <p className="text-[#603085] font-semibold text-xs sm:text-sm leading-relaxed">
                This is why age is an important consideration when deciding how quickly a fertility evaluation should be undertaken.
              </p>
            </div>
          </div>

          {/* ── Factor 4: Text Left, Image Right (Reverse) ── */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-6 sm:gap-8 lg:gap-14 py-8 sm:py-12 border-b border-[#F0D5E6]/60">
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border border-[#F0D5E6]/80 aspect-[4/3] sm:aspect-[16/11]">
                <img
                  src="https://res.cloudinary.com/exmvyjeq/image/upload/v1792665029/0ae11866-412a-4bf8-b918-d46724a2149e.png"
                  alt="Fallopian Tube Problems"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-2.5 sm:bottom-4 left-3 sm:left-5 right-3 sm:right-5 text-white">
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold opacity-90 block">Factor 04</span>
                  <p className="font-serif text-xs sm:text-sm md:text-base lg:text-lg font-medium leading-snug">Tubal Patency & Pelvic Anatomy</p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <span className="inline-block px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#603085]/10 text-[#603085] text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2">
                Factor 4
              </span>
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-[32px] text-[#241132] font-medium leading-tight mb-2 sm:mb-3">
                Fallopian Tube Problems
              </h2>
              <p className="text-[#4B5563] text-xs sm:text-sm md:text-[15px] leading-relaxed mb-3 sm:mb-4">
                Fallopian tubes provide the pathway through which sperm and egg normally meet and through which the early embryo travels toward the uterus. If the tubes are blocked or damaged, natural conception can become difficult or impossible.
              </p>

              <h4 className="font-heading font-bold text-[#603085] text-[11px] sm:text-xs uppercase tracking-wider mb-2">
                Tubal-factor infertility may result from:
              </h4>
              <ul className="space-y-1.5 text-xs sm:text-sm text-[#4B5563] mb-3 sm:mb-4">
                {[
                  'Previous pelvic inflammatory disease (PID)',
                  'Tubal obstruction or blockage',
                  'Damage to the inner lining of the fallopian tube',
                  'Pelvic or tubal adhesions',
                  'Previous ectopic pregnancy',
                  'Endometriosis',
                  'Complicated pelvic or abdominal surgery',
                  'Previous complicated appendicitis',
                  'Hydrosalpinx'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C49F64] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-[#3C2048] text-xs sm:text-sm leading-relaxed">
                A fertility evaluation may assess whether the fallopian tubes are open using investigations such as HSG, Hysterosalpingo-Contrast Sonography, or, in selected cases, laparoscopy.
              </p>
            </div>
          </div>

          {/* ── Factor 5: Image Left, Text Right ── */}
          <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-14 py-8 sm:py-12 border-b border-[#F0D5E6]/60">
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border border-[#F0D5E6]/80 aspect-[4/3] sm:aspect-[16/11]">
                <img
                  src="https://res.cloudinary.com/exmvyjeq/image/upload/v1792665072/1429addf-56c8-421e-a266-9f49e652e876.png"
                  alt="Endometriosis"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-2.5 sm:bottom-4 left-3 sm:left-5 right-3 sm:right-5 text-white">
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold opacity-90 block">Factor 05</span>
                  <p className="font-serif text-xs sm:text-sm md:text-base lg:text-lg font-medium leading-snug">Endometriosis & Pelvic Inflammation</p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <span className="inline-block px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#603085]/10 text-[#603085] text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2">
                Factor 5
              </span>
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-[32px] text-[#241132] font-medium leading-tight mb-2 sm:mb-3">
                Endometriosis
              </h2>
              <p className="text-[#4B5563] text-xs sm:text-sm md:text-[15px] leading-relaxed mb-2.5 sm:mb-3">
                Endometriosis occurs when tissue resembling the lining of the uterus develops outside the uterine cavity. It may involve the ovaries, pelvic lining, fallopian tubes, or other pelvic structures.
              </p>
              <p className="text-[#4B5563] text-xs sm:text-sm md:text-[15px] leading-relaxed mb-3 sm:mb-4">
                Endometriosis may affect fertility through pelvic inflammation, adhesions, distortion of pelvic anatomy, ovarian involvement, and other changes within the reproductive environment.
              </p>

              <h4 className="font-heading font-bold text-[#603085] text-[11px] sm:text-xs uppercase tracking-wider mb-2">
                Common symptoms include:
              </h4>
              <div className="grid grid-cols-2 gap-1.5 text-xs sm:text-sm text-[#4B5563] mb-3 sm:mb-4">
                {[
                  'Painful periods',
                  'Chronic pelvic pain',
                  'Pain during intercourse',
                  'Pain during bowel movements',
                  'Pelvic tenderness',
                  'Infertility'
                ].map((symptom) => (
                  <div key={symptom} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#603085] shrink-0" />
                    <span>{symptom}</span>
                  </div>
                ))}
              </div>

              <p className="text-[11px] sm:text-xs text-[#6B7280] italic">
                However, some women with endometriosis may have few or no symptoms.
              </p>
            </div>
          </div>

          {/* ── Factor 6: Text Left, Image Right (Reverse) ── */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-6 sm:gap-8 lg:gap-14 py-8 sm:py-12 border-b border-[#F0D5E6]/60">
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border border-[#F0D5E6]/80 aspect-[4/3] sm:aspect-[16/11]">
                <img
                  src="https://res.cloudinary.com/exmvyjeq/image/upload/v1792665104/de0e2210-5073-43ae-b35c-07ce5c2a4824.png"
                  alt="Uterine Factors"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-2.5 sm:bottom-4 left-3 sm:left-5 right-3 sm:right-5 text-white">
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold opacity-90 block">Factor 06</span>
                  <p className="font-serif text-xs sm:text-sm md:text-base lg:text-lg font-medium leading-snug">Uterine Cavity & Implantation Environment</p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <span className="inline-block px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#603085]/10 text-[#603085] text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2">
                Factor 6
              </span>
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-[32px] text-[#241132] font-medium leading-tight mb-2 sm:mb-3">
                Uterine Factors
              </h2>
              <p className="text-[#4B5563] text-xs sm:text-sm md:text-[15px] leading-relaxed mb-2.5 sm:mb-3">
                The uterus provides the environment in which an embryo implants and develops. Problems involving the uterine cavity or uterine muscle may therefore affect fertility or the ability to sustain a pregnancy.
              </p>
              <p className="text-[#4B5563] text-xs sm:text-sm md:text-[15px] leading-relaxed mb-3 sm:mb-4">
                The uterine abnormalities can affect either the ability to conceive or the ability to maintain a pregnancy.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div>
                  <h4 className="font-heading font-bold text-[#603085] text-[11px] sm:text-xs uppercase tracking-wider mb-1.5 sm:mb-2">
                    Congenital Abnormalities:
                  </h4>
                  <ul className="space-y-1 text-xs sm:text-sm text-[#4B5563]">
                    <li>• Septate uterus</li>
                    <li>• Unicornuate uterus</li>
                    <li>• Bicornuate uterus</li>
                    <li>• Didelphys uterus</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-[#C49F64] text-[11px] sm:text-xs uppercase tracking-wider mb-1.5 sm:mb-2">
                    Acquired Abnormalities:
                  </h4>
                  <ul className="space-y-1 text-xs sm:text-sm text-[#4B5563]">
                    <li>• Fibroids (myomas)</li>
                    <li>• Endometrial polyps</li>
                    <li>• Intrauterine adhesions or synechiae</li>
                    <li>• Adenomyosis</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-2.5 pt-1 text-xs sm:text-sm text-[#4B5563]">
                <div>
                  <strong className="text-[#3C2048]">Fibroids: </strong>
                  Fibroids are benign growths arising from the muscular layer of the uterus. Their effect on fertility depends on their size and location. Fibroids that project into or distort the uterine cavity are more clearly associated with impaired reproductive outcomes.
                </div>
                <div>
                  <strong className="text-[#3C2048]">Endometrial Polyps: </strong>
                  Endometrial polyps are growths arising from the lining of the uterus. Depending on their size and location, they may interfere with the normal uterine environment and reproductive outcomes.
                </div>
                <div>
                  <strong className="text-[#3C2048]">Intrauterine Adhesions: </strong>
                  Scar tissue within the uterine cavity can develop after certain uterine procedures or other conditions. These adhesions can interfere with the normal uterine cavity and may adversely affect reproductive outcomes.
                </div>
                <div>
                  <strong className="text-[#3C2048]">Adenomyosis: </strong>
                  Adenomyosis occurs when endometrial-type tissue is present within the muscular wall of the uterus. It may be associated with painful periods, heavy menstrual bleeding, pelvic pain, or abnormal uterine bleeding.
                </div>
              </div>
            </div>
          </div>

          {/* ── Factor 7: Image Left, Text Right ── */}
          <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-14 py-8 sm:py-12 border-b border-[#F0D5E6]/60">
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border border-[#F0D5E6]/80 aspect-[4/3] sm:aspect-[16/11]">
                <img
                  src="https://res.cloudinary.com/exmvyjeq/image/upload/v1792665131/70d906e7-fe86-4fdb-8327-5a6e747a7281.png"
                  alt="Pelvic Adhesions and Previous Surgery"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-2.5 sm:bottom-4 left-3 sm:left-5 right-3 sm:right-5 text-white">
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold opacity-90 block">Factor 07</span>
                  <p className="font-serif text-xs sm:text-sm md:text-base lg:text-lg font-medium leading-snug">Surgical History & Pelvic Integrity</p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <span className="inline-block px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#603085]/10 text-[#603085] text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2">
                Factor 7
              </span>
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-[32px] text-[#241132] font-medium leading-tight mb-2 sm:mb-3">
                Pelvic Adhesions and Previous Surgery
              </h2>
              <p className="text-[#4B5563] text-xs sm:text-sm md:text-[15px] leading-relaxed mb-3">
                Scar tissue within the pelvis can alter the normal relationship between the ovaries, fallopian tubes and surrounding structures. Adhesions may develop after pelvic infection, endometriosis, previous surgery, ectopic pregnancy, or other inflammatory conditions.
              </p>
              <p className="text-[#4B5563] text-xs sm:text-sm md:text-[15px] leading-relaxed">
                In selected women, further evaluation of pelvic factors may be considered when the medical history, symptoms, ultrasound, or other investigations suggest endometriosis or pelvic disease.
              </p>
            </div>
          </div>

          {/* ── Factor 8: Text Left, Image Right (Reverse) ── */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-6 sm:gap-8 lg:gap-14 py-8 sm:py-12">
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border border-[#F0D5E6]/80 aspect-[4/3] sm:aspect-[16/11]">
                <img
                  src="https://res.cloudinary.com/exmvyjeq/image/upload/v1792665166/bb7c2c4e-68ef-4cbf-8b7d-31687fbc67c2.png"
                  alt="Lifestyle and General Health Factors"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-2.5 sm:bottom-4 left-3 sm:left-5 right-3 sm:right-5 text-white">
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold opacity-90 block">Factor 08</span>
                  <p className="font-serif text-xs sm:text-sm md:text-base lg:text-lg font-medium leading-snug">Holistic Well-being & Lifestyle Factors</p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <span className="inline-block px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#603085]/10 text-[#603085] text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2">
                Factor 8
              </span>
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-[32px] text-[#241132] font-medium leading-tight mb-2 sm:mb-3">
                Lifestyle and General Health Factors
              </h2>
              <p className="text-[#4B5563] text-xs sm:text-sm md:text-[15px] leading-relaxed mb-3">
                Fertility can also be influenced by general health and lifestyle. The book discusses body weight, smoking, caffeine and alcohol consumption as factors that may influence reproductive outcomes.
              </p>
              <p className="text-[#4B5563] text-xs sm:text-sm md:text-[15px] leading-relaxed">
                Both very low and high body weight have been associated with reduced fecundability. Smoking is associated with poorer reproductive outcomes, while heavy caffeine consumption has been associated with subfertility in some studies.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════ Evaluation Checklist Section ═══════════════ */}
      <section className="py-10 sm:py-14 lg:py-16 bg-[#FBF8FD] border-t border-b border-[#F0D5E6]/60">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-10">
            <span className="text-[#603085] font-bold text-[11px] sm:text-xs tracking-widest uppercase block mb-1.5">
              EVIDENCE-BASED ASSESSMENT
            </span>
            <h3 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#241132]">
              For Women, Evaluation May Include Assessment Of:
            </h3>
            <p className="text-[#6B7280] text-xs sm:text-sm mt-1.5 sm:mt-2">
              Our clinical protocol conducts comprehensive investigations guided by individual medical history.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 sm:gap-4 mb-8 sm:mb-10">
            {[
              'Ovulation',
              'Ovarian reserve',
              'Fallopian tube patency',
              'Uterine cavity',
              'Endometriosis and pelvic factors',
              'Hormonal function',
              'Relevant medical and lifestyle factors'
            ].map((step, idx) => (
              <div key={step} className="flex items-center gap-3 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-[#E4D4EE]/80 shadow-xs">
                <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#603085]/10 text-[#603085] text-[10px] sm:text-xs font-bold flex items-center justify-center shrink-0">
                  {idx + 1}
                </span>
                <span className="text-xs sm:text-sm font-medium text-[#241132]">{step}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              type="button"
              onClick={() => onBookClick && onBookClick('Female Fertility Consultation')}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#603085] hover:bg-[#4E276D] shadow-lg shadow-[#603085]/20 transition-all inline-flex items-center justify-center gap-2"
            >
              <span>Book Female Fertility Consultation</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* ═══════════════ Cross-link Switcher ═══════════════ */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#F5F2F8] border border-[#E4D4EE]">
            <div>
              <span className="text-[10px] sm:text-xs uppercase font-bold tracking-wider text-[#C49F64] block mb-1">
                COMPREHENSIVE COUPLE CARE
              </span>
              <h4 className="font-serif text-lg sm:text-xl md:text-2xl text-[#241132]">
                Want to learn about male reproductive factors?
              </h4>
              <p className="text-xs sm:text-sm text-[#4B5563] mt-1">
                Explore sperm production, semen analysis, varicocele, and hormonal causes in our dedicated guide.
              </p>
            </div>
            <Link
              to="/male-infertility"
              className="w-full sm:w-auto text-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-[#C49F64] hover:bg-[#B38D53] transition-colors shrink-0 shadow-md shadow-[#C49F64]/20"
            >
              Read Male Infertility Guide →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
