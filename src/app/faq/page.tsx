"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { LegalFooter } from "@/components/ui/legal-footer";

const TEXT = "#3d3428";
const BG = "#f0eadd";

const faqs = [
  {
    question: "How much does AI workflow automation cost for a small business?",
    answer: "Simple workflow automations start from £300 / $400, while AI chatbots start from £500 / $700. Most small business projects fall in the £500-£2,000 range. We offer free discovery calls to understand your needs and give you an accurate quote. Check our pricing page for ballpark figures!",
    color: "bg-yellow-300",
    rotate: "rotate-1",
  },
  {
    question: "What's the difference between n8n and Zapier?",
    answer: "n8n is self-hosted and open-source, giving you full control and significantly lower costs at scale with no per-task fees. Zapier is cloud-based with 6,000+ integrations but higher monthly fees. n8n suits technical teams wanting control; Zapier suits non-technical users wanting simplicity.",
    color: "bg-pink-200",
    rotate: "-rotate-1",
  },
  {
    question: "How long does it take to build a custom AI agent?",
    answer: "A basic AI agent takes 2-4 weeks from brief to deployment. Complex multi-agent systems with shared knowledge bases take 6-12 weeks. We deliver working prototypes within the first week so you can test and iterate quickly.",
    color: "bg-cyan-200",
    rotate: "rotate-2",
  },
  {
    question: "Do you work with international clients?",
    answer: "Yes! We're based in South London but work with clients worldwide. We're remote-first, so all our digital services (AI agents, automation, web development, etc.) are available globally. Our robots work 24/7 across all timezones.",
    color: "bg-green-300",
    rotate: "-rotate-2",
  },
  {
    question: "What is RAG and why do businesses use it?",
    answer: "RAG (Retrieval-Augmented Generation) turns your company documents into an AI that knows your business. Instead of generic AI responses, RAG systems pull from your actual data - policies, procedures, product info - to give accurate, company-specific answers. Perfect for customer support, internal knowledge bases, and employee onboarding.",
    color: "bg-purple-200",
    rotate: "rotate-1",
  },
  {
    question: "Where is Wacky Works Digital based?",
    answer: "We're based in Coulsdon, South London, UK. For digital services like AI agents, automation, and web development, we work with clients worldwide. For photo and video shoots, we cover a 40-mile radius including all of London, Surrey, Kent, Sussex, Hampshire, and Berkshire.",
    color: "bg-orange-200",
    rotate: "-rotate-1",
  },
  {
    question: "Do you offer photo and video shoots for businesses?",
    answer: "Yes! We offer professional photo and video production for businesses in London and South East England. Product photography, brand videos, social media content, and behind-the-scenes footage. Based in South London, we cover Greater London, Surrey, Kent, Sussex, Hampshire, and Berkshire.",
    color: "bg-yellow-300",
    rotate: "rotate-2",
  },
  {
    question: "How much does a business website cost in the UK?",
    answer: "Our websites start from £500 / $700 for landing pages, with full 5-7 page business sites from £800-£1,500 ($1,000-$2,000). E-commerce stores start from £800 / $1,000. We build with Next.js and React for speed and SEO - no WordPress maintenance nightmares. See our pricing page for full details!",
    color: "bg-pink-200",
    rotate: "-rotate-2",
  },
  {
    question: "Can you automate my Shopify store?",
    answer: "Absolutely! We automate Shopify stores with AI-powered blog posts, inventory syncing, order processing, customer emails, review requests, and even cross-listing to Etsy and Amazon. Most store owners save 10-20 hours per week after automation.",
    color: "bg-cyan-200",
    rotate: "rotate-1",
  },
  {
    question: "What's the best automation tool for small businesses?",
    answer: "It depends on your needs. Zapier is easiest for beginners with 6,000+ app integrations. Make.com offers powerful visual workflows at lower cost. n8n is self-hosted with zero per-task fees - best for scaling. We help you choose and set up the right tool for your specific workflows.",
    color: "bg-green-300",
    rotate: "-rotate-1",
  },
  {
    question: "Do you build mobile apps?",
    answer: "Yes! We build mobile apps using React Native for both iOS and Android from a single codebase. Also web apps, PWAs, and full SaaS platforms. From initial idea through app store submission and beyond.",
    color: "bg-purple-200",
    rotate: "rotate-2",
  },
  {
    question: "How do I get started with AI for my business?",
    answer: "Start with one specific pain point - customer support queries, content creation, data entry, or repetitive admin tasks. We offer free discovery calls to identify quick wins that deliver ROI within weeks, not months. Most businesses see results from their first AI automation within 2-4 weeks.",
    color: "bg-orange-200",
    rotate: "-rotate-2",
  },
];

