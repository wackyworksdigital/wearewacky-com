"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { FluidMenu } from "@/components/ui/fluid-menu";

// The rotating text lines
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

  const currentText = textLines[currentLine];
  const isTitle = currentText.style === "title";

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

        {/* Bottom shadow - stage effect */}
        <div 
          className="fixed bottom-0 left-0 right-0 h-20 z-20 pointer-events-none"
          style={{
            background: "linear-gradient(to top, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)",
          }}
        />

        {/* 
          ═══════════════════════════════════════════════════════════════
          TEXT - ABOVE VIDEO (for small screens where it won't fit on video)
          Shows on screens < 900px width
          ═══════════════════════════════════════════════════════════════
        */}
        <div 
          className="fixed z-30 left-0 right-0 flex items-center justify-center pointer-events-none
                     block max-[899px]:block min-[900px]:hidden"
          style={{ 
            top: "35%",
            perspective: "1000px" 
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
                  textShadow: "0 2px 4px rgba(0,0,0,0.1)",
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

        {/* 
          ═══════════════════════════════════════════════════════════════
          VIDEO CONTAINER
          
          PHASE 1 (wide screens, min-width 1200px):
            - Height: 90vh
            - Position: RIGHT-ALIGNED (right: 0)
            - Left margin "A" exists naturally
          
          PHASE 2 (medium screens, 900px - 1200px):
            - Video touches both edges, CENTERED
            - Starts scaling down
          
          PHASE 3 (small screens, < 900px):
            - Video OVERFLOWS on both sides (centered)
            - Heads visible, shoulders can cut off
            - Text moves ABOVE video
          ═══════════════════════════════════════════════════════════════
        */}
        <motion.div
          className="fixed bottom-0 z-10
                     max-[899px]:left-1/2 max-[899px]:-translate-x-1/2
                     min-[900px]:left-1/2 min-[900px]:-translate-x-1/2
                     min-[1200px]:left-auto min-[1200px]:translate-x-0 min-[1200px]:right-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative">
            <video
              ref={videoRef}
              src="/our-agency-guys.webm"
              autoPlay
              loop
              muted
              playsInline
              className="
                h-[90vh] w-auto
                
                max-[599px]:h-[50vh] max-[599px]:min-w-[150vw]
                min-[600px]:max-[899px]:h-[55vh] min-[600px]:max-[899px]:min-w-[130vw]
                min-[900px]:max-[1199px]:h-[80vh]
                min-[1200px]:h-[90vh]
              "
              style={{
                filter: "drop-shadow(0 20px 20px rgba(0,0,0,0.5)) drop-shadow(0 8px 8px rgba(0,0,0,0.4))",
              }}
            />

            {/* 
              TEXT ON VIDEO (for large screens where text fits on chest)
              Shows on screens >= 900px width
            */}
            <div 
              className="absolute inset-x-0 items-center justify-center pointer-events-none
                         hidden min-[900px]:flex"
              style={{ 
                top: "55%",
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
                      ${isTitle ? "text-5xl md:text-6xl lg:text-7xl xl:text-8xl" : "text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold"}`}
                    style={{
                      color: "#F7F4ED",
                      textShadow: "0 4px 12px rgba(0,0,0,0.6), 0 2px 4px rgba(0,0,0,0.4), 0 0 40px rgba(0,0,0,0.3)",
                      fontFamily: "var(--font-archivo), var(--font-bebas), Impact, sans-serif",
                      WebkitTextStroke: "1px rgba(0,0,0,0.1)",
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
      </div>
    </div>
  );
}
