"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { LegalFooter } from "@/components/ui/legal-footer";

const TEXT = "#3d3428";
const BG = "#f0eadd";

const services = [
  {
    name: "AI Chatbot Setup",
    price: "from £500 / $700",
    description: "Custom GPT-powered chatbot trained on your FAQs. Integrated with your website, handles customer queries 24/7.",
    keywords: "ChatGPT • Custom GPT • Customer Support Bot",
    color: "bg-green-300",
    emoji: "🤖",
    rotate: "rotate-1",
  },
  {
    name: "Workflow Automation",
    price: "from £300 / $400",
    description: "Connect your apps with n8n, Zapier, or Make.com. Automate repetitive tasks and save 10+ hours per week.",
    keywords: "n8n • Zapier • Make.com • No-code Automation",
    color: "bg-yellow-300",
    emoji: "⚡",
    rotate: "-rotate-1",
  },
  {
    name: "AI Agent Development",
    price: "from £800 / $1,000",
    description: "Intelligent AI assistants that handle bookings, support tickets, data entry, or internal tasks autonomously.",
    keywords: "AI Agents • Virtual Assistants • GPT-4 • Claude",
    color: "bg-purple-200",
    emoji: "🧠",
    rotate: "rotate-2",
  },
  {
    name: "Website Design",
    price: "from £500 / $700",
    description: "Modern, mobile-first websites built with Next.js. Lightning fast, SEO-optimized, conversion-focused.",
    keywords: "Next.js • React • Responsive • SEO",
    color: "bg-pink-200",
    emoji: "🌐",
    rotate: "-rotate-2",
  },
  {
    name: "E-commerce Store",
    price: "from £800 / $1,000",
    description: "Shopify or custom store setup. Payment integration, product pages, inventory management. Ready to sell.",
    keywords: "Shopify • WooCommerce • Online Store",
    color: "bg-orange-200",
    emoji: "🛒",
    rotate: "rotate-1",
  },
  {
    name: "Branding Package",
    price: "from £400 / $550",
    description: "Logo design, brand colours, typography, and guidelines. Create a memorable identity that stands out.",
    keywords: "Logo Design • Brand Identity • Visual Guidelines",
    color: "bg-cyan-200",
    emoji: "🎨",
    rotate: "-rotate-1",
  },
  {
    name: "AI Content Pipeline",
    price: "from £600 / $800",
    description: "Automated content creation using AI. Blog posts, social media, newsletters generated on autopilot.",
    keywords: "AI Writing • Content Automation • Social Media",
    color: "bg-lime-200",
    emoji: "✍️",
    rotate: "rotate-2",
  },
  {
    name: "Photo Shoots",
    price: "from £250 / $350",
    description: "Professional product & brand photography. Half-day sessions in London & South East England.",
    keywords: "Product Photography • Brand Shots • London",
    color: "bg-amber-200",
    emoji: "📸",
    rotate: "-rotate-2",
  },
  {
    name: "Video Production",
    price: "from £500 / $700",
    description: "Brand videos, social content, product demos. Filmed locally in London, Surrey, Kent and beyond.",
    keywords: "Video Content • Social Videos • Brand Films",
    color: "bg-rose-200",
    emoji: "🎬",
    rotate: "rotate-1",
  },
  {
    name: "Self-Hosted Tools",
    price: "from £400 / $550",
    description: "Deploy your own AI, analytics, or automation servers. No monthly SaaS fees, full data ownership.",
    keywords: "Self-Hosted • Open Source • Data Privacy",
    color: "bg-slate-200",
    emoji: "🖥️",
    rotate: "-rotate-1",
  },
];

