import { Link, Navigate, useParams } from 'react-router-dom'
import Footer from '../components/Footer.jsx'
import { getRelatedServices, getServiceBySlug } from '../data/fertilityServices.js'

function CheckList({ title, items }) {
  if (!items?.length) return null
  return (
    <div className="rounded-2xl border border-[#E4D4EE] bg-white p-5 sm:p-6 shadow-[0_8px_20px_-14px_rgba(96,48,133,0.2)]">
      <h3 className="font-heading font-extrabold text-[#603085] text-sm sm:text-base tracking-wide uppercase mb-4">
        {title}
      </h3>
      <ul className="space-y-2.5">
        {items.map((item) => (
          <li key={item} className="flex gap-2.5 text-[13px] sm:text-sm text-[#4B5563] leading-relaxed">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#C49F64] shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Subsection({ section }) {
  return (
    <article className="rounded-2xl border border-[#E4D4EE] bg-[#FBF8FD] p-5 sm:p-7">
      <h3 className="font-serif text-xl sm:text-2xl text-[#603085] mb-3">{section.title}</h3>
      {section.whatIsIt && (
        <p className="text-[#4B5563] text-sm sm:text-[15px] leading-[1.75] mb-4">{section.whatIsIt}</p>
      )}
      {section.body && (
        <p className="text-[#4B5563] text-sm sm:text-[15px] leading-[1.75] mb-4">{section.body}</p>
      )}
      {section.points?.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
          {section.points.map((point) => (
            <div key={point.title} className="bg-white rounded-xl border border-[#E4D4EE] p-4">
              <h4 className="font-heading font-bold text-[#603085] text-sm mb-1.5">{point.title}</h4>
              <p className="text-[#4B5563] text-[13px] leading-relaxed">{point.text}</p>
            </div>
          ))}
        </div>
      )}
      {(section.whoCanOpt || section.whyDone) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
          <CheckList title={section.whoLabel || 'Who can opt for it?'} items={section.whoCanOpt} />
          <CheckList title="Why is it done?" items={section.whyDone} />
        </div>
      )}
    </article>
  )
}

export default function ServiceDetailPage({ onBookClick }) {
  const { slug } = useParams()
  const service = getServiceBySlug(slug)

  if (!service) return <Navigate to="/services" replace />

  const related = getRelatedServices(service.slug, 3)

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <section className="relative overflow-hidden min-h-[280px] sm:min-h-[340px] lg:min-h-[400px] flex items-end">
        <img
          src={service.image}
          alt={service.imageAlt}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#241132] via-[#241132]/55 to-[#241132]/20" />
        <div className="relative z-10 w-full mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 pb-8 sm:pb-10">
          <nav className="inline-flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs font-medium px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white/80 mb-2 sm:mb-4 shadow-xs max-w-full overflow-x-auto whitespace-nowrap">
            <Link to="/" className="hover:text-white transition-colors shrink-0">Home</Link>
            <span className="text-[#E8D5A3] shrink-0">/</span>
            <Link to="/services" className="hover:text-white transition-colors shrink-0">Services</Link>
            <span className="text-[#E8D5A3] shrink-0">/</span>
            <span className="text-[#E8D5A3] font-semibold shrink-0">{service.shortTitle}</span>
          </nav>
          <p className="text-[#E8D5A3] font-bold text-xs sm:text-sm tracking-widest uppercase mb-2">
            {service.tagline}
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-[46px] text-white leading-tight max-w-4xl">
            {service.title}
          </h1>
        </div>
      </section>

      <section className="py-10 sm:py-14 lg:py-16 flex-1">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-8 space-y-5">
              {service.intro.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className="text-[#4B5563] text-sm sm:text-[16px] leading-[1.8]">
                  {paragraph}
                </p>
              ))}

              {service.whatIsIt && (
                <div className="rounded-2xl bg-[#F5F2F8] border border-[#E4D4EE] p-5 sm:p-6">
                  <h2 className="font-heading font-extrabold text-[#603085] text-sm tracking-wider uppercase mb-2">
                    What is it?
                  </h2>
                  <p className="text-[#4B5563] text-sm sm:text-[15px] leading-[1.75]">{service.whatIsIt}</p>
                </div>
              )}
            </div>

            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-28 rounded-2xl overflow-hidden border border-[#E4D4EE] bg-white shadow-[0_12px_28px_-16px_rgba(96,48,133,0.28)]">
                <img src={service.image} alt="" className="w-full h-44 sm:h-52 object-cover" />
                <div className="p-5">
                  <p className="text-[#603085] font-bold text-sm mb-2">Talk to a specialist</p>
                  <p className="text-[#555555] text-[13px] leading-relaxed mb-4">
                    Get a personalized plan for {service.shortTitle} at Sequel IVF, Hadapsar, Pune.
                  </p>
                  <button
                    type="button"
                    onClick={() => onBookClick?.(service.title)}
                    className="w-full py-3 rounded-lg bg-[#603085] hover:bg-[#4E276D] text-white text-xs font-bold uppercase tracking-wider cursor-pointer"
                  >
                    Book this treatment
                  </button>
                </div>
              </div>
            </aside>
          </div>

          {(service.whoCanOpt || service.whyDone) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-10">
              <CheckList title={service.whoLabel || 'Who can opt for it?'} items={service.whoCanOpt} />
              <CheckList title="Why is it done?" items={service.whyDone} />
            </div>
          )}

          {service.subsections?.length > 0 && (
            <div className="mt-10 sm:mt-12 space-y-5">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#603085]">Inside this service</h2>
              {service.subsections.map((section) => (
                <Subsection key={section.title} section={section} />
              ))}
            </div>
          )}

          <div className="mt-14 sm:mt-16">
            <div className="flex items-end justify-between gap-4 mb-6">
              <div>
                <p className="text-[#603085] font-bold text-xs tracking-widest uppercase mb-1">Explore more</p>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#241132]">Related services</h2>
              </div>
              <Link to="/services" className="hidden sm:inline-flex text-xs font-bold uppercase tracking-widest text-[#603085] hover:text-[#4E276D]">
                All services
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  to={`/services/${item.slug}`}
                  className="group rounded-2xl overflow-hidden border border-[#E4D4EE] bg-white hover:border-[#603085] transition-colors"
                >
                  <div className="h-32 overflow-hidden">
                    <img src={item.image} alt={item.imageAlt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-heading font-bold text-[#603085] text-sm mb-1">{item.shortTitle}</h3>
                    <p className="text-[#7C6285] text-xs leading-relaxed line-clamp-2">{item.tagline}</p>
                  </div>
                </Link>
              ))}
            </div>
            <Link to="/services" className="sm:hidden mt-4 inline-flex text-xs font-bold uppercase tracking-widest text-[#603085]">
              View all services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
