"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useAnimationFrame } from "framer-motion";

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
];

// Fish-like quote that swims around
interface FishQuote {
  text: string;
  x: number; // percentage 0-100
  y: number; // percentage 0-100
  vx: number; // velocity x
  vy: number; // velocity y
  rotation: number;
  scale: number;
  z: number; // depth 0-1 (0 = far/faded, 1 = close/visible)
  vz: number; // velocity z (swimming closer/further)
}

function SwimmingQuote({ quote }: { quote: FishQuote }) {
  // Opacity and blur based on depth (z)
  const opacity = 0.05 + quote.z * 0.2; // 0.05 (far) to 0.25 (close)
  const blur = 4 - quote.z * 3; // 4px (far) to 1px (close)
  const scale = 0.7 + quote.z * 0.5; // 0.7 (far) to 1.2 (close)
  
  return (
    <div
      className="fixed pointer-events-none select-none whitespace-nowrap"
      style={{
        left: `${quote.x}%`,
        top: `${quote.y}%`,
        transform: `translate(-50%, -50%) rotate(${quote.rotation}deg) scale(${scale * quote.scale})`,
        opacity,
        filter: `blur(${blur}px)`,
        fontFamily: "var(--font-space), system-ui, sans-serif",
        fontWeight: 800,
        fontSize: "clamp(1rem, 3vw, 2.5rem)",
        color: "#3d3428",
        textTransform: "lowercase",
        letterSpacing: "-0.02em",
        zIndex: Math.floor(quote.z * 10),
        transition: "opacity 0.5s ease, filter 0.5s ease",
      }}
    >
      {quote.text}
    </div>
  );
}

interface BackgroundQuotesProps {
  count?: number;
}

export function BackgroundQuotes({ count = 6 }: BackgroundQuotesProps) {
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
      vx: (Math.random() - 0.5) * 0.3, // slow movement
      vy: (Math.random() - 0.5) * 0.3,
      rotation: -10 + Math.random() * 20,
      scale: 0.8 + Math.random() * 0.4,
      z: Math.random(), // random depth
      vz: (Math.random() - 0.5) * 0.01, // slow depth change
    }));
    setFishes(initialFishes);
    setMounted(true);
  }, [count]);
  
  // Animation loop - fish swimming
  useEffect(() => {
    if (!mounted) return;
    
    let lastTime = performance.now();
    
    const animate = (time: number) => {
      const delta = (time - lastTime) / 16; // normalize to ~60fps
      lastTime = time;
      
      setFishes(prev => prev.map(fish => {
        let { x, y, vx, vy, z, vz, rotation } = fish;
        
        // Update position
        x += vx * delta;
        y += vy * delta;
        z += vz * delta;
        
        // Bounce off edges (with some padding)
        if (x < 5 || x > 95) {
          vx = -vx * (0.8 + Math.random() * 0.4);
          rotation = -rotation + (Math.random() - 0.5) * 10;
        }
        if (y < 5 || y > 95) {
          vy = -vy * (0.8 + Math.random() * 0.4);
          rotation = -rotation + (Math.random() - 0.5) * 10;
        }
        
        // Bounce z (depth) between 0 and 1
        if (z < 0 || z > 1) {
          vz = -vz;
          z = Math.max(0, Math.min(1, z));
        }
        
        // Add slight random drift
        if (Math.random() < 0.02) {
          vx += (Math.random() - 0.5) * 0.1;
          vy += (Math.random() - 0.5) * 0.1;
          vz += (Math.random() - 0.5) * 0.005;
        }
        
        // Clamp velocities
        vx = Math.max(-0.5, Math.min(0.5, vx));
        vy = Math.max(-0.5, Math.min(0.5, vy));
        vz = Math.max(-0.02, Math.min(0.02, vz));
        
        // Clamp position
        x = Math.max(5, Math.min(95, x));
        y = Math.max(5, Math.min(95, y));
        
        return { ...fish, x, y, vx, vy, z, vz, rotation };
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
