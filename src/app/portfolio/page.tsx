"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const ACCENT = "#B07C4F";
const TEXT = "#3d3428";
const BG = "#f5ebe0";
const SHADOW = "0 3px 4px rgba(0,0,0,0.3), 0 1px 2px rgba(0,0,0,0.2)";

// Portfolio projects - TODO list style with stories and links
const projects = [
  // DONE - Old projects (3-4 items)
  {
    id: "ai-course",
    name: "ai fundamentals course",
    status: "done",
    story: "built a comprehensive AI course for complete beginners. from 'what is AI' to building your first chatbot in 8 weeks. partnered with waitrose & john lewis partners for internal training.",
    link: "https://example.com/ai-course",
    linkText: "view the course",
  },
  {
    id: "automation-workshop",
    name: "automation workshop",
    status: "done",
    story: "ran a hands-on workshop teaching small business owners how to automate their boring tasks. 50+ attendees, lots of 'aha!' moments, one person cried (happy tears).",
    link: null,
    linkText: null,
  },
  {
    id: "brand-refresh",
    name: "startup brand refresh",
    status: "done",
    story: "complete rebrand for a fintech startup. new logo, colours, website, the works. they got funded 3 months later. coincidence? maybe. but we're taking credit anyway.",
    link: null,
    linkText: null,
  },
  {
    id: "chatbot-build",
    name: "customer service chatbot",
    status: "done",
    story: "AI chatbot that handles 70% of customer queries for an e-commerce client. their support team finally got to take lunch breaks.",
    link: null,
    linkText: null,
  },
  
  // IN PROGRESS - Current work (2 items)
  {
    id: "saas-platform",
    name: "saas platform build",
    status: "in-progress",
    story: "building a full SaaS product from scratch. AI-powered, subscription-based, all the buzzwords. launching soon™.",
    link: null,
    linkText: null,
  },
  {
    id: "content-engine",
    name: "social content engine",
    status: "in-progress",
    story: "automated content creation system that generates, schedules, and posts social content. because nobody has time for that manual stuff anymore.",
    link: null,
    linkText: null,
  },
  
  // COMING UP - Future projects (6-7 items)
  {
    id: "mobile-app",
    name: "fitness app",
    status: "coming",
    story: "mobile app with AI personal trainer. it'll judge your form and your life choices. coming to app stores near you.",
    link: null,
    linkText: null,
  },
  {
    id: "video-series",
    name: "video ad campaign",
    status: "coming",
    story: "series of AI-generated video ads for a DTC brand. 30 variations, A/B tested to death. the algorithm will decide what's funny.",
    link: null,
    linkText: null,
  },
  {
    id: "ai-assistant",
    name: "industry-specific ai assistant",
    status: "coming",
    story: "custom AI assistant trained on industry-specific knowledge. like having a junior employee who actually read all the documentation.",
    link: null,
    linkText: null,
  },
  {
    id: "dashboard",
    name: "analytics dashboard",
    status: "coming",
    story: "real-time dashboard that makes data look pretty and executives feel smart. lots of graphs. maybe some pie charts if we're feeling wild.",
    link: null,
    linkText: null,
  },
  {
    id: "integration",
    name: "enterprise integration",
    status: "coming",
    story: "connecting a bunch of enterprise systems that were never meant to talk to each other. digital diplomacy at its finest.",
    link: null,
    linkText: null,
  },
  {
    id: "your-project",
    name: "your project here?",
    status: "coming",
    story: "this could be you! we've got a spot with your name on it. well, not literally. but we could add your name. if you want.",
    link: "/contact",
    linkText: "let's talk!",
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
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  
  // Group projects by status
  const doneProjects = projects.filter(p => p.status === "done");
  const inProgressProjects = projects.filter(p => p.status === "in-progress");
  const comingProjects = projects.filter(p => p.status === "coming");
  
  const selected = projects.find(p => p.id === selectedProject);

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

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex">
        {/* Project List - Left */}
        <div className="flex-1 flex items-center justify-center pl-48 pr-8">
          <div className="max-w-lg">
            {/* Section: Done */}
            <div className="mb-6">
              <motion.h2 
                className="text-sm uppercase tracking-[0.3em] mb-3 opacity-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ delay: 0.1 }}
              >
                completed
              </motion.h2>
              {doneProjects.map((project, index) => {
                const isSelected = selectedProject === project.id;
                return (
                  <motion.div
                    key={project.id}
                    className="flex items-center py-1.5 cursor-pointer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onMouseEnter={() => setHoveredProject(project.id)}
                    onMouseLeave={() => setHoveredProject(null)}
                    onClick={() => setSelectedProject(isSelected ? null : project.id)}
                  >
                    <StatusIcon status={project.status} />
                    <motion.span
                      className="text-xl md:text-2xl lowercase line-through"
                      style={{ 
                        fontFamily: "var(--font-playfair), Georgia, serif",
                        color: isSelected ? ACCENT : `${TEXT}55`,
                        textShadow: hoveredProject === project.id || isSelected ? "0 2px 4px rgba(0,0,0,0.15)" : "none",
                      }}
                      animate={{
                        x: hoveredProject === project.id ? 8 : isSelected ? 6 : 0,
                        opacity: hoveredProject === project.id || isSelected ? 0.8 : 0.4,
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      {project.name}
                    </motion.span>
                  </motion.div>
                );
              })}
            </div>

            {/* Section: In Progress */}
            <div className="mb-6">
              <motion.h2 
                className="text-sm uppercase tracking-[0.3em] mb-3"
                style={{ color: ACCENT }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                in progress
              </motion.h2>
              {inProgressProjects.map((project, index) => {
                const isSelected = selectedProject === project.id;
                return (
                  <motion.div
                    key={project.id}
                    className="flex items-center py-1.5 cursor-pointer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.05 }}
                    onMouseEnter={() => setHoveredProject(project.id)}
                    onMouseLeave={() => setHoveredProject(null)}
                    onClick={() => setSelectedProject(isSelected ? null : project.id)}
                  >
                    <StatusIcon status={project.status} />
                    <motion.span
                      className="text-xl md:text-2xl lowercase font-semibold"
                      style={{ 
                        fontFamily: "var(--font-playfair), Georgia, serif",
                        color: isSelected ? ACCENT : TEXT,
                        textShadow: SHADOW,
                      }}
                      animate={{
                        x: hoveredProject === project.id ? 12 : isSelected ? 8 : 0,
                        scale: hoveredProject === project.id ? 1.05 : 1,
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      {project.name}
                    </motion.span>
                  </motion.div>
                );
              })}
            </div>

            {/* Section: Coming Up */}
            <div>
              <motion.h2 
                className="text-sm uppercase tracking-[0.3em] mb-3 opacity-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ delay: 0.3 }}
              >
                coming up
              </motion.h2>
              {comingProjects.map((project, index) => {
                const isSelected = selectedProject === project.id;
                return (
                  <motion.div
                    key={project.id}
                    className="flex items-center py-1.5 cursor-pointer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                    onMouseEnter={() => setHoveredProject(project.id)}
                    onMouseLeave={() => setHoveredProject(null)}
                    onClick={() => setSelectedProject(isSelected ? null : project.id)}
                  >
                    <StatusIcon status={project.status} />
                    <motion.span
                      className="text-xl md:text-2xl lowercase"
                      style={{ 
                        fontFamily: "var(--font-playfair), Georgia, serif",
                        color: isSelected ? ACCENT : `${TEXT}99`,
                        textShadow: hoveredProject === project.id || isSelected ? SHADOW : "none",
                      }}
                      animate={{
                        x: hoveredProject === project.id ? 10 : isSelected ? 6 : 0,
                        opacity: hoveredProject === project.id || isSelected ? 1 : 0.6,
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      {project.name}
                    </motion.span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Detail Panel - Right (appears on click) */}
        <AnimatePresence>
          {selected && (
            <motion.div
              className="w-1/2 max-w-lg flex flex-col justify-center pr-16"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
            >
              {/* Project title */}
              <motion.h3 
                className="text-2xl md:text-3xl mb-2 lowercase"
                style={{ 
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontWeight: 600,
                  color: ACCENT,
                  textShadow: SHADOW,
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                {selected.name}
              </motion.h3>

              {/* Status badge */}
              <motion.div
                className="mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
              >
                <span 
                  className={`inline-block px-3 py-1 rounded-full text-sm lowercase ${
                    selected.status === "done" 
                      ? "bg-green-100 text-green-700" 
                      : selected.status === "in-progress"
                      ? "bg-amber-100 text-amber-700"
                      : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {selected.status === "done" ? "completed" : selected.status === "in-progress" ? "in progress" : "coming soon"}
                </span>
              </motion.div>

              {/* Story */}
              <motion.p 
                className="text-lg md:text-xl leading-relaxed mb-6"
                style={{ 
                  fontFamily: "var(--font-space), system-ui, sans-serif",
                  textShadow: "0 2px 3px rgba(0,0,0,0.15)",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {selected.story}
              </motion.p>

              {/* Link button if available */}
              {selected.link && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                >
                  <Link href={selected.link}>
                    <motion.button
                      className="px-6 py-3 rounded-full text-lg font-medium lowercase"
                      style={{
                        backgroundColor: ACCENT,
                        color: BG,
                        boxShadow: "0 4px 12px rgba(0,0,0,0.2), 0 2px 4px rgba(0,0,0,0.15)",
                        fontFamily: "var(--font-playfair), Georgia, serif",
                      }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {selected.linkText}
                    </motion.button>
                  </Link>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
