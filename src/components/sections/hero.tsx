"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import gsap from "gsap";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!headlineRef.current) return;

    // GSAP animation for the headline words
    const words = headlineRef.current.querySelectorAll(".char");
    gsap.fromTo(
      words,
      { 
        y: 80, 
        opacity: 0,
        rotateX: -45 
      },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power4.out",
        delay: 0.3,
      }
    );
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-grid"
    >
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan/20 rounded-full blur-[128px] pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full glass"
        >
          <Sparkles className="w-4 h-4 text-purple" />
          <span className="text-sm text-muted">Custom Automation & SaaS Studio</span>
        </motion.div>

        {/* Headline with word animation */}
        <h1
          ref={headlineRef}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
          style={{ perspective: "1000px" }}
        >
          <span className="char inline-block">We</span>{" "}
          <span className="char inline-block">Build</span>{" "}
          <span className="char inline-block text-gradient">Revenue</span>{" "}
          <span className="char inline-block text-gradient">Engines.</span>
        </h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-12"
        >
          We don't just build websites. We build{" "}
          <span className="text-foreground font-medium">Digital Assets</span> that generate 
          revenue, save time, and automate your workflows.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#services"
            className="group relative px-8 py-4 bg-purple hover:bg-purple-dark rounded-full font-medium transition-all duration-300 glow-purple"
          >
            <span className="relative z-10">Explore Services</span>
          </a>
          <a
            href="https://courses.wearewacky.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full font-medium glass hover:bg-white/5 transition-all duration-300"
          >
            View Course Platform →
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-muted"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}

