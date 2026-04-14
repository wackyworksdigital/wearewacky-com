"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const TEXT = "#3d3428";
const BG = "#f0eadd";

export default function ScanLoginPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main
      className="relative min-h-screen overflow-x-hidden"
      style={{ backgroundColor: BG, color: TEXT }}
    >
      {/* Mobile Branding - Top Left */}
      <div className="fixed top-4 left-4 z-50 lg:hidden">
        <div
          className="bg-yellow-400 px-3 py-2 border-4 border-black font-black text-xs rotate-[-2deg]"
          style={{ boxShadow: "4px 4px 0 #000" }}
        >
          WACKY WORKS DIGITAL
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="fixed top-4 right-4 z-50 lg:hidden bg-white border-4 border-black p-3"
        style={{ boxShadow: "4px 4px 0 #000" }}
      >
        <div className="w-6 h-0.5 bg-black mb-1.5"></div>
        <div className="w-6 h-0.5 bg-black mb-1.5"></div>
        <div className="w-6 h-0.5 bg-black"></div>
      </button>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white z-40 lg:hidden flex flex-col items-center justify-center gap-6">
          {["home", "about", "services", "portfolio", "contact", "faq", "pricing"].map((item) => (
            <Link
              key={item}
              href={item === "home" ? "/" : `/${item}`}
              className="text-3xl font-black hover:text-red-500 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      )}

      {/* Desktop Menu */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div
          className="bg-white border-4 border-black p-4 rotate-[-2deg]"
          style={{ boxShadow: "6px 6px 0 #000" }}
        >
          <nav className="space-y-2">
            {["home", "about", "services", "portfolio", "contact", "faq", "pricing"].map((item, i) => (
              <Link
                key={item}
                href={item === "home" ? "/" : `/${item}`}
                className={`block text-lg font-bold hover:bg-yellow-300 px-2 py-1 transition-colors ${
                  i % 2 === 0 ? "rotate-1" : "-rotate-1"
                }`}
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Desktop Branding */}
      <div className="fixed top-6 right-6 z-40 hidden lg:block">
        <div
          className="bg-white border-4 border-black p-4 rotate-[3deg]"
          style={{ boxShadow: "6px 6px 0 #000" }}
        >
          <div className="font-black text-lg">WACKY WORKS</div>
          <div className="text-sm font-bold text-center border-t-2 border-black pt-1 mt-1">DIGITAL</div>
          <div className="text-xs text-gray-500 mt-1 font-mono">@wackyworksdigital</div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen px-6 pt-32 lg:pt-16 lg:pl-64 pb-16 flex items-center">
        <div className="w-full max-w-3xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div
              className="inline-block bg-yellow-400 px-8 py-4 border-4 border-black rotate-[-1deg]"
              style={{ boxShadow: "8px 8px 0 #000" }}
            >
              <h1 className="text-4xl md:text-6xl font-black">SCAN LOGIN</h1>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8"
          >
            <div
              className="bg-white p-6 border-4 border-black rotate-[0.5deg]"
              style={{ boxShadow: "6px 6px 0 #000" }}
            >
              <p className="text-lg" style={{ fontFamily: "var(--font-caveat), cursive" }}>
                A tiny Android app that turns your warehouse login into barcodes you can scan
                with a handheld. Built for cold chillers, gloves, and people who&apos;d rather
                not type their password fifty times a shift.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <div
              className="bg-cyan-300 p-6 border-4 border-black rotate-[-0.5deg]"
              style={{ boxShadow: "6px 6px 0 #000" }}
            >
              <p className="font-bold text-lg">Coming to the Play Store soon.</p>
              <p className="mt-2 text-sm">Currently in closed testing.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/scanlogin/privacy"
              className="bg-white px-6 py-3 border-4 border-black font-bold hover:bg-yellow-300 transition-colors"
              style={{ boxShadow: "4px 4px 0 #000" }}
            >
              Privacy Policy →
            </Link>
            <Link
              href="/scanlogin/terms"
              className="bg-white px-6 py-3 border-4 border-black font-bold hover:bg-yellow-300 transition-colors"
              style={{ boxShadow: "4px 4px 0 #000" }}
            >
              Terms →
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-16 pt-8 border-t-4 border-black"
          >
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link href="/" className="hover:underline font-bold">Home</Link>
              <Link href="/portfolio" className="hover:underline font-bold">Portfolio</Link>
              <Link href="/contact" className="hover:underline font-bold">Contact</Link>
            </div>
            <p className="text-center mt-4 text-sm opacity-60">
              © {new Date().getFullYear()} Wacky Works Digital. Made with questionable amounts of coffee.
            </p>
          </motion.div>

        </div>
      </div>
    </main>
  );
}
