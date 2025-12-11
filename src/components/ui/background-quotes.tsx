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

// Fish-like quote that swims with sinusoidal motion
interface FishQuote {
  text: string;
  x: number;
  y: number;
  baseY: number; // Base Y for wave calculation
  vx: number;
  targetVx: number;
  z: number;
  phase: number; // For wave motion
  waveAmplitude: number;
  waveFrequency: number;
}

interface BackgroundQuotesProps {
  count?: number;
}

export function BackgroundQuotes({ count = 5 }: BackgroundQuotesProps) {
  const [fishes, setFishes] = useState<FishQuote[]>([]);
  const [mounted, setMounted] = useState(false);
  const animationRef = useRef<number | null>(null);
  
  useEffect(() => {
    const shuffled = [...quotes].sort(() => Math.random() - 0.5);
    const initialFishes: FishQuote[] = shuffled.slice(0, count).map((text) => {
      const vx = (Math.random() - 0.5) * 0.08;
      const baseY = 15 + Math.random() * 70;
      return {
        text,
        x: 10 + Math.random() * 80,
        y: baseY,
        baseY,
        vx,
        targetVx: vx,
        z: 0.3 + Math.random() * 0.7,
        phase: Math.random() * Math.PI * 2,
        waveAmplitude: 8 + Math.random() * 12, // 8-20px wave height
        waveFrequency: 0.8 + Math.random() * 0.4, // Wave frequency variation
      };
    });
    setFishes(initialFishes);
    setMounted(true);
  }, [count]);
  
  const decideNewDirection = useCallback((fish: FishQuote): Partial<FishQuote> => {
    // Occasionally change direction
    if (Math.random() < 0.004) {
      return {
        targetVx: (Math.random() - 0.5) * 0.1,
      };
    }
    // Occasionally change wave amplitude
    if (Math.random() < 0.002) {
      return {
        waveAmplitude: 6 + Math.random() * 14,
      };
    }
    return {};
  }, []);
  
  useEffect(() => {
    if (!mounted) return;
    
    let lastTime = performance.now();
    
    const animate = (time: number) => {
      const delta = Math.min((time - lastTime) / 16, 3);
      lastTime = time;
      
      setFishes(prev => prev.map(fish => {
        let { x, baseY, vx, targetVx, z, phase, waveAmplitude, waveFrequency } = fish;
        
        // Maybe change direction
        const newDirection = decideNewDirection(fish);
        Object.assign(fish, newDirection);
        if (newDirection.targetVx !== undefined) targetVx = newDirection.targetVx;
        if (newDirection.waveAmplitude !== undefined) waveAmplitude = newDirection.waveAmplitude;
        
        // Smooth acceleration
        const acceleration = 0.002;
        vx += (targetVx - vx) * acceleration * delta;
        
        // Calculate speed for wave intensity
        const speed = Math.abs(vx);
        const normalizedSpeed = Math.min(speed / 0.08, 1);
        
        // Phase advances based on speed - faster = more waves
        const phaseSpeed = 0.03 + normalizedSpeed * 0.08;
        phase += phaseSpeed * delta;
        
        // Update X position
        x += vx * delta;
        
        // Y follows a sine wave (the swimming wave motion!)
        // Higher speed = tighter waves (more frequency)
        const dynamicFrequency = waveFrequency * (0.8 + normalizedSpeed * 0.4);
        const dynamicAmplitude = waveAmplitude * (0.5 + normalizedSpeed * 0.8);
        const y = baseY + Math.sin(phase * dynamicFrequency) * dynamicAmplitude;
        
        // Slowly drift baseY
        baseY += (Math.random() - 0.5) * 0.02 * delta;
        baseY = Math.max(12, Math.min(88, baseY));
        
        // Bounce off horizontal edges
        if (x < 5) {
          targetVx = Math.abs(targetVx) * 0.8 + 0.02;
          x = 5;
        }
        if (x > 95) {
          targetVx = -Math.abs(targetVx) * 0.8 - 0.02;
          x = 95;
        }
        
        // Slow depth drift
        z += (Math.random() - 0.5) * 0.0006 * delta;
        z = Math.max(0.25, Math.min(1, z));
        
        return { ...fish, x, y, baseY, vx, targetVx, z, phase, waveAmplitude, waveFrequency };
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
        // Depth effects
        const opacity = 0.07 + fish.z * 0.13;
        const blur = 2.5 - fish.z * 1.5;
        const scale = 0.75 + fish.z * 0.35;
        
        // Body flex: slight skew that changes with the wave
        // This makes it look like the body is bending as it swims
        const speed = Math.abs(fish.vx);
        const normalizedSpeed = Math.min(speed / 0.08, 1);
        const bodyFlex = Math.sin(fish.phase * 1.5) * (2 + normalizedSpeed * 4); // 2-6 degrees skew
        
        return (
          <div
            key={`${fish.text}-${index}`}
            className="fixed pointer-events-none select-none whitespace-nowrap"
            style={{
              left: `${fish.x}%`,
              top: `${fish.y}%`,
              transform: `translate(-50%, -50%) scale(${scale}) skewX(${bodyFlex}deg)`,
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
