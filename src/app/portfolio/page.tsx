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

// Simple project list - visual tells the story
// ✓ = done, → = current (accent), ○ = coming
const projects = [
  // DONE - ticked off (faded at top to suggest more before)
  { id: "shopify-branding", name: "shopify store branding", status: "done", fadeLevel: 2 },
  { id: "n8n-hosting", name: "n8n self-hosting setup", status: "done", fadeLevel: 1 },
  { id: "news-scraper", name: "AI news scraper workflow", status: "done", fadeLevel: 0 },
  { id: "shopify-blog", name: "automated shopify blog poster", status: "done", fadeLevel: 0 },
  { id: "ai-agent-setup", name: "AI agent setup", status: "done", fadeLevel: 0 },
  { id: "etsy-assistant", name: "AI etsy listing assistant", status: "done", fadeLevel: 0 },
  { id: "full-brand", name: "full brand setup", status: "done", fadeLevel: 0 },
  { id: "video-campaign", name: "social AI video campaign", status: "done", fadeLevel: 0 },
  { id: "course-app", name: "self-hosted course app", status: "done", fadeLevel: 0 },
  { id: "rag-agency", name: "company RAG setup", status: "done", fadeLevel: 0 },
  
  // CURRENT - what we're working on NOW (accent color)
  { id: "wordpress-makeover", name: "wordpress website makeover", status: "current", fadeLevel: 0 },
  
  // COMING - empty circles
  { id: "shopify-decor", name: "home decor shopify store makeover", status: "coming", fadeLevel: 0 },
  { id: "faceless-channel", name: "faceless youtube channel", status: "coming", fadeLevel: 0 },
  { id: "roblox-world", name: "roblox world coding", status: "coming", fadeLevel: 0 },
  { id: "bakery-website", name: "bakery wix website redo", status: "coming", fadeLevel: 0 },
  { id: "home-assistant", name: "self-hosted home assistant", status: "coming", fadeLevel: 0 },
  { id: "your-project", name: "your project here?", status: "coming", fadeLevel: 0, isLast: true },
];

// Project stories (only shown when clicked)
const projectStories: Record<string, string> = {
  "shopify-branding": "full brand identity for a new e-commerce store.",
  "n8n-hosting": "private automation server. no subscriptions, no limits.",
  "news-scraper": "automated news aggregation. AI picks the good stuff.",
  "shopify-blog": "AI writes, schedules, and posts to your store.",
  "ai-agent-setup": "custom AI assistant trained on your business.",
  "etsy-assistant": "AI that writes killer product listings.",
  "full-brand": "logo, website, socials, strategy, everything.",
  "video-campaign": "AI-generated video content that performs.",
  "course-app": "self-hosted learning platform. own your content.",
  "rag-agency": "internal knowledge base that knows YOUR business.",
  "wordpress-makeover": "complete website rebuild. you're looking at it right now.",
  "shopify-decor": "beautiful e-commerce store for beautiful things.",
  "faceless-channel": "youtube channel that makes money anonymously.",
  "roblox-world": "virtual roblox experience. gaming meets learning.",
  "bakery-website": "making pastries look as good online as they taste.",
  "home-assistant": "smart home, private. your own AI butler.",
  "your-project": "this could be you!",
};

// Status icon
function StatusIcon({ status }: { status: string }) {
  if (status === "done") {
    return <span className="mr-3 text-green-600/70">✓</span>;
  }
  if (status === "current") {
    return (
      <motion.span 
        className="mr-3"
        style={{ color: ACCENT }}
        animate={{ x: [0, 4, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        →
      </motion.span>
    );
  }
  return <span className="mr-3 opacity-30">○</span>;
}

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  // Get fade opacity
  const getFadeOpacity = (fadeLevel: number, status: string) => {
    if (status === "current") return 1;
    if (status === "done") {
      switch (fadeLevel) {
        case 2: return 0.3;
        case 1: return 0.5;
        default: return 0.6;
      }
    }
    return 0.7; // coming
  };

  return (
    <main className="relative min-h-screen overflow-hidden" style={{ backgroundColor: BG, color: TEXT }}>
      {/* Swimming quotes */}
      <BackgroundQuotes count={5} />
      
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
        {/* Project List - Simple shopping list */}
        <div className="flex-1 flex items-center justify-center pl-48 pr-8 py-12">
          <div className="max-w-md space-y-0.5">
            {projects.map((project, index) => {
              const isSelected = selectedProject === project.id;
              const isHovered = hoveredProject === project.id;
              const isCurrent = project.status === "current";
              const isDone = project.status === "done";
              const isLast = project.isLast;
              const baseOpacity = getFadeOpacity(project.fadeLevel, project.status);
              
              return (
                <motion.div
                  key={project.id}
                  className={`flex items-center py-0.5 cursor-pointer ${isLast ? "mt-4 pt-3 border-t border-current/10" : ""}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.02 }}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  onClick={() => setSelectedProject(isSelected ? null : project.id)}
                >
                  <StatusIcon status={project.status} />
                  <motion.span
                    className={`text-lg lowercase inline-block ${isCurrent ? "font-semibold" : ""}`}
                    style={{ 
                      fontFamily: "var(--font-syne), var(--font-space), sans-serif",
                      color: isCurrent ? ACCENT : isLast ? ACCENT : TEXT,
                      textShadow: isCurrent || isHovered ? SHADOW : "none",
                    }}
                    animate={{
                      x: isHovered ? 10 : isCurrent ? 4 : 0,
                      opacity: isHovered || isSelected ? 1 : isCurrent ? 1 : isLast ? 0.85 : baseOpacity,
                      y: isCurrent ? [0, -2, 0] : 0,
                    }}
                    transition={{ 
                      x: { type: "spring", stiffness: 300, damping: 20 },
                      opacity: { duration: 0.2 },
                      y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                    }}
                  >
                    {project.name}
                  </motion.span>
                </motion.div>
              );
            })}
            
            {/* CTA at bottom */}
            <motion.div
              className="pt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Link href="/contact">
                <motion.p
                  className="text-base lowercase cursor-pointer"
                  style={{ 
                    fontFamily: "var(--font-space), system-ui, sans-serif",
                    color: ACCENT,
                    textShadow: "0 2px 3px rgba(0,0,0,0.15)",
                  }}
                  whileHover={{ x: 8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  got a project? let's talk →
                </motion.p>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Detail Panel - appears on click */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="w-1/2 max-w-md flex flex-col justify-center pr-16"
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 80 }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
            >
              <motion.p 
                className="text-xl leading-relaxed mb-6"
                style={{ 
                  fontFamily: "var(--font-space), system-ui, sans-serif",
                  textShadow: "0 2px 3px rgba(0,0,0,0.15)",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {projectStories[selectedProject]}
              </motion.p>

              {selectedProject === "your-project" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <Link href="/contact">
                    <motion.button
                      className="px-5 py-2.5 rounded-full text-base font-medium lowercase"
                      style={{
                        backgroundColor: ACCENT,
                        color: BG,
                        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                        fontFamily: "var(--font-syne), var(--font-space), sans-serif",
                      }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      let's talk!
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
