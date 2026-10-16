import React from 'react'
import Hero from '../components/Hero.jsx'
import TrustAccreditation from '../components/TrustAccreditation.jsx'
import PregnancyScans from '../components/PregnancyScans.jsx'
import SpecialistClinic from '../components/SpecialistClinic.jsx'
import WhyChoose from '../components/WhyChoose.jsx'
import Contact from '../components/Contact.jsx'
import Footer from '../components/Footer.jsx'

export default function HomePage({ onBookClick, onBookScan }) {
  return (
    <>
      <Hero onBookClick={onBookClick} />
      <TrustAccreditation />
      <PregnancyScans onBookScan={onBookScan} />
      <SpecialistClinic onBookScan={onBookScan} />
      <WhyChoose />
      <Contact />
      <Footer />
    </>
  )
}
