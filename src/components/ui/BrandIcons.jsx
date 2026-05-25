// Inline brand SVGs (lucide removed brand logos in recent versions).
// API mirrors lucide: accepts className, sizing via h-/w- utilities.

export function Facebook({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
    </svg>
  )
}

export function Instagram({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function Youtube({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M23 7.5a3 3 0 0 0-2.1-2.12C19.05 5 12 5 12 5s-7.05 0-8.9.38A3 3 0 0 0 1 7.5 31.4 31.4 0 0 0 .6 12 31.4 31.4 0 0 0 1 16.5a3 3 0 0 0 2.1 2.12C4.95 19 12 19 12 19s7.05 0 8.9-.38A3 3 0 0 0 23 16.5 31.4 31.4 0 0 0 23.4 12 31.4 31.4 0 0 0 23 7.5ZM9.75 15.02V8.98L15.5 12l-5.75 3.02Z" />
    </svg>
  )
}
