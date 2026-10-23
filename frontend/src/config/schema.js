import { SITE_URL } from './seo.js'
import { LOGO_URL } from './brand.js'
import { CONTACT_PHONES, SOCIAL_PROFILES, formatPhone } from './contact.js'

export const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Sequel IVF',
  url: SITE_URL,
  logo: LOGO_URL,
  telephone: formatPhone(CONTACT_PHONES[0]),
  sameAs: SOCIAL_PROFILES,
}

export const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  url: SITE_URL,
  name: 'Sequel IVF',
}

export const CONTACT_PAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  url: `${SITE_URL}/contact`,
  name: 'Contact Sequel IVF Fertility Centre',
}

export const GLOBAL_SCHEMA = [ORGANIZATION_SCHEMA, WEBSITE_SCHEMA]

export function createFAQSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}
