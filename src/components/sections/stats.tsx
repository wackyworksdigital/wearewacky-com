"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Zap, Bot, Clock, Layers } from "lucide-react";

const stats = [
  { value: "2+", label: "Years Experience", icon: Clock, color: "text-cyan" },
  { value: "20+", label: "Workflows Deployed", icon: Zap, color: "text-purple" },
  { value: "5+", label: "Platforms Integrated", icon: Layers, color: "text-pink" },
  { value: "1000s", label: "Hours Automated", icon: Bot, color: "text-purple" },
];

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-20 relative overflow-hidden bg-gradient-section">
      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Partner Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-warm-white shadow-brand border border-purple/10">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Award className="w-5 h-5 text-purple" />
            </motion.div>
            <span className="text-sm font-medium text-charcoal">
              Trusted by <span className="text-gradient font-semibold">Waitrose & John Lewis Partners</span>
            </span>
            <span className="text-xs">🎉</span>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: index * 0.1, type: "spring" }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 rounded-2xl bg-warm-white shadow-sm border border-purple/5 hover:shadow-brand transition-all cursor-default"
            >
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-purple/10 to-cyan/10 mb-4`}
              >
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </motion.div>
              <div className="text-4xl md:text-5xl font-extrabold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-slate font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Bottom tagline - Wacky version */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center text-slate mt-12 text-sm"
        >
          Real systems. Real results. Real tired from building them.{" "}
          <span className="text-charcoal font-medium">(Worth it though.)</span>
        </motion.p>
      </div>
    </section>
  );
}
