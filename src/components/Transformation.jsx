import { useRef, useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { MoveHorizontal, Sprout, Building2 } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import SmartImage from './ui/SmartImage'
import { useLanguage } from '../i18n/LanguageContext'
import { TRANSFORM } from '../data/assets'

export default function Transformation() {
  const { t } = useLanguage()
  const tr = t.transformation
  const [pos, setPos] = useState(50)
  const ref = useRef(null)
  const dragging = useRef(false)

  const updateFromClientX = useCallback((clientX) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const pct = ((clientX - rect.left) / rect.width) * 100
    setPos(Math.max(2, Math.min(98, pct)))
  }, [])

  const onPointerDown = (e) => {
    dragging.current = true
    updateFromClientX(e.clientX)
  }
  const onPointerMove = (e) => {
    if (dragging.current) updateFromClientX(e.clientX)
  }
  const stop = () => (dragging.current = false)

  return (
    <section className="section relative bg-cream">
      <div className="container-x">
        <div className="flex justify-center">
          <SectionHeading eyebrow={tr.eyebrow} title={tr.title} subtitle={tr.subtitle} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-12 max-w-4xl"
        >
          <div
            ref={ref}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={stop}
            onPointerLeave={stop}
            className="relative aspect-[16/10] w-full select-none overflow-hidden rounded-3xl border-4 border-white shadow-card sm:aspect-[16/9]"
          >
            {/* After (full) */}
            <SmartImage
              src={TRANSFORM.after}
              alt={tr.after}
              caption={tr.after}
              icon={Building2}
              className="absolute inset-0 h-full w-full"
              loading="eager"
            />
            <span className="absolute right-4 top-4 z-10 rounded-full bg-leaf-500 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white shadow-soft">
              {tr.after}
            </span>

            {/* Before (clipped) */}
            <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
              <SmartImage
                src={TRANSFORM.before}
                alt={tr.before}
                caption={tr.before}
                icon={Sprout}
                className="absolute inset-0 h-full w-full"
                loading="eager"
              />
              <div className="absolute inset-0 bg-forest-900/10" />
              <span className="absolute left-4 top-4 rounded-full bg-earth-500 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white shadow-soft">
                {tr.before}
              </span>
            </div>

            {/* Handle */}
            <div className="absolute inset-y-0 z-20 w-0.5 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.1)]" style={{ left: `${pos}%` }}>
              <span className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full bg-white text-forest-800 shadow-card ring-2 ring-leaf-500">
                <MoveHorizontal className="h-5 w-5" />
              </span>
            </div>
          </div>
          <p className="mt-4 text-center text-sm text-forest-900/50">
            <MoveHorizontal className="mr-1 inline h-4 w-4" />
            {tr.subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
