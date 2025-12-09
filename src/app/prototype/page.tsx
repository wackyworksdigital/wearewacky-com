"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const BG = "#f5ebe0";
const TEXT = "#3d3428";
const ACCENT = "#B07C4F";

// Layer content
const layers = [
  {
    id: "intro",
    title: "we build.",
    subtitle: null,
    bg: "#3d3428",
    textColor: "#f5ebe0",
  },
  {
    id: "services",
    title: "services",
    subtitle: "ai agents • automations • websites • apps • video • graphics",
    bg: BG,
    textColor: TEXT,
  },
  {
    id: "about",
    title: "our team",
    subtitle: "definitely real humans. not AI. we promise.",
    bg: BG,
    textColor: TEXT,
  },
  {
    id: "portfolio",
    title: "portfolio",
    subtitle: "things we've done • things we're doing • things we'll do",
    bg: BG,
    textColor: TEXT,
  },
  {
    id: "contact",
    title: "let's talk",
    subtitle: "hello@wearewacky.com",
    bg: BG,
    textColor: TEXT,
  },
  {
    id: "outro",
    title: "WACKY WORKS DIGITAL",
    subtitle: "we're not for everyone.\nand that's the point.",
    bg: "#3d3428",
    textColor: "#f5ebe0",
  },
];

function Layer({ 
  layer, 
  index, 
  scrollYProgress 
}: { 
  layer: typeof layers[0]; 
  index: number;
  scrollYProgress: any;
}) {
  // Each layer has different parallax speed
  const layerStart = index / layers.length;
  const layerEnd = (index + 1) / layers.length;
  
  // Y position - starts below, moves up and past
  const y = useTransform(
    scrollYProgress,
    [layerStart - 0.2, layerStart, layerEnd, layerEnd + 0.2],
    ["100vh", "0vh", "0vh", "-100vh"]
  );
  
  // Scale - subtle zoom as it comes into view
  const scale = useTransform(
    scrollYProgress,
    [layerStart - 0.1, layerStart, layerEnd, layerEnd + 0.1],
    [0.9, 1, 1, 1.1]
  );
  
  // Opacity
  const opacity = useTransform(
    scrollYProgress,
    [layerStart - 0.1, layerStart, layerEnd, layerEnd + 0.1],
    [0, 1, 1, 0]
  );
  
  // Z position for 3D depth
  const z = useTransform(
    scrollYProgress,
    [layerStart, layerEnd],
    [0, 100]
  );

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center"
      style={{
        y,
        scale,
        opacity,
        zIndex: layers.length - index,
        perspective: "1000px",
      }}
    >
      <motion.div
        className="w-[90vw] max-w-5xl rounded-3xl p-16 md:p-24"
        style={{
          backgroundColor: layer.bg,
          color: layer.textColor,
          boxShadow: "0 50px 100px rgba(0,0,0,0.3), 0 20px 40px rgba(0,0,0,0.2)",
          transformStyle: "preserve-3d",
          transform: `translateZ(${index * -50}px)`,
        }}
      >
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-black lowercase mb-6"
          style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            textShadow: "0 4px 8px rgba(0,0,0,0.2)",
          }}
        >
          {layer.title}
        </motion.h1>
        
        {layer.subtitle && (
          <motion.p
            className="text-xl md:text-2xl opacity-70 whitespace-pre-line"
            style={{
              fontFamily: "var(--font-space), system-ui, sans-serif",
            }}
          >
            {layer.subtitle}
          </motion.p>
        )}
      </motion.div>
    </motion.div>
  );
}

export default function PrototypePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div 
      ref={containerRef} 
      className="relative"
      style={{ 
        height: `${layers.length * 100}vh`,
        backgroundColor: BG,
      }}
    >
      {/* Fixed background */}
      <div 
        className="fixed inset-0"
        style={{ 
          backgroundColor: BG,
          perspective: "1200px",
          perspectiveOrigin: "50% 50%",
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

      {/* 3D Layers */}
      {layers.map((layer, index) => (
        <Layer
          key={layer.id}
          layer={layer}
          index={index}
          scrollYProgress={scrollYProgress}
        />
      ))}

      {/* Scroll indicator */}
      <motion.div
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ color: TEXT }}
      >
        <div className="flex flex-col items-center gap-2 opacity-50">
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
          scaleX: scrollYProgress,
        }}
      />
    </div>
  );
}

