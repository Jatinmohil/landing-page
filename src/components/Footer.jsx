import { Egg, Phone, Mail, MapPin, Heart } from 'lucide-react'
import { Facebook, Instagram, Youtube } from './ui/BrandIcons'
import { useLanguage } from '../i18n/LanguageContext'
import { BRAND } from '../i18n/translations'
import { telLink, mailLink } from '../lib/links'

const SOCIALS = [
  { Icon: Facebook, href: '#', label: 'Facebook' },
  { Icon: Instagram, href: '#', label: 'Instagram' },
  { Icon: Youtube, href: '#', label: 'YouTube' },
]

export default function Footer() {
  const { t } = useLanguage()
  const f = t.footer
  const year = new Date().getFullYear()

  const quick = [
    { href: '#home', label: t.nav.home },
    { href: '#services', label: t.nav.services },
    { href: '#stories', label: t.nav.stories },
    { href: '#faq', label: t.nav.faq },
    { href: '#contact', label: t.nav.contact },
  ]

  return (
    <footer id="about" className="relative overflow-hidden bg-forest-900 pb-16 text-white/70 sm:pb-0">
      <div className="pointer-events-none absolute inset-0 bg-grain-radial opacity-30" />
      <div className="container-x relative">
        <div className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-leaf-500 to-forest-700">
                <Egg className="h-5 w-5 text-cream" strokeWidth={2.2} />
                <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-gold-500 ring-2 ring-forest-900" />
              </span>
              <span className="text-lg font-bold text-white">
                {BRAND.name}
                <span className="text-leaf-400"> {BRAND.suffix}</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">{f.tagline}</p>
            <div className="mt-5 flex gap-2.5">
              {SOCIALS.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition hover:bg-leaf-500 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide text-white">{f.quickLinks}</h4>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm">
              {quick.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="transition hover:text-gold-400">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide text-white">{f.services}</h4>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm">
              {t.services.items.slice(0, 5).map((s) => (
                <li key={s.title}>
                  <a href="#services" className="transition hover:text-gold-400">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide text-white">{f.contact}</h4>
            <ul className="mt-4 flex flex-col gap-3.5 text-sm">
              <li>
                <a href={telLink} className="flex items-start gap-2.5 transition hover:text-gold-400">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-leaf-400" /> {BRAND.phone}
                </a>
              </li>
              <li>
                <a href={mailLink} className="flex items-start gap-2.5 transition hover:text-gold-400">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-leaf-400" /> {BRAND.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-leaf-400" /> {BRAND.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-sm sm:flex-row">
          <p>
            © {year} {BRAND.name} {BRAND.suffix}. {f.rights}
          </p>
          <p className="flex items-center gap-1.5">
            {f.made} <Heart className="h-4 w-4 fill-gold-500 text-gold-500" />
          </p>
        </div>
      </div>
    </footer>
  )
}
