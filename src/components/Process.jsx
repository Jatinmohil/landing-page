import { motion } from 'framer-motion'
import { PhoneCall, ClipboardCheck, Hammer, LifeBuoy } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import { useLanguage } from '../i18n/LanguageContext'

const ICONS = [PhoneCall, ClipboardCheck, Hammer, LifeBuoy]

export default function Process() {
  const { t } = useLanguage()
  return (
    <section className="section relative overflow-hidden bg-forest-800">
      <div className="pointer-events-none absolute inset-0 bg-grain-radial opacity-40" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-leaf-500/15 blur-3xl" />

      <div className="container-x relative">
        <div className="flex justify-center">
          <SectionHeading eyebrow={t.process.eyebrow} title={t.process.title} subtitle={t.process.subtitle} dark />
        </div>

        <div className="relative mt-16">
          {/* connecting line (desktop) */}
          <div className="absolute left-0 right-0 top-9 hidden h-0.5 bg-gradient-to-r from-transparent via-leaf-400/50 to-transparent lg:block" />

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {t.process.steps.map((step, i) => {
              const Icon = ICONS[i]
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="group relative flex flex-col items-center text-center"
                >
                  <div className="relative z-10 mb-5">
                    <span className="flex h-[72px] w-[72px] items-center justify-center rounded-2xl bg-gradient-to-br from-leaf-500 to-forest-700 text-white shadow-glow ring-4 ring-forest-800 transition-transform duration-300 group-hover:-translate-y-1.5 group-hover:rotate-3">
                      <Icon className="h-8 w-8" strokeWidth={2} />
                    </span>
                    <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-gold-500 text-xs font-extrabold text-forest-900 ring-2 ring-forest-800">
                      {i + 1}
                    </span>
                  </div>
                  <div className="glass-dark w-full rounded-2xl p-5 transition-colors duration-300 group-hover:bg-white/10">
                    <h3 className="text-lg font-bold text-white">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/65">{step.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
