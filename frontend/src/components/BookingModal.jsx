import React, { useState } from 'react'

export default function BookingModal({ isOpen, onClose, defaultService = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: defaultService || 'Early pregnancy scan',
    date: '',
    timeSlot: 'Morning (10:00 AM - 01:00 PM)',
    notes: '',
  })
  const [submitted, setSubmitted] = useState(false)

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    
    // Auto trigger WhatsApp message if preferred
    const text = `Hello Sequel IVF Clinic Hadapsar Pune, I would like to book an appointment for ${formData.service || 'Fertility Consultation'}. Name: ${formData.name}, Phone: ${formData.phone}, Preferred Date: ${formData.date || 'Earliest available'}, Slot: ${formData.timeSlot}`
    const waUrl = `https://wa.me/919665279369?text=${encodeURIComponent(text)}`
    
    setTimeout(() => {
      window.open(waUrl, '_blank')
    }, 1200)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-xl bg-white rounded-[32px] p-6 sm:p-8 shadow-2xl border border-[#F2D7E8] max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-lg bg-[#F5F2F8] hover:bg-[#F2D7E8] text-[#241132] flex items-center justify-center transition-colors"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>

        {submitted ? (
          <div className="text-center py-10">
            <div className="w-16 h-16 rounded-full bg-[#FAF0F7] border-2 border-[#603085] text-[#603085] flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
              </svg>
            </div>
            <h3 className="font-heading font-extrabold text-2xl text-[#241132] mb-2">
              Appointment Request Received!
            </h3>
            <p className="text-[#644B6F] text-sm max-w-md mx-auto mb-6">
              Thank you, <strong>{formData.name}</strong>. Our clinical coordinator will call you to confirm your slot for <strong>{formData.service}</strong>. Opening WhatsApp to connect with our care team...
            </p>
            <button
              onClick={() => { setSubmitted(false); onClose(); }}
              className="px-6 py-2.5 rounded-lg font-bold text-white bg-[#603085] text-sm"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-[11px] font-bold text-[#603085] uppercase tracking-wider block mb-1">
                Fast & Confidential
              </span>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#241132]">
                Book Your Scan or Consultation
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Select your preferred scan timing. No immediate payment required.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#241132] uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Priya Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-[#603085] focus:ring-2 focus:ring-[#603085]/20 outline-none text-sm bg-gray-50/50"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#241132] uppercase tracking-wider mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-[#603085] focus:ring-2 focus:ring-[#603085]/20 outline-none text-sm bg-gray-50/50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#241132] uppercase tracking-wider mb-1">
                    Select Scan / Treatment *
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-[#603085] focus:ring-2 focus:ring-[#603085]/20 outline-none text-sm bg-gray-50/50"
                  >
                    <option>Early pregnancy (6 - 8 weeks)</option>
                    <option>Private Harmony (NIPT Test)</option>
                    <option>4D Growth (24 - 32 Weeks)</option>
                    <option>4D Anatomy (19 - 22 Weeks)</option>
                    <option>Fertility ultrasound</option>
                    <option>AMH & Ovarian reserve screening</option>
                    <option>Doctor Consultation & Guidance</option>
                    <option>In Vitro Fertilisation (IVF)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#241132] uppercase tracking-wider mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-[#603085] focus:ring-2 focus:ring-[#603085]/20 outline-none text-sm bg-gray-50/50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#241132] uppercase tracking-wider mb-1">
                    Time Slot
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-[#603085] focus:ring-2 focus:ring-[#603085]/20 outline-none text-sm bg-gray-50/50"
                  >
                    <option>Morning (10:00 AM - 01:00 PM)</option>
                    <option>Afternoon (01:00 PM - 04:00 PM)</option>
                    <option>Evening (04:00 PM - 07:30 PM)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#241132] uppercase tracking-wider mb-1">
                  Questions or Notes (Optional)
                </label>
                <textarea
                  rows="2"
                  placeholder="Any previous scan records or specific questions..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-[#603085] focus:ring-2 focus:ring-[#603085]/20 outline-none text-sm bg-gray-50/50"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-lg font-heading font-extrabold text-base text-white bg-[#603085] hover:bg-[#4E276D] shadow-lg shadow-fuchsia-900/20 active:scale-98 transition-all cursor-pointer"
              >
                Confirm Scan Booking →
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-gray-400 text-center">
                <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
                <span>100% Confidential · Instant WhatsApp & SMS confirmation</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
