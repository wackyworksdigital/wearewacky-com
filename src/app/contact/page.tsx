"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { LegalFooter } from "@/components/ui/legal-footer";

const TEXT = "#3d3428";
const BG = "#f0eadd";

export default function ContactPage() {
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
              <span className="bg-black text-white px-2 -ml-2 skew-x-[-10deg] inline-block">
                contact
              </span>
            </li>
            <li>
              <Link href="/faq" className="hover:text-red-600 hover:tracking-widest transition-all inline-block">
                faq
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-red-600 hover:tracking-widest transition-all inline-block">
                pricing
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
            <li><Link href="/services" className="hover:text-red-600 transition-colors">services</Link></li>
            <li><Link href="/portfolio" className="hover:text-red-600 transition-colors">portfolio</Link></li>
            <li><span className="bg-black text-white px-2">contact</span></li>
            <li><Link href="/faq" className="hover:text-red-600 transition-colors">faq</Link></li>
            <li><Link href="/pricing" className="hover:text-red-600 transition-colors">pricing</Link></li>
          </ul>
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-10 min-h-screen px-6 pt-24 lg:pt-16 lg:pl-64 pb-16">
        <div className="w-full max-w-6xl mx-auto">
          
          {/* Giant tilted title */}
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative inline-block">
              <h1 className="text-7xl md:text-9xl lg:text-[160px] font-black tracking-tighter leading-none">
                <span className="inline-block -rotate-3">LET'S</span>
                <br />
                <span className="inline-block rotate-2" style={{ color: "#ff4757" }}>
                  TALK
                </span>
              </h1>
              
              <motion.p
                className="text-2xl md:text-3xl mt-6 -rotate-1"
                style={{ fontFamily: "var(--font-caveat), cursive" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                we promise not to bite (unless you ask nicely)
              </motion.p>
            </div>
          </motion.div>

          {/* Contact cards scattered */}
          <div className="relative mb-20">
            
            {/* Email card - big yellow */}
            <motion.div
              className="relative md:absolute top-0 left-[5%] w-full md:w-80 mb-8 md:mb-0 z-20"
              initial={{ opacity: 0, rotate: -8, y: 30 }}
              whileInView={{ opacity: 1, rotate: -4, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ rotate: 0, scale: 1.05 }}
            >
              <div className="bg-yellow-300 p-6 border-2 border-black shadow-brutal relative group">
                <div className="absolute -top-3 right-8 w-4 h-12 bg-red-400/50 rotate-12 rounded-sm border border-black/20" />
                
                <div className="text-5xl mb-3">✉️</div>
                <h3 
                  className="text-3xl font-black uppercase mb-3"
                  style={{ fontFamily: "var(--font-bebas), sans-serif" }}
                >
                  EMAIL US
                </h3>
                <Link
                  href="mailto:hello@wearewacky.com"
                  className="text-lg font-mono underline hover:no-underline block"
                >
                  hello@wearewacky.com
                </Link>
                
                <motion.div 
                  className="absolute -bottom-6 -right-6 text-3xl"
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  👈
                </motion.div>
              </div>
            </motion.div>

            {/* WhatsApp card - green */}
            <motion.div
              className="relative md:absolute top-24 right-[10%] w-full md:w-80 mb-8 md:mb-0 z-20"
              initial={{ opacity: 0, rotate: 8, y: 30 }}
              whileInView={{ opacity: 1, rotate: 5, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ rotate: 0, scale: 1.05 }}
            >
              <div className="bg-green-300 p-6 border-2 border-black shadow-brutal">
                <div className="text-5xl mb-3">📱</div>
                <h3 
                  className="text-3xl font-black uppercase mb-3"
                  style={{ fontFamily: "var(--font-bebas), sans-serif" }}
                >
                  WHATSAPP
                </h3>
                <Link
                  href="https://wa.me/447460460318"
                  className="text-lg font-mono underline hover:no-underline block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +44 7460 460318
                </Link>
              </div>
            </motion.div>

            {/* Instagram - pink polaroid */}
            <motion.div
              className="relative md:absolute top-64 left-[15%] w-full md:w-72 mb-8 md:mb-0 z-20"
              initial={{ opacity: 0, rotate: -6, y: 30 }}
              whileInView={{ opacity: 1, rotate: -3, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ rotate: 0, scale: 1.05 }}
            >
              <div className="bg-white p-4 pb-12 border-2 border-black shadow-brutal" style={{ backgroundColor: "#f9a8d4" }}>
                <div className="bg-white p-4 border border-black mb-3">
                  <div className="text-5xl text-center">📸</div>
                </div>
                <h3 
                  className="text-2xl font-black text-center uppercase"
                  style={{ fontFamily: "var(--font-bebas), sans-serif" }}
                >
                  INSTAGRAM
                </h3>
                <Link
                  href="https://www.instagram.com/wearewacky/"
                  className="text-center font-mono text-sm underline hover:no-underline block mt-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @wearewacky
                </Link>
              </div>
            </motion.div>

            {/* LinkedIn - blue professional */}
            <motion.div
              className="relative md:absolute top-48 right-[5%] w-full md:w-72 mb-8 md:mb-0 z-20"
              initial={{ opacity: 0, rotate: 6, y: 30 }}
              whileInView={{ opacity: 1, rotate: 3, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ rotate: 0, scale: 1.05 }}
            >
              <div className="bg-blue-400 p-6 border-2 border-black shadow-brutal text-white">
                <div className="text-5xl mb-3">💼</div>
                <h3 
                  className="text-3xl font-black uppercase mb-3"
                  style={{ fontFamily: "var(--font-bebas), sans-serif" }}
                >
                  LINKEDIN
                </h3>
                <Link
                  href="https://www.linkedin.com/company/wacky-works-digital/"
                  className="text-sm font-mono underline hover:no-underline block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  /company/wacky-works-digital
                </Link>
              </div>
            </motion.div>

            {/* Spacer for mobile */}
            <div className="h-[600px] md:h-[500px]" />
          </div>

          {/* Info card - hours & response time */}
          <motion.div
            className="max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white border-4 border-black p-8 shadow-brutal rotate-1">
              <div className="flex items-start gap-6 mb-6">
                <div className="text-6xl">⏰</div>
                <div>
                  <h3 
                    className="text-3xl font-black uppercase mb-2"
                    style={{ fontFamily: "var(--font-bebas), sans-serif" }}
                  >
                    WHEN TO REACH US
                  </h3>
                  <p className="text-lg leading-relaxed">
                    Monday-Friday, 9am-5pm UK time
                  </p>
                  <p 
                    className="text-base mt-2"
                    style={{ fontFamily: "var(--font-caveat), cursive" }}
                  >
                    (but our bots work 24/7, so you might get lucky)
                  </p>
                </div>
              </div>
              
              <div className="border-t-2 border-dashed border-gray-300 pt-6 flex items-start gap-6">
                <div className="text-6xl">💬</div>
                <div>
                  <h3 
                    className="text-3xl font-black uppercase mb-2"
                    style={{ fontFamily: "var(--font-bebas), sans-serif" }}
                  >
                    RESPONSE TIME
                  </h3>
                  <p className="text-lg">
                    Usually within a few hours, max 24 hours
                  </p>
                  <p 
                    className="text-sm mt-2 text-gray-600"
                    style={{ fontFamily: "var(--font-caveat), cursive" }}
                  >
                    (we actually reply! wild, we know)
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Big CTA box */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block p-8 md:p-12 border-4 border-black shadow-brutal-lg -rotate-1 relative" style={{ backgroundColor: "#f9a8d4" }}>
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-24 h-8 tape-effect -rotate-3 z-10" />
              
              <h2 
                className="text-5xl md:text-6xl font-black uppercase mb-4"
                style={{ fontFamily: "var(--font-bebas), sans-serif" }}
              >
                GOT AN IDEA?
              </h2>
              <p 
                className="text-2xl md:text-3xl mb-6"
                style={{ fontFamily: "var(--font-marker), cursive" }}
              >
                Let's build it together!
              </p>
              <p className="text-base text-gray-700 max-w-md mx-auto">
                Whether it's AI agents, automation, websites, or something completely bonkers - we're here for it.
              </p>
              
              <motion.div
                className="absolute -bottom-8 -right-8 text-7xl"
                animate={{ rotate: [0, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🚀
              </motion.div>
            </div>
          </motion.div>

          {/* Legal Footer */}
          <LegalFooter />

        </div>
      </div>
    </main>
  );
}
