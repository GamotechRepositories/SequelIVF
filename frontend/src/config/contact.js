export const CLINIC_NAME = 'Sequel IVF'
export const CLINIC_TAGLINE = 'Taking Generations Ahead'

export const CONTACT_PHONES = ['9665279369', '9665278369']
export const CONTACT_EMAIL = 'info@sequelivf.com'

export const CLINIC_ADDRESS = {
  line1: '103, 104, First Floor, Yash Complex, Survey No. 161/7',
  landmark: 'Near Bhosale Garden, Hadapsar',
  city: 'Pune',
  state: 'Maharashtra',
  pincode: '411028',
  full: '103, 104, First Floor, Yash Complex, Survey No. 161/7, Near Bhosale Garden, Hadapsar, Pune, Maharashtra – 411028',
}

export const OPERATING_HOURS = '10:00 AM – 07:00 PM (Monday – Saturday) | Sunday: Closed'

export const SOCIAL_LINKS = {
  whatsapp: `https://wa.me/91${CONTACT_PHONES[0]}?text=Hello%20Sequel%20IVF%20Pune,%20I%20would%20like%20to%20inquire%20about%20fertility%20treatments`,
  phone: `tel:+91${CONTACT_PHONES[0]}`,
  email: `mailto:${CONTACT_EMAIL}`,
  maps: 'https://maps.google.com/?q=Sequel+IVF+Hadapsar+Pune',
}

export function formatPhone(phone = CONTACT_PHONES[0]) {
  return `+91 ${phone.slice(0, 4)} ${phone.slice(4, 7)} ${phone.slice(7)}`
}
