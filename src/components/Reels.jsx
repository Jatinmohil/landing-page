import { motion } from 'framer-motion'
import { Play, Eye } from 'lucide-react'
import { Youtube } from './ui/BrandIcons'
import SectionHeading from './ui/SectionHeading'
import SmartImage from './ui/SmartImage'
import Button from './ui/Button'
import { useLanguage } from '../i18n/LanguageContext'
import { REELS } from '../data/assets'

export default function Reels() {
  const { t } = useLanguage()
  const items = t.reels.items
  return (
    <section className="section relative bg-gradient-to-b from-leaf-500/5 to-cream">
      <div className="container-x">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
          <SectionHeading eyebrow={t.reels.eyebrow} title={t.reels.title} subtitle={t.reels.subtitle} align="left" />
          <Button as="a" href="#contact" variant="solid" size="md" icon={Youtube} className="shrink-0">
            Subscribe
          </Button>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((reel, i) => (
            <motion.div
              key={reel.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group cursor-pointer overflow-hidden rounded-3xl border border-forest-700/10 bg-white shadow-soft transition-shadow hover:shadow-card"
            >
              <div className="relative aspect-[9/11] overflow-hidden">
                <SmartImage
                  src={REELS[i]}
                  alt={reel.title}
                  caption={reel.title}
                  className="absolute inset-0 h-full w-full"
                  imgClassName="transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/85 via-forest-900/10 to-transparent" />
                <span className="absolute right-3 top-3 rounded-md bg-black/55 px-2 py-0.5 text-xs font-semibold text-white backdrop-blur">
                  {reel.len}
                </span>
                <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-forest-800 shadow-card transition-transform duration-300 group-hover:scale-110">
                  <Play className="ml-0.5 h-6 w-6 fill-current" />
                </span>
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <h3 className="text-sm font-bold leading-snug text-white">{reel.title}</h3>
                  <p className="mt-1 flex items-center gap-1 text-xs text-white/75">
                    <Eye className="h-3.5 w-3.5" /> {reel.views}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
