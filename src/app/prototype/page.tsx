"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring, useMotionValue, useTransform, AnimatePresence } from "framer-motion";

const BG = "#e8ddd0";
const TILE_LIGHT = "#f5ebe0";
const TILE_DARK = "#3d3428";
const TEXT_DARK = "#3d3428";
const TEXT_LIGHT = "#f5ebe0";
const ACCENT = "#B07C4F";

// All sections
const sections = [
  { id: "intro", title: "we build.", inverted: true },
  { id: "services", title: "services", inverted: false },
  { id: "about", title: "about", inverted: false },
  { id: "portfolio", title: "portfolio", inverted: false },
  { id: "contact", title: "contact", inverted: false },
  { id: "outro", title: "WACKY WORKS DIGITAL", subtitle: "we're not for everyone.\nand that's the point.", inverted: true },
];

// Credit card shaped tile with tilt
function CreditCardTile({ 
  title,
  subtitle,
  inverted = false,
  isActive,
  position, // 'top', 'underneath', 'exited'
}: { 
  title: string;
  subtitle?: string;
  inverted?: boolean;
  isActive: boolean;
  position: 'top' | 'underneath' | 'exited';
}) {
  const ref = useRef<HTMLDivElement>(null);
  
  // Mouse position for tilt (only when active)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { stiffness: 200, damping: 20, mass: 0.5 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);
  
  // Dynamic text shadow
  const textShadowX = useTransform(mouseX, [-0.5, 0.5], [5, -5]);
  const textShadowY = useTransform(mouseY, [-0.5, 0.5], [5, -5]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || !isActive) return;
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

  const tileBg = inverted ? TILE_DARK : TILE_LIGHT;
  const textColor = inverted ? TEXT_LIGHT : TEXT_DARK;

  // Animation variants based on position
  const variants = {
    top: {
      y: 0,
      scale: 1,
      rotateX: 0,
      opacity: 1,
      zIndex: 10,
    },
    underneath: {
      y: 20,
      scale: 0.95,
      rotateX: 0,
      opacity: 0.5,
      zIndex: 1,
    },
    exited: {
      y: -400,
      scale: 0.9,
      rotateX: -20,
      opacity: 0,
      zIndex: 0,
    },
  };

  return (
    <motion.div
      ref={ref}
      className="absolute inset-0 flex items-center justify-center cursor-pointer"
      style={{
        rotateX: isActive ? rotateX : 0,
        rotateY: isActive ? rotateY : 0,
        transformStyle: "preserve-3d",
        transformPerspective: 1200,
      }}
      variants={variants}
      initial="underneath"
      animate={position}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 0.8,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Credit card shape */}
      <div
        className="rounded-2xl p-[3px]"
        style={{
          width: "min(600px, 85vw)",
          aspectRatio: "1.6 / 1", // Credit card ratio
          background: inverted 
            ? `linear-gradient(145deg, #5a5248 0%, #2a2722 50%, #1a1816 100%)`
            : `linear-gradient(145deg, #fff 0%, #e8ddd0 50%, #c9bba8 100%)`,
          boxShadow: isActive
            ? `0 25px 50px rgba(0,0,0,0.3), 0 10px 20px rgba(0,0,0,0.2)`
            : `0 10px 30px rgba(0,0,0,0.2)`,
        }}
      >
        {/* Inner surface */}
        <div
          className="w-full h-full rounded-xl flex flex-col items-center justify-center px-8"
          style={{
            background: inverted
              ? `linear-gradient(165deg, #4a4540 0%, ${tileBg} 35%, #2d2a26 100%)`
              : `linear-gradient(165deg, #fff 0%, ${tileBg} 35%, #e0d5c8 100%)`,
            boxShadow: inverted
              ? `inset 0 2px 4px rgba(255,255,255,0.08), inset 0 -2px 4px rgba(0,0,0,0.2)`
              : `inset 0 2px 4px rgba(255,255,255,0.7), inset 0 -2px 4px rgba(0,0,0,0.08)`,
          }}
        >
          <motion.h1
            className={`font-black lowercase text-center ${subtitle ? 'text-3xl md:text-4xl lg:text-5xl' : 'text-4xl md:text-5xl lg:text-6xl'}`}
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              color: textColor,
              textShadow: isActive 
                ? useTransform(
                    [textShadowX, textShadowY],
                    ([x, y]) => `${x}px ${y}px 10px rgba(0,0,0,${inverted ? 0.4 : 0.2})`
                  )
                : `0 3px 6px rgba(0,0,0,${inverted ? 0.3 : 0.15})`,
              transform: "translateZ(30px)",
            }}
          >
            {title}
          </motion.h1>
          
          {subtitle && (
            <motion.p
              className="text-base md:text-lg lg:text-xl mt-4 opacity-70 whitespace-pre-line text-center"
              style={{ 
                fontFamily: "var(--font-space), system-ui, sans-serif",
                color: textColor,
                transform: "translateZ(20px)",
              }}
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function PrototypePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
  });

  // Update current card based on scroll
  useEffect(() => {
    const unsubscribe = smoothProgress.on("change", (v) => {
      const newIndex = Math.min(
        Math.floor(v * sections.length),
        sections.length - 1
      );
      setCurrentIndex(Math.max(0, newIndex));
    });
    return () => unsubscribe();
  }, [smoothProgress]);

  return (
    <div 
      ref={containerRef}
      className="relative"
      style={{ 
        height: `${sections.length * 100}vh`,
        backgroundColor: BG,
      }}
    >
      {/* Background */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 40%, #f0e6da 0%, ${BG} 70%)`,
        }}
      />
      
      {/* Noise */}
      <div
        className="fixed inset-0 pointer-events-none mix-blend-overlay"
        style={{
          opacity: 0.04,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Card deck - fixed in center */}
      <div 
        className="fixed inset-0 z-10"
        style={{ perspective: "1500px" }}
      >
        {sections.map((section, index) => {
          let position: 'top' | 'underneath' | 'exited';
          if (index < currentIndex) {
            position = 'exited';
          } else if (index === currentIndex) {
            position = 'top';
          } else {
            position = 'underneath';
          }

          return (
            <CreditCardTile
              key={section.id}
              title={section.title}
              subtitle={section.subtitle}
              inverted={section.inverted}
              isActive={index === currentIndex}
              position={position}
            />
          );
        })}
      </div>

      {/* Progress indicator - small dots */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex gap-2">
        {sections.map((_, i) => (
          <div
            key={i}
            className="w-2 h-2 rounded-full transition-all duration-300"
            style={{
              backgroundColor: i === currentIndex ? ACCENT : `${TEXT_DARK}33`,
              transform: i === currentIndex ? 'scale(1.3)' : 'scale(1)',
            }}
          />
        ))}
      </div>

      {/* Scroll hint */}
      {currentIndex === 0 && (
        <motion.div
          className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4, y: [0, 8, 0] }}
          transition={{ 
            opacity: { delay: 1 },
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
          style={{ color: TEXT_DARK }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      )}
    </div>
  );
}
