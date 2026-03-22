"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { LegalFooter } from "@/components/ui/legal-footer";

const TEXT = "#3d3428";
const BG = "#f0eadd";

interface Postcard {
  id: string;
  frontType: "image" | "emoji";
  image?: string;
  imageAlt?: string;
  emoji?: string;
  emojiLabel?: string;
  headline: string;
  backLines: string[];
  color?: string;
  date: string;
}

const postcards: Postcard[] = [
  {
    id: "the-lab-is-open",
    frontType: "image",
    image: "/images/retro-lab-postcard.jpg",
    imageAlt: "Scientists in white lab coats working at a retro control room console - circa 1978",
    headline: "the lab is open.",
    backLines: [
      "**Right. Quick update.**",
      "Remember when everyone said AI would replace us?",
      "**__We're still here. Building. Shipping. Breaking things.__**",
      "_The ones who waited? Still waiting._",
      "**The ones who started? They're winning.**",
      "_We've helped businesses launch in weeks, not months._",
      "_No fluff. No 47-slide decks. Just **__stuff that works.__**_",
      "**Your competitor just shipped something ugly. And it's making money.**",
      "**Your move.**",
      "Let's build something. Seriously.",
    ],
    date: "March 2025",
  },
];

function PostcardBack({ lines }: { lines: string[] }) {
  return (
    <>
      {lines.map((line, i) => {
        const isBold = line.startsWith("**") && line.endsWith("**");
        const isSmall = line.startsWith("_") && line.endsWith("_");
        const isBoldUnderline = line.includes("__");

        let text = line.replace(/\*\*/g, "").replace(/__/g, "").replace(/^_|_$/g, "");
        let className = "text-sm md:text-base";

        if (isBoldUnderline) {
          className = "text-base md:text-lg font-bold underline";
        } else if (isBold) {
          className = "text-sm md:text-base font-bold";
        } else if (isSmall) {
          className = "text-xs md:text-sm";
        }

        if (i > 0) className += " mt-1";

        return <p key={i} className={className}>{text}</p>;
      })}
    </>
  );
}

export default function PostcardsPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  const toggleFlip = (id: string) => {
    setFlippedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

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
            <li><span className="bg-black text-white px-2 -ml-2 skew-x-[-10deg] inline-block">postcards</span></li>
            <li><Link href="/blog" className="hover:text-red-600 hover:tracking-widest transition-all inline-block">blog</Link></li>
            <li><Link href="/contact" className="hover:text-red-600 hover:tracking-widest transition-all inline-block">contact</Link></li>
            <li><Link href="/faq" className="hover:text-red-600 hover:tracking-widest transition-all inline-block">faq</Link></li>
            <li><Link href="/pricing" className="hover:text-red-600 hover:tracking-widest transition-all inline-block">pricing</Link></li>
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
            <li><span className="bg-black text-white px-2">postcards</span></li>
            <li><Link href="/blog" className="hover:text-red-600 transition-colors">blog</Link></li>
            <li><Link href="/contact" className="hover:text-red-600 transition-colors">contact</Link></li>
            <li><Link href="/faq" className="hover:text-red-600 transition-colors">faq</Link></li>
            <li><Link href="/pricing" className="hover:text-red-600 transition-colors">pricing</Link></li>
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
                POSTCARDS 📮
              </h1>
              <p
                className="text-xl md:text-2xl"
                style={{ fontFamily: "var(--font-caveat), cursive" }}
              >
                Messages from the lab. Click to flip, just like a real postcard.
              </p>
            </div>
          </motion.div>

          {/* Postcards Grid */}
          <div className="grid gap-12">
            {postcards.map((postcard, index) => (
              <motion.div
                key={postcard.id}
                className="mx-auto max-w-lg w-full cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.15 }}
                onClick={() => toggleFlip(postcard.id)}
                style={{ perspective: "1000px" }}
              >
                {/* Date label */}
                <div
                  className="mb-2 text-sm text-center"
                  style={{ fontFamily: "var(--font-caveat), cursive" }}
                >
                  {postcard.date}
                </div>

                <motion.div
                  className="relative w-full"
                  style={{
                    transformStyle: "preserve-3d",
                    transition: "transform 0.6s"
                  }}
                  animate={{ rotateY: flippedCards[postcard.id] ? 180 : 0 }}
                >
                  {/* FRONT */}
                  <div
                    className="bg-white p-4 border-4 border-black shadow-brutal -rotate-1"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    {postcard.frontType === "image" && postcard.image ? (
                      <div className="relative aspect-[4/3] mb-4 overflow-hidden border-2 border-black">
                        <Image
                          src={postcard.image}
                          alt={postcard.imageAlt || ""}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      </div>
                    ) : (
                      <div className="relative aspect-[4/3] mb-4 overflow-hidden border-2 border-black bg-gradient-to-br from-green-100 to-blue-50 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-8xl md:text-9xl mb-2">{postcard.emoji}</div>
                          {postcard.emojiLabel && (
                            <div
                              className="text-sm md:text-base font-bold uppercase tracking-widest"
                              style={{ fontFamily: "var(--font-bebas), sans-serif", color: "#1a365d" }}
                            >
                              {postcard.emojiLabel}
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    <div className="text-center">
                      <h2
                        className="text-3xl md:text-4xl font-bold leading-tight -rotate-1"
                        style={{ fontFamily: "var(--font-caveat), cursive", color: "#1a365d" }}
                      >
                        {postcard.headline}
                      </h2>
                    </div>
                  </div>

                  {/* BACK */}
                  <div
                    className="absolute inset-0 p-4 border-4 border-black shadow-brutal rotate-1"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                      backgroundColor: "#fffef9"
                    }}
                  >
                    <div
                      className="h-full flex flex-col justify-center leading-tight"
                      style={{ fontFamily: "var(--font-caveat), cursive", color: "#1a365d" }}
                    >
                      <PostcardBack lines={postcard.backLines} />
                      <p className="text-sm md:text-base mt-3">
                        🚀 Let&apos;s build something. Seriously. ❤️
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Flip hint */}
                <p
                  className="text-center text-xs mt-3 opacity-50"
                  style={{ fontFamily: "var(--font-caveat), cursive" }}
                >
                  click to flip →
                </p>
              </motion.div>
            ))}
          </div>

          {/* Empty state hint for future postcards */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="inline-block bg-yellow-200 p-6 border-2 border-black shadow-brutal rotate-1">
              <p
                className="text-xl"
                style={{ fontFamily: "var(--font-caveat), cursive" }}
              >
                More postcards coming as we ship more stuff. Stay tuned! 📬
              </p>
            </div>
          </motion.div>

          <LegalFooter />
        </div>
      </div>
    </main>
  );
}
