import React, { useState, useEffect } from 'react'

export default function ConsultationForm({
  defaultService = '',
  isModal = false,
  onClose,
}) {
  const [consultationMode, setConsultationMode] = useState('in-clinic') // 'in-clinic' | 'online'
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: defaultService || 'Initial Fertility Consultation & Assessment',
    preferredDate: '',
    preferredTime: 'Morning (10:00 AM – 01:00 PM)',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    if (defaultService) {
      setForm((prev) => ({ ...prev, service: defaultService }))
    }
  }, [defaultService])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setErrorMessage('')

    const accessKey =
      import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ||
      'c297e01a-bd84-49a2-a932-f4fab76a1e7a'

    try {
      const payload = {
        access_key: accessKey,
        subject: `New Consultation Request: ${form.name} (${form.service})`,
        from_name: 'Sequeli IVF Website',
        name: form.name,
        email: form.email || 'patient@sequelivf.com',
        phone: form.phone,
        service: form.service,
        consultation_mode:
          consultationMode === 'in-clinic'
            ? 'In-Clinic (Hadapsar Centre, Pune)'
            : 'Online Video Consultation',
        preferred_date: form.preferredDate || 'Earliest available date',
        preferred_time_slot: form.preferredTime,
        message: form.message || 'No additional notes provided',
      }

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      })

      const data = await response.json()

      if (data.success) {
        setSubmitted(true)
      } else {
        setErrorMessage(
          data.message || 'Submission was not completed. Please try again or reach us on WhatsApp.'
        )
      }
    } catch (err) {
      console.error('Web3Forms submission error:', err)
      setErrorMessage(
        'Unable to connect to the email service. Please check your internet connection or reach us directly on WhatsApp/Phone.'
      )
    } finally {
      setSubmitting(false)
    }
  }

  const handleResetForm = () => {
    setForm({
      name: '',
      phone: '',
      email: '',
      service: defaultService || 'Initial Fertility Consultation & Assessment',
      preferredDate: '',
      preferredTime: 'Morning (10:00 AM – 01:00 PM)',
      message: '',
    })
    setSubmitted(false)
  }

  return (
    <div
      className={`w-full bg-[#FAF8FC] rounded-3xl border border-[#F0D5E6] shadow-sm relative popup-scroll no-scrollbar ${
        isModal ? 'p-5 sm:p-7' : 'p-6 sm:p-8 lg:p-9'
      }`}
    >
      {/* Close button if inside modal */}
      {isModal && onClose && (
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white hover:bg-[#F2D7E8] text-[#241132] flex items-center justify-center transition-colors shadow-xs z-10 cursor-pointer"
          aria-label="Close modal"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}

      {submitted ? (
        <div className="text-center py-6 sm:py-8">
          <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-gradient-to-tr from-[#603085] to-[#B81D76] text-white shadow-lg shadow-[#603085]/30">
            <svg viewBox="0 0 24 24" className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <span className="text-[#603085] font-bold text-xs tracking-wider uppercase block mb-1">
            CONSULTATION REQUEST RECEIVED
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#241132] mb-3">
            Thank You, {form.name || 'Valued Patient'}!
          </h3>
          <p className="text-[#555555] text-xs sm:text-sm max-w-lg mx-auto leading-relaxed mb-6">
            We have received your appointment request for <strong>{form.service}</strong>. Our dedicated patient care coordinator will call you at <strong>{form.phone}</strong> within 24 hours to confirm your consultation schedule with Dr. Leena Patankar.
          </p>

          <div className="p-4 bg-white rounded-2xl border border-[#F0D5E6] max-w-md mx-auto mb-6 text-left space-y-2 text-xs text-[#4B5563]">
            <div className="flex justify-between">
              <span className="font-semibold text-[#888888]">Mode:</span>
              <span className="font-bold text-[#603085] uppercase">
                {consultationMode === 'in-clinic' ? 'In-Clinic (Hadapsar)' : 'Online Video'}
              </span>
            </div>
            {form.preferredDate && (
              <div className="flex justify-between">
                <span className="font-semibold text-[#888888]">Preferred Date:</span>
                <span className="font-bold text-[#241132]">{form.preferredDate}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span className="font-semibold text-[#888888]">Preferred Time:</span>
              <span className="font-bold text-[#241132]">{form.preferredTime}</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`https://wa.me/919665279369?text=Hello%20Sequel%20IVF,%20I%20have%20submitted%20a%20consultation%20request%20for%20${encodeURIComponent(
                form.name || 'Patient'
              )}.%20Please%20confirm%20my%20slot.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#1EBE5D] transition-colors shadow-sm"
            >
              <span>Fast-Track on WhatsApp</span>
            </a>
            {isModal && onClose ? (
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false)
                  onClose()
                }}
                className="px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#603085] hover:bg-[#4E276D] transition-colors cursor-pointer"
              >
                Close Window
              </button>
            ) : (
              <button
                type="button"
                onClick={handleResetForm}
                className="px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-[#603085] bg-white border border-[#F0D5E6] hover:bg-[#F5F2F8] transition-colors cursor-pointer"
              >
                Submit Another Inquiry
              </button>
            )}
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
          {/* Honeypot spam protection */}
          <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />

          {/* Error notification banner */}
          {errorMessage && (
            <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-start gap-2">
              <svg className="w-4 h-4 text-red-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{errorMessage}</span>
            </div>
          )}

          <div>
            <span className="text-[#603085] font-bold text-[11px] tracking-wider uppercase block mb-0.5">
              CONFIDENTIAL INQUIRY
            </span>
            <h3 className="font-serif text-2xl font-medium text-[#241132]">
              Book Your Consultation
            </h3>
            <p className="text-xs text-[#666666] mt-0.5">
              Choose your consultation type and timing. Our coordinator will contact you promptly.
            </p>
          </div>

          {/* Mode Selector Tabs: In-Clinic vs Online */}
          <div className="pt-0.5">
            <div className="grid grid-cols-2 gap-2 p-1 bg-white rounded-xl border border-[#F0D5E6]">
              <button
                type="button"
                onClick={() => setConsultationMode('in-clinic')}
                className={`py-2 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  consultationMode === 'in-clinic'
                    ? 'bg-[#603085] text-white shadow-xs'
                    : 'text-[#555555] hover:text-[#603085]'
                }`}
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span>In-Clinic (Hadapsar)</span>
              </button>

              <button
                type="button"
                onClick={() => setConsultationMode('online')}
                className={`py-2 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  consultationMode === 'online'
                    ? 'bg-[#603085] text-white shadow-xs'
                    : 'text-[#555555] hover:text-[#603085]'
                }`}
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span>Online Video Call</span>
              </button>
            </div>
          </div>

          {/* Row: Name and Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-[#3C2048] mb-1">
                Full Name <span className="text-[#C49F64]">*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="e.g. Priya Sharma"
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#F0D5E6] text-[#241132] text-sm placeholder-gray-400 focus:outline-none focus:border-[#603085] focus:ring-2 focus:ring-[#603085]/15 transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#3C2048] mb-1">
                Phone Number <span className="text-[#C49F64]">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={form.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#F0D5E6] text-[#241132] text-sm placeholder-gray-400 focus:outline-none focus:border-[#603085] focus:ring-2 focus:ring-[#603085]/15 transition-all"
              />
            </div>
          </div>

          {/* Row: Email and Treatment */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-[#3C2048] mb-1">
                Email Address <span className="text-gray-400 font-normal">(Optional)</span>
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="priya.sharma@example.com"
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#F0D5E6] text-[#241132] text-sm placeholder-gray-400 focus:outline-none focus:border-[#603085] focus:ring-2 focus:ring-[#603085]/15 transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#3C2048] mb-1">
                Service of Interest
              </label>
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#F0D5E6] text-[#241132] text-sm focus:outline-none focus:border-[#603085] focus:ring-2 focus:ring-[#603085]/15 transition-all cursor-pointer"
              >
                <option value="Initial Fertility Consultation & Assessment">Initial Fertility Consultation</option>
                <option value="IVF (In Vitro Fertilization)">IVF Treatment</option>
                <option value="ICSI (Intracytoplasmic Sperm Injection)">ICSI Treatment</option>
                <option value="IUI (Intrauterine Insemination)">IUI Treatment</option>
                <option value="Male Infertility & Andrology Care">Male Infertility Evaluation</option>
                <option value="Recurrent IVF Failure / Second Opinion">Recurrent IVF Failure (2nd Opinion)</option>
                <option value="Egg Freezing & Fertility Preservation">Egg Freezing</option>
                <option value="Laparoscopy & Hysteroscopy Surgery">Fertility Laparoscopy</option>
                <option value="Doctor Consultation & Guidance">Doctor Consultation & Guidance</option>
                <option value="General Fertility Inquiry">Other Inquiry</option>
              </select>
            </div>
          </div>

          {/* Row: Date and Time Slot */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-[#3C2048] mb-1">
                Preferred Date <span className="text-gray-400 font-normal">(Optional)</span>
              </label>
              <input
                type="date"
                name="preferredDate"
                value={form.preferredDate}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#F0D5E6] text-[#241132] text-sm focus:outline-none focus:border-[#603085] focus:ring-2 focus:ring-[#603085]/15 transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#3C2048] mb-1">
                Preferred Time Slot
              </label>
              <select
                name="preferredTime"
                value={form.preferredTime}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#F0D5E6] text-[#241132] text-sm focus:outline-none focus:border-[#603085] focus:ring-2 focus:ring-[#603085]/15 transition-all cursor-pointer"
              >
                <option value="Morning (10:00 AM – 01:00 PM)">Morning (10:00 AM – 01:00 PM)</option>
                <option value="Afternoon (01:00 PM – 04:00 PM)">Afternoon (01:00 PM – 04:00 PM)</option>
                <option value="Evening (04:00 PM – 07:00 PM)">Evening (04:00 PM – 07:00 PM)</option>
              </select>
            </div>
          </div>

          {/* Message / Prior History */}
          <div>
            <label className="block text-xs font-bold text-[#3C2048] mb-1">
              Specific Questions or Past Treatment Summary <span className="text-gray-400 font-normal">(Optional)</span>
            </label>
            <textarea
              name="message"
              rows={isModal ? 2 : 3}
              value={form.message}
              onChange={handleChange}
              placeholder="Briefly mention any previous treatments or questions you'd like the doctor to review..."
              className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#F0D5E6] text-[#241132] text-sm placeholder-gray-400 focus:outline-none focus:border-[#603085] focus:ring-2 focus:ring-[#603085]/15 transition-all resize-none popup-scroll no-scrollbar"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={submitting}
            className="w-full py-3 px-6 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-[#603085] hover:bg-[#4E276D] active:scale-[0.99] shadow-md shadow-[#603085]/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
          >
            {submitting ? (
              <>
                <svg className="animate-spin w-4 h-4 text-white" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                </svg>
                <span>Submitting...</span>
              </>
            ) : (
              <>
                <span>Request Consultation Schedule</span>
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </>
            )}
          </button>

          <p className="text-[11px] text-[#777777] text-center">
            🔒 Your medical details are strictly confidential under clinical privacy standards.
          </p>
        </form>
      )}
    </div>
  )
}
