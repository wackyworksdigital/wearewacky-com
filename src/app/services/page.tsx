"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FluidMenu } from "@/components/ui/fluid-menu";

const ACCENT = "#B07C4F";
const TEXT = "#3d3428";
const BG = "#f5ebe0";
const SHADOW = "0 3px 4px rgba(0,0,0,0.3), 0 1px 2px rgba(0,0,0,0.2)";

// 9 main service categories with unique CTA buttons + visual gradients
const services = [
  {
    id: "ai-agents",
    name: "ai agents",
    tagline: "smart helpers that never sleep",
    description: "custom AI assistants that handle customer support, data analysis, and repetitive tasks 24/7. they're like interns but they don't need coffee breaks or complain about the wifi.",
    cta: "i want a robot!",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    icon: "🤖",
  },
  {
    id: "automation",
    name: "workflow automation",
    tagline: "connect everything",
    description: "we wire up your apps using n8n, zapier, and make.com so they actually talk to each other. your CRM updates your spreadsheet updates your slack updates your sanity.",
    cta: "automate my life!",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    icon: "⚡",
  },
  {
    id: "rag",
    name: "rag & knowledge",
    tagline: "make your docs smart",
    description: "turn your messy documents into an AI that actually knows your business. like having an employee who read ALL the documentation. yes, even the 2019 onboarding PDF.",
    cta: "make my docs smart!",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    icon: "📚",
  },
  {
    id: "apps",
    name: "app development",
    tagline: "build something cool",
    description: "mobile apps, web apps, SaaS platforms. from idea to app store. we build stuff that works on phones, tablets, and whatever weird device you're using.",
    cta: "build my app!",
    gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    icon: "📱",
  },
  {
    id: "websites",
    name: "websites",
    tagline: "not your grandma's wordpress",
    description: "fast, modern websites built with next.js and react. animations that go whoosh, SEO that actually works, and no more 'please update your plugins' nightmares.",
    cta: "i need a website!",
    gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    icon: "🌐",
  },
  {
    id: "ecommerce",
    name: "e-commerce",
    tagline: "sell stuff online",
    description: "shopify stores, product listings, checkout optimization. we make people click 'buy now' instead of 'maybe later'. your accountant will thank us.",
    cta: "take my money!",
    gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
    icon: "🛒",
  },
  {
    id: "social-video",
    name: "ai content",
    tagline: "videos, images, posts - on autopilot",
    description: "AI-powered content creation: videos, images, blog posts, social media - all automated. faceless youtube channels, tiktoks, reels, whatever's trending. we make you look good without you doing the work.",
    cta: "seriously?!",
    gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    icon: "🎥",
  },
  {
    id: "branding",
    name: "branding",
    tagline: "who even are you?",
    description: "full brand identity packages: strategy, visual identity, tone of voice, guidelines. we'll make you look like you've got your life together, even if you don't.",
    cta: "make me pretty!",
    gradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
    icon: "✨",
  },
  {
    id: "self-hosted",
    name: "self-hosted tools",
    tagline: "own your stack",
    description: "n8n, home assistant, private AI, all on your own servers. no subscriptions, no data leaving your control, no big tech knowing your business.",
    cta: "i want control!",
    gradient: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
    icon: "🔒",
  },
];

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  
  const selected = services.find(s => s.id === selectedService);

  return (
    <main className="relative min-h-screen overflow-hidden" style={{ backgroundColor: BG, color: TEXT }}>
      
      {/* SEO: Hidden content for crawlers - all service descriptions visible to Google/AI */}
      <div className="sr-only" aria-hidden="false">
        <h1>Wacky Works Digital Services - AI, Automation, Web Development UK</h1>
        {services.map(s => (
          <article key={s.id}>
            <h2>{s.name}</h2>
            <p>{s.tagline}</p>
            <p>{s.description}</p>
          </article>
        ))}
        <p>UK-based digital agency specializing in AI agents, n8n workflow automation, Next.js websites, Shopify e-commerce, RAG knowledge systems, and self-hosted solutions. We build digital assets that work while you sleep.</p>
      </div>
      
      {/* Noise + vignette */}
      <div
        className="fixed inset-0 pointer-events-none mix-blend-overlay z-[2]"
        style={{
          opacity: 0.12,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
      <div
        className="fixed inset-0 pointer-events-none z-[2]"
        style={{ background: "radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(0,0,0,0.08) 100%)" }}
      />

      <FluidMenu activePage="services" />

      {/* NEW LAYOUT: Bento Grid */}
      <div className="relative z-10 min-h-screen pt-32 px-6 md:px-12 pb-12">
        <AnimatePresence mode="wait">
          {!selected ? (
            // Grid View
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto"
            >
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  className="relative rounded-3xl overflow-hidden cursor-pointer group"
                  style={{
                    background: service.gradient,
                    aspectRatio: index % 3 === 0 ? "1" : "4/3", // Varied card sizes
                  }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05, type: "spring", stiffness: 200, damping: 20 }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  onClick={() => setSelectedService(service.id)}
                  onMouseEnter={() => setHoveredService(service.id)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-black/30" />
                  
                  {/* Icon + Name */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    <span className="text-5xl md:text-6xl opacity-90">{service.icon}</span>
                    <div>
                      <h3 
                        className="text-2xl md:text-3xl font-semibold lowercase text-white mb-1"
                        style={{ 
                          fontFamily: "var(--font-syne), sans-serif",
                          textShadow: "0 2px 8px rgba(0,0,0,0.3)",
                        }}
                      >
                        {service.name}
                      </h3>
                      <p 
                        className="text-sm opacity-90 text-white/90"
                        style={{ fontFamily: "var(--font-space), sans-serif" }}
                      >
                        {service.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Hover hint */}
                  <motion.div
                    className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm"
                    style={{ fontFamily: "var(--font-space), sans-serif" }}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: hoveredService === service.id ? 1 : 0, x: hoveredService === service.id ? 0 : 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    click to learn more →
                  </motion.div>
                </motion.div>
              ))}

              {/* CTA Card */}
              <Link href="/contact">
                <motion.div
                  className="relative rounded-3xl overflow-hidden cursor-pointer group border-4 border-dashed flex items-center justify-center"
                  style={{
                    aspectRatio: "4/3",
                    borderColor: ACCENT,
                    backgroundColor: `${ACCENT}15`,
                  }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: services.length * 0.05 }}
                  whileHover={{ scale: 1.02, y: -4 }}
                >
                  <div className="text-center p-6">
                    <p 
                      className="text-3xl md:text-4xl font-semibold lowercase mb-2"
                      style={{ 
                        fontFamily: "var(--font-syne), sans-serif",
                        color: ACCENT,
                        textShadow: SHADOW,
                      }}
                    >
                      need something else?
                    </p>
                    <p 
                      className="text-lg opacity-70"
                      style={{ fontFamily: "var(--font-space), sans-serif", color: TEXT }}
                    >
                      let's talk →
                    </p>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ) : (
            // Detail View (full screen)
            <motion.div
              key="detail"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="max-w-4xl mx-auto"
            >
              {/* Close button */}
              <motion.button
                className="mb-8 flex items-center gap-2 text-lg opacity-70 hover:opacity-100"
                style={{ fontFamily: "var(--font-space), sans-serif", color: TEXT }}
                onClick={() => setSelectedService(null)}
                whileHover={{ x: -4 }}
              >
                ← back to services
              </motion.button>

              {/* Hero card */}
              <motion.div
                className="relative rounded-3xl overflow-hidden mb-8"
                style={{
                  background: selected.gradient,
                  minHeight: "300px",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-black/30" />
                <div className="relative p-12 flex flex-col justify-end min-h-[300px]">
                  <span className="text-8xl mb-4 opacity-90">{selected.icon}</span>
                  <h1 
                    className="text-5xl md:text-6xl font-bold lowercase text-white mb-2"
                    style={{ 
                      fontFamily: "var(--font-syne), sans-serif",
                      textShadow: "0 3px 12px rgba(0,0,0,0.4)",
                    }}
                  >
                    {selected.name}
                  </h1>
                  <p 
                    className="text-xl text-white/90 uppercase tracking-wider"
                    style={{ fontFamily: "var(--font-space), sans-serif" }}
                  >
                    {selected.tagline}
                  </p>
                </div>
              </motion.div>

              {/* Description + CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <p 
                  className="text-2xl md:text-3xl leading-relaxed mb-8"
                  style={{ 
                    fontFamily: "var(--font-space), sans-serif",
                    color: TEXT,
                  }}
                >
                  {selected.description}
                </p>

                <Link href="/contact">
                  <motion.button
                    className="px-8 py-4 rounded-full text-2xl font-semibold lowercase"
                    style={{
                      backgroundColor: ACCENT,
                      color: BG,
                      boxShadow: "0 6px 20px rgba(0,0,0,0.25)",
                      fontFamily: "var(--font-syne), sans-serif",
                    }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {selected.cta}
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
