"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// Gary Vee-style quotes - bold, punchy, motivational
const quotes = [
  "we're not for everyone. and that's the point.",
  "done beats perfect.",
  "ship it.",
  "ideas are cheap. execution is everything.",
  "automate the boring stuff.",
  "your competitors are sleeping. are you?",
  "the robots work for us.",
  "move fast. break things. fix them faster.",
  "stop planning. start building.",
  "nobody cares about your logo.",
  "AI won't replace you. someone using AI will.",
  "less meetings. more shipping.",
  "your website should make money.",
  "good enough today beats perfect never.",
  "build in public. fail in public. win in public.",
];

// Each quote has random position, rotation, size
interface QuoteConfig {
  text: string;
  x: number; // percentage
  y: number; // percentage
  rotation: number; // degrees
  scale: number; // 0.8 - 1.5
  opacity: number; // 0.03 - 0.08
  blur: number; // px
}

function generateQuoteConfigs(count: number = 6): QuoteConfig[] {
  const shuffled = [...quotes].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count).map((text, i) => ({
    text,
    x: 10 + Math.random() * 80, // 10-90%
    y: 10 + Math.random() * 80, // 10-90%
    rotation: -15 + Math.random() * 30, // -15 to +15 degrees
    scale: 0.7 + Math.random() * 0.6, // 0.7 - 1.3
    opacity: 0.04 + Math.random() * 0.04, // 0.04 - 0.08
    blur: 2 + Math.random() * 3, // 2-5px blur
  }));
}

function FloatingQuote({ 
  config, 
  mouseX, 
  mouseY,
  index,
}: { 
  config: QuoteConfig;
  mouseX: number;
  mouseY: number;
  index: number;
}) {
  // Parallax effect based on mouse position
  const parallaxStrength = 15 + index * 5; // Different for each quote
  const offsetX = (mouseX - 0.5) * parallaxStrength;
  const offsetY = (mouseY - 0.5) * parallaxStrength;
  
  // Floating animation timing - different for each
  const floatDuration = 8 + index * 2;
  const floatDelay = index * 1.5;
  
  return (
    <motion.div
      className="fixed pointer-events-none select-none whitespace-nowrap"
      style={{
        left: `${config.x}%`,
        top: `${config.y}%`,
        transform: `translate(-50%, -50%) rotate(${config.rotation}deg) scale(${config.scale})`,
        opacity: config.opacity,
        filter: `blur(${config.blur}px)`,
        fontFamily: "var(--font-space), system-ui, sans-serif",
        fontWeight: 800,
        fontSize: "clamp(1.5rem, 4vw, 3.5rem)",
        color: "#3d3428",
        textTransform: "lowercase",
        letterSpacing: "-0.02em",
        zIndex: 1,
      }}
      animate={{
        x: [offsetX, offsetX + 5, offsetX],
        y: [offsetY, offsetY - 8, offsetY],
      }}
      transition={{
        x: { duration: 0.3, ease: "easeOut" },
        y: {
          duration: floatDuration,
          repeat: Infinity,
          ease: "easeInOut",
          delay: floatDelay,
        },
      }}
    >
      {config.text}
    </motion.div>
  );
}

export function BackgroundQuotes({ count = 5 }: { count?: number }) {
  const [quoteConfigs, setQuoteConfigs] = useState<QuoteConfig[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [mounted, setMounted] = useState(false);
  
  // Generate random configs on mount (client-side only)
  useEffect(() => {
    setQuoteConfigs(generateQuoteConfigs(count));
    setMounted(true);
  }, [count]);
  
  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  
  if (!mounted) return null;
  
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[1]">
      {quoteConfigs.map((config, index) => (
        <FloatingQuote
          key={`${config.text}-${index}`}
          config={config}
          mouseX={mousePos.x}
          mouseY={mousePos.y}
          index={index}
        />
      ))}
    </div>
  );
}