export default function PricingPage() {
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

      {/* Desktop Menu */}
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
              <Link href="/contact" className="hover:text-red-600 hover:tracking-widest transition-all inline-block">
                contact
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-red-600 hover:tracking-widest transition-all inline-block">
                faq
              </Link>
            </li>
            <li>
              <span className="bg-black text-white px-2 -ml-2 skew-x-[-10deg] inline-block">
                pricing
              </span>
            </li>
          </ul>
          <div className="absolute -bottom-6 -right-6 text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 rotate-12">
            💰
          </div>
        </div>
      </nav>

      {/* Mobile Menu Header */}
      <header className="lg:hidden fixed top-0 left-0 z-50 px-3 py-3 backdrop-blur border-b-2 border-r-2 border-black shadow-brutal-sm" style={{ backgroundColor: 'rgba(240, 234, 221, 0.95)' }}>
        <div className="bg-green-300 px-4 py-2 border-2 border-black shadow-brutal-sm rotate-1">
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

      {/* Mobile Menu Button */}
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
            <li><Link href="/about" className="hover:text-red-600 transition-colors">about</Link></li>
            <li><Link href="/services" className="hover:text-red-600 transition-colors">services</Link></li>
            <li><Link href="/portfolio" className="hover:text-red-600 transition-colors">portfolio</Link></li>
            <li><Link href="/contact" className="hover:text-red-600 transition-colors">contact</Link></li>
            <li><Link href="/faq" className="hover:text-red-600 transition-colors">faq</Link></li>
            <li><span className="bg-black text-white px-2">pricing</span></li>
          </ul>
        </div>
      )}

      {/* Brand Badge - Desktop */}
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
          
          {/* Title */}
          <motion.div
            className="mb-8 inline-block"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-green-300 p-6 md:p-8 border-2 border-black shadow-brutal -rotate-2 relative">
              <div className="absolute -top-3 right-8 w-4 h-12 bg-red-400/50 rotate-12 rounded-sm border border-black/20" />
              <h1 
                className="text-5xl md:text-7xl font-black uppercase"
                style={{ fontFamily: "var(--font-bebas), sans-serif" }}
              >
                PRICING
              </h1>
              <p 
                className="text-xl mt-2"
                style={{ fontFamily: "var(--font-caveat), cursive" }}
              >
                no hidden fees, no surprises! 💸
              </p>
            </div>
          </motion.div>

          {/* Disclaimer Note */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-white p-5 border-2 border-black shadow-brutal-sm rotate-1 inline-block max-w-2xl">
              <p 
                className="text-base leading-relaxed"
                style={{ fontFamily: "var(--font-space), sans-serif" }}
              >
                <span className="font-bold">👋 Heads up!</span> These are <span className="bg-yellow-200 px-1">ballpark starting prices</span> to give you an idea. 
                Every project is unique, so your actual quote might be different based on complexity, timeline, and your specific needs. 
                <span className="font-bold"> Let's chat first!</span>
              </p>
            </div>
          </motion.div>

          {/* Free Consultation Banner */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link href="/contact">
              <div className="bg-black text-white p-6 border-2 border-black shadow-brutal -rotate-1 hover:rotate-0 transition-transform cursor-pointer group">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h2 
                      className="text-3xl font-black uppercase"
                      style={{ fontFamily: "var(--font-bebas), sans-serif" }}
                    >
                      🎯 FREE DISCOVERY CALL
                    </h2>
                    <p 
                      className="text-lg mt-1"
                      style={{ fontFamily: "var(--font-caveat), cursive" }}
                    >
                      15-30 mins to understand your needs — no pressure, no sales pitch
                    </p>
                  </div>
                  <div className="bg-green-400 text-black px-6 py-3 font-bold uppercase text-lg border-2 border-white group-hover:bg-green-300 transition-colors">
                    BOOK NOW →
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div 
                  className={`${service.color} border-2 border-black shadow-brutal ${service.rotate} hover:rotate-0 transition-all duration-300 p-5 md:p-6 h-full`}
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 
                      className="text-xl md:text-2xl font-black uppercase"
                      style={{ fontFamily: "var(--font-bebas), sans-serif" }}
                    >
                      {service.name}
                    </h3>
                    <span className="text-3xl">{service.emoji}</span>
                  </div>
                  
                  <div 
                    className="text-3xl md:text-4xl font-black mb-3"
                    style={{ fontFamily: "var(--font-space), sans-serif" }}
                  >
                    {service.price}
                  </div>
                  
                  <p 
                    className="text-sm mb-3 leading-relaxed"
                    style={{ fontFamily: "var(--font-space), sans-serif" }}
                  >
                    {service.description}
                  </p>
                  
                  <div className="text-xs text-gray-600 border-t border-black/20 pt-2">
                    {service.keywords}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* We Do More Section */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-purple-200 p-8 border-2 border-black shadow-brutal rotate-1">
              <h2 
                className="text-4xl font-black uppercase mb-4"
                style={{ fontFamily: "var(--font-bebas), sans-serif" }}
              >
                🚀 WE DO WAY MORE!
              </h2>
              <p 
                className="text-lg mb-6"
                style={{ fontFamily: "var(--font-space), sans-serif" }}
              >
                Can't find what you need? We also offer:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                {[
                  "AI Video Generation",
                  "RAG Knowledge Bases",
                  "Multi-Agent Systems",
                  "App Development",
                  "SaaS Platforms",
                  "API Integrations",
                  "Data Dashboards",
                  "Email Automation",
                  "Social Media Bots",
                ].map((item, i) => (
                  <div 
                    key={i}
                    className="bg-white px-3 py-2 border border-black text-sm font-medium"
                  >
                    ✓ {item}
                  </div>
                ))}
              </div>
              <p 
                className="text-xl"
                style={{ fontFamily: "var(--font-caveat), cursive" }}
              >
                Got a wild idea? Just ask! We love a challenge. 💪
              </p>
            </div>
          </motion.div>

          {/* Packages Section */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 
              className="text-4xl font-black uppercase mb-8 text-center"
              style={{ fontFamily: "var(--font-bebas), sans-serif" }}
            >
              📦 POPULAR BUNDLES
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Starter */}
              <div className="bg-white p-6 border-2 border-black shadow-brutal -rotate-1 hover:rotate-0 transition-transform">
                <div className="text-center mb-4">
                  <span className="text-4xl">🌱</span>
                  <h3 
                    className="text-2xl font-black uppercase mt-2"
                    style={{ fontFamily: "var(--font-bebas), sans-serif" }}
                  >
                    STARTER
                  </h3>
                  <div 
                    className="text-3xl font-black mt-2"
                    style={{ fontFamily: "var(--font-space), sans-serif" }}
                  >
                    from £800 / $1,000
                  </div>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span>✓</span>
                    <span>Landing page OR simple chatbot</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>✓</span>
                    <span>2-3 basic automations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>✓</span>
                    <span>Mobile-responsive design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>✓</span>
                    <span>1 week turnaround</span>
                  </li>
                </ul>
                <p 
                  className="text-center mt-4 text-sm"
                  style={{ fontFamily: "var(--font-caveat), cursive" }}
                >
                  Perfect for testing the waters!
                </p>
              </div>

              {/* Growth - Featured */}
              <div className="bg-yellow-300 p-6 border-4 border-black shadow-brutal-lg rotate-1 hover:rotate-0 transition-transform relative">
                <div className="absolute -top-3 -right-3 bg-red-500 text-white px-3 py-1 text-xs font-bold uppercase rotate-12 border-2 border-black">
                  POPULAR!
                </div>
                <div className="text-center mb-4">
                  <span className="text-4xl">🚀</span>
                  <h3 
                    className="text-2xl font-black uppercase mt-2"
                    style={{ fontFamily: "var(--font-bebas), sans-serif" }}
                  >
                    GROWTH
                  </h3>
                  <div 
                    className="text-3xl font-black mt-2"
                    style={{ fontFamily: "var(--font-space), sans-serif" }}
                  >
                    from £1,500 / $2,000
                  </div>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span>✓</span>
                    <span>Full website (5-7 pages)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>✓</span>
                    <span>AI chatbot integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>✓</span>
                    <span>5+ workflow automations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>✓</span>
                    <span>Basic SEO setup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>✓</span>
                    <span>2-3 week turnaround</span>
                  </li>
                </ul>
                <p 
                  className="text-center mt-4 text-sm"
                  style={{ fontFamily: "var(--font-caveat), cursive" }}
                >
                  Most small businesses start here!
                </p>
              </div>

              {/* Custom */}
              <div className="bg-gray-900 text-white p-6 border-2 border-black shadow-brutal -rotate-1 hover:rotate-0 transition-transform">
                <div className="text-center mb-4">
                  <span className="text-4xl">⚡</span>
                  <h3 
                    className="text-2xl font-black uppercase mt-2"
                    style={{ fontFamily: "var(--font-bebas), sans-serif" }}
                  >
                    CUSTOM
                  </h3>
                  <div 
                    className="text-3xl font-black mt-2"
                    style={{ fontFamily: "var(--font-space), sans-serif" }}
                  >
                    let's talk
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span>E-commerce stores</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span>Multi-agent AI systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span>Full app development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span>Enterprise automations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span>Ongoing retainers</span>
                  </li>
                </ul>
                <p 
                  className="text-center mt-4 text-sm"
                  style={{ fontFamily: "var(--font-caveat), cursive" }}
                >
                  Big ideas? Let's make it happen!
                </p>
              </div>
            </div>
          </motion.div>

          {/* Founding Client Offer */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-orange-200 to-pink-200 p-8 border-2 border-black shadow-brutal -rotate-1">
              <h2 
                className="text-3xl md:text-4xl font-black uppercase mb-4"
                style={{ fontFamily: "var(--font-bebas), sans-serif" }}
              >
                🎁 FOUNDING CLIENT DISCOUNT
              </h2>
              <p 
                className="text-lg mb-4"
                style={{ fontFamily: "var(--font-space), sans-serif" }}
              >
                We're building our portfolio and want YOU to be part of the journey! 
                Get <span className="bg-white px-2 font-bold">15-20% off</span> in exchange for:
              </p>
              <div className="flex flex-wrap gap-4 mb-4">
                <div className="bg-white px-4 py-2 border border-black text-sm font-medium">
                  ✍️ A testimonial
                </div>
                <div className="bg-white px-4 py-2 border border-black text-sm font-medium">
                  📸 Permission for case study
                </div>
                <div className="bg-white px-4 py-2 border border-black text-sm font-medium">
                  🗣️ Word-of-mouth love
                </div>
              </div>
              <p 
                className="text-xl"
                style={{ fontFamily: "var(--font-caveat), cursive" }}
              >
                Limited spots available — first come, first served! 🏃‍♂️
              </p>
            </div>
          </motion.div>

          {/* Final CTA */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white p-8 border-2 border-black shadow-brutal rotate-1 inline-block">
              <h2 
                className="text-3xl md:text-4xl font-black uppercase mb-3"
                style={{ fontFamily: "var(--font-bebas), sans-serif" }}
              >
                READY TO GET STARTED?
              </h2>
              <p 
                className="text-lg mb-6"
                style={{ fontFamily: "var(--font-caveat), cursive" }}
              >
                let's turn your ideas into reality!
              </p>
              <Link href="/contact">
                <span className="inline-block bg-black text-white px-8 py-4 text-xl font-bold uppercase hover:bg-red-600 transition-colors border-2 border-black shadow-brutal-sm hover:shadow-none hover:translate-x-1 hover:translate-y-1">
                  GET A FREE QUOTE →
                </span>
              </Link>
            </div>
            <div className="mt-4 text-6xl">
              🎉
            </div>
          </motion.div>

          {/* Legal Footer */}
          <LegalFooter />

        </div>
      </div>
    </main>
  );
}

