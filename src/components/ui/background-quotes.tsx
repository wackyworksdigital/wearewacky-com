"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
  opacity: number; // varies by visibility mode
  blur: number; // px
}

function generateQuoteConfigs(count: number = 6, highVisibility: boolean = false): QuoteConfig[] {
  const shuffled = [...quotes].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count).map((text, i) => ({
    text,
    x: 10 + Math.random() * 80, // 10-90%
    y: 10 + Math.random() * 80, // 10-90%
    rotation: -12 + Math.random() * 24, // -12 to +12 degrees
    scale: 0.8 + Math.random() * 0.5, // 0.8 - 1.3
    opacity: highVisibility 
      ? 0.12 + Math.random() * 0.08 // 0.12 - 0.20 (more visible)
      : 0.06 + Math.random() * 0.06, // 0.06 - 0.12 (subtle)
    blur: highVisibility 
      ? 1 + Math.random() * 2 // 1-3px (sharper)
      : 2 + Math.random() * 2, // 2-4px (softer)
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
  const parallaxStrength = 20 + index * 8; // Different for each quote
  const offsetX = (mouseX - 0.5) * parallaxStrength;
  const offsetY = (mouseY - 0.5) * parallaxStrength;
  
  // Floating animation timing - different for each
  const floatDuration = 10 + index * 2;
  const floatDelay = index * 1.2;
  
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
        fontSize: "clamp(1.2rem, 3.5vw, 3rem)",
        color: "#3d3428",
        textTransform: "lowercase",
        letterSpacing: "-0.02em",
        zIndex: 1,
      }}
      animate={{
        x: [offsetX, offsetX + 8, offsetX],
        y: [offsetY, offsetY - 10, offsetY],
      }}
      transition={{
        x: { duration: 0.4, ease: "easeOut" },
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

interface BackgroundQuotesProps {
  count?: number;
  highVisibility?: boolean; // More visible quotes for pages with space
}

export function BackgroundQuotes({ count = 5, highVisibility = true }: BackgroundQuotesProps) {
  const [quoteConfigs, setQuoteConfigs] = useState<QuoteConfig[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [mounted, setMounted] = useState(false);
  
  // Generate random configs on mount (client-side only)
  useEffect(() => {
    setQuoteConfigs(generateQuoteConfigs(count, highVisibility));
    setMounted(true);
  }, [count, highVisibility]);
  
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
