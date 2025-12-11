"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const ACCENT = "#B07C4F";
const TEXT = "#3d3428";
const SHADOW = "0 3px 4px rgba(0,0,0,0.15), 0 1px 2px rgba(0,0,0,0.1)";

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
  
  return (
    <motion.nav
      className="fixed top-8 left-8 md:top-10 md:left-10 z-30"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
    >
      <ul className="space-y-1">
        {menuItems.map((item, index) => {
          const isHovered = hoveredIndex === index;
          const isOtherHovered = hoveredIndex !== null && hoveredIndex !== index;
          const isActive = item.name === activePage;
          
          // Push effect when other item is hovered
          let pushY = 0;
          if (isOtherHovered && hoveredIndex !== null) {
            const distance = index - hoveredIndex;
            pushY = distance < 0 ? -6 : 6;
          }
          
          return (
            <motion.li
              key={item.name}
              animate={{
                opacity: isHovered ? 1 : isOtherHovered ? 0.5 : 1,
              }}
              transition={{ duration: 0.2 }}
            >
              <motion.a
                href={item.href}
                className="text-xl md:text-2xl lg:text-3xl lowercase inline-block leading-tight origin-left"
                style={{ 
                  fontFamily: "var(--font-syne), var(--font-space), sans-serif", 
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
                  scale: isHovered ? 1.08 : isOtherHovered ? 0.96 : 1,
                  x: isHovered ? 8 : isActive ? 4 : 0,
                  y: pushY,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 25,
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
