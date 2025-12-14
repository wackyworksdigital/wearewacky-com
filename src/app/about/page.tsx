"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const TEXT = "#3d3428";
const BG = "#f0eadd";

export default function AboutPage() {
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
              <span className="bg-black text-white px-2 -ml-2 skew-x-[-10deg] inline-block">
                about
              </span>
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
            <li><Link href="/" className="hover:text-red-600 transition-colors">home</Link></li>
            <li><span className="bg-black text-white px-2">about</span></li>
            <li><Link href="/services" className="hover:text-red-600 transition-colors">services</Link></li>
            <li><Link href="/portfolio" className="hover:text-red-600 transition-colors">portfolio</Link></li>
            <li><Link href="/contact" className="hover:text-red-600 transition-colors">contact</Link></li>
          </ul>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 min-h-screen px-6 pt-24 lg:pt-16 lg:pl-64 pb-16">
        <div className="w-full max-w-5xl mx-auto">
          
          {/* Sticky Note Title */}
          <motion.div
            className="mb-12 inline-block"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-yellow-300 p-6 md:p-8 border-2 border-black shadow-brutal rotate-2 relative">
              <div className="absolute -top-3 right-8 w-4 h-12 bg-red-400/50 rotate-12 rounded-sm border border-black/20" />
              <h1 
                className="text-5xl md:text-7xl font-black uppercase"
                style={{ fontFamily: "var(--font-bebas), sans-serif" }}
              >
                WHO WE ARE
              </h1>
            </div>
          </motion.div>

          {/* Stacked conversation cards */}
          <div className="space-y-12 mb-20">
            
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white border-4 border-black p-6 md:p-8 shadow-brutal -rotate-1 max-w-2xl"
            >
              <h2 
                className="text-3xl md:text-4xl font-black uppercase mb-4"
                style={{ fontFamily: "var(--font-bebas), sans-serif" }}
              >
                I'M NOT LYING
              </h2>
              <p 
                className="text-2xl"
                style={{ fontFamily: "var(--font-caveat), cursive" }}
              >
                you're lying!
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-pink-200 border-4 border-black p-6 md:p-8 shadow-brutal rotate-2 ml-auto max-w-2xl"
            >
              <h2 
                className="text-3xl md:text-4xl font-black uppercase mb-4"
                style={{ fontFamily: "var(--font-bebas), sans-serif" }}
              >
                NO, YOU SHUT UP!
              </h2>
              <p className="text-base md:text-lg leading-relaxed">
                (okay but seriously, we're a small UK-based digital agency that builds AI agents, automation workflows, and modern websites. we keep things fun because life's too short for boring agencies.)
              </p>
            </motion.div>

            {/* Card 3 - Big info card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-cyan-200 border-4 border-black p-6 md:p-8 shadow-brutal -rotate-1"
            >
              <h2 
                className="text-3xl font-black uppercase mb-6"
                style={{ fontFamily: "var(--font-bebas), sans-serif" }}
              >
                WHAT WE'RE ACTUALLY ABOUT
              </h2>
              <div className="space-y-4 text-base md:text-lg">
                <p>✓ We build stuff that works while you sleep</p>
                <p>✓ AI agents, n8n workflows, Next.js websites</p>
                <p>✓ No corporate BS, just honest work</p>
                <p>✓ Based in the UK, clients worldwide</p>
                <p>✓ We reply to emails (shocking, we know)</p>
              </div>
            </motion.div>

          </div>

          {/* Info cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            
            {/* Location */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-green-300 p-6 border-2 border-black shadow-brutal rotate-1 hover:rotate-0 transition-transform"
            >
              <div className="text-5xl mb-3">📍</div>
              <h3 
                className="text-2xl font-black uppercase mb-2"
                style={{ fontFamily: "var(--font-bebas), sans-serif" }}
              >
                LOCATION
              </h3>
              <p 
                className="text-lg"
                style={{ fontFamily: "var(--font-caveat), cursive" }}
              >
                UK-based<br/>
                (we work in our pajamas)
              </p>
            </motion.div>

            {/* Hours */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 border-2 border-black shadow-brutal -rotate-1 hover:rotate-0 transition-transform" style={{ backgroundColor: "#f9a8d4" }}
            >
              <div className="text-5xl mb-3">⏰</div>
              <h3 
                className="text-2xl font-black uppercase mb-2"
                style={{ fontFamily: "var(--font-bebas), sans-serif" }}
              >
                HOURS
              </h3>
              <p 
                className="text-lg"
                style={{ fontFamily: "var(--font-kalam), cursive" }}
              >
                Mon-Fri<br/>
                (the bots work 24/7 tho)
              </p>
            </motion.div>

            {/* Vibe */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-purple-300 p-6 border-2 border-black shadow-brutal rotate-2 hover:rotate-0 transition-transform"
            >
              <div className="text-5xl mb-3">✨</div>
              <h3 
                className="text-2xl font-black uppercase mb-2"
                style={{ fontFamily: "var(--font-bebas), sans-serif" }}
              >
                THE VIBE
              </h3>
              <p 
                className="text-lg"
                style={{ fontFamily: "var(--font-marker), cursive" }}
              >
                Professional chaos<br/>
                (the good kind)
              </p>
            </motion.div>

          </div>

          {/* Team photo section */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white p-4 md:p-6 border-2 border-black shadow-brutal -rotate-1">
              <div className="relative h-64 md:h-96 border-2 border-black overflow-hidden mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop"
                  alt="Team working together"
                  fill
                  className="object-cover grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p 
                    className="text-white text-2xl md:text-3xl"
                    style={{ fontFamily: "var(--font-marker), cursive" }}
                  >
                    This could be us working on your project →
                  </p>
                </div>
              </div>
              <p 
                className="text-center text-sm"
                style={{ fontFamily: "var(--font-caveat), cursive" }}
              >
                (stock photo, but you get the idea)
              </p>
            </div>
          </motion.div>

          {/* Technologies we use */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-black text-white p-8 border-2 border-black shadow-brutal rotate-1 mb-20"
          >
            <h2 
              className="text-3xl md:text-4xl font-black uppercase mb-6 text-center"
              style={{ fontFamily: "var(--font-bebas), sans-serif" }}
            >
              TECH WE USE
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="border border-gray-700 p-4">
                <div className="text-3xl mb-2">⚛️</div>
                <div className="font-mono text-sm">Next.js<br/>React</div>
              </div>
              <div className="border border-gray-700 p-4">
                <div className="text-3xl mb-2">🤖</div>
                <div className="font-mono text-sm">OpenAI<br/>Claude</div>
              </div>
              <div className="border border-gray-700 p-4">
                <div className="text-3xl mb-2">⚙️</div>
                <div className="font-mono text-sm">n8n<br/>Zapier</div>
              </div>
              <div className="border border-gray-700 p-4">
                <div className="text-3xl mb-2">🎨</div>
                <div className="font-mono text-sm">Figma<br/>Tailwind</div>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link href="/contact">
              <div className="relative inline-block">
                <div className="bg-white p-8 md:p-12 border-4 border-black shadow-brutal-lg hover:shadow-brutal hover:translate-x-2 hover:translate-y-2 transition-all duration-200">
                  <h2 className="text-4xl md:text-5xl font-black uppercase mb-4">
                    WANNA WORK<br/>WITH US?
                  </h2>
                  <p 
                    className="text-xl text-gray-600"
                    style={{ fontFamily: "var(--font-caveat), cursive" }}
                  >
                    Let's make something weird together
                  </p>
                </div>
                <div className="absolute -bottom-8 -right-8 text-6xl animate-bounce">
                  💬
                </div>
              </div>
            </Link>
          </motion.div>

        </div>
      </div>
    </main>
  );
}
