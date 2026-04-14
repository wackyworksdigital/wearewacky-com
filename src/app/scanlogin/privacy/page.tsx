"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const TEXT = "#3d3428";
const BG = "#f0eadd";

export default function ScanLoginPrivacyPage() {
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
              className="inline-block bg-green-300 px-8 py-4 border-4 border-black rotate-[-1deg]"
              style={{ boxShadow: "8px 8px 0 #000" }}
            >
              <h1 className="text-3xl md:text-5xl font-black">SCAN LOGIN — PRIVACY</h1>
            </div>
            <div
              className="mt-4 inline-block bg-pink-300 px-4 py-2 border-3 border-black rotate-[2deg] text-sm font-bold"
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
                Short version: Scan Login doesn&apos;t collect anything. No data leaves your phone.
                No analytics. No internet. No accounts. We can&apos;t see your stuff because we
                literally don&apos;t have it. Long version below.
              </p>
            </div>
          </motion.div>

          {/* Sections */}
          <div className="space-y-6">

            {/* What it is */}
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
                  <span>📱</span> WHAT THIS APP IS
                </h2>
                <p>
                  Scan Login is an Android app made by <strong>Wacky Works Digital</strong>.
                  It turns a User ID and Password you enter into Code 128 barcodes, so you can
                  scan them with a handheld instead of typing with cold gloves on. That&apos;s it.
                </p>
              </div>
            </motion.div>

            {/* Data we collect */}
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
                  <span>📊</span> DATA WE COLLECT
                </h2>
                <p className="text-2xl font-black mb-2">None.</p>
                <p>
                  Scan Login does not collect, transmit, or share any personal data. Anything
                  you type into the app stays on your phone. We never see it.
                </p>
              </div>
            </motion.div>

            {/* Where it's stored */}
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
                  <span>🔒</span> HOW YOUR CREDENTIALS ARE STORED
                </h2>
                <p className="mb-3">
                  Your User ID and Password are saved using Android&apos;s
                  <strong> EncryptedSharedPreferences</strong>, which uses the Android Keystore
                  (hardware-backed encryption on most devices). That means:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Encrypted on-device, not in plain text</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Never sent to any server, API, or third party</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Not included in cloud backups (we&apos;ve disabled Android auto-backup for this app)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Deleted instantly when you change them in the app or uninstall it</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Internet */}
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
                  <span>📡</span> INTERNET ACCESS
                </h2>
                <p>
                  Scan Login doesn&apos;t use the internet. The app works entirely offline.
                  You could put your phone in flight mode and it&apos;d still do its job
                  (probably better, even).
                </p>
              </div>
            </motion.div>

            {/* Third parties */}
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
                  <span>🚫</span> THIRD-PARTY SERVICES
                </h2>
                <p className="mb-3">No analytics. No ads. No SDKs that phone home.</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">✗</span>
                    <span>No Google Analytics, Firebase, or anything similar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">✗</span>
                    <span>No advertising networks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">✗</span>
                    <span>No crash reporting or telemetry</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Permissions */}
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
                  <span>🔑</span> PERMISSIONS THE APP USES
                </h2>
                <ul className="space-y-3">
                  <li>
                    <strong>Notifications</strong> — to show the persistent &quot;tap to show your barcodes&quot;
                    notification on your lock screen.
                  </li>
                  <li>
                    <strong>Foreground Service</strong> — to keep that notification alive so it&apos;s
                    there when you reach for the phone.
                  </li>
                  <li>
                    <strong>Run at startup</strong> — so the notification reappears after you restart your phone.
                  </li>
                </ul>
                <p className="mt-3 text-sm">No camera, no location, no contacts, no microphone. None of that.</p>
              </div>
            </motion.div>

            {/* Children */}
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
                  <span>👶</span> CHILDREN&apos;S PRIVACY
                </h2>
                <p>
                  This app isn&apos;t directed at children under 13. It&apos;s a work tool for
                  warehouse staff. We don&apos;t knowingly collect data from anyone of any age,
                  but especially not children.
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
                className="bg-gray-200 p-6 border-4 border-black rotate-[0.5deg]"
                style={{ boxShadow: "6px 6px 0 #000" }}
              >
                <h2 className="text-2xl font-black mb-3 flex items-center gap-2">
                  <span>📝</span> CHANGES TO THIS POLICY
                </h2>
                <p>
                  If we ever change this policy, we&apos;ll update the date at the top.
                  Probably won&apos;t need to — the app doesn&apos;t collect anything, so
                  there&apos;s not much to change.
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
                className="bg-green-300 p-6 border-4 border-black rotate-[-0.5deg]"
                style={{ boxShadow: "6px 6px 0 #000" }}
              >
                <h2 className="text-2xl font-black mb-3 flex items-center gap-2">
                  <span>📬</span> QUESTIONS?
                </h2>
                <p>
                  Anything unclear? Email us — we actually reply.
                </p>
                <p className="mt-3 font-bold">📧 hello@wearewacky.com</p>
              </div>
            </motion.div>

          </div>

          {/* Footer Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="mt-16 pt-8 border-t-4 border-black"
          >
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link href="/scanlogin" className="hover:underline font-bold">Scan Login</Link>
              <Link href="/scanlogin/terms" className="hover:underline font-bold">Terms</Link>
              <Link href="/privacy" className="hover:underline font-bold">Site Privacy</Link>
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
