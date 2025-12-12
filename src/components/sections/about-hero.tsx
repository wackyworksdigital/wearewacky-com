"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { FluidMenu } from "@/components/ui/fluid-menu";

// The rotating text lines - ONE AT A TIME, rotates in/out
const textLines = [
  { text: "OUR AGENCY", style: "title" },
  { text: "this is a real video of us", style: "subtitle" },
  { text: "not ai, i promise!", style: "subtitle" },
  { text: "i'm not lying, you're lying!", style: "subtitle" },
  { text: "no, you shut up!", style: "subtitle" },
];

const COLORS = {
  background: "#f5ebe0",
  text: "#3d3428",
};

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

        <FluidMenu activePage="about" />

        {/* MOBILE: Text separate, above video */}
        <div 
          className="fixed z-20 left-0 right-0 flex items-center justify-center pointer-events-none md:hidden"
          style={{ 
            top: "45%", // Middle of screen, closer to video than menu
            perspective: "1000px" 
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={`mobile-${currentLine}`}
              initial={{ opacity: 0, rotateX: 90, y: 30 }}
              animate={{ opacity: 1, rotateX: 0, y: 0 }}
              exit={{ opacity: 0, rotateX: -90, y: -30 }}
              transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.8 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.h2
                className={`${className} text-center px-4`}
                style={{
                  color: COLORS.text,
                  textShadow: "0 4px 6px rgba(0,0,0,0.2), 0 2px 3px rgba(0,0,0,0.15)",
                  fontFamily: "var(--font-archivo), var(--font-bebas), Impact, sans-serif",
                }}
              >
                {currentText.text}
              </motion.h2>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Video container */}
        {/* MOBILE & TABLET: bottom, full width, touches edges */}
        {/* DESKTOP: bottom-right anchored */}
        <motion.div
          className="fixed z-10 bottom-0
            left-1/2 -translate-x-1/2 w-[150vw] max-h-[50vh]
            md:w-[120vw] md:max-h-[55vh]
            lg:left-auto lg:translate-x-0 lg:right-0 lg:w-auto lg:max-h-none lg:h-screen"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Video + text wrapper */}
          <div className="relative h-full w-full flex items-end justify-center lg:justify-end">
            <video
              ref={videoRef}
              className="w-full h-full object-cover object-top pointer-events-auto 
                lg:h-[85vh] lg:w-auto lg:object-contain"
              src="/our-agency-guys.webm"
              autoPlay
              loop
              muted
              playsInline
              style={{
                filter: "drop-shadow(0 20px 20px rgba(0,0,0,0.5)) drop-shadow(0 8px 8px rgba(0,0,0,0.4))",
              }}
            />
            
            {/* Text overlay - INSIDE video (tablet & desktop only) */}
            {/* Same position on chest for both tablet and desktop */}
            <div 
              className="absolute inset-0 hidden md:flex items-center justify-center pointer-events-none
                top-[35%]"
              style={{ perspective: "1000px" }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentLine}
                  initial={{ opacity: 0, rotateX: 90, y: 30 }}
                  animate={{ opacity: 1, rotateX: 0, y: 0 }}
                  exit={{ opacity: 0, rotateX: -90, y: -30 }}
                  transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 20,
                    mass: 0.8,
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <motion.h2
                    className={`${className} text-center px-4`}
                    style={{
                      color: "#F7F4ED",
                      textShadow: "0 6px 8px rgba(0,0,0,0.5), 0 3px 3px rgba(0,0,0,0.4)",
                      fontFamily: "var(--font-archivo), var(--font-bebas), Impact, sans-serif",
                    }}
                    animate={{ scale: [1, 1.01, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    {currentText.text}
                  </motion.h2>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Scroll hint - hidden on mobile/tablet */}
        <motion.div
          className="fixed bottom-4 left-1/2 -translate-x-1/2 z-30 pointer-events-none hidden lg:block"
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
