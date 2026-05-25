import { BRAND } from '../i18n/translations'

export const waLink = (msg = 'Hi PoultryGrowth India, I want a free poultry farm consultation.') =>
  `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(msg)}`

export const telLink = `tel:${BRAND.phoneHref}`
export const mailLink = `mailto:${BRAND.email}`
export const mapEmbed = `https://www.google.com/maps?q=${encodeURIComponent(BRAND.mapQuery)}&output=embed`
