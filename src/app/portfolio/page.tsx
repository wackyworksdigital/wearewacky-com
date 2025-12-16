"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { LegalFooter } from "@/components/ui/legal-footer";

const TEXT = "#3d3428";
const BG = "#f0eadd";

// Project descriptions for flip cards
const projectDescriptions: Record<string, { title: string; description: string; tech?: string[] }> = {
  "shopify-branding": {
    title: "Shopify Setup + Branding",
    description: "Full e-commerce store setup with custom branding, product photography guidelines, and conversion-optimized design. From zero to selling in 2 weeks.",
    tech: ["Shopify", "Canva", "Brand Strategy"]
  },
  "n8n-hosting": {
    title: "n8n Self-Hosting",
    description: "Private automation server on Google Cloud. No subscriptions, no limits, complete control. Set up with SSL, backups, and monitoring.",
    tech: ["n8n", "Google Cloud", "Docker", "Linux"]
  },
  "news-scraper": {
    title: "AI News Scraper",
    description: "Automated news aggregation workflow. AI filters the noise, you get curated updates. Runs 24/7 without intervention.",
    tech: ["n8n", "OpenAI", "RSS", "Telegram"]
  },
  "blog-writer": {
    title: "Automated Blog Writer",
    description: "AI writes SEO-optimized blog posts, schedules them, and posts automatically. Your blog stays fresh while you focus on business.",
    tech: ["GPT-4", "Shopify API", "n8n"]
  },
  "ai-agent": {
    title: "Custom AI Agent",
    description: "Bespoke AI assistant trained on YOUR business data. Handles customer queries, internal questions, and repetitive tasks.",
    tech: ["OpenAI", "RAG", "Vector DB", "Python"]
  },
  "etsy-listing": {
    title: "Etsy Listing Assistant",
    description: "AI-powered product listing automation. SEO-optimized titles, descriptions, and tags that actually convert browsers to buyers.",
    tech: ["Etsy API", "GPT-4", "n8n"]
  },
  "full-brand": {
    title: "Full Brand Identity",
    description: "Complete brand package: logo, colors, typography, social templates, brand guidelines. Everything you need to look professional.",
    tech: ["Figma", "Illustrator", "Brand Strategy"]
  },
  "video-content": {
    title: "AI Video Automation",
    description: "Automated video content pipeline. AI generates scripts, creates visuals, adds voiceover. Perfect for faceless YouTube channels.",
    tech: ["Runway", "ElevenLabs", "CapCut", "n8n"]
  },
  "course-platform": {
    title: "Course Platform",
    description: "Self-hosted course platform. No monthly fees to Teachable or Kajabi. You own everything, forever.",
    tech: ["Next.js", "Stripe", "Vercel"]
  },
  "rag-kb": {
    title: "Company Knowledge Base",
    description: "AI that actually knows your business. Feed it your docs, policies, and FAQs. Staff and customers get instant accurate answers.",
    tech: ["RAG", "Pinecone", "OpenAI", "Slack"]
  },
  "wordpress-migration": {
    title: "WordPress Migration",
    description: "Moving from slow, outdated WordPress to modern, blazing-fast Next.js. Better SEO, better UX, better everything.",
    tech: ["Next.js", "Vercel", "SEO"]
  },
  "shopify-makeover": {
    title: "Shopify Makeover",
    description: "Complete store redesign. New theme, better navigation, improved checkout flow. Same products, way more sales.",
    tech: ["Shopify", "Liquid", "UX Design"]
  },
  "youtube-channel": {
    title: "YouTube Channel Setup",
    description: "Full channel branding, thumbnails, intro/outro, and content strategy. Ready to upload and grow.",
    tech: ["Premiere Pro", "Photoshop", "Strategy"]
  },
  "roblox-world": {
    title: "Custom Roblox World",
    description: "Educational gaming experience for school leavers. Engaging, interactive, and actually teaches stuff.",
    tech: ["Roblox Studio", "Lua", "Game Design"]
  },
  "bakery-website": {
    title: "Bakery Website Migration",
    description: "From clunky Wix to beautiful custom site. Online ordering, menu management, and those pastries looking as good online as they taste.",
    tech: ["Next.js", "Stripe", "CMS"]
  },
  "smart-home": {
    title: "Self-Hosted Smart Home",
    description: "Home Assistant setup with AI integration. Private, no cloud dependency, voice control. Your smart home, your rules.",
    tech: ["Home Assistant", "Zigbee", "AI", "Raspberry Pi"]
  },
};

