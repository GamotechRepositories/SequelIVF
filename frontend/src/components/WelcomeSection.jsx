import React from 'react'

export default function WelcomeSection({ onBookClick }) {
  return (
    <section id="about" className="bg-white py-12 sm:py-16 lg:py-20 relative overflow-hidden">
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
            <span className="text-[#800080] font-bold text-xs sm:text-sm tracking-wider uppercase block mb-2 sm:mb-3">
              WELCOME TO SEQUEL IVF
            </span>

            {/* Dual-tone Headline: Web Purple + Gold/Silver Combo */}
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-[40px] xl:text-[44px] leading-[1.2] font-medium tracking-tight mb-5 sm:mb-6">
              <span className="text-[#A21CAF]">Where Hope Begins</span>{' '}
              <span className="text-[#C49F64]">and Families Grow</span>
            </h2>

            {/* Paragraph 1 */}
            <p className="text-[#4B5563] text-sm sm:text-[15px] leading-[1.7] mb-4 text-justify sm:text-left">
              At <strong>Sequel IVF</strong>, we are dedicated to helping individuals and couples achieve their dream of parenthood through advanced fertility treatments and compassionate care. Our experienced team of fertility specialists, embryologists, and healthcare professionals combines medical expertise with the latest reproductive technologies to provide personalized treatment plans tailored to each patient's unique needs. From fertility evaluations to advanced procedures such as IVF, IUI, ICSI, and fertility preservation, we are committed to delivering exceptional care with transparency, empathy, and excellence.
            </p>

            {/* Paragraph 2 */}
            <p className="text-[#4B5563] text-sm sm:text-[15px] leading-[1.7] mb-6 sm:mb-8 text-justify sm:text-left">
              We believe that every fertility journey is unique, and our patient-centered approach ensures that you receive continuous support at every stage of your treatment. Equipped with state-of-the-art facilities and a commitment to maintaining the highest standards of clinical excellence, Sequel IVF has earned the trust of countless families. Our mission is to provide hope, confidence, and the best possible chance of a successful pregnancy while creating a comfortable and caring environment for every patient who walks through our doors.
            </p>

            {/* CTA Button */}
            <div>
              <button
                type="button"
                onClick={onBookClick}
                className="inline-flex items-center justify-center px-7 py-3 sm:px-8 sm:py-3.5 bg-[#800080] hover:bg-[#680068] active:scale-95 text-white font-bold text-xs sm:text-sm tracking-wider uppercase rounded-lg transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md"
              >
                FIND OUT MORE
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
