"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const ACCENT = "#B07C4F";
const TEXT = "#3d3428";
const BG = "#f5ebe0";
const SHADOW = "0 3px 4px rgba(0,0,0,0.3), 0 1px 2px rgba(0,0,0,0.2)";

// Services we offer - with real info + jokes
const services = [
  {
    id: "ai-agents",
    name: "ai agents",
    tagline: "smart helpers that never sleep",
    description: "custom AI assistants that handle customer support, data analysis, and repetitive tasks 24/7. they're like interns but they don't need coffee breaks or complain about the wifi.",
    video: "/services/ai-brain.webm",
  },
  {
    id: "automations",
    name: "automations",
    tagline: "connect everything",
    description: "we wire up your apps using n8n, zapier, and make.com so they actually talk to each other. your CRM updates your spreadsheet updates your slack updates your sanity.",
    video: "/services/robot-arm.webm",
  },
  {
    id: "websites",
    name: "websites",
    tagline: "not your grandma's wordpress",
    description: "fast, modern websites built with next.js and react. animations that go whoosh, SEO that actually works, and no more 'please update your plugins' nightmares.",
    video: "/services/website.webm",
  },
  {
    id: "apps",
    name: "mobile apps",
    tagline: "in your pocket",
    description: "iOS and android apps that people actually want to use. we handle the design, development, and the inevitable 'can you make the logo bigger' requests.",
    video: "/services/apps.webm",
  },
  {
    id: "socials",
    name: "social content",
    tagline: "posts that don't suck",
    description: "content strategy, graphics, and captions that get engagement. we'll make your brand look cool on instagram, tiktok, linkedin, and whatever new platform the kids are using.",
    video: "/services/socials.webm",
  },
  {
    id: "video",
    name: "video ads",
    tagline: "30 seconds of magic",
    description: "short-form video ads optimized for social media. AI-generated, professionally edited, designed to stop the scroll and start the sales.",
    video: "/services/video.webm",
  },
  {
    id: "graphics",
    name: "graphics",
    tagline: "pretty pixels",
    description: "logos, brand assets, social graphics, pitch decks, and all the visual stuff you need to look professional. yes, we can make the gradient more... gradient-y.",
    video: "/services/graphics.webm",
  },
  {
    id: "branding",
    name: "branding",
    tagline: "who even are you?",
    description: "full brand identity packages: strategy, visual identity, tone of voice, guidelines. we'll make you look like you've got your life together, even if you don't.",
    video: "/services/branding.webm",
  },
  {
    id: "consulting",
    name: "consulting",
    tagline: "we'll tell you what to do",
    description: "digital strategy, tech stack recommendations, AI implementation roadmaps. we'll figure out what you actually need and help you not waste money on shiny things.",
    video: "/services/consulting.webm",
  },
  {
    id: "something",
    name: "something else",
    tagline: "surprise us",
    description: "got a weird project that doesn't fit the boxes? we love weird. tell us what you're thinking and we'll figure out if we can help. probably yes.",
    video: "/services/mystery.webm",
  },
];

const menuItems = [
  { name: "home", href: "/" },
  { name: "about", href: "/about" },
  { name: "services", href: "/services" },
  { name: "portfolio", href: "/portfolio" },
  { name: "contact", href: "/contact" },
];

