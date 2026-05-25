import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus, HelpCircle, MessageCircle } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import Button from './ui/Button'
import { useLanguage } from '../i18n/LanguageContext'
import { waLink } from '../lib/links'

function Item({ q, a, isOpen, onToggle }) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border transition-colors ${
        isOpen ? 'border-leaf-500/40 bg-white shadow-soft' : 'border-forest-700/10 bg-white/60'
      }`}
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-base font-semibold text-forest-900">{q}</span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
            isOpen ? 'rotate-45 bg-leaf-500 text-white' : 'bg-leaf-500/10 text-leaf-600'
          }`}
        >
          <Plus className="h-4 w-4" strokeWidth={2.6} />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <p className="px-5 pb-5 text-[15px] leading-relaxed text-forest-900/65">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(0)
  return (
    <section id="faq" className="section relative bg-cream">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeading eyebrow={t.faq.eyebrow} title={t.faq.title} subtitle={t.faq.subtitle} align="left" />
            <div className="mt-8 hidden rounded-3xl bg-gradient-to-br from-leaf-600 to-forest-800 p-6 text-white shadow-card lg:block">
              <HelpCircle className="h-8 w-8 text-gold-400" />
              <p className="mt-3 text-lg font-bold">Still have questions?</p>
              <p className="mt-1 text-sm text-white/70">Talk to a poultry expert directly — it’s free.</p>
              <Button
                as="a"
                href={waLink()}
                target="_blank"
                rel="noopener"
                variant="primary"
                size="md"
                icon={MessageCircle}
                className="mt-5"
              >
                {t.contact.whatsapp}
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {t.faq.items.map((item, i) => (
              <Item key={i} q={item.q} a={item.a} isOpen={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
