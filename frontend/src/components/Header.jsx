import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FERTILITY_SERVICES } from '../data/fertilityServices.js'

export default function Header({ onBookClick }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)

  return (
    <>
      {/* ── Permanently Sticky Header: Exact Same Design Always On Scroll ── */}
      <header className="sticky top-0 z-50 w-full bg-[#F5F2F8] lg:bg-white">
        {/* Top Permanent Sticky White Space Strip (Desktop only for white notch blend) */}
        <div className="hidden lg:block relative z-30 w-full bg-white lg:h-4" />

        {/* The Exact Same Header Bar: Logo, Notch with S-curves & Button (Never Changes Design on Scroll) */}
        <div className="relative w-full bg-[#F5F2F8] rounded-none lg:rounded-t-[32px] border-b border-[#F0D5E6]/60 lg:border-t lg:border-[#F0D5E6]/80 shadow-[0_8px_20px_-6px_rgba(36,17,50,0.06)]">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
            <div className="relative w-full flex items-center justify-between py-2 sm:py-2.5">

              {/* Left: Official Sequel IVF Logo Badge */}
              <Link to="/" className="flex items-center group select-none shrink-0 py-0.5">
                <div className="lg:bg-white lg:px-3.5 lg:py-1.5 xl:px-4 lg:rounded-lg lg:border lg:border-[#F0D5E6]/80 lg:shadow-xs lg:group-hover:shadow-md flex items-center justify-center transition-all duration-200">
                  <img
                    src="/images/SequelIVF Fertility Logo.png"
                    alt="Sequeli IVF – Advanced Fertility Treatment & IVF Centre"
                    className="h-10 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.03]"
                  />
                </div>
              </Link>

              {/* Center: White Notch Navigation (Always Connected with S-Curves - Never Changes) */}
              <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-0 pointer-events-auto z-20">
                <div className="relative bg-white px-5 xl:px-8 pt-3.5 pb-5 xl:pt-4 xl:pb-5.5 rounded-b-[26px] sm:rounded-b-[30px] border-b border-x border-[#F0D5E6] shadow-[0_12px_24px_-4px_rgba(36,17,50,0.08)]">

                  {/* Clean White Top Cover: Removes the top border ONLY directly above the notch/text */}
                  <div className="absolute -top-[2px] -left-[1px] -right-[1px] h-[4px] bg-white z-20 pointer-events-none" />

                  {/* Left S-Curve Fillet: Curves Pink Card into White Notch (Always 100% visible) */}
                  <div className="absolute -left-7 top-0 w-7 h-7 overflow-hidden pointer-events-none">
                    <svg className="w-7 h-7" viewBox="0 0 28 28">
                      <rect width="28" height="28" fill="white" />
                      <path d="M 0,0 C 15.464,0 28,12.536 28,28 L 0,28 Z" fill="#F5F2F8" />
                      <path d="M 0,0 C 15.464,0 28,12.536 28,28" stroke="#F0D5E6" strokeWidth="1" fill="none" />
                    </svg>
                  </div>

                  {/* Navigation Links inside Notch */}
                  <nav className="flex items-center gap-2.5 xl:gap-4 text-[12px] xl:text-[13px] font-bold uppercase tracking-wider text-[#241132] whitespace-nowrap">
                    {/* ABOUT US DROPDOWN */}
                    <div
                      className="relative group cursor-pointer"
                      onMouseEnter={() => setActiveDropdown('about')}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <Link
                        to="/about-us"
                        className="hover:text-[#603085] transition-colors flex items-center gap-1 whitespace-nowrap"
                      >
                        <span>ABOUT</span>
                        <svg className={`w-3.5 h-3.5 opacity-60 transition-transform ${activeDropdown === 'about' ? 'rotate-180' : 'group-hover:rotate-180'}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </Link>
                      {activeDropdown === 'about' && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-56 z-50">
                          <div className="bg-white rounded-2xl p-2.5 shadow-xl border border-[#F2D7E8] space-y-1">
                            <Link
                              to="/about-us"
                              onClick={() => setActiveDropdown(null)}
                              className="block px-3.5 py-2 rounded-xl text-xs font-semibold text-[#3C2048] hover:bg-[#F5F2F8] hover:text-[#603085] transition-colors"
                            >
                              About Us
                            </Link>
                            <Link
                              to="/gallery"
                              onClick={() => setActiveDropdown(null)}
                              className="block px-3.5 py-2 rounded-xl text-xs font-semibold text-[#3C2048] hover:bg-[#F5F2F8] hover:text-[#603085] transition-colors"
                            >
                              Gallery
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>

                    <span className="w-1.5 h-1.5 rounded-full bg-[#603085] shrink-0" />

                    {/* SERVICES */}
                    <div
                      className="relative group cursor-pointer"
                      onMouseEnter={() => setActiveDropdown('services')}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <Link to="/services" className="hover:text-[#603085] transition-colors flex items-center gap-1 whitespace-nowrap">
                        <span>SERVICES</span>
                        <svg className={`w-3.5 h-3.5 opacity-60 transition-transform ${activeDropdown === 'services' ? 'rotate-180' : 'group-hover:rotate-180'}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </Link>
                      {activeDropdown === 'services' && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[520px] z-50">
                          <div className="bg-white rounded-2xl p-3 shadow-xl border border-[#F2D7E8]">
                            <div className="grid grid-cols-2 gap-1">
                              {FERTILITY_SERVICES.map((service) => (
                                <Link
                                  key={service.slug}
                                  to={`/services/${service.slug}`}
                                  onClick={() => setActiveDropdown(null)}
                                  className="block px-3 py-2 rounded-xl text-xs font-semibold text-[#3C2048] hover:bg-[#F5F2F8] hover:text-[#603085]"
                                >
                                  {service.shortTitle}
                                </Link>
                              ))}
                            </div>
                            <Link
                              to="/services"
                              onClick={() => setActiveDropdown(null)}
                              className="mt-2 block text-center px-3 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#603085] hover:bg-[#4E276D]"
                            >
                              View all services
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>

                    <span className="w-1.5 h-1.5 rounded-full bg-[#603085] shrink-0" />

                    <Link to="/our-team" className="hover:text-[#603085] transition-colors whitespace-nowrap">
                      OUR TEAM
                    </Link>

                    <span className="w-1.5 h-1.5 rounded-full bg-[#603085] shrink-0" />

                    {/* ABOUT INFERTILITY */}
                    <div
                      className="relative group cursor-pointer"
                      onMouseEnter={() => setActiveDropdown('infertility')}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <Link to="/#faq" className="hover:text-[#603085] transition-colors flex items-center gap-1 whitespace-nowrap">
                        <span>ABOUT INFERTILITY</span>
                        <svg className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </Link>
                      {activeDropdown === 'infertility' && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-64 z-50">
                          <div className="bg-white rounded-2xl p-3 shadow-xl border border-[#F2D7E8] space-y-1">
                            <Link to="/#faq" onClick={() => setActiveDropdown(null)} className="block px-3 py-2 rounded-xl text-xs font-semibold text-[#3C2048] hover:bg-[#F5F2F8] hover:text-[#603085]">Understanding Infertility (FAQs)</Link>
                            <Link to="/#specialist" onClick={() => setActiveDropdown(null)} className="block px-3 py-2 rounded-xl text-xs font-semibold text-[#3C2048] hover:bg-[#F5F2F8] hover:text-[#603085]">Male & Female Fertility Causes</Link>
                            <Link to="/#faq" onClick={() => setActiveDropdown(null)} className="block px-3 py-2 rounded-xl text-xs font-semibold text-[#3C2048] hover:bg-[#F5F2F8] hover:text-[#603085]">Common Questions Answered</Link>
                            <Link to="/#contact" onClick={() => setActiveDropdown(null)} className="block px-3 py-2 rounded-xl text-xs font-semibold text-[#3C2048] hover:bg-[#F5F2F8] hover:text-[#603085]">Second Opinion Consultation</Link>
                          </div>
                        </div>
                      )}
                    </div>

                    <span className="w-1.5 h-1.5 rounded-full bg-[#603085] shrink-0" />

                    <Link to="/#contact" className="hover:text-[#603085] transition-colors whitespace-nowrap">
                      CONTACT US
                    </Link>
                  </nav>

                  {/* Right S-Curve Fillet: Curves White Notch back into Pink Card (Always 100% visible) */}
                  <div className="absolute -right-7 top-0 w-7 h-7 overflow-hidden pointer-events-none">
                    <svg className="w-7 h-7" viewBox="0 0 28 28">
                      <rect width="28" height="28" fill="white" />
                      <path d="M 28,0 C 12.536,0 0,12.536 0,28 L 28,28 Z" fill="#F5F2F8" />
                      <path d="M 28,0 C 12.536,0 0,12.536 0,28" stroke="#F0D5E6" strokeWidth="1" fill="none" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Right Desktop: Compact & Responsive MAKE AN APPOINTMENT Button */}
              <div className="hidden lg:flex items-center">
                <button
                  type="button"
                  onClick={onBookClick}
                  className="group inline-flex items-center gap-1.5 px-3.5 sm:px-4.5 py-2 sm:py-2.5 rounded-lg text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white bg-[#603085] hover:bg-[#4E276D] active:scale-95 shadow-md shadow-fuchsia-900/15 transition-all duration-200 cursor-pointer"
                >
                  <span>MAKE AN APPOINTMENT</span>
                  <svg className="w-3.5 h-3.5 text-white transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7m0 0H9m8 0v8" />
                  </svg>
                </button>
              </div>

              {/* Right Mobile: Appointment + Hamburger */}
              <div className="lg:hidden flex items-center gap-2">
                <button
                  type="button"
                  onClick={onBookClick}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-[#603085] shadow-xs active:scale-95"
                >
                  Book
                </button>
                <button
                  type="button"
                  className="p-1.5 rounded-xl text-[#3C2048] bg-white border border-[#F0D5E6] hover:bg-[#F2D7E8]"
                  onClick={() => setMenuOpen(!menuOpen)}
                  aria-label="Toggle mobile menu"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>

            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-white">
          <div className="flex items-center justify-between px-6 py-5 border-b border-[#F0D5E6] bg-[#F5F2F8]">
            <img
              src="/images/SequelIVF Fertility Logo.png"
              alt="Sequeli IVF"
              className="h-11 w-auto object-contain"
            />
            <button
              onClick={() => setMenuOpen(false)}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="p-6 space-y-3 font-bold text-xs uppercase tracking-wider text-[#241132] overflow-y-auto">
            {/* ABOUT US Accordion */}
            <div className="border-b border-gray-100">
              <button
                type="button"
                onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                className="w-full flex items-center justify-between py-3 hover:text-[#603085] font-bold text-xs uppercase tracking-wider text-[#241132]"
              >
                <span>ABOUT</span>
                <svg className={`w-4 h-4 transition-transform duration-200 ${mobileAboutOpen ? 'rotate-180 text-[#603085]' : 'text-gray-400'}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileAboutOpen && (
                <div className="pl-3 pb-3 space-y-1.5 bg-[#F5F2F8]/70 rounded-xl mb-2 p-2">
                  <Link
                    to="/about-us"
                    onClick={() => { setMenuOpen(false); setMobileAboutOpen(false); }}
                    className="block py-2 px-3 rounded-lg text-xs font-semibold text-[#3C2048] hover:bg-white hover:text-[#603085]"
                  >
                    About Us
                  </Link>
                  <Link
                    to="/gallery"
                    onClick={() => { setMenuOpen(false); setMobileAboutOpen(false); }}
                    className="block py-2 px-3 rounded-lg text-xs font-semibold text-[#3C2048] hover:bg-white hover:text-[#603085]"
                  >
                    Gallery
                  </Link>
                </div>
              )}
            </div>

            <div className="border-b border-gray-100">
              <button
                type="button"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between py-3 hover:text-[#603085] font-bold text-xs uppercase tracking-wider text-[#241132]"
              >
                <span>SERVICES</span>
                <svg className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180 text-[#603085]' : 'text-gray-400'}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileServicesOpen && (
                <div className="pl-3 pb-3 space-y-1.5 bg-[#F5F2F8]/70 rounded-xl mb-2 p-2">
                  <Link
                    to="/services"
                    onClick={() => { setMenuOpen(false); setMobileServicesOpen(false); }}
                    className="block py-2 px-3 rounded-lg text-xs font-semibold text-[#603085] hover:bg-white"
                  >
                    All Services
                  </Link>
                  {FERTILITY_SERVICES.map((service) => (
                    <Link
                      key={service.slug}
                      to={`/services/${service.slug}`}
                      onClick={() => { setMenuOpen(false); setMobileServicesOpen(false); }}
                      className="block py-2 px-3 rounded-lg text-xs font-semibold text-[#3C2048] hover:bg-white hover:text-[#603085]"
                    >
                      {service.shortTitle}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link to="/our-team" onClick={() => setMenuOpen(false)} className="block py-3 border-b border-gray-100 hover:text-[#603085]">OUR TEAM</Link>
            <Link to="/#faq" onClick={() => setMenuOpen(false)} className="block py-3 border-b border-gray-100 hover:text-[#603085]">ABOUT INFERTILITY</Link>
            <Link to="/#contact" onClick={() => setMenuOpen(false)} className="block py-3 border-b border-gray-100 hover:text-[#603085]">CONTACT US</Link>
            <button
              onClick={() => { setMenuOpen(false); onBookClick(); }}
              className="w-full mt-4 py-3.5 rounded-lg flex items-center justify-center gap-2 font-bold text-white bg-[#603085] shadow-lg shadow-fuchsia-900/20"
            >
              <span>MAKE AN APPOINTMENT</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7m0 0H9m8 0v8" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  )
}
