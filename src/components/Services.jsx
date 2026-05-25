import { motion } from 'framer-motion'
import {
  Building2,
  Ruler,
  Wrench,
  Bird,
  Wheat,
  Syringe,
  ClipboardList,
  Calculator,
  GraduationCap,
  Megaphone,
  ArrowUpRight,
} from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import { useLanguage } from '../i18n/LanguageContext'

const ICONS = [
  Building2,
  Ruler,
  Wrench,
  Bird,
  Wheat,
  Syringe,
  ClipboardList,
  Calculator,
  GraduationCap,
  Megaphone,
]

export default function Services() {
  const { t } = useLanguage()
  return (
    <section id="services" className="section relative bg-cream">
      <div className="container-x">
        <SectionHeading eyebrow={t.services.eyebrow} title={t.services.title} subtitle={t.services.subtitle} />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {t.services.items.map((s, i) => {
            const Icon = ICONS[i % ICONS.length]
            return (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.45, delay: (i % 5) * 0.06 }}
                whileHover={{ y: -6 }}
                className="group relative flex flex-col gap-4 overflow-hidden rounded-3xl border border-forest-700/10 bg-white p-6 shadow-soft transition-shadow hover:shadow-card"
              >
                <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-leaf-500/0 blur-2xl transition-all duration-500 group-hover:bg-leaf-500/15" />
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-leaf-500/10 to-gold-500/10 p-3 text-leaf-600 transition-colors group-hover:from-leaf-500 group-hover:to-forest-700 group-hover:text-white">
                  <Icon className="h-6 w-6" strokeWidth={2} />
                </span>
                <div>
                  <h3 className="flex items-center gap-1 text-base font-bold text-forest-900">
                    {s.title}
                    <ArrowUpRight className="h-4 w-4 -translate-y-0.5 text-leaf-500 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100" />
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-forest-900/60">{s.desc}</p>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
