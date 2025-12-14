"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const TEXT = "#3d3428";
const BG = "#f0eadd";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="relative min-h-screen overflow-x-hidden" style={{ backgroundColor: BG, color: TEXT }}>
      {/* Grid paper background */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-10 z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139, 94, 60, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 94, 60, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px"
        }}
      />

      {/* NEW WACKY MENU - Desktop */}
      <nav className="hidden lg:block fixed top-10 left-10 z-50 pointer-events-none">
        <div className="pointer-events-auto relative bg-paper-white p-4 lg:p-6 shadow-brutal -rotate-1 hover:rotate-0 transition-transform duration-300 border-2 border-black group">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-12 tape-effect rotate-0 z-10" />
          <ul className="flex flex-col gap-4 text-lg lg:text-xl font-bold lowercase">
            <li>
              <span className="bg-black text-white px-2 -ml-2 skew-x-[-10deg] inline-block">
                home
              </span>
            </li>
            <li>
              <Link href="/about" className="hover:text-red-600 hover:tracking-widest transition-all inline-block">
                about
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-red-600 hover:tracking-widest transition-all inline-block">
                services
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="hover:text-red-600 hover:tracking-widest transition-all inline-block">
                portfolio
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-red-600 hover:tracking-widest transition-all inline-block">
                contact
              </Link>
            </li>
          </ul>
          <div className="absolute -bottom-6 -right-6 text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 rotate-12">
            👀
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <header className="lg:hidden fixed top-0 w-full z-50 px-4 py-3 backdrop-blur border-b-2 border-black flex justify-between items-center shadow-brutal-sm" style={{ backgroundColor: 'rgba(240, 234, 221, 0.95)' }}>
        <div className="font-black text-2xl tracking-tighter bg-black text-white px-2 rotate-2">WAW!</div>
        <button 
          className="text-4xl border-2 border-black rounded-full hover:bg-black hover:text-white transition-colors w-12 h-12 flex items-center justify-center"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </header>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="lg:hidden fixed top-16 left-0 right-0 z-40 bg-paper-white border-b-2 border-black p-6 shadow-brutal">
          <ul className="flex flex-col gap-4 text-xl font-bold lowercase">
            <li><span className="bg-black text-white px-2">home</span></li>
            <li><Link href="/about" className="hover:text-red-600 transition-colors">about</Link></li>
            <li><Link href="/services" className="hover:text-red-600 transition-colors">services</Link></li>
            <li><Link href="/portfolio" className="hover:text-red-600 transition-colors">portfolio</Link></li>
            <li><Link href="/contact" className="hover:text-red-600 transition-colors">contact</Link></li>
          </ul>
        </div>
      )}

      {/* Brand Badge - Top Right */}
      <motion.div
        className="fixed top-6 right-6 z-40 hidden lg:block"
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <div className="bg-white p-4 border-2 border-black shadow-brutal rotate-3 hover:rotate-0 transition-transform cursor-default">
          <div className="text-center">
            <h2 
              className="text-xl font-black uppercase leading-none mb-1"
              style={{ fontFamily: "var(--font-bebas), sans-serif" }}
            >
              WACKY WORKS
            </h2>
            <p 
              className="text-xs tracking-widest"
              style={{ fontFamily: "var(--font-space), sans-serif" }}
            >
              DIGITAL
            </p>
            <div 
              className="text-[10px] mt-1"
              style={{ fontFamily: "var(--font-caveat), cursive" }}
            >
              @wackyworksdigital
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mobile Brand - Below menu button */}
      <motion.div
        className="lg:hidden fixed top-20 left-1/2 -translate-x-1/2 z-30"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="bg-yellow-300 px-4 py-2 border-2 border-black shadow-brutal-sm rotate-1">
          <div className="text-center">
            <div className="text-sm font-black uppercase" style={{ fontFamily: "var(--font-bebas), sans-serif" }}>
              Wacky Works Digital
            </div>
            <div className="text-[10px]" style={{ fontFamily: "var(--font-caveat), cursive" }}>
              @wackyworksdigital
            </div>
          </div>
        </div>
      </motion.div>

      {/* HERO SECTION */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 pt-32 lg:pt-0 pb-20">
        <div className="w-full max-w-6xl">
          
          {/* Big chaotic title */}
          <motion.div
            className="mb-12 relative text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-[140px] font-black tracking-tighter leading-[0.9]">
              <motion.span 
                className="inline-block"
                animate={{ rotate: [-2, 2, -2] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                WE
              </motion.span>{" "}
              <motion.span 
                className="inline-block text-outline"
                animate={{ rotate: [2, -2, 2] }}
                transition={{ duration: 3.5, repeat: Infinity }}
              >
                BUILD
              </motion.span>
              <br />
              <motion.span 
                className="relative inline-block"
                style={{ color: "#ff4757" }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                WEIRD
                <span className="absolute -top-8 -right-12 text-3xl rotate-12 animate-wiggle">
                  💥
                </span>
              </motion.span>
              <br />
              <span className="inline-block -rotate-2">STUFF</span>
            </h1>

            {/* Handwriting tagline */}
            <motion.p
              className="text-2xl md:text-4xl mt-8 -rotate-1"
              style={{ fontFamily: "var(--font-caveat), cursive", color: "#2563eb" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              (that actually works)
            </motion.p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Link href="/services">
              <motion.div
                className="inline-block bg-black text-white p-8 md:p-12 border-4 border-black shadow-brutal-lg hover:shadow-brutal hover:translate-x-2 hover:translate-y-2 transition-all cursor-pointer relative"
                whileHover={{ rotate: -2 }}
              >
                <h2 className="text-4xl md:text-6xl font-black uppercase">
                  SEE WHAT<br/>WE DO
                </h2>
                
                {/* Arrow pointing UP */}
                <motion.div
                  className="absolute -top-16 left-1/2 -translate-x-1/2 text-3xl"
                  style={{ fontFamily: "var(--font-marker), cursive", color: TEXT }}
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  ↑ click me!
                </motion.div>
              </motion.div>
            </Link>
          </motion.div>

          {/* Slogan - Big statement card */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
          >
            <div className="inline-block bg-white p-8 md:p-12 border-4 border-black shadow-brutal rotate-1 max-w-3xl">
              <h3 
                className="text-3xl md:text-5xl font-black uppercase leading-tight mb-4"
                style={{ fontFamily: "var(--font-bebas), sans-serif" }}
              >
                WE'RE NOT<br/>FOR EVERYONE
              </h3>
              <p 
                className="text-2xl md:text-3xl -rotate-1"
                style={{ fontFamily: "var(--font-caveat), cursive" }}
              >
                and that's the whole point.
              </p>
            </div>
          </motion.div>

          {/* Bottom info card */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <div className="inline-block bg-green-300 p-6 border-2 border-black shadow-brutal rotate-1 max-w-2xl">
              <p 
                className="text-base md:text-lg leading-relaxed"
                style={{ fontFamily: "var(--font-caveat), cursive", fontSize: "24px" }}
              >
                UK-based • worldwide clients • 100% real humans
                <br/>
                <span className="text-sm">(we work WITH robots, not AS robots)</span>
              </p>
              <div className="flex justify-center gap-4 mt-4 text-3xl">
                <span className="animate-bounce">🇬🇧</span>
                <span className="animate-pulse">🌍</span>
                <span className="animate-wiggle">👨‍💻</span>
              </div>
            </div>
          </motion.div>

          {/* Floating decorative elements */}
          <motion.div
            className="absolute top-40 right-10 text-6xl opacity-20 hidden lg:block"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            ⚙️
          </motion.div>
          <motion.div
            className="absolute bottom-40 left-10 text-7xl opacity-20 hidden lg:block"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            💡
          </motion.div>

        </div>
      </div>
    </main>
  );
}
