"use client";

import { motion } from "framer-motion";

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind",
  "Supabase",
  "Vercel",
  "n8n",
  "Stripe",
];

export function TechStack() {
  return (
    <section className="py-16 border-t border-purple/5">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-slate text-sm mb-4">Built with the same fancy tools as Netflix and TikTok. Yes, really. No, we're not joking.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="text-charcoal font-medium"
              >
                {tech}
                {index < technologies.length - 1 && (
                  <span className="text-purple/30 ml-6">•</span>
                )}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
