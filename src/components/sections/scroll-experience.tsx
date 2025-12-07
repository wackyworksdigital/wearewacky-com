"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  "ai",
  "automation",
  "web",
  "app",
  "socials",
  "video",
  "podcast",
  "design",
  "strategy",
  "agents",
  "rag",
  "workflows",
  "cloud",
  "self-hosted",
  "dashboards",
  "integrations",
  "chatbots",
  "scraping",
  "apis",
  "databases",
  "chickencoop",
  "ai",
  "automation",
  "web",
  "app",
  "socials",
  "video",
  "podcast",
  "agents",
  "rag",
  "workflows",
  "cloud",
  "self-hosted",
  "ai",
  "automation",
  "web",
  "app",
  "socials",
  "video",
];

const menuItems = [
  { name: "home", href: "/" },
  { name: "about", href: "/about" },
  { name: "services", href: "/services" },
  { name: "portfolio", href: "/portfolio" },
  { name: "contact", href: "/contact" },
];

// Animated Dot Component - color shifting with mouse interaction
function AnimatedDot({ mouseX, mouseY }: { mouseX: number; mouseY: number }) {
  // Calculate hue based on mouse position (0-360)
  const hue = (mouseX * 180 + mouseY * 180) % 360;
  
  return (
    <span className="relative inline-block w-[0.25em] h-[0.25em] ml-1">
      {/* Main dot - color shifts based on mouse */}
      <motion.span
        className="absolute inset-0 rounded-full"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background: `linear-gradient(135deg, 
            hsl(${hue}, 80%, 60%) 0%, 
            hsl(${(hue + 60) % 360}, 70%, 55%) 50%, 
            hsl(${(hue + 120) % 360}, 75%, 50%) 100%)`,
        }}
      />
      {/* Subtle glow */}
      <motion.span
        className="absolute inset-[-30%] rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, hsla(${hue}, 80%, 60%, 0.3) 0%, transparent 70%)`,
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </span>
  );
}

