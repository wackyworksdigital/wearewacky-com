"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Zap, Bot, Sparkles, Rocket, Heart } from "lucide-react";
import gsap from "gsap";

// Floating icons that animate around
const floatingIcons = [
  { Icon: Zap, color: "text-cyan", delay: 0, x: -200, y: -100 },
  { Icon: Bot, color: "text-purple", delay: 0.5, x: 250, y: -80 },
  { Icon: Sparkles, color: "text-pink", delay: 1, x: -180, y: 120 },
  { Icon: Rocket, color: "text-purple", delay: 1.5, x: 220, y: 100 },
  { Icon: Heart, color: "text-pink", delay: 2, x: 0, y: -150 },
];

export function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!headlineRef.current) return;

    const words = headlineRef.current.querySelectorAll(".word");
    gsap.fromTo(
      words,
      { 
        y: 60, 
        opacity: 0,
        rotateX: -30 
      },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "back.out(1.7)",
        delay: 0.2,
      }
    );
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background with subtle texture */}
      <div className="absolute inset-0 bg-dots opacity-50" />
      
      {/* Colorful Gradient Blobs */}
      <div className="absolute top-20 -left-40 w-[500px] h-[500px] blob-cyan rounded-full blur-[100px] animate-pulse-grow" />
      <div className="absolute top-40 -right-40 w-[400px] h-[400px] blob-purple rounded-full blur-[100px] animate-pulse-grow" style={{ animationDelay: "1s" }} />
      <div className="absolute -bottom-20 left-1/3 w-[450px] h-[450px] blob-pink rounded-full blur-[100px] animate-pulse-grow" style={{ animationDelay: "2s" }} />
      
      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, color, delay, x, y }, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: delay + 0.5, duration: 0.5, type: "spring" }}
          className={`absolute ${color} hidden lg:block`}
          style={{ 
            left: `calc(50% + ${x}px)`, 
            top: `calc(50% + ${y}px)` 
          }}
        >
          <motion.div
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 4 + i, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            <Icon className="w-8 h-8 opacity-60" />
          </motion.div>
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 rounded-full bg-warm-white shadow-brand border border-purple/10"
        >
          <motion.div
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles className="w-5 h-5 text-purple" />
          </motion.div>
          <span className="text-sm font-medium text-charcoal">
            Automation Studio for UK SMEs 🇬🇧
          </span>
        </motion.div>

        {/* Headline */}
        <h1
          ref={headlineRef}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 leading-[1.1]"
          style={{ perspective: "1000px" }}
        >
          <span className="word inline-block">We</span>{" "}
          <span className="word inline-block">Build</span>{" "}
          <br className="hidden sm:block" />
          <span className="word inline-block text-gradient">Revenue</span>{" "}
          <span className="word inline-block text-gradient">Engines</span>
          <motion.span 
            className="word inline-block text-gradient"
            animate={{ rotate: [0, 10, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
          >
            .
          </motion.span>
        </h1>

        {/* Subheadline - Wacky Version */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-lg sm:text-xl text-slate max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          We build robots that do your boring work. They don't need coffee breaks, 
          won't call in sick, and have never once asked for a raise.{" "}
          <span className="text-charcoal font-semibold">Rude of them, honestly.</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="group px-8 py-4 bg-gradient-to-r from-cyan via-purple to-pink text-white rounded-full font-semibold shadow-brand hover:shadow-lg transition-shadow"
          >
            <span className="flex items-center gap-2">
              Let's Build Something
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
          </motion.a>
          <motion.a
            href="https://courses.wearewacky.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 rounded-full font-semibold bg-warm-white border-2 border-purple/20 text-charcoal hover:border-purple/40 hover:shadow-purple transition-all"
          >
            See Our Course Platform
          </motion.a>
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-12 text-sm text-slate"
        >
          <span className="opacity-60">Serving</span>{" "}
          <span className="font-semibold text-charcoal">UK SMEs & Enterprise</span>{" "}
          <span className="opacity-60">(yes, the big ones too)</span>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-slate"
        >
          <span className="text-xs uppercase tracking-widest font-medium">Scroll to explore</span>
          <div className="w-6 h-10 rounded-full border-2 border-purple/30 flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-purple rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
