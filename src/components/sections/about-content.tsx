"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Rocket, Target, Zap, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

const timeline = [
  {
    year: "2020",
    title: "The Beginning",
    description: "Started as a WordPress agency on Hostinger, building marketing sites for local businesses.",
  },
  {
    year: "2022",
    title: "The Realization",
    description: "Discovered that WordPress wasn't enough for the high-performance revenue engines our clients needed.",
  },
  {
    year: "2023",
    title: "The Pivot",
    description: "Transitioned to Next.js, Supabase, and modern tooling. Started building custom web applications.",
  },
  {
    year: "2024",
    title: "The Evolution",
    description: "Launched our first SaaS product, the AI Course Platform. Began automation consulting with n8n.",
  },
  {
    year: "2025",
    title: "Today",
    description: "A full Custom Automation & SaaS Studio, building revenue engines for forward-thinking businesses.",
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
                We believe that every business deserves{" "}
                <span className="text-foreground font-medium">digital assets</span> that work for them 24/7, 
                not just pretty websites that sit there looking nice.
              </p>
              <p>
                That's why we build <span className="text-foreground font-medium">Revenue Engines</span> — 
                systems that generate leads, convert customers, and automate operations while you sleep.
              </p>
              <p>
                We use <span className="text-foreground font-medium">cutting-edge technology</span> not 
                because it's trendy, but because it allows us to build faster, more reliable, 
                and more scalable solutions.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

