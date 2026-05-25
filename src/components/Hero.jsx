import { motion } from 'framer-motion'
import {
  CalendarCheck,
  MessageCircle,
  Phone,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Star,
} from 'lucide-react'
import Button from './ui/Button'
import SmartImage from './ui/SmartImage'
import { useLanguage } from '../i18n/LanguageContext'
import { HERO_IMAGE } from '../data/assets'
import { waLink, telLink } from '../lib/links'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

function FloatingCard({ className, icon: Icon, label, value, delay = 0, anim }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className={`absolute z-20 ${className}`}
    >
      <div className={`glass flex items-center gap-3 rounded-2xl p-3.5 shadow-card ${anim}`}>
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-leaf-500 to-forest-700 text-white">
          <Icon className="h-5 w-5" strokeWidth={2.2} />
        </span>
        <div className="pr-1">
          <p className="text-[11px] font-medium uppercase tracking-wide text-forest-900/55">{label}</p>
          <p className="text-lg font-bold leading-tight text-forest-900">{value}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function Hero() {
  const { t } = useLanguage()
  const h = t.hero

  return (
    <section id="home" className="relative overflow-hidden bg-cream pt-28 pb-16 md:pt-36 md:pb-24">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 bg-grain-radial" />
      <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-leaf-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-gold-500/15 blur-3xl" />

      <div className="container-x relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        {/* LEFT */}
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-xl">
          <motion.div variants={item} className="eyebrow">
            <Star className="h-3.5 w-3.5 fill-gold-500 text-gold-500" />
            {h.badge}
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-5 text-balance text-4xl font-extrabold leading-[1.08] tracking-tight text-forest-900 sm:text-5xl md:text-[3.4rem]"
          >
            {h.title.split('Expert Guidance')[0]}
            <span className="gradient-text">
              {h.title.includes('Expert Guidance') ? 'Expert Guidance' : ''}
            </span>
          </motion.h1>

          <motion.p variants={item} className="mt-5 text-balance text-lg leading-relaxed text-forest-900/65">
            {h.subtitle}
          </motion.p>

          <motion.ul variants={item} className="mt-6 flex flex-col gap-2.5">
            {h.benefits.map((b) => (
              <li key={b} className="flex items-center gap-2.5 text-[15px] font-medium text-forest-900/85">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-leaf-500" strokeWidth={2.4} />
                {b}
              </li>
            ))}
          </motion.ul>

          <motion.div variants={item} className="mt-7 flex flex-wrap items-center gap-2.5">
            <Button as="a" href="#contact" size="lg" icon={CalendarCheck}>
              {h.ctaPrimary}
            </Button>
            <Button as="a" href={waLink()} target="_blank" rel="noopener" variant="whatsapp" size="md" icon={MessageCircle}>
              {h.ctaWhatsapp}
            </Button>
            <Button as="a" href={telLink} variant="outline" size="md" icon={Phone}>
              {h.ctaCall}
            </Button>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[0, 1, 2, 3].map((i) => (
                  <span
                    key={i}
                    className="h-8 w-8 rounded-full border-2 border-cream bg-gradient-to-br from-leaf-400 to-forest-700"
                  />
                ))}
              </div>
              <div className="flex items-center gap-0.5">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-gold-500 text-gold-500" />
                ))}
              </div>
            </div>
            <p className="text-sm font-medium text-forest-900/60">{h.trust}</p>
          </motion.div>
        </motion.div>

        {/* RIGHT */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative"
          >
            {/* glow ring */}
            <div className="absolute -inset-3 rounded-[2.2rem] bg-gradient-to-tr from-leaf-500/30 via-transparent to-gold-500/30 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border-4 border-white/70 shadow-card">
              <SmartImage
                src={HERO_IMAGE}
                alt={h.imgCaption}
                caption={h.imgCaption}
                loading="eager"
                className="aspect-[4/5] w-full sm:aspect-[5/5]"
                imgClassName="transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-forest-900/70 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-sm font-semibold text-white drop-shadow">{h.imgCaption}</p>
              </div>
            </div>

            <FloatingCard
              className="-left-4 top-10 sm:-left-10"
              icon={TrendingUp}
              label={h.floatA.label}
              value={h.floatA.value}
              delay={0.5}
              anim="animate-float-slow"
            />
            <FloatingCard
              className="-right-3 top-1/3 sm:-right-8"
              icon={ShieldCheck}
              label={h.floatB.label}
              value={h.floatB.value}
              delay={0.7}
              anim="animate-float-fast"
            />
            <FloatingCard
              className="-bottom-5 left-6 sm:left-2"
              icon={CheckCircle2}
              label={h.floatC.label}
              value={h.floatC.value}
              delay={0.9}
              anim="animate-float-slow"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
