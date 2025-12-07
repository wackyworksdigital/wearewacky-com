"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Bot, Globe, Megaphone, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    id: "automation",
    icon: Bot,
    title: "Robots That Work For You",
    description:
      "We train little digital minions to do your boring tasks. They don't need coffee breaks, they don't call in sick, and they definitely won't steal your lunch from the office fridge.",
    features: ["n8n Workflows", "AI Agents", "Custom Integrations", "Zero Lunch Theft"],
    color: "purple",
    href: "/services#automation",
  },
  {
    id: "apps",
    icon: Globe,
    title: "Websites That Actually Work",
    description:
      "Not the kind your nephew made in 2012. Real websites that load fast, look incredible, and convince people to give you money. Revolutionary concept, we know.",
    features: ["Next.js Sites", "Web Apps", "Dashboards", "Money-Making Machines"],
    color: "cyan",
    href: "/services#apps",
  },
  {
    id: "content",
    icon: Megaphone,
    title: "Marketing That Doesn't Suck",
    description:
      "Social media, content, emails that people actually open. No corporate buzzwords, no stock photos of people high-fiving. Just stuff that works.",
    features: ["Content Strategy", "Social Media", "Copywriting", "Zero High-Fives"],
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
        {/* Section Header - Wacky */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Things We're <span className="text-gradient">Weirdly Good At</span>
          </h2>
          <p className="text-slate text-lg max-w-xl mx-auto">
            Honestly, we surprised ourselves too.
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

        {/* Education note - wacky mention */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center text-slate mt-12 text-sm"
        >
          Want to learn how we do this? We spill all our secrets →{" "}
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
