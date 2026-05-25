import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Egg, Languages, CalendarCheck } from 'lucide-react'
import Button from './ui/Button'
import { useLanguage } from '../i18n/LanguageContext'
import { BRAND } from '../i18n/translations'

function Logo() {
  return (
    <a href="#home" className="flex min-w-0 items-center gap-2">
      <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-leaf-500 to-forest-700 shadow-soft sm:h-10 sm:w-10">
        <Egg className="h-4 w-4 text-cream sm:h-5 sm:w-5" strokeWidth={2.2} />
        <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-gold-500 ring-2 ring-white" />
      </span>
      <span className="truncate text-[15px] font-bold leading-none tracking-tight text-forest-900 sm:text-lg">
        {BRAND.name}
        <span className="text-leaf-500"> {BRAND.suffix}</span>
      </span>
    </a>
  )
}

export default function Navbar() {
  const { t, lang, toggle } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => (document.body.style.overflow = '')
  }, [open])

  const links = [
    { href: '#home', label: t.nav.home },
    { href: '#services', label: t.nav.services },
    { href: '#stories', label: t.nav.stories },
    { href: '#faq', label: t.nav.faq },
    { href: '#about', label: t.nav.about },
    { href: '#contact', label: t.nav.contact },
  ]

  const LangToggle = ({ className = '' }) => (
    <button
      onClick={toggle}
      className={`inline-flex shrink-0 items-center gap-1 rounded-full border border-forest-700/15 px-2.5 py-1.5 text-xs font-semibold text-forest-800 transition hover:border-leaf-500 hover:text-leaf-600 ${className}`}
      aria-label="Toggle language"
    >
      <Languages className="h-3.5 w-3.5" />
      {lang === 'en' ? 'ਪੰਜਾਬੀ' : 'EN'}
    </button>
  )

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div
          className={`transition-all duration-300 ${
            scrolled
              ? 'border-b border-white/40 bg-white/70 shadow-soft backdrop-blur-xl'
              : 'bg-transparent'
          }`}
        >
          <nav className="container-x flex h-[72px] items-center justify-between">
            <Logo />

            <ul className="hidden items-center gap-7 lg:flex">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="link-underline text-sm font-medium text-forest-900/80 transition hover:text-forest-900"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="hidden items-center gap-3 lg:flex">
              <LangToggle />
              <Button as="a" href="#contact" size="sm" icon={CalendarCheck}>
                {t.nav.cta}
              </Button>
            </div>

            <div className="flex items-center gap-2 lg:hidden">
              <LangToggle />
              <button
                onClick={() => setOpen(true)}
                aria-label="Open menu"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-forest-700/15 bg-white/70 text-forest-800 backdrop-blur"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[60] bg-forest-900/40 backdrop-blur-sm lg:hidden"
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 34 }}
              className="fixed right-0 top-0 z-[70] flex h-full w-[82%] max-w-sm flex-col bg-cream p-6 shadow-card lg:hidden"
            >
              <div className="flex items-center justify-between">
                <Logo />
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-forest-700/15 text-forest-800"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <ul className="mt-8 flex flex-col gap-1">
                {links.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.05 }}
                  >
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-4 py-3 text-base font-medium text-forest-900 transition hover:bg-leaf-500/10 hover:text-leaf-600"
                    >
                      {l.label}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-auto">
                <Button
                  as="a"
                  href="#contact"
                  onClick={() => setOpen(false)}
                  size="lg"
                  icon={CalendarCheck}
                  className="w-full"
                >
                  {t.nav.cta}
                </Button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
