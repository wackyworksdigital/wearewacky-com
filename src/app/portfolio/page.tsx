"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FluidMenu } from "@/components/ui/fluid-menu";
import { BackgroundQuotes } from "@/components/ui/background-quotes";

const ACCENT = "#B07C4F";
const TEXT = "#3d3428";
const BG = "#f5ebe0";
const SHADOW = "0 3px 4px rgba(0,0,0,0.3), 0 1px 2px rgba(0,0,0,0.2)";

// Portfolio projects - from the actual project list
const projects = [
  // IN PROGRESS - Current work
  {
    id: "wordpress-makeover",
    name: "website makeover",
    status: "in-progress",
    story: "complete website rebuild with modern design, fluid animations, and that 'wow' factor. you're looking at it right now.",
    link: null,
    linkText: null,
  },
  
  // COMING UP - Future projects (from the list)
  {
    id: "shopify-branding",
    name: "shopify store branding",
    status: "coming",
    story: "full brand identity for a new e-commerce store. logo, colors, vibes, the works.",
    link: null,
    linkText: null,
  },
  {
    id: "n8n-hosting",
    name: "n8n self-hosting setup",
    status: "coming",
    story: "private automation server. no subscriptions, no limits, all yours.",
    link: null,
    linkText: null,
  },
  {
    id: "news-scraper",
    name: "news scraper workflow",
    status: "coming",
    story: "automated news aggregation. AI picks the good stuff, you stay informed.",
    link: null,
    linkText: null,
  },
  {
    id: "blog-automation",
    name: "automated blog poster",
    status: "coming",
    story: "AI writes, schedules, and posts. your blog stays fresh while you sleep.",
    link: null,
    linkText: null,
  },
  {
    id: "shopify-agent",
    name: "shopify blog agent",
    status: "coming",
    story: "AI assistant that writes product descriptions and blog posts for your store.",
    link: null,
    linkText: null,
  },
  {
    id: "ai-agent-setup",
    name: "ai agent setup",
    status: "coming",
    story: "custom AI assistant trained on your business. like hiring someone who actually read the manual.",
    link: null,
    linkText: null,
  },
  {
    id: "etsy-assistant",
    name: "etsy listing assistant",
    status: "coming",
    story: "AI that writes killer product listings. SEO-optimized, buyer-focused, conversion-ready.",
    link: null,
    linkText: null,
  },
  {
    id: "full-brand",
    name: "full brand setup",
    status: "coming",
    story: "from zero to brand hero. logo, website, socials, strategy, everything.",
    link: null,
    linkText: null,
  },
  {
    id: "video-campaign",
    name: "social video campaign",
    status: "coming",
    story: "AI-generated video content that actually performs. no dancing required.",
    link: null,
    linkText: null,
  },
  {
    id: "rag-agency",
    name: "company rag setup",
    status: "coming",
    story: "internal knowledge base that answers questions about YOUR business.",
    link: null,
    linkText: null,
  },
  {
    id: "shopify-decor",
    name: "home decor shopify store",
    status: "coming",
    story: "beautiful e-commerce store for beautiful things.",
    link: null,
    linkText: null,
  },
  {
    id: "faceless-channel",
    name: "faceless video channel",
    status: "coming",
    story: "youtube channel that makes money while you stay anonymous.",
    link: null,
    linkText: null,
  },
  {
    id: "roblox-world",
    name: "roblox world",
    status: "coming",
    story: "virtual experience for school leavers. gaming meets education.",
    link: null,
    linkText: null,
  },
  {
    id: "bakery-website",
    name: "bakery website redo",
    status: "coming",
    story: "wix to something better. making pastries look as good online as they taste.",
    link: null,
    linkText: null,
  },
  {
    id: "home-assistant",
    name: "home assistant setup",
    status: "coming",
    story: "smart home, private. no alexa listening, just your own AI butler.",
    link: null,
    linkText: null,
  },
  {
    id: "your-project",
    name: "your project here?",
    status: "coming",
    story: "this could be you! we've got a spot with your name on it.",
    link: "/contact",
    linkText: "let's talk!",
  },
];

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
      {/* Background quotes */}
      <BackgroundQuotes count={4} />
      
      {/* Noise + vignette */}
      <div
        className="fixed inset-0 pointer-events-none mix-blend-overlay z-[2]"
        style={{
          opacity: 0.12,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
      <div
        className="fixed inset-0 pointer-events-none z-[2]"
        style={{ background: "radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(0,0,0,0.08) 100%)" }}
      />

      <FluidMenu activePage="portfolio" />

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex">
        {/* Project List - Left */}
        <div className="flex-1 flex items-center justify-center pl-48 pr-8 py-12">
          <div className="max-w-lg">
            
            {/* Section: In Progress */}
            <div className="mb-8">
              <motion.h2 
                className="text-sm uppercase tracking-[0.3em] mb-3"
                style={{ color: ACCENT }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                in progress
              </motion.h2>
              {inProgressProjects.map((project, index) => {
                const isSelected = selectedProject === project.id;
                const isHovered = hoveredProject === project.id;
                return (
                  <motion.div
                    key={project.id}
                    className="flex items-center py-1.5 cursor-pointer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                    onMouseEnter={() => setHoveredProject(project.id)}
                    onMouseLeave={() => setHoveredProject(null)}
                    onClick={() => setSelectedProject(isSelected ? null : project.id)}
                  >
                    <StatusIcon status={project.status} />
                    <motion.span
                      className="text-xl md:text-2xl lowercase font-semibold inline-block"
                      style={{ 
                        fontFamily: "var(--font-playfair), Georgia, serif",
                        color: isSelected ? ACCENT : TEXT,
                        textShadow: SHADOW,
                      }}
                      animate={{
                        x: isHovered ? 15 : isSelected ? 10 : 0,
                        scale: isHovered ? 1.05 : 1,
                        y: [0, -2, 0],
                      }}
                      transition={{ 
                        x: { type: "spring", stiffness: 300, damping: 20 },
                        scale: { type: "spring", stiffness: 300, damping: 20 },
                        y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                      }}
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
                transition={{ delay: 0.2 }}
              >
                coming up
              </motion.h2>
              {comingProjects.map((project, index) => {
                const isSelected = selectedProject === project.id;
                const isHovered = hoveredProject === project.id;
                const isLast = project.id === "your-project";
                
                return (
                  <motion.div
                    key={project.id}
                    className={`flex items-center py-1 cursor-pointer ${isLast ? "mt-4 pt-4 border-t border-current/10" : ""}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.03 }}
                    onMouseEnter={() => setHoveredProject(project.id)}
                    onMouseLeave={() => setHoveredProject(null)}
                    onClick={() => setSelectedProject(isSelected ? null : project.id)}
                  >
                    <StatusIcon status={project.status} />
                    <motion.span
                      className={`text-lg md:text-xl lowercase inline-block ${isLast ? "font-medium" : ""}`}
                      style={{ 
                        fontFamily: "var(--font-playfair), Georgia, serif",
                        color: isSelected ? ACCENT : isLast ? ACCENT : `${TEXT}99`,
                        textShadow: isHovered || isSelected ? SHADOW : "none",
                      }}
                      animate={{
                        x: isHovered ? 12 : isSelected ? 8 : 0,
                        opacity: isHovered || isSelected ? 1 : isLast ? 0.9 : 0.6,
                        y: [0, -1.5, 0],
                      }}
                      transition={{ 
                        x: { type: "spring", stiffness: 300, damping: 20 },
                        opacity: { type: "spring", stiffness: 300, damping: 20 },
                        y: { duration: 5 + index * 0.3, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 },
                      }}
                    >
                      {project.name}
                    </motion.span>
                  </motion.div>
                );
              })}
            </div>
            
            {/* CTA */}
            <motion.div
              className="pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <Link href="/contact">
                <motion.p
                  className="text-lg lowercase cursor-pointer"
                  style={{ 
                    fontFamily: "var(--font-space), system-ui, sans-serif",
                    color: ACCENT,
                    textShadow: "0 2px 3px rgba(0,0,0,0.15)",
                  }}
                  whileHover={{ x: 10, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  want to beta test a project? get in touch →
                </motion.p>
              </Link>
            </motion.div>
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
              
              {/* Beta test CTA for coming soon projects */}
              {selected.status === "coming" && !selected.link && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                >
                  <Link href="/contact">
                    <motion.button
                      className="px-6 py-3 rounded-full text-lg font-medium lowercase"
                      style={{
                        backgroundColor: "transparent",
                        color: ACCENT,
                        border: `2px solid ${ACCENT}`,
                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                        fontFamily: "var(--font-playfair), Georgia, serif",
                      }}
                      whileHover={{ scale: 1.05, y: -2, backgroundColor: ACCENT, color: BG }}
                      whileTap={{ scale: 0.98 }}
                    >
                      interested? get in touch
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
