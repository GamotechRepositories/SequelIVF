import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer.jsx'

const WELCOME_HERO_IMAGE =
  'https://res.cloudinary.com/exmvyjeq/image/upload/v1793001366/bd7e4e8d-7fc4-4003-8403-79574cc0ad8e.png'

const HOSPITAL_IMAGES = [
  {
    src: 'https://res.cloudinary.com/exmvyjeq/image/upload/v1793000768/fe62f108-a0e4-4cfb-b1ab-b82578200844.png',
    alt: 'Sequel IVF hospital facility',
  },
  {
    src: 'https://res.cloudinary.com/exmvyjeq/image/upload/v1793002260/1167cbad-5d96-4c30-8b1d-380c27c89500.png',
    alt: 'Sequel IVF treatment area',
  },
  {
    src: 'https://res.cloudinary.com/exmvyjeq/image/upload/v1793000861/55aa6fea-40dc-4108-b8df-cea6ae40cdb6.png',
    alt: 'Sequel IVF clinic interior',
  },
  {
    src: 'https://res.cloudinary.com/exmvyjeq/image/upload/v1793000893/7e299567-3aa1-4260-9be0-847333e23367.png',
    alt: 'Sequel IVF centre reception',
  },
  {
    src: 'https://res.cloudinary.com/exmvyjeq/image/upload/v1793000919/a4d48ad1-793c-4bc4-8c4d-3997edeed9dd.png',
    alt: 'Sequel IVF hospital premises',
  },
  {
    src: 'https://res.cloudinary.com/exmvyjeq/image/upload/v1793001764/346886fb-c15d-44df-8e92-077e28ac39aa.png',
    alt: 'Sequel IVF clinic space',
  },
  {
    src: 'https://res.cloudinary.com/exmvyjeq/image/upload/v1793002597/532b92d5-fc62-4cee-876c-2944fa748db5.png',
    alt: 'Sequel IVF consultation room',
  },
  {
    src: 'https://res.cloudinary.com/exmvyjeq/image/upload/v1793002628/4f207cd6-f5e2-4edd-82a1-371f5c3cecb2.png',
    alt: 'Sequel IVF patient care area',
  },
  {
    src: 'https://res.cloudinary.com/exmvyjeq/image/upload/v1793002687/a6075bd6-0457-4968-8fbe-310b66e1ff5c.png',
    alt: 'Sequel IVF laboratory area',
  },
  {
    src: 'https://res.cloudinary.com/exmvyjeq/image/upload/v1793002731/7cae4a12-b101-4785-ae62-7112eb6517cd.png',
    alt: 'Sequel IVF clinic corridor',
  },
  {
    src: 'https://res.cloudinary.com/exmvyjeq/image/upload/v1793002762/a7af3f2f-7f08-498b-972c-f5108f8d91fb.png',
    alt: 'Sequel IVF hospital interior',
  },
]

export default function GalleryPage({ onBookClick }) {
  const [activeIndex, setActiveIndex] = useState(null)
  const isLightboxOpen = activeIndex !== null
  const activeImage = isLightboxOpen ? HOSPITAL_IMAGES[activeIndex] : null

  useEffect(() => {
    if (!isLightboxOpen) {
      document.body.style.overflow = 'unset'
      return
    }

    document.body.style.overflow = 'hidden'
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveIndex(null)
      if (e.key === 'ArrowRight') {
        setActiveIndex((i) => (i + 1) % HOSPITAL_IMAGES.length)
      }
      if (e.key === 'ArrowLeft') {
        setActiveIndex((i) => (i - 1 + HOSPITAL_IMAGES.length) % HOSPITAL_IMAGES.length)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isLightboxOpen])

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <section className="relative overflow-hidden py-12 sm:py-16 border-b border-[#F0D5E6]/80 bg-[#F5F2F8]">
        <div className="absolute inset-0 z-0">
          <img
            src={WELCOME_HERO_IMAGE}
            alt=""
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-transparent sm:from-[#F5F2F8]/95 sm:via-[#F5F2F8]/80 sm:to-transparent lg:w-3/5" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-white/30" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl">
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
            <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed mt-4 max-w-xl">
              Explore our fertility clinic, embryology laboratory, and patient care spaces at Sequel IVF, Hadapsar, Pune.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 flex-1">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {HOSPITAL_IMAGES.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setActiveIndex(index)}
                className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-[#F0D5E6]/80 bg-[#F5F2F8] shadow-sm hover:shadow-xl hover:border-[#C49F64]/70 transition-all duration-300 text-left cursor-pointer img-shine-effect"
                aria-label={`View ${image.alt}`}
              >
                <div className="aspect-[16/11] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading={index < 2 ? 'eager' : 'lazy'}
                  />
                </div>
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-10 sm:mt-12">
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
      </section>

      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-hidden bg-black/85 backdrop-blur-md animate-fadeIn"
          onClick={() => setActiveIndex(null)}
        >
          <button
            type="button"
            onClick={() => setActiveIndex(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-[#241132] flex items-center justify-center shadow-md cursor-pointer"
            aria-label="Close gallery image"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              setActiveIndex((i) => (i - 1 + HOSPITAL_IMAGES.length) % HOSPITAL_IMAGES.length)
            }}
            className="absolute left-3 sm:left-6 z-20 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-[#241132] flex items-center justify-center shadow-md cursor-pointer"
            aria-label="Previous image"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              setActiveIndex((i) => (i + 1) % HOSPITAL_IMAGES.length)
            }}
            className="absolute right-3 sm:right-6 z-20 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-[#241132] flex items-center justify-center shadow-md cursor-pointer"
            aria-label="Next image"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <img
            src={activeImage.src}
            alt={activeImage.alt}
            className="max-w-full max-h-[88vh] object-contain rounded-xl sm:rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <Footer onBookClick={onBookClick} />
    </div>
  )
}