function MenuNav() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  return (
    <motion.nav
      className="fixed top-8 left-8 md:top-10 md:left-10 z-30"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <ul className="space-y-1">
        {menuItems.map((item, index) => {
          const isHovered = hoveredIndex === index;
          const isOtherHovered = hoveredIndex !== null && hoveredIndex !== index;
          const isActive = item.name === "services";
          
          let pushY = 0;
          if (isOtherHovered && hoveredIndex !== null) {
            const distance = index - hoveredIndex;
            pushY = distance < 0 ? -8 : 8;
          }
          
          return (
            <motion.li
              key={item.name}
              style={{ color: TEXT }}
              animate={{
                y: pushY,
                scale: isOtherHovered ? 0.94 : 1,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20, mass: 0.8 }}
            >
              <motion.a
                href={item.href}
                className="text-xl md:text-2xl lg:text-3xl lowercase inline-block leading-tight origin-left"
                style={{ 
                  fontFamily: "var(--font-playfair), Georgia, serif", 
                  fontWeight: 500, 
                  letterSpacing: "-0.02em",
                  color: isActive ? ACCENT : TEXT,
                  textShadow: SHADOW,
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => {
                  if (item.name === "home") {
                    sessionStorage.setItem("skipHomeIntro", "true");
                  }
                }}
                animate={{
                  scale: isHovered ? 1.12 : 1,
                  x: isHovered ? 10 : isActive ? 6 : 0,
                  y: isHovered ? -4 : 0,
                  opacity: isHovered ? 1 : isOtherHovered ? 0.5 : 1,
                }}
                transition={{ type: "spring", stiffness: 200, damping: 15, mass: 0.6 }}
              >
                {item.name}
              </motion.a>
            </motion.li>
          );
        })}
      </ul>
    </motion.nav>
  );
}

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  
  const selected = services.find(s => s.id === selectedService);

  return (
    <main className="relative min-h-screen overflow-hidden" style={{ backgroundColor: BG, color: TEXT }}>
      {/* Noise + vignette */}
      <div
        className="fixed inset-0 pointer-events-none mix-blend-overlay"
        style={{
          opacity: 0.12,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
      <div
        className="fixed inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(0,0,0,0.08) 100%)" }}
      />

      <MenuNav />

      {/* Main content area */}
      <div className="relative z-10 min-h-screen flex">
        {/* Service List - Left/Center */}
        <div className="flex-1 flex items-center justify-center pl-48 pr-8">
          <div className="space-y-1">
            {services.map((service, index) => {
              const isHovered = hoveredService === service.id;
              const isSelected = selectedService === service.id;
              
              return (
                <motion.div
                  key={service.id}
                  className="cursor-pointer select-none"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onMouseEnter={() => setHoveredService(service.id)}
                  onMouseLeave={() => setHoveredService(null)}
                  onClick={() => setSelectedService(isSelected ? null : service.id)}
                >
                  <motion.div
                    className="flex items-center py-1"
                    animate={{
                      x: isHovered ? 20 : isSelected ? 10 : 0,
                      scale: isHovered ? 1.05 : 1,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <motion.span
                      className="text-3xl md:text-4xl lg:text-5xl lowercase"
                      style={{ 
                        fontFamily: "var(--font-playfair), Georgia, serif",
                        fontWeight: isSelected ? 600 : 400,
                        color: isSelected ? ACCENT : `${TEXT}cc`,
                        textShadow: isHovered || isSelected ? SHADOW : "none",
                      }}
                      animate={{
                        opacity: isHovered || isSelected ? 1 : 0.7,
                      }}
                    >
                      {service.name}
                    </motion.span>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Detail Panel - Right (appears on click) */}
        <AnimatePresence>
          {selected && (
            <motion.div
              className="w-1/2 max-w-xl flex flex-col justify-center pr-16 py-8"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
            >
              {/* Title + Tagline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <h3 
                  className="text-3xl md:text-4xl mb-1 lowercase"
                  style={{ 
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    fontWeight: 600,
                    color: ACCENT,
                    textShadow: SHADOW,
                  }}
                >
                  {selected.name}
                </h3>
                <p 
                  className="text-sm uppercase tracking-[0.2em] mb-4 opacity-60"
                  style={{ fontFamily: "var(--font-space), system-ui, sans-serif" }}
                >
                  {selected.tagline}
                </p>
              </motion.div>

              {/* Description */}
              <motion.p 
                className="text-lg md:text-xl leading-relaxed mb-6"
                style={{ 
                  fontFamily: "var(--font-space), system-ui, sans-serif",
                  textShadow: "0 2px 3px rgba(0,0,0,0.15)",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
              >
                {selected.description}
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Link href="/contact">
                  <motion.button
                    className="px-6 py-3 rounded-full text-lg font-medium lowercase"
                    style={{
                      backgroundColor: ACCENT,
                      color: BG,
                      boxShadow: "0 4px 12px rgba(0,0,0,0.2), 0 2px 4px rgba(0,0,0,0.15)",
                      fontFamily: "var(--font-playfair), Georgia, serif",
                    }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    yeah, i want that!
                  </motion.button>
                </Link>
              </motion.div>

              {/* Video placeholder - at bottom */}
              <motion.div
                className="aspect-video rounded-2xl mt-8 flex items-center justify-center overflow-hidden"
                style={{ 
                  backgroundColor: `${TEXT}11`,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.15), 0 8px 16px rgba(0,0,0,0.1)",
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.25 }}
              >
                {/* Placeholder - replace with actual video */}
                <div className="text-center p-8">
                  <div className="text-5xl mb-3">🎬</div>
                  <p className="text-sm opacity-50">animated video coming soon</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
