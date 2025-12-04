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
    subtitle: "Education SaaS",
    description:
      "A full-featured course platform for teaching AI skills. Built from scratch with Next.js, Supabase, and Stripe. Features include Google OAuth, email auth, multi-currency payments, certificates, and progress tracking.",
    image: "/projects/ai-course.png", // Placeholder - you'll add real images
    tags: ["Next.js", "Supabase", "Stripe", "TypeScript"],
    stats: [
      { label: "Beta Users", value: "14+" },
      { label: "Completion Rate", value: "87%" },
      { label: "Build Time", value: "6 weeks" },
    ],
    links: {
      live: "https://courses.wearewacky.com",
      github: null, // Private repo
    },
    featured: true,
  },
  {
    id: "automation-suite",
    title: "n8n Automation Suite",
    subtitle: "Internal Tooling",
    description:
      "A collection of n8n workflows that automate our internal operations: lead capture, email sequences, social media scheduling, and client onboarding.",
    image: "/projects/n8n-workflows.png",
    tags: ["n8n", "Google Cloud", "APIs", "Automation"],
    stats: [
      { label: "Workflows", value: "12+" },
      { label: "Hours Saved/Month", value: "40+" },
      { label: "Uptime", value: "99.9%" },
    ],
    links: {
      live: null,
      github: null,
    },
    featured: true,
  },
  {
    id: "coming-soon",
    title: "Your Project Here",
    subtitle: "Coming Soon",
    description:
      "We're always working on new projects. Have an idea? Let's build something amazing together.",
    image: null,
    tags: ["Your Stack", "Your Goals", "Your Success"],
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

