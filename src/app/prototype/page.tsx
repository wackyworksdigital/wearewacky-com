"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring, useMotionValue, useTransform } from "framer-motion";

const BG = "#e8ddd0";
const TILE_LIGHT = "#f5ebe0";
const TILE_DARK = "#3d3428";
const TEXT_DARK = "#3d3428";
const TEXT_LIGHT = "#f5ebe0";

// All sections
const sections = [
  { id: "intro", title: "we build.", inverted: true },
  { id: "services", title: "services", inverted: false },
  { id: "about", title: "about", inverted: false },
  { id: "portfolio", title: "portfolio", inverted: false },
  { id: "contact", title: "contact", inverted: false },
  { id: "outro", title: "WACKY WORKS DIGITAL", subtitle: "we're not for everyone.\nand that's the point.", inverted: true },
];

// Credit card tile with floating + dynamic shadows
function CreditCardTile({ 
  title,
  subtitle,
  inverted = false,
  index,
  currentIndex,
  totalCards,
}: { 
  title: string;
  subtitle?: string;
  inverted?: boolean;
  index: number;
  currentIndex: number;
  totalCards: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isActive = index === currentIndex;
  const isPassed = index < currentIndex;
  const isBehind = index > currentIndex;
  
  const stackPositionBehind = index - currentIndex;
  const stackPositionPassed = currentIndex - index;
  
  // Mouse for tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { stiffness: 200, damping: 20, mass: 0.5 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);
  
  // Dynamic shadow
  const shadowX = useSpring(useTransform(mouseX, [-0.5, 0.5], [6, -6]), springConfig);
  const shadowY = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), springConfig);
  
  const [shadowStyle, setShadowStyle] = useState("0 4px 8px rgba(0,0,0,0.2)");

  useEffect(() => {
    if (!isActive) return;
    
    const unsubX = shadowX.on("change", () => {
      const x = shadowX.get();
      const y = shadowY.get();
      setShadowStyle(`${x}px ${y}px 12px rgba(0,0,0,${inverted ? 0.4 : 0.2}), 0 2px 4px rgba(0,0,0,0.1)`);
    });
    
    const unsubY = shadowY.on("change", () => {
      const x = shadowX.get();
      const y = shadowY.get();
      setShadowStyle(`${x}px ${y}px 12px rgba(0,0,0,${inverted ? 0.4 : 0.2}), 0 2px 4px rgba(0,0,0,0.1)`);
    });
    
    return () => {
      unsubX();
      unsubY();
    };
  }, [isActive, shadowX, shadowY, inverted]);

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
    setShadowStyle(`0 4px 8px rgba(0,0,0,${inverted ? 0.3 : 0.15})`);
  };

  const tileBg = inverted ? TILE_DARK : TILE_LIGHT;
  const textColor = inverted ? TEXT_LIGHT : TEXT_DARK;

  // Y offset - cards slide smoothly
  const getYOffset = () => {
    if (isActive) return 0;
    if (isPassed) return -stackPositionPassed * 65; // Slide UP and behind
    return stackPositionBehind * 65; // Slide DOWN and behind
  };

  // Z-index
  const getZIndex = () => {
    if (isActive) return 100;
    if (isPassed) return 50 - stackPositionPassed;
    return 50 - stackPositionBehind;
  };

  // Scale - slight reduction for depth
  const getScale = () => {
    if (isActive) return 1;
    if (isPassed) return 0.96 - stackPositionPassed * 0.015;
    return 0.96 - stackPositionBehind * 0.015;
  };

  // Floating animation timing - different for each card
  const floatDuration = 3 + index * 0.5;
  const floatDelay = index * 0.4;
  const floatAmount = isActive ? 8 : 4; // Active card floats more

  return (
    <motion.div
      ref={ref}
      className="absolute cursor-pointer"
      style={{
        left: "50%",
        top: "50%",
        x: "-50%",
        rotateX: isActive ? rotateX : 0,
        rotateY: isActive ? rotateY : 0,
        transformStyle: "preserve-3d",
        transformPerspective: 1200,
      }}
      initial={{ 
        y: "calc(-50% + 100px)", 
        opacity: 0,
        scale: 0.9,
      }}
      animate={{
        y: [
          `calc(-50% + ${getYOffset()}px)`,
          `calc(-50% + ${getYOffset() - floatAmount}px)`,
          `calc(-50% + ${getYOffset()}px)`,
        ],
        scale: getScale(),
        opacity: 1,
        zIndex: getZIndex(),
      }}
      transition={{
        y: {
          duration: floatDuration,
          repeat: Infinity,
          ease: "easeInOut",
          delay: floatDelay,
          times: [0, 0.5, 1],
        },
        scale: {
          type: "spring",
          stiffness: 100,
          damping: 20,
        },
        opacity: {
          duration: 0.3,
        },
        zIndex: {
          duration: 0,
        },
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Credit card shape - FULLY OPAQUE */}
      <div
        className="rounded-2xl p-[3px]"
        style={{
          width: "min(550px, 85vw)",
          aspectRatio: "1.6 / 1",
          background: inverted 
            ? `linear-gradient(145deg, #5a5248 0%, #2a2722 50%, #1a1816 100%)`
            : `linear-gradient(145deg, #fff 0%, #e8ddd0 50%, #c9bba8 100%)`,
          boxShadow: isActive 
            ? `0 25px 50px rgba(0,0,0,0.3), 0 10px 20px rgba(0,0,0,0.2)`
            : `0 15px 30px rgba(0,0,0,0.2), 0 5px 15px rgba(0,0,0,0.1)`,
        }}
      >
        {/* Inner surface - SOLID, no transparency */}
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
          <h1
            className={`font-black lowercase text-center ${subtitle ? 'text-3xl md:text-4xl lg:text-5xl' : 'text-4xl md:text-5xl lg:text-6xl'}`}
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              color: textColor,
              textShadow: isActive ? shadowStyle : `0 4px 8px rgba(0,0,0,${inverted ? 0.3 : 0.15})`,
              transform: "translateZ(30px)",
            }}
          >
            {title}
          </h1>
          
          {subtitle && (
            <p
              className="text-base md:text-lg lg:text-xl mt-4 opacity-80 whitespace-pre-line text-center"
              style={{ 
                fontFamily: "var(--font-space), system-ui, sans-serif",
                color: textColor,
                textShadow: `0 2px 4px rgba(0,0,0,0.1)`,
                transform: "translateZ(20px)",
              }}
            >
              {subtitle}
            </p>
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
    stiffness: 80,
    damping: 25,
  });

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

      {/* Card deck */}
      <div 
        className="fixed inset-0 z-10"
        style={{ perspective: "1500px" }}
      >
        {sections.map((section, index) => (
          <CreditCardTile
            key={section.id}
            title={section.title}
            subtitle={section.subtitle}
            inverted={section.inverted}
            index={index}
            currentIndex={currentIndex}
            totalCards={sections.length}
          />
        ))}
      </div>
    </div>
  );
}
