"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const ACCENT = "#B07C4F";
const TEXT = "#3d3428";
const BG = "#f5ebe0";

const menuItems = [
  { name: "home", href: "/" },
  { name: "about", href: "/about" },
  { name: "services", href: "/services" },
  { name: "portfolio", href: "/portfolio" },
  { name: "contact", href: "/contact" },
];

function MenuNav() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  return (
    <motion.nav
      className="fixed top-8 left-8 md:top-10 md:left-10 z-30"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <ul className="space-y-1">
        {menuItems.map((item, index) => {
          const isHovered = hoveredIndex === index;
          const isOtherHovered = hoveredIndex !== null && hoveredIndex !== index;
          const isActive = item.name === "contact";
          
          let pushY = 0;
          if (isOtherHovered && hoveredIndex !== null) {
            const distance = index - hoveredIndex;
            pushY = distance < 0 ? -8 : 8;
          }
          
          return (
            <motion.li
              key={item.name}
              style={{ color: TEXT }}
              animate={{
                y: pushY,
                scale: isHovered ? 1.12 : isOtherHovered ? 0.94 : 1,
                opacity: isOtherHovered ? 0.6 : 1,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20, mass: 0.8 }}
            >
              <motion.a
                href={item.href}
                className="text-xl md:text-2xl lg:text-3xl lowercase inline-block leading-tight origin-left"
                style={{ 
                  fontFamily: "var(--font-playfair), Georgia, serif", 
                  fontWeight: 500, 
                  letterSpacing: "-0.02em",
                  color: isActive ? ACCENT : TEXT,
                  textShadow: "0 2px 6px rgba(0,0,0,0.18)",
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => {
                  if (item.name === "home") {
                    sessionStorage.setItem("skipHomeIntro", "true");
                  }
                }}
                animate={{
                  scale: isHovered ? 1.12 : 1,
                  x: isHovered ? 10 : isActive ? 6 : 0,
                  y: isHovered ? -4 : 0,
                }}
                transition={{ type: "spring", stiffness: 200, damping: 15, mass: 0.6 }}
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

export default function ContactPage() {
  return (
    <main className="relative min-h-screen" style={{ backgroundColor: BG, color: TEXT }}>
      {/* Noise + vignette */}
      <div
        className="fixed inset-0 pointer-events-none mix-blend-overlay"
        style={{
          opacity: 0.12,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
      <div
        className="fixed inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(0,0,0,0.08) 100%)" }}
      />

      <MenuNav />

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <motion.div 
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Title */}
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-black lowercase"
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              color: TEXT,
              textShadow: "0 6px 24px rgba(0,0,0,0.2)",
            }}
          >
            let's talk!
          </h1>

          {/* Contact links */}
          <div className="space-y-3 text-xl md:text-2xl lg:text-3xl" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.15)" }}>
            <p>
              email:{" "}
              <Link
                href="mailto:hello@wearewacky.com"
                className="transition-all duration-200 hover:opacity-70"
                style={{ color: ACCENT }}
              >
                hello@wearewacky.com
              </Link>
            </p>
            <p>
              whatsapp:{" "}
              <Link
                href="https://wa.me/447460460318"
                className="transition-all duration-200 hover:opacity-70"
                style={{ color: ACCENT }}
              >
                +44 7460 460318
              </Link>
            </p>
          </div>

          {/* Funny office hours */}
          <div className="space-y-1 text-lg md:text-xl pt-4" style={{ color: ACCENT, textShadow: "0 2px 6px rgba(0,0,0,0.12)" }}>
            <p>office hours: every hour is office hour bro!</p>
            <p>you know why? cos we are winners bro!</p>
            <p className="pt-2">also the robots. those guys doing all the work.</p>
            <p>yeah, they are awesome!</p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
