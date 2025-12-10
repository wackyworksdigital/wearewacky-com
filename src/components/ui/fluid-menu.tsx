"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ACCENT = "#B07C4F";
const TEXT = "#3d3428";
const SHADOW = "0 3px 4px rgba(0,0,0,0.3), 0 1px 2px rgba(0,0,0,0.2)";

const menuItems = [
  { name: "home", href: "/" },
  { name: "about", href: "/about" },
  { name: "services", href: "/services" },
  { name: "portfolio", href: "/portfolio" },
  { name: "contact", href: "/contact" },
];

interface FluidMenuProps {
  activePage?: string;
}

export function FluidMenu({ activePage = "" }: FluidMenuProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  
  // Track mouse for subtle reactions
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
          const isActive = item.name === activePage;
          
          // Push effect - items above go up, below go down
          let pushY = 0;
          if (isOtherHovered && hoveredIndex !== null) {
            const distance = index - hoveredIndex;
            pushY = distance < 0 ? -10 : 10;
          }
          
          // Subtle floating based on mouse Y position
          const floatOffset = (mousePos.y - 0.5) * 3 * (index - 2);
          
          // Breathing animation offset per item
          const breatheDelay = index * 0.4;
          
          return (
            <motion.li
              key={item.name}
              style={{ color: TEXT }}
              animate={{
                y: pushY + floatOffset,
                scale: isOtherHovered ? 0.92 : 1,
                opacity: isHovered ? 1 : isOtherHovered ? 0.4 : 0.9,
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
                  color: isActive ? ACCENT : TEXT,
                  textShadow: SHADOW,
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => {
                  if (item.name === "home") {
                    sessionStorage.setItem("skipHomeIntro", "true");
                  }
                }}
                animate={{
                  scale: isHovered ? 1.15 : 1,
                  x: isHovered ? 15 : isActive ? 8 : 0,
                  y: isHovered ? -5 : 0,
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 200, 
                  damping: 15, 
                  mass: 0.6,
                }}
              >
                {/* Constant subtle breathing animation */}
                <motion.span
                  className="inline-block"
                  animate={{
                    y: [0, -2, 0],
                    scale: [1, 1.01, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: breatheDelay,
                  }}
                >
                  {item.name}
                </motion.span>
              </motion.a>
            </motion.li>
          );
        })}
      </ul>
    </motion.nav>
  );
}

