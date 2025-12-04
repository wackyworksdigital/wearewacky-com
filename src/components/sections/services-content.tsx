"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Boxes, Users, Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const services = [
  {
    id: "education",
    icon: GraduationCap,
    title: "Education",
    subtitle: "AI & Automation Courses",
    description:
      "We teach what we do. Our courses help individuals and enterprises understand and leverage AI tools for real business results.",
    features: [
      "Introduction to AI Course (Flagship)",
      "Adventures with AI (Coming Soon)",
      "Automations with AI (Coming Soon)",
      "Enterprise training programs",
      "Partner pricing for organizations",
    ],
    pricing: "From £19",
    color: "purple",
    cta: "View Courses",
    href: "https://courses.wearewacky.com",
  },
  {
    id: "saas",
    icon: Boxes,
    title: "SaaS Products",
    subtitle: "White-Label Solutions",
    description:
      "We treat our internal tools as products. Our Course Platform is a white-label SaaS for creators who want to own their data instead of renting Teachable or Kajabi.",
    features: [
      "Full source code ownership",
      "Custom branding & domain",
      "Stripe payment integration",
      "User authentication built-in",
      "Self-hosted or managed options",
    ],
    pricing: "Contact for quote",
    color: "cyan",
    cta: "Learn More",
    href: "/contact",
  },
  {
    id: "consulting",
    icon: Users,
    title: "Consulting",
    subtitle: "Automation & AI Agents",
    description:
      "High-end automation consulting for UK SMEs. We build n8n workflows and AI Agents that save hundreds of hours annually.",
    features: [
      "n8n workflow development",
      "AI Agent implementation",
      "CRM & email automation",
      "Custom integrations",
      "Ongoing support & optimization",
    ],
    pricing: "From £500/project",
    color: "purple",
    cta: "Book a Call",
    href: "/contact",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "We learn about your business, goals, and pain points.",
  },
  {
    step: "02",
    title: "Strategy",
    description: "We design a custom solution tailored to your needs.",
  },
  {
    step: "03",
    title: "Build",
    description: "We develop and test your solution with rapid iteration.",
  },
  {
    step: "04",
    title: "Launch",
    description: "We deploy, train your team, and provide ongoing support.",
  },
];

export function ServicesContent() {
  const servicesRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const servicesInView = useInView(servicesRef, { once: true, margin: "-100px" });
  const processInView = useInView(processRef, { once: true, margin: "-100px" });

  return (
    <>
      {/* Services Detail */}
      <section ref={servicesRef} className="py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 60 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className={cn(
                "grid md:grid-cols-2 gap-12 items-center",
                index % 2 === 1 && "md:flex-row-reverse"
              )}
            >
              {/* Content */}
              <div className={cn(index % 2 === 1 && "md:order-2")}>
                <div
                  className={cn(
                    "w-14 h-14 rounded-xl flex items-center justify-center mb-6",
                    service.color === "purple"
                      ? "bg-purple/10 text-purple"
                      : "bg-cyan/10 text-cyan"
                  )}
                >
                  <service.icon className="w-7 h-7" />
                </div>
                <span className="text-muted text-sm">{service.subtitle}</span>
                <h2 className="text-3xl font-bold mt-1 mb-4">{service.title}</h2>
                <p className="text-muted mb-6">{service.description}</p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-purple mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Pricing & CTA */}
                <div className="flex items-center gap-4">
                  <span className="text-2xl font-bold text-gradient">
                    {service.pricing}
                  </span>
                  <Link
                    href={service.href}
                    target={service.href.startsWith("http") ? "_blank" : undefined}
                    className={cn(
                      "inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300",
                      service.color === "purple"
                        ? "bg-purple hover:bg-purple-dark glow-purple"
                        : "bg-cyan hover:bg-cyan-dark glow-cyan"
                    )}
                  >
                    {service.cta}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Visual */}
              <div
                className={cn(
                  "aspect-square rounded-2xl glass p-8 flex items-center justify-center",
                  index % 2 === 1 && "md:order-1"
                )}
              >
                <service.icon
                  className={cn(
                    "w-32 h-32 opacity-20",
                    service.color === "purple" ? "text-purple" : "text-cyan"
                  )}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="py-20 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <span className="text-purple text-sm font-medium uppercase tracking-widest mb-4 block">
              How We Work
            </span>
            <h2 className="text-3xl font-bold">
              Our <span className="text-gradient">Process</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 40 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-gradient mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

