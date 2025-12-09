"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Services - these are what "we build"
// AI, RAG = acronyms (capitalized)
// Singular because "we build AI" not "we build AIs"
const baseServices = [
  "AI",
  "automations",
  "websites",
  "apps",
  "socials",
  "videos",
  "podcasts",
  "designs",
  "strategies",
  "AI agents",
  "RAG",
  "workflows",
  "cloud apps",
  "self-hosted tools",
  "dashboards",
  "integrations",
  "chatbots",
  "scrapers",
  "APIs",
  "databases",
  "chickencoops",
];

// Repeat services enough times to fill any screen width during scroll
const services = [...baseServices, ...baseServices, ...baseServices, ...baseServices, ...baseServices, ...baseServices];

const menuItems = [
  { name: "home", href: "/" },
  { name: "about", href: "/about" },
  { name: "services", href: "/services" },
  { name: "portfolio", href: "/portfolio" },
  { name: "contact", href: "/contact" },
];

// Animated Dot Component - color shifting with mouse interaction
// Size matches the dot on "i" (smaller)
function AnimatedDot({ mouseX, mouseY }: { mouseX: number; mouseY: number }) {
  // Calculate hue based on mouse position (0-360)
  const hue = (mouseX * 180 + mouseY * 180) % 360;
  
  return (
    <span className="relative inline-block w-[0.14em] h-[0.14em] ml-[0.05em] mb-[0.05em]">
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
        className="absolute inset-[-40%] rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, hsla(${hue}, 80%, 60%, 0.4) 0%, transparent 70%)`,
        }}
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.3, 0.5, 0.3],
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

// Logo colors from the actual WW logo gradient
const LOGO_COLORS = {
  cyan: "#00D2D3",    // Left side of logo
  purple: "#A855F7",  // Middle of logo  
  pink: "#EC4899",    // Right side of logo
};

// Menu Navigation with fluid hover animations
const WARM_BROWN = "#B07C4F"; // Consistent accent color across all pages

