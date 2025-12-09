"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring, useMotionValue, useTransform, AnimatePresence } from "framer-motion";

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
      { name: "websites", desc: "fast, modern, beautiful" },
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

// Floaty tile with mouse-follow tilt and ambient animation
function FloatyTile({ 
  children, 
  delay = 0, 
  onClick,
  isMain = false,
  style = {},
  floatOffset = 0,
}: { 
  children: React.ReactNode;
  delay?: number;
  onClick?: () => void;
  isMain?: boolean;
  style?: any;
  floatOffset?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  
  // Mouse position for tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth spring for tilt
  const springConfig = { stiffness: 150, damping: 15, mass: 0.5 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);

  // Handle mouse move for tilt effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Random float parameters for organic feel
  const floatDuration = 4 + Math.random() * 2;
  const floatDelay = floatOffset * 0.5;

  return (
    <motion.div
      ref={ref}
      className={`rounded-3xl cursor-pointer ${isMain ? 'p-12 md:p-16' : 'p-6 md:p-8'}`}
      style={{
        backgroundColor: style.bg || BG,
        color: style.textColor || TEXT,
        boxShadow: "0 25px 50px rgba(0,0,0,0.2), 0 10px 20px rgba(0,0,0,0.1)",
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        transformPerspective: 1000,
        ...style,
      }}
      initial={{ 
        opacity: 0, 
        y: 80,
        scale: 0.9,
      }}
      animate={{ 
        opacity: 1, 
        y: [0, -10, 0], // Ambient floating
        scale: 1,
        transition: {
          opacity: { duration: 0.6, delay },
          scale: { duration: 0.6, delay, type: "spring", stiffness: 100 },
          y: { 
            duration: floatDuration, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: floatDelay,
          },
        }
      }}
      exit={{ 
        opacity: 0, 
        y: -50,
        scale: 0.9,
        transition: { duration: 0.3 }
      }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 35px 70px rgba(0,0,0,0.25), 0 15px 30px rgba(0,0,0,0.15)",
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }}
      whileTap={{ scale: 0.98 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      <div style={{ transform: "translateZ(20px)" }}>
        {children}
      </div>
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

  // Super smooth spring for scroll
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 30,
    damping: 25,
    restDelta: 0.0001,
  });

  // Update current index based on scroll
  useEffect(() => {
    const unsubscribe = smoothProgress.on("change", (v) => {
      const newIndex = Math.min(
        Math.floor(v * sections.length),
        sections.length - 1
      );
      if (newIndex !== currentIndex && !selectedSection) {
        setCurrentIndex(Math.max(0, newIndex));
      }
    });
    return () => unsubscribe();
  }, [currentIndex, selectedSection, smoothProgress]);

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
        {/* Subtle gradient */}
        <div 
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at 50% 50%, ${BG} 0%, #e8ddd0 100%)`,
          }}
        />
        {/* Noise texture */}
        <div
          className="absolute inset-0 pointer-events-none mix-blend-overlay"
          style={{
            opacity: 0.08,
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
            // MAIN VIEW - Center tile
            <motion.div
              key="main"
              className="flex flex-col items-center gap-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, x: -400, scale: 0.8, rotateY: -15 }}
              transition={{ type: "spring", stiffness: 80, damping: 20 }}
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
                    className="text-5xl md:text-7xl lg:text-8xl font-black lowercase text-center"
                    style={{
                      fontFamily: "var(--font-playfair), Georgia, serif",
                      textShadow: "0 4px 12px rgba(0,0,0,0.15)",
                    }}
                  >
                    {currentSection.title}
                  </motion.h1>
                  
                  {currentSection.subtitle && (
                    <motion.p
                      className="text-xl md:text-2xl mt-6 opacity-60 whitespace-pre-line text-center"
                      style={{ fontFamily: "var(--font-space), system-ui, sans-serif" }}
                    >
                      {currentSection.subtitle}
                    </motion.p>
                  )}

                  {currentSection.subItems && (
                    <motion.div
                      className="text-sm mt-8 opacity-40 text-center flex items-center justify-center gap-2"
                      animate={{ x: [0, 8, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <span>click to explore</span>
                      <span>→</span>
                    </motion.div>
                  )}
                </FloatyTile>
              </AnimatePresence>

              {/* Navigation dots */}
              <motion.div 
                className="flex gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {sections.map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 rounded-full cursor-pointer"
                    style={{
                      backgroundColor: i === currentIndex ? ACCENT : `${TEXT}33`,
                    }}
                    animate={{
                      scale: i === currentIndex ? 1.5 : 1,
                    }}
                    whileHover={{ scale: 1.5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                ))}
              </motion.div>
            </motion.div>
          ) : (
            // EXPANDED VIEW - Sub items floating in
            <motion.div
              key="expanded"
              className="w-full h-full flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Left side - Main tile (smaller) */}
              <motion.div
                className="w-1/4 flex items-center justify-center pl-8"
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.1 }}
              >
                <FloatyTile
                  onClick={() => setSelectedSection(null)}
                  style={{
                    bg: selected?.bg,
                    textColor: selected?.textColor,
                  }}
                >
                  <motion.h2
                    className="text-2xl md:text-3xl font-black lowercase"
                    style={{
                      fontFamily: "var(--font-playfair), Georgia, serif",
                      textShadow: "0 3px 6px rgba(0,0,0,0.15)",
                    }}
                  >
                    {selected?.title}
                  </motion.h2>
                  <p className="text-xs mt-4 opacity-40">← back</p>
                </FloatyTile>
              </motion.div>

              {/* Right side - Floating sub-tiles in a cloud formation */}
              <motion.div
                className="w-3/4 flex flex-wrap items-center justify-center gap-5 p-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {selected?.subItems?.map((item, i) => (
                  <FloatyTile
                    key={item.name}
                    delay={0.1 + i * 0.1}
                    floatOffset={i}
                  >
                    <h3
                      className="text-lg md:text-xl font-bold lowercase"
                      style={{
                        fontFamily: "var(--font-playfair), Georgia, serif",
                        color: ACCENT,
                        textShadow: "0 2px 4px rgba(0,0,0,0.1)",
                      }}
                    >
                      {item.name}
                    </h3>
                    <p
                      className="text-xs md:text-sm mt-2 opacity-60"
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

      {/* Scroll indicator */}
      {!selectedSection && (
        <motion.div
          className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ color: TEXT }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <div className="flex flex-col items-center gap-2 opacity-30">
            <span className="text-xs uppercase tracking-[0.2em]">scroll</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
