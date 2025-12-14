"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
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

      {/* HERO SECTION - WILD & SCATTERED */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 pt-20 lg:pt-0">
        <div className="w-full max-w-7xl">
          
          {/* Big chaotic title */}
          <motion.div
            className="mb-16 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-[140px] font-black tracking-tighter leading-[0.9] text-center">
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
              className="text-2xl md:text-4xl text-center mt-8 -rotate-1"
              style={{ fontFamily: "var(--font-caveat), cursive", color: "#2563eb" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              (that actually works)
            </motion.p>

            {/* Background doodles */}
            <div className="absolute -top-20 -left-10 text-[200px] opacity-5 -rotate-12 select-none pointer-events-none hidden md:block">
              ⚡
            </div>
            <div className="absolute -bottom-10 -right-20 text-[180px] opacity-5 rotate-45 select-none pointer-events-none hidden md:block">
              🚀
            </div>
          </motion.div>

          {/* Service cards - SCATTERED & UNIQUE */}
          <div className="relative max-w-5xl mx-auto mb-20">
            
            {/* Card 1 - AI AGENTS (Yellow sticky) */}
            <motion.div
              className="absolute top-0 left-[5%] md:left-[10%] w-64 md:w-80"
              initial={{ opacity: 0, y: 30, rotate: -8 }}
              animate={{ opacity: 1, y: 0, rotate: -6 }}
              transition={{ delay: 0.4 }}
              whileHover={{ rotate: 0, scale: 1.05, zIndex: 20 }}
            >
              <Link href="/services">
                <div className="bg-yellow-300 p-6 border-2 border-black shadow-brutal relative group cursor-pointer">
                  {/* Paper clip */}
                  <div className="absolute -top-3 right-4 w-6 h-12 bg-gray-400 rounded-full opacity-40 rotate-12" />
                  
                  <div className="relative h-48 mb-4 border-2 border-black overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=400&fit=crop"
                      alt="AI Robot"
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  
                  <h3 
                    className="text-3xl font-black uppercase mb-2"
                    style={{ fontFamily: "var(--font-bebas), sans-serif" }}
                  >
                    AI AGENTS
                  </h3>
                  <p 
                    className="text-lg"
                    style={{ fontFamily: "var(--font-caveat), cursive" }}
                  >
                    robots that work while you sleep
                  </p>
                  <div className="absolute -bottom-2 -right-2 text-4xl group-hover:scale-125 transition-transform">
                    🤖
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Card 2 - AUTOMATION (Cyan paper) */}
            <motion.div
              className="absolute top-24 right-[5%] md:right-[10%] w-64 md:w-80"
              initial={{ opacity: 0, y: 30, rotate: 8 }}
              animate={{ opacity: 1, y: 0, rotate: 5 }}
              transition={{ delay: 0.5 }}
              whileHover={{ rotate: 0, scale: 1.05, zIndex: 20 }}
            >
              <Link href="/services">
                <div className="bg-cyan-200 p-6 border-2 border-black shadow-brutal relative group cursor-pointer clip-paper">
                  <div className="relative h-48 mb-4 border border-black overflow-hidden bg-black">
                    <Image
                      src="https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=500&h=400&fit=crop"
                      alt="Automation circuits"
                      fill
                      className="object-cover opacity-70 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                  
                  <h3 
                    className="text-3xl font-black uppercase mb-2"
                    style={{ fontFamily: "var(--font-bebas), sans-serif" }}
                  >
                    AUTOMATION
                  </h3>
                  <p 
                    className="text-lg"
                    style={{ fontFamily: "var(--font-kalam), cursive" }}
                  >
                    connect all the things! ⚡
                  </p>
                </div>
              </Link>
            </motion.div>

            {/* Card 3 - WEBSITES (Pink card) */}
            <motion.div
              className="absolute top-72 left-[15%] md:left-[25%] w-64 md:w-80"
              initial={{ opacity: 0, y: 30, rotate: -5 }}
              animate={{ opacity: 1, y: 0, rotate: -3 }}
              transition={{ delay: 0.6 }}
              whileHover={{ rotate: 0, scale: 1.05, zIndex: 20 }}
            >
              <Link href="/services">
                <div className="p-6 border-2 border-black shadow-brutal relative group cursor-pointer" style={{ backgroundColor: "#f9a8d4" }}>
                  {/* Tape */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 tape-effect -rotate-3 z-10" />
                  
                  <div className="relative h-48 mb-4 border-2 border-black overflow-hidden bg-white">
                    <Image
                      src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=400&fit=crop"
                      alt="Modern website"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  <h3 
                    className="text-3xl font-black uppercase mb-2 bg-white inline-block px-2 border border-black rotate-1"
                    style={{ fontFamily: "var(--font-bebas), sans-serif" }}
                  >
                    WEBSITES
                  </h3>
                  <p 
                    className="text-lg mt-2"
                    style={{ fontFamily: "var(--font-marker), cursive" }}
                  >
                    fast, modern, NOT BORING
                  </p>
                  <div className="absolute -bottom-3 -right-3 text-4xl group-hover:rotate-12 transition-transform">
                    🌐
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Spacer to prevent overlap */}
            <div className="h-[600px] md:h-[500px]" />
          </div>

          {/* BRUTALIST CTA */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Link href="/services">
              <motion.div
                className="inline-block bg-black text-white p-8 md:p-12 border-4 border-black shadow-brutal-lg hover:shadow-brutal hover:translate-x-2 hover:translate-y-2 transition-all cursor-pointer relative"
                whileHover={{ rotate: -2 }}
              >
                <h2 className="text-4xl md:text-6xl font-black uppercase">
                  SEE WHAT<br/>WE DO
                </h2>
                
                {/* Hand-drawn arrow */}
                <motion.div
                  className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-3xl"
                  style={{ fontFamily: "var(--font-marker), cursive", color: TEXT }}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  ↓ click me!
                </motion.div>
              </motion.div>
            </Link>
          </motion.div>

          {/* Bottom info card */}
          <motion.div
            className="text-center mt-24"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <div className="inline-block bg-green-300 p-6 border-2 border-black shadow-brutal rotate-1 max-w-2xl">
              <p 
                className="text-base md:text-lg leading-relaxed"
                style={{ fontFamily: "var(--font-caveat), cursive", fontSize: "24px" }}
              >
                UK-based • worldwide clients • 100% real humans
                <br/>
                <span className="text-sm">(the robots work FOR us, not AS us)</span>
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
