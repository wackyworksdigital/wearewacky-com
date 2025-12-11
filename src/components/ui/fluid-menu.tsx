"use client";

import { useState, useEffect } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

const ACCENT = "#B07C4F";
const TEXT = "#3d3428";

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
  
  // Smooth mouse tracking with springs
  const mouseXSpring = useSpring(0.5, { stiffness: 50, damping: 20 });
  const mouseYSpring = useSpring(0.5, { stiffness: 50, damping: 20 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseXSpring.set(e.clientX / window.innerWidth);
      mouseYSpring.set(e.clientY / window.innerHeight);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseXSpring, mouseYSpring]);
  
  return (
    <motion.nav
      className="fixed top-8 left-8 md:top-10 md:left-10 z-30"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
    >
      <ul className="space-y-1">
        {menuItems.map((item, index) => (
          <MenuItem 
            key={item.name}
            item={item}
            index={index}
            hoveredIndex={hoveredIndex}
            setHoveredIndex={setHoveredIndex}
            isActive={item.name === activePage}
            mouseY={mouseYSpring}
          />
        ))}
      </ul>
    </motion.nav>
  );
}

// Separate component for each menu item for better performance
function MenuItem({ 
  item, 
  index, 
  hoveredIndex, 
  setHoveredIndex, 
  isActive,
  mouseY,
}: { 
  item: { name: string; href: string }; 
  index: number; 
  hoveredIndex: number | null;
  setHoveredIndex: (i: number | null) => void;
  isActive: boolean;
  mouseY: ReturnType<typeof useSpring>;
}) {
  const isHovered = hoveredIndex === index;
  const isOtherHovered = hoveredIndex !== null && hoveredIndex !== index;
  
  // Smooth float based on mouse Y - each item reacts slightly differently
  const floatOffset = useTransform(mouseY, [0, 1], [-3 * (index - 2), 3 * (index - 2)]);
  
  // Push effect when other item is hovered
  let pushY = 0;
  if (isOtherHovered && hoveredIndex !== null) {
    const distance = index - hoveredIndex;
    pushY = distance < 0 ? -8 : 8;
  }
  
  // Spring config for ultra-smooth motion
  const smoothSpring = {
    type: "spring" as const,
    stiffness: 120,
    damping: 20,
    mass: 0.8,
  };
  
  // Even smoother for hover effects
  const hoverSpring = {
    type: "spring" as const,
    stiffness: 150,
    damping: 15,
    mass: 0.5,
  };
  
  return (
    <motion.li
      style={{ 
        color: TEXT,
        y: floatOffset,
      }}
      animate={{
        scale: isOtherHovered ? 0.94 : 1,
        opacity: isHovered ? 1 : isOtherHovered ? 0.45 : 0.95,
      }}
      transition={smoothSpring}
    >
      <motion.a
        href={item.href}
        className="text-xl md:text-2xl lg:text-3xl lowercase inline-block leading-tight origin-left"
        style={{ 
          fontFamily: "var(--font-syne), var(--font-space), sans-serif", 
          fontWeight: 500, 
          letterSpacing: "-0.02em",
          color: isActive ? ACCENT : TEXT,
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
          x: isHovered ? 12 : isActive ? 6 : 0,
          y: pushY + (isHovered ? -3 : 0),
          textShadow: isHovered 
            ? "0 6px 12px rgba(0,0,0,0.25), 0 3px 6px rgba(0,0,0,0.2)"
            : "0 2px 4px rgba(0,0,0,0.15), 0 1px 2px rgba(0,0,0,0.1)",
        }}
        transition={hoverSpring}
      >
        {/* Constant organic breathing */}
        <motion.span
          className="inline-block"
          animate={{
            y: [0, -1.5, 0, -0.5, 0],
            rotate: [0, 0.3, 0, -0.2, 0],
          }}
          transition={{
            duration: 6 + index * 0.8,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.25, 0.5, 0.75, 1],
          }}
        >
          {item.name}
        </motion.span>
      </motion.a>
    </motion.li>
  );
}
