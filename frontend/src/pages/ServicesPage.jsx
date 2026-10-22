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
          <nav className="inline-flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs font-medium px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white/90 backdrop-blur-md border border-[#F0D5E6] text-[#7C6285] mb-2 sm:mb-4 shadow-xs max-w-full overflow-x-auto whitespace-nowrap">
            <Link to="/" className="hover:text-[#603085] transition-colors shrink-0">Home</Link>
            <span className="text-[#C49F64] shrink-0">/</span>
            <span className="text-[#603085] font-semibold shrink-0">Services</span>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {FERTILITY_SERVICES.map((service, index) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="service-card-frame group rounded-[22px] p-[3px] flex hover:-translate-y-1.5 transition-transform duration-300 shadow-[0_10px_28px_-14px_rgba(96,48,133,0.28)] hover:shadow-[0_22px_40px_-16px_rgba(96,48,133,0.42)]"
              >
                <article className="relative z-10 flex flex-col w-full rounded-[19px] overflow-hidden bg-white">
                  <div className="relative h-48 sm:h-52 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading={index < 6 ? 'eager' : 'lazy'}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#261132] via-[#261132]/25 to-transparent" />
                    <span className="service-card-shine-el pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                    <h2 className="absolute bottom-3 left-3 right-3 text-white font-serif text-xl sm:text-[22px] leading-snug drop-shadow-md">
                      {service.shortTitle}
                    </h2>
                  </div>

                  <div className="flex flex-col flex-1 p-5">
                    <p className="text-[#C49F64] text-[11px] sm:text-xs font-bold uppercase tracking-[0.12em] mb-2">
                      {service.tagline}
                    </p>
                    <p className="text-[#555555] text-[13px] sm:text-sm leading-relaxed flex-1">
                      {service.excerpt}
                    </p>
                    <span className="mt-5 inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-[#F5F2F8] text-[#603085] text-xs font-bold uppercase tracking-widest group-hover:bg-[#603085] group-hover:text-white transition-colors duration-300">
                      Learn more
                      <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </div>
                </article>
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
