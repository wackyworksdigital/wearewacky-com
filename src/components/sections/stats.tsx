"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Coffee, Brain, Skull, Dog } from "lucide-react";

// Wacky honest stats
const stats = [
  { value: "∞", label: "Spreadsheets murdered", icon: Skull, color: "text-pink" },
  { value: "47", label: "Cups of coffee consumed", icon: Coffee, color: "text-cyan" },
  { value: "3", label: "Client mental breakdowns averted", icon: Brain, color: "text-purple" },
  { value: "1", label: "Dog supervising all builds", icon: Dog, color: "text-purple" },
];

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-section">
      <div className="max-w-5xl mx-auto px-6 py-20">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
              className="text-center p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-purple/5 hover:border-purple/10 transition-all"
            >
              <motion.div
                animate={isInView ? { y: [0, -4, 0] } : {}}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-purple/10 to-cyan/10 mb-4`}
              >
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </motion.div>
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-slate font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Tagline - simple, no parenthetical */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center text-slate mt-12 text-sm"
        >
          Real numbers. Real tired from building. Real results.
        </motion.p>
      </div>
    </section>
  );
}
