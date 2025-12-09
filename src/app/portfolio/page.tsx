"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const ACCENT = "#B07C4F";
const TEXT = "#3d3428";
const BG = "#f5ebe0";
const SHADOW = "0 3px 4px rgba(0,0,0,0.3), 0 1px 2px rgba(0,0,0,0.2)";

// Portfolio projects - TODO list style
const projects = [
  // DONE - Old projects (3-4 items)
  {
    id: "project-1",
    name: "client website redesign",
    status: "done",
    client: "some company",
  },
  {
    id: "project-2", 
    name: "logo rebrand",
    status: "done",
    client: "another company",
  },
  {
    id: "project-3",
    name: "social media campaign",
    status: "done",
    client: "cool startup",
  },
  {
    id: "project-4",
    name: "app prototype",
    status: "done",
    client: "tech bros inc",
  },
  
  // IN PROGRESS - Current work (2 items)
  {
    id: "project-5",
    name: "ai automation setup",
    status: "in-progress",
    client: "secret client",
  },
  {
    id: "project-6",
    name: "e-commerce platform",
    status: "in-progress",
    client: "shop owners",
  },
  
  // COMING UP - Future projects (6-7 items)
  {
    id: "project-7",
    name: "mobile app development",
    status: "coming",
    client: "pending",
  },
  {
    id: "project-8",
    name: "brand identity package",
    status: "coming",
    client: "pending",
  },
  {
    id: "project-9",
    name: "video ad series",
    status: "coming",
    client: "pending",
  },
  {
    id: "project-10",
    name: "chatbot integration",
    status: "coming",
    client: "pending",
  },
  {
    id: "project-11",
    name: "dashboard redesign",
    status: "coming",
    client: "pending",
  },
  {
    id: "project-12",
    name: "marketing automation",
    status: "coming",
    client: "pending",
  },
  {
    id: "project-13",
    name: "something exciting",
    status: "coming",
    client: "you?",
  },
];

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
          const isActive = item.name === "portfolio";
          
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
                scale: isOtherHovered ? 0.94 : 1,
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
                  scale: isHovered ? 1.12 : 1,
                  x: isHovered ? 10 : isActive ? 6 : 0,
                  y: isHovered ? -4 : 0,
                  opacity: isHovered ? 1 : isOtherHovered ? 0.5 : 1,
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

// Status icon component
function StatusIcon({ status }: { status: string }) {
  if (status === "done") {
    return (
      <motion.span 
        className="mr-4 text-green-600"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 400, damping: 15 }}
      >
        ✓
      </motion.span>
    );
  }
  if (status === "in-progress") {
    return (
      <motion.span 
        className="mr-4"
        style={{ color: ACCENT }}
        animate={{ x: [0, 4, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        →
      </motion.span>
    );
  }
  return (
    <span className="mr-4 opacity-40">○</span>
  );
}

export default function PortfolioPage() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  
  // Group projects by status
  const doneProjects = projects.filter(p => p.status === "done");
  const inProgressProjects = projects.filter(p => p.status === "in-progress");
  const comingProjects = projects.filter(p => p.status === "coming");

  return (
    <main className="relative min-h-screen overflow-hidden" style={{ backgroundColor: BG, color: TEXT }}>
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

      {/* Main content - TODO List */}
      <div className="relative z-10 min-h-screen flex items-center justify-center pl-48">
        <div className="max-w-2xl">
          {/* Section: Done */}
          <div className="mb-8">
            <motion.h2 
              className="text-sm uppercase tracking-[0.3em] mb-4 opacity-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 0.1 }}
            >
              completed
            </motion.h2>
            {doneProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="flex items-center py-2 cursor-default"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <StatusIcon status={project.status} />
                <motion.span
                  className="text-2xl md:text-3xl lowercase line-through"
                  style={{ 
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    color: `${TEXT}55`,
                    textShadow: hoveredProject === project.id ? "0 2px 4px rgba(0,0,0,0.15)" : "none",
                  }}
                  animate={{
                    x: hoveredProject === project.id ? 8 : 0,
                    opacity: hoveredProject === project.id ? 0.7 : 0.4,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {project.name}
                </motion.span>
              </motion.div>
            ))}
          </div>

          {/* Section: In Progress */}
          <div className="mb-8">
            <motion.h2 
              className="text-sm uppercase tracking-[0.3em] mb-4"
              style={{ color: ACCENT }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              in progress
            </motion.h2>
            {inProgressProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="flex items-center py-2 cursor-default"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.05 }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <StatusIcon status={project.status} />
                <motion.span
                  className="text-2xl md:text-3xl lowercase font-semibold"
                  style={{ 
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    color: TEXT,
                    textShadow: SHADOW,
                  }}
                  animate={{
                    x: hoveredProject === project.id ? 12 : 0,
                    scale: hoveredProject === project.id ? 1.05 : 1,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {project.name}
                </motion.span>
              </motion.div>
            ))}
          </div>

          {/* Section: Coming Up */}
          <div>
            <motion.h2 
              className="text-sm uppercase tracking-[0.3em] mb-4 opacity-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 0.3 }}
            >
              coming up
            </motion.h2>
            {comingProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="flex items-center py-2 cursor-default"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.05 }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <StatusIcon status={project.status} />
                <motion.span
                  className="text-2xl md:text-3xl lowercase"
                  style={{ 
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    color: `${TEXT}99`,
                    textShadow: hoveredProject === project.id ? SHADOW : "none",
                  }}
                  animate={{
                    x: hoveredProject === project.id ? 10 : 0,
                    opacity: hoveredProject === project.id ? 1 : 0.6,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {project.name}
                </motion.span>
              </motion.div>
            ))}
          </div>

          {/* Fun note at bottom */}
          <motion.p
            className="mt-12 text-sm opacity-40 italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 0.8 }}
          >
            want to be on this list? let's talk!
          </motion.p>
        </div>
      </div>
    </main>
  );
}
