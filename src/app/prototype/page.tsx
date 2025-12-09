"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";

const BG = "#f5ebe0";
const TEXT = "#3d3428";
const ACCENT = "#B07C4F";

// Layer content with sub-items
const layers = [
  {
    id: "intro",
    title: "we build.",
    subtitle: null,
    bg: "#3d3428",
    textColor: "#f5ebe0",
    hasDetail: false,
  },
  {
    id: "services",
    title: "services",
    subtitle: "what we do",
    bg: BG,
    textColor: TEXT,
    hasDetail: true,
    detail: {
      title: "services",
      items: ["ai agents", "automations", "websites", "apps", "video", "graphics", "branding"],
      description: "we build things that work. fast. no bullshit. just results.",
    },
  },
  {
    id: "about",
    title: "about",
    subtitle: "who we are",
    bg: BG,
    textColor: TEXT,
    hasDetail: true,
    detail: {
      title: "our team",
      items: ["definitely real humans", "not AI generated", "we promise", "stop looking at us like that"],
      description: "a small team of creative technologists who ship fast and iterate faster.",
    },
  },
  {
    id: "portfolio",
    title: "portfolio",
    subtitle: "what we've done",
    bg: BG,
    textColor: TEXT,
    hasDetail: true,
    detail: {
      title: "projects",
      items: ["✓ ai course", "✓ brand refresh", "→ saas platform", "→ content engine", "○ mobile app", "○ video series"],
      description: "from idea to live in weeks, not months.",
    },
  },
  {
    id: "contact",
    title: "contact",
    subtitle: "let's talk",
    bg: BG,
    textColor: TEXT,
    hasDetail: true,
    detail: {
      title: "get in touch",
      items: ["hello@wearewacky.com", "+44 7460 460318"],
      description: "every hour is office hour. because we're winners.",
    },
  },
  {
    id: "outro",
    title: "WACKY WORKS",
    subtitle: "we're not for everyone.\nand that's the point.",
    bg: "#3d3428",
    textColor: "#f5ebe0",
    hasDetail: false,
  },
];

