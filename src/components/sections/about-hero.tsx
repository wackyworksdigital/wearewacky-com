"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { FluidMenu } from "@/components/ui/fluid-menu";

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

// Smooth interpolation helper
function lerp(start: number, end: number, t: number) {
  return start + (end - start) * t;
}

// Clamp value between min and max
function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function AboutHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentLine, setCurrentLine] = useState(0);
  const [viewport, setViewport] = useState({ w: 0, h: 0 });
  // Video is 1920x1080 = 16:9
  const videoAspect = 16 / 9;
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    return smoothProgress.on("change", (v) => {
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

  useEffect(() => {
    const update = () => setViewport({ w: window.innerWidth, h: window.innerHeight });
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const currentText = textLines[currentLine];
  const isTitle = currentText.style === "title";

  const vw = viewport.w;
  const vh = viewport.h;
  
  // SMOOTH DYNAMIC HEIGHT CALCULATION
  // Key points:
  // - <700px: 40vh (mobile)
  // - 700-1200px: interpolate from 45vh to 95vh (tablet starts small like mobile)
  // - >=1200px: 95vh (desktop)
  
  let frameH = 0;
  if (vw < 700) {
    // Mobile range: 40vh
    frameH = vh * 0.40;
  } else if (vw < 1200) {
    // Tablet range: smoothly interpolate from 45vh to 95vh
    // This keeps iPad closer to mobile size
    const t = (vw - 700) / (1200 - 700); // 0 at 700px, 1 at 1200px
    const heightPercent = lerp(0.45, 0.95, t);
    frameH = vh * heightPercent;
  } else {
    // Desktop: 95vh
    frameH = vh * 0.95;
  }

  // WIDTH from aspect ratio
  const frameW = frameH * videoAspect;

  // TEXT POSITION
  // Mobile (<700px): Text ABOVE video
  // Tablet/Desktop (>=700px): Text ON video
  const textAbove = vw < 700;
  
  // Calculate safe top position for text when above video
  const videoTopY = vh - frameH;
  const textTopPosition = Math.max(100, videoTopY - 50);

  // TEXT VERTICAL POSITION ON VIDEO (dynamic)
  // Smoothly transition from 62% to 62% (keep consistent for now)
  const textTopPercent = "62%";

  // DESKTOP ALIGNMENT
  const isWide = vw >= 1200;

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
        
        <div 
          className="absolute inset-0 pointer-events-none z-[99]"
          style={{ background: "radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(0,0,0,0.08) 100%)" }}
        />

        <FluidMenu activePage="about" />

        {/* Text ABOVE video (Mobile only) */}
        {textAbove && (
          <div
            className="fixed left-0 right-0 z-30 flex items-center justify-center pointer-events-none"
            style={{
              top: textTopPosition,
              perspective: "1000px",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={`above-${currentLine}`}
                initial={{ opacity: 0, rotateX: 90, y: 30 }}
                animate={{ opacity: 1, rotateX: 0, y: 0 }}
                exit={{ opacity: 0, rotateX: -90, y: -30 }}
                transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.8 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.h2
                  className={`text-center px-4 font-black uppercase tracking-tight
                    ${isTitle ? "text-4xl sm:text-5xl" : "text-xl sm:text-2xl font-bold"}`}
                  style={{
                    color: COLORS.text,
                    textShadow: "0 2px 4px rgba(0,0,0,0.12)",
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
        )}

        {/* VIDEO CONTAINER */}
        <div className="fixed bottom-0 left-0 right-0 z-10">
          <div 
            className="flex items-end w-full h-full"
            style={{
              justifyContent: isWide ? "flex-end" : "center"
            }}
          >
            <motion.div
              className="relative overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{
                width: frameW,
                height: frameH,
              }}
            >
              <video
                ref={videoRef}
                src="/our-agency-guys.webm"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full"
                style={{
                  objectFit: "cover",
                  objectPosition: "center bottom",
                  filter: "drop-shadow(0 20px 20px rgba(0,0,0,0.5)) drop-shadow(0 8px 8px rgba(0,0,0,0.4))",
                }}
              />

              {/* Text ON video (Tablet/Desktop) */}
              {!textAbove && (
                <div
                  className="absolute inset-x-0 flex items-center justify-center pointer-events-none"
                  style={{ 
                    top: textTopPercent, 
                    transform: "translateY(-50%)", 
                    perspective: "1000px" 
                  }}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`overlay-${currentLine}`}
                      initial={{ opacity: 0, rotateX: 90, y: 30 }}
                      animate={{ opacity: 1, rotateX: 0, y: 0 }}
                      exit={{ opacity: 0, rotateX: -90, y: -30 }}
                      transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.8 }}
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <motion.h2
                        className={`text-center px-4 font-black uppercase tracking-tight whitespace-nowrap
                          ${isTitle ? "text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl" : "text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold"}`}
                        style={{
                          color: "#F7F4ED",
                          textShadow: "0 4px 12px rgba(0,0,0,0.6), 0 2px 4px rgba(0,0,0,0.4), 0 0 40px rgba(0,0,0,0.3)",
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
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
