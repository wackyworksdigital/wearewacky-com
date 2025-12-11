"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FluidMenu } from "@/components/ui/fluid-menu";

const ACCENT = "#B07C4F";
const TEXT = "#3d3428";
const BG = "#f5ebe0";
const SHADOW = "0 3px 4px rgba(0,0,0,0.3), 0 1px 2px rgba(0,0,0,0.2)";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen" style={{ backgroundColor: BG, color: TEXT }}>
      
      {/* Noise + vignette */}
      <div
        className="fixed inset-0 pointer-events-none mix-blend-overlay z-[2]"
        style={{
          opacity: 0.12,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
      <div
        className="fixed inset-0 pointer-events-none z-[2]"
        style={{ background: "radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(0,0,0,0.08) 100%)" }}
      />

      <FluidMenu activePage="contact" />

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <motion.div 
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Title */}
          <h1
            className="text-5xl md:text-7xl lg:text-8xl lowercase"
            style={{
              fontFamily: "var(--font-syne), var(--font-space), sans-serif",
              fontWeight: 700,
              color: TEXT,
              textShadow: "0 6px 10px rgba(0,0,0,0.3), 0 3px 4px rgba(0,0,0,0.2)",
            }}
          >
            let's talk
          </h1>

          {/* Contact links */}
          <div className="space-y-3 text-xl md:text-2xl" style={{ textShadow: SHADOW }}>
            <p>
              email:{" "}
              <Link
                href="mailto:hello@wearewacky.com"
                className="transition-all duration-200"
                style={{ color: ACCENT }}
              >
                <motion.span
                  className="inline-block"
                  whileHover={{ scale: 1.05, x: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  hello@wearewacky.com
                </motion.span>
              </Link>
            </p>
            <p>
              whatsapp:{" "}
              <Link
                href="https://wa.me/447460460318"
                className="transition-all duration-200"
                style={{ color: ACCENT }}
              >
                <motion.span
                  className="inline-block"
                  whileHover={{ scale: 1.05, x: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  +44 7460 460318
                </motion.span>
              </Link>
            </p>
          </div>

          {/* Office hours */}
          <p className="text-lg md:text-xl pt-4" style={{ textShadow: SHADOW }}>
            <span style={{ opacity: 0.6 }}>office hours:</span>{" "}
            <span style={{ color: ACCENT }}>every hour is office hour when you've got robots</span>
          </p>
          
          {/* Extra CTA */}
          <p
            className="text-base pt-4 opacity-50"
            style={{ fontFamily: "var(--font-space), system-ui, sans-serif" }}
          >
            got an idea? weird project? just want to chat? we're here.
          </p>
        </motion.div>
      </div>
    </main>
  );
}
