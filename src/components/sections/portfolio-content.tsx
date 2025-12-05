"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: "ai-course",
    title: "AI Course Platform",
    subtitle: "Education / EdTech",
    description:
      "Professional learning management system for AI education. Features Google OAuth, enterprise partner access tiers, progress tracking, and flexible pricing. Used by UK businesses from SMEs to major retailers.",
    image: "/projects/ai-course.png",
    tags: ["Next.js 16", "React 19", "Supabase", "Stripe"],
    stats: [
      { label: "Partner Tier", value: "Enterprise" },
      { label: "Auth Methods", value: "3" },
      { label: "Build Time", value: "6 weeks" },
    ],
    links: {
      live: "https://courses.wearewacky.com",
      github: null,
    },
    featured: true,
  },
  {
    id: "ecommerce-automation",
    title: "E-Commerce Automation Platform",
    subtitle: "Retail / E-commerce",
    description:
      "End-to-end automation system managing 100+ products across Etsy, Shopify, and Printify. Automated inventory sync, order processing, and multi-platform listing management.",
    image: "/projects/ecommerce.png",
    tags: ["Shopify", "Etsy", "n8n", "Printify"],
    stats: [
      { label: "Products", value: "100+" },
      { label: "Manual Work", value: "-80%" },
      { label: "Sync Errors", value: "0" },
    ],
    links: {
      live: null,
      github: null,
    },
    featured: true,
  },
  {
    id: "news-automation",
    title: "AI News Publishing System",
    subtitle: "Media / Content",
    description:
      "Automated news pipeline that scrapes sources daily, uses AI to filter and rank stories, generates article summaries, and auto-publishes to Shopify blog via API.",
    image: "/projects/news-system.png",
    tags: ["n8n", "OpenAI API", "Shopify API", "Google Cloud"],
    stats: [
      { label: "Articles/Day", value: "20+" },
      { label: "Manual Writing", value: "0 hrs" },
      { label: "SEO Boost", value: "✓" },
    ],
    links: {
      live: null,
      github: null,
    },
    featured: true,
  },
  {
    id: "social-engine",
    title: "Social Media Content Engine",
    subtitle: "Marketing / Social",
    description:
      "AI-powered content creation system managing 5+ platforms. Generates graphics, schedules posts, creates short-form videos, and tracks performance metrics.",
    image: "/projects/social-engine.png",
    tags: ["n8n", "Canva API", "AI Image Gen", "Adobe Suite"],
    stats: [
      { label: "Platforms", value: "5+" },
      { label: "Time Saved", value: "70%" },
      { label: "Consistency", value: "Daily" },
    ],
    links: {
      live: null,
      github: null,
    },
    featured: false,
  },
  {
    id: "cloud-infrastructure",
    title: "Self-Hosted Automation Infrastructure",
    subtitle: "DevOps / Cloud",
    description:
      "Production-grade n8n deployment on Google Cloud Platform. Custom VM configuration, secure access, automated backups, and unlimited workflow executions.",
    image: "/projects/cloud-infra.png",
    tags: ["Google Cloud", "n8n", "Docker", "DevOps"],
    stats: [
      { label: "Cost Reduction", value: "90%" },
      { label: "Uptime", value: "99.9%" },
      { label: "Workflows", value: "∞" },
    ],
    links: {
      live: null,
      github: null,
    },
    featured: false,
  },
  {
    id: "your-project",
    title: "Your Project Here",
    subtitle: "Let's Build Together",
    description:
      "Ready to automate your business? We've built these systems for ourselves - now we're ready to build yours. Every solution battle-tested in production.",
    image: null,
    tags: ["Your Stack", "Your Goals", "Your Revenue"],
    stats: [],
    links: {
      live: "/contact",
      github: null,
    },
    featured: false,
  },
];

export function PortfolioContent() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className={cn(
                "grid md:grid-cols-2 gap-12 items-center",
                index % 2 === 1 && "md:flex-row-reverse"
              )}
            >
              {/* Image/Visual */}
              <div
                className={cn(
                  "aspect-video rounded-2xl overflow-hidden",
                  project.image
                    ? "glass"
                    : "glass bg-gradient-to-br from-purple/20 to-cyan/20 flex items-center justify-center",
                  index % 2 === 1 && "md:order-2"
                )}
              >
                {project.image ? (
                  <div className="w-full h-full bg-gradient-to-br from-purple/10 to-cyan/10 flex items-center justify-center">
                    <span className="text-muted text-sm">Screenshot Coming Soon</span>
                  </div>
                ) : (
                  <span className="text-4xl">🚀</span>
                )}
              </div>

              {/* Content */}
              <div className={cn(index % 2 === 1 && "md:order-1")}>
                {project.featured && (
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-purple/10 text-purple rounded-full mb-4">
                    Featured Project
                  </span>
                )}
                <span className="text-muted text-sm">{project.subtitle}</span>
                <h2 className="text-3xl font-bold mt-1 mb-4">{project.title}</h2>
                <p className="text-muted mb-6">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-white/5 text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                {project.stats.length > 0 && (
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {project.stats.map((stat) => (
                      <div key={stat.label}>
                        <div className="text-2xl font-bold text-gradient">
                          {stat.value}
                        </div>
                        <div className="text-xs text-muted">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Links */}
                <div className="flex gap-4">
                  {project.links.live && (
                    <Link
                      href={project.links.live}
                      target={project.links.live.startsWith("http") ? "_blank" : undefined}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-purple hover:bg-purple-dark rounded-full font-medium transition-all duration-300 glow-purple"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {project.id === "coming-soon" ? "Start a Project" : "View Live"}
                    </Link>
                  )}
                  {project.links.github && (
                    <Link
                      href={project.links.github}
                      target="_blank"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-medium glass hover:bg-white/5 transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                      Source
                    </Link>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

