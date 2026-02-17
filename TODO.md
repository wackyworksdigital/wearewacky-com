# 🚀 wearewacky.com - Project TODO

**Project:** Flagship Marketing Website  
**Version:** 0.2.0  
**Status:** ✅ Live on Vercel  
**Last Updated:** 2026-02-17

---

## ✅ Completed

### Setup & Infrastructure

- [x] Create Next.js 16 + React 19 + Tailwind v4 project
- [x] Install dependencies (GSAP, Lenis, Framer Motion)
- [x] Set up design system (colors, typography, utilities)
- [x] Create GitHub repo and push code
- [x] Connect Vercel for auto-deploy
- [x] Configure custom domain (wearewacky.com)
- [x] Resend domain verified (wearewacky.com) for sending emails
- [x] SPF + DKIM DNS records verified

### Pages & Content

- [x] Hero section with animated postcard flip card
- [x] Services section (Education, SaaS, Consulting)
- [x] Tech Stack marquee
- [x] Footer with links
- [x] About page
- [x] Navigation header

### Email & Newsletter

- [x] Newsletter signup form working
- [x] Welcome email sent via Resend on subscribe
- [x] New subscriber notification email to admin
- [x] Email sending verified and working

### Branding (Feb 2026)

- [x] Replace default Vercel favicon with Wacky Works logo
- [x] `icon.png` (32x32) — Wacky Works transparent logo
- [x] `apple-icon.png` (180x180) — iOS bookmark/home screen
- [x] Hero updated from Christmas theme to evergreen "the lab is open." postcard
- [x] Retro scientist lab image generated and deployed
- [x] Removed stale "beep boop, we're robots now" subtitle

---

## 🔥 Current Sprint

### ShopSync Landing Page

- [ ] Create `/shopsync` route — landing page for the ShopSync app
- [ ] Create `/shopsync/download` — download links (Play Store, App Store)
- [ ] Create `/shopsync/web` — redirect to Flutter web app (hosted separately)
- [ ] Add ShopSync to main nav/footer

### Content Fixes

- [ ] Fix FAQ: React Native → Flutter reference
- [ ] Full site copy review for outdated/placeholder content
- [ ] Verify all links work

### Email & Subscribers

- [ ] Explore Resend Audience feature for mailing list management
- [ ] Add subscriber contacts to Resend Audience via `/api/subscribe`
- [ ] Do NOT enable "Enable Receiving" on Resend (would redirect MX records)

---

## 📋 Backlog

### Features

- [ ] Contact form (save to database?)
- [ ] Dark/Light mode toggle
- [ ] SEO optimization (meta tags, structured data)
- [ ] Analytics integration
- [ ] Case studies section
- [ ] Testimonials

### Performance

- [ ] PageSpeed audit and optimization
- [ ] Image optimization pass

---

## 🐛 Known Issues

- Hero headline wraps awkwardly on some viewports (partially fixed)

---

## 💡 Ideas / Nice to Have

- 3D elements with Three.js
- Interactive cursor effects
- Page transitions with Framer Motion
- Animated logo
- Particle backgrounds

---

**How to Use This File:**

- Keep "Current Sprint" focused on 1-2 weeks of work
- Move completed items to ✅ Completed section
- Add new ideas at the bottom
