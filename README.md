# 🚀 wearewacky.com

> **Wacky Works Digital - Flagship Marketing Website**

The official marketing website for Wacky Works Digital, a Custom Automation & SaaS Studio.

---

## 🛠️ Tech Stack

| Layer | Technology | Version |
|-------|------------|---------|
| Framework | Next.js | 16.0.7 |
| UI Library | React | 19.2.0 |
| Language | TypeScript | 5.x |
| Styling | Tailwind CSS | 4.x |
| Animations | Framer Motion | 12.x |
| Scroll Animations | GSAP | 3.x |
| Smooth Scroll | Lenis | Latest |
| Icons | Lucide React | Latest |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or pnpm

### Installation

```bash
# Clone the repo
git clone https://github.com/wackyworksdigital/wearewacky-com.git
cd wearewacky-com

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## 📁 Project Structure

```
wearewacky-com/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── globals.css         # Global styles + design tokens
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Home page
│   ├── components/
│   │   ├── providers/          # Context providers (Lenis)
│   │   └── sections/           # Page sections
│   │       ├── hero.tsx
│   │       ├── services.tsx
│   │       ├── tech-stack.tsx
│   │       └── footer.tsx
│   └── lib/
│       └── utils.ts            # Utility functions (cn)
├── public/                     # Static assets
├── TODO.md                     # Project tasks
└── README.md                   # This file
```

---

## 🎨 Design System

### Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Void | `#050505` | Background |
| Purple | `#8b5cf6` | Primary accent |
| Cyan | `#06b6d4` | Secondary accent |
| White | `#fafafa` | Text |
| Muted | `#a1a1aa` | Secondary text |

### Utilities

```tsx
// Gradient text
<span className="text-gradient">Gradient Text</span>

// Glass effect
<div className="glass">Glass Card</div>

// Glow effects
<div className="glow-purple">Purple Glow</div>
<div className="glow-cyan">Cyan Glow</div>
```

---

## 🔗 Related Projects

| Project | URL | Description |
|---------|-----|-------------|
| AI Course App | courses.wearewacky.com | Introduction to AI Course Platform |
| Internal Docs | Private | Agency knowledge base |

---

## 📝 License

© 2025 Wacky Works Digital. All rights reserved.
