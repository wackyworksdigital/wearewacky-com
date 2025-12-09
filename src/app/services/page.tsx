"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ACCENT = "#B07C4F";
const TEXT = "#3d3428";
const BG = "#f5ebe0";
const SHADOW = "0 3px 4px rgba(0,0,0,0.3), 0 1px 2px rgba(0,0,0,0.2)";

// Services we offer
const services = [
  {
    id: "ai-agents",
    name: "ai agents",
    description: "our AI agents are well equipped and stored somewhere. they do things. smart things. very smart things.",
    image: "/services/ai-brain.png",
  },
  {
    id: "automations",
    name: "automations",
    description: "we can make your apps play nice together with the help of n8n and some digital duct tape.",
    image: "/services/robot-arm.png",
  },
  {
    id: "websites",
    name: "websites",
    description: "not wordpress anymore. fancy stuff with animations and things that go whoosh.",
    image: "/services/website.png",
  },
  {
    id: "apps",
    name: "mobile apps",
    description: "apps for your phone. so you can ignore them like all your other apps.",
    image: "/services/apps.png",
  },
  {
    id: "socials",
    name: "social content",
    description: "we'll make posts that your mum will definitely like. and maybe 3 other people.",
    image: "/services/socials.png",
  },
  {
    id: "video",
    name: "video ads",
    description: "30 seconds of pure magic. or chaos. depends on the budget.",
    image: "/services/video.png",
  },
  {
    id: "graphics",
    name: "graphics",
    description: "pretty pictures. sometimes with gradients. we love gradients.",
    image: "/services/graphics.png",
  },
  {
    id: "branding",
    name: "branding",
    description: "we'll make you look professional. even if you're not. our secret.",
    image: "/services/branding.png",
  },
  {
    id: "consulting",
    name: "consulting",
    description: "we'll tell you what to do. you probably won't listen. but we'll still charge you.",
    image: "/services/consulting.png",
  },
  {
    id: "something",
    name: "something else",
    description: "we don't know what this is yet but it sounds exciting doesn't it?",
    image: "/services/mystery.png",
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
              className="w-1/2 max-w-xl flex flex-col justify-center pr-16"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
            >
              {/* Placeholder for video/image */}
              <motion.div
                className="aspect-video rounded-2xl mb-6 flex items-center justify-center overflow-hidden"
                style={{ 
                  backgroundColor: `${TEXT}11`,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.15), 0 8px 16px rgba(0,0,0,0.1)",
                }}
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1 }}
              >
                {/* Placeholder - replace with actual video/image */}
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🎬</div>
                  <p className="text-sm opacity-50">video coming soon</p>
                </div>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3 
                  className="text-2xl md:text-3xl mb-3 lowercase"
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
                  className="text-lg md:text-xl leading-relaxed"
                  style={{ 
                    fontFamily: "var(--font-space), system-ui, sans-serif",
                    textShadow: "0 2px 3px rgba(0,0,0,0.15)",
                  }}
                >
                  {selected.description}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
