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
          VIDEO CONTAINER - positioned at bottom center
          
          Desktop (xl+): Video has side gaps "A", height 85vh
          Tablet/Mobile: Video fills width and overflows, staying at bottom
          
          The TEXT is INSIDE this container, positioned relative to the video!
        */}
        <div className="fixed bottom-0 left-0 right-0 z-10 flex justify-center items-end">
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              // Height scales with viewport
              height: "clamp(55vh, 70vh, 85vh)",
            }}
          >
            {/* 
              VIDEO element
              - Uses aspect-ratio to maintain proportions
              - On desktop: constrained by max-width to create side gaps
              - On mobile: wider than screen, overflows
            */}
            <video
              ref={videoRef}
              className={[
                "h-full w-auto",
                // Mobile: big and overflowing
                "min-w-[140vw]",
                // Tablet: slightly less overflow
                "sm:min-w-[120vw]",
                // Desktop: constrained to create gaps A
                "lg:min-w-0 lg:max-w-[calc(100vw-8rem)]",
                "xl:max-w-[calc(100vw-12rem)]",
              ].join(" ")}
              src="/our-agency-guys.webm"
              autoPlay
              loop
              muted
              playsInline
              style={{
                filter: "drop-shadow(0 20px 20px rgba(0,0,0,0.5)) drop-shadow(0 8px 8px rgba(0,0,0,0.4))",
              }}
            />

            {/* 
              TEXT - INSIDE the video container
              Positioned at 55% from top = chest area (below faces, above waist)
              This means text moves WITH the video!
            */}
            <div 
              className="absolute inset-x-0 flex items-center justify-center pointer-events-none"
              style={{ 
                top: "55%", // Chest level - the green zone in your diagram
                transform: "translateY(-50%)",
                perspective: "1000px" 
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentLine}
                  initial={{ opacity: 0, rotateX: 90, y: 30 }}
                  animate={{ opacity: 1, rotateX: 0, y: 0 }}
                  exit={{ opacity: 0, rotateX: -90, y: -30 }}
                  transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.8 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <motion.h2
                    className={`text-center px-4 font-black uppercase tracking-tight whitespace-nowrap
                      ${isTitle ? "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl" : "text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold"}`}
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
          </motion.div>
        </div>
      </div>
    </div>
  );
}
