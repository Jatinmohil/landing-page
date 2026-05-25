// Sends a contact inquiry to Web3Forms.
// The access key is read from an environment variable (see .env / .env.example)
// rather than being hardcoded in the source.

const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '4bdd4bf8-3cc8-4c37-9883-785224a46e7c'
const ENDPOINT = 'https://api.web3forms.com/submit'

export async function sendInquiry(formData) {

  formData.append('access_key', ACCESS_KEY)
  formData.append('subject', 'New Poultry Consultation Request — PoultryGrowth India')
  formData.append('from_name', 'PoultryGrowth India Website')

  try {
    const response = await fetch(ENDPOINT, { method: 'POST', body: formData })
    const data = await response.json()
    return {
      success: !!data.success,
      message: data.success ? 'Success!' : data.message || 'Something went wrong. Please try again.',
    }
  } catch {
    return {
      success: false,
      message: 'Network error. Please try again or reach us on WhatsApp.',
    }
  }
}