export default function FAQPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
              <Link href="/contact" className="hover:text-red-600 hover:tracking-widest transition-all inline-block">
                contact
              </Link>
            </li>
            <li>
              <span className="bg-black text-white px-2 -ml-2 skew-x-[-10deg] inline-block">
                faq
              </span>
            </li>
          </ul>
          <div className="absolute -bottom-6 -right-6 text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 rotate-12">
            🤔
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
            <li><Link href="/about" className="hover:text-red-600 transition-colors">about</Link></li>
            <li><Link href="/services" className="hover:text-red-600 transition-colors">services</Link></li>
            <li><Link href="/portfolio" className="hover:text-red-600 transition-colors">portfolio</Link></li>
            <li><Link href="/contact" className="hover:text-red-600 transition-colors">contact</Link></li>
            <li><span className="bg-black text-white px-2">faq</span></li>
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
        <div className="w-full max-w-4xl mx-auto">
          
          {/* Sticky Note Title */}
          <motion.div
            className="mb-12 inline-block"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-cyan-200 p-6 md:p-8 border-2 border-black shadow-brutal -rotate-2 relative">
              <div className="absolute -top-3 right-8 w-4 h-12 bg-red-400/50 rotate-12 rounded-sm border border-black/20" />
              <h1 
                className="text-5xl md:text-7xl font-black uppercase"
                style={{ fontFamily: "var(--font-bebas), sans-serif" }}
              >
                GOT QUESTIONS?
              </h1>
              <p 
                className="text-xl mt-2"
                style={{ fontFamily: "var(--font-caveat), cursive" }}
              >
                we've got answers (probably)
              </p>
            </div>
          </motion.div>

          {/* Decorative scribble */}
          <div 
            className="absolute top-24 right-10 text-6xl opacity-10 rotate-12 hidden lg:block select-none"
            style={{ fontFamily: "var(--font-marker), cursive" }}
          >
            ???
          </div>

          {/* FAQ Cards */}
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div 
                  className={`${faq.color} border-2 border-black shadow-brutal ${faq.rotate} hover:rotate-0 transition-all duration-300 cursor-pointer overflow-hidden`}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  {/* Question */}
                  <div className="p-5 md:p-6 flex justify-between items-start gap-4">
                    <h3 
                      className="text-lg md:text-xl font-bold"
                      style={{ fontFamily: "var(--font-space), sans-serif" }}
                    >
                      {faq.question}
                    </h3>
                    <span 
                      className={`text-3xl transition-transform duration-300 flex-shrink-0 ${openIndex === index ? 'rotate-45' : ''}`}
                    >
                      +
                    </span>
                  </div>
                  
                  {/* Answer */}
                  <div 
                    className={`px-5 md:px-6 overflow-hidden transition-all duration-300 ${
                      openIndex === index ? 'max-h-96 pb-5 md:pb-6' : 'max-h-0'
                    }`}
                  >
                    <div className="bg-white/50 p-4 border border-black/10 rounded">
                      <p 
                        className="text-base leading-relaxed"
                        style={{ fontFamily: "var(--font-space), sans-serif" }}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Still got questions CTA */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white p-8 border-2 border-black shadow-brutal rotate-1 inline-block">
              <h2 
                className="text-3xl md:text-4xl font-black uppercase mb-3"
                style={{ fontFamily: "var(--font-bebas), sans-serif" }}
              >
                STILL CONFUSED?
              </h2>
              <p 
                className="text-lg mb-6"
                style={{ fontFamily: "var(--font-caveat), cursive" }}
              >
                no worries, just ask us directly!
              </p>
              <Link href="/contact">
                <span className="inline-block bg-black text-white px-8 py-4 text-xl font-bold uppercase hover:bg-red-600 transition-colors border-2 border-black shadow-brutal-sm hover:shadow-none hover:translate-x-1 hover:translate-y-1">
                  GET IN TOUCH →
                </span>
              </Link>
            </div>
            <div className="mt-4 text-6xl">
              💬
            </div>
          </motion.div>

          {/* Legal Footer */}
          <LegalFooter />

        </div>
      </div>
    </main>
  );
}

