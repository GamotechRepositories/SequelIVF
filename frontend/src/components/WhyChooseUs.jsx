export default function WhyChooseUs() {
  const REASONS = [
    {
      num: '01',
      title: 'Expert clinical leadership',
      text: 'Senior fertility specialists, embryologists, and endoscopic surgeons guide every plan with 24+ years of clinical experience.',
    },
    {
      num: '02',
      title: 'Science you can trust',
      text: 'ICMR-registered, NABH-accredited care with a high-grade embryology laboratory and strict daily quality monitoring.',
    },
    {
      num: '03',
      title: 'Treatment built around you',
      text: 'From first evaluation to IVF, ICSI, or preservation, your protocol is personalized—not a one-size-fits-all package.',
    },
    {
      num: '04',
      title: 'Clarity at every step',
      text: 'Honest counselling, transparent pathways, and emotional support so you always know what comes next and why.',
    },
  ]

  return (
    <section id="why-choose-us" className="relative overflow-hidden bg-gradient-to-b from-white via-[#F5F2F8] to-white py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <span className="text-[#603085] font-bold text-xs sm:text-sm tracking-widest uppercase block mb-2">
              Why choose us
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] leading-tight font-medium tracking-tight">
              <span className="text-[#603085]">Care that feels</span>{' '}
              <span className="text-[#C49F64]">personal</span>
            </h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-[#603085] to-[#C49F64] mt-4 mb-5" />
            <p className="text-[#644B6F] text-[15px] sm:text-[16px] leading-relaxed max-w-md mb-7">
              Sequel IVF in Hadapsar, Pune brings together advanced reproductive science and human warmth—so your journey is medically precise and emotionally supported.
            </p>
            <div className="relative max-w-md overflow-hidden rounded-2xl img-shine-effect group cursor-pointer">
              <img
                src="/images/Warm Pregnancy Consultation Cutout.png"
                alt="Warm pregnancy consultation at Sequel IVF"
                className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                style={{
                  maskImage: 'linear-gradient(to bottom, black 78%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 78%, transparent 100%)',
                }}
              />
              <div className="absolute inset-x-0 bottom-0 h-10 sm:h-14 bg-gradient-to-t from-[#F5F2F8] via-[#F5F2F8]/70 to-transparent pointer-events-none" />
              <p className="relative mt-1 text-[#603085] text-xs sm:text-sm font-semibold tracking-wide">
                ICMR registered · NABH accredited
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            {REASONS.map((reason, index) => (
              <div
                key={reason.num}
                className={`flex gap-4 sm:gap-6 py-5 sm:py-6 ${index !== REASONS.length - 1 ? 'border-b border-[#E4D4EE]' : ''}`}
              >
                <span className="font-heading font-extrabold text-[#C49F64] text-lg sm:text-xl tracking-[0.18em] shrink-0 w-11">
                  {reason.num}
                </span>
                <div>
                  <h3 className="font-heading font-bold text-[#241132] text-base sm:text-[18px] mb-1.5">
                    {reason.title}
                  </h3>
                  <p className="text-[#644B6F] text-sm sm:text-[15px] leading-relaxed">
                    {reason.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
