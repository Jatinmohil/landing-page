import { motion } from 'framer-motion'
import {
  Check,
  Sparkles,
  TrendingUp,
  Zap,
  Landmark,
  Sprout,
  ArrowRight,
} from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import Button from './ui/Button'
import { useLanguage } from '../i18n/LanguageContext'

const WHY_ICONS = [TrendingUp, Zap, Landmark, Sprout]

function PlanCard({ plan, popular, popularLabel, ctaLabel, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className={`relative flex flex-col rounded-3xl p-7 transition-shadow ${
        popular
          ? 'bg-gradient-to-b from-forest-700 to-forest-800 text-white shadow-card ring-2 ring-gold-500'
          : 'border border-forest-700/10 bg-white text-forest-900 shadow-soft hover:shadow-card'
      }`}
    >
      {popular && (
        <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-gold-500 px-4 py-1 text-xs font-bold uppercase tracking-wide text-forest-900 shadow-soft">
          <Sparkles className="h-3.5 w-3.5" /> {popularLabel}
        </span>
      )}
      <h3 className={`text-lg font-bold ${popular ? 'text-white' : 'text-forest-900'}`}>{plan.name}</h3>
      <p className={`mt-1 text-3xl font-extrabold tracking-tight ${popular ? 'text-gold-400' : 'text-leaf-600'}`}>
        {plan.birds}
      </p>

      <ul className="mt-6 flex flex-col gap-3.5">
        {plan.rows.map(([k, v]) => (
          <li key={k} className="flex items-start justify-between gap-3 text-sm">
            <span className={`flex items-center gap-2 ${popular ? 'text-white/70' : 'text-forest-900/60'}`}>
              <Check className={`h-4 w-4 shrink-0 ${popular ? 'text-gold-400' : 'text-leaf-500'}`} strokeWidth={2.6} />
              {k}
            </span>
            <span className={`text-right font-semibold ${popular ? 'text-white' : 'text-forest-900'}`}>{v}</span>
          </li>
        ))}
      </ul>

      <div className="mt-7 pt-2">
        <Button
          as="a"
          href="#contact"
          variant={popular ? 'primary' : 'outline'}
          size="md"
          icon={ArrowRight}
          iconRight
          className="w-full"
        >
          {ctaLabel}
        </Button>
      </div>
    </motion.div>
  )
}

export default function Investment() {
  const { t } = useLanguage()
  const inv = t.investment
  return (
    <section className="section relative bg-gradient-to-b from-cream to-leaf-500/5">
      <div className="container-x">
        <div className="flex justify-center">
          <SectionHeading eyebrow={inv.eyebrow} title={inv.title} subtitle={inv.subtitle} />
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[2fr_1fr]">
          {/* Plans */}
          <div className="grid gap-6 sm:grid-cols-3">
            {inv.plans.map((plan, i) => (
              <PlanCard
                key={plan.name}
                plan={plan}
                popular={i === 1}
                popularLabel={inv.popular}
                ctaLabel={inv.cta}
                index={i}
              />
            ))}
          </div>

          {/* Why Poultry */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-leaf-600 to-forest-800 p-7 text-white shadow-card"
          >
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold-500/20 blur-2xl" />
            <h3 className="text-2xl font-bold">{inv.why.title}</h3>
            <div className="mt-6 flex flex-col gap-5">
              {inv.why.points.map((p, i) => {
                const Icon = WHY_ICONS[i]
                return (
                  <div key={p.title} className="flex gap-3.5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-gold-400 backdrop-blur">
                      <Icon className="h-5 w-5" strokeWidth={2.2} />
                    </span>
                    <div>
                      <p className="font-semibold text-white">{p.title}</p>
                      <p className="mt-0.5 text-sm leading-relaxed text-white/65">{p.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
