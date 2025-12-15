"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const TEXT = "#3d3428";
const BG = "#f0eadd";

export default function PrivacyPage() {
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
          {["home", "about", "services", "portfolio", "contact"].map((item) => (
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
            {["home", "about", "services", "portfolio", "contact"].map((item, i) => (
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
              className="inline-block bg-yellow-400 px-8 py-4 border-4 border-black rotate-[-1deg]"
              style={{ boxShadow: "8px 8px 0 #000" }}
            >
              <h1 className="text-4xl md:text-6xl font-black">PRIVACY POLICY</h1>
            </div>
            <div 
              className="mt-4 inline-block bg-pink-300 px-4 py-2 border-3 border-black rotate-[2deg] text-sm font-bold"
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
                Hey! We're Wacky Works Digital, and we actually care about your privacy. 
                This isn't just legal mumbo-jumbo — it's us being straight with you about 
                what data we collect and why. Spoiler: we're not selling your info to anyone. 
                We're too busy building cool stuff.
              </p>
            </div>
          </motion.div>

          {/* Sections */}
          <div className="space-y-6">
            
            {/* Who We Are */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div 
                className="bg-cyan-300 p-6 border-4 border-black rotate-[-0.5deg]"
                style={{ boxShadow: "6px 6px 0 #000" }}
              >
                <h2 className="text-2xl font-black mb-3 flex items-center gap-2">
                  <span>👋</span> WHO WE ARE
                </h2>
                <p className="mb-2">
                  We're <strong>Wacky Works Digital</strong>, a small creative agency based in the UK. 
                  We build websites, AI agents, and automation systems that actually work.
                </p>
                <p className="text-sm opacity-80">
                  Contact: hello@wearewacky.com
                </p>
              </div>
            </motion.div>

            {/* What We Collect */}
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
                  <span>📊</span> WHAT WE COLLECT
                </h2>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span><strong>Contact info</strong> — When you email us or fill out a form (name, email, message)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span><strong>Usage data</strong> — Basic analytics (pages visited, time on site)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span><strong>Account data</strong> — If you sign in via Google (name, email, profile picture)</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Google Sign-In */}
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
                  <span>🔐</span> GOOGLE SIGN-IN
                </h2>
                <p className="mb-3">
                  Some of our apps (like courses.wearewacky.com) let you sign in with Google. 
                  Here's what happens:
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• We receive your name, email, and profile picture from Google</li>
                  <li>• We use this to create your account and personalize your experience</li>
                  <li>• We don't get your password (Google handles that)</li>
                  <li>• We don't post anything to your Google account</li>
                  <li>• You can disconnect anytime from your Google account settings</li>
                </ul>
              </div>
            </motion.div>

            {/* Why We Collect */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div 
                className="bg-yellow-200 p-6 border-4 border-black rotate-[0.5deg]"
                style={{ boxShadow: "6px 6px 0 #000" }}
              >
                <h2 className="text-2xl font-black mb-3 flex items-center gap-2">
                  <span>🤔</span> WHY WE COLLECT IT
                </h2>
                <ul className="space-y-2">
                  <li>• To reply to your messages (revolutionary, we know)</li>
                  <li>• To provide access to our apps and courses</li>
                  <li>• To understand how people use our site (so we can make it better)</li>
                  <li>• To send you updates if you opt-in (no spam, promise)</li>
                </ul>
              </div>
            </motion.div>

            {/* What We Don't Do */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div 
                className="bg-red-200 p-6 border-4 border-black rotate-[-0.5deg]"
                style={{ boxShadow: "6px 6px 0 #000" }}
              >
                <h2 className="text-2xl font-black mb-3 flex items-center gap-2">
                  <span>🚫</span> WHAT WE DON'T DO
                </h2>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">✗</span>
                    <span>Sell your data to third parties</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">✗</span>
                    <span>Send you unsolicited marketing emails</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">✗</span>
                    <span>Track you across the internet like a creepy stalker</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">✗</span>
                    <span>Share your info without your permission</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Cookies */}
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
                  <span>🍪</span> COOKIES
                </h2>
                <p className="mb-3">
                  We use cookies. Not the delicious kind (sadly). The tiny files that help 
                  websites remember you.
                </p>
                <ul className="space-y-1 text-sm">
                  <li><strong>Essential cookies:</strong> Keep you logged in</li>
                  <li><strong>Analytics cookies:</strong> Help us see how people use the site</li>
                  <li><strong>Preference cookies:</strong> Remember your settings</li>
                </ul>
                <p className="mt-3 text-sm">
                  You can disable cookies in your browser, but some things might not work properly.
                </p>
              </div>
            </motion.div>

            {/* Your Rights */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div 
                className="bg-purple-200 p-6 border-4 border-black rotate-[-0.5deg]"
                style={{ boxShadow: "6px 6px 0 #000" }}
              >
                <h2 className="text-2xl font-black mb-3 flex items-center gap-2">
                  <span>⚖️</span> YOUR RIGHTS (GDPR & UK GDPR)
                </h2>
                <p className="mb-3">You have the right to:</p>
                <ul className="space-y-1">
                  <li>• Access your data (ask us what we have)</li>
                  <li>• Correct your data (if we got something wrong)</li>
                  <li>• Delete your data (the "forget me" button)</li>
                  <li>• Export your data (take it with you)</li>
                  <li>• Object to processing (say "no thanks")</li>
                </ul>
                <p className="mt-3 text-sm">
                  Just email us at <strong>hello@wearewacky.com</strong> and we'll sort it out.
                </p>
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <div 
                className="bg-green-300 p-6 border-4 border-black rotate-[0.5deg]"
                style={{ boxShadow: "6px 6px 0 #000" }}
              >
                <h2 className="text-2xl font-black mb-3 flex items-center gap-2">
                  <span>📬</span> QUESTIONS?
                </h2>
                <p>
                  Got questions about your privacy? Want to exercise your rights? 
                  Just want to say hi? Hit us up:
                </p>
                <p className="mt-3 font-bold">
                  📧 hello@wearewacky.com
                </p>
                <p className="mt-2 text-sm opacity-80">
                  We usually reply within 24-48 hours (unless we're on a coffee run).
                </p>
              </div>
            </motion.div>

          </div>

          {/* Footer Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-16 pt-8 border-t-4 border-black"
          >
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link href="/" className="hover:underline font-bold">Home</Link>
              <Link href="/terms" className="hover:underline font-bold">Terms of Service</Link>
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

