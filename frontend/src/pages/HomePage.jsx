import React from 'react'
import Hero from '../components/Hero.jsx'
import WelcomeSection from '../components/WelcomeSection.jsx'
import DoctorsSection from '../components/DoctorsSection.jsx'
import FertilityServices from '../components/FertilityServices.jsx'
import WhyChooseUs from '../components/WhyChooseUs.jsx'
import FAQSection from '../components/FAQSection.jsx'
import Contact from '../components/Contact.jsx'
import Footer from '../components/Footer.jsx'

export default function HomePage({ onBookClick }) {
  return (
    <>
      <Hero onBookClick={onBookClick} />
      <WelcomeSection onBookClick={onBookClick} />
      <DoctorsSection />
      <FertilityServices onBookClick={onBookClick} />
      <WhyChooseUs />
      <FAQSection onBookClick={onBookClick} />
      <Contact />
      <Footer onBookClick={onBookClick} />
    </>
  )
}

