"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FluidMenu } from "@/components/ui/fluid-menu";

const ACCENT = "#B07C4F";
const TEXT = "#3d3428";
const BG = "#f5ebe0";
const SHADOW = "0 3px 4px rgba(0,0,0,0.3), 0 1px 2px rgba(0,0,0,0.2)";

// 9 main service categories with unique CTA buttons
const services = [
  {
    id: "ai-agents",
    name: "ai agents",
    tagline: "smart helpers that never sleep",
    description: "custom AI assistants that handle customer support, data analysis, and repetitive tasks 24/7. they're like interns but they don't need coffee breaks or complain about the wifi.",
    cta: "i want a robot!",
  },
  {
    id: "automation",
    name: "workflow automation",
    tagline: "connect everything",
    description: "we wire up your apps using n8n, zapier, and make.com so they actually talk to each other. your CRM updates your spreadsheet updates your slack updates your sanity.",
    cta: "automate my life!",
  },
  {
    id: "rag",
    name: "rag & knowledge",
    tagline: "make your docs smart",
    description: "turn your messy documents into an AI that actually knows your business. like having an employee who read ALL the documentation. yes, even the 2019 onboarding PDF.",
    cta: "make my docs smart!",
  },
  {
    id: "apps",
    name: "app development",
    tagline: "build something cool",
    description: "mobile apps, web apps, SaaS platforms. from idea to app store. we build stuff that works on phones, tablets, and whatever weird device you're using.",
    cta: "build my app!",
  },
  {
    id: "websites",
    name: "websites",
    tagline: "not your grandma's wordpress",
    description: "fast, modern websites built with next.js and react. animations that go whoosh, SEO that actually works, and no more 'please update your plugins' nightmares.",
    cta: "i need a website!",
  },
  {
    id: "ecommerce",
    name: "e-commerce",
    tagline: "sell stuff online",
    description: "shopify stores, product listings, checkout optimization. we make people click 'buy now' instead of 'maybe later'. your accountant will thank us.",
    cta: "take my money!",
  },
  {
    id: "social-video",
    name: "ai content",
    tagline: "videos, images, posts - on autopilot",
    description: "AI-powered content creation: videos, images, blog posts, social media - all automated. faceless youtube channels, tiktoks, reels, whatever's trending. we make you look good without you doing the work.",
    cta: "seriously?!",
  },
  {
    id: "branding",
    name: "branding",
    tagline: "who even are you?",
    description: "full brand identity packages: strategy, visual identity, tone of voice, guidelines. we'll make you look like you've got your life together, even if you don't.",
    cta: "make me pretty!",
  },
  {
    id: "self-hosted",
    name: "self-hosted tools",
    tagline: "own your stack",
    description: "n8n, home assistant, private AI, all on your own servers. no subscriptions, no data leaving your control, no big tech knowing your business.",
    cta: "i want control!",
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

      {/* Main content area - fixed layout to prevent jumping */}
      <div className="relative z-10 min-h-screen flex flex-col md:flex-row">
        {/* Service List - responsive padding */}
        <div 
          className="flex items-center px-6 pt-36 pb-8 md:pt-0 md:pl-48 md:pr-8"
          style={{ width: selected ? "50%" : "100%", transition: "width 0.4s ease-out" }}
        >
          <div className="space-y-1">
            {services.map((service, index) => {
              const isHovered = hoveredService === service.id;
              const isSelected = selectedService === service.id;
              const isOtherHovered = hoveredService !== null && hoveredService !== service.id;
              
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
                      x: isHovered ? 25 : isSelected ? 15 : 0,
                      scale: isHovered ? 1.08 : isOtherHovered ? 0.95 : 1,
                      opacity: isHovered ? 1 : isOtherHovered ? 0.5 : isSelected ? 1 : 0.85,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <motion.span
                      className="text-2xl md:text-4xl lg:text-5xl lowercase inline-block"
                      style={{ 
                        fontFamily: "var(--font-syne), var(--font-space), sans-serif",
                        fontWeight: isSelected ? 600 : 400,
                        color: isSelected ? ACCENT : TEXT,
                        textShadow: isHovered || isSelected ? SHADOW : "0 2px 3px rgba(0,0,0,0.15)",
                      }}
                      animate={{
                        y: [0, -3, 0],
                      }}
                      transition={{
                        duration: 5 + index * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.3,
                      }}
                    >
                      {service.name}
                    </motion.span>
                  </motion.div>
                </motion.div>
              );
            })}
            
            {/* CTA after list */}
            <motion.div
              className="pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Link href="/contact">
                <motion.p
                  className="text-lg lowercase cursor-pointer"
                  style={{ 
                    fontFamily: "var(--font-space), system-ui, sans-serif",
                    color: ACCENT,
                    textShadow: "0 2px 3px rgba(0,0,0,0.15)",
                  }}
                  whileHover={{ x: 10, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  need something else? let's talk →
                </motion.p>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Detail Panel - Right (appears on click) */}
        <AnimatePresence>
          {selected && (
            <motion.div
              className="w-1/2 flex flex-col justify-center pr-8 md:pr-16 py-8"
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
                    fontFamily: "var(--font-syne), var(--font-space), sans-serif",
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

              {/* CTA Button - unique per service */}
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
                      fontFamily: "var(--font-syne), var(--font-space), sans-serif",
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
