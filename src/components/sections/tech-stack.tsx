"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

const technologies = [
  { name: "Next.js", category: "Frontend", description: "React Framework" },
  { name: "React 19", category: "Frontend", description: "UI Library" },
  { name: "TypeScript", category: "Language", description: "Type Safety" },
  { name: "Tailwind", category: "Styling", description: "Utility CSS" },
  { name: "Vercel", category: "Hosting", description: "Edge Deployment" },
  { name: "Supabase", category: "Database", description: "PostgreSQL + Auth" },
  { name: "Stripe", category: "Payments", description: "Payment Processing" },
  { name: "n8n", category: "Automation", description: "Workflow Engine" },
];

export function TechStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={containerRef}
      className="relative py-32 overflow-hidden bg-void/50"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple/5 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan text-sm font-medium uppercase tracking-widest mb-4 block">
            Our Stack
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Built With <span className="text-gradient">Elite Tools</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            We use the same cutting-edge technology stack for our clients 
            that we use to build our own products.
          </p>
        </motion.div>

        {/* Tech Marquee */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-void to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-void to-transparent z-10 pointer-events-none" />
          
          {/* Marquee Container */}
          <div className="overflow-hidden">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex gap-6"
            >
              {/* Double the items for seamless loop */}
              {[...technologies, ...technologies].map((tech, index) => (
                <div
                  key={`${tech.name}-${index}`}
                  className={cn(
                    "flex-shrink-0 p-6 rounded-2xl glass",
                    "hover:bg-white/[0.04] transition-all duration-300",
                    "min-w-[200px]"
                  )}
                >
                  <span className="text-xs text-purple uppercase tracking-wider">
                    {tech.category}
                  </span>
                  <h3 className="text-xl font-bold mt-2">{tech.name}</h3>
                  <p className="text-muted text-sm mt-1">{tech.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "Next.js 16", label: "Framework Version" },
            { value: "React 19", label: "UI Library" },
            { value: "Tailwind v4", label: "CSS Framework" },
            { value: "TypeScript 5", label: "Language" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-muted text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

