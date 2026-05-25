import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  Download,
  CalendarCheck,
  AlertCircle,
} from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import Button from './ui/Button'
import { useLanguage } from '../i18n/LanguageContext'
import { BRAND } from '../i18n/translations'
import { waLink, telLink, mailLink, mapEmbed } from '../lib/links'
import { sendInquiry } from '../lib/submitForm'

function downloadGuide() {
  const text = `PoultryGrowth India — Poultry Business Starter Guide

1. Choosing your model: Broiler (fast, ~40-day cycles) vs Layer (steady egg income).
2. Land & shed: ~1 sq.ft per broiler; plan ventilation, water and power early.
3. Budget basics: 2,000 birds ~ Rs 6-8 lakh including shed + equipment.
4. Feed & FCR: feed is ~70% of cost — optimizing FCR is where profit is made.
5. Biosecurity & vaccination: a strict schedule prevents costly outbreaks.
6. Selling: line up buyers before your first cycle ends.

Book your free consultation: ${BRAND.phone} | ${BRAND.email}
`
  const blob = new Blob([text], { type: 'text/plain;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'PoultryGrowth-India-Business-Guide.txt'
  document.body.appendChild(a)
  a.click()
  a.remove()
  URL.revokeObjectURL(url)
}

function InfoRow({ icon: Icon, label, value, href }) {
  const content = (
    <div className="flex items-start gap-3.5">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-leaf-500/10 text-leaf-600">
        <Icon className="h-5 w-5" strokeWidth={2.2} />
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-forest-900/45">{label}</p>
        <p className="font-medium text-forest-900">{value}</p>
      </div>
    </div>
  )
  return href ? (
    <a href={href} className="transition hover:opacity-80">
      {content}
    </a>
  ) : (
    content
  )
}

export default function Contact() {
  const { t } = useLanguage()
  const c = t.contact
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({ name: '', email: '', phone: '', location: '', capacity: '', message: '' })

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const onSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSending(true)
    const { success, message } = await sendInquiry(new FormData(e.target))
    setSending(false)
    if (success) {
      setSent(true)
      setForm({ name: '', email: '', phone: '', location: '', capacity: '', message: '' })
    } else {
      setError(message)
    }
  }

  const inputClass =
    'w-full rounded-xl border border-forest-700/15 bg-cream/60 px-4 py-3 text-sm text-forest-900 outline-none transition focus:border-leaf-500 focus:bg-white focus:ring-2 focus:ring-leaf-500/20'

  return (
    <section id="contact" className="section relative bg-gradient-to-b from-cream to-leaf-500/5">
      <div className="container-x">
        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="relative mb-16 overflow-hidden rounded-[2rem] bg-gradient-to-br from-forest-700 via-leaf-600 to-forest-800 px-7 py-12 text-center shadow-card md:px-16 md:py-16"
        >
          <div className="pointer-events-none absolute -left-10 -top-10 h-48 w-48 rounded-full bg-gold-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-12 -right-8 h-56 w-56 rounded-full bg-leaf-400/20 blur-3xl" />
          <h2 className="relative mx-auto max-w-2xl text-balance text-3xl font-extrabold leading-tight text-white md:text-4xl">
            {c.bannerTitle}
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-white/75">{c.bannerSubtitle}</p>
          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button as="a" href="#contact-form" size="lg" icon={CalendarCheck}>
              {c.bannerCta}
            </Button>
            <Button onClick={downloadGuide} variant="outlineLight" size="lg" icon={Download}>
              {c.downloadGuide}
            </Button>
          </div>
        </motion.div>

        <div className="flex justify-center">
          <SectionHeading eyebrow={c.eyebrow} title={c.title} subtitle={c.subtitle} />
        </div>

        <div id="contact-form" className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-forest-700/10 bg-white p-7 shadow-soft md:p-8"
          >
            {sent ? (
              <div className="flex h-full min-h-[420px] flex-col items-center justify-center text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-leaf-500/15 text-leaf-600">
                  <CheckCircle2 className="h-8 w-8" />
                </span>
                <p className="mt-5 max-w-xs text-lg font-semibold text-forest-900">{c.form.success}</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="flex flex-col gap-4">
                {/* Honeypot spam protection (hidden from users) */}
                <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-forest-900/70">{c.form.name}</label>
                    <input required name="name" value={form.name} onChange={update('name')} className={inputClass} placeholder="—" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-forest-900/70">{c.form.email}</label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={update('email')}
                      className={inputClass}
                      placeholder="—"
                    />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-forest-900/70">{c.form.phone}</label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={update('phone')}
                      className={inputClass}
                      placeholder="+91"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-forest-900/70">{c.form.location}</label>
                    <input name="location" value={form.location} onChange={update('location')} className={inputClass} placeholder="—" />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-forest-900/70">{c.form.capacity}</label>
                  <select name="capacity" value={form.capacity} onChange={update('capacity')} className={inputClass}>
                    <option value="">—</option>
                    {c.form.capacityOptions.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-forest-900/70">{c.form.message}</label>
                  <textarea
                    required
                    name="message"
                    value={form.message}
                    onChange={update('message')}
                    rows={4}
                    className={`${inputClass} resize-none`}
                    placeholder="—"
                  />
                </div>
                <Button type="submit" size="lg" icon={Send} iconRight className="mt-1 w-full" disabled={sending}>
                  {sending ? c.form.sending : c.form.submit}
                </Button>
                {error && (
                  <p className="flex items-center gap-2 rounded-xl bg-red-50 px-4 py-2.5 text-sm font-medium text-red-600">
                    <AlertCircle className="h-4 w-4 shrink-0" /> {error}
                  </p>
                )}
              </form>
            )}
          </motion.div>

          {/* Info + map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="rounded-3xl border border-forest-700/10 bg-white p-7 shadow-soft">
              <h3 className="text-lg font-bold text-forest-900">{c.infoTitle}</h3>
              <div className="mt-5 flex flex-col gap-5">
                <InfoRow icon={Phone} label="Call" value={BRAND.phone} href={telLink} />
                <InfoRow icon={Mail} label="Email" value={BRAND.email} href={mailLink} />
                <InfoRow icon={MapPin} label="Office" value={BRAND.address} />
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button as="a" href={waLink()} target="_blank" rel="noopener" variant="whatsapp" icon={MessageCircle}>
                  {c.whatsapp}
                </Button>
                <Button as="a" href={telLink} variant="outline" icon={Phone}>
                  {c.call}
                </Button>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-forest-700/10 shadow-soft">
              <iframe
                title="Office location"
                src={mapEmbed}
                className="h-56 w-full"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
