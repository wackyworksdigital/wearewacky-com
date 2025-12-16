"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { LegalFooter } from "@/components/ui/legal-footer";

const TEXT = "#3d3428";
const BG = "#f0eadd";

// Placeholder blog posts - will be replaced with CMS/MDX later
const blogPosts = [
  {
    slug: "n8n-vs-zapier-2025",
    title: "n8n vs Zapier in 2025: Which Should You Choose?",
    excerpt: "A detailed comparison of the two most popular automation platforms. Spoiler: it depends on your budget and technical comfort.",
    date: "Coming Soon",
    category: "Automation",
    color: "bg-pink-300",
    rotate: "-rotate-1",
  },
  {
    slug: "ai-agents-small-business",
    title: "AI Agents for Small Business: A Practical Guide",
    excerpt: "How to actually use AI agents to save time without spending thousands. Real examples from real businesses.",
    date: "Coming Soon",
    category: "AI",
    color: "bg-green-300",
    rotate: "rotate-1",
  },
  {
    slug: "automate-without-code",
    title: "50+ Tasks You Can Automate Without Code",
    excerpt: "From email sorting to invoice processing - the complete list of things you should stop doing manually.",
    date: "Coming Soon",
    category: "Productivity",
    color: "bg-yellow-300",
    rotate: "-rotate-2",
  },
  {
    slug: "rag-explained-simple",
    title: "RAG Explained: Make AI Actually Know Your Business",
    excerpt: "What is Retrieval-Augmented Generation and why does it matter? The non-technical explanation.",
    date: "Coming Soon",
    category: "AI",
    color: "bg-blue-300",
    rotate: "rotate-2",
  },
];

export default function BlogPage() {
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
            <li><Link href="/" className="hover:text-red-600 hover:tracking-widest transition-all inline-block">home</Link></li>
            <li><Link href="/about" className="hover:text-red-600 hover:tracking-widest transition-all inline-block">about</Link></li>
            <li><Link href="/services" className="hover:text-red-600 hover:tracking-widest transition-all inline-block">services</Link></li>
            <li><Link href="/portfolio" className="hover:text-red-600 hover:tracking-widest transition-all inline-block">portfolio</Link></li>
            <li><Link href="/contact" className="hover:text-red-600 hover:tracking-widest transition-all inline-block">contact</Link></li>
            <li><Link href="/faq" className="hover:text-red-600 hover:tracking-widest transition-all inline-block">faq</Link></li>
            <li><Link href="/pricing" className="hover:text-red-600 hover:tracking-widest transition-all inline-block">pricing</Link></li>
            <li><span className="bg-black text-white px-2 -ml-2 skew-x-[-10deg] inline-block">blog</span></li>
          </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      <header className="lg:hidden fixed top-0 left-0 z-50 px-3 py-3 backdrop-blur border-b-2 border-r-2 border-black shadow-brutal-sm" style={{ backgroundColor: 'rgba(240, 234, 221, 0.95)' }}>
        <div className="bg-yellow-300 px-4 py-2 border-2 border-black shadow-brutal-sm rotate-1">
          <div className="text-center">
            <div className="text-xs font-black uppercase leading-none" style={{ fontFamily: "var(--font-bebas), sans-serif" }}>WACKY WORKS DIGITAL</div>
            <div className="text-[8px] mt-0.5" style={{ fontFamily: "var(--font-caveat), cursive" }}>@wackyworksdigital</div>
          </div>
        </div>
      </header>

      <button 
        className="lg:hidden fixed top-4 right-4 z-50 text-4xl border-2 border-black rounded-full hover:bg-black hover:text-white transition-colors w-12 h-12 flex items-center justify-center bg-white shadow-brutal-sm"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {menuOpen && (
        <div className="lg:hidden fixed top-20 left-0 right-0 z-40 bg-paper-white border-b-2 border-black p-6 shadow-brutal">
          <ul className="flex flex-col gap-4 text-xl font-bold lowercase">
            <li><Link href="/" className="hover:text-red-600 transition-colors">home</Link></li>
            <li><Link href="/about" className="hover:text-red-600 transition-colors">about</Link></li>
            <li><Link href="/services" className="hover:text-red-600 transition-colors">services</Link></li>
            <li><Link href="/portfolio" className="hover:text-red-600 transition-colors">portfolio</Link></li>
            <li><Link href="/contact" className="hover:text-red-600 transition-colors">contact</Link></li>
            <li><Link href="/faq" className="hover:text-red-600 transition-colors">faq</Link></li>
            <li><Link href="/pricing" className="hover:text-red-600 transition-colors">pricing</Link></li>
            <li><span className="bg-black text-white px-2">blog</span></li>
          </ul>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 pt-24 md:pt-32 lg:pt-20 pb-20 px-6 lg:pl-72">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="bg-white p-8 border-4 border-black shadow-brutal -rotate-1">
              <h1 
                className="text-5xl md:text-7xl font-black uppercase mb-4"
                style={{ fontFamily: "var(--font-bebas), sans-serif" }}
              >
                THE BLOG 📝
              </h1>
              <p 
                className="text-xl md:text-2xl"
                style={{ fontFamily: "var(--font-caveat), cursive" }}
              >
                AI, automation, and occasional rants about why your processes are broken
              </p>
            </div>
          </motion.div>

          {/* Coming Soon Notice */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="bg-yellow-200 p-6 border-2 border-black shadow-brutal rotate-1 text-center">
              <p 
                className="text-2xl font-bold"
                style={{ fontFamily: "var(--font-caveat), cursive" }}
              >
                🚧 We're cooking up some articles! First posts dropping January 2025 🚧
              </p>
            </div>
          </motion.div>

          {/* Blog Post Grid */}
          <div className="grid gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <div className={`${post.color} p-6 border-2 border-black shadow-brutal ${post.rotate} hover:rotate-0 transition-transform cursor-not-allowed opacity-80`}>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <span className="bg-black text-white px-2 py-1 text-xs font-black uppercase">
                      {post.category}
                    </span>
                    <span 
                      className="text-sm"
                      style={{ fontFamily: "var(--font-caveat), cursive" }}
                    >
                      {post.date}
                    </span>
                  </div>
                  <h2 
                    className="text-2xl md:text-3xl font-black uppercase mb-2"
                    style={{ fontFamily: "var(--font-bebas), sans-serif" }}
                  >
                    {post.title}
                  </h2>
                  <p 
                    className="text-base"
                    style={{ fontFamily: "var(--font-space), sans-serif" }}
                  >
                    {post.excerpt}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Newsletter CTA */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="bg-black text-white p-8 border-4 border-black shadow-brutal">
              <h3 
                className="text-3xl font-black uppercase mb-4 text-center"
                style={{ fontFamily: "var(--font-bebas), sans-serif" }}
              >
                DON'T MISS A POST 📬
              </h3>
              <p 
                className="text-xl text-center mb-6"
                style={{ fontFamily: "var(--font-caveat), cursive" }}
              >
                Get notified when we publish something useful (we promise not to spam)
              </p>
              <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 p-3 border-2 border-white bg-transparent text-white placeholder:text-white/50 focus:outline-none focus:bg-white/10"
                  style={{ fontFamily: "var(--font-space), sans-serif" }}
                />
                <button
                  className="bg-yellow-400 text-black px-6 py-3 font-black uppercase border-2 border-yellow-400 hover:bg-yellow-300 transition-colors"
                  style={{ fontFamily: "var(--font-bebas), sans-serif" }}
                >
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </motion.div>

          <LegalFooter />
        </div>
      </div>
    </main>
  );
}

