import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import ContactNowNotch from './components/ContactNowNotch.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import BookingModal from './components/BookingModal.jsx'
import HomePage from './pages/HomePage.jsx'

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [selectedScan, setSelectedScan] = useState('')

  const handleOpenBooking = (serviceName = '') => {
    setSelectedScan(serviceName || 'Doctor Consultation & Guidance')
    setIsBookingOpen(true)
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen antialiased bg-white text-[#241132] font-body selection:bg-[#A21CAF] selection:text-white">
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
          onClose={() => setIsBookingOpen(false)}
          defaultService={selectedScan}
        />
      </div>
    </BrowserRouter>
  )
}

export default App
