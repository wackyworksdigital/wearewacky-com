"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Boxes, Users, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    id: "education",
    icon: GraduationCap,
    title: "Education",
    subtitle: "The AI Courses",
    description:
      "We teach what we do. Our flagship 'Introduction to AI' course helps individuals and enterprises understand and leverage AI tools.",
    features: ["Lifetime Access", "Enterprise Options", "Partner Pricing"],
    color: "purple",
    href: "https://courses.wearewacky.com",
  },
  {
    id: "saas",
    icon: Boxes,
    title: "SaaS Products",
    subtitle: "White-Label Solutions",
    description:
      "Our internal tools are products. The Course Platform is a white-label SaaS for creators who want to own their data instead of renting Teachable or Kajabi.",
    features: ["Full Ownership", "Custom Branding", "Self-Hosted Option"],
    color: "cyan",
    href: "#contact",
  },
  {
    id: "consulting",
    icon: Users,
    title: "Consulting",
    subtitle: "Automation & AI Agents",
    description:
      "High-end automation consulting for UK SMEs. We build n8n workflows and AI Agents that save hundreds of hours annually.",
    features: ["n8n Workflows", "AI Agents", "Custom Integrations"],
    color: "purple",
    href: "#contact",
  },
];

export function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      id="services"
      ref={containerRef}
      className="relative py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-dots opacity-50" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-purple text-sm font-medium uppercase tracking-widest mb-4 block">
            Revenue Streams
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Three Ways We <span className="text-gradient">Create Value</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            From education to enterprise solutions, we build digital assets that 
            scale with your business.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.a
              key={service.id}
              href={service.href}
              target={service.href.startsWith("http") ? "_blank" : undefined}
              rel={service.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
              className={cn(
                "group relative p-8 rounded-2xl glass",
                "hover:bg-white/[0.04] transition-all duration-500",
                "flex flex-col h-full"
              )}
            >
              {/* Icon */}
              <div
                className={cn(
                  "w-14 h-14 rounded-xl flex items-center justify-center mb-6",
                  "transition-all duration-500 group-hover:scale-110",
                  service.color === "purple"
                    ? "bg-purple/10 text-purple group-hover:bg-purple/20"
                    : "bg-cyan/10 text-cyan group-hover:bg-cyan/20"
                )}
              >
                <service.icon className="w-7 h-7" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <span className="text-muted text-sm">{service.subtitle}</span>
                <h3 className="text-2xl font-bold mt-1 mb-4 flex items-center gap-2">
                  {service.title}
                  <ArrowUpRight className="w-5 h-5 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                </h3>
                <p className="text-muted mb-6">{service.description}</p>
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 text-xs rounded-full bg-white/5 text-muted"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Hover Glow */}
              <div
                className={cn(
                  "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",
                  service.color === "purple"
                    ? "shadow-[0_0_60px_rgba(139,92,246,0.15)]"
                    : "shadow-[0_0_60px_rgba(6,182,212,0.15)]"
                )}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

