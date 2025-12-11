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
  targetVx: number; // Target velocity (fish decides where to go)
  targetVy: number;
  z: number; // depth
  wigglePhase: number;
  wiggleAmplitude: number; // Current wiggle strength (based on speed)
  facingRight: boolean; // Which way the fish is facing
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
      const vx = (Math.random() - 0.5) * 0.08;
      return {
        text,
        x: 15 + Math.random() * 70,
        y: 15 + Math.random() * 70,
        vx,
        vy: (Math.random() - 0.5) * 0.04,
        targetVx: vx,
        targetVy: (Math.random() - 0.5) * 0.04,
        z: 0.3 + Math.random() * 0.7,
        wigglePhase: Math.random() * Math.PI * 2,
        wiggleAmplitude: 0,
        facingRight: vx > 0,
      };
    });
    setFishes(initialFishes);
    setMounted(true);
  }, [count]);
  
  // Decide new direction occasionally
  const decideNewDirection = useCallback((fish: FishQuote): Partial<FishQuote> => {
    // Random chance to change direction
    if (Math.random() < 0.008) {
      const newTargetVx = (Math.random() - 0.5) * 0.12;
      const newTargetVy = (Math.random() - 0.5) * 0.06;
      return {
        targetVx: newTargetVx,
        targetVy: newTargetVy,
      };
    }
    return {};
  }, []);
  
  // Animation loop - fish swimming with wiggle
  useEffect(() => {
    if (!mounted) return;
    
    let lastTime = performance.now();
    
    const animate = (time: number) => {
      const delta = Math.min((time - lastTime) / 16, 3); // Cap delta to prevent jumps
      lastTime = time;
      
      setFishes(prev => prev.map(fish => {
        let { x, y, vx, vy, targetVx, targetVy, z, wigglePhase, wiggleAmplitude, facingRight } = fish;
        
        // Maybe decide new direction
        const newDirection = decideNewDirection(fish);
        if (newDirection.targetVx !== undefined) targetVx = newDirection.targetVx;
        if (newDirection.targetVy !== undefined) targetVy = newDirection.targetVy;
        
        // Smoothly accelerate/decelerate toward target velocity (fish physics)
        const acceleration = 0.002;
        vx += (targetVx - vx) * acceleration * delta;
        vy += (targetVy - vy) * acceleration * delta;
        
        // Calculate speed for wiggle amplitude
        const speed = Math.sqrt(vx * vx + vy * vy);
        const maxSpeed = 0.12;
        const normalizedSpeed = Math.min(speed / maxSpeed, 1);
        
        // Wiggle amplitude based on speed - faster = more wiggle
        const targetWiggle = normalizedSpeed * 8; // Max 8 degrees
        wiggleAmplitude += (targetWiggle - wiggleAmplitude) * 0.1 * delta;
        
        // Wiggle phase - faster when swimming faster
        const wiggleSpeed = 0.15 + normalizedSpeed * 0.25; // 0.15 to 0.4
        wigglePhase += wiggleSpeed * delta;
        
        // Update facing direction (flip when changing x direction)
        if (vx > 0.01) facingRight = true;
        if (vx < -0.01) facingRight = false;
        
        // Update position
        x += vx * delta;
        y += vy * delta;
        
        // Soft bounce off edges - fish turns around
        if (x < 5) {
          targetVx = Math.abs(targetVx) * 0.8 + 0.02;
          x = 5;
        }
        if (x > 95) {
          targetVx = -Math.abs(targetVx) * 0.8 - 0.02;
          x = 95;
        }
        if (y < 5) {
          targetVy = Math.abs(targetVy) * 0.8 + 0.01;
          y = 5;
        }
        if (y > 95) {
          targetVy = -Math.abs(targetVy) * 0.8 - 0.01;
          y = 95;
        }
        
        // Slow depth drift
        z += (Math.random() - 0.5) * 0.001 * delta;
        z = Math.max(0.2, Math.min(1, z));
        
        return { ...fish, x, y, vx, vy, targetVx, targetVy, z, wigglePhase, wiggleAmplitude, facingRight };
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
        const opacity = 0.08 + fish.z * 0.12; // 0.08 (far) to 0.20 (close)
        const blur = 2.5 - fish.z * 1.5; // 2.5px (far) to 1px (close)
        const scale = 0.7 + fish.z * 0.4; // 0.7 (far) to 1.1 (close)
        
        // Wiggle effect - sine wave for tail-like motion
        const wiggle = Math.sin(fish.wigglePhase) * fish.wiggleAmplitude;
        
        // Flip horizontally when facing left
        const scaleX = fish.facingRight ? 1 : -1;
        
        return (
          <div
            key={`${fish.text}-${index}`}
            className="fixed pointer-events-none select-none whitespace-nowrap"
            style={{
              left: `${fish.x}%`,
              top: `${fish.y}%`,
              transform: `translate(-50%, -50%) scale(${scale * scaleX}, ${scale}) skewX(${wiggle}deg)`,
              opacity,
              filter: `blur(${blur}px)`,
              fontFamily: "var(--font-bebas), var(--font-space), system-ui, sans-serif",
              fontWeight: 400,
              fontSize: "clamp(1.2rem, 2.8vw, 2.2rem)",
              color: "#3d3428",
              textTransform: "uppercase",
              letterSpacing: "0.02em",
              zIndex: Math.floor(fish.z * 5),
              transition: "opacity 0.5s ease-out",
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
