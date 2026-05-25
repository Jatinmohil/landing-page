import { motion } from 'framer-motion'
import { Home, Bird, Award, Smile } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import { useCountUp } from '../hooks/useCountUp'

const ICONS = [Home, Bird, Award, Smile]

function StatCard({ value, suffix, label, Icon, index }) {
  const { ref, display } = useCountUp(value, { duration: 2000 })
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-colors hover:bg-white/10"
    >
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gold-500/10 blur-2xl transition-opacity group-hover:opacity-100" />
      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-500 to-gold-600 text-forest-900 shadow-soft">
        <Icon className="h-6 w-6" strokeWidth={2.2} />
      </span>
      <div ref={ref} className="mt-5 flex items-baseline gap-0.5">
        <span className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">{display}</span>
        <span className="text-2xl font-bold text-gold-400 sm:text-3xl">{suffix}</span>
      </div>
      <p className="mt-1.5 text-sm font-medium text-white/65">{label}</p>
    </motion.div>
  )
}

export default function Stats() {
  const { t } = useLanguage()
  return (
    <section className="relative overflow-hidden bg-forest-700 py-16 md:py-20">
      <div className="pointer-events-none absolute inset-0 bg-grain-radial opacity-60" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      <div className="container-x relative">
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {t.stats.items.map((s, i) => (
            <StatCard key={s.label} {...s} Icon={ICONS[i]} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
