import { motion } from 'framer-motion'
import { Camera, ZoomIn } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import SmartImage from './ui/SmartImage'
import { useLanguage } from '../i18n/LanguageContext'
import { GALLERY } from '../data/assets'

// Masonry spans for a varied, premium grid
const SPANS = [
  'sm:row-span-2',
  '',
  '',
  'sm:col-span-2',
  '',
  'sm:row-span-2',
  '',
  '',
]

export default function Gallery() {
  const { t } = useLanguage()
  const captions = t.gallery.captions
  return (
    <section className="section relative bg-forest-900">
      <div className="pointer-events-none absolute inset-0 bg-grain-radial opacity-30" />
      <div className="container-x relative">
        <div className="flex justify-center">
          <SectionHeading eyebrow={t.gallery.eyebrow} title={t.gallery.title} subtitle={t.gallery.subtitle} dark />
        </div>

        <div className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {GALLERY.map((src, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.07 }}
              className={`group relative overflow-hidden rounded-2xl ring-1 ring-white/10 ${SPANS[i] || ''}`}
            >
              <SmartImage
                src={src}
                alt={captions[i]}
                caption={captions[i]}
                icon={Camera}
                className="h-full w-full"
                imgClassName="h-full w-full transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-900/85 via-forest-900/10 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90" />
              <figcaption className="absolute inset-x-0 bottom-0 flex translate-y-2 items-center gap-2 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <ZoomIn className="h-4 w-4 text-gold-400" />
                <span className="text-sm font-semibold text-white">{captions[i]}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
