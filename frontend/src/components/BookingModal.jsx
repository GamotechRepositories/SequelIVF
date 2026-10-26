import React, { useEffect } from 'react'
import ConsultationForm from './ConsultationForm.jsx'

export default function BookingModal({ isOpen, onClose, defaultService = '' }) {
  // Lock body scroll when modal is open and handle ESC key
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') onClose()
      }
      window.addEventListener('keydown', handleKeyDown)
      return () => {
        document.body.style.overflow = 'unset'
        window.removeEventListener('keydown', handleKeyDown)
      }
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-hidden bg-black/60 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-3xl popup-scroll no-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        <ConsultationForm
          isModal={true}
          onClose={onClose}
          defaultService={defaultService}
        />
      </div>
    </div>
  )
}
