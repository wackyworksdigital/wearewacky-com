"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useMotionValue, useTransform } from "framer-motion";

const BG = "#2d2a26"; // Dark background
const TILE_LIGHT = "#f5ebe0"; // Light tiles
const TILE_DARK = "#3d3428"; // Dark tiles (first & last)
const TEXT_DARK = "#3d3428";
const TEXT_LIGHT = "#f5ebe0";
const ACCENT = "#B07C4F";

// All sections
const sections = [
  { id: "intro", title: "we build.", inverted: true },
  { id: "services", title: "services" },
  { id: "about", title: "about" },
  { id: "portfolio", title: "portfolio" },
  { id: "contact", title: "contact" },
  { id: "outro", title: "WACKY WORKS", subtitle: "we're not for everyone.\nand that's the point.", inverted: true },
];

// 3D Badge Tile with dynamic shadows
function BadgeTile({ 
  title,
  subtitle,
  inverted = false,
  index,
}: { 
  title: string;
  subtitle?: string;
  inverted?: boolean;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  
  // Mouse position for tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth spring for tilt
  const springConfig = { stiffness: 150, damping: 15, mass: 0.5 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), springConfig);
  
  // Dynamic text shadow based on tilt
  const textShadowX = useTransform(mouseX, [-0.5, 0.5], [8, -8]);
  const textShadowY = useTransform(mouseY, [-0.5, 0.5], [8, -8]);

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

  // Colors based on inverted
  const tileBg = inverted ? TILE_DARK : TILE_LIGHT;
  const textColor = inverted ? TEXT_LIGHT : TEXT_DARK;
  
  // Random float timing for organic feel
  const floatDuration = 3.5 + index * 0.3;
  const floatDelay = index * 0.2;

  return (
    <motion.div
      ref={ref}
      className="relative cursor-pointer"
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        transformPerspective: 1200,
      }}
      initial={{ 
        opacity: 0, 
        y: 60,
        scale: 0.9,
      }}
      animate={{ 
        opacity: 1, 
        y: [0, -8, 0],
        scale: 1,
        transition: {
          opacity: { duration: 0.8, delay: index * 0.15 },
          scale: { duration: 0.8, delay: index * 0.15, type: "spring", stiffness: 80 },
          y: { 
            duration: floatDuration, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: floatDelay,
          },
        }
      }}
      whileHover={{ 
        scale: 1.08,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }}
      whileTap={{ scale: 0.98 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Badge/Buckle shape - outer rim */}
      <div
        className="rounded-[2rem] p-[3px]"
        style={{
          background: inverted 
            ? `linear-gradient(145deg, #5a5248 0%, #2a2722 50%, #1a1816 100%)`
            : `linear-gradient(145deg, #fff 0%, #e8ddd0 50%, #c9bba8 100%)`,
          boxShadow: `
            0 20px 40px rgba(0,0,0,0.4),
            0 10px 20px rgba(0,0,0,0.3),
            inset 0 1px 0 rgba(255,255,255,${inverted ? 0.1 : 0.5}),
            inset 0 -1px 0 rgba(0,0,0,0.2)
          `,
        }}
      >
        {/* Inner convex surface */}
        <div
          className="rounded-[1.8rem] px-12 py-10 md:px-16 md:py-12"
          style={{
            background: inverted
              ? `linear-gradient(165deg, #4a4540 0%, ${tileBg} 40%, #2d2a26 100%)`
              : `linear-gradient(165deg, #fff 0%, ${tileBg} 40%, #e0d5c8 100%)`,
            boxShadow: inverted
              ? `inset 0 2px 4px rgba(255,255,255,0.1), inset 0 -2px 4px rgba(0,0,0,0.3)`
              : `inset 0 2px 4px rgba(255,255,255,0.8), inset 0 -2px 4px rgba(0,0,0,0.1)`,
          }}
        >
          {/* Text with dynamic shadow */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-black lowercase text-center"
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              color: textColor,
              textShadow: useTransform(
                [textShadowX, textShadowY],
                ([x, y]) => `${x}px ${y}px 12px rgba(0,0,0,${inverted ? 0.5 : 0.25}), 0 2px 4px rgba(0,0,0,${inverted ? 0.3 : 0.15})`
              ),
              transform: "translateZ(30px)",
            }}
          >
            {title}
          </motion.h1>
          
          {subtitle && (
            <motion.p
              className="text-lg md:text-xl mt-6 opacity-70 whitespace-pre-line text-center"
              style={{ 
                fontFamily: "var(--font-space), system-ui, sans-serif",
                color: textColor,
                textShadow: useTransform(
                  [textShadowX, textShadowY],
                  ([x, y]) => `${Number(x) * 0.5}px ${Number(y) * 0.5}px 6px rgba(0,0,0,0.2)`
                ),
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
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
  });

  return (
    <div 
      ref={containerRef} 
      className="relative min-h-screen"
      style={{ backgroundColor: BG }}
    >
      {/* Subtle gradient background */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 30%, #3d3830 0%, ${BG} 70%)`,
        }}
      />
      
      {/* Noise texture */}
      <div
        className="fixed inset-0 pointer-events-none mix-blend-overlay"
        style={{
          opacity: 0.06,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* All tiles stacked */}
      <div 
        className="relative z-10 flex flex-col items-center gap-8 py-20 px-6"
        style={{ perspective: "1500px" }}
      >
        {sections.map((section, index) => (
          <BadgeTile
            key={section.id}
            title={section.title}
            subtitle={section.subtitle}
            inverted={section.inverted}
            index={index}
          />
        ))}
      </div>

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