// Flip card component
function FlipCard({ 
  id, 
  children, 
  isFlipped, 
  onFlip 
}: { 
  id: string; 
  children: React.ReactNode; 
  isFlipped: boolean; 
  onFlip: () => void;
}) {
  const project = projectDescriptions[id];
  
  return (
    <div 
      className="relative cursor-pointer"
      style={{ perspective: "1000px" }}
      onClick={onFlip}
    >
      <div 
        className="relative transition-transform duration-500"
        style={{ 
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"
        }}
      >
        {/* Front */}
        <div style={{ backfaceVisibility: "hidden" }}>
          {children}
        </div>
        
        {/* Back */}
        <div 
          className="absolute inset-0 bg-black text-white p-6 border-2 border-black shadow-brutal flex flex-col justify-between"
          style={{ 
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)"
          }}
        >
          <div>
            <div className="text-xs font-mono text-gray-400 mb-2">PROJECT DETAILS</div>
            <h4 className="text-xl font-black uppercase mb-3">{project?.title || "Project"}</h4>
            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              {project?.description || "Click to learn more about this project."}
            </p>
          </div>
          
          {project?.tech && (
            <div>
              <div className="text-xs font-mono text-gray-500 mb-2">TECH STACK</div>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="bg-white/10 px-2 py-1 text-xs font-mono">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          <div className="mt-4 text-center">
            <span className="text-xs text-gray-500">tap to flip back</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PortfolioPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [flippedCards, setFlippedCards] = useState<Set<string>>(new Set());
  
  const toggleFlip = (id: string) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden" style={{ backgroundColor: BG, color: TEXT }}>
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
              <span className="bg-black text-white px-2 -ml-2 skew-x-[-10deg] inline-block">
                portfolio
              </span>
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
            <li><span className="bg-black text-white px-2">portfolio</span></li>
            <li><Link href="/contact" className="hover:text-red-600 transition-colors">contact</Link></li>
            <li><Link href="/faq" className="hover:text-red-600 transition-colors">faq</Link></li>
            <li><Link href="/pricing" className="hover:text-red-600 transition-colors">pricing</Link></li>
          </ul>
        </div>
      )}

      {/* Main Content */}
      <div className="w-full lg:pl-56 pr-4 lg:pr-12 pt-24 lg:pt-16 pb-24 min-h-screen">
        
        {/* Hero Section */}
        <div className="mb-20 relative max-w-5xl mx-auto">
          {/* Background text */}
          <div className="absolute -top-10 -left-10 text-[120px] opacity-5 font-marker -rotate-12 select-none pointer-events-none" style={{ color: "#d97706", fontFamily: "var(--font-marker), cursive" }}>
            BOOM!
          </div>
          
          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-8 relative z-10 leading-[0.85]">
            <motion.span 
              className="inline-block hover:skew-x-12 transition-transform cursor-default"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              WE
            </motion.span>
            {" "}
            <motion.span 
              className="inline-block text-outline hover:text-blue-600 transition-colors cursor-default"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              MAKE
            </motion.span>
            <br/>
            <div className="relative inline-block">
              <motion.span 
                className="relative z-10 rotate-2 inline-block"
                style={{ color: "#dc2626" }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                STUFF
              </motion.span>
              <span className="absolute top-1 left-1 text-black -z-10 rotate-2 inline-block">
                STUFF
              </span>
              {/* Spinning badge */}
              <svg className="absolute -top-12 -right-12 w-24 h-24 text-black animate-spin-slow" viewBox="0 0 100 100">
                <path d="M 25, 50 a 25,25 0 1,1 50,0 a 25,25 0 1,1 -50,0" fill="transparent" id="curve"/>
                <text className="text-[10px] font-mono uppercase tracking-widest">
                  <textPath xlinkHref="#curve">
                    • Weird • Wacky • Wonderful
                  </textPath>
                </text>
              </svg>
            </div>
            {" "}
            <span 
              className="text-4xl md:text-5xl -rotate-6 inline-block align-top mt-4 ml-4"
              style={{ fontFamily: "var(--font-marker), cursive", color: "#16a34a" }}
            >
              (differently)
            </span>
          </h1>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-4 md:gap-6 relative z-20 pl-2">
            <motion.button 
              className="px-5 py-2 bg-white border-2 border-black shadow-brutal hover:shadow-brutal-hover hover:translate-x-1 hover:translate-y-1 transition-all -rotate-2 font-bold text-sm uppercase"
              whileHover={{ rotate: 0 }}
            >
              All Projects <span className="ml-1">💥</span>
            </motion.button>
            <motion.button 
              className="px-5 py-2 border-2 border-black shadow-brutal hover:shadow-brutal-hover hover:translate-x-1 hover:translate-y-1 transition-all rotate-1 font-bold text-sm uppercase clip-paper"
              style={{ backgroundColor: "#fcd34d" }}
              whileHover={{ rotate: 0 }}
            >
              AI Stuff
            </motion.button>
            <motion.button 
              className="px-5 py-2 border-2 border-black shadow-brutal hover:shadow-brutal-hover hover:translate-x-1 hover:translate-y-1 transition-all -rotate-3 font-bold text-sm uppercase"
              style={{ backgroundColor: "#f9a8d4" }}
              whileHover={{ rotate: 0 }}
            >
              Branding
            </motion.button>
            <motion.button 
              className="px-5 py-2 bg-black text-white border-2 border-white shadow-[4px_4px_0_0_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all rotate-2 font-bold text-sm uppercase font-mono"
              whileHover={{ rotate: 0 }}
            >
              &lt;Dev/&gt;
            </motion.button>
          </div>
        </div>

        {/* Masonry Grid - ALL 16 PROJECTS */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-12 px-2 max-w-[1600px] mx-auto">
          
          {/* 1. Shopify Setup + Branding - DONE */}
          <motion.div 
            className="break-inside-avoid relative group hover:z-30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Tape effect */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 tape-effect -rotate-2 z-20 pointer-events-none" />
            
            <FlipCard id="shopify-branding" isFlipped={flippedCards.has("shopify-branding")} onFlip={() => toggleFlip("shopify-branding")}>
              <div className="bg-white p-3 pb-8 border-2 border-black shadow-brutal rotate-1 group-hover:rotate-0 transition-transform duration-300">
                <div className="relative overflow-hidden border border-black mb-3 h-48">
                  <Image
                    src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=500&h=400&fit=crop"
                    alt="Shopify Store"
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-green-500 mix-blend-multiply opacity-0 group-hover:opacity-20 transition-opacity" />
                </div>
                <div className="text-center font-display">
                  <h3 className="text-2xl font-black uppercase leading-none">
                    Shopify Setup<br/>+ Branding
                  </h3>
                  <p 
                    className="text-lg -rotate-2 mt-2 inline-block"
                    style={{ fontFamily: "var(--font-marker), cursive", color: "#dc2626" }}
                  >
                    Cha-ching! 💰
                  </p>
                  <p className="text-xs text-gray-400 mt-2">tap for details</p>
                </div>
              </div>
            </FlipCard>
          </motion.div>

          {/* 2. N8N Self-Hosting - DONE */}
          <motion.div 
            className="break-inside-avoid relative group hover:z-30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <FlipCard id="n8n-hosting" isFlipped={flippedCards.has("n8n-hosting")} onFlip={() => toggleFlip("n8n-hosting")}>
              <div className="p-6 border-2 border-black shadow-brutal -rotate-2 group-hover:rotate-0 transition-transform duration-300 relative overflow-hidden" style={{ backgroundColor: "#fcd34d" }}>
                <div className="absolute top-0 right-0 p-1 bg-black text-white font-mono text-xs border-b-2 border-l-2 border-black">
                  SYS_ADMIN_MODE
                </div>
                <div className="h-32 mb-4 border-2 border-black bg-black relative overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop"
                    alt="n8n automation"
                    fill
                    className="object-cover opacity-60"
                  />
                  <div className="absolute bottom-2 left-2 font-mono text-green-400 text-xs z-10">
                    root@wacky:~# deploy n8n
                  </div>
                </div>
                <h3 className="text-xl font-bold font-mono lowercase">
                  n8n self-hosting on google cloud
                </h3>
                <div className="mt-4 flex justify-between items-center">
                  <div className="flex gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500 border border-black" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500 border border-black" />
                    <span className="w-3 h-3 rounded-full bg-green-500 border border-black animate-pulse" />
                  </div>
                  <span className="text-xs text-gray-600">tap for details</span>
                </div>
              </div>
            </FlipCard>
          </motion.div>

          {/* 3. AI News Scraper - DONE */}
          <motion.div 
            className="break-inside-avoid relative group hover:z-30 pt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <FlipCard id="news-scraper" isFlipped={flippedCards.has("news-scraper")} onFlip={() => toggleFlip("news-scraper")}>
              <div className="bg-paper-white p-4 border-2 border-black shadow-brutal rotate-3 group-hover:rotate-0 transition-transform duration-300 clip-jagged relative">
                <div className="absolute -left-2 top-10 w-4 h-16 bg-black/10 -rotate-3" />
                <div className="border-b-2 border-black border-dashed pb-2 mb-2 flex justify-between items-end">
                  <span 
                    className="text-xs"
                    style={{ fontFamily: "var(--font-marker), cursive" }}
                  >
                    The Daily Bot
                  </span>
                  <span className="font-bold text-xs bg-black text-white px-1">VOL. 1</span>
                </div>
                <h3 className="text-2xl font-black leading-none mb-2">
                  AI NEWS SCRAPER N8N WORK
                </h3>
                <div className="flex gap-2 mb-2">
                  <div className="w-1/3 bg-gray-200 border border-black h-20 relative overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=200&h=200&fit=crop"
                      alt="News scraper"
                      fill
                      className="object-cover grayscale contrast-150"
                    />
                  </div>
                  <p className="w-2/3 text-xs font-serif leading-tight">
                    Breaking news! Our bots are reading the internet so you don't have to.
                    <span className="block text-gray-400 mt-1">tap for details</span>
                  </p>
                </div>
              </div>
            </FlipCard>
          </motion.div>

          {/* 4. Shopify Blog Writer - DONE */}
          <motion.div 
            className="break-inside-avoid relative group hover:z-30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <FlipCard id="blog-writer" isFlipped={flippedCards.has("blog-writer")} onFlip={() => toggleFlip("blog-writer")}>
              <div className="bg-white bg-lined-paper p-6 border-2 border-black shadow-brutal -rotate-1 group-hover:scale-105 transition-transform duration-300 relative">
                <div className="absolute -top-3 right-8 w-4 h-12 bg-red-400/50 rotate-12 rounded-sm border border-black/20" />
                <h3 
                  className="text-2xl text-blue-700 mb-4"
                  style={{ fontFamily: "var(--font-marker), cursive" }}
                >
                  Automated Shopify Blog Writer
                </h3>
                <p 
                  className="text-gray-600 italic leading-relaxed transform -rotate-1"
                  style={{ fontFamily: "var(--font-caveat), cursive" }}
                >
                  "It writes better than me..." <br/>
                  - An unhappy copywriter
                </p>
                <div className="mt-4 flex justify-between items-end">
                  <span className="text-xs text-gray-400">tap for details</span>
                  <span className="text-3xl">✍️</span>
                </div>
              </div>
            </FlipCard>
          </motion.div>

          {/* 5. Custom AI Agent - DONE */}
          <motion.div 
            className="break-inside-avoid relative group hover:z-30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <FlipCard id="ai-agent" isFlipped={flippedCards.has("ai-agent")} onFlip={() => toggleFlip("ai-agent")}>
              <div className="bg-black text-white p-1 border-2 border-black shadow-[8px_8px_0_0_#16a34a] hover:shadow-[4px_4px_0_0_#16a34a] hover:translate-x-1 hover:translate-y-1 transition-all duration-200">
                <div className="border border-green-500 p-4 h-full relative overflow-hidden">
                  <div className="flex justify-between items-center mb-4 border-b border-green-500 pb-2">
                    <h3 className="text-lg font-mono uppercase text-green-500">
                      Custom AI Agent
                    </h3>
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
                  </div>
                  <div className="h-40 mb-4 relative overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=400&fit=crop"
                      alt="AI Agent"
                      fill
                      className="object-cover mix-blend-luminosity opacity-80 group-hover:hue-rotate-90 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                  </div>
                  <p className="text-xs font-mono text-gray-400">
                    &gt; tap for details_
                  </p>
                </div>
              </div>
            </FlipCard>
          </motion.div>

          {/* 6. Etsy Listing Auto - DONE */}
          <motion.div 
            className="break-inside-avoid relative group hover:z-30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <FlipCard id="etsy-listing" isFlipped={flippedCards.has("etsy-listing")} onFlip={() => toggleFlip("etsy-listing")}>
              <div className="p-4 border-2 border-black shadow-brutal rotate-2 group-hover:-rotate-1 transition-transform duration-300 rounded-sm relative" style={{ backgroundColor: "#f9a8d4" }}>
                <div className="absolute -top-4 -right-2 text-4xl z-20 drop-shadow-md pointer-events-none">
                  🧵
                </div>
                <div className="absolute -bottom-2 -left-2 text-3xl z-20 drop-shadow-md rotate-12 pointer-events-none">
                  🏷️
                </div>
                <div className="bg-white border-2 border-black p-2 mb-2 rotate-1 h-32 relative overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=500&h=300&fit=crop"
                    alt="Etsy products"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-black text-center uppercase tracking-tighter bg-white inline-block px-2 border border-black rotate-1">
                  Etsy Listing Auto
                </h3>
                <p 
                  className="text-center text-sm mt-2"
                  style={{ fontFamily: "var(--font-marker), cursive" }}
                >
                  tap for details!
                </p>
              </div>
            </FlipCard>
          </motion.div>

          {/* 7. Full Brand Identity - DONE */}
          <motion.div 
            className="break-inside-avoid relative group hover:z-30"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <FlipCard id="full-brand" isFlipped={flippedCards.has("full-brand")} onFlip={() => toggleFlip("full-brand")}>
              <div className="aspect-square flex flex-col items-center justify-center p-6 border-2 border-black shadow-brutal hover:rounded-[50%] transition-all duration-500 overflow-hidden text-center cursor-pointer relative" style={{ backgroundColor: "#2563eb" }}>
                <h3 className="text-4xl md:text-5xl font-black text-white leading-none group-hover:scale-110 transition-transform">
                  FULL<br/>BRAND<br/>IDENTITY
                </h3>
                <p className="text-white/60 text-xs mt-4">tap for details</p>
                <div className="absolute inset-0 border-[10px] border-white/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-700 pointer-events-none" />
              </div>
            </FlipCard>
          </motion.div>

          {/* 8. AI Video Content - DONE */}
          <motion.div 
            className="break-inside-avoid relative group hover:z-30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            <FlipCard id="video-content" isFlipped={flippedCards.has("video-content")} onFlip={() => toggleFlip("video-content")}>
              <div className="bg-gray-900 p-2 border-2 border-black shadow-brutal -rotate-1 group-hover:rotate-0 transition-transform duration-300">
                <div className="bg-black border-2 border-gray-700 p-4 relative">
                  <div className="flex gap-1 mb-4">
                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-red-600 w-1/2 group-hover:w-full transition-all duration-1000 ease-linear" />
                    </div>
                  </div>
                  <div className="flex items-center justify-center h-24 border border-gray-800 bg-gray-900 mb-4 group-hover:bg-gray-800 transition-colors text-6xl">
                    🎥
                  </div>
                  <h3 className="text-white font-bold uppercase text-lg leading-tight">
                    AI Video Content<br/>Automation
                  </h3>
                  <p className="text-gray-500 text-xs mt-2">tap for details</p>
                  <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-pulse pointer-events-none" />
                </div>
                <div className="flex justify-between px-2 pt-2">
                  <div className="w-2 h-2 bg-black rounded-full border border-gray-500" />
                  <div className="w-2 h-2 bg-black rounded-full border border-gray-500" />
                  <div className="w-2 h-2 bg-black rounded-full border border-gray-500" />
                  <div className="w-2 h-2 bg-black rounded-full border border-gray-500" />
                </div>
              </div>
            </FlipCard>
          </motion.div>

          {/* SPECIAL: Waitrose & John Lewis Partners */}
          <motion.div 
            className="break-inside-avoid relative group hover:z-30"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.75 }}
          >
            <Link href="https://courses.wearewacky.com" target="_blank" rel="noopener noreferrer" className="block">
              <div className="relative">
                {/* VIP Badge */}
                <div className="absolute -top-4 -right-2 z-30 bg-green-600 text-white px-3 py-1 text-xs font-black uppercase rotate-12 border-2 border-black shadow-brutal-sm">
                  VIP ✨
                </div>
                <div className="bg-gradient-to-br from-green-100 to-emerald-200 p-6 border-3 border-black shadow-brutal -rotate-1 group-hover:rotate-1 transition-transform duration-300 relative overflow-hidden">
                  {/* Subtle pattern */}
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #000 10px, #000 11px)' }} />
                  
                  <div className="relative z-10">
                    <h3 className="text-xl font-black uppercase leading-tight mb-2">
                      Waitrose &<br/>John Lewis<br/>Partners
                    </h3>
                    <div className="flex items-center gap-2 mt-4">
                      <span 
                        className="text-lg bg-black text-white px-2 py-1 inline-block rotate-1"
                        style={{ fontFamily: "var(--font-caveat), cursive" }}
                      >
                        this way, please!
                      </span>
                      <span className="text-2xl animate-bounce">👉</span>
                    </div>
                    <p 
                      className="text-xs mt-3 text-gray-600"
                      style={{ fontFamily: "var(--font-caveat), cursive" }}
                    >
                      Something special awaits...
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* 9. Course Platform - DONE */}
          <motion.div 
            className="break-inside-avoid relative group hover:z-30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <FlipCard id="course-platform" isFlipped={flippedCards.has("course-platform")} onFlip={() => toggleFlip("course-platform")}>
              <div className="p-[2px] border-2 border-black shadow-brutal rotate-1 group-hover:-rotate-1 transition-transform duration-300 rounded-r-xl" style={{ backgroundColor: "#8b5e3c" }}>
                <div className="bg-paper-white h-full border-l-8 border-l-black/20 p-4 rounded-r-lg relative">
                  <div className="absolute top-0 left-0 w-4 h-full border-r border-dashed border-gray-300" />
                  <div className="pl-4">
                    <h3 className="font-serif text-2xl font-bold italic mb-2">
                      Course Platform
                    </h3>
                    <ul 
                      className="list-disc pl-4 text-sm text-gray-700 space-y-1"
                      style={{ fontFamily: "var(--font-caveat), cursive" }}
                    >
                      <li>Self-hosted</li>
                      <li>No monthly fees</li>
                      <li><span className="bg-yellow-200 px-1">Total Control</span></li>
                    </ul>
                    <div className="mt-4 border-t-2 border-black pt-2 flex justify-between items-center">
                      <span className="text-xs text-gray-400">tap for details</span>
                      <span className="text-2xl">🎓</span>
                    </div>
                  </div>
                </div>
              </div>
            </FlipCard>
          </motion.div>

          {/* 10. Company RAG KB - DONE */}
          <motion.div 
            className="break-inside-avoid relative group hover:z-30 pt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
          >
            <FlipCard id="rag-kb" isFlipped={flippedCards.has("rag-kb")} onFlip={() => toggleFlip("rag-kb")}>
              <div className="relative">
                <div className="absolute -top-6 left-0 w-1/3 h-8 bg-amber-100 border-2 border-b-0 border-black rounded-t-lg z-0 pointer-events-none" />
                <div className="bg-amber-100 p-6 border-2 border-black shadow-brutal relative z-10 rounded-tr-lg rounded-br-lg rounded-bl-lg">
                  <h3 className="text-lg font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
                    <span className="text-2xl">📁</span>
                    Company RAG KB
                  </h3>
                  <div className="bg-white border border-amber-300 p-3 shadow-inner font-mono text-xs text-gray-600">
                    "Hey Bot, what is our return policy?"<br/><br/>
                    &gt; tap for details_
                  </div>
                </div>
              </div>
            </FlipCard>
          </motion.div>

          {/* 11. WordPress Migration - CURRENT */}
          <motion.div 
            className="break-inside-avoid relative group hover:z-30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
          >
            <FlipCard id="wordpress-migration" isFlipped={flippedCards.has("wordpress-migration")} onFlip={() => toggleFlip("wordpress-migration")}>
              <div className="bg-paper-white p-6 border-2 border-black shadow-brutal-lg rotate-2 group-hover:rotate-0 transition-transform duration-300 relative">
                <div className="absolute -top-4 -right-4 bg-yellow-300 px-3 py-1 border-2 border-black rotate-12 font-black text-sm pointer-events-none">
                  IN PROGRESS!
                </div>
                <div className="flex items-center justify-center h-32 text-6xl mb-4">
                  🔧
                </div>
                <h3 className="text-2xl font-black uppercase text-center leading-tight mb-2">
                  WORDPRESS<br/>MIGRATION
                </h3>
                <p className="text-center text-xs text-gray-400">tap for details</p>
              </div>
            </FlipCard>
          </motion.div>

          {/* 12. Shopify Makeover - SOON */}
          <motion.div 
            className="break-inside-avoid relative group hover:z-30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.1 }}
          >
            <FlipCard id="shopify-makeover" isFlipped={flippedCards.has("shopify-makeover")} onFlip={() => toggleFlip("shopify-makeover")}>
              <div className="bg-white p-6 border-2 border-black shadow-brutal -rotate-1 group-hover:rotate-0 transition-transform duration-300">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-5xl">🏠</span>
                  <span className="bg-green-300 px-2 py-1 text-xs font-bold border border-black rotate-3">
                    SOON
                  </span>
                </div>
                <h3 className="text-xl font-black uppercase">
                  Shopify Makeover
                </h3>
                <p className="text-xs text-gray-400 mt-2">tap for details</p>
              </div>
            </FlipCard>
          </motion.div>

          {/* 13. YouTube Channel Setup */}
          <motion.div 
            className="break-inside-avoid relative group hover:z-30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2 }}
          >
            <FlipCard id="youtube-channel" isFlipped={flippedCards.has("youtube-channel")} onFlip={() => toggleFlip("youtube-channel")}>
              <div className="bg-red-600 p-6 border-2 border-black shadow-brutal rotate-1 group-hover:rotate-0 transition-transform duration-300 text-white text-center">
                <div className="text-6xl mb-3">▶️</div>
                <h3 className="text-2xl font-black uppercase leading-tight">
                  Channel<br/>Setup +<br/>Branding
                </h3>
                <p className="text-white/60 text-xs mt-2">tap for details</p>
              </div>
            </FlipCard>
          </motion.div>

          {/* 14. Roblox World */}
          <motion.div 
            className="break-inside-avoid relative group hover:z-30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.3 }}
          >
            <FlipCard id="roblox-world" isFlipped={flippedCards.has("roblox-world")} onFlip={() => toggleFlip("roblox-world")}>
              <div className="bg-green-400 p-6 border-2 border-black shadow-brutal -rotate-2 group-hover:rotate-0 transition-transform duration-300">
                <div className="text-6xl mb-3">🎮</div>
                <h3 className="text-xl font-black uppercase">
                  Custom<br/>Roblox<br/>World
                </h3>
                <div className="mt-2 bg-black text-green-400 px-2 py-1 text-xs font-mono">
                  tap_for_details
                </div>
              </div>
            </FlipCard>
          </motion.div>

          {/* 15. Bakery Website Migration */}
          <motion.div 
            className="break-inside-avoid relative group hover:z-30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.4 }}
          >
            <FlipCard id="bakery-website" isFlipped={flippedCards.has("bakery-website")} onFlip={() => toggleFlip("bakery-website")}>
              <div className="bg-white p-6 border-2 border-black shadow-brutal rotate-2 group-hover:rotate-0 transition-transform duration-300">
                <div className="text-center">
                  <div className="text-5xl mb-3">🥐</div>
                  <h3 className="text-lg font-black uppercase">
                    Wix Website<br/>Migration
                  </h3>
                  <p className="text-xs text-gray-400 mt-2">tap for details</p>
                </div>
              </div>
            </FlipCard>
          </motion.div>

          {/* 16. Smart Home Setup */}
          <motion.div 
            className="break-inside-avoid relative group hover:z-30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.5 }}
          >
            <FlipCard id="smart-home" isFlipped={flippedCards.has("smart-home")} onFlip={() => toggleFlip("smart-home")}>
              <div className="bg-gray-800 text-white p-6 border-2 border-black shadow-brutal -rotate-1 group-hover:rotate-0 transition-transform duration-300">
                <div className="flex justify-between mb-4">
                  <div className="flex flex-col gap-2">
                    <div className="text-xs font-mono">Lights ✓</div>
                    <div className="text-xs font-mono">Temp ✓</div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="text-xs font-mono">Locks ✓</div>
                    <div className="text-xs font-mono">Cams ✓</div>
                  </div>
                </div>
                <div className="text-4xl mb-2">🏡</div>
                <h3 className="text-lg font-bold uppercase">
                  Self-Hosted AI<br/>Smart Home
                </h3>
                <p className="text-gray-400 text-xs mt-2">tap for details</p>
              </div>
            </FlipCard>
          </motion.div>

          {/* BETA TESTERS SIGNUP */}
          <motion.div 
            className="break-inside-avoid relative group hover:z-30"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
          >
            <div className="relative">
              {/* Badge */}
              <div className="absolute -top-4 -left-2 z-30 bg-purple-600 text-white px-3 py-1 text-xs font-black uppercase -rotate-12 border-2 border-black shadow-brutal-sm">
                FREE 🎁
              </div>
              <div className="bg-gradient-to-br from-purple-100 to-pink-200 p-6 border-3 border-black shadow-brutal rotate-1 group-hover:-rotate-1 transition-transform duration-300 relative overflow-hidden">
                {/* Sparkle pattern */}
                <div className="absolute top-2 right-2 text-2xl animate-pulse">✨</div>
                <div className="absolute bottom-2 left-2 text-xl animate-pulse" style={{ animationDelay: '0.5s' }}>⭐</div>
                
                <div className="relative z-10">
                  <h3 
                    className="text-xl font-black uppercase leading-tight mb-3"
                    style={{ fontFamily: "var(--font-bebas), sans-serif" }}
                  >
                    BE A BETA<br/>TESTER! 🧪
                  </h3>
                  <p 
                    className="text-sm mb-4"
                    style={{ fontFamily: "var(--font-caveat), cursive" }}
                  >
                    We're always building new tools & automations. Want early access?
                  </p>
                  <div className="space-y-2 text-xs mb-4">
                    <div className="flex items-center gap-2">
                      <span>✓</span>
                      <span>First to try new AI tools</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>✓</span>
                      <span>Free access during beta</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>✓</span>
                      <span>Shape what we build next</span>
                    </div>
                  </div>
                  <Link 
                    href="/contact" 
                    className="inline-block bg-black text-white px-4 py-2 text-sm font-black uppercase border-2 border-black shadow-brutal-sm hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
                  >
                    JOIN THE LIST →
                  </Link>
                </div>
              </div>
            </div>
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
              <div className="bg-white p-8 md:p-12 border-4 border-black shadow-brutal-lg hover:shadow-brutal hover:translate-x-2 hover:translate-y-2 transition-all duration-200">
                <h2 className="text-4xl md:text-5xl font-black uppercase mb-4">
                  GOT A PROJECT?
                </h2>
                <p 
                  className="text-xl text-gray-600"
                  style={{ fontFamily: "var(--font-caveat), cursive" }}
                >
                  Let's talk immediately.
                </p>
              </div>
              <div className="absolute -bottom-8 -right-8 text-6xl">
                ☎️
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Legal Footer */}
        <LegalFooter />

      </div>
    </main>
  );
}
