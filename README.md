# PoultryGrowth India — Poultry Farm Consultancy Landing Page

A premium, fully responsive, mobile-first landing page for a poultry farm
consultancy business, built with **React 18 + Vite**, **Tailwind CSS**,
**Framer Motion** and **Lucide React**. Bilingual (English / Punjabi),
glassmorphism aesthetics, animated counters, scroll reveals and a high
conversion focus.

## Getting started

```bash
npm install     # install dependencies
npm run dev     # start dev server at http://localhost:3000
npm run build   # production build into /dist
npm run preview # preview the production build locally
```

## Folder structure

```
landing page/
├── index.html                 # HTML entry, fonts, SEO meta tags
├── tailwind.config.js         # brand palette, fonts, animations
├── postcss.config.js
├── vite.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx               # React entry point
    ├── App.jsx                # Section composition / page order
    ├── index.css              # Tailwind layers + design tokens + utilities
    ├── i18n/
    │   ├── translations.js    # All copy (English + Punjabi) + BRAND info
    │   └── LanguageContext.jsx# Language provider + useLanguage hook
    ├── data/
    │   └── assets.js          # Remote image URLs (Unsplash CDN)
    ├── hooks/
    │   └── useCountUp.js      # In-view animated counter
    ├── lib/
    │   └── links.js           # WhatsApp / tel / mail / map helpers
    └── components/
        ├── ui/                # Button, SectionHeading, SmartImage, BrandIcons
        ├── Navbar.jsx         Hero.jsx        Stats.jsx
        ├── Services.jsx       Process.jsx     Investment.jsx
        ├── Testimonials.jsx   Gallery.jsx     Transformation.jsx
        ├── Reels.jsx          FAQ.jsx         Contact.jsx
        ├── Footer.jsx         FloatingActions.jsx
```

## Sections

Navbar · Hero (floating glass stat cards) · Trust Stats (animated counters) ·
Services · 4-Step Process · Investment & ROI · Testimonials (carousel + video
preview) · Gallery (masonry) · Before/After Transformation · Educational Reels ·
FAQ accordion · Contact (form + map + CTA banner) · Footer — plus a floating
WhatsApp button, sticky mobile CTA, scroll-to-top and Punjabi/English toggle.

## Customizing

- **Text & copy (both languages):** edit `src/i18n/translations.js`.
- **Brand name / phone / email / address:** edit the `BRAND` object in `src/i18n/translations.js`.
- **Colors, fonts, animations:** edit `tailwind.config.js`.
- **Images:** edit `src/data/assets.js` (any failed URL falls back to a themed tile via `SmartImage`).
- **Contact form:** `Contact.jsx` currently simulates submit — wire `onSubmit` to your email service or backend.
- **Sections:** add/remove/reorder in `src/App.jsx`.
