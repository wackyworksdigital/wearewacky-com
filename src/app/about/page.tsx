"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { LegalFooter } from "@/components/ui/legal-footer";

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

      {/* Mobile Menu - Top LEFT with branding */}
      <header className="lg:hidden fixed top-0 left-0 z-50 px-3 py-3 backdrop-blur border-b-2 border-r-2 border-black shadow-brutal-sm" style={{ backgroundColor: 'rgba(240, 234, 221, 0.95)' }}>
        <div className="bg-yellow-300 px-4 py-2 border-2 border-black shadow-brutal-sm rotate-1">
          <div className="text-center">
            <div className="text-xs font-black uppercase leading-none" style={{ fontFamily: "var(--font-bebas), sans-serif" }}>
              WACKY WORKS DIGITAL
            </div>
            <div className="text-[8px] mt-0.5" style={{ fontFamily: "var(--font-caveat), cursive" }}>
              @wackyworksdigital
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Button - Top RIGHT */}
      <button 
        className="lg:hidden fixed top-4 right-4 z-50 text-4xl border-2 border-black rounded-full hover:bg-black hover:text-white transition-colors w-12 h-12 flex items-center justify-center bg-white shadow-brutal-sm"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="lg:hidden fixed top-20 left-0 right-0 z-40 bg-paper-white border-b-2 border-black p-6 shadow-brutal">
          <ul className="flex flex-col gap-4 text-xl font-bold lowercase">
            <li><Link href="/" className="hover:text-red-600 transition-colors">home</Link></li>
            <li><span className="bg-black text-white px-2">about</span></li>
            <li><Link href="/services" className="hover:text-red-600 transition-colors">services</Link></li>
            <li><Link href="/portfolio" className="hover:text-red-600 transition-colors">portfolio</Link></li>
            <li><Link href="/contact" className="hover:text-red-600 transition-colors">contact</Link></li>
          </ul>
        </div>
      )}

      {/* Brand Badge - Desktop only */}
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

      {/* Content */}
      <div className="relative z-10 min-h-screen px-6 pt-32 lg:pt-16 lg:pl-64 pb-16">
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

          {/* The REAL story - creative street art style */}
          <div className="space-y-12 mb-20">
            
            {/* Card 1 - Stencil style */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white border-4 border-black p-6 md:p-8 shadow-brutal -rotate-1 max-w-3xl relative"
            >
              <div className="absolute -top-4 -right-4 bg-red-600 text-white px-3 py-1 border-2 border-black rotate-12 text-xs font-black">
                REDACTED
              </div>
              <h2 
                className="text-3xl md:text-4xl font-black uppercase mb-4"
                style={{ fontFamily: "var(--font-bebas), sans-serif" }}
              >
                <span className="line-through opacity-50">TOP SECRET AGENCY</span>
              </h2>
              <p 
                className="text-xl md:text-2xl"
                style={{ fontFamily: "var(--font-caveat), cursive" }}
              >
                Actually, we're just a bunch of nerds who got tired of boring corporate jobs.
              </p>
            </motion.div>

            {/* Card 2 - Spray paint style */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-pink-200 border-4 border-black p-6 md:p-8 shadow-brutal rotate-2 ml-auto max-w-3xl relative"
            >
              <div 
                className="absolute -top-8 -left-8 text-7xl opacity-100 -rotate-12"
                style={{ fontFamily: "var(--font-marker), cursive" }}
              >
                UK
              </div>
              <h2 
                className="text-3xl md:text-4xl font-black uppercase mb-4"
                style={{ fontFamily: "var(--font-bebas), sans-serif" }}
              >
                SMALL UK AGENCY
              </h2>
              <p className="text-base md:text-lg leading-relaxed">
                We build AI agents, automation workflows, and websites. We keep it fun because life's too short for boring agencies. No suits here, just hoodies and good code.
              </p>
            </motion.div>

            {/* Card 3 - Poster style */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-cyan-200 border-4 border-black p-6 md:p-8 shadow-brutal -rotate-1"
            >
              <h2 
                className="text-3xl font-black uppercase mb-6 text-center"
                style={{ fontFamily: "var(--font-bebas), sans-serif" }}
              >
                WHAT WE'RE ABOUT
              </h2>
              <div className="space-y-4 text-base md:text-lg">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">→</span>
                  <p>Build stuff that works while you sleep</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">→</span>
                  <p>No nonsense, just honest work</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">→</span>
                  <p>We actually reply to emails (shocking!)</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">→</span>
                  <p>Based in UK, clients worldwide</p>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Info cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            
            {/* Location */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-green-300 p-6 border-2 border-black shadow-brutal rotate-1 hover:rotate-0 transition-transform text-center"
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
                (working in pajamas since 2024)
              </p>
            </motion.div>

            {/* Vibe */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 border-2 border-black shadow-brutal -rotate-1 hover:rotate-0 transition-transform text-center" style={{ backgroundColor: "#f9a8d4" }}
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

            {/* Stack */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-purple-300 p-6 border-2 border-black shadow-brutal rotate-2 hover:rotate-0 transition-transform text-center"
            >
              <div className="text-5xl mb-3">⚙️</div>
              <h3 
                className="text-2xl font-black uppercase mb-2"
                style={{ fontFamily: "var(--font-bebas), sans-serif" }}
              >
                TECH
              </h3>
              <p 
                className="text-sm"
                style={{ fontFamily: "var(--font-space), sans-serif" }}
              >
                React • Next.js • OpenAI<br/>
                Claude • Gemini • n8n<br/>
                Zapier • Make • Supabase
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
            <div className="bg-white p-4 md:p-6 border-2 border-black shadow-brutal -rotate-1 relative">
              <div className="absolute -top-3 left-8 bg-yellow-300 px-3 py-1 border-2 border-black rotate-3 text-xs font-black">
                NOT STOCK PHOTO
              </div>
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
                    This could be us building your next project →
                  </p>
                </div>
              </div>
              <p 
                className="text-center text-sm line-through opacity-50"
                style={{ fontFamily: "var(--font-caveat), cursive" }}
              >
                (okay fine, it's a stock photo, but you get the idea)
              </p>
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
                <div className="bg-black text-white p-8 md:p-12 border-4 border-black shadow-brutal-lg hover:shadow-brutal hover:translate-x-2 hover:translate-y-2 transition-all duration-200">
                  <h2 className="text-4xl md:text-5xl font-black uppercase mb-4">
                    LIKE WHAT<br/>YOU SEE?
                  </h2>
                  <p 
                    className="text-xl text-white/90"
                    style={{ fontFamily: "var(--font-caveat), cursive" }}
                  >
                    Let's make something weird together
                  </p>
                </div>
                <div className="absolute -bottom-8 -right-8 text-6xl">
                  💬
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Legal Footer */}
          <LegalFooter />

        </div>
      </div>
    </main>
  );
}
