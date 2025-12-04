"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award } from "lucide-react";

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "20+", label: "Workflows Deployed" },
  { value: "5+", label: "Platforms Integrated" },
  { value: "1000s", label: "Hours Automated" },
];

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-16 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple/5 via-transparent to-cyan/5" />
      
      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Partner Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="flex justify-center mb-10"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass">
            <Award className="w-5 h-5 text-purple" />
            <span className="text-sm">
              Trusted by <span className="text-foreground font-medium">Waitrose & John Lewis Partners</span>
            </span>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Bottom tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center text-muted mt-10 text-sm"
        >
          Real systems. Real results. Battle-tested in production since 2023.
        </motion.p>
      </div>
    </section>
  );
}

