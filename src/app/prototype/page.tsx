"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const BG = "#e8ddd0"; // Lighter warm background
const TILE_LIGHT = "#f5ebe0";
const TILE_DARK = "#3d3428";
const TEXT_DARK = "#3d3428";
const TEXT_LIGHT = "#f5ebe0";
const ACCENT = "#B07C4F";

// All sections - same structure
const sections = [
  { id: "intro", title: "we build.", inverted: true },
  { id: "services", title: "services", inverted: false },
  { id: "about", title: "about", inverted: false },
  { id: "portfolio", title: "portfolio", inverted: false },
  { id: "contact", title: "contact", inverted: false },
  { id: "outro", title: "WACKY WORKS DIGITAL", subtitle: "we're not for everyone.\nand that's the point.", inverted: true },
];

// Card tile with 3D tilt and dynamic shadows
function CardTile({ 
  title,
  subtitle,
  inverted = false,
  index,
  totalCards,
}: { 
  title: string;
  subtitle?: string;
  inverted?: boolean;
  index: number;
  totalCards: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  
  // Mouse position for tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth spring for tilt
  const springConfig = { stiffness: 200, damping: 20, mass: 0.5 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig);
  
  // Dynamic text shadow based on tilt
  const textShadowX = useTransform(mouseX, [-0.5, 0.5], [6, -6]);
  const textShadowY = useTransform(mouseY, [-0.5, 0.5], [6, -6]);

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

  // Colors
  const tileBg = inverted ? TILE_DARK : TILE_LIGHT;
  const textColor = inverted ? TEXT_LIGHT : TEXT_DARK;
  
  // Stagger for organic floating
  const floatDuration = 3 + index * 0.4;
  const floatDelay = index * 0.3;
  
  // Stack offset - each card peeks out ~60px from the one above
  const stackOffset = index * 60;

  return (
    <motion.div
      ref={ref}
      className="absolute left-1/2 cursor-pointer"
      style={{
        top: stackOffset,
        x: "-50%",
        zIndex: totalCards - index, // First card on top
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        transformPerspective: 1200,
      }}
      initial={{ 
        opacity: 0, 
        y: -50,
        scale: 0.95,
      }}
      animate={{ 
        opacity: 1, 
        y: [0, -6, 0],
        scale: 1,
        transition: {
          opacity: { duration: 0.6, delay: index * 0.1 },
          scale: { duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 100 },
          y: { 
            duration: floatDuration, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: floatDelay,
          },
        }
      }}
      whileHover={{ 
        scale: 1.03,
        y: -15,
        zIndex: 100,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }}
      whileTap={{ scale: 0.98 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Badge shape with rim */}
      <div
        className="rounded-2xl p-[2px]"
        style={{
          width: "500px",
          maxWidth: "90vw",
          background: inverted 
            ? `linear-gradient(145deg, #5a5248 0%, #2a2722 50%, #1a1816 100%)`
            : `linear-gradient(145deg, #fff 0%, #e8ddd0 50%, #c9bba8 100%)`,
          boxShadow: `
            0 15px 35px rgba(0,0,0,0.25),
            0 5px 15px rgba(0,0,0,0.15),
            inset 0 1px 0 rgba(255,255,255,${inverted ? 0.1 : 0.6})
          `,
        }}
      >
        {/* Inner convex surface */}
        <div
          className="rounded-xl px-10 py-8"
          style={{
            background: inverted
              ? `linear-gradient(165deg, #4a4540 0%, ${tileBg} 35%, #2d2a26 100%)`
              : `linear-gradient(165deg, #fff 0%, ${tileBg} 35%, #e0d5c8 100%)`,
            boxShadow: inverted
              ? `inset 0 2px 3px rgba(255,255,255,0.08), inset 0 -2px 3px rgba(0,0,0,0.2)`
              : `inset 0 2px 3px rgba(255,255,255,0.7), inset 0 -2px 3px rgba(0,0,0,0.08)`,
          }}
        >
          {/* Text with dynamic shadow */}
          <motion.h1
            className={`font-black lowercase text-center ${subtitle ? 'text-3xl md:text-4xl' : 'text-4xl md:text-5xl'}`}
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              color: textColor,
              textShadow: useTransform(
                [textShadowX, textShadowY],
                ([x, y]) => `${x}px ${y}px 10px rgba(0,0,0,${inverted ? 0.4 : 0.2}), 0 2px 4px rgba(0,0,0,${inverted ? 0.2 : 0.1})`
              ),
              transform: "translateZ(25px)",
            }}
          >
            {title}
          </motion.h1>
          
          {subtitle && (
            <motion.p
              className="text-base md:text-lg mt-4 opacity-70 whitespace-pre-line text-center"
              style={{ 
                fontFamily: "var(--font-space), system-ui, sans-serif",
                color: textColor,
                textShadow: useTransform(
                  [textShadowX, textShadowY],
                  ([x, y]) => `${Number(x) * 0.4}px ${Number(y) * 0.4}px 5px rgba(0,0,0,0.15)`
                ),
                transform: "translateZ(15px)",
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
  const totalHeight = sections.length * 60 + 200; // Stack height + padding

  return (
    <div 
      className="relative min-h-screen"
      style={{ backgroundColor: BG }}
    >
      {/* Subtle gradient background */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 30%, #f0e6da 0%, ${BG} 70%)`,
        }}
      />
      
      {/* Noise texture */}
      <div
        className="fixed inset-0 pointer-events-none mix-blend-overlay"
        style={{
          opacity: 0.05,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Card stack container */}
      <div 
        className="relative z-10 flex items-center justify-center py-20"
        style={{ 
          minHeight: "100vh",
          perspective: "1500px",
        }}
      >
        <div 
          className="relative"
          style={{ height: totalHeight }}
        >
          {sections.map((section, index) => (
            <CardTile
              key={section.id}
              title={section.title}
              subtitle={section.subtitle}
              inverted={section.inverted}
              index={index}
              totalCards={sections.length}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
