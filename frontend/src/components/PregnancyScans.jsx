import React from 'react'

export default function PregnancyScans({ onBookScan }) {
  const SCANS = [
    {
      id: 'early-pregnancy',
      title: 'Early pregnancy',
      timing: '6 - 8 weeks',
      image: '/images/scan_early_pregnancy.jpg',
      price: '₹2,499',
      desc: 'Confirm viability, heartbeat and accurate gestational dating with our gentle first-trimester scan.',
    },
    {
      id: 'harmony-nipt',
      title: 'Private Harmony',
      timing: 'NIPT Test',
      image: '/images/scan_harmony_nipt.jpg',
      price: '₹14,999',
      desc: 'Non-invasive prenatal DNA screening test with 99%+ accuracy for chromosomal health.',
    },
    {
      id: '4d-growth',
      title: '4D Growth',
      timing: '24 - 32 Weeks',
      image: '/images/scan_4d_growth.jpg',
      price: '₹3,999',
      desc: 'High-definition 4D ultrasound capturing your baby’s real-time facial expressions and growth metrics.',
    },
    {
      id: '4d-anatomy',
      title: '4D Anatomy',
      timing: '19 - 22 Weeks',
      image: '/images/scan_4d_anatomy.jpg',
      price: '₹4,499',
      desc: 'Detailed structural anomaly examination by certified senior fetal medicine sonographers.',
    },
  ]

  return (
    <section id="scans" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">

        {/* Section Title matching reference */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#241132] tracking-tight">
              Our pregnancy scans
            </h2>
            <p className="text-[#644B6F] text-sm sm:text-base mt-2">
              Performed on state-of-the-art GE Voluson E10 ultrasound systems with instant photo printouts & digital HD video.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onBookScan('General Pregnancy Scan')}
            className="self-start sm:self-auto text-sm font-bold text-[#A21CAF] hover:text-[#701A75] flex items-center gap-1.5 transition-colors"
          >
            <span>View all packages</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>

        {/* 4 Cards Grid (matching reference 1:1) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {SCANS.map((scan) => (
            <div
              key={scan.id}
              onClick={() => onBookScan(scan.title)}
              className="group cursor-pointer bg-white rounded-[26px] p-3.5 border border-[#F1D7E7] hover:border-[#A21CAF]/50 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col relative"
            >
              {/* Photo Box */}
              <div className="relative rounded-[20px] overflow-hidden aspect-[4/3] bg-[#FAF2F7] mb-4">
                <img
                  src={scan.image}
                  alt={scan.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[11px] font-bold bg-white/90 backdrop-blur-sm text-[#A21CAF] shadow-sm">
                  {scan.price}
                </div>
              </div>

              {/* Title & Timing */}
              <div className="px-2 pb-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-extrabold text-lg text-[#241132] group-hover:text-[#A21CAF] transition-colors leading-snug">
                    {scan.title}
                  </h3>
                  <p className="text-sm font-bold text-[#7C6285] mt-0.5">
                    {scan.timing}
                  </p>
                  <p className="text-xs text-gray-500 mt-2 line-clamp-2 leading-relaxed">
                    {scan.desc}
                  </p>
                </div>

                {/* Subtle pink bottom indicator line on hover */}
                <div className="mt-4 pt-3 border-t border-[#F8E7F2] flex items-center justify-between text-xs font-semibold text-[#A21CAF]">
                  <span>Book this scan</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
