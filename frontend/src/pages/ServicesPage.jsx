import { Link } from 'react-router-dom'
import Footer from '../components/Footer.jsx'
import { FERTILITY_SERVICES } from '../data/fertilityServices.js'

export default function ServicesPage({ onBookClick }) {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20 bg-[#F5F2F8]">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/image copy 5.png"
            alt=""
            className="w-full h-full object-cover object-[center_35%] opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F5F2F8] via-[#F5F2F8]/88 to-[#F5F2F8]/55" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <nav className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#F0D5E6] text-[#7C6285] mb-4 uppercase tracking-wider">
            <Link to="/" className="hover:text-[#603085] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#603085] font-bold">Services</span>
          </nav>

          <span className="text-[#603085] font-bold text-xs sm:text-sm tracking-widest uppercase block mb-2">
            Services offered by Sequel IVF
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-[46px] font-medium tracking-tight max-w-3xl">
            <span className="text-[#603085]">Advanced fertility care,</span>{' '}
            <span className="text-[#C49F64]">designed around you</span>
          </h1>
          <div className="w-20 h-0.5 bg-gradient-to-r from-[#603085] to-[#C49F64] mt-4 mb-5" />
          <p className="max-w-2xl text-[#53385E] text-sm sm:text-[16px] leading-relaxed">
            Choose a treatment to learn how Sequel IVF supports every step—from first evaluation to advanced embryology—with science, privacy, and compassion.
          </p>
        </div>
      </section>

      <section className="py-10 sm:py-14 lg:py-16 flex-1 bg-gradient-to-b from-[#F5F2F8] via-white to-white">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
            {FERTILITY_SERVICES.map((service, index) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-[#E4D4EE] shadow-[0_8px_24px_-12px_rgba(96,48,133,0.18)] hover:border-[#603085] hover:shadow-[0_18px_36px_-16px_rgba(96,48,133,0.35)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-44 sm:h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading={index < 6 ? 'eager' : 'lazy'}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#241132]/70 via-[#241132]/15 to-transparent" />
                  <span className="absolute bottom-3 left-3 right-3 text-white font-serif text-lg sm:text-[19px] leading-snug">
                    {service.shortTitle}
                  </span>
                </div>

                <div className="flex flex-col flex-1 p-4.5 sm:p-5">
                  <p className="text-[#C49F64] text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-2">
                    {service.tagline}
                  </p>
                  <p className="text-[#555555] text-[13px] sm:text-sm leading-relaxed flex-1">
                    {service.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[#603085] text-xs font-bold uppercase tracking-widest group-hover:gap-2.5 transition-all">
                    Learn more
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 sm:mt-16 rounded-3xl bg-[#603085] px-6 py-8 sm:px-10 sm:py-10 flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-8">
            <div className="flex-1">
              <h2 className="font-serif text-2xl sm:text-3xl text-white mb-2">Not sure which treatment is right?</h2>
              <p className="text-white/85 text-sm sm:text-[15px] leading-relaxed max-w-2xl">
                A fertility specialist can review your history and map a clear next step—whether that is evaluation, IUI, IVF, or preservation.
              </p>
            </div>
            <button
              type="button"
              onClick={onBookClick}
              className="shrink-0 inline-flex items-center justify-center px-7 py-3.5 bg-white hover:bg-[#F5F2F8] text-[#603085] font-bold text-xs sm:text-sm tracking-wider uppercase rounded-lg transition-colors cursor-pointer"
            >
              Book a consultation
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
