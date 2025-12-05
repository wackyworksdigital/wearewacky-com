"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Rocket, Target, Zap, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

const timeline = [
  {
    year: "2023",
    title: "The Beginning",
    description: "Started as a Hostinger-based web agency, building marketing sites for local businesses.",
  },
  {
    year: "Early 2024",
    title: "The Pivot",
    description: "Transitioned to Next.js, Supabase, and modern tooling. Discovered the power of automation with n8n.",
  },
  {
    year: "Mid 2024",
    title: "First Product",
    description: "Launched the AI Course Platform - 'Introduction to AI' for UK businesses. Secured first enterprise partnership.",
  },
  {
    year: "Late 2024",
    title: "Going Remote",
    description: "Became a fully remote-first studio, focusing on UK SMEs who need AI systems and automation.",
  },
  {
    year: "2025",
    title: "Today",
    description: "A full Custom Automation & SaaS Studio, building revenue engines with Next.js 16, React 19, and AI-powered tools.",
  },
];

const values = [
  {
    icon: Rocket,
    title: "Ship Fast",
    description: "We believe in rapid iteration. Build, test, learn, repeat. Perfect is the enemy of good.",
  },
  {
    icon: Target,
    title: "Results First",
    description: "We don't just build pretty things. Everything we create is designed to generate measurable results.",
  },
  {
    icon: Zap,
    title: "Automate Everything",
    description: "If a task happens twice, we automate it. We're obsessed with efficiency and scalability.",
  },
  {
    icon: Heart,
    title: "Own Your Data",
    description: "We help clients break free from SaaS lock-in. Your data, your platform, your rules.",
  },
];

export function AboutContent() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const timelineInView = useInView(timelineRef, { once: true, margin: "-100px" });
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });

  return (
    <>
      {/* Timeline Section */}
      <section ref={timelineRef} className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={timelineInView ? { opacity: 1, y: 0 } : {}}
            className="text-3xl font-bold text-center mb-16"
          >
            Our <span className="text-gradient">Journey</span>
          </motion.h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple via-cyan to-transparent" />

            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 40 }}
                animate={timelineInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  "relative flex items-start gap-8 mb-12",
                  "md:even:flex-row-reverse md:even:text-right"
                )}
              >
                {/* Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-purple glow-purple" />

                {/* Content */}
                <div className="ml-20 md:ml-0 md:w-1/2 md:px-12">
                  <span className="text-purple font-mono text-sm">{item.year}</span>
                  <h3 className="text-xl font-bold mt-1 mb-2">{item.title}</h3>
                  <p className="text-muted">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-20 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <span className="text-cyan text-sm font-medium uppercase tracking-widest mb-4 block">
              What We Believe
            </span>
            <h2 className="text-3xl font-bold">
              Our <span className="text-gradient">Values</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl glass hover:bg-white/[0.04] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-purple/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-purple" />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-8">
              Our <span className="text-gradient">Philosophy</span>
            </h2>
            <div className="space-y-6 text-lg text-muted">
              <p>
                We're a <span className="text-foreground font-medium">remote-first automation studio</span> built 
                specifically for UK SMEs who are ready to embrace AI and automation — but don't know where to start.
              </p>
              <p>
                We build <span className="text-foreground font-medium">Revenue Engines</span> — 
                AI systems, n8n workflows, and low-code tools that generate leads, convert customers, 
                and automate operations while you sleep.
              </p>
              <p>
                From AI education (with enterprise clients) 
                to custom automation consulting, we help UK businesses work smarter, not harder.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

