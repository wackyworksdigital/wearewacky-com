"use client";

import { useEffect, useRef, useState } from "react";

interface Particle {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  originX: number;
  originY: number;
  size: number;
  vx: number;
  vy: number;
}

interface ParticleTextProps {
  text: string;
  fontSize?: number;
  particleSize?: number;
  className?: string;
}

export function ParticleText({ 
  text, 
  fontSize = 120, 
  particleSize = 3,
  className = "" 
}: ParticleTextProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number | null>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    // Set canvas size
    const rect = container.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const dpr = window.devicePixelRatio || 1;
    
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.scale(dpr, dpr);

    // Get text pixels
    ctx.fillStyle = "#1e293b";
    ctx.font = `bold ${fontSize}px system-ui, -apple-system, sans-serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, width / 2, height / 2);

    const imageData = ctx.getImageData(0, 0, width * dpr, height * dpr);
    const particles: Particle[] = [];

    // Sample pixels at intervals
    const gap = particleSize + 1;
    for (let y = 0; y < height * dpr; y += gap * dpr) {
      for (let x = 0; x < width * dpr; x += gap * dpr) {
        const i = (y * width * dpr + x) * 4;
        const alpha = imageData.data[i + 3];
        if (alpha > 128) {
          // Scale back to CSS pixels
          const px = x / dpr;
          const py = y / dpr;
          
          // Random scattered starting position
          const angle = Math.random() * Math.PI * 2;
          const distance = 30 + Math.random() * 80;
          const scatterX = px + Math.cos(angle) * distance;
          const scatterY = py + Math.sin(angle) * distance;

          particles.push({
            x: scatterX,
            y: scatterY,
            targetX: px,
            targetY: py,
            originX: scatterX,
            originY: scatterY,
            size: particleSize,
            vx: 0,
            vy: 0,
          });
        }
      }
    }

    particlesRef.current = particles;
    ctx.clearRect(0, 0, width, height);

    // Animation
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particlesRef.current.forEach((p) => {
        const targetX = isHovering ? p.targetX : p.originX;
        const targetY = isHovering ? p.targetY : p.originY;

        const dx = targetX - p.x;
        const dy = targetY - p.y;
        
        p.vx += dx * 0.12;
        p.vy += dy * 0.12;
        p.vx *= 0.82;
        p.vy *= 0.82;
        p.x += p.vx;
        p.y += p.vy;

        ctx.fillStyle = "#1e293b";
        ctx.fillRect(Math.round(p.x), Math.round(p.y), p.size, p.size);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [text, fontSize, particleSize, isHovering]);

  return (
    <div
      ref={containerRef}
      className={`relative cursor-pointer ${className}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{ height: fontSize * 1.2 }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
      />
    </div>
  );
}
