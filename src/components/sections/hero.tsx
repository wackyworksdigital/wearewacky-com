"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import gsap from "gsap";

// Letters for "build" animation
const buildLetters = ["b", "u", "i", "l", "d"];

// Number of horizontal "brick rows" per letter
const BRICK_ROWS = 10;

export function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const [isHoveringBuild, setIsHoveringBuild] = useState(false);

  // Headline animation on load
  useEffect(() => {
    if (!headlineRef.current) return;

    gsap.fromTo(
      headlineRef.current,
      { 
        y: 40, 
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.3,
      }
    );
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background with subtle texture */}
      <div className="absolute inset-0 bg-dots opacity-40" />
      
      {/* Colorful Gradient Blobs */}
      <div className="absolute top-20 -left-40 w-[500px] h-[500px] blob-cyan rounded-full blur-[120px] opacity-60" />
      <div className="absolute top-40 -right-40 w-[400px] h-[400px] blob-purple rounded-full blur-[120px] opacity-50" />
      <div className="absolute -bottom-20 left-1/3 w-[450px] h-[450px] blob-pink rounded-full blur-[120px] opacity-40" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Headline - Just "we build." */}
        <h1
          ref={headlineRef}
          className="mb-8 text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight lowercase"
        >
          <span>we </span>
          {/* "build" with Lego brick stacking animation on hover */}
          <span 
            className="inline-flex cursor-pointer"
            onMouseEnter={() => setIsHoveringBuild(true)}
            onMouseLeave={() => setIsHoveringBuild(false)}
          >
            {buildLetters.map((letter, letterIndex) => (
              <span key={letterIndex} className="relative inline-block">
                {/* Ghost letter (light gray - the empty container) */}
                <span className="text-slate/20">{letter}</span>
                
                {/* Brick rows - each row fills in sequence from bottom */}
                {Array.from({ length: BRICK_ROWS }).map((_, rowIndex) => {
                  // Calculate clip positions for this row
                  // Row 0 = bottom row, Row 9 = top row
                  const rowHeight = 100 / BRICK_ROWS;
                  const topClip = 100 - ((rowIndex + 1) * rowHeight); // How much to clip from top
                  const bottomClip = 100 - ((rowIndex + 1) * rowHeight) + rowHeight; // Bottom of visible area
                  
                  return (
                    <motion.span
                      key={rowIndex}
                      className="absolute inset-0 text-charcoal"
                      style={{
                        clipPath: `inset(${topClip}% 0 ${100 - bottomClip}% 0)`,
                      }}
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: isHoveringBuild ? 1 : 0,
                      }}
                      transition={{
                        duration: 0.05,
                        // Delay: letter offset + row offset (bottom rows first)
                        delay: isHoveringBuild 
                          ? (letterIndex * 0.15) + (rowIndex * 0.03)
                          : 0,
                        ease: "linear",
                      }}
                    >
                      {letter}
                    </motion.span>
                  );
                })}
              </span>
            ))}
          </span>
          <span className="text-gradient">.</span>
        </h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-lg sm:text-xl text-slate max-w-xl mx-auto mb-10 leading-relaxed"
        >
          AI, automations, apps, websites, courses...
          <br />
          <span className="text-charcoal">and whatever else you need done properly.</span>
        </motion.p>

        {/* CTA Buttons - Unified Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-charcoal text-white rounded-full font-medium hover:bg-charcoal/90 transition-colors"
          >
            Let's Build Something
          </motion.a>
          <motion.a
            href="https://courses.wearewacky.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 rounded-full font-medium bg-white border border-slate/20 text-charcoal hover:border-slate/40 transition-colors"
          >
            See Our Courses
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3 text-slate/60"
        >
          <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
