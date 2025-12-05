"use client";

import { useState, useEffect, useRef, useCallback } from "react";

interface Block {
  x: number;
  y: number;
  vy: number;
  settled: boolean;
}

interface BuildingTextProps {
  text: string;
  className?: string;
}

export function BuildingText({ text, className = "" }: BuildingTextProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLSpanElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const blocksRef = useRef<Block[]>([]);
  const animationRef = useRef<number | null>(null);
  const textMaskRef = useRef<ImageData | null>(null);

  // Initialize canvas and get text mask
  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    // Get container dimensions
    const rect = container.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    const width = rect.width;
    const height = rect.height;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.scale(dpr, dpr);

    // Draw text to get mask
    ctx.fillStyle = "#000";
    ctx.font = `bold ${height * 0.85}px system-ui, -apple-system, sans-serif`;
    ctx.textBaseline = "middle";
    ctx.textAlign = "left";
    ctx.fillText(text, 0, height / 2);

    // Store text mask
    textMaskRef.current = ctx.getImageData(0, 0, width * dpr, height * dpr);
    ctx.clearRect(0, 0, width, height);

    return { ctx, width, height, dpr };
  }, [text]);

  // Check if point is inside text
  const isInsideText = useCallback((x: number, y: number, width: number, height: number, dpr: number) => {
    if (!textMaskRef.current) return false;
    const px = Math.floor(x * dpr);
    const py = Math.floor(y * dpr);
    if (px < 0 || px >= width * dpr || py < 0 || py >= height * dpr) return false;
    const i = (py * width * dpr + px) * 4;
    return textMaskRef.current.data[i + 3] > 128;
  }, []);

  // Animation loop
  useEffect(() => {
    const result = initCanvas();
    if (!result) return;

    const { ctx, width, height, dpr } = result;
    const blockSize = 3;
    const gravity = 0.5;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Spawn new blocks when hovering
      if (isHovering && blocksRef.current.length < 500) {
        for (let i = 0; i < 3; i++) {
          blocksRef.current.push({
            x: Math.random() * width,
            y: -blockSize,
            vy: 1 + Math.random() * 2,
            settled: false,
          });
        }
      }

      // Update and draw blocks
      const settledGrid: boolean[][] = [];
      
      blocksRef.current.forEach((block) => {
        if (!block.settled) {
          block.vy += gravity;
          const newY = block.y + block.vy;

          // Check if block should settle (inside text and at bottom or on another block)
          const gridX = Math.floor(block.x / blockSize);
          const gridY = Math.floor(newY / blockSize);
          
          if (isInsideText(block.x, newY, width, height, dpr)) {
            // Check if there's a settled block below or at bottom
            const belowY = newY + blockSize;
            const hasBlockBelow = blocksRef.current.some(
              b => b.settled && 
                   Math.abs(b.x - block.x) < blockSize && 
                   Math.abs(b.y - belowY) < blockSize
            );
            
            if (hasBlockBelow || newY > height - blockSize) {
              block.settled = true;
              block.y = Math.floor(newY / blockSize) * blockSize;
            } else {
              block.y = newY;
            }
          } else if (newY > height) {
            // Remove blocks that fall off screen
            block.y = height + 100; // Mark for removal
          } else {
            block.y = newY;
          }
        }

        // Draw block if visible
        if (block.y < height + 50) {
          ctx.fillStyle = "#1e293b";
          ctx.fillRect(
            Math.floor(block.x / blockSize) * blockSize,
            Math.floor(block.y / blockSize) * blockSize,
            blockSize - 0.5,
            blockSize - 0.5
          );
        }
      });

      // Clean up off-screen blocks
      blocksRef.current = blocksRef.current.filter(b => b.y < height + 50);

      // Clear blocks when not hovering
      if (!isHovering && blocksRef.current.length > 0) {
        blocksRef.current = blocksRef.current.filter(b => !b.settled);
        if (blocksRef.current.length === 0) {
          ctx.clearRect(0, 0, width, height);
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovering, initCanvas, isInsideText]);

  return (
    <span
      ref={containerRef}
      className={`relative inline-block cursor-pointer ${className}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        blocksRef.current = [];
      }}
      style={{ minWidth: "4ch" }}
    >
      {/* Ghost text */}
      <span className="text-slate/15 select-none invisible">{text}</span>
      
      {/* Canvas overlay */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />
      
      {/* Always visible ghost text beneath */}
      <span className="absolute inset-0 text-slate/15 select-none">{text}</span>
    </span>
  );
}
