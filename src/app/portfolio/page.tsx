"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FluidMenu } from "@/components/ui/fluid-menu";

const ACCENT = "#B07C4F";
const TEXT = "#3d3428";
const BG = "#f5ebe0";
const SHADOW = "0 3px 4px rgba(0,0,0,0.3), 0 1px 2px rgba(0,0,0,0.2)";

// Project list with real stories + visual gradients
// SEO-friendly project titles - keywords people actually search for!
const projects = [
  // DONE - ticked off (faded at top to suggest more before)
  { id: "shopify-branding", name: "shopify store setup + branding", status: "done", fadeLevel: 2, gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", image: "🛍️" },
  { id: "n8n-hosting", name: "n8n self-hosting on google cloud", status: "done", fadeLevel: 1, gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)", image: "☁️" },
  { id: "news-scraper", name: "AI news scraper n8n workflow", status: "done", fadeLevel: 0, gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)", image: "📰" },
  { id: "shopify-blog", name: "automated shopify blog with AI", status: "done", fadeLevel: 0, gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)", image: "✍️" },
  { id: "ai-agent-setup", name: "custom AI agent setup", status: "done", fadeLevel: 0, gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)", image: "🤖" },
  { id: "etsy-assistant", name: "AI etsy listing automation", status: "done", fadeLevel: 0, gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)", image: "🎨" },
  { id: "full-brand", name: "full brand identity setup", status: "done", fadeLevel: 0, gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)", image: "✨" },
  { id: "video-campaign", name: "AI video content automation", status: "done", fadeLevel: 0, gradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)", image: "🎥" },
  { id: "course-app", name: "self-hosted course platform", status: "done", fadeLevel: 0, gradient: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)", image: "🎓" },
  { id: "rag-agency", name: "company RAG knowledge base", status: "done", fadeLevel: 0, gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", image: "🧠" },
  
  // CURRENT - what we're working on NOW (accent color)
  { id: "wordpress-makeover", name: "wordpress website makeover", status: "current", fadeLevel: 0, gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)", image: "🔧" },
  
  // COMING - empty circles
  { id: "shopify-decor", name: "shopify store makeover", status: "coming", fadeLevel: 0, gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)", image: "🏠" },
  { id: "faceless-channel", name: "youtube channel setup + automation", status: "coming", fadeLevel: 0, gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)", image: "📹" },
  { id: "roblox-world", name: "custom roblox world build", status: "coming", fadeLevel: 0, gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)", image: "🎮" },
  { id: "bakery-website", name: "wix to custom website migration", status: "coming", fadeLevel: 0, gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)", image: "🥐" },
  { id: "home-assistant", name: "self-hosted AI smart home", status: "coming", fadeLevel: 0, gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)", image: "🏡" },
  { id: "your-project", name: "your project here?", status: "coming", fadeLevel: 0, isLast: true, gradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)", image: "💡" },
];

// Project stories - fun, specific, SEO keywords included!
const projectStories: Record<string, string> = {
  "shopify-branding": "the full works! shopify store setup, custom website, all socials, logos, complete brand identity - everything connected and looking fresh. we love these because we get to build something complete from scratch. like playing god but for businesses.",

  "n8n-hosting": "google cloud VM running n8n via docker - private automation server with zero subscription fees forever. we had way too much fun setting up the firewall rules. yes, we're that kind of nerds.",

  "news-scraper": "daily news scraping across multiple sources, AI backend picking the juicy articles, all orchestrated through google docs, apps script and n8n workflows. this one runs while everyone sleeps. beautiful.",

  "shopify-blog": "shopify store traffic went bonkers after we set up the automated daily blog posts. 100% hands-free - the AI writes, formats, schedules, posts. client forgot they had a blog. that's the dream.",

  "ai-agent-setup": "GPTs for grown-ups. multiple AI agents sharing a company knowledge base but each with their own personality - social media manager, customer service, personal assistant. they have meetings without humans now. slightly concerning.",

  "etsy-assistant": "this n8n workflow is a monster (affectionately). AI analyzes product images, writes etsy listings, suggests tags, optimizes pricing. we spent way too long making it perfect. worth it.",

  "full-brand": "like getting keys to a fully furnished house. all websites reserved, 20+ social handles secured, AI handling text/image/video, company docs organized. complete brand identity from scratch.",

  "video-campaign": "short-form video content series across platforms - all AI-generated, all performing. followers went up, engagement went up, client did zero filming. that's the magic of AI content automation.",

  "course-app": "custom course platform, self-hosted, no recurring fees to course hosting companies. your content stays YOUR content. we enjoyed sticking it to the subscription model.",

  "rag-agency": "the company brain! all their apps connected to a central RAG knowledge base that constantly checks, references, and updates itself. it's alive and learning. in a good way, not a skynet way.",

  "wordpress-makeover": "do we do wordpress? no. you know who does? your grandma. we rebuild wordpress sites in next.js with proper animations and modern tech. this one's gonna be fun.",

  "shopify-decor": "home decor shopify store makeover - client wants to escape the basic template prison. we've got IDEAS. this store is gonna look like it belongs in a magazine. watch this space!",

  "faceless-channel": "full youtube channel setup with automated video creation workflows. faceless content, consistent uploads, AI doing the heavy lifting. make money while staying mysterious.",

  "roblox-world": "okay this one is NEW for us! recreating an entire school in roblox for leavers to stay connected. classrooms, corridors, the lot. kids can vandalize stuff without detention. we're unreasonably excited about this.",

  "bakery-website": "local bakery escaping their basic wix template - finally, a site that matches how good their pastries actually are! oh and if you're local, we sometimes do photo and video shoots too. we've worked for croissants before. don't tell anyone.",

  "home-assistant": "passion project! open source LLM self-hosted on an old laptop, controlling the whole house via voice. lights, cameras, heating, speakers - home assistant integration, everything local, zero subscriptions, zero cloud. we can't wait.",

  "your-project": "this spot is waiting for something cool. could be yours. no pressure. okay, a little pressure.",
};

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const selected = projects.find(p => p.id === selectedProject);

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

      {/* NEW LAYOUT: Image Grid */}
      <div className="relative z-10 min-h-screen pt-32 px-6 md:px-12 pb-12">
        <AnimatePresence mode="wait">
          {!selected ? (
            // Grid View
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 max-w-7xl mx-auto"
            >
              {projects.map((project, index) => {
                const isHovered = hoveredProject === project.id;
                const isCurrent = project.status === "current";
                const isDone = project.status === "done";
                const isLast = project.isLast;

                return (
                  <motion.div
                    key={project.id}
                    className="relative rounded-2xl overflow-hidden cursor-pointer group"
                    style={{
                      background: project.gradient,
                      aspectRatio: "1",
                      opacity: isDone ? 0.7 : 1,
                    }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: isDone ? 0.7 : 1, scale: 1 }}
                    transition={{ delay: index * 0.03, type: "spring", stiffness: 200, damping: 20 }}
                    whileHover={{ scale: 1.05, opacity: 1, zIndex: 10 }}
                    onClick={() => setSelectedProject(project.id)}
                    onMouseEnter={() => setHoveredProject(project.id)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-black/30" />
                    
                    {/* Status badge */}
                    <div className="absolute top-3 right-3 z-10">
                      {isDone && (
                        <div className="bg-green-500/90 backdrop-blur-sm rounded-full px-2 py-1 text-white text-xs font-semibold">
                          ✓ done
                        </div>
                      )}
                      {isCurrent && (
                        <motion.div 
                          className="backdrop-blur-sm rounded-full px-2 py-1 text-white text-xs font-semibold"
                          style={{ backgroundColor: ACCENT }}
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          → now
                        </motion.div>
                      )}
                    </div>

                    {/* Icon/Emoji */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-6xl md:text-7xl opacity-90 transition-transform group-hover:scale-110">
                        {project.image}
                      </span>
                    </div>

                    {/* Title overlay (always visible on mobile, hover on desktop) */}
                    <motion.div
                      className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 md:p-3"
                      initial={{ opacity: 1 }}
                      animate={{ opacity: isHovered ? 1 : 0.9 }}
                    >
                      <p 
                        className="text-white text-sm md:text-base font-medium lowercase leading-tight"
                        style={{ 
                          fontFamily: "var(--font-syne), sans-serif",
                          textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                        }}
                      >
                        {project.name}
                      </p>
                    </motion.div>

                    {/* Hover hint */}
                    <motion.div
                      className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isHovered ? 1 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <p 
                        className="text-white text-sm md:text-base font-medium"
                        style={{ fontFamily: "var(--font-space), sans-serif" }}
                      >
                        click for story →
                      </p>
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          ) : (
            // Detail View (full screen)
            <motion.div
              key="detail"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="max-w-4xl mx-auto"
            >
              {/* Close button */}
              <motion.button
                className="mb-8 flex items-center gap-2 text-lg opacity-70 hover:opacity-100"
                style={{ fontFamily: "var(--font-space), sans-serif", color: TEXT }}
                onClick={() => setSelectedProject(null)}
                whileHover={{ x: -4 }}
              >
                ← back to portfolio
              </motion.button>

              {/* Hero card */}
              <motion.div
                className="relative rounded-3xl overflow-hidden mb-8"
                style={{
                  background: selected.gradient,
                  minHeight: "300px",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-black/30" />
                <div className="relative p-12 flex flex-col justify-center items-center min-h-[300px]">
                  <span className="text-9xl mb-6 opacity-90">{selected.image}</span>
                  <h1 
                    className="text-4xl md:text-5xl font-bold lowercase text-white text-center"
                    style={{ 
                      fontFamily: "var(--font-syne), sans-serif",
                      textShadow: "0 3px 12px rgba(0,0,0,0.4)",
                    }}
                  >
                    {selected.name}
                  </h1>
                  {selected.status === "current" && (
                    <motion.div 
                      className="mt-4 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm font-semibold"
                      style={{ backgroundColor: ACCENT }}
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      → currently working on this
                    </motion.div>
                  )}
                  {selected.status === "done" && (
                    <div className="mt-4 bg-green-500/90 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm font-semibold">
                      ✓ completed
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Story */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <p 
                  className="text-2xl md:text-3xl leading-relaxed mb-8"
                  style={{ 
                    fontFamily: "var(--font-space), sans-serif",
                    color: TEXT,
                  }}
                >
                  {projectStories[selected.id]}
                </p>

                {(selected.isLast || selected.status === "coming") && (
                  <Link href="/contact">
                    <motion.button
                      className="px-8 py-4 rounded-full text-xl font-semibold lowercase"
                      style={{
                        backgroundColor: ACCENT,
                        color: BG,
                        boxShadow: "0 6px 20px rgba(0,0,0,0.25)",
                        fontFamily: "var(--font-syne), sans-serif",
                      }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      interested? let's chat!
                    </motion.button>
                  </Link>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
