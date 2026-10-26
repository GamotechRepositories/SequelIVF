import { useEffect, useRef, useState } from 'react'
import {
  FLOW_START,
  LOOKING_FOR,
  copy,
  findService,
  getNode,
  isValidName,
  normalizePhone,
} from './careChatCopy.js'

const OPENING = [
  { id: 'namaste', role: 'bot', key: 'namaste' },
  { id: 'help', role: 'bot', key: 'help' },
  { id: 'looking', role: 'bot', key: 'looking' },
]

function labelOf(id, lang) {
  return findService(id)?.[lang] || ''
}

export default function CareChat({ onBookClick, bookingOpen = false }) {
  const [open, setOpen] = useState(false)
  const [lang, setLang] = useState('en')
  const [step, setStep] = useState('service')
  const [messages, setMessages] = useState(OPENING)
  const [profile, setProfile] = useState({ service: '', name: '', phone: '' })
  const [guideId, setGuideId] = useState('')
  const [draft, setDraft] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [leadFailed, setLeadFailed] = useState(false)
  const scrollerRef = useRef(null)
  const inputRef = useRef(null)
  const stepRef = useRef(step)
  const guideRef = useRef('')
  const requestRef = useRef(0)
  stepRef.current = step

  const t = copy(lang)

  useEffect(() => {
    if (!open) return undefined
    const el = scrollerRef.current
    if (el) el.scrollTop = el.scrollHeight
    return undefined
  }, [open, messages, step, submitting, guideId, leadFailed])

  useEffect(() => {
    if (!open || bookingOpen) return undefined
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, bookingOpen])

  useEffect(() => {
    if (!open || (step !== 'name' && step !== 'phone')) return undefined
    inputRef.current?.focus()
    return undefined
  }, [open, step])

  const append = (items) => {
    setMessages((prev) => [
      ...prev,
      ...items.map((item, index) => ({
        ...item,
        id: `${prev.length + index}-${item.key}`,
      })),
    ])
  }

  const resetChat = () => {
    stepRef.current = 'service'
    setStep('service')
    setMessages(OPENING)
    guideRef.current = ''
    requestRef.current += 1
    setGuideId('')
    setProfile({ service: '', name: '', phone: '' })
    setDraft('')
    setSubmitting(false)
    setLeadFailed(false)
  }

  const textFor = (message) => {
    if (message.key === 'namaste') return t.namaste
    if (message.key === 'help') return t.help
    if (message.key === 'looking') return t.looking
    if (message.key === 'service') return labelOf(message.value, lang)
    if (message.key === 'askName') return t.askName
    if (message.key === 'askPhone') return t.askPhone(message.name)
    if (message.key === 'badName') return t.badName
    if (message.key === 'badPhone') return t.badPhone
    if (message.key === 'appointmentNote') return t.appointmentNote
    if (message.key === 'node') return getNode(message.nodeId)?.[lang] || ''
    if (message.key === 'choice') {
      const chosen = getNode(message.nodeId)?.options.find((item) => item.id === message.optionId)
      return chosen?.[lang] || ''
    }
    if (message.key === 'text') return message.text
    return ''
  }

  const chooseService = (serviceId) => {
    if (stepRef.current !== 'service') return
    setProfile((prev) => ({ ...prev, service: serviceId }))

    if (serviceId === 'appointment') {
      stepRef.current = 'appointment'
      append([
        { role: 'user', key: 'service', value: serviceId },
        { role: 'bot', key: 'appointmentNote' },
      ])
      setStep('appointment')
      return
    }

    stepRef.current = 'name'
    append([
      { role: 'user', key: 'service', value: serviceId },
      { role: 'bot', key: 'askName' },
    ])
    setStep('name')
  }

  const submitRequest = async (nextProfile) => {
    if (nextProfile.service === 'appointment') return
    const requestId = requestRef.current + 1
    requestRef.current = requestId
    setSubmitting(true)
    setLeadFailed(false)
    const chosen = findService(nextProfile.service)
    const accessKey =
      import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ||
      'c297e01a-bd84-49a2-a932-f4fab76a1e7a'

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New Consultation Request: ${nextProfile.name} (${chosen?.en || 'Patient Care Chat'})`,
          from_name: 'Sequeli IVF Website',
          name: nextProfile.name,
          email: 'patient@sequelivf.com',
          phone: nextProfile.phone,
          service: chosen?.service || 'General Fertility Inquiry',
          consultation_mode: 'Patient Care Chat',
          preferred_date: 'Earliest available date',
          preferred_time_slot: 'Coordinator will confirm',
          message: [
            'Submitted via Patient Care chat.',
            `Looking for: ${chosen?.en || ''}`,
            `Name: ${nextProfile.name}`,
            `Phone: ${nextProfile.phone}`,
          ].join('\n'),
        }),
      })

      const data = await response.json()
      if (requestRef.current !== requestId) return
      setLeadFailed(!data.success)
    } catch (err) {
      console.error('Patient care chat submission error:', err)
      if (requestRef.current !== requestId) return
      setLeadFailed(true)
    } finally {
      if (requestRef.current === requestId) setSubmitting(false)
    }
  }

  const beginGuide = (serviceId) => {
    const startId = FLOW_START[serviceId]
    const start = getNode(startId)
    if (!start) return
    guideRef.current = startId
    stepRef.current = 'guide'
    setGuideId(startId)
    setStep('guide')
    append([{ role: 'bot', key: 'node', nodeId: startId }])
  }

  const chooseOption = (optionId) => {
    if (stepRef.current !== 'guide') return
    const currentId = guideRef.current
    const node = getNode(currentId)
    const option = node?.options.find((item) => item.id === optionId)
    if (!node || !option || !getNode(option.next)) return
    guideRef.current = option.next
    setGuideId(option.next)
    append([
      { role: 'user', key: 'choice', nodeId: currentId, optionId: option.id },
      { role: 'bot', key: 'node', nodeId: option.next },
    ])
  }

  const sendDraft = (event) => {
    event.preventDefault()
    const value = draft.trim()
    if (!value || submitting) return

    if (stepRef.current === 'name') {
      if (!isValidName(value)) {
        append([
          { role: 'user', key: 'text', text: value },
          { role: 'bot', key: 'badName' },
        ])
        setDraft('')
        return
      }
      const name = value.replace(/\s+/g, ' ')
      stepRef.current = 'phone'
      setProfile((prev) => ({ ...prev, name }))
      append([
        { role: 'user', key: 'text', text: name },
        { role: 'bot', key: 'askPhone', name },
      ])
      setDraft('')
      setStep('phone')
      return
    }

    if (stepRef.current !== 'phone') return
    const phone = normalizePhone(value)
    append([{ role: 'user', key: 'text', text: value }])
    setDraft('')
    if (!phone) {
      append([{ role: 'bot', key: 'badPhone' }])
      return
    }

    const nextProfile = { ...profile, phone }
    setProfile(nextProfile)
    beginGuide(nextProfile.service)
    submitRequest(nextProfile)
  }

  const openConsultationForm = () => {
    if (typeof onBookClick === 'function') onBookClick()
  }

  const guideNode = step === 'guide' ? getNode(guideId) : null
  const showInput = step === 'name' || step === 'phone'

  return (
    <>
      {open && (
        <section
          role="dialog"
          aria-labelledby="care-chat-title"
          className="fixed z-[60] bottom-16 left-3 right-3 flex h-[min(620px,calc(100dvh-7.5rem))] w-auto flex-col overflow-hidden rounded-3xl border border-[#F0D5E6] bg-[#FAF8FC] shadow-[0_18px_50px_rgba(36,17,50,0.22)] sm:left-5 sm:right-auto sm:w-[400px]"
          style={lang === 'mr' ? { fontFamily: "'Noto Sans Devanagari', 'Plus Jakarta Sans', sans-serif" } : undefined}
        >
          <header className="shrink-0 bg-gradient-to-br from-[#2A1137] to-[#603085] px-4 py-3 text-white">
            <div className="flex items-center gap-2">
              <h2
                id="care-chat-title"
                className={`min-w-0 flex-1 ${lang === 'mr' ? 'font-semibold' : 'font-serif'} text-lg leading-tight text-white`}
              >
                {t.title}
              </h2>
              <div className="flex rounded-full bg-white/10 p-0.5 text-[10px] font-bold">
                <button
                  type="button"
                  onClick={() => setLang('en')}
                  className={`rounded-full px-2 py-1 ${lang === 'en' ? 'bg-white text-[#603085]' : 'text-white/80'}`}
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => setLang('mr')}
                  className={`rounded-full px-2 py-1 ${lang === 'mr' ? 'bg-white text-[#603085]' : 'text-white/80'}`}
                >
                  मराठी
                </button>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label={t.close}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </header>

          <div ref={scrollerRef} className="popup-scroll min-h-0 flex-1 space-y-2.5 overflow-y-auto px-3.5 py-3">
            <div className="sr-only" aria-live="polite">
              {messages.length ? textFor(messages[messages.length - 1]) : ''}
            </div>
            {messages.map((message) => {
              const mine = message.role === 'user'
              return (
                <div key={message.id} className={`flex ${mine ? 'justify-end' : 'justify-start'}`}>
                  <p
                    className={`max-w-[88%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-relaxed ${
                      mine
                        ? 'rounded-br-md bg-[#603085] text-white'
                        : 'rounded-bl-md border border-[#F0D5E6] bg-white text-[#241132]'
                    }`}
                  >
                    {textFor(message)}
                  </p>
                </div>
              )
            })}
          </div>

          <div className="shrink-0 border-t border-[#F0D5E6] bg-white px-3.5 py-3">
            {step === 'service' && (
              <div className="grid grid-cols-2 gap-2">
                {LOOKING_FOR.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => chooseService(option.id)}
                    className="rounded-xl border border-[#E4D4EE] bg-[#FAF8FC] px-2.5 py-2.5 text-[12px] font-semibold text-[#3C2048] hover:border-[#603085] hover:bg-[#F5F2F8]"
                  >
                    {option[lang]}
                  </button>
                ))}
              </div>
            )}

            {showInput && (
              <form onSubmit={sendDraft} className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  value={draft}
                  onChange={(event) => setDraft(event.target.value)}
                  placeholder={step === 'name' ? t.namePh : t.phonePh}
                  inputMode={step === 'phone' ? 'tel' : 'text'}
                  autoComplete={step === 'name' ? 'name' : 'tel'}
                  className="min-w-0 flex-1 rounded-xl border border-[#F0D5E6] bg-[#FAF8FC] px-3 py-2.5 text-sm text-[#241132] outline-none focus:border-[#603085] focus:ring-2 focus:ring-[#603085]/15"
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-xl bg-[#603085] px-3.5 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#4E276D]"
                >
                  {t.send}
                </button>
              </form>
            )}

            {step === 'appointment' && (
              <button
                type="button"
                onClick={openConsultationForm}
                className="w-full rounded-xl bg-[#603085] py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#4E276D]"
              >
                {t.appointmentButton}
              </button>
            )}

            {step === 'guide' && guideNode && (
              <div className="flex flex-col gap-2">
                {guideNode.options.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => chooseOption(option.id)}
                    className="rounded-xl border border-[#E4D4EE] bg-[#FAF8FC] px-3 py-2.5 text-left text-[12.5px] font-semibold leading-snug text-[#3C2048] hover:border-[#603085] hover:bg-[#F5F2F8]"
                  >
                    {option[lang]}
                  </button>
                ))}
              </div>
            )}

            {leadFailed && step === 'guide' && (
              <div className="mt-2">
                <p className="mb-2 text-center text-[11px] leading-relaxed text-[#7C6285]">{t.failed}</p>
                <button
                  type="button"
                  onClick={() => {
                    if (submitting || !profile.phone) return
                    submitRequest(profile)
                  }}
                  disabled={submitting}
                  className="w-full rounded-xl border border-[#E4D4EE] py-2.5 text-xs font-bold text-[#603085] hover:bg-[#FAF8FC] disabled:opacity-60"
                >
                  {t.retry}
                </button>
              </div>
            )}

            {step !== 'service' && (
              <button
                type="button"
                onClick={resetChat}
                className="mt-2 w-full text-center text-[11px] font-semibold text-[#7C6285] hover:text-[#603085]"
              >
                {t.newChat}
              </button>
            )}
          </div>
        </section>
      )}

      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label={t.open}
          className="fixed z-[60] bottom-4 right-3 flex items-center gap-2 sm:bottom-6 sm:left-6 sm:right-auto sm:gap-3"
          style={lang === 'mr' ? { fontFamily: "'Noto Sans Devanagari', 'Plus Jakarta Sans', sans-serif" } : undefined}
        >
          <span className="hidden items-center rounded-full border border-[#F0D5E6] bg-white px-4 py-2.5 text-sm font-bold text-[#603085] shadow-lg sm:inline-flex">
            {t.launcher}
          </span>
          <span className="relative h-11 w-11 shrink-0 drop-shadow-[0_10px_18px_rgba(96,48,133,0.38)] sm:h-20 sm:w-20 sm:drop-shadow-[0_14px_24px_rgba(96,48,133,0.4)]">
            <svg viewBox="0 0 56 56" className="h-11 w-11 sm:h-20 sm:w-20" aria-hidden="true">
              <path
                fill="#603085"
                d="M16 4h24a12 12 0 0 1 12 12v16a12 12 0 0 1-12 12H22l-11 8 3-8h-2A12 12 0 0 1 4 32V16A12 12 0 0 1 16 4z"
              />
              <rect x="27.1" y="10.2" width="1.8" height="4.2" rx="0.9" fill="#fff" />
              <circle cx="28" cy="9.3" r="2.15" fill="#C49F64" />
              <circle cx="28" cy="9.3" r="0.8" fill="#fff" />
              <rect x="14.2" y="20" width="2.3" height="5.6" rx="1.15" fill="#fff" />
              <rect x="39.5" y="20" width="2.3" height="5.6" rx="1.15" fill="#fff" />
              <rect x="16.4" y="14.6" width="23.2" height="16.6" rx="5" fill="none" stroke="#fff" strokeWidth="1.8" />
              <circle cx="23.4" cy="21.7" r="1.7" fill="#fff" />
              <circle cx="32.6" cy="21.7" r="1.7" fill="#fff" />
              <path
                d="M23.8 27c1.3 1.55 4.1 1.55 5.4 0"
                fill="none"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </button>
      )}
    </>
  )
}
