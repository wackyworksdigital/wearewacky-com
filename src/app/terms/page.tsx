"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const TEXT = "#3d3428";
const BG = "#f0eadd";

export default function TermsPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main 
      className="relative min-h-screen overflow-x-hidden"
      style={{ backgroundColor: BG, color: TEXT }}
    >
      {/* Mobile Branding - Top Left */}
      <div className="fixed top-4 left-4 z-50 lg:hidden">
        <div 
          className="bg-yellow-400 px-3 py-2 border-4 border-black font-black text-xs rotate-[-2deg]"
          style={{ boxShadow: "4px 4px 0 #000" }}
        >
          WACKY WORKS DIGITAL
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button 
        onClick={() => setMenuOpen(!menuOpen)}
        className="fixed top-4 right-4 z-50 lg:hidden bg-white border-4 border-black p-3"
        style={{ boxShadow: "4px 4px 0 #000" }}
      >
        <div className="w-6 h-0.5 bg-black mb-1.5"></div>
        <div className="w-6 h-0.5 bg-black mb-1.5"></div>
        <div className="w-6 h-0.5 bg-black"></div>
      </button>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white z-40 lg:hidden flex flex-col items-center justify-center gap-6">
          {["home", "about", "services", "portfolio", "contact", "faq", "pricing"].map((item) => (
            <Link 
              key={item}
              href={item === "home" ? "/" : `/${item}`}
              className="text-3xl font-black hover:text-red-500 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      )}

      {/* Desktop Menu */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div 
          className="bg-white border-4 border-black p-4 rotate-[-2deg]"
          style={{ boxShadow: "6px 6px 0 #000" }}
        >
          <nav className="space-y-2">
            {["home", "about", "services", "portfolio", "contact", "faq", "pricing"].map((item, i) => (
              <Link 
                key={item}
                href={item === "home" ? "/" : `/${item}`}
                className={`block text-lg font-bold hover:bg-yellow-300 px-2 py-1 transition-colors ${
                  i % 2 === 0 ? "rotate-1" : "-rotate-1"
                }`}
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Desktop Branding */}
      <div className="fixed top-6 right-6 z-40 hidden lg:block">
        <div 
          className="bg-white border-4 border-black p-4 rotate-[3deg]"
          style={{ boxShadow: "6px 6px 0 #000" }}
        >
          <div className="font-black text-lg">WACKY WORKS</div>
          <div className="text-sm font-bold text-center border-t-2 border-black pt-1 mt-1">DIGITAL</div>
          <div className="text-xs text-gray-500 mt-1 font-mono">@wackyworksdigital</div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen px-6 pt-32 lg:pt-16 lg:pl-64 pb-16">
        <div className="w-full max-w-4xl mx-auto">
          
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div 
              className="inline-block bg-cyan-400 px-8 py-4 border-4 border-black rotate-[-1deg]"
              style={{ boxShadow: "8px 8px 0 #000" }}
            >
              <h1 className="text-4xl md:text-6xl font-black">TERMS OF SERVICE</h1>
            </div>
            <div 
              className="mt-4 inline-block bg-yellow-300 px-4 py-2 border-3 border-black rotate-[2deg] text-sm font-bold"
              style={{ boxShadow: "4px 4px 0 #000" }}
            >
              Last updated: December 2025
            </div>
          </motion.div>

          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8"
          >
            <div 
              className="bg-white p-6 border-4 border-black rotate-[0.5deg]"
              style={{ boxShadow: "6px 6px 0 #000" }}
            >
              <p className="text-lg" style={{ fontFamily: "var(--font-caveat), cursive" }}>
                Welcome to Wacky Works Digital! By using our website and services, you're 
                agreeing to these terms. We've tried to make them as human-readable as possible. 
                No law degree required (but if you have one, hi! 👋).
              </p>
            </div>
          </motion.div>

          {/* Sections */}
          <div className="space-y-6">
            
            {/* The Basics */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div 
                className="bg-pink-300 p-6 border-4 border-black rotate-[-0.5deg]"
                style={{ boxShadow: "6px 6px 0 #000" }}
              >
                <h2 className="text-2xl font-black mb-3 flex items-center gap-2">
                  <span>📋</span> THE BASICS
                </h2>
                <ul className="space-y-2">
                  <li>• "We", "us", "our" = Wacky Works Digital</li>
                  <li>• "You", "your" = You, the lovely person reading this</li>
                  <li>• "Services" = Our website, apps, courses, and anything else we build</li>
                  <li>• "Content" = Everything on our site (text, images, code, memes)</li>
                </ul>
              </div>
            </motion.div>

            {/* Using Our Services */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div 
                className="bg-white p-6 border-4 border-black rotate-[0.5deg]"
                style={{ boxShadow: "6px 6px 0 #000" }}
              >
                <h2 className="text-2xl font-black mb-3 flex items-center gap-2">
                  <span>✅</span> USING OUR SERVICES
                </h2>
                <p className="mb-3">You can use our services if you agree to:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Be at least 16 years old (or have parent/guardian permission)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Not do anything illegal or harmful</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Not try to hack, break, or abuse our systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Provide accurate information when signing up</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Keep your login credentials secure</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Our Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div 
                className="bg-blue-200 p-6 border-4 border-black rotate-[-0.5deg]"
                style={{ boxShadow: "6px 6px 0 #000" }}
              >
                <h2 className="text-2xl font-black mb-3 flex items-center gap-2">
                  <span>©️</span> OUR CONTENT
                </h2>
                <p className="mb-3">
                  Everything we create belongs to us (unless we say otherwise). This includes:
                </p>
                <ul className="space-y-1 text-sm">
                  <li>• Website design and code</li>
                  <li>• Course content and materials</li>
                  <li>• Logos, graphics, and branding</li>
                  <li>• Written content and documentation</li>
                </ul>
                <p className="mt-3 font-bold">
                  You can share our stuff with credit, but don't claim it as your own!
                </p>
              </div>
            </motion.div>

            {/* Paid Services */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div 
                className="bg-green-300 p-6 border-4 border-black rotate-[0.5deg]"
                style={{ boxShadow: "6px 6px 0 #000" }}
              >
                <h2 className="text-2xl font-black mb-3 flex items-center gap-2">
                  <span>💰</span> PAID SERVICES
                </h2>
                <p className="mb-3">If you buy something from us:</p>
                <ul className="space-y-2">
                  <li>• <strong>Payment:</strong> We use Stripe (secure payment processing)</li>
                  <li>• <strong>Refunds:</strong> 14-day money-back guarantee on digital products</li>
                  <li>• <strong>Custom work:</strong> Governed by separate project contracts</li>
                  <li>• <strong>Subscriptions:</strong> Cancel anytime (takes effect next billing cycle)</li>
                </ul>
                <p className="mt-3 text-sm">
                  All prices are in GBP unless stated otherwise. VAT included where applicable.
                </p>
              </div>
            </motion.div>

            {/* What We Promise */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div 
                className="bg-yellow-200 p-6 border-4 border-black rotate-[-0.5deg]"
                style={{ boxShadow: "6px 6px 0 #000" }}
              >
                <h2 className="text-2xl font-black mb-3 flex items-center gap-2">
                  <span>🤝</span> WHAT WE PROMISE
                </h2>
                <ul className="space-y-2">
                  <li>• We'll do our best to keep our services running smoothly</li>
                  <li>• We'll fix bugs and issues as quickly as we can</li>
                  <li>• We'll be honest about what our services can and can't do</li>
                  <li>• We'll respect your privacy and data</li>
                  <li>• We'll actually reply to your emails (wild concept, we know)</li>
                </ul>
              </div>
            </motion.div>

            {/* What We Don't Promise */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
            >
              <div 
                className="bg-orange-200 p-6 border-4 border-black rotate-[0.5deg]"
                style={{ boxShadow: "6px 6px 0 #000" }}
              >
                <h2 className="text-2xl font-black mb-3 flex items-center gap-2">
                  <span>⚠️</span> WHAT WE DON'T PROMISE
                </h2>
                <p className="mb-3 text-sm">
                  (The boring but necessary legal stuff)
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Our services are provided "as is" — no guarantee of 100% uptime</li>
                  <li>• We're not responsible for third-party services we integrate with</li>
                  <li>• Results may vary (especially for courses and advice)</li>
                  <li>• We can't guarantee our jokes will always land 😅</li>
                </ul>
              </div>
            </motion.div>

            {/* Termination */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div 
                className="bg-red-200 p-6 border-4 border-black rotate-[-0.5deg]"
                style={{ boxShadow: "6px 6px 0 #000" }}
              >
                <h2 className="text-2xl font-black mb-3 flex items-center gap-2">
                  <span>🚪</span> TERMINATION
                </h2>
                <p className="mb-3">
                  We can suspend or terminate your access if you:
                </p>
                <ul className="space-y-1">
                  <li>• Break these terms</li>
                  <li>• Do something illegal</li>
                  <li>• Are abusive to our team</li>
                  <li>• Try to game or exploit our systems</li>
                </ul>
                <p className="mt-3 text-sm">
                  You can also leave anytime — just email us and we'll help you close your account.
                </p>
              </div>
            </motion.div>

            {/* Changes */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
            >
              <div 
                className="bg-purple-200 p-6 border-4 border-black rotate-[0.5deg]"
                style={{ boxShadow: "6px 6px 0 #000" }}
              >
                <h2 className="text-2xl font-black mb-3 flex items-center gap-2">
                  <span>📝</span> CHANGES TO THESE TERMS
                </h2>
                <p>
                  We might update these terms occasionally. When we do, we'll:
                </p>
                <ul className="space-y-1 mt-2">
                  <li>• Update the "Last updated" date at the top</li>
                  <li>• Email you if it's a major change</li>
                  <li>• Give you time to review before changes take effect</li>
                </ul>
                <p className="mt-3 text-sm">
                  Continuing to use our services = accepting the new terms.
                </p>
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <div 
                className="bg-cyan-300 p-6 border-4 border-black rotate-[-0.5deg]"
                style={{ boxShadow: "6px 6px 0 #000" }}
              >
                <h2 className="text-2xl font-black mb-3 flex items-center gap-2">
                  <span>📬</span> QUESTIONS?
                </h2>
                <p>
                  Got questions about these terms? Think something's unfair? Just want to chat?
                </p>
                <p className="mt-3 font-bold">
                  📧 hello@wearewacky.com
                </p>
                <p className="mt-2 text-sm opacity-80">
                  We promise we're nice people (despite having lawyers).
                </p>
              </div>
            </motion.div>

            {/* Governing Law */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
            >
              <div 
                className="bg-gray-200 p-6 border-4 border-black rotate-[0.5deg]"
                style={{ boxShadow: "6px 6px 0 #000" }}
              >
                <h2 className="text-2xl font-black mb-3 flex items-center gap-2">
                  <span>⚖️</span> GOVERNING LAW
                </h2>
                <p>
                  These terms are governed by the laws of <strong>England and Wales</strong>. 
                  Any disputes will be handled in UK courts. But honestly, we'd rather just 
                  work it out over email like reasonable humans.
                </p>
              </div>
            </motion.div>

          </div>

          {/* Footer Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-16 pt-8 border-t-4 border-black"
          >
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link href="/" className="hover:underline font-bold">Home</Link>
              <Link href="/privacy" className="hover:underline font-bold">Privacy Policy</Link>
              <Link href="/contact" className="hover:underline font-bold">Contact</Link>
            </div>
            <p className="text-center mt-4 text-sm opacity-60">
              © {new Date().getFullYear()} Wacky Works Digital. Made with questionable amounts of coffee.
            </p>
          </motion.div>

        </div>
      </div>
    </main>
  );
}

