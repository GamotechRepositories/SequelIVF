import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer.jsx'

export default function MaleInfertilityPage({ onBookClick }) {
  return (
    <div className="bg-white min-h-screen flex flex-col font-body selection:bg-[#603085] selection:text-white">
      {/* ═══════════════ Hero Header ═══════════════ */}
      <section className="relative overflow-hidden py-8 sm:py-12 md:py-16 border-b border-[#F0D5E6]/80 bg-[#F5F2F8]">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/image copy 5.png"
            alt="Male Andrology and Fertility Assessment"
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
              <span className="text-[#603085] font-semibold shrink-0">Male Infertility</span>
            </nav>

            <span className="text-[#C49F64] font-bold text-[10px] sm:text-xs tracking-wider sm:tracking-widest uppercase block mb-1">
              ANDROLOGY & REPRODUCTIVE HEALTH
            </span>
            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-medium tracking-tight mb-3 sm:mb-4 text-[#241132] leading-tight">
              Male <span className="text-[#603085]">Infertility</span>{' '}
              <span className="text-[#C49F64]">Factors</span>
            </h1>

            <p className="text-[#4B5563] text-xs sm:text-sm md:text-base leading-relaxed mb-3 sm:mb-4">
              Male factors contribute to infertility in a substantial proportion of couples. A male factor may be the only cause of infertility or may occur together with female factors.
            </p>

            <p className="text-[#3C2048] font-medium text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">
              The first and most important investigation for evaluating male fertility is generally a semen analysis, which assesses sperm concentration, movement, morphology and other semen characteristics.
            </p>

            <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => onBookClick && onBookClick('Male Semen Analysis')}
                className="w-full sm:w-auto text-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-[#603085] hover:bg-[#4E276D] shadow-md shadow-[#603085]/20 transition-colors"
              >
                Book Semen Analysis / Consultation
              </button>
              <Link
                to="/female-infertility"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-2.5 sm:py-3 rounded-xl font-semibold text-xs uppercase tracking-wider text-[#3C2048] bg-white border border-[#E4D4EE] hover:bg-[#F5F2F8] transition-colors text-center"
              >
                <span>Switch to Female Infertility</span>
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
          <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-14 py-8 sm:py-12 border-b border-[#F0D5E6]/60 group">
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border border-[#F0D5E6]/80 aspect-[4/3] sm:aspect-[16/11] img-shine-effect group-hover:shadow-lg transition-all duration-300">
                <img
                  src="https://res.cloudinary.com/exmvyjeq/image/upload/v1792665327/4d47fa89-d77f-4e4e-9b06-0a0a6c55107a.png"
                  alt="Problems with Sperm Production"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-2.5 sm:bottom-4 left-3 sm:left-5 right-3 sm:right-5 text-white">
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold opacity-90 block">Factor 01</span>
                  <p className="font-serif text-xs sm:text-sm md:text-base lg:text-lg font-medium leading-snug">Sperm Production & Semen Characteristics</p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <span className="inline-block px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#C49F64]/15 text-[#916E36] text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2">
                Factor 1
              </span>
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-[32px] text-[#241132] font-medium leading-tight mb-2 sm:mb-3">
                Problems with Sperm Production
              </h2>
              <p className="text-[#4B5563] text-xs sm:text-sm md:text-[15px] leading-relaxed mb-3 sm:mb-4">
                The testes are responsible for producing sperm. Conditions that affect the testicles or the hormonal signals controlling them can reduce sperm production.
              </p>

              <h4 className="font-heading font-bold text-[#603085] text-[11px] sm:text-xs uppercase tracking-wider mb-2">
                This may result in:
              </h4>
              <ul className="space-y-1.5 text-xs sm:text-sm text-[#4B5563] mb-3 sm:mb-4">
                {[
                  'Low sperm count (oligozoospermia)',
                  'Very low sperm count',
                  'Complete absence of sperm in the semen (azoospermia)',
                  'Reduced sperm motility',
                  'Abnormal sperm morphology'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C49F64] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-[#4B5563] text-xs sm:text-sm leading-relaxed">
                Possible causes include previous testicular injury or disease, developmental abnormalities, infections, hormonal disorders and genetic conditions.
              </p>
            </div>
          </div>

          {/* ── Factor 2: Text Left, Image Right (Reverse) ── */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-6 sm:gap-8 lg:gap-14 py-8 sm:py-12 border-b border-[#F0D5E6]/60 group">
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border border-[#F0D5E6]/80 aspect-[4/3] sm:aspect-[16/11] img-shine-effect group-hover:shadow-lg transition-all duration-300">
                <img
                  src="https://res.cloudinary.com/exmvyjeq/image/upload/v1792665594/5fd9b84e-62e7-4616-ad10-e27f4ff8d2e9.png"
                  alt="Varicocele"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-2.5 sm:bottom-4 left-3 sm:left-5 right-3 sm:right-5 text-white">
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold opacity-90 block">Factor 02</span>
                  <p className="font-serif text-xs sm:text-sm md:text-base lg:text-lg font-medium leading-snug">Testicular Blood Flow & Varicocele</p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <span className="inline-block px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#C49F64]/15 text-[#916E36] text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2">
                Factor 2
              </span>
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-[32px] text-[#241132] font-medium leading-tight mb-2 sm:mb-3">
                Varicocele
              </h2>
              <p className="text-[#4B5563] text-xs sm:text-sm md:text-[15px] leading-relaxed mb-3">
                A varicocele is an enlargement of the veins around the testicle. It is one of the conditions considered during evaluation of an infertile man.
              </p>
              <p className="text-[#4B5563] text-xs sm:text-sm md:text-[15px] leading-relaxed">
                Clinical examination and, where appropriate, scrotal ultrasound may help identify varicoceles and other testicular abnormalities.
              </p>
            </div>
          </div>

          {/* ── Factor 3: Image Left, Text Right ── */}
          <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-14 py-8 sm:py-12 border-b border-[#F0D5E6]/60 group">
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border border-[#F0D5E6]/80 aspect-[4/3] sm:aspect-[16/11] img-shine-effect group-hover:shadow-lg transition-all duration-300">
                <img
                  src="https://res.cloudinary.com/exmvyjeq/image/upload/v1792666549/c66cb509-0bf5-4a63-8b72-46eca8f3a813.png"
                  alt="Hormonal Causes"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-2.5 sm:bottom-4 left-3 sm:left-5 right-3 sm:right-5 text-white">
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold opacity-90 block">Factor 03</span>
                  <p className="font-serif text-xs sm:text-sm md:text-base lg:text-lg font-medium leading-snug">Hormonal Axis: Hypothalamus, Pituitary & Testes</p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <span className="inline-block px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#C49F64]/15 text-[#916E36] text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2">
                Factor 3
              </span>
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-[32px] text-[#241132] font-medium leading-tight mb-2 sm:mb-3">
                Hormonal Causes
              </h2>
              <p className="text-[#4B5563] text-xs sm:text-sm md:text-[15px] leading-relaxed mb-2.5 sm:mb-3">
                Normal sperm production depends on communication between the hypothalamus, pituitary gland and testes.
              </p>
              <p className="text-[#4B5563] text-xs sm:text-sm md:text-[15px] leading-relaxed mb-3 sm:mb-4">
                Hormonal problems involving FSH, LH and testosterone can interfere with sperm production. Endocrine evaluation is particularly relevant in men with severe sperm abnormalities or clinical features suggestive of hormonal disease.
              </p>

              <h4 className="font-heading font-bold text-[#603085] text-[11px] sm:text-xs uppercase tracking-wider mb-2">
                Risk factors that may raise suspicion of an endocrine problem include:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2 text-xs sm:text-sm text-[#4B5563]">
                {[
                  'Reduced libido',
                  'Abnormal sexual development',
                  'Small testicular size',
                  'Gynecomastia',
                  'Use of anabolic steroids',
                  'Severe oligozoospermia',
                  'Azoospermia'
                ].map((risk) => (
                  <div key={risk} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C49F64] shrink-0" />
                    <span>{risk}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Factor 4: Text Left, Image Right (Reverse) ── */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-6 sm:gap-8 lg:gap-14 py-8 sm:py-12 border-b border-[#F0D5E6]/60 group">
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border border-[#F0D5E6]/80 aspect-[4/3] sm:aspect-[16/11] img-shine-effect group-hover:shadow-lg transition-all duration-300">
                <img
                  src="https://res.cloudinary.com/exmvyjeq/image/upload/v1792666584/60300ce1-7f6c-4da3-9af2-48efddfd951c.png"
                  alt="Genetic Causes"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-2.5 sm:bottom-4 left-3 sm:left-5 right-3 sm:right-5 text-white">
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold opacity-90 block">Factor 04</span>
                  <p className="font-serif text-xs sm:text-sm md:text-base lg:text-lg font-medium leading-snug">Chromosomal & Genetic Analysis</p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <span className="inline-block px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#C49F64]/15 text-[#916E36] text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2">
                Factor 4
              </span>
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-[32px] text-[#241132] font-medium leading-tight mb-2 sm:mb-3">
                Genetic Causes
              </h2>
              <p className="text-[#4B5563] text-xs sm:text-sm md:text-[15px] leading-relaxed mb-3">
                Certain genetic abnormalities can interfere with sperm production or development.
              </p>

              <h4 className="font-heading font-bold text-[#603085] text-[11px] sm:text-xs uppercase tracking-wider mb-2">
                Genetic conditions associated with severe male-factor infertility may include:
              </h4>
              <ul className="space-y-1 text-xs sm:text-sm text-[#4B5563] mb-3 sm:mb-4">
                <li>• Klinefelter syndrome</li>
                <li>• Y-chromosome abnormalities</li>
                <li>• Y-chromosome microdeletions</li>
                <li>• Certain chromosomal translocations</li>
                <li>• Genetic causes of congenital absence of the vas deferens</li>
              </ul>

              <p className="text-[#603085] text-xs sm:text-sm font-semibold leading-relaxed">
                Genetic testing may therefore be considered in men with azoospermia or very severe oligospermia, particularly when clinically indicated.
              </p>
            </div>
          </div>

          {/* ── Factor 5: Image Left, Text Right ── */}
          <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-14 py-8 sm:py-12 border-b border-[#F0D5E6]/60 group">
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border border-[#F0D5E6]/80 aspect-[4/3] sm:aspect-[16/11] img-shine-effect group-hover:shadow-lg transition-all duration-300">
                <img
                  src="https://res.cloudinary.com/exmvyjeq/image/upload/v1792666642/0f28171b-5bbd-49ea-98bf-5b4f66d27ecf.png"
                  alt="Blockage of the Sperm Transport Pathway"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-2.5 sm:bottom-4 left-3 sm:left-5 right-3 sm:right-5 text-white">
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold opacity-90 block">Factor 05</span>
                  <p className="font-serif text-xs sm:text-sm md:text-base lg:text-lg font-medium leading-snug">Sperm Transport & Pathway Continuity</p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <span className="inline-block px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#C49F64]/15 text-[#916E36] text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2">
                Factor 5
              </span>
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-[32px] text-[#241132] font-medium leading-tight mb-2 sm:mb-3">
                Blockage of the Sperm Transport Pathway
              </h2>
              <p className="text-[#4B5563] text-xs sm:text-sm md:text-[15px] leading-relaxed mb-2.5 sm:mb-3">
                Sperm must travel from the testes through the epididymis and vas deferens before being released during ejaculation. A blockage anywhere along this pathway can prevent sperm from appearing normally in the ejaculate.
              </p>
              <p className="text-[#4B5563] text-xs sm:text-sm md:text-[15px] leading-relaxed mb-3">
                One example is congenital absence of the vas deferens. Other possibilities include obstruction of the ejaculatory ducts or obstruction acquired after infection, injury or surgery.
              </p>
              <p className="text-[#3C2048] text-xs sm:text-sm font-medium leading-relaxed">
                Some men with obstruction may continue to produce sperm normally in the testes even though sperm are absent from the semen.
              </p>
            </div>
          </div>

          {/* ── Factor 6: Text Left, Image Right (Reverse) ── */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-6 sm:gap-8 lg:gap-14 py-8 sm:py-12 border-b border-[#F0D5E6]/60 group">
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border border-[#F0D5E6]/80 aspect-[4/3] sm:aspect-[16/11] img-shine-effect group-hover:shadow-lg transition-all duration-300">
                <img
                  src="https://res.cloudinary.com/exmvyjeq/image/upload/v1792666692/b06117d0-42ae-4579-8695-a2d10a25bbb1.png"
                  alt="Infections and Inflammation"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-2.5 sm:bottom-4 left-3 sm:left-5 right-3 sm:right-5 text-white">
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold opacity-90 block">Factor 06</span>
                  <p className="font-serif text-xs sm:text-sm md:text-base lg:text-lg font-medium leading-snug">Reproductive Tract Infections & Inflammation</p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <span className="inline-block px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#C49F64]/15 text-[#916E36] text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2">
                Factor 6
              </span>
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-[32px] text-[#241132] font-medium leading-tight mb-2 sm:mb-3">
                Infections and Inflammation
              </h2>
              <p className="text-[#4B5563] text-xs sm:text-sm md:text-[15px] leading-relaxed mb-3">
                Infections affecting the male reproductive tract can interfere with sperm production, sperm transport or the function of the accessory reproductive glands.
              </p>
              <p className="text-[#4B5563] text-xs sm:text-sm md:text-[15px] leading-relaxed">
                Inflammatory changes may be suspected when semen analysis shows abnormalities such as increased white blood cells or other characteristic findings.
              </p>
            </div>
          </div>

          {/* ── Factor 7: Image Left, Text Right ── */}
          <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-14 py-8 sm:py-12 border-b border-[#F0D5E6]/60 group">
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border border-[#F0D5E6]/80 aspect-[4/3] sm:aspect-[16/11] img-shine-effect group-hover:shadow-lg transition-all duration-300">
                <img
                  src="https://res.cloudinary.com/exmvyjeq/image/upload/v1792666722/ebb6e326-7ef2-45e8-9396-60feb0bd66c5.png"
                  alt="Problems with Ejaculation or Sexual Function"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-2.5 sm:bottom-4 left-3 sm:left-5 right-3 sm:right-5 text-white">
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold opacity-90 block">Factor 07</span>
                  <p className="font-serif text-xs sm:text-sm md:text-base lg:text-lg font-medium leading-snug">Ejaculatory & Sexual Health Factors</p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <span className="inline-block px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#C49F64]/15 text-[#916E36] text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2">
                Factor 7
              </span>
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-[32px] text-[#241132] font-medium leading-tight mb-2 sm:mb-3">
                Problems with Ejaculation or Sexual Function
              </h2>
              <p className="text-[#4B5563] text-xs sm:text-sm md:text-[15px] leading-relaxed mb-3">
                Even when sperm production is normal, difficulties with sexual intercourse or ejaculation can prevent sperm from reaching the female reproductive tract.
              </p>

              <h4 className="font-heading font-bold text-[#603085] text-[11px] sm:text-xs uppercase tracking-wider mb-2">
                Examples include:
              </h4>
              <ul className="space-y-1 text-xs sm:text-sm text-[#4B5563] mb-3">
                <li>• Erectile difficulties</li>
                <li>• Ejaculatory disorders</li>
                <li>• Retrograde ejaculation</li>
                <li>• Anatomical or neurological conditions affecting ejaculation</li>
              </ul>

              <p className="text-[#4B5563] text-xs sm:text-sm leading-relaxed">
                Retrograde ejaculation occurs when semen enters the bladder rather than being expelled normally. It can occur in association with conditions affecting nerve function, including diabetes and spinal cord disorders.
              </p>
            </div>
          </div>

          {/* ── Factor 8: Text Left, Image Right (Reverse) ── */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-6 sm:gap-8 lg:gap-14 py-8 sm:py-12 border-b border-[#F0D5E6]/60 group">
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border border-[#F0D5E6]/80 aspect-[4/3] sm:aspect-[16/11] img-shine-effect group-hover:shadow-lg transition-all duration-300">
                <img
                  src="https://res.cloudinary.com/exmvyjeq/image/upload/v1792666752/ef3a387b-2dac-4a5c-894a-ea2bbd893d46.png"
                  alt="Testicular and Developmental Conditions"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-2.5 sm:bottom-4 left-3 sm:left-5 right-3 sm:right-5 text-white">
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold opacity-90 block">Factor 08</span>
                  <p className="font-serif text-xs sm:text-sm md:text-base lg:text-lg font-medium leading-snug">Developmental History & Surgical Records</p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <span className="inline-block px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#C49F64]/15 text-[#916E36] text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2">
                Factor 8
              </span>
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-[32px] text-[#241132] font-medium leading-tight mb-2 sm:mb-3">
                Testicular and Developmental Conditions
              </h2>
              <p className="text-[#4B5563] text-xs sm:text-sm md:text-[15px] leading-relaxed mb-3">
                A history of conditions affecting testicular development can be relevant to male fertility. Important history may include:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2 text-xs sm:text-sm text-[#4B5563] mb-3">
                {[
                  'Undescended testis (cryptorchidism)',
                  'Previous mumps or significant infections',
                  'Testicular injury',
                  'Testicular or groin surgery',
                  'Hernia surgery',
                  'Previous pelvic surgery',
                  'Other significant childhood or adult illnesses'
                ].map((cond) => (
                  <div key={cond} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#603085]" />
                    <span>{cond}</span>
                  </div>
                ))}
              </div>

              <p className="text-[#4B5563] text-xs sm:text-sm leading-relaxed">
                The male infertility chapter recommends reviewing developmental history, childhood illnesses, previous surgery, toxin exposure, medications and family history as part of the evaluation.
              </p>
            </div>
          </div>

          {/* ── Factor 9: Image Left, Text Right ── */}
          <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-14 py-8 sm:py-12 group">
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border border-[#F0D5E6]/80 aspect-[4/3] sm:aspect-[16/11] img-shine-effect group-hover:shadow-lg transition-all duration-300">
                <img
                  src="https://res.cloudinary.com/exmvyjeq/image/upload/v1792666786/0a0019bd-96d2-4f54-ade8-440abe353334.png"
                  alt="Lifestyle and Environmental Factors"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-2.5 sm:bottom-4 left-3 sm:left-5 right-3 sm:right-5 text-white">
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold opacity-90 block">Factor 09</span>
                  <p className="font-serif text-xs sm:text-sm md:text-base lg:text-lg font-medium leading-snug">Environmental Exposures & Daily Habits</p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <span className="inline-block px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#C49F64]/15 text-[#916E36] text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2">
                Factor 9
              </span>
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-[32px] text-[#241132] font-medium leading-tight mb-2 sm:mb-3">
                Lifestyle and Environmental Factors
              </h2>
              <p className="text-[#4B5563] text-xs sm:text-sm md:text-[15px] leading-relaxed mb-3">
                Lifestyle and environmental exposures may also influence male reproductive health.
              </p>

              <h4 className="font-heading font-bold text-[#603085] text-[11px] sm:text-xs uppercase tracking-wider mb-2">
                The book recommends assessing factors such as:
              </h4>
              <div className="grid grid-cols-2 gap-1.5 text-xs sm:text-sm text-[#4B5563] mb-3">
                {[
                  'Smoking',
                  'Alcohol consumption',
                  'Exposure to excessive heat',
                  'Chemicals and pesticides',
                  'Certain medications or supplements',
                  'Anabolic steroid use'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C49F64]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-[#4B5563] text-xs sm:text-sm leading-relaxed">
                The evidence for individual lifestyle factors varies, but identifying and correcting potentially harmful exposures is an important part of a comprehensive fertility assessment.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════ Evaluation Checklist Section ═══════════════ */}
      <section className="py-10 sm:py-14 lg:py-16 bg-[#FBF8FD] border-t border-b border-[#F0D5E6]/60">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-10">
            <span className="text-[#C49F64] font-bold text-[11px] sm:text-xs tracking-widest uppercase block mb-1.5">
              ANDROLOGY CLINICAL PATHWAY
            </span>
            <h3 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#241132]">
              For Men, Evaluation Commonly Begins With:
            </h3>
            <p className="text-[#6B7280] text-xs sm:text-sm mt-1.5 sm:mt-2">
              Our specialists identify specific male reproductive factors with transparent, evidence-based assessments.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 sm:gap-4 mb-8 sm:mb-10">
            {[
              'Reproductive and medical history',
              'Physical examination',
              'Semen analysis',
              'Hormonal assessment when indicated',
              'Genetic evaluation in selected cases',
              'Assessment of the testes and reproductive tract when required'
            ].map((step, idx) => (
              <div key={step} className="flex items-center gap-3 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-[#E4D4EE]/80 shadow-xs">
                <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#C49F64]/15 text-[#916E36] text-[10px] sm:text-xs font-bold flex items-center justify-center shrink-0">
                  {idx + 1}
                </span>
                <span className="text-xs sm:text-sm font-medium text-[#241132]">{step}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              type="button"
              onClick={() => onBookClick && onBookClick('Male Semen Analysis')}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#603085] hover:bg-[#4E276D] shadow-lg shadow-[#603085]/20 transition-all inline-flex items-center justify-center gap-2"
            >
              <span>Book Semen Analysis / Consultation</span>
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
              <span className="text-[10px] sm:text-xs uppercase font-bold tracking-wider text-[#603085] block mb-1">
                COMPREHENSIVE COUPLE CARE
              </span>
              <h4 className="font-serif text-lg sm:text-xl md:text-2xl text-[#241132]">
                Want to learn about female reproductive factors?
              </h4>
              <p className="text-xs sm:text-sm text-[#4B5563] mt-1">
                Explore ovulation disorders, ovarian reserve, tubal factors, and endometriosis in our dedicated guide.
              </p>
            </div>
            <Link
              to="/female-infertility"
              className="w-full sm:w-auto text-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-[#603085] hover:bg-[#4E276D] transition-colors shrink-0 shadow-md shadow-[#603085]/20"
            >
              Read Female Infertility Guide →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