function MenuNav({ 
  menuOpacity, 
  menuY, 
  textColor, 
  menuItems 
}: { 
  menuOpacity: any; 
  menuY: any; 
  textColor: any; 
  menuItems: { name: string; href: string }[] 
}) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  return (
    <motion.nav
      className="fixed top-8 left-8 md:top-10 md:left-10 z-30"
      style={{ opacity: menuOpacity, y: menuY }}
    >
      <ul className="space-y-1">
        {menuItems.map((item, index) => {
          const isHovered = hoveredIndex === index;
          const isOtherHovered = hoveredIndex !== null && hoveredIndex !== index;
          const isActive = item.name === "home"; // Home is active on homepage
          
          // Calculate push direction: items above hovered go up, below go down
          let pushY = 0;
          if (isOtherHovered && hoveredIndex !== null) {
            const distance = index - hoveredIndex;
            pushY = distance < 0 ? -8 : 8; // Push away from hovered item
          }
          
          return (
            <motion.li
              key={item.name}
              style={{ color: textColor }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              animate={{
                y: pushY,
                scale: isOtherHovered ? 0.94 : 1,
              }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 20,
                mass: 0.8,
              }}
            >
              <motion.a
                href={item.href}
                className="text-xl md:text-2xl lg:text-3xl lowercase inline-block leading-tight origin-left"
                style={{ 
                  fontFamily: "var(--font-playfair), Georgia, serif", 
                  fontWeight: 500, 
                  letterSpacing: "-0.02em",
                  color: isActive ? WARM_BROWN : textColor,
                  textShadow: "0 3px 4px rgba(0,0,0,0.3), 0 1px 2px rgba(0,0,0,0.2)",
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                animate={{
                  scale: isHovered ? 1.12 : 1,
                  x: isHovered ? 10 : isActive ? 6 : 0,
                  y: isHovered ? -4 : 0,
                  opacity: isHovered ? 1 : isOtherHovered ? 0.5 : 1,
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 200, 
                  damping: 15,
                  mass: 0.6,
                }}
              >
                {item.name}
              </motion.a>
            </motion.li>
          );
        })}
      </ul>
    </motion.nav>
  );
}

// Floating Logo - SECRET MINI GAME!
// Logo runs away, player tries to click it
// Pixel-based hit detection - click on color = hit, click on transparent = miss
function FloatingLogo({ 
  opacity, 
  mouseX, 
  mouseY 
}: { 
  opacity: any; 
  mouseX: number; 
  mouseY: number;
}) {
  // Start at right edge of circle
  const [position, setPosition] = useState({ x: 100, y: 0 });
  const [animation, setAnimation] = useState<'idle' | 'spin' | 'wiggle'>('idle');
  const [playerScore, setPlayerScore] = useState(0);
  const [wackyScore, setWackyScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [winner, setWinner] = useState<'player' | 'wacky' | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  
  // CIRCULAR bounds - bigger playing field, centered
  const boundRadius = 120;
  
  // Simple hit detection - click within a generous radius of logo center
  const isClickOnLogo = (clickX: number, clickY: number, logoRect: DOMRect): boolean => {
    // Get logo center
    const logoCenterX = logoRect.left + logoRect.width / 2;
    const logoCenterY = logoRect.top + logoRect.height / 2;
    
    // Distance from click to logo center
    const distX = clickX - logoCenterX;
    const distY = clickY - logoCenterY;
    const distance = Math.sqrt(distX * distX + distY * distY);
    
    // Generous hit radius - half the logo width (easy to hit!)
    const hitRadius = logoRect.width * 0.5;
    
    return distance < hitRadius;
  };
  
  // Sound effects
  const playSound = (type: 'hit' | 'miss' | 'win' | 'lose') => {
    if (typeof window === 'undefined') return;
    
    try {
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = ctx.createOscillator();
      const gain = ctx.createGain();
      
      oscillator.connect(gain);
      gain.connect(ctx.destination);
      
      switch(type) {
        case 'hit':
          oscillator.frequency.setValueAtTime(400, ctx.currentTime);
          oscillator.frequency.linearRampToValueAtTime(800, ctx.currentTime + 0.1);
          gain.gain.setValueAtTime(0.2, ctx.currentTime);
          gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.15);
          break;
        case 'miss':
          oscillator.frequency.setValueAtTime(300, ctx.currentTime);
          oscillator.frequency.linearRampToValueAtTime(150, ctx.currentTime + 0.15);
          gain.gain.setValueAtTime(0.15, ctx.currentTime);
          gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.2);
          break;
        case 'win':
          // Longer fanfare: ta-ta-ra-ta-ta-RAAAA!
          oscillator.frequency.setValueAtTime(392, ctx.currentTime);        // G4
          oscillator.frequency.setValueAtTime(392, ctx.currentTime + 0.1);  // G4
          oscillator.frequency.setValueAtTime(523, ctx.currentTime + 0.2);  // C5
          oscillator.frequency.setValueAtTime(523, ctx.currentTime + 0.3);  // C5
          oscillator.frequency.setValueAtTime(659, ctx.currentTime + 0.4);  // E5
          oscillator.frequency.setValueAtTime(784, ctx.currentTime + 0.5);  // G5 (hold)
          gain.gain.setValueAtTime(0.2, ctx.currentTime);
          gain.gain.setValueAtTime(0.25, ctx.currentTime + 0.5);
          gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.9);
          break;
        case 'lose':
          oscillator.frequency.setValueAtTime(250, ctx.currentTime);
          oscillator.frequency.linearRampToValueAtTime(100, ctx.currentTime + 0.3);
          gain.gain.setValueAtTime(0.2, ctx.currentTime);
          gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.4);
          break;
      }
      
      oscillator.start(ctx.currentTime);
      oscillator.stop(ctx.currentTime + 1.0);
    } catch (e) {
      // Audio context not available
    }
  };
  
  useEffect(() => {
    if (!containerRef.current || winner) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const cursorX = mouseX * window.innerWidth;
    const cursorY = mouseY * window.innerHeight;
    
    const distX = cursorX - centerX - position.x;
    const distY = cursorY - centerY - position.y;
    const distance = Math.sqrt(distX * distX + distY * distY);
    
    // React from further away (400px) and more sensitively
    if (distance < 300 && distance > 0) {
      // React when closer, move slower - give users a fighting chance!
      const strength = Math.pow((300 - distance) / 300, 0.7);
      const speed = 0.5; // Much slower - catchable!
      let moveX = position.x - (distX / distance) * boundRadius * strength * speed;
      let moveY = position.y - (distY / distance) * boundRadius * strength * speed;
      
      // CIRCULAR bounds - clamp to circle, not rectangle!
      const moveDistance = Math.sqrt(moveX * moveX + moveY * moveY);
      if (moveDistance > boundRadius) {
        const scale = boundRadius / moveDistance;
        moveX *= scale;
        moveY *= scale;
      }
      
      setPosition({ x: moveX, y: moveY });
    } else {
      // Slowly drift back toward starting position (right edge)
      setPosition(prev => ({
        x: prev.x + (100 - prev.x) * 0.02,
        y: prev.y * 0.95,
      }));
    }
  }, [mouseX, mouseY, winner]);

  // Check for winner - fanfare plays for ANY winner!
  useEffect(() => {
    if (playerScore >= 5 && !winner) {
      setWinner('player');
      playSound('win');
    } else if (wackyScore >= 5 && !winner) {
      setWinner('wacky');
      playSound('win'); // Fanfare for wacky too!
    }
  }, [playerScore, wackyScore, winner]);

  // Handle click - check if within logo radius
  const handleClick = (e: React.MouseEvent) => {
    if (winner) return;
    
    setGameStarted(true);
    
    // Get logo element bounds
    const logoEl = logoRef.current?.querySelector('img');
    if (!logoEl) {
      setWackyScore(prev => prev + 1);
      setAnimation('wiggle');
      playSound('miss');
      setTimeout(() => setAnimation('idle'), 400);
      return;
    }
    
    const logoRect = logoEl.getBoundingClientRect();
    const isHit = isClickOnLogo(e.clientX, e.clientY, logoRect);
    
    if (isHit) {
      // HIT!
      setPlayerScore(prev => prev + 1);
      setAnimation('spin');
      playSound('hit');
      setTimeout(() => setAnimation('idle'), 600);
    } else {
      // MISS!
      setWackyScore(prev => prev + 1);
      setAnimation('wiggle');
      playSound('miss');
      setTimeout(() => setAnimation('idle'), 400);
    }
  };

  // Reset game - keep scoreboard visible
  const resetGame = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPlayerScore(0);
    setWackyScore(0);
    setWinner(null);
    // gameStarted stays true so scoreboard remains visible
  };

  // Handle click when there's a winner - reset game
  const handleWinnerClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (winner) {
      setPlayerScore(0);
      setWackyScore(0);
      setWinner(null);
    }
  };

  const scoreboard = gameStarted ? createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed top-[40px] right-[70px] z-[200]"
    >
      <div className="flex items-end gap-5 font-mono">
        {/* Player score */}
        <motion.div 
          className="text-center"
          animate={{
            scale: winner === 'player' ? 1.4 : winner === 'wacky' ? 0.7 : 1,
            opacity: winner === 'wacky' ? 0.4 : 1,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          <div className="text-[10px] uppercase tracking-widest mb-1" style={{ color: `${LOGO_COLORS.cyan}99` }}>
            you
          </div>
          <div className="text-2xl tracking-wider" style={{ color: LOGO_COLORS.cyan }}>
            {playerScore}
          </div>
        </motion.div>
        
        <div className="text-slate/30 text-sm mb-0.5 tracking-widest">
          :
        </div>
        
        {/* Wacky score */}
        <motion.div 
          className="text-center"
          animate={{
            scale: winner === 'wacky' ? 1.4 : winner === 'player' ? 0.7 : 1,
            opacity: winner === 'player' ? 0.4 : 1,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          <div className="text-[10px] uppercase tracking-widest mb-1" style={{ color: `${LOGO_COLORS.pink}99` }}>
            wacky
          </div>
          <div className="text-2xl tracking-wider" style={{ color: LOGO_COLORS.pink }}>
            {wackyScore}
          </div>
        </motion.div>
      </div>
    </motion.div>,
    document.body
  ) : null;

  return (
    <>
      {scoreboard}
      <motion.div
        ref={containerRef}
        className="fixed left-1/2 top-1/2 z-20 cursor-default"
        style={{ 
          opacity, 
          transform: "translate(-50%, -50%)",
          width: "400px",
          height: "400px",
        }}
        onClick={winner ? handleWinnerClick : handleClick}
      >
        {/* The escaping logo */}
        <motion.div
          ref={logoRef}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          animate={{
            x: position.x,
            y: position.y,
            rotate: animation === 'spin' ? 360 : animation === 'wiggle' ? [0, -10, 10, -10, 10, 0] : [0, 2, 0, -2, 0],
            scale: animation === 'spin' ? [1, 1.15, 1] : animation === 'wiggle' ? [1, 1.05, 1] : 1,
          }}
          transition={animation !== 'idle' ? {
            duration: animation === 'spin' ? 0.6 : 0.4,
            ease: "easeOut",
          } : {
            x: { type: "spring", stiffness: 120, damping: 15 },
            y: { type: "spring", stiffness: 120, damping: 15 },
            rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <Image
            src="/Wacky Works Digital transparent logo colour no text - 4096x4096.png"
            alt="Wacky Works Digital Logo"
            width={400}
            height={240}
            className="w-52 md:w-64 lg:w-72 h-auto"
            style={{
              filter: `drop-shadow(0 0 ${winner === 'player' ? '60px rgba(34,211,238,0.6)' : winner === 'wacky' ? '60px rgba(236,72,153,0.6)' : '40px rgba(139,92,246,0.5)'}) drop-shadow(0 3px 4px rgba(0,0,0,0.3)) drop-shadow(0 1px 2px rgba(0,0,0,0.2))`,
            }}
            draggable={false}
          />
        </motion.div>
      </motion.div>
    </>
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
  const [skipIntro, setSkipIntro] = useState(false);
  
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

  // Background color transition - clearly warm/beige, NOT grey
  const backgroundColor = useTransform(
    smoothProgress,
    [0, 0.3, 0.5],
    ["#3d3428", "#3d3428", "#f5ebe0"]  // Warm chocolate to warm beige/tan
  );

  // Text color transition - warm tones matching background
  const textColor = useTransform(
    smoothProgress,
    [0, 0.3, 0.5],
    ["#f5ebe0", "#f5ebe0", "#3d3428"]  // Warm beige to warm chocolate
  );

  // "we build." - starts big and centered, shrinks
  const logoScale = useTransform(smoothProgress, [0, 0.4], [1.5, 0.55]);
  
  // TIMING SEQUENCE:
  // 1. Services ticker - stays MUCH LONGER, scrolls further for wide screens
  const tickerOpacity = useTransform(smoothProgress, [0.08, 0.15, 0.6, 0.68], [0, 1, 1, 0]);
  const tickerX = useTransform(smoothProgress, [0.08, 0.68], ["0%", "-400%"]); // More scroll distance for 6x words

  // 2. Menu items - start sliding up as ticker fades, transparent to visible
  const menuOpacity = useTransform(smoothProgress, [0.62, 0.75], [0, 1]);
  const menuY = useTransform(smoothProgress, [0.62, 0.78], ["150px", "0px"]);

  // 3. Brand name "WACKY WORKS DIGITAL" - appears after menu lands
  const brandOpacity = useTransform(smoothProgress, [0.74, 0.82], [0, 1]);

  // 4. "we build." fades out - AFTER menu is visible
  const logoOpacity = useTransform(smoothProgress, [0.78, 0.88], [1, 0]);

  // 5. WW Logo appears last - after "we build." is gone
  const wwLogoOpacity = useTransform(smoothProgress, [0.86, 0.95], [0, 1]);

  useEffect(() => {
    return smoothProgress.on("change", (v) => setScrollProgress(v));
  }, [smoothProgress]);

  // If coming back from another page (e.g., About) and user clicked "home",
  // show end state immediately (no intro animation).
  useEffect(() => {
    if (typeof window === "undefined") return;
    const skip = sessionStorage.getItem("skipHomeIntro");
    if (skip === "true") {
      sessionStorage.removeItem("skipHomeIntro");
      setSkipIntro(true);
    }
  }, []);

  // GSAP ScrollTrigger for additional effects (must be before conditional return)
  useEffect(() => {
    if (skipIntro) return; // Don't run GSAP stuff in skip mode
    const ctx = gsap.context(() => {
      ScrollTrigger.refresh();
    });
    return () => ctx.revert();
  }, [skipIntro]);

  if (skipIntro) {
    // Render simplified end state (menu + brand + logo)
    return (
      <div className="relative" style={{ height: "100vh" }}>
        <motion.div
          className="fixed inset-0 overflow-hidden"
          style={{ backgroundColor: "#f5ebe0" }}
        >
          <div 
            className="absolute inset-0 pointer-events-none z-[100] mix-blend-overlay"
            style={{
              opacity: 0.15,
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            }}
          />
          <div 
            className="absolute inset-0 pointer-events-none z-[99]"
            style={{
              background: "radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(0,0,0,0.08) 100%)",
            }}
          />

          <MenuNav 
            menuOpacity={1} 
            menuY={0} 
            textColor={"#3d3428"} 
            menuItems={menuItems} 
          />

          <motion.div
            className="fixed bottom-8 right-8 z-50"
            style={{ opacity: 1 }}
          >
            <motion.p
              className="text-xs md:text-sm font-mono tracking-widest uppercase"
              style={{ color: "#3d3428", textShadow: "0 3px 4px rgba(0,0,0,0.3), 0 1px 2px rgba(0,0,0,0.2)" }}
            >
              Wacky Works Digital
            </motion.p>
          </motion.div>

          <FloatingLogo 
            opacity={1} 
            mouseX={mousePos.x} 
            mouseY={mousePos.y} 
          />
        </motion.div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative" style={{ height: "500vh" }}>
      {/* Fixed viewport container with texture */}
      <motion.div
        className="fixed inset-0 overflow-hidden"
        style={{ backgroundColor }}
      >
        {/* Noise/grain texture overlay - organic paper-like feel */}
        <div 
          className="absolute inset-0 pointer-events-none z-[100] mix-blend-overlay"
          style={{
            opacity: 0.15,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
        {/* Subtle vignette for depth */}
        <div 
          className="absolute inset-0 pointer-events-none z-[99]"
          style={{
            background: "radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(0,0,0,0.08) 100%)",
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
              textShadow: "0 8px 10px rgba(0,0,0,0.35), 0 4px 4px rgba(0,0,0,0.25)",
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
              textShadow: "0 3px 4px rgba(0,0,0,0.3), 0 1px 2px rgba(0,0,0,0.2)",
            }}
          >
            {services.map((service, i) => (
              <span key={i} className="opacity-60">
                {service}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Menu Items - Top Left, with fluid hover animations that push siblings */}
        <MenuNav 
          menuOpacity={menuOpacity} 
          menuY={menuY} 
          textColor={textColor} 
          menuItems={menuItems} 
        />

        {/* WACKY WORKS DIGITAL Brand - Bottom Right, skinny uppercase */}
        <motion.div
          className="fixed bottom-8 right-8 z-50"
          style={{ opacity: brandOpacity }}
        >
          <motion.p
            className="text-xs md:text-sm font-mono tracking-widest uppercase"
            style={{ color: textColor, textShadow: "0 3px 4px rgba(0,0,0,0.3), 0 1px 2px rgba(0,0,0,0.2)" }}
          >
            Wacky Works Digital
          </motion.p>
        </motion.div>

        {/* Floating Logo - appears LAST after "we build." fades */}
        <FloatingLogo 
          opacity={wwLogoOpacity} 
          mouseX={mousePos.x} 
          mouseY={mousePos.y} 
        />
      </motion.div>
    </div>
  );
}

