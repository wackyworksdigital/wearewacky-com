"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const ACCENT = "#B07C4F";
const TEXT = "#3d3428";
const BG = "#f5ebe0";
const SHADOW = "0 3px 4px rgba(0,0,0,0.3), 0 1px 2px rgba(0,0,0,0.2)";

// Service data with status and content
const services = [
  // DONE - Old projects (grayed, ticked)
  {
    id: "logo-design",
    name: "logo design",
    status: "done",
    description: "we made logos. they were round. people liked them.",
    image: "/services/logo.png", // placeholder
  },
  {
    id: "business-cards",
    name: "business cards",
    status: "done", 
    description: "remember paper? we put logos on it. very retro.",
    image: "/services/cards.png",
  },
  {
    id: "wordpress-sites",
    name: "wordpress sites",
    status: "done",
    description: "we clicked buttons in wordpress. many buttons. so many plugins.",
    image: "/services/wordpress.png",
  },
  
  // IN PROGRESS - Current work (highlighted)
  {
    id: "ai-agents",
    name: "ai agents",
    status: "in-progress",
    description: "our AI agents are well equipped and stored somewhere. they do things. smart things.",
    image: "/services/ai-brain.png",
  },
  {
    id: "automations",
    name: "automations",
    status: "in-progress",
    description: "we can make your apps play nice together with the help of n8n and some digital duct tape.",
    image: "/services/robot-arm.png",
  },
  
  // COMING UP - Future projects
  {
    id: "websites",
    name: "websites",
    status: "coming",
    description: "not wordpress anymore. fancy stuff with animations and things that go whoosh.",
    image: "/services/website.png",
  },
  {
    id: "apps",
    name: "mobile apps",
    status: "coming",
    description: "apps for your phone. so you can ignore them like all your other apps.",
    image: "/services/apps.png",
  },
  {
    id: "socials",
    name: "social content",
    status: "coming",
    description: "we'll make posts that your mum will definitely like. and maybe 3 other people.",
    image: "/services/socials.png",
  },
  {
    id: "video",
    name: "video ads",
    status: "coming",
    description: "30 seconds of pure magic. or chaos. depends on the budget.",
    image: "/services/video.png",
  },
  {
    id: "graphics",
    name: "graphics",
    status: "coming",
    description: "pretty pictures. sometimes with gradients. we love gradients.",
    image: "/services/graphics.png",
  },
  {
    id: "branding",
    name: "branding",
    status: "coming",
    description: "we'll make you look professional. even if you're not. our secret.",
    image: "/services/branding.png",
  },
  {
    id: "something",
    name: "something else",
    status: "coming",
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

// Status icon component
function StatusIcon({ status }: { status: string }) {
  if (status === "done") {
    return (
      <span className="text-green-600 mr-3 opacity-60">✓</span>
    );
  }
  if (status === "in-progress") {
    return (
      <motion.span 
        className="mr-3"
        style={{ color: ACCENT }}
        animate={{ x: [0, 4, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        →
      </motion.span>
    );
  }
  return (
    <span className="mr-3 opacity-40">○</span>
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
              const isDone = service.status === "done";
              const isInProgress = service.status === "in-progress";
              
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
                    <StatusIcon status={service.status} />
                    <motion.span
                      className={`text-3xl md:text-4xl lg:text-5xl lowercase ${isDone ? "line-through" : ""}`}
                      style={{ 
                        fontFamily: "var(--font-playfair), Georgia, serif",
                        fontWeight: isInProgress ? 600 : 400,
                        color: isDone ? `${TEXT}66` : isInProgress ? TEXT : `${TEXT}99`,
                        textShadow: isHovered || isSelected ? SHADOW : "none",
                      }}
                      animate={{
                        opacity: isDone ? 0.5 : isHovered || isSelected ? 1 : 0.8,
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
                  <div className="text-6xl mb-4">
                    {selected.status === "done" ? "✓" : selected.status === "in-progress" ? "⚙️" : "🚀"}
                  </div>
                  <p className="text-sm opacity-50">video/image coming soon</p>
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
                
                {/* Status badge */}
                <div className="mt-4">
                  <span 
                    className={`inline-block px-3 py-1 rounded-full text-sm ${
                      selected.status === "done" 
                        ? "bg-green-100 text-green-700" 
                        : selected.status === "in-progress"
                        ? "bg-amber-100 text-amber-700"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {selected.status === "done" ? "completed" : selected.status === "in-progress" ? "in progress" : "coming soon"}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
