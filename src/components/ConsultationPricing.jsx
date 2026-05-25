import { motion } from 'framer-motion'
import { Check, Sparkles, Clock, PhoneCall, ArrowRight } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import Button from './ui/Button'
import { useLanguage } from '../i18n/LanguageContext'
import { waLink } from '../lib/links'

function ConsultationCard({ plan, popular, eyebrowText, ctaText, index }) {
  // Pre-fill a clear message for the WhatsApp link depending on the selected plan
  const whatsappMsg = `Hi KD PoultryGrowth, I would like to book a ${plan.duration} Consultation Call (${plan.price}).`

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
          <Sparkles className="h-3.5 w-3.5" /> Best Seller
        </span>
      )}
      
      <div className="flex items-center justify-between">
        <h3 className={`text-lg font-bold ${popular ? 'text-white' : 'text-forest-900'}`}>{plan.name}</h3>
        <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold ${
          popular ? 'bg-white/15 text-gold-400' : 'bg-leaf-500/10 text-leaf-600'
        }`}>
          <Clock className="h-3 w-3" /> {plan.duration}
        </span>
      </div>

      <p className={`mt-4 text-4xl font-extrabold tracking-tight ${popular ? 'text-gold-400' : 'text-leaf-600'}`}>
        {plan.price}
      </p>
      
      <p className={`mt-3 text-sm leading-relaxed ${popular ? 'text-white/70' : 'text-forest-900/60'}`}>
        {plan.desc}
      </p>

      <div className="my-6 border-t border-forest-700/10 dark:border-white/10" />

      <ul className="flex-1 flex flex-col gap-3">
        {plan.features.map((feat) => (
          <li key={feat} className="flex items-start gap-2.5 text-[13px] leading-tight">
            <Check className={`h-4 w-4 shrink-0 mt-0.5 ${popular ? 'text-gold-400' : 'text-leaf-500'}`} strokeWidth={3} />
            <span className={popular ? 'text-white/90' : 'text-forest-900/80'}>{feat}</span>
          </li>
        ))}
      </ul>

      <div className="mt-7">
        <Button
          as="a"
          href={waLink(whatsappMsg)}
          target="_blank"
          rel="noopener"
          variant={popular ? 'primary' : 'outline'}
          size="md"
          icon={PhoneCall}
          className="w-full"
        >
          {ctaText}
        </Button>
      </div>
    </motion.div>
  )
}

export default function ConsultationPricing() {
  const { t } = useLanguage()
  const cp = t.consultationPricing

  return (
    <section id="pricing" className="section relative bg-cream">
      {/* Subtle decorative glows */}
      <div className="pointer-events-none absolute -left-20 top-1/4 h-72 w-72 rounded-full bg-leaf-500/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-1/4 h-72 w-72 rounded-full bg-gold-500/5 blur-3xl" />

      <div className="container-x relative">
        <div className="flex justify-center">
          <SectionHeading eyebrow={cp.eyebrow} title={cp.title} subtitle={cp.subtitle} />
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3 max-w-5xl mx-auto">
          {cp.plans.map((plan, i) => (
            <ConsultationCard
              key={plan.name}
              plan={plan}
              popular={i === 1} // Highlight the 30 Minutes call as Best Seller
              ctaText={cp.cta}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
