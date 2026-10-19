import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header({ onBookClick }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  return (
    <>
      {/* ── Permanently Sticky Header: Exact Same Design Always On Scroll ── */}
      <header className="sticky top-0 z-50 w-full bg-[#FAF2F7] lg:bg-white">
        {/* Top Permanent Sticky White Space Strip (Desktop only for white notch blend) */}
        <div className="hidden lg:block relative z-30 w-full bg-white lg:h-4" />

        {/* The Exact Same Header Bar: Logo, Notch with S-curves & Button (Never Changes Design on Scroll) */}
        <div className="relative w-full bg-[#FAF2F7] rounded-none lg:rounded-t-[32px] border-b border-[#F0D5E6]/60 lg:border-t lg:border-[#F0D5E6]/80 shadow-[0_8px_20px_-6px_rgba(36,17,50,0.06)]">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
            <div className="relative w-full flex items-center justify-between py-2 sm:py-2.5">

              {/* Left: Official Sequel IVF Logo Badge */}
              <Link to="/" className="flex items-center group select-none shrink-0 py-0.5">
                <div className="bg-white px-3.5 py-1.5 sm:px-4.5 sm:py-2 rounded-lg border border-[#F0D5E6]/80 flex items-center justify-center overflow-hidden shadow-xs transition-all duration-200 group-hover:shadow-md">
                  <img
                    src="/images/Firefly.png"
                    alt="Sequeli IVF – Advanced Fertility Treatment & IVF Centre"
                    className="h-8 sm:h-9.5 w-auto object-contain transition-transform duration-200 group-hover:scale-102"
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
                      <path d="M 0,0 C 15.464,0 28,12.536 28,28 L 0,28 Z" fill="#FAF2F7" />
                      <path d="M 0,0 C 15.464,0 28,12.536 28,28" stroke="#F0D5E6" strokeWidth="1" fill="none" />
                    </svg>
                  </div>

                  {/* Navigation Links inside Notch */}
                  <nav className="flex items-center gap-2.5 xl:gap-4 text-[12px] xl:text-[13px] font-bold uppercase tracking-wider text-[#241132] whitespace-nowrap">
                    <a href="#about" className="hover:text-[#A21CAF] transition-colors whitespace-nowrap">
                      ABOUT US
                    </a>

                    <span className="w-1.5 h-1.5 rounded-full bg-[#A21CAF] shrink-0" />

                    {/* SERVICES */}
                    <div
                      className="relative group cursor-pointer"
                      onMouseEnter={() => setActiveDropdown('services')}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <a href="#treatments" className="hover:text-[#A21CAF] transition-colors flex items-center gap-1 whitespace-nowrap">
                        <span>SERVICES</span>
                        <svg className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </a>
                      {activeDropdown === 'services' && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-64 z-50">
                          <div className="bg-white rounded-2xl p-3 shadow-xl border border-[#F2D7E8] space-y-1">
                            <a href="#treatments" className="block px-3 py-2 rounded-xl text-xs font-semibold text-[#3C2048] hover:bg-[#FAF2F7] hover:text-[#A21CAF]">IVF & ICSI Treatment</a>
                            <a href="#scans" className="block px-3 py-2 rounded-xl text-xs font-semibold text-[#3C2048] hover:bg-[#FAF2F7] hover:text-[#A21CAF]">HD 4D Pregnancy Scans</a>
                            <a href="#specialist" className="block px-3 py-2 rounded-xl text-xs font-semibold text-[#3C2048] hover:bg-[#FAF2F7] hover:text-[#A21CAF]">Advanced Embryology & Hatching</a>
                            <a href="#treatments" className="block px-3 py-2 rounded-xl text-xs font-semibold text-[#3C2048] hover:bg-[#FAF2F7] hover:text-[#A21CAF]">Fertility Health Checkups</a>
                          </div>
                        </div>
                      )}
                    </div>

                    <span className="w-1.5 h-1.5 rounded-full bg-[#A21CAF] shrink-0" />

                    <a href="#specialist" className="hover:text-[#A21CAF] transition-colors whitespace-nowrap">
                      OUR DOCTORS
                    </a>

                    <span className="w-1.5 h-1.5 rounded-full bg-[#A21CAF] shrink-0" />

                    {/* ABOUT INFERTILITY */}
                    <div
                      className="relative group cursor-pointer"
                      onMouseEnter={() => setActiveDropdown('infertility')}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <a href="#faq" className="hover:text-[#A21CAF] transition-colors flex items-center gap-1 whitespace-nowrap">
                        <span>ABOUT INFERTILITY</span>
                        <svg className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </a>
                      {activeDropdown === 'infertility' && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-64 z-50">
                          <div className="bg-white rounded-2xl p-3 shadow-xl border border-[#F2D7E8] space-y-1">
                            <a href="#faq" className="block px-3 py-2 rounded-xl text-xs font-semibold text-[#3C2048] hover:bg-[#FAF2F7] hover:text-[#A21CAF]">Understanding Infertility (FAQs)</a>
                            <a href="#specialist" className="block px-3 py-2 rounded-xl text-xs font-semibold text-[#3C2048] hover:bg-[#FAF2F7] hover:text-[#A21CAF]">Male & Female Fertility Causes</a>
                            <a href="#faq" className="block px-3 py-2 rounded-xl text-xs font-semibold text-[#3C2048] hover:bg-[#FAF2F7] hover:text-[#A21CAF]">Common Questions Answered</a>
                            <a href="#contact" className="block px-3 py-2 rounded-xl text-xs font-semibold text-[#3C2048] hover:bg-[#FAF2F7] hover:text-[#A21CAF]">Second Opinion Consultation</a>
                          </div>
                        </div>
                      )}
                    </div>

                    <span className="w-1.5 h-1.5 rounded-full bg-[#A21CAF] shrink-0" />

                    <a href="#contact" className="hover:text-[#A21CAF] transition-colors whitespace-nowrap">
                      CONTACT US
                    </a>
                  </nav>

                  {/* Right S-Curve Fillet: Curves White Notch back into Pink Card (Always 100% visible) */}
                  <div className="absolute -right-7 top-0 w-7 h-7 overflow-hidden pointer-events-none">
                    <svg className="w-7 h-7" viewBox="0 0 28 28">
                      <rect width="28" height="28" fill="white" />
                      <path d="M 28,0 C 12.536,0 0,12.536 0,28 L 28,28 Z" fill="#FAF2F7" />
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
                  className="group inline-flex items-center gap-1.5 px-3.5 sm:px-4.5 py-2 sm:py-2.5 rounded-lg text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white bg-[#A21CAF] hover:bg-[#86198F] active:scale-95 shadow-md shadow-fuchsia-900/15 transition-all duration-200 cursor-pointer"
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
                  className="px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-[#A21CAF] shadow-xs active:scale-95"
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
          <div className="flex items-center justify-between px-6 py-5 border-b border-[#F0D5E6] bg-[#FAF2F7]">
            <img
              src="/images/Firefly.png"
              alt="Sequeli IVF"
              className="h-9 w-auto object-contain"
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
          <div className="p-6 space-y-4 font-bold text-xs uppercase tracking-wider text-[#241132]">
            <a href="#about" onClick={() => setMenuOpen(false)} className="block py-3 border-b border-gray-100 hover:text-[#A21CAF]">ABOUT US</a>
            <a href="#treatments" onClick={() => setMenuOpen(false)} className="block py-3 border-b border-gray-100 hover:text-[#A21CAF]">SERVICES</a>
            <a href="#specialist" onClick={() => setMenuOpen(false)} className="block py-3 border-b border-gray-100 hover:text-[#A21CAF]">OUR DOCTORS</a>
            <a href="#faq" onClick={() => setMenuOpen(false)} className="block py-3 border-b border-gray-100 hover:text-[#A21CAF]">ABOUT INFERTILITY</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="block py-3 border-b border-gray-100 hover:text-[#A21CAF]">CONTACT US</a>
            <button
              onClick={() => { setMenuOpen(false); onBookClick(); }}
              className="w-full mt-4 py-3.5 rounded-lg flex items-center justify-center gap-2 font-bold text-white bg-[#A21CAF] shadow-lg shadow-fuchsia-900/20"
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
