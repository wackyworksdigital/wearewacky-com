"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowDown, Zap, Bot, Sparkles, Rocket, Code2 } from "lucide-react";
import gsap from "gsap";

// Floating icons that react to cursor
const floatingIcons = [
  { Icon: Zap, color: "text-cyan", x: -280, y: -120 },
  { Icon: Bot, color: "text-purple", x: 300, y: -100 },
  { Icon: Sparkles, color: "text-pink", x: -260, y: 100 },
  { Icon: Rocket, color: "text-purple", x: 280, y: 80 },
  { Icon: Code2, color: "text-cyan", x: 0, y: -180 },
];

export function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Smooth spring animation for cursor tracking
  const springConfig = { damping: 25, stiffness: 150 };
  const mouseX = useSpring(useMotionValue(0), springConfig);
  const mouseY = useSpring(useMotionValue(0), springConfig);

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Calculate offset from center (normalized -1 to 1)
      const offsetX = (e.clientX - centerX) / (rect.width / 2);
      const offsetY = (e.clientY - centerY) / (rect.height / 2);
      
      setMousePosition({ x: offsetX, y: offsetY });
      mouseX.set(offsetX);
      mouseY.set(offsetY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Headline animation
  useEffect(() => {
    if (!headlineRef.current) return;

    const lines = headlineRef.current.querySelectorAll(".line");
    gsap.fromTo(
      lines,
      { 
        y: 40, 
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.3,
      }
    );
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background with subtle texture */}
      <div className="absolute inset-0 bg-dots opacity-40" />
      
      {/* Colorful Gradient Blobs */}
      <div className="absolute top-20 -left-40 w-[500px] h-[500px] blob-cyan rounded-full blur-[120px] opacity-60" />
      <div className="absolute top-40 -right-40 w-[400px] h-[400px] blob-purple rounded-full blur-[120px] opacity-50" />
      <div className="absolute -bottom-20 left-1/3 w-[450px] h-[450px] blob-pink rounded-full blur-[120px] opacity-40" />
      
      {/* Floating Icons - Cursor Reactive */}
      {floatingIcons.map(({ Icon, color, x, y }, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 + i * 0.1, duration: 0.5, type: "spring" }}
          className={`absolute ${color} hidden lg:block pointer-events-none`}
          style={{ 
            left: `calc(50% + ${x}px)`, 
            top: `calc(50% + ${y}px)`,
            // Parallax effect based on mouse position
            transform: `translate(${mousePosition.x * (20 + i * 8)}px, ${mousePosition.y * (20 + i * 8)}px)`,
            transition: "transform 0.3s ease-out"
          }}
        >
          <motion.div
            animate={{ 
              y: [0, -10, 0],
            }}
            transition={{ 
              duration: 3 + i * 0.5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            <Icon className="w-8 h-8 opacity-50" />
          </motion.div>
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Headline */}
        <h1
          ref={headlineRef}
          className="mb-8"
        >
          <span className="line block text-sm sm:text-base uppercase tracking-[0.3em] text-slate font-medium mb-4">
            Wacky Works Digital
          </span>
          <span className="line block text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight lowercase">
            we build<span className="text-gradient">.</span>
          </span>
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

      {/* Scroll Indicator - Smoother */}
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
