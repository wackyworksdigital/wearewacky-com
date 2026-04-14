"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const TEXT = "#3d3428";
const BG = "#f0eadd";

export default function ScanLoginTermsPage() {
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

          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-6 text-sm font-bold"
          >
            <Link href="/scanlogin" className="hover:underline">← scan login</Link>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div
              className="inline-block bg-pink-300 px-8 py-4 border-4 border-black rotate-[-1deg]"
              style={{ boxShadow: "8px 8px 0 #000" }}
            >
              <h1 className="text-3xl md:text-5xl font-black">SCAN LOGIN — TERMS</h1>
            </div>
            <div
              className="mt-4 inline-block bg-yellow-300 px-4 py-2 border-3 border-black rotate-[2deg] text-sm font-bold"
              style={{ boxShadow: "4px 4px 0 #000" }}
            >
              Last updated: April 2026
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
                Scan Login is free, doesn&apos;t collect anything, and works offline. By installing
                it you agree to the bits below. Most of it is the obvious stuff (don&apos;t blame
                us if you lose your phone) but Google makes us spell it out.
              </p>
            </div>
          </motion.div>

          {/* Sections */}
          <div className="space-y-6">

            {/* The basics */}
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
                  <span>📋</span> THE BASICS
                </h2>
                <ul className="space-y-2">
                  <li>• &quot;We&quot; / &quot;us&quot; = Wacky Works Digital</li>
                  <li>• &quot;You&quot; = the person who installed Scan Login</li>
                  <li>• &quot;The app&quot; = Scan Login on Android</li>
                </ul>
              </div>
            </motion.div>

            {/* What it does */}
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
                  <span>📱</span> WHAT THE APP DOES
                </h2>
                <p className="mb-3">
                  Scan Login displays a User ID and Password you&apos;ve entered as Code 128
                  barcodes, so you can scan them with a handheld instead of typing. That&apos;s
                  the entire job description.
                </p>
                <p className="text-sm">
                  It&apos;s offline, free, and stores everything locally on your phone.
                </p>
              </div>
            </motion.div>

            {/* Using the app */}
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
                  <span>✅</span> USING THE APP
                </h2>
                <p className="mb-3">By using Scan Login you agree to:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Only use credentials you&apos;re actually allowed to use</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Keep your phone secure (lock screen, PIN, the usual)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Not try to break, reverse-engineer, or repackage the app</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* What you're responsible for */}
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
                  <span>🔐</span> YOUR CREDENTIALS, YOUR PROBLEM
                </h2>
                <p className="mb-3">
                  Scan Login stores your credentials encrypted on your device. We never see them,
                  store them on a server, or send them anywhere.
                </p>
                <p>
                  That also means: if your phone gets lost, stolen, or unlocked by someone who
                  shouldn&apos;t be looking at it, that&apos;s on you to handle (change your
                  password with your employer, etc.). We can&apos;t help — we don&apos;t have
                  the data.
                </p>
              </div>
            </motion.div>

            {/* What we don't promise */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div
                className="bg-orange-200 p-6 border-4 border-black rotate-[-0.5deg]"
                style={{ boxShadow: "6px 6px 0 #000" }}
              >
                <h2 className="text-2xl font-black mb-3 flex items-center gap-2">
                  <span>⚠️</span> WHAT WE DON&apos;T PROMISE
                </h2>
                <p className="mb-3 text-sm">(The boring but necessary legal bit.)</p>
                <ul className="space-y-2 text-sm">
                  <li>• The app is provided &quot;as is&quot; with no warranty</li>
                  <li>• We don&apos;t guarantee it&apos;ll work with every scanner or barcode setup</li>
                  <li>• We&apos;re not liable for anything you lose or break by using it</li>
                  <li>• If your warehouse system stops accepting Code 128, that&apos;s not on us</li>
                </ul>
              </div>
            </motion.div>

            {/* Free and updates */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
            >
              <div
                className="bg-green-300 p-6 border-4 border-black rotate-[0.5deg]"
                style={{ boxShadow: "6px 6px 0 #000" }}
              >
                <h2 className="text-2xl font-black mb-3 flex items-center gap-2">
                  <span>💰</span> COST &amp; UPDATES
                </h2>
                <p className="mb-3">Scan Login is free. No ads. No subscriptions. No upsells.</p>
                <p className="text-sm">
                  We may release updates to fix bugs or add features. Updates come through Google Play
                  like any other app.
                </p>
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
                  <span>🚪</span> ENDING THINGS
                </h2>
                <p>
                  You can stop using the app any time by uninstalling it. That deletes everything
                  it stored (encrypted credentials included). Done.
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
                  If we ever change these, the date at the top updates. Continuing to use the app
                  means you&apos;re fine with the new version.
                </p>
              </div>
            </motion.div>

            {/* Governing law */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <div
                className="bg-gray-200 p-6 border-4 border-black rotate-[-0.5deg]"
                style={{ boxShadow: "6px 6px 0 #000" }}
              >
                <h2 className="text-2xl font-black mb-3 flex items-center gap-2">
                  <span>⚖️</span> GOVERNING LAW
                </h2>
                <p>
                  These terms are governed by the laws of <strong>England and Wales</strong>.
                  Disputes go to UK courts. But honestly we&apos;d rather just sort it out over email.
                </p>
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
            >
              <div
                className="bg-cyan-300 p-6 border-4 border-black rotate-[0.5deg]"
                style={{ boxShadow: "6px 6px 0 #000" }}
              >
                <h2 className="text-2xl font-black mb-3 flex items-center gap-2">
                  <span>📬</span> QUESTIONS?
                </h2>
                <p>Email us. We reply.</p>
                <p className="mt-3 font-bold">📧 hello@wearewacky.com</p>
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
              <Link href="/scanlogin" className="hover:underline font-bold">Scan Login</Link>
              <Link href="/scanlogin/privacy" className="hover:underline font-bold">Privacy</Link>
              <Link href="/terms" className="hover:underline font-bold">Site Terms</Link>
              <Link href="/" className="hover:underline font-bold">Home</Link>
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
