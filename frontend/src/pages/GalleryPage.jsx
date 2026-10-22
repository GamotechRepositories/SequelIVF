import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer.jsx'

export default function GalleryPage({ onBookClick }) {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Hero / Breadcrumb Header */}
      <section className="bg-gradient-to-b from-[#F5F2F8] via-[#F5F2F8]/60 to-white py-12 sm:py-16 border-b border-[#F0D5E6]/60">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          {/* Breadcrumbs */}
          <nav className="inline-flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs font-medium px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white/90 backdrop-blur-md border border-[#F0D5E6] text-[#7C6285] mb-2 sm:mb-4 shadow-xs max-w-full overflow-x-auto whitespace-nowrap">
            <Link to="/" className="hover:text-[#603085] transition-colors shrink-0">Home</Link>
            <span className="text-[#C49F64] shrink-0">/</span>
            <span className="text-[#603085] font-semibold shrink-0">Gallery</span>
          </nav>

          <span className="text-[#603085] font-bold text-xs sm:text-sm tracking-widest uppercase block mb-2">
            WELCOME TO SEQUEL IVF
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight">
            <span className="text-[#603085]">Welcome to</span>{' '}
            <span className="text-[#C49F64]">Our Gallery</span>
          </h1>
          <div className="w-20 h-0.5 bg-gradient-to-r from-[#603085] to-[#C49F64] mt-4" />
        </div>
      </section>

      {/* Main Welcome Section */}
      <section className="py-14 sm:py-20 flex-1">
        <div className="mx-auto max-w-[1000px] px-4 sm:px-6 lg:px-10 text-center">
          <div className="bg-[#F5F2F8]/70 rounded-3xl p-8 sm:p-14 border border-[#F0D5E6] shadow-sm">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-xs border border-[#F0D5E6] text-[#603085] mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-medium text-[#241132] mb-4">
              Welcome to Sequel IVF – Gallery
            </h2>

            <p className="text-[#4B5563] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              Welcome to our gallery! Explore our state-of-the-art fertility clinic, certified cleanroom embryology laboratory, comfortable patient suites, and modern ultrasound diagnostics facilities.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={onBookClick}
                className="px-6 py-3 bg-[#603085] hover:bg-[#4E276D] active:scale-95 text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-md transition-all cursor-pointer"
              >
                Schedule Clinic Visit
              </button>
              <Link
                to="/"
                className="px-6 py-3 bg-white hover:bg-[#F5F2F8] text-[#241132] border border-[#F0D5E6] font-bold text-xs uppercase tracking-wider rounded-lg transition-all"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer onBookClick={onBookClick} />
    </div>
  )
}
