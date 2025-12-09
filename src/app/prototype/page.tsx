"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";

const BG = "#f5ebe0";
const TEXT = "#3d3428";
const ACCENT = "#B07C4F";

// Main sections
const sections = [
  {
    id: "intro",
    title: "we build.",
    bg: "#3d3428",
    textColor: "#f5ebe0",
    subItems: null,
  },
  {
    id: "services",
    title: "services",
    bg: BG,
    textColor: TEXT,
    subItems: [
      { name: "ai agents", desc: "smart helpers that never sleep" },
      { name: "automations", desc: "connect everything" },
      { name: "websites", desc: "not wordpress anymore" },
      { name: "apps", desc: "in your pocket" },
      { name: "video", desc: "30 seconds of magic" },
      { name: "graphics", desc: "pretty pixels" },
      { name: "branding", desc: "who even are you?" },
    ],
  },
  {
    id: "about",
    title: "about",
    bg: BG,
    textColor: TEXT,
    subItems: [
      { name: "our team", desc: "definitely real humans" },
      { name: "not AI", desc: "we promise" },
      { name: "seriously", desc: "stop asking" },
    ],
  },
  {
    id: "portfolio",
    title: "portfolio",
    bg: BG,
    textColor: TEXT,
    subItems: [
      { name: "✓ ai course", desc: "completed" },
      { name: "✓ brand refresh", desc: "completed" },
      { name: "→ saas platform", desc: "in progress" },
      { name: "→ content engine", desc: "in progress" },
      { name: "○ mobile app", desc: "coming soon" },
      { name: "○ video series", desc: "coming soon" },
    ],
  },
  {
    id: "contact",
    title: "contact",
    bg: BG,
    textColor: TEXT,
    subItems: [
      { name: "email", desc: "hello@wearewacky.com" },
      { name: "whatsapp", desc: "+44 7460 460318" },
      { name: "office hours", desc: "every hour is office hour" },
    ],
  },
  {
    id: "outro",
    title: "WACKY WORKS",
    subtitle: "we're not for everyone.\nand that's the point.",
    bg: "#3d3428",
    textColor: "#f5ebe0",
    subItems: null,
  },
];

