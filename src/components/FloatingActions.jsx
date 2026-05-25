import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { MessageCircle, ArrowUp, CalendarCheck } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import { waLink } from '../lib/links'

export default function FloatingActions() {
  const { t } = useLanguage()
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Floating WhatsApp + scroll-to-top */}
      <div className="fixed bottom-[72px] right-4 z-40 flex flex-col items-end gap-2.5 sm:bottom-6 sm:right-6 sm:gap-3">
        <AnimatePresence>
          {showTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Scroll to top"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-forest-700 text-white shadow-card transition hover:bg-forest-800 sm:h-11 sm:w-11"
            >
              <ArrowUp className="h-4 w-4 sm:h-5 sm:w-5" />
            </motion.button>
          )}
        </AnimatePresence>

        <motion.a
          href={waLink()}
          target="_blank"
          rel="noopener"
          aria-label="Chat on WhatsApp"
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-card sm:h-14 sm:w-14"
        >
          <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/40" />
          <MessageCircle className="relative h-6 w-6 sm:h-7 sm:w-7" />
        </motion.a>
      </div>

      {/* Sticky mobile CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-forest-700/10 bg-white/90 px-3 py-2 backdrop-blur-xl sm:hidden">
        <div className="flex gap-2">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener"
            className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-[#25D366] py-2.5 text-[13px] font-semibold text-white active:scale-[0.98]"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
          <a
            href="#contact"
            className="flex flex-[1.3] items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 py-2.5 text-[13px] font-bold text-forest-900 active:scale-[0.98]"
          >
            <CalendarCheck className="h-4 w-4" /> {t.stickyCta}
          </a>
        </div>
      </div>
    </>
  )
}
