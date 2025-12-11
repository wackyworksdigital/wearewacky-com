"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FluidMenu } from "@/components/ui/fluid-menu";

const ACCENT = "#B07C4F";
const TEXT = "#3d3428";
const BG = "#f5ebe0";
const SHADOW = "0 3px 4px rgba(0,0,0,0.3), 0 1px 2px rgba(0,0,0,0.2)";

// Project list with real stories
const projects = [
  // DONE - ticked off (faded at top to suggest more before)
  { id: "shopify-branding", name: "full online presence setup", status: "done", fadeLevel: 2 },
  { id: "n8n-hosting", name: "n8n cloud server setup", status: "done", fadeLevel: 1 },
  { id: "news-scraper", name: "AI news curator workflow", status: "done", fadeLevel: 0 },
  { id: "shopify-blog", name: "hands-free shopify blog", status: "done", fadeLevel: 0 },
  { id: "ai-agent-setup", name: "multi-agent AI team", status: "done", fadeLevel: 0 },
  { id: "etsy-assistant", name: "AI etsy listing machine", status: "done", fadeLevel: 0 },
  { id: "full-brand", name: "brand-in-a-box delivery", status: "done", fadeLevel: 0 },
  { id: "video-campaign", name: "AI short-form video blitz", status: "done", fadeLevel: 0 },
  { id: "course-app", name: "self-hosted learning platform", status: "done", fadeLevel: 0 },
  { id: "rag-agency", name: "living company knowledge base", status: "done", fadeLevel: 0 },
  
  // CURRENT - what we're working on NOW (accent color)
  { id: "wordpress-makeover", name: "wordpress → next.js migration", status: "current", fadeLevel: 0 },
  
  // COMING - empty circles
  { id: "shopify-decor", name: "home decor store glow-up", status: "coming", fadeLevel: 0 },
  { id: "faceless-channel", name: "faceless youtube empire", status: "coming", fadeLevel: 0 },
  { id: "roblox-world", name: "school leavers roblox world", status: "coming", fadeLevel: 0 },
  { id: "bakery-website", name: "local bakery digital makeover", status: "coming", fadeLevel: 0 },
  { id: "home-assistant", name: "AI-powered smart home", status: "coming", fadeLevel: 0 },
  { id: "your-project", name: "your project here?", status: "coming", fadeLevel: 0, isLast: true },
];

// Project stories - fun, specific, personality-filled!
const projectStories: Record<string, string> = {
  "shopify-branding": "the full works! shopify store, website, socials, logos, brand identity - all connected and looking fresh. we love these projects because we get to build something complete from scratch. like playing god but for businesses.",

  "n8n-hosting": "google cloud VM running n8n via docker - their own private automation server with zero subscription fees. we had way too much fun setting up the firewall rules. yes, we're that kind of nerds.",

  "news-scraper": "daily news scraping across multiple sources, AI backend picking the juicy articles, all orchestrated through google docs, apps script and n8n workflows. this one runs while everyone sleeps. beautiful.",

  "shopify-blog": "traffic went bonkers after we set up the automated daily blog posts. 100% hands-free - the AI writes, formats, schedules, posts. client forgot they had a blog. that's the dream.",

  "ai-agent-setup": "GPTs for grown-ups. multiple AI agents sharing a company knowledge base but each with their own personality - social media manager, customer service, personal assistant. they have meetings without humans now. slightly concerning.",

  "etsy-assistant": "this workflow is a monster (affectionately). AI analyzes product images, writes listings, suggests tags, optimizes pricing. we spent way too long making it perfect. worth it.",

  "full-brand": "keys to a brand new, fully furnished house. all websites reserved, 20+ social handles secured, AI handling text/image/video, company docs organized beautifully. we basically moved them in and handed over the keys.",

  "video-campaign": "short-form video series across platforms - all AI-generated, all performing. followers went up, engagement went up, client did zero filming. that's the magic.",

  "course-app": "custom learning platform, self-hosted, no recurring fees to course plugin companies. your content stays YOUR content. we enjoyed sticking it to the subscription model.",

  "rag-agency": "the company brain! all their apps connected to a central knowledge base that constantly checks, references, and updates itself. it's alive and learning. in a good way, not a skynet way.",

  "wordpress-makeover": "do we do wordpress? no. you know who does? your grandma. we're rebuilding this in next.js with animations that go whoosh. you're looking at the result right now.",

  "shopify-decor": "client wants to escape the basic template prison. we've got IDEAS. this store is gonna look like it belongs in a magazine. watch this space!",

  "faceless-channel": "full youtube channel setup with automated video creation workflows. make money while staying mysterious. our kind of project.",

  "roblox-world": "okay this one is NEW for us! recreating an entire school in roblox for leavers to stay connected. classrooms, corridors, the lot. kids can vandalize stuff without detention. we're unreasonably excited about this.",

  "bakery-website": "time to graduate from the wix template! custom website, photo shoots, videos - if they're local we sometimes work for pastries. don't tell anyone.",

  "home-assistant": "passion project alert! squeezing a self-hosted AI into an old laptop to control an entire house. lights, cameras, heating, speakers - all voice controlled, all local, zero subscriptions. we can't wait.",

  "your-project": "this spot is waiting for something cool. could be yours. no pressure. okay, a little pressure.",
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
        case 2: return 0.35;
        case 1: return 0.5;
        default: return 0.65;
      }
    }
    return 0.7;
  };

  return (
    <main className="relative min-h-screen overflow-hidden" style={{ backgroundColor: BG, color: TEXT }}>
      
      {/* SEO: Hidden content for crawlers - all project stories visible to Google/AI */}
      <div className="sr-only" aria-hidden="false">
        <h1>Wacky Works Digital Portfolio - AI Automation Projects UK</h1>
        {projects.map(p => (
          <article key={p.id}>
            <h2>{p.name}</h2>
            <p>{projectStories[p.id]}</p>
          </article>
        ))}
        <p>Portfolio of completed and upcoming projects including n8n automation, AI agents, Shopify stores, Next.js websites, self-hosted platforms, YouTube automation, and more. Based in UK, working worldwide.</p>
      </div>
      
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
        {/* Project List */}
        <div 
          className="flex items-center pl-48 pr-8 py-12"
          style={{ width: selectedProject ? "50%" : "100%", transition: "width 0.4s ease-out" }}
        >
          <div className="max-w-lg space-y-0.5">
            {projects.map((project, index) => {
              const isSelected = selectedProject === project.id;
              const isHovered = hoveredProject === project.id;
              const isCurrent = project.status === "current";
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
                    className={`text-lg lowercase inline-block whitespace-nowrap ${isCurrent ? "font-semibold" : ""}`}
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
              className="w-1/2 flex flex-col justify-center pr-8 md:pr-16"
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 80 }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
            >
              <motion.p 
                className="text-lg md:text-xl leading-relaxed mb-6"
                style={{ 
                  fontFamily: "var(--font-space), system-ui, sans-serif",
                  textShadow: "0 2px 3px rgba(0,0,0,0.15)",
                  maxWidth: "32rem",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {projectStories[selectedProject]}
              </motion.p>

              {(selectedProject === "your-project" || projects.find(p => p.id === selectedProject)?.status === "coming") && (
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
                      interested? let's chat!
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
