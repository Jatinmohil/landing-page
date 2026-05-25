import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight, Play, BadgeCheck } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import SmartImage from './ui/SmartImage'
import { useLanguage } from '../i18n/LanguageContext'
import { TESTIMONIAL_AVATARS, GALLERY } from '../data/assets'

function Stars({ n }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`h-4 w-4 ${i < n ? 'fill-gold-500 text-gold-500' : 'text-forest-900/20'}`} />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const { t } = useLanguage()
  const items = t.testimonials.items
  const [index, setIndex] = useState(0)

  const next = useCallback(() => setIndex((i) => (i + 1) % items.length), [items.length])
  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length)

  useEffect(() => {
    const id = setInterval(next, 5500)
    return () => clearInterval(id)
  }, [next])

  const active = items[index]

  return (
    <section id="stories" className="section relative overflow-hidden bg-cream">
      <div className="pointer-events-none absolute -right-20 top-20 h-72 w-72 rounded-full bg-leaf-500/10 blur-3xl" />
      <div className="container-x relative">
        <div className="flex justify-center">
          <SectionHeading eyebrow={t.testimonials.eyebrow} title={t.testimonials.title} subtitle={t.testimonials.subtitle} />
        </div>

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Video testimonial preview */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="group relative min-h-[320px] overflow-hidden rounded-3xl border-4 border-white shadow-card"
          >
            <SmartImage
              src={GALLERY[2]}
              alt="Farm video testimonial"
              caption="Farm tour"
              className="absolute inset-0 h-full w-full"
              imgClassName="transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-900/80 via-forest-900/20 to-transparent" />
            <button
              aria-label="Play video"
              className="absolute inset-0 flex items-center justify-center"
            >
              <span className="relative flex h-16 w-16 items-center justify-center">
                <span className="absolute h-16 w-16 animate-ping rounded-full bg-white/40" />
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-forest-800 shadow-card transition-transform group-hover:scale-110">
                  <Play className="ml-1 h-7 w-7 fill-current" />
                </span>
              </span>
            </button>
            <div className="absolute bottom-5 left-5 right-5">
              <p className="text-sm font-semibold text-white">{t.testimonials.videoLabel}</p>
              <p className="text-xs text-white/70">Harpreet · 5,000 broilers · Moga</p>
            </div>
          </motion.div>

          {/* WhatsApp-style carousel */}
          <div className="relative flex flex-col">
            <div className="relative min-h-[300px] flex-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -24 }}
                  transition={{ duration: 0.4 }}
                  className="flex h-full flex-col justify-between rounded-3xl border border-forest-700/10 bg-white p-7 shadow-soft"
                >
                  <div>
                    <Quote className="h-9 w-9 text-leaf-500/30" />
                    <p className="mt-3 text-lg leading-relaxed text-forest-900/85">“{active.text}”</p>
                  </div>
                  <div className="mt-6 flex items-center gap-4 border-t border-forest-700/10 pt-5">
                    <SmartImage
                      src={TESTIMONIAL_AVATARS[index]}
                      alt={active.name}
                      className="h-14 w-14 shrink-0 rounded-full ring-2 ring-leaf-500/20"
                    />
                    <div className="flex-1">
                      <p className="flex items-center gap-1.5 font-bold text-forest-900">
                        {active.name}
                        <BadgeCheck className="h-4 w-4 text-leaf-500" />
                      </p>
                      <p className="text-sm text-forest-900/55">{active.location}</p>
                    </div>
                    <Stars n={active.rating} />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <div className="flex gap-2">
                {items.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className={`h-2 rounded-full transition-all ${
                      i === index ? 'w-7 bg-leaf-500' : 'w-2 bg-forest-700/20 hover:bg-forest-700/40'
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  aria-label="Previous"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-forest-700/15 bg-white text-forest-800 transition hover:border-leaf-500 hover:text-leaf-600"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={next}
                  aria-label="Next"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-leaf-500 text-white transition hover:bg-leaf-600"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
