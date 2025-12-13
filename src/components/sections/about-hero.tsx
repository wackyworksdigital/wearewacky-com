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

export function AboutHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentLine, setCurrentLine] = useState(0);
  const [viewport, setViewport] = useState({ w: 0, h: 0 });
  const [videoAspect, setVideoAspect] = useState(16 / 9);
  
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

  const clamp = (min: number, v: number, max: number) => Math.min(max, Math.max(min, v));
  const vw = viewport.w;
  const vh = viewport.h;
  const isSmall = vw > 0 && vw < 900;
  const isPhone = vw > 0 && vw < 520;

  // "A" margin target after snap-to-center
  const gapA = vw > 0 ? clamp(24, vw * 0.05, 96) : 48;
  // "B" headroom: keep video at ~90% viewport height while right-stuck
  const maxH = vh > 0 ? vh * 0.9 : 0;

  // Frame sizing + alignment matches your rules:
  // - While frame width < viewport width: stick to right, keep height = 90vh
  // - Once frame would hit left edge: center and shrink with viewport (keep gaps A)
  // - On small screens: overflow both sides + move text above video
  let frameH = maxH;
  let frameW = maxH * videoAspect;
  let align: "right" | "center" = "right";

  if (vw > 0 && vh > 0) {
    if (isSmall) {
      // Small screens should look like iPad Air: gentle side crop, heads visible.
      // Phones get a touch more overflow (but not the extreme 140vw we had before).
      frameH = isPhone ? vh * 0.78 : vh * 0.82;
      frameW = isPhone ? vw * 1.22 : vw * 1.08;
      align = "center";
    } else {
      const widthLimitedH = (vw - 2 * gapA) / videoAspect;
      if (widthLimitedH < maxH) {
        frameH = clamp(320, widthLimitedH, maxH);
        frameW = frameH * videoAspect;
        align = "center";
      } else {
        frameH = maxH;
        frameW = frameH * videoAspect;
        align = "right";
      }
    }
  }

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

        {/* Stage shadow */}
        <div 
          className="fixed bottom-0 left-0 right-0 h-20 z-20 pointer-events-none"
          style={{
            background: "linear-gradient(to top, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)",
          }}
        />

        {/* Text ABOVE video on small (when it won't fit on chest) */}
        {isSmall && (
          <div
            className="fixed left-0 right-0 z-30 flex items-center justify-center pointer-events-none"
            style={{
              // Always sits between menu and video: anchored to the video height.
              bottom: frameH + clamp(12, vh * 0.02, 24),
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

        {/* Video frame: ALWAYS touches bottom of screen */}
        <div className="fixed bottom-0 left-0 right-0 z-10">
          <div className={`flex items-end ${align === "right" ? "justify-end" : "justify-center"}`}>
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
              {/* 
                Key to "legs on the floor":
                - The frame is pinned to bottom (via flex items-end + fixed bottom-0)
                - We crop inside the frame with object-fit cover + object-position bottom
              */}
              <video
                ref={videoRef}
                src="/our-agency-guys.webm"
                autoPlay
                loop
                muted
                playsInline
                onLoadedMetadata={() => {
                  const v = videoRef.current;
                  if (!v) return;
                  if (v.videoWidth && v.videoHeight) setVideoAspect(v.videoWidth / v.videoHeight);
                }}
                className="absolute inset-0 w-full h-full"
                style={{
                  objectFit: "cover",
                  objectPosition: "center bottom",
                  // Nudge down a touch (helps if the source has extra transparent/border at bottom).
                  transform: isSmall ? "translateY(0%)" : "translateY(2.5%)",
                  filter: "drop-shadow(0 20px 20px rgba(0,0,0,0.5)) drop-shadow(0 8px 8px rgba(0,0,0,0.4))",
                }}
              />

              {/* Text on chest when not small */}
              {!isSmall && (
                <div
                  className="absolute inset-x-0 flex items-center justify-center pointer-events-none"
                  style={{ top: "55%", transform: "translateY(-50%)", perspective: "1000px" }}
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
