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

interface FishQuote {
  text: string;
  x: number;
  y: number;
  vx: number;
  targetVx: number;
  z: number;
  phase: number;
  waveAmplitude: number;
}

// Individual letter with wave offset
function WaveLetter({ 
  char, 
  index, 
  phase, 
  speed,
  waveAmplitude 
}: { 
  char: string; 
  index: number; 
  phase: number;
  speed: number;
  waveAmplitude: number;
}) {
  // Each letter is offset in the wave - creates ripple effect!
  const letterPhase = phase - index * 0.3; // Offset by 0.3 radians per letter
  
  // Wave amplitude based on speed
  const normalizedSpeed = Math.min(speed / 0.08, 1);
  const dynamicAmplitude = waveAmplitude * (0.3 + normalizedSpeed * 0.7);
  
  // Y offset for this letter
  const yOffset = Math.sin(letterPhase) * dynamicAmplitude;
  
  return (
    <span
      style={{
        display: "inline-block",
        transform: `translateY(${yOffset}px)`,
        transition: "transform 0.05s linear",
      }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  );
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
      const vx = (Math.random() - 0.5) * 0.06;
      return {
        text,
        x: 10 + Math.random() * 80,
        y: 15 + Math.random() * 70,
        vx,
        targetVx: vx,
        z: 0.3 + Math.random() * 0.7,
        phase: Math.random() * Math.PI * 2,
        waveAmplitude: 3 + Math.random() * 4, // 3-7px per letter
      };
    });
    setFishes(initialFishes);
    setMounted(true);
  }, [count]);
  
  const decideNewDirection = useCallback((fish: FishQuote): Partial<FishQuote> => {
    if (Math.random() < 0.005) {
      return { targetVx: (Math.random() - 0.5) * 0.08 };
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
        let { x, y, vx, targetVx, z, phase, waveAmplitude } = fish;
        
        // Maybe change direction
        const newDirection = decideNewDirection(fish);
        if (newDirection.targetVx !== undefined) targetVx = newDirection.targetVx;
        
        // Smooth acceleration
        vx += (targetVx - vx) * 0.002 * delta;
        
        // Speed for wave intensity
        const speed = Math.abs(vx);
        const normalizedSpeed = Math.min(speed / 0.06, 1);
        
        // Phase advances - faster when moving faster
        const phaseSpeed = 0.06 + normalizedSpeed * 0.12;
        phase += phaseSpeed * delta;
        
        // Update position
        x += vx * delta;
        y += (Math.random() - 0.5) * 0.01 * delta; // Tiny Y drift
        
        // Clamp Y
        y = Math.max(10, Math.min(90, y));
        
        // Bounce off edges
        if (x < 3) {
          targetVx = Math.abs(targetVx) * 0.8 + 0.015;
          x = 3;
        }
        if (x > 97) {
          targetVx = -Math.abs(targetVx) * 0.8 - 0.015;
          x = 97;
        }
        
        // Slow depth drift
        z += (Math.random() - 0.5) * 0.0005 * delta;
        z = Math.max(0.25, Math.min(1, z));
        
        return { ...fish, x, y, vx, targetVx, z, phase, waveAmplitude };
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
      {fishes.map((fish, fishIndex) => {
        const opacity = 0.07 + fish.z * 0.13;
        const blur = 2.5 - fish.z * 1.5;
        const scale = 0.75 + fish.z * 0.35;
        const speed = Math.abs(fish.vx);
        
        return (
          <div
            key={`${fish.text}-${fishIndex}`}
            className="fixed pointer-events-none select-none whitespace-nowrap"
            style={{
              left: `${fish.x}%`,
              top: `${fish.y}%`,
              transform: `translate(-50%, -50%) scale(${scale})`,
              opacity,
              filter: `blur(${blur}px)`,
              fontFamily: "var(--font-bebas), var(--font-space), system-ui, sans-serif",
              fontWeight: 400,
              fontSize: "clamp(1.1rem, 2.5vw, 2rem)",
              color: "#3d3428",
              textTransform: "uppercase",
              letterSpacing: "0.02em",
              zIndex: Math.floor(fish.z * 5),
            }}
          >
            {fish.text.split("").map((char, charIndex) => (
              <WaveLetter
                key={charIndex}
                char={char}
                index={charIndex}
                phase={fish.phase}
                speed={speed}
                waveAmplitude={fish.waveAmplitude}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
}
