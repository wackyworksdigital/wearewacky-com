"use client";

import { useEffect, useState, useRef } from "react";

// Gary Vee-style quotes
const quotes = [
  "we're not for everyone. and that's the point.",
  "done beats perfect.",
  "ship it.",
  "ideas are cheap. execution is everything.",
  "automate the boring stuff.",
  "your competitors are sleeping.",
  "the robots work for us.",
  "stop planning. start building.",
  "nobody cares about your logo.",
  "AI won't replace you. someone using AI will.",
  "less meetings. more shipping.",
  "good enough today beats perfect never.",
];

// Fish-like quote that swims slowly
interface FishQuote {
  text: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  z: number; // depth
  vz: number;
  wigglePhase: number; // for tail wiggle
  wiggleSpeed: number;
}

function SwimmingQuote({ quote }: { quote: FishQuote }) {
  // Opacity and blur based on depth
  const opacity = 0.06 + quote.z * 0.14; // 0.06 (far) to 0.20 (close)
  const blur = 3 - quote.z * 2; // 3px (far) to 1px (close)
  const scale = 0.8 + quote.z * 0.3; // 0.8 (far) to 1.1 (close)
  
  // Wiggle effect - slight horizontal wave like a fish tail
  const wiggle = Math.sin(quote.wigglePhase) * 2;
  
  return (
    <div
      className="fixed pointer-events-none select-none whitespace-nowrap"
      style={{
        left: `${quote.x}%`,
        top: `${quote.y}%`,
        transform: `translate(-50%, -50%) scale(${scale}) skewX(${wiggle}deg)`,
        opacity,
        filter: `blur(${blur}px)`,
        fontFamily: "var(--font-bebas), var(--font-space), system-ui, sans-serif",
        fontWeight: 400,
        fontSize: "clamp(1.2rem, 3vw, 2.5rem)",
        color: "#3d3428",
        textTransform: "uppercase",
        letterSpacing: "-0.01em",
        zIndex: Math.floor(quote.z * 5),
        transition: "opacity 0.8s ease, filter 0.8s ease",
      }}
    >
      {quote.text}
    </div>
  );
}

interface BackgroundQuotesProps {
  count?: number;
}

export function BackgroundQuotes({ count = 5 }: BackgroundQuotesProps) {
  const [fishes, setFishes] = useState<FishQuote[]>([]);
  const [mounted, setMounted] = useState(false);
  const animationRef = useRef<number | null>(null);
  
  // Initialize fish positions
  useEffect(() => {
    const shuffled = [...quotes].sort(() => Math.random() - 0.5);
    const initialFishes: FishQuote[] = shuffled.slice(0, count).map((text) => ({
      text,
      x: 10 + Math.random() * 80,
      y: 10 + Math.random() * 80,
      vx: (Math.random() - 0.5) * 0.03, // VERY slow movement
      vy: (Math.random() - 0.5) * 0.03,
      z: 0.3 + Math.random() * 0.7, // depth
      vz: (Math.random() - 0.5) * 0.002, // very slow depth change
      wigglePhase: Math.random() * Math.PI * 2,
      wiggleSpeed: 0.02 + Math.random() * 0.02, // slow wiggle
    }));
    setFishes(initialFishes);
    setMounted(true);
  }, [count]);
  
  // Animation loop - slow fish swimming with wiggle
  useEffect(() => {
    if (!mounted) return;
    
    let lastTime = performance.now();
    
    const animate = (time: number) => {
      const delta = (time - lastTime) / 16;
      lastTime = time;
      
      setFishes(prev => prev.map(fish => {
        let { x, y, vx, vy, z, vz, wigglePhase, wiggleSpeed } = fish;
        
        // Update wiggle phase (constant swimming motion)
        wigglePhase += wiggleSpeed * delta;
        
        // Update position (very slow drift)
        x += vx * delta;
        y += vy * delta;
        z += vz * delta;
        
        // Soft bounce off edges
        if (x < 8 || x > 92) {
          vx = -vx * 0.9;
        }
        if (y < 8 || y > 92) {
          vy = -vy * 0.9;
        }
        
        // Bounce z between 0.2 and 1
        if (z < 0.2 || z > 1) {
          vz = -vz;
          z = Math.max(0.2, Math.min(1, z));
        }
        
        // Very occasional random drift change
        if (Math.random() < 0.005) {
          vx += (Math.random() - 0.5) * 0.01;
          vy += (Math.random() - 0.5) * 0.01;
        }
        
        // Clamp velocities (keep slow)
        vx = Math.max(-0.08, Math.min(0.08, vx));
        vy = Math.max(-0.08, Math.min(0.08, vy));
        
        // Clamp position
        x = Math.max(5, Math.min(95, x));
        y = Math.max(5, Math.min(95, y));
        
        return { ...fish, x, y, vx, vy, z, vz, wigglePhase };
      }));
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mounted]);
  
  if (!mounted) return null;
  
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[1]">
      {fishes.map((fish, index) => (
        <SwimmingQuote key={`${fish.text}-${index}`} quote={fish} />
      ))}
    </div>
  );
}
