import { useEffect, useRef } from 'react'

const TREATMENTS = [
  {
    icon: '🔬',
    tag: 'Most Popular',
    title: 'In Vitro Fertilisation (IVF)',
    desc: 'Our flagship treatment uses advanced embryo culture technology, time-lapse imaging, and comprehensive genetic testing to select the healthiest embryos for transfer.',
    features: ['Day 5 Blastocyst Culture', 'PGT-A Genetic Screening', 'Time-Lapse EmbryoScope', 'Laser Assisted Hatching'],
    successRate: '72%',
    color: { from: '#5B0EA6', to: '#8B3AC9' },
  },
  {
    icon: '💊',
    tag: 'Minimally Invasive',
    title: 'Intrauterine Insemination (IUI)',
    desc: 'A simpler, cost-effective first-line fertility treatment ideal for couples with mild male factor or unexplained infertility.',
    features: ['Ovarian Stimulation', 'Sperm Washing & Prep', 'Optimal Timing', 'Minimal Discomfort'],
    successRate: '38%',
    color: { from: '#7C3AED', to: '#A855F7' },
  },
  {
    icon: '🧬',
    tag: 'Advanced',
    title: 'ICSI — Microinjection',
    desc: 'Intracytoplasmic Sperm Injection directly injects a single sperm into each egg, ideal for severe male factor infertility or prior IVF failures.',
    features: ['Single Sperm Selection', 'IMSI High Magnification', 'PICSI Sperm Testing', 'High Fertilisation Rate'],
    successRate: '68%',
    color: { from: '#C2185B', to: '#E91E8C' },
  },
  {
    icon: '❄️',
    tag: 'Preservation',
    title: 'Egg & Embryo Freezing',
    desc: 'Vitrification technology freezes eggs and embryos rapidly, preserving fertility for future use — for medical or personal reasons.',
    features: ['Ultra-fast Vitrification', 'Long-term Cryostorage', 'High Survival Rate', 'Flexible Scheduling'],
    successRate: '65%',
    color: { from: '#0369A1', to: '#7C3AED' },
  },
  {
    icon: '🤝',
    tag: 'Donor Programme',
    title: 'Donor Egg / Sperm',
    desc: 'Our carefully screened donor programme helps couples where own gametes are not viable, with rigorous matching and comprehensive health testing.',
    features: ['Genetic Screened Donors', 'Anonymous Matching', 'Legal Framework', 'Counselling Support'],
    successRate: '75%',
    color: { from: '#8B3AC9', to: '#C2185B' },
  },
  {
    icon: '🏥',
    tag: 'Surgical',
    title: 'Surgical Sperm Retrieval',
    desc: 'TESA, PESA, TESE procedures for men with obstructive or non-obstructive azoospermia, giving hope where conventional methods fail.',
    features: ['TESA / PESA / TESE', 'Micro-TESE', 'Same-day IVF/ICSI', 'Expert Urologist'],
    successRate: 'Varies',
    color: { from: '#BE185D', to: '#7C3AED' },
  },
]

export default function Services() {
  const ref = useRef(null)

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('is-visible')),
      { threshold: 0.08 }
    )
    ref.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <section id="treatments" ref={ref} className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(175deg, #faf7ff 0%, #f3e8ff 50%, #fce7f3 100%)' }}>

      {/* Background shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-10 float-slow"
          style={{ background: 'radial-gradient(circle, #7C3AED, transparent)', transform: 'translate(30%, -40%)' }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-10 float-gentle"
          style={{ background: 'radial-gradient(circle, #C2185B, transparent)', transform: 'translate(-30%, 30%)' }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full opacity-5 -translate-x-1/2 -translate-y-1/2"
          style={{ background: 'radial-gradient(circle, #5B0EA6, transparent)' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="reveal section-badge mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-pink-600" />
            Our Treatments
          </span>
          <h2 className="reveal reveal-delay-1 font-heading font-800 text-3xl sm:text-4xl lg:text-5xl text-gray-900 mt-4 mb-5">
            Comprehensive Fertility{' '}
            <span className="grad-text">Care</span>
          </h2>
          <p className="reveal reveal-delay-2 text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            From first consultation to holding your baby — we offer the full spectrum of assisted reproductive technologies under one roof.
          </p>
        </div>

        {/* Treatment cards grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {TREATMENTS.map((t, i) => (
            <div
              key={t.title}
              className={`reveal reveal-delay-${(i % 3) + 1} group glass-card rounded-3xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-400 cursor-default`}
            >
              {/* Top colour bar */}
              <div className="h-1.5 w-full"
                style={{ background: `linear-gradient(90deg, ${t.color.from}, ${t.color.to})` }} />

              <div className="p-7">
                {/* Icon & tag */}
                <div className="flex items-start justify-between mb-5">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-md group-hover:scale-110 transition-transform duration-300"
                    style={{ background: `linear-gradient(135deg, ${t.color.from}20, ${t.color.to}15)`, border: `1px solid ${t.color.from}25` }}>
                    {t.icon}
                  </div>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider"
                    style={{ background: `${t.color.from}15`, color: t.color.from }}>
                    {t.tag}
                  </span>
                </div>

                {/* Title & desc */}
                <h3 className="font-heading font-700 text-xl text-gray-900 mb-3 leading-tight">{t.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{t.desc}</p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-gray-600">
                      <span className="w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                        style={{ background: `linear-gradient(135deg, ${t.color.from}, ${t.color.to})` }}>
                        <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" strokeWidth="3">
                          <path d="M5 12l5 5L19 7" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Success rate + CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <p className="text-[11px] text-gray-400 uppercase tracking-wider font-semibold">Success Rate</p>
                    <p className="font-heading font-800 text-xl" style={{ color: t.color.from }}>{t.successRate}</p>
                  </div>
                  <a href="#contact"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold rounded-xl px-4 py-2 transition-all duration-200 hover:gap-2.5"
                    style={{ color: t.color.from, background: `${t.color.from}10` }}>
                    Learn More
                    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all */}
        <div className="reveal reveal-delay-4 mt-12 text-center">
          <a href="#contact" className="btn-outline inline-flex">
            Discuss Your Treatment Plan
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
