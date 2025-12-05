"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Bot, Globe, Megaphone, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    id: "automation",
    icon: Bot,
    title: "Automation & AI",
    description:
      "n8n workflows, AI chatbots, custom integrations. We build the robots that do your boring work while you sleep.",
    features: ["n8n Workflows", "AI Agents", "Custom Integrations", "API Connections"],
    color: "purple",
    href: "/services#automation",
  },
  {
    id: "apps",
    icon: Globe,
    title: "Apps & Websites",
    description:
      "Next.js sites, web apps, dashboards. Fast, modern, and built to actually convert visitors into customers.",
    features: ["Next.js Sites", "Web Applications", "Dashboards", "E-commerce"],
    color: "cyan",
    href: "/services#apps",
  },
  {
    id: "content",
    icon: Megaphone,
    title: "Social & Content",
    description:
      "Content creation, social media management, marketing that doesn't make people cringe.",
    features: ["Content Strategy", "Social Media", "Copywriting", "Email Marketing"],
    color: "pink",
    href: "/services#content",
  },
];

export function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      id="services"
      ref={containerRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-20"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-dots opacity-30" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Section Header - Simple */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            What we <span className="text-gradient">build</span>
          </h2>
          <p className="text-slate text-lg max-w-xl mx-auto">
            Three things we're actually good at.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.a
              key={service.id}
              href={service.href}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
              className={cn(
                "group relative p-8 rounded-2xl bg-white/70 backdrop-blur-sm border border-purple/5",
                "hover:border-purple/15 hover:shadow-brand transition-all duration-300",
                "flex flex-col h-full"
              )}
            >
              {/* Icon */}
              <div
                className={cn(
                  "w-14 h-14 rounded-xl flex items-center justify-center mb-6",
                  "transition-all duration-300 group-hover:scale-110",
                  service.color === "purple" && "bg-purple/10 text-purple",
                  service.color === "cyan" && "bg-cyan/10 text-cyan",
                  service.color === "pink" && "bg-pink/10 text-pink"
                )}
              >
                <service.icon className="w-7 h-7" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-charcoal">
                  {service.title}
                  <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                </h3>
                <p className="text-slate text-sm mb-6 leading-relaxed">{service.description}</p>
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-purple/5">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 text-xs rounded-full bg-cream text-slate"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>

        {/* Education note - demoted to small mention */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center text-slate mt-12 text-sm"
        >
          We also teach what we know →{" "}
          <a 
            href="https://courses.wearewacky.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-purple hover:underline"
          >
            courses.wearewacky.com
          </a>
        </motion.p>
      </div>
    </section>
  );
}