// Floating Gradient Blobs
function GradientBlobs({ progress }: { progress: number }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Blob 1 - Cyan */}
      <motion.div
        className="absolute w-[40vw] h-[40vw] rounded-full blur-[100px] opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(34,211,238,0.6) 0%, transparent 70%)",
          left: `${10 + progress * 30}%`,
          top: `${20 + Math.sin(progress * Math.PI) * 20}%`,
        }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/* Blob 2 - Purple */}
      <motion.div
        className="absolute w-[35vw] h-[35vw] rounded-full blur-[80px] opacity-15"
        style={{
          background: "radial-gradient(circle, rgba(139,92,246,0.6) 0%, transparent 70%)",
          right: `${15 + progress * 20}%`,
          bottom: `${25 + Math.cos(progress * Math.PI) * 15}%`,
        }}
        animate={{
          scale: [1.1, 0.9, 1.1],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/* Blob 3 - Pink */}
      <motion.div
        className="absolute w-[25vw] h-[25vw] rounded-full blur-[60px] opacity-10"
        style={{
          background: "radial-gradient(circle, rgba(236,72,153,0.5) 0%, transparent 70%)",
          left: `${50 + progress * 15}%`,
          top: `${60 - progress * 20}%`,
        }}
        animate={{
          scale: [0.9, 1.15, 0.9],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

export function ScrollExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Track mouse position (normalized 0-1)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Smooth spring for scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Background color transition - warm dark to cool light, NO pure black/white
  const backgroundColor = useTransform(
    smoothProgress,
    [0, 0.3, 0.5],
    ["#1c1c1e", "#1c1c1e", "#e8e6e3"]
  );

  // Text color transition (light grey to dark grey) - NO pure black/white
  const textColor = useTransform(
    smoothProgress,
    [0, 0.3, 0.5],
    ["#e8e6e3", "#e8e6e3", "#2a2826"]
  );

  // "we build." - starts big and centered, shrinks
  const logoScale = useTransform(smoothProgress, [0, 0.35], [1.5, 0.55]);
  
  // Services ticker - MUCH LONGER, cycles back to ai automation web app socials video
  const tickerOpacity = useTransform(smoothProgress, [0.1, 0.18, 0.82, 0.9], [0, 1, 1, 0]);
  const tickerX = useTransform(smoothProgress, [0.1, 0.9], ["0%", "-280%"]);

  // Menu items - floats up SLOWLY from bottom
  const menuOpacity = useTransform(smoothProgress, [0.88, 0.98], [0, 1]);
  const menuY = useTransform(smoothProgress, [0.88, 0.98], ["120px", "0px"]);

  // Logo text fade out - fades with ticker
  const logoOpacity = useTransform(smoothProgress, [0.82, 0.92], [1, 0]);

  // Brand name appears with menu
  const brandOpacity = useTransform(smoothProgress, [0.88, 0.98], [0, 1]);

  useEffect(() => {
    return smoothProgress.on("change", (v) => setScrollProgress(v));
  }, [smoothProgress]);

  // GSAP ScrollTrigger for additional effects
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Refresh ScrollTrigger when Lenis updates
      ScrollTrigger.refresh();
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative" style={{ height: "500vh" }}>
      {/* Fixed viewport container with texture */}
      <motion.div
        className="fixed inset-0 overflow-hidden"
        style={{ backgroundColor }}
      >
        {/* Noise texture overlay */}
        <div 
          className="absolute inset-0 opacity-[0.035] pointer-events-none z-[100]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Animated Gradient Blobs */}
        <GradientBlobs progress={scrollProgress} />


        {/* "we build." Logo - Shrinks as you scroll */}
        <motion.div
          className="fixed z-50 pointer-events-none flex items-center justify-center"
          style={{
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: logoOpacity,
          }}
        >
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight lowercase whitespace-nowrap origin-center flex items-baseline"
            style={{ 
              color: textColor,
              scale: logoScale,
            }}
          >
            we build
            <AnimatedDot mouseX={mousePos.x} mouseY={mousePos.y} />
          </motion.h1>
        </motion.div>

        {/* Services Ticker - TOP of screen, different font */}
        <motion.div
          className="fixed top-8 left-0 right-0 overflow-hidden z-40"
          style={{ opacity: tickerOpacity }}
        >
          <motion.div
            className="flex gap-12 whitespace-nowrap text-sm md:text-base font-light lowercase tracking-widest pl-8"
            style={{ 
              x: tickerX, 
              color: textColor,
              fontFamily: "var(--font-space), system-ui, sans-serif",
            }}
          >
            {services.map((service, i) => (
              <span key={i} className="opacity-60">
                {service}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Menu Items - Top Left, unusual SERIF font, floats up slowly */}
        <motion.nav
          className="fixed top-8 left-8 md:top-10 md:left-10 z-30"
          style={{ opacity: menuOpacity, y: menuY }}
        >
          <ul className="space-y-0">
            {menuItems.map((item, index) => (
              <motion.li
                key={item.name}
                style={{ color: textColor }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <a
                  href={item.href}
                  className="text-xl md:text-2xl lg:text-3xl font-light lowercase hover:opacity-60 transition-opacity inline-block italic leading-tight tracking-wide"
                  style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
                >
                  {item.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.nav>

        {/* WACKY WORKS DIGITAL Brand - Bottom Right, skinny uppercase */}
        <motion.div
          className="fixed bottom-8 right-8 z-50"
          style={{ opacity: brandOpacity }}
        >
          <motion.p
            className="text-xs md:text-sm font-mono tracking-widest uppercase"
            style={{ color: textColor }}
          >
            Wacky Works Digital
          </motion.p>
        </motion.div>

        {/* Floating Logo - appears at the end */}
        <motion.div
          className="fixed right-12 md:right-24 top-1/2 -translate-y-1/2 z-20"
          style={{ opacity: brandOpacity }}
        >
          <motion.div
            className="relative cursor-pointer"
            animate={{
              y: [0, -15, 0],
              rotate: [0, 2, 0, -2, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.1,
              rotate: 10,
              transition: { duration: 0.3 },
            }}
            whileTap={{
              scale: 0.95,
              rotate: -5,
            }}
            onClick={() => {
              // Fun spin animation on click
              const el = document.getElementById('floating-logo');
              if (el) {
                el.style.animation = 'spin 0.6s ease-out';
                setTimeout(() => {
                  el.style.animation = '';
                }, 600);
              }
            }}
          >
            <Image
              id="floating-logo"
              src="/Wacky Works Digital transparent logo colour no text - 4096x4096.png"
              alt="Wacky Works Digital Logo"
              width={400}
              height={240}
              className="w-48 md:w-64 lg:w-80 h-auto"
              style={{
                filter: "drop-shadow(0 0 40px rgba(139, 92, 246, 0.5))",
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

