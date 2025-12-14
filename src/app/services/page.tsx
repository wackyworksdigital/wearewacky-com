"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const TEXT = "#3d3428";
const BG = "#f0eadd";

export default function ServicesPage() {
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
              <Link href="/" className="hover:text-red-600 hover:tracking-widest transition-all inline-block">
                home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-red-600 hover:tracking-widest transition-all inline-block">
                about
              </Link>
            </li>
            <li>
              <span className="bg-black text-white px-2 -ml-2 skew-x-[-10deg] inline-block">
                services
              </span>
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
            <li><Link href="/" className="hover:text-red-600 transition-colors">home</Link></li>
            <li><Link href="/about" className="hover:text-red-600 transition-colors">about</Link></li>
            <li><span className="bg-black text-white px-2">services</span></li>
            <li><Link href="/portfolio" className="hover:text-red-600 transition-colors">portfolio</Link></li>
            <li><Link href="/contact" className="hover:text-red-600 transition-colors">contact</Link></li>
          </ul>
        </div>
      )}

      {/* Main Content */}
      <div className="w-full lg:pl-56 pr-4 lg:pr-12 pt-24 lg:pt-16 pb-24 min-h-screen">
        
        {/* Hero Title */}
        <div className="mb-20 relative max-w-5xl mx-auto">
          <div className="absolute -top-10 -left-10 text-[120px] opacity-5 -rotate-12 select-none pointer-events-none" style={{ fontFamily: "var(--font-marker), cursive", color: "#d97706" }}>
            POW!
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-4 relative z-10 leading-[0.85]">
            <motion.span 
              className="inline-block hover:-skew-x-12 transition-transform cursor-default"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
            >
              WHAT
            </motion.span>
            {" "}
            <motion.span 
              className="inline-block text-outline hover:text-green-600 transition-colors cursor-default"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              WE
            </motion.span>
            <br/>
            <motion.span 
              className="relative inline-block rotate-2"
              style={{ color: "#dc2626" }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              DO
            </motion.span>
          </h1>

          <motion.p
            className="text-2xl md:text-3xl -rotate-1 mt-6"
            style={{ fontFamily: "var(--font-caveat), cursive" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            (a lot, actually)
          </motion.p>
        </div>

        {/* Services Grid - EACH ONE DIFFERENT! */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 px-2 max-w-[1600px] mx-auto">
          
          {/* 1. AI AGENTS - Terminal style */}
          <motion.div 
            className="break-inside-avoid relative group hover:z-30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link href="/contact" className="block">
              <div className="bg-black text-green-500 p-1 border-2 border-black shadow-[8px_8px_0_0_#16a34a] hover:shadow-[4px_4px_0_0_#16a34a] hover:translate-x-1 hover:translate-y-1 transition-all duration-200 -rotate-1 group-hover:rotate-0">
                <div className="border border-green-500 p-6">
                  <div className="flex justify-between items-center mb-4 border-b border-green-500 pb-2">
                    <h3 className="text-2xl font-mono uppercase">AI AGENTS</h3>
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
                  </div>
                  <div className="relative h-32 mb-4 overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop"
                      alt="AI Agent"
                      fill
                      className="object-cover mix-blend-luminosity opacity-60 group-hover:opacity-80 transition-opacity"
                    />
                  </div>
                  <p className="text-sm font-mono mb-2 text-gray-400">
                    &gt; smart helpers that never sleep
                  </p>
                  <p className="text-xs text-gray-500">
                    custom AI assistants that handle customer support, data analysis, and repetitive tasks 24/7.
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* 2. AUTOMATION - Sticky note */}
          <motion.div 
            className="break-inside-avoid relative group hover:z-30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Link href="/contact" className="block">
              <div className="bg-yellow-300 p-6 border-2 border-black shadow-brutal rotate-2 group-hover:rotate-0 transition-transform duration-300 relative">
                <div className="absolute -top-3 right-8 w-4 h-12 bg-red-400/50 rotate-12 rounded-sm border border-black/20" />
                
                <h3 
                  className="text-3xl font-black uppercase mb-3"
                  style={{ fontFamily: "var(--font-bebas), sans-serif" }}
                >
                  WORKFLOW<br/>AUTOMATION
                </h3>
                
                <div className="relative h-24 mb-3 border-2 border-black overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=400&h=200&fit=crop"
                    alt="Automation"
                    fill
                    className="object-cover"
                  />
                </div>
                
                <p 
                  className="text-base mb-2"
                  style={{ fontFamily: "var(--font-marker), cursive" }}
                >
                  connect everything!
                </p>
                <p className="text-xs leading-tight">
                  we wire up your apps using n8n, zapier, and make.com so they actually talk to each other.
                </p>
              </div>
            </Link>
          </motion.div>

          {/* 3. RAG & KNOWLEDGE - Folder style */}
          <motion.div 
            className="break-inside-avoid relative group hover:z-30 pt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/contact" className="block">
              <div className="relative">
                <div className="absolute -top-6 left-0 w-1/3 h-8 bg-blue-200 border-2 border-b-0 border-black rounded-t-lg z-0" />
                <div className="bg-blue-200 p-6 border-2 border-black shadow-brutal relative z-10 rounded-tr-lg rounded-br-lg rounded-bl-lg -rotate-1 group-hover:rotate-0 transition-transform">
                  <h3 className="text-2xl font-bold uppercase tracking-wider mb-3 flex items-center gap-2">
                    <span className="text-3xl">📚</span>
                    RAG & KNOWLEDGE
                  </h3>
                  <p 
                    className="text-lg mb-2"
                    style={{ fontFamily: "var(--font-caveat), cursive" }}
                  >
                    make your docs smart
                  </p>
                  <div className="bg-white border border-blue-300 p-3 shadow-inner text-xs text-gray-600 font-mono">
                    turn your messy documents into an AI that actually knows your business.
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* 4. APP DEV - Polaroid style */}
          <motion.div 
            className="break-inside-avoid relative group hover:z-30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link href="/contact" className="block">
              <div className="bg-white p-4 pb-12 border-2 border-black shadow-brutal -rotate-2 group-hover:rotate-0 transition-transform duration-300">
                <div className="relative h-48 mb-4 border border-black overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=400&fit=crop"
                    alt="App Development"
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <h3 
                  className="text-2xl font-black text-center uppercase"
                  style={{ fontFamily: "var(--font-bebas), sans-serif" }}
                >
                  APP DEV
                </h3>
                <p 
                  className="text-center text-sm mt-2"
                  style={{ fontFamily: "var(--font-caveat), cursive" }}
                >
                  build something cool ✨
                </p>
              </div>
            </Link>
          </motion.div>

          {/* 5. WEBSITES - Big pink circle */}
          <motion.div 
            className="break-inside-avoid relative group hover:z-30"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link href="/contact" className="block">
              <div className="aspect-square flex flex-col items-center justify-center p-8 border-2 border-black shadow-brutal hover:rounded-[50%] transition-all duration-500 overflow-hidden text-center cursor-pointer relative rotate-1" style={{ backgroundColor: "#f9a8d4" }}>
                <h3 className="text-5xl font-black text-white leading-none group-hover:scale-110 transition-transform">
                  WEB<br/>SITES
                </h3>
                <p 
                  className="text-white mt-4 text-lg"
                  style={{ fontFamily: "var(--font-marker), cursive" }}
                >
                  not your grandma's wordpress
                </p>
                <div className="absolute inset-0 border-[10px] border-white/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-700" />
              </div>
            </Link>
          </motion.div>

          {/* 6. E-COMMERCE - Receipt style */}
          <motion.div 
            className="break-inside-avoid relative group hover:z-30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <Link href="/contact" className="block">
              <div className="bg-white p-6 border-2 border-black shadow-brutal rotate-1 group-hover:rotate-0 transition-transform duration-300 clip-jagged">
                <div className="border-b-2 border-dashed border-black pb-3 mb-3">
                  <h3 className="text-3xl font-black uppercase text-center">
                    E-COMMERCE
                  </h3>
                </div>
                <div className="relative h-32 mb-3 border border-black overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=400&h=300&fit=crop"
                    alt="E-commerce"
                    fill
                    className="object-cover"
                  />
                </div>
                <p 
                  className="text-center text-lg mb-2"
                  style={{ fontFamily: "var(--font-marker), cursive" }}
                >
                  sell stuff online! 💰
                </p>
                <div className="text-xs text-center border-t border-dashed border-black pt-2">
                  shopify stores • product listings • checkout optimization
                </div>
              </div>
            </Link>
          </motion.div>

          {/* 7. AI CONTENT - Video player style */}
          <motion.div 
            className="break-inside-avoid relative group hover:z-30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <Link href="/contact" className="block">
              <div className="bg-gray-900 p-2 border-2 border-black shadow-brutal -rotate-1 group-hover:rotate-0 transition-transform duration-300">
                <div className="bg-black border-2 border-gray-700 p-4">
                  <div className="flex gap-1 mb-3">
                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-red-600 w-1/3 group-hover:w-full transition-all duration-1000" />
                    </div>
                  </div>
                  <div className="flex items-center justify-center h-24 border border-gray-800 bg-gray-900 mb-3 relative overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400&h=200&fit=crop"
                      alt="AI Content"
                      fill
                      className="object-cover opacity-40"
                    />
                    <span className="text-5xl relative z-10">▶️</span>
                  </div>
                  <h3 className="text-white font-bold uppercase text-lg">
                    AI CONTENT
                  </h3>
                  <p className="text-gray-400 text-xs mt-1">
                    videos, images, posts - on autopilot
                  </p>
                  <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                </div>
              </div>
            </Link>
          </motion.div>

          {/* 8. BRANDING - Badge style */}
          <motion.div 
            className="break-inside-avoid relative group hover:z-30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            <Link href="/contact" className="block">
              <div className="p-8 border-2 border-black shadow-brutal rotate-2 group-hover:rotate-0 transition-transform duration-300 text-center relative overflow-hidden" style={{ backgroundColor: "#fecfef" }}>
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                  <div className="text-[120px] font-black">★</div>
                </div>
                <div className="relative z-10">
                  <h3 className="text-4xl font-black uppercase mb-3 bg-white inline-block px-4 py-2 border-2 border-black -rotate-2">
                    BRANDING
                  </h3>
                  <p 
                    className="text-lg"
                    style={{ fontFamily: "var(--font-caveat), cursive" }}
                  >
                    who even are you?
                  </p>
                  <div className="text-xs mt-3 bg-black text-white px-3 py-1 inline-block">
                    full identity packages
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* 9. SELF-HOSTED - Server rack style */}
          <motion.div 
            className="break-inside-avoid relative group hover:z-30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <Link href="/contact" className="block">
              <div className="bg-gray-800 text-white p-6 border-2 border-black shadow-brutal -rotate-1 group-hover:rotate-0 transition-transform duration-300">
                <div className="flex justify-between mb-4">
                  <div className="flex flex-col gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                  </div>
                  <div className="flex-1 ml-4">
                    <div className="h-2 bg-gray-700 mb-2 rounded" />
                    <div className="h-2 bg-gray-700 mb-2 rounded w-2/3" />
                    <div className="h-2 bg-gray-700 rounded w-1/2" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold uppercase mb-2 font-mono">
                  SELF-HOSTED TOOLS
                </h3>
                <p className="text-sm text-gray-400 mb-2">own your stack</p>
                <div className="text-xs font-mono bg-black p-2 border border-gray-700">
                  $ ./deploy.sh --no-subscriptions
                </div>
              </div>
            </Link>
          </motion.div>

        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="mt-24 flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Link href="/contact">
            <div className="relative inline-block">
              <div className="bg-white p-8 md:p-12 border-4 border-black shadow-brutal-lg hover:shadow-brutal hover:translate-x-2 hover:translate-y-2 transition-all duration-200 rotate-1">
                <h2 className="text-4xl md:text-5xl font-black uppercase mb-4">
                  LET'S WORK<br/>TOGETHER
                </h2>
                <p 
                  className="text-xl text-gray-600"
                  style={{ fontFamily: "var(--font-caveat), cursive" }}
                >
                  seriously, let's build something weird.
                </p>
              </div>
              <div className="absolute -bottom-8 -right-8 text-6xl animate-wiggle">
                ✨
              </div>
            </div>
          </Link>
        </motion.div>

      </div>
    </main>
  );
}
