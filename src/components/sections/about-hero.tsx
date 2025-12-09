"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";

// The rotating text lines - ONE AT A TIME, rotates in/out
const textLines = [
  { text: "OUR AGENCY", style: "title" },
  { text: "this is a real video of us", style: "subtitle" },
  { text: "not ai, i promise!", style: "subtitle" },
  { text: "i'm not lying, you're lying!", style: "subtitle" },
  { text: "no, you shut up!", style: "subtitle" },
];

// Menu items - same as homepage
const menuItems = [
  { name: "home", href: "/" },
  { name: "about", href: "/about" },
  { name: "services", href: "/services" },
  { name: "portfolio", href: "/portfolio" },
  { name: "contact", href: "/contact" },
];

const LOGO_COLORS = {
  cyan: "#00D2D3",
  purple: "#B07C4F", // warm accent for active/hover
  pink: "#EC4899",
};

const COLORS = {
  background: "#f5ebe0",
  text: "#3d3428",
};

function MenuNav({ textColor }: { textColor: string }) {
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
          const isActive = item.name === "about";
          
          let pushY = 0;
          if (isOtherHovered && hoveredIndex !== null) {
            const distance = index - hoveredIndex;
            pushY = distance < 0 ? -8 : 8;
          }
          
          return (
            <motion.li
              key={item.name}
              style={{ color: textColor }}
              animate={{
                y: pushY,
                scale: isHovered ? 1.12 : isOtherHovered ? 0.94 : 1,
                opacity: isHovered ? 1 : isOtherHovered ? 0.5 : 1,
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
                  color: isActive ? LOGO_COLORS.purple : textColor,
                  textShadow: "0 3px 4px rgba(0,0,0,0.3), 0 1px 2px rgba(0,0,0,0.2)",
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => {
                  // Set flag to skip intro animation when going home
                  if (item.name === "home") {
                    sessionStorage.setItem("skipHomeIntro", "true");
                  }
                }}
                animate={{
                  scale: isHovered ? 1.12 : 1,
                  x: isHovered ? 10 : isActive ? 6 : 0,
                  y: isHovered ? -4 : 0,
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

export function AboutHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentLine, setCurrentLine] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth spring for scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Calculate current text index based on scroll progress
  useEffect(() => {
    return smoothProgress.on("change", (v) => {
      // Map scroll progress to line index (0-4)
      if (v < 0.2) setCurrentLine(0);
      else if (v < 0.4) setCurrentLine(1);
      else if (v < 0.6) setCurrentLine(2);
      else if (v < 0.8) setCurrentLine(3);
      else setCurrentLine(4);
    });
  }, [smoothProgress]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.play().catch(() => {});
  }, []);

  // Get text style - WHITE, chunky fonts
  const getTextStyle = (style: string) => {
    switch (style) {
      case "title":
        return {
          className: "text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight",
        };
      default:
        return {
          className: "text-2xl md:text-4xl lg:text-5xl font-bold",
        };
    }
  };

  const currentText = textLines[currentLine];
  const { className } = getTextStyle(currentText.style);

  return (
    <div ref={containerRef} className="relative" style={{ height: "300vh" }}>
      <div className="fixed inset-0 overflow-hidden" style={{ backgroundColor: COLORS.background }}>
        {/* Noise texture */}
        <div 
          className="absolute inset-0 pointer-events-none z-[100] mix-blend-overlay"
          style={{
            opacity: 0.15,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
        
        {/* Vignette */}
        <div 
          className="absolute inset-0 pointer-events-none z-[99]"
          style={{ background: "radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(0,0,0,0.08) 100%)" }}
        />

        <MenuNav textColor={COLORS.text} />

        {/* Container for Video AND Text - Anchored Bottom Right */}
        <motion.div
          className="fixed bottom-0 right-0 z-10 origin-bottom-right"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            height: "100vh",
            aspectRatio: "16/9", // Force container to match video ratio
            marginRight: "-5vw", // Push right
          }}
        >
          {/* Relative wrapper to contain both video and text */}
          <div className="relative w-full h-full flex items-end">
            <video
              ref={videoRef}
              className="w-full h-full object-contain pointer-events-auto"
              src="/our-agency-guys.webm"
              autoPlay
              loop
              muted
              playsInline
              style={{
                filter: "drop-shadow(0 20px 20px rgba(0,0,0,0.5)) drop-shadow(0 8px 8px rgba(0,0,0,0.4))",
              }}
            />

            {/* Text - Centered ABSOLUTELY within this 16:9 container */}
            <div 
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              style={{ 
                top: "15%", // Push down to chest level
                perspective: "1000px" 
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentLine}
                  initial={{ 
                    opacity: 0, 
                    rotateX: 90,
                    y: 30,
                  }}
                  animate={{ 
                    opacity: 1, 
                    rotateX: 0,
                    y: 0,
                  }}
                  exit={{ 
                    opacity: 0, 
                    rotateX: -90,
                    y: -30,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 20,
                    mass: 0.8,
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <h2
                    className={`${className} text-center px-4`}
                    style={{
                      color: "#F7F4ED",
                      textShadow: "0 6px 8px rgba(0,0,0,0.5), 0 3px 3px rgba(0,0,0,0.4)",
                      fontFamily: "var(--font-space), Impact, sans-serif",
                    }}
                  >
                    {currentText.text}
                  </h2>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          className="fixed bottom-4 left-1/2 -translate-x-1/2 z-30 pointer-events-none"
          animate={{ opacity: currentLine < 4 ? 0.6 : 0 }}
        >
          <motion.div
            className="flex flex-col items-center gap-1"
            style={{ color: COLORS.text }}
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-[10px] uppercase tracking-widest opacity-60">Scroll</span>
            <svg className="w-4 h-4 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