// Floaty tile component
function FloatyTile({ 
  children, 
  delay = 0, 
  onClick,
  isMain = false,
  style = {},
}: { 
  children: React.ReactNode;
  delay?: number;
  onClick?: () => void;
  isMain?: boolean;
  style?: any;
}) {
  return (
    <motion.div
      className={`rounded-2xl cursor-pointer ${isMain ? 'p-10 md:p-14' : 'p-6 md:p-8'}`}
      style={{
        backgroundColor: style.bg || BG,
        color: style.textColor || TEXT,
        boxShadow: "0 25px 50px rgba(0,0,0,0.25), 0 10px 20px rgba(0,0,0,0.15)",
        ...style,
      }}
      initial={{ 
        opacity: 0, 
        y: 100,
        rotateX: -15,
        rotateY: Math.random() * 10 - 5,
        scale: 0.8,
      }}
      animate={{ 
        opacity: 1, 
        y: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
      }}
      exit={{ 
        opacity: 0, 
        y: -100,
        rotateX: 15,
        scale: 0.8,
      }}
      whileHover={{ 
        scale: 1.05, 
        y: -10,
        rotateY: 3,
        boxShadow: "0 35px 70px rgba(0,0,0,0.3), 0 15px 30px rgba(0,0,0,0.2)",
      }}
      whileTap={{ scale: 0.98 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 1,
        delay,
      }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}

export default function PrototypePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Super smooth spring
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 30,
    damping: 20,
    restDelta: 0.0001,
  });

  // Update current index based on scroll
  smoothProgress.on("change", (v) => {
    const newIndex = Math.min(
      Math.floor(v * sections.length),
      sections.length - 1
    );
    if (newIndex !== currentIndex && !selectedSection) {
      setCurrentIndex(newIndex);
    }
  });

  const currentSection = sections[currentIndex];
  const selected = sections.find(s => s.id === selectedSection);

  return (
    <div 
      ref={containerRef} 
      className="relative"
      style={{ 
        height: `${sections.length * 120}vh`,
        backgroundColor: BG,
      }}
    >
      {/* Fixed background */}
      <div className="fixed inset-0" style={{ backgroundColor: BG }}>
        {/* Noise texture */}
        <div
          className="absolute inset-0 pointer-events-none mix-blend-overlay"
          style={{
            opacity: 0.1,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Main content area */}
      <div 
        className="fixed inset-0 flex items-center justify-center z-10"
        style={{ perspective: "1200px" }}
      >
        <AnimatePresence mode="wait">
          {!selectedSection ? (
            // MAIN VIEW - Center tiles
            <motion.div
              key="main"
              className="flex flex-col items-center gap-6"
              initial={{ opacity: 0, x: 0 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
              <AnimatePresence mode="wait">
                <FloatyTile
                  key={currentSection.id}
                  isMain
                  onClick={() => {
                    if (currentSection.subItems) {
                      setSelectedSection(currentSection.id);
                    }
                  }}
                  style={{
                    bg: currentSection.bg,
                    textColor: currentSection.textColor,
                  }}
                >
                  <motion.h1
                    className="text-5xl md:text-7xl lg:text-8xl font-black lowercase"
                    style={{
                      fontFamily: "var(--font-playfair), Georgia, serif",
                      textShadow: "0 4px 8px rgba(0,0,0,0.2)",
                    }}
                  >
                    {currentSection.title}
                  </motion.h1>
                  
                  {currentSection.subtitle && (
                    <motion.p
                      className="text-xl md:text-2xl mt-4 opacity-60 whitespace-pre-line"
                      style={{ fontFamily: "var(--font-space), system-ui, sans-serif" }}
                    >
                      {currentSection.subtitle}
                    </motion.p>
                  )}

                  {currentSection.subItems && (
                    <motion.p
                      className="text-sm mt-6 opacity-40"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      click to explore →
                    </motion.p>
                  )}
                </FloatyTile>
              </AnimatePresence>

              {/* Navigation dots */}
              <div className="flex gap-3 mt-8">
                {sections.map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 rounded-full"
                    style={{
                      backgroundColor: i === currentIndex ? ACCENT : `${TEXT}33`,
                    }}
                    animate={{
                      scale: i === currentIndex ? 1.3 : 1,
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                ))}
              </div>
            </motion.div>
          ) : (
            // EXPANDED VIEW - Sub items floating in
            <motion.div
              key="expanded"
              className="w-full h-full flex"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Left side - Main tile (smaller, moved left) */}
              <motion.div
                className="w-1/3 flex items-center justify-center"
                initial={{ x: 0 }}
                animate={{ x: 0 }}
              >
                <FloatyTile
                  onClick={() => setSelectedSection(null)}
                  style={{
                    bg: selected?.bg,
                    textColor: selected?.textColor,
                  }}
                >
                  <motion.h2
                    className="text-3xl md:text-4xl font-black lowercase"
                    style={{
                      fontFamily: "var(--font-playfair), Georgia, serif",
                      textShadow: "0 3px 6px rgba(0,0,0,0.2)",
                    }}
                  >
                    {selected?.title}
                  </motion.h2>
                  <p className="text-sm mt-4 opacity-40">← back</p>
                </FloatyTile>
              </motion.div>

              {/* Right side - Floating sub-tiles */}
              <motion.div
                className="w-2/3 flex flex-wrap items-center justify-center gap-4 p-8"
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", stiffness: 80, damping: 20 }}
              >
                {selected?.subItems?.map((item, i) => (
                  <FloatyTile
                    key={item.name}
                    delay={i * 0.08}
                  >
                    <h3
                      className="text-xl md:text-2xl font-bold lowercase"
                      style={{
                        fontFamily: "var(--font-playfair), Georgia, serif",
                        color: ACCENT,
                        textShadow: "0 2px 4px rgba(0,0,0,0.15)",
                      }}
                    >
                      {item.name}
                    </h3>
                    <p
                      className="text-sm mt-2 opacity-60"
                      style={{ fontFamily: "var(--font-space), system-ui, sans-serif" }}
                    >
                      {item.desc}
                    </p>
                  </FloatyTile>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Scroll indicator - only show in main view */}
      {!selectedSection && (
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
      )}

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
