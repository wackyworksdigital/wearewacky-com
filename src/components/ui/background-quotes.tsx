"use client";

import { useEffect, useState, useRef, useCallback } from "react";

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

// Fish-like quote that swims with wiggle
interface FishQuote {
  text: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  targetVx: number;
  targetVy: number;
  z: number; // depth
  wigglePhase: number;
  speed: number; // current speed for wiggle calculation
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
    const initialFishes: FishQuote[] = shuffled.slice(0, count).map((text) => {
      const vx = (Math.random() - 0.5) * 0.06;
      const vy = (Math.random() - 0.5) * 0.03;
      return {
        text,
        x: 15 + Math.random() * 70,
        y: 15 + Math.random() * 70,
        vx,
        vy,
        targetVx: vx,
        targetVy: vy,
        z: 0.3 + Math.random() * 0.7,
        wigglePhase: Math.random() * Math.PI * 2,
        speed: 0,
      };
    });
    setFishes(initialFishes);
    setMounted(true);
  }, [count]);
  
  // Decide new direction occasionally
  const decideNewDirection = useCallback((fish: FishQuote): Partial<FishQuote> => {
    if (Math.random() < 0.006) {
      return {
        targetVx: (Math.random() - 0.5) * 0.1,
        targetVy: (Math.random() - 0.5) * 0.05,
      };
    }
    return {};
  }, []);
  
  // Animation loop
  useEffect(() => {
    if (!mounted) return;
    
    let lastTime = performance.now();
    
    const animate = (time: number) => {
      const delta = Math.min((time - lastTime) / 16, 3);
      lastTime = time;
      
      setFishes(prev => prev.map(fish => {
        let { x, y, vx, vy, targetVx, targetVy, z, wigglePhase, speed } = fish;
        
        // Maybe decide new direction
        const newDirection = decideNewDirection(fish);
        if (newDirection.targetVx !== undefined) targetVx = newDirection.targetVx;
        if (newDirection.targetVy !== undefined) targetVy = newDirection.targetVy;
        
        // Smoothly accelerate toward target velocity
        const acceleration = 0.003;
        vx += (targetVx - vx) * acceleration * delta;
        vy += (targetVy - vy) * acceleration * delta;
        
        // Calculate speed
        speed = Math.sqrt(vx * vx + vy * vy);
        
        // Wiggle phase - faster when moving faster
        const baseWiggleSpeed = 0.08;
        const speedBonus = speed * 3;
        wigglePhase += (baseWiggleSpeed + speedBonus) * delta;
        
        // Update position
        x += vx * delta;
        y += vy * delta;
        
        // Soft bounce off edges
        if (x < 8) {
          targetVx = Math.abs(targetVx) * 0.7 + 0.02;
          x = 8;
        }
        if (x > 92) {
          targetVx = -Math.abs(targetVx) * 0.7 - 0.02;
          x = 92;
        }
        if (y < 8) {
          targetVy = Math.abs(targetVy) * 0.7 + 0.01;
          y = 8;
        }
        if (y > 92) {
          targetVy = -Math.abs(targetVy) * 0.7 - 0.01;
          y = 92;
        }
        
        // Slow depth drift
        z += (Math.random() - 0.5) * 0.0008 * delta;
        z = Math.max(0.25, Math.min(1, z));
        
        return { ...fish, x, y, vx, vy, targetVx, targetVy, z, wigglePhase, speed };
      }));
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mounted, decideNewDirection]);
  
  if (!mounted) return null;
  
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[1]">
      {fishes.map((fish, index) => {
        // Opacity and blur based on depth
        const opacity = 0.06 + fish.z * 0.14; // 0.06 (far) to 0.20 (close)
        const blur = 2.5 - fish.z * 1.5; // 2.5px (far) to 1px (close)
        const scale = 0.75 + fish.z * 0.35; // 0.75 (far) to 1.1 (close)
        
        // Wiggle effect - wave motion (up/down + slight rotation)
        // Faster speed = bigger wiggle
        const maxSpeed = 0.1;
        const normalizedSpeed = Math.min(fish.speed / maxSpeed, 1);
        const wiggleStrength = 2 + normalizedSpeed * 6; // 2-8 degrees
        const yWiggle = Math.sin(fish.wigglePhase) * (1 + normalizedSpeed * 3); // 1-4px
        const rotation = Math.sin(fish.wigglePhase * 0.7) * wiggleStrength;
        
        return (
          <div
            key={`${fish.text}-${index}`}
            className="fixed pointer-events-none select-none whitespace-nowrap"
            style={{
              left: `${fish.x}%`,
              top: `${fish.y}%`,
              transform: `translate(-50%, -50%) translateY(${yWiggle}px) rotate(${rotation}deg) scale(${scale})`,
              opacity,
              filter: `blur(${blur}px)`,
              fontFamily: "var(--font-bebas), var(--font-space), system-ui, sans-serif",
              fontWeight: 400,
              fontSize: "clamp(1.1rem, 2.5vw, 2rem)",
              color: "#3d3428",
              textTransform: "uppercase",
              letterSpacing: "0.03em",
              zIndex: Math.floor(fish.z * 5),
              willChange: "transform",
            }}
          >
            {fish.text}
          </div>
        );
      })}
    </div>
  );
}
