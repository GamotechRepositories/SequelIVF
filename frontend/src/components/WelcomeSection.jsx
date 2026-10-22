import React from 'react'
import { Link } from 'react-router-dom'

export default function WelcomeSection({ onBookClick }) {
  return (
    <section id="about" className="bg-gradient-to-b from-[#F5F2F8] via-white via-[38%] to-white py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
          
          {/* Left Column: Family & Doctor Image with Soft Bottom Gradient Fade */}
          <div className="lg:col-span-6 flex justify-center items-center">
            <div className="relative w-full max-w-[480px] sm:max-w-[520px] lg:max-w-[580px] xl:max-w-[620px]">
              <img
                src="/images/image copy 4.png"
                alt="Sequel IVF - Where Hope Begins and Families Grow"
                className="w-full h-auto object-contain transition-transform duration-500 hover:scale-[1.02]"
                style={{
                  maskImage: 'linear-gradient(to bottom, black 86%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 86%, transparent 100%)',
                }}
                loading="lazy"
              />
              {/* Subtle bottom gradient overlay for gentle edge softening */}
              <div className="absolute inset-x-0 bottom-0 h-8 sm:h-12 bg-gradient-to-t from-white via-white/50 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Exact Content from User Reference */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Eyebrow / Kicker */}
            <span className="text-[#603085] font-bold text-xs sm:text-sm tracking-wider uppercase block mb-2 sm:mb-3">
              WELCOME TO SEQUEL IVF
            </span>

            {/* Dual-tone Headline: Web Purple + Gold/Silver Combo */}
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-[40px] xl:text-[44px] leading-[1.2] font-medium tracking-tight mb-5 sm:mb-6">
              <span className="text-[#603085]">Where Hope Begins</span>{' '}
              <span className="text-[#C49F64]">and Families Grow</span>
            </h2>

            {/* Paragraph 1 */}
            <p className="text-[#4B5563] text-sm sm:text-[15px] leading-[1.7] mb-4 text-justify sm:text-left">
              Welcome to <strong>Sequel IVF</strong>, a world-class fertility service where we believe that every fertility journey is unique and deserves a dedicated “next chapter”—a sequel filled with hope, precision care, and success.
            </p>

            {/* Paragraph 2 */}
            <p className="text-[#4B5563] text-sm sm:text-[15px] leading-[1.7] mb-6 sm:mb-8 text-justify sm:text-left">
              At Sequel IVF in Pune, we believe that a challenging diagnosis is never the end of your story. It is simply a page turning to a new chapter—and we are here to help you write it. Combining advanced reproductive science with compassionate, tender care, our expert team walks beside you every step of the way to bring the joy of a new beginning into your family.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5">
              <Link
                to="/about-us"
                className="inline-flex items-center justify-center px-7 py-3 sm:px-8 sm:py-3.5 bg-[#603085] hover:bg-[#4E276D] active:scale-95 text-white font-bold text-xs sm:text-sm tracking-wider uppercase rounded-lg transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md"
              >
                FIND OUT MORE
              </Link>
              <button
                type="button"
                onClick={onBookClick}
                className="inline-flex items-center justify-center px-6 py-3 sm:px-7 sm:py-3.5 bg-white hover:bg-[#F5F2F8] active:scale-95 text-[#241132] border border-[#F0D5E6] font-bold text-xs sm:text-sm tracking-wider uppercase rounded-lg transition-all duration-200 cursor-pointer"
              >
                BOOK APPOINTMENT
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