export default function PrototypePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedLayer, setSelectedLayer] = useState<string | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth spring for liquid feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    restDelta: 0.001,
  });

  const selected = layers.find(l => l.id === selectedLayer);

  return (
    <div 
      ref={containerRef} 
      className="relative"
      style={{ 
        height: `${layers.length * 150}vh`, // More space between
        backgroundColor: BG,
      }}
    >
      {/* Fixed background */}
      <div 
        className="fixed inset-0"
        style={{ 
          backgroundColor: BG,
        }}
      >
        {/* Noise texture */}
        <div
          className="absolute inset-0 pointer-events-none mix-blend-overlay"
          style={{
            opacity: 0.1,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Left side - Stacked tiles */}
      <div className="fixed left-8 md:left-16 top-0 bottom-0 w-[40vw] max-w-md flex items-center z-10">
        <div className="space-y-6 w-full">
          {layers.map((layer, index) => {
            const layerStart = index / layers.length;
            const layerEnd = (index + 1) / layers.length;
            
            // Y position with more spacing
            const y = useTransform(
              smoothProgress,
              [layerStart - 0.3, layerStart, layerEnd, layerEnd + 0.3],
              [300, 0, 0, -300]
            );
            
            // Opacity
            const opacity = useTransform(
              smoothProgress,
              [layerStart - 0.15, layerStart, layerEnd, layerEnd + 0.15],
              [0, 1, 1, 0]
            );
            
            // Scale for depth
            const scale = useTransform(
              smoothProgress,
              [layerStart - 0.1, layerStart, layerEnd, layerEnd + 0.1],
              [0.85, 1, 1, 0.85]
            );

            const isSelected = selectedLayer === layer.id;

            return (
              <motion.div
                key={layer.id}
                className={`rounded-2xl p-8 md:p-10 cursor-pointer transition-all duration-500 ${
                  layer.hasDetail ? "hover:translate-x-2" : ""
                }`}
                style={{
                  y,
                  opacity,
                  scale,
                  backgroundColor: layer.bg,
                  color: layer.textColor,
                  boxShadow: isSelected 
                    ? "0 30px 60px rgba(0,0,0,0.4), 0 15px 30px rgba(0,0,0,0.3)"
                    : "0 20px 50px rgba(0,0,0,0.25), 0 10px 20px rgba(0,0,0,0.15)",
                  border: isSelected ? `3px solid ${ACCENT}` : "3px solid transparent",
                }}
                onClick={() => {
                  if (layer.hasDetail) {
                    setSelectedLayer(isSelected ? null : layer.id);
                  }
                }}
                whileHover={layer.hasDetail ? { x: 8, scale: 1.02 } : {}}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                <motion.h2
                  className="text-3xl md:text-4xl lg:text-5xl font-black lowercase"
                  style={{
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    textShadow: "0 3px 6px rgba(0,0,0,0.2)",
                  }}
                >
                  {layer.title}
                </motion.h2>
                
                {layer.subtitle && (
                  <motion.p
                    className="text-base md:text-lg mt-2 opacity-60 whitespace-pre-line"
                    style={{
                      fontFamily: "var(--font-space), system-ui, sans-serif",
                    }}
                  >
                    {layer.subtitle}
                  </motion.p>
                )}

                {layer.hasDetail && (
                  <div className="mt-4 text-sm opacity-40">
                    click to expand →
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Right side - Expanded detail panel */}
      <AnimatePresence>
        {selected && selected.detail && (
          <motion.div
            className="fixed right-8 md:right-16 top-1/2 -translate-y-1/2 w-[45vw] max-w-2xl z-20"
            initial={{ opacity: 0, x: 100, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 150, damping: 20 }}
          >
            <motion.div
              className="rounded-3xl p-10 md:p-14"
              style={{
                backgroundColor: "#fff",
                color: TEXT,
                boxShadow: "0 40px 80px rgba(0,0,0,0.3), 0 20px 40px rgba(0,0,0,0.2)",
              }}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedLayer(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity"
                style={{ backgroundColor: `${TEXT}11` }}
              >
                ✕
              </button>

              <motion.h3
                className="text-4xl md:text-5xl font-black lowercase mb-6"
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  color: ACCENT,
                  textShadow: "0 3px 6px rgba(0,0,0,0.15)",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                {selected.detail.title}
              </motion.h3>

              {/* Items list */}
              <motion.div
                className="space-y-3 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
              >
                {selected.detail.items.map((item, i) => (
                  <motion.div
                    key={i}
                    className="text-xl md:text-2xl lowercase"
                    style={{
                      fontFamily: "var(--font-playfair), Georgia, serif",
                      textShadow: "0 2px 4px rgba(0,0,0,0.1)",
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.05 }}
                  >
                    {item}
                  </motion.div>
                ))}
              </motion.div>

              {/* Description */}
              <motion.p
                className="text-lg opacity-70 leading-relaxed"
                style={{
                  fontFamily: "var(--font-space), system-ui, sans-serif",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {selected.detail.description}
              </motion.p>

              {/* CTA Button */}
              {selected.id === "contact" ? (
                <motion.a
                  href="mailto:hello@wearewacky.com"
                  className="inline-block mt-8 px-8 py-4 rounded-full text-lg font-medium lowercase"
                  style={{
                    backgroundColor: ACCENT,
                    color: "#fff",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                    fontFamily: "var(--font-playfair), Georgia, serif",
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                >
                  send us a message
                </motion.a>
              ) : (
                <motion.button
                  className="mt-8 px-8 py-4 rounded-full text-lg font-medium lowercase"
                  style={{
                    backgroundColor: ACCENT,
                    color: "#fff",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                    fontFamily: "var(--font-playfair), Georgia, serif",
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                >
                  learn more
                </motion.button>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll indicator */}
      <motion.div
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        style={{ color: TEXT }}
      >
        <div className="flex flex-col items-center gap-2 opacity-40">
          <span className="text-xs uppercase tracking-widest">scroll</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>

      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 z-50 origin-left"
        style={{
          backgroundColor: ACCENT,
          scaleX: smoothProgress,
        }}
      />
    </div>
  );
}
