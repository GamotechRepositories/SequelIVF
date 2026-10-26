import { useState, useEffect, useRef } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import ContactNowNotch from './components/ContactNowNotch.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import ScrollShineObserver from './components/ScrollShineObserver.jsx'
import PageLoader from './components/PageLoader.jsx'
import BookingModal from './components/BookingModal.jsx'
import HomePage from './pages/HomePage.jsx'
import AboutUsPage from './pages/AboutUsPage.jsx'
import OurTeamPage from './pages/OurTeamPage.jsx'
import GalleryPage from './pages/GalleryPage.jsx'
import ServicesPage from './pages/ServicesPage.jsx'
import ServiceDetailPage from './pages/ServiceDetailPage.jsx'
import AboutInfertilityPage from './pages/AboutInfertilityPage.jsx'
import FemaleInfertilityPage from './pages/FemaleInfertilityPage.jsx'
import MaleInfertilityPage from './pages/MaleInfertilityPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.jsx'
import ArtCompliancePage from './pages/ArtCompliancePage.jsx'
import PcpndtDisclaimerPage from './pages/PcpndtDisclaimerPage.jsx'

const CONSULT_POPUP_KEY = 'sequel-consult-popup-shown'

function markConsultPopupShown() {
  try {
    sessionStorage.setItem(CONSULT_POPUP_KEY, '1')
  } catch {
    /* ignore private-mode storage errors */
  }
}

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [selectedScan, setSelectedScan] = useState('')
  const scrollPopupArmed = useRef(false)

  const handleOpenBooking = (serviceName = '') => {
    setSelectedScan(serviceName || 'Doctor Consultation & Guidance')
    setIsBookingOpen(true)
    markConsultPopupShown()
  }

  const handleCloseBooking = () => {
    setIsBookingOpen(false)
    markConsultPopupShown()
  }

  useEffect(() => {
    try {
      if (sessionStorage.getItem(CONSULT_POPUP_KEY) === '1') return
    } catch {
      /* continue without persistence */
    }

    const armTimer = window.setTimeout(() => {
      scrollPopupArmed.current = true
    }, 1800)

    const openOnFirstScroll = () => {
      if (!scrollPopupArmed.current) return
      if (document.documentElement.classList.contains('page-loading')) return
      try {
        if (sessionStorage.getItem(CONSULT_POPUP_KEY) === '1') return
      } catch {
        /* ignore */
      }
      markConsultPopupShown()
      setSelectedScan('Initial Fertility Consultation & Assessment')
      setIsBookingOpen(true)
      window.removeEventListener('scroll', openOnFirstScroll)
      window.removeEventListener('wheel', openOnFirstScroll)
      window.removeEventListener('touchmove', openOnFirstScroll)
    }

    window.addEventListener('scroll', openOnFirstScroll, { passive: true })
    window.addEventListener('wheel', openOnFirstScroll, { passive: true })
    window.addEventListener('touchmove', openOnFirstScroll, { passive: true })

    return () => {
      window.clearTimeout(armTimer)
      window.removeEventListener('scroll', openOnFirstScroll)
      window.removeEventListener('wheel', openOnFirstScroll)
      window.removeEventListener('touchmove', openOnFirstScroll)
    }
  }, [])

  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollShineObserver />
      <PageLoader />
      <div className="min-h-screen antialiased bg-white text-[#241132] font-body selection:bg-[#603085] selection:text-white">
        <Header onBookClick={() => handleOpenBooking()} />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  onBookClick={() => handleOpenBooking()}
                />
              }
            />
            <Route
              path="/about-us"
              element={
                <AboutUsPage
                  onBookClick={() => handleOpenBooking()}
                />
              }
            />
            <Route
              path="/about"
              element={
                <AboutUsPage
                  onBookClick={() => handleOpenBooking()}
                />
              }
            />
            <Route
              path="/our-team"
              element={
                <OurTeamPage
                  onBookClick={() => handleOpenBooking()}
                />
              }
            />
            <Route
              path="/team"
              element={
                <OurTeamPage
                  onBookClick={() => handleOpenBooking()}
                />
              }
            />
            <Route
              path="/gallery"
              element={
                <GalleryPage
                  onBookClick={() => handleOpenBooking()}
                />
              }
            />
            <Route
              path="/services"
              element={
                <ServicesPage
                  onBookClick={() => handleOpenBooking()}
                />
              }
            />
            <Route
              path="/services/:slug"
              element={
                <ServiceDetailPage
                  onBookClick={(name) => handleOpenBooking(name)}
                />
              }
            />
            <Route
              path="/about-infertility"
              element={
                <AboutInfertilityPage
                  onBookClick={(name) => handleOpenBooking(name)}
                />
              }
            />
            <Route
              path="/female-infertility"
              element={
                <FemaleInfertilityPage
                  onBookClick={(name) => handleOpenBooking(name)}
                />
              }
            />
            <Route
              path="/male-infertility"
              element={
                <MaleInfertilityPage
                  onBookClick={(name) => handleOpenBooking(name)}
                />
              }
            />
            <Route
              path="/about-infertility/female"
              element={
                <FemaleInfertilityPage
                  onBookClick={(name) => handleOpenBooking(name)}
                />
              }
            />
            <Route
              path="/about-infertility/male"
              element={
                <MaleInfertilityPage
                  onBookClick={(name) => handleOpenBooking(name)}
                />
              }
            />
            <Route
              path="/contact"
              element={
                <ContactPage
                  onBookClick={(name) => handleOpenBooking(name)}
                />
              }
            />
            <Route
              path="/contact-us"
              element={
                <ContactPage
                  onBookClick={(name) => handleOpenBooking(name)}
                />
              }
            />
            <Route
              path="/privacy-policy"
              element={
                <PrivacyPolicyPage
                  onBookClick={(name) => handleOpenBooking(name)}
                />
              }
            />
            <Route
              path="/art-act-compliance"
              element={
                <ArtCompliancePage
                  onBookClick={(name) => handleOpenBooking(name)}
                />
              }
            />
            <Route
              path="/art-compliance"
              element={
                <ArtCompliancePage
                  onBookClick={(name) => handleOpenBooking(name)}
                />
              }
            />
            <Route
              path="/pcpndt-disclaimer"
              element={
                <PcpndtDisclaimerPage
                  onBookClick={(name) => handleOpenBooking(name)}
                />
              }
            />
            <Route
              path="/pcpndt"
              element={
                <PcpndtDisclaimerPage
                  onBookClick={(name) => handleOpenBooking(name)}
                />
              }
            />
            <Route
              path="*"
              element={
                <HomePage
                  onBookClick={() => handleOpenBooking()}
                />
              }
            />
          </Routes>
        </main>
        <ContactNowNotch />
        <BookingModal
          isOpen={isBookingOpen}
          onClose={handleCloseBooking}
          defaultService={selectedScan}
        />
      </div>
    </BrowserRouter>
  )
}

export default App
