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

      {/* Mobile Menu - Top LEFT with branding */}
      <header className="lg:hidden fixed top-0 left-0 z-50 px-3 py-3 backdrop-blur border-b-2 border-r-2 border-black shadow-brutal-sm" style={{ backgroundColor: 'rgba(240, 234, 221, 0.95)' }}>
        <div className="bg-yellow-300 px-4 py-2 border-2 border-black shadow-brutal-sm rotate-1">
          <div className="text-center">
            <div className="text-xs font-black uppercase leading-none" style={{ fontFamily: "var(--font-bebas), sans-serif" }}>WACKY WORKS DIGITAL</div>
            <div className="text-[8px] mt-0.5" style={{ fontFamily: "var(--font-caveat), cursive" }}>@wackyworksdigital</div>
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
            className="mb-12 text-center"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-7xl md:text-9xl lg:text-[140px] font-black tracking-tighter leading-none">
              <span className="inline-block -rotate-2">LET'S</span>
              <br />
              <span className="inline-block rotate-1" style={{ color: "#ff4757" }}>
                TALK
              </span>
            </h1>
          </motion.div>

          {/* Main Contact Cards - Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            
            {/* Email Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, rotate: -1 }}
            >
              <Link href="mailto:hello@wearewacky.com" className="block h-full">
                <div className="bg-yellow-300 p-6 border-3 border-black shadow-brutal h-full hover:bg-yellow-400 transition-colors">
                  {/* Email SVG Icon */}
                  <svg className="w-12 h-12 mb-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  <h3 
                    className="text-2xl font-black uppercase mb-2"
                    style={{ fontFamily: "var(--font-bebas), sans-serif" }}
                  >
                    EMAIL
                  </h3>
                  <span className="font-mono text-sm md:text-base underline hover:no-underline">
                    hello@wearewacky.com
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* WhatsApp Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.03, rotate: 1 }}
            >
              <Link 
                href="https://wa.me/447460460318"
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <div className="bg-green-400 p-6 border-3 border-black shadow-brutal h-full hover:bg-green-500 transition-colors">
                  {/* WhatsApp SVG Icon */}
                  <svg className="w-12 h-12 mb-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <h3 
                    className="text-2xl font-black uppercase mb-2"
                    style={{ fontFamily: "var(--font-bebas), sans-serif" }}
                  >
                    WHATSAPP
                  </h3>
                  <span className="font-mono text-lg font-bold">
                    +44 7460 460 318
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* LinkedIn Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.03, rotate: -1 }}
            >
              <Link 
                href="https://www.linkedin.com/company/wackyworksdigital/"
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <div className="bg-blue-500 p-6 border-3 border-black shadow-brutal h-full hover:bg-blue-600 transition-colors text-white">
                  {/* LinkedIn SVG Icon */}
                  <svg className="w-12 h-12 mb-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <h3 
                    className="text-2xl font-black uppercase mb-2"
                    style={{ fontFamily: "var(--font-bebas), sans-serif" }}
                  >
                    LINKEDIN
                  </h3>
                  <span className="font-mono text-sm underline">
                    Wacky Works Digital
                  </span>
                </div>
              </Link>
            </motion.div>
          </div>

          {/* Social Media Section */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 p-8 border-3 border-black shadow-brutal">
              <div className="text-center mb-6">
                <h3 
                  className="text-3xl font-black uppercase mb-2"
                  style={{ fontFamily: "var(--font-bebas), sans-serif" }}
                >
                  FOLLOW US
                </h3>
                <div 
                  className="inline-block text-2xl font-bold bg-black text-white px-4 py-2"
                  style={{ fontFamily: "var(--font-space), sans-serif" }}
                >
                  @wackyworksdigital
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                {/* Instagram */}
                <Link
                  href="https://www.instagram.com/wackyworksdigital/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-4 border-2 border-black hover:scale-110 transition-transform"
                  title="Instagram"
                >
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </Link>

                {/* TikTok */}
                <Link
                  href="https://www.tiktok.com/@wackyworksdigital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-4 border-2 border-black hover:scale-110 transition-transform"
                  title="TikTok"
                >
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </Link>

                {/* YouTube */}
                <Link
                  href="https://www.youtube.com/@wackyworksdigital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-4 border-2 border-black hover:scale-110 transition-transform"
                  title="YouTube"
                >
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#FF0000">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </Link>

                {/* X / Twitter */}
                <Link
                  href="https://x.com/wackywdigital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-4 border-2 border-black hover:scale-110 transition-transform"
                  title="X / Twitter"
                >
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </Link>

                {/* Facebook */}
                <Link
                  href="https://www.facebook.com/wackyworksdigital/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-4 border-2 border-black hover:scale-110 transition-transform"
                  title="Facebook"
                >
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#1877F2">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </Link>

                {/* Threads */}
                <Link
                  href="https://www.threads.net/@wackyworksdigital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-4 border-2 border-black hover:scale-110 transition-transform"
                  title="Threads"
                >
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.96-.065-1.182.408-2.256 1.332-3.023.899-.746 2.13-1.109 3.658-1.083 1.104.019 2.089.201 2.958.545.027-.31.038-.622.032-.94-.027-1.478-.353-2.588-.969-3.3-.678-.782-1.724-1.18-3.108-1.18h-.032c-1.106.007-1.98.347-2.6 1.01l-1.478-1.478c.988-.988 2.293-1.49 3.882-1.497h.045c1.886 0 3.344.57 4.333 1.693.899 1.021 1.371 2.476 1.402 4.323.016.904-.06 1.763-.228 2.562 1.422.942 2.358 2.266 2.71 3.829.49 2.175-.043 4.834-2.291 7.04-1.872 1.836-4.2 2.63-7.333 2.652zm-.357-8.946c-1.21 0-2.258.303-2.94.851-.568.457-.854 1.044-.81 1.65.046.609.371 1.146.917 1.5.594.387 1.39.582 2.238.543 1.105-.06 1.965-.463 2.555-1.2.537-.67.865-1.601.978-2.78-.902-.37-1.912-.564-2.938-.564z"/>
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>

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
