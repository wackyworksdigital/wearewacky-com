# 🎯 wearewacky.com - Build Plan

> **Goal:** Stunning portfolio website that makes people say "wow"

---

## Phase 1: The "Wow" Foundation (Target: This Week)

### Pages to Build

| Page | Purpose | Key Sections |
|------|---------|--------------|
| **Home** | First impression, showcase capabilities | Hero, Services preview, Tech stack, CTA |
| **About** | Your story, build trust | Origin story, Values, Team (if any) |
| **Services** | What you offer in detail | Education, SaaS, Consulting with pricing hints |
| **Portfolio** | Proof you can deliver | Case studies, Screenshots, Results |
| **Contact** | Get in touch | Form, Social links, Location |

### Components Needed

| Component | Why |
|-----------|-----|
| **Navigation** | Sticky header, smooth scroll links, mobile menu |
| **Hero** | ✅ Done - animated headline, CTAs |
| **Services Grid** | ✅ Done - 3 cards with hover effects |
| **Tech Marquee** | ✅ Done - scrolling tech logos |
| **Footer** | ✅ Done - links, social, copyright |
| **Page Transitions** | Smooth fade/slide between pages |
| **Scroll Animations** | Elements animate in on scroll |

---

## Design Principles

### The "Wow" Factors We're Using:

1. **Smooth Scrolling** (Lenis) - Buttery scroll feel
2. **Scroll Animations** (GSAP + Framer Motion) - Elements animate as you scroll
3. **Micro-interactions** - Hover effects, button animations
4. **Gradient Text** - Purple → Cyan gradients
5. **Glass Morphism** - Frosted glass cards
6. **Glow Effects** - Neon glows on hover
7. **Dark Theme** - Premium, modern feel

### What We're NOT Doing (keeps it fast):

- ❌ Heavy 3D (saves load time)
- ❌ Auto-playing videos on home
- ❌ Excessive particles/effects
- ❌ Slow page transitions

---

## Content Needed From You

### Home Page
- [ ] Tagline/headline (using "We Build Revenue Engines" for now)
- [ ] Subheadline (2-3 sentences about what you do)
- [ ] Logo file (PNG/SVG)

### About Page
- [ ] Your story (how Wacky Works started)
- [ ] Your values/philosophy
- [ ] Photo of you (optional)
- [ ] Team members (if any)

### Services Page
- [ ] Detailed description of each service
- [ ] Pricing hints (or "Contact for quote")
- [ ] What's included in each

### Portfolio Page
- [ ] AI Course App screenshots
- [ ] Any other projects to showcase
- [ ] Results/metrics if available

### Contact Page
- [ ] Email address
- [ ] Social media links
- [ ] Location (city/country)
- [ ] Preferred contact method

---

## Tech Decisions

| Need | Solution | Why |
|------|----------|-----|
| **Hosting** | Vercel | Built for Next.js, auto-deploy |
| **Forms** | Formspree or Supabase | Easy, no backend needed |
| **Analytics** | Vercel Analytics | Built-in, privacy-friendly |
| **CMS (Phase 2)** | Sanity or MDX | For blog later |
| **Email (Phase 2)** | Resend | Modern, developer-friendly |

---

## File Structure (Target)

```
src/
├── app/
│   ├── page.tsx              # Home
│   ├── about/page.tsx        # About
│   ├── services/page.tsx     # Services
│   ├── portfolio/page.tsx    # Portfolio/Case Studies
│   ├── contact/page.tsx      # Contact
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Design system
├── components/
│   ├── layout/
│   │   ├── navigation.tsx    # Header/Nav
│   │   └── footer.tsx        # Footer
│   ├── sections/             # Page sections
│   │   ├── hero.tsx
│   │   ├── services.tsx
│   │   ├── tech-stack.tsx
│   │   └── ...
│   ├── ui/                   # Reusable UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── ...
│   └── providers/
│       └── lenis-provider.tsx
└── lib/
    └── utils.ts
```

---

## Progress Tracker

### Completed ✅
- [x] Project setup (Next.js 16, React 19, Tailwind v4)
- [x] Design system (colors, utilities)
- [x] Hero section
- [x] Services section
- [x] Tech stack marquee
- [x] Footer
- [x] GitHub repo
- [x] Documentation

### In Progress 🔄
- [ ] Vercel deployment
- [ ] Navigation header

### Next Up 📋
- [ ] About page
- [ ] Services detail page
- [ ] Portfolio page
- [ ] Contact page

---

**Last Updated:** December 4, 2025

