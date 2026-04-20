"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { QRCodeSVG } from "qrcode.react";
import { LegalFooter } from "@/components/ui/legal-footer";

const TEXT = "#3d3428";
const BG = "#f0eadd";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [heroFlipped, setHeroFlipped] = useState(false);
  const [scanLoginFlipped, setScanLoginFlipped] = useState(false);

  // Whack-a-Bot Game State (below the fold)
  const [whackScore, setWhackScore] = useState(0);
  const [whackTime, setWhackTime] = useState(30);
  const [whackGameActive, setWhackGameActive] = useState(false);
  const [activeMole, setActiveMole] = useState<number | null>(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [idleMole, setIdleMole] = useState<number | null>(null);

  const startSecretGame = () => {
    setGameStarted(true);
    setWhackScore(0);
    setWhackTime(30);
    setWhackGameActive(true);
    setIdleMole(null);
    setActiveMole(null);
  };

  const whackMole = (index: number) => {
    if (!gameStarted) {
      if (idleMole === index) {
        startSecretGame();
        setWhackScore(1);
      }
      return;
    }
    if (whackGameActive && activeMole === index) {
      setWhackScore(prev => prev + 1);
      setActiveMole(null);
    }
  };

  // Timer countdown
  useEffect(() => {
    if (whackGameActive && whackTime > 0) {
      const timer = setInterval(() => {
        setWhackTime(prev => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (whackTime === 0) {
      setWhackGameActive(false);
    }
  }, [whackGameActive, whackTime]);

  // Mole appearance during game
  useEffect(() => {
    if (whackGameActive) {
      const moleInterval = setInterval(() => {
        setActiveMole(Math.floor(Math.random() * 9));
        setTimeout(() => setActiveMole(null), 600);
      }, 1200);
      return () => clearInterval(moleInterval);
    }
  }, [whackGameActive]);

  // Idle robot appearance (before game starts)
  useEffect(() => {
    if (!gameStarted) {
      const idleInterval = setInterval(() => {
        setIdleMole(Math.floor(Math.random() * 9));
        setTimeout(() => setIdleMole(null), 2000);
      }, 5000);
      return () => clearInterval(idleInterval);
    }
  }, [gameStarted]);

  return (
    <main className="relative min-h-[105vh] pb-0 overflow-x-hidden" style={{ backgroundColor: BG, color: TEXT }}>

      {/* NEW WACKY MENU - Desktop */}
      <nav className="hidden lg:block fixed top-10 left-10 z-50 pointer-events-none">
        <div className="pointer-events-auto relative bg-paper-white p-4 lg:p-6 shadow-brutal -rotate-1 hover:rotate-0 transition-transform duration-300 border-2 border-black group">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-12 tape-effect rotate-0 z-10" />
          <ul className="flex flex-col gap-4 text-lg lg:text-xl font-bold lowercase">
            <li>
              <span className="bg-black text-white px-2 -ml-2 skew-x-[-10deg] inline-block">
                home
              </span>
            </li>
            <li>
              <Link href="/about" className="hover:text-red-600 hover:tracking-widest transition-[color,letter-spacing] duration-200 inline-block">
                about
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-red-600 hover:tracking-widest transition-[color,letter-spacing] duration-200 inline-block">
                services
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="hover:text-red-600 hover:tracking-widest transition-[color,letter-spacing] duration-200 inline-block">
                portfolio
              </Link>
            </li>
            <li>
              <Link href="/postcards" className="hover:text-red-600 hover:tracking-widest transition-[color,letter-spacing] duration-200 inline-block">
                postcards
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-red-600 hover:tracking-widest transition-[color,letter-spacing] duration-200 inline-block">
                blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-red-600 hover:tracking-widest transition-[color,letter-spacing] duration-200 inline-block">
                contact
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-red-600 hover:tracking-widest transition-[color,letter-spacing] duration-200 inline-block">
                faq
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-red-600 hover:tracking-widest transition-[color,letter-spacing] duration-200 inline-block">
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
            <li><span className="bg-black text-white px-2">home</span></li>
            <li><Link href="/about" className="hover:text-red-600 transition-colors">about</Link></li>
            <li><Link href="/services" className="hover:text-red-600 transition-colors">services</Link></li>
            <li><Link href="/portfolio" className="hover:text-red-600 transition-colors">portfolio</Link></li>
            <li><Link href="/postcards" className="hover:text-red-600 transition-colors">postcards</Link></li>
            <li><Link href="/blog" className="hover:text-red-600 transition-colors">blog</Link></li>
            <li><Link href="/contact" className="hover:text-red-600 transition-colors">contact</Link></li>
            <li><Link href="/faq" className="hover:text-red-600 transition-colors">faq</Link></li>
            <li><Link href="/pricing" className="hover:text-red-600 transition-colors">pricing</Link></li>
          </ul>
        </div>
      )}

      {/* Brand Badge - Top Right - Desktop only */}
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

      {/* HERO SECTION */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 pt-20 md:pt-40 lg:pt-12 pb-5">
        <div className="w-full max-w-6xl isolate">

          {/* Big title */}
          <motion.div
            className="mb-8 md:mb-12 relative text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-8xl lg:text-[140px] font-black tracking-tighter leading-[0.9]">
              <span className="inline-block animate-wiggle-slow">
                WE
              </span>{" "}
              <span className="inline-block text-outline animate-wiggle-slow-reverse">
                BUILD
              </span>
              <br />
              <span className="relative inline-block animate-pulse-subtle" style={{ color: "#ff4757" }}>
                STUFF
                <span className="absolute -top-8 -right-12 text-3xl rotate-12 animate-wiggle">
                  💥
                </span>
              </span>
            </h1>

          </motion.div>

          {/* SCAN LOGIN — Flip Polaroid Hero */}
          <motion.div
            className="mb-10 mx-auto px-4 max-w-lg cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            onClick={() => setScanLoginFlipped(!scanLoginFlipped)}
            style={{ perspective: "1000px" }}
          >
            <motion.div
              className="relative w-full"
              style={{
                transformStyle: "preserve-3d",
                transition: "transform 0.6s"
              }}
              animate={{ rotateY: scanLoginFlipped ? 180 : 0 }}
            >
              {/* FRONT - Barcode Polaroid */}
              <div
                className="bg-white p-4 border-4 border-black shadow-brutal rotate-1"
                style={{ backfaceVisibility: "hidden" }}
              >
                <div className="relative aspect-[4/3] mb-4 overflow-hidden border-2 border-black bg-black flex items-center justify-center p-6">
                  <QRCodeSVG
                    value="https://wearewacky.com/scanlogin"
                    size={220}
                    bgColor="#000000"
                    fgColor="#ffffff"
                    level="M"
                    className="w-full h-full max-w-[70%] max-h-[90%]"
                  />
                </div>

                <div className="text-center">
                  <h2
                    className="text-3xl md:text-4xl font-bold leading-tight rotate-1"
                    style={{ fontFamily: "var(--font-caveat), cursive", color: "#1a365d" }}
                  >
                    scan it.... i dare you!
                  </h2>
                </div>
              </div>

              {/* BACK - Handwritten Scan Login Message */}
              <div
                className="absolute inset-0 p-4 border-4 border-black shadow-brutal -rotate-1"
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
                  <p className="text-base md:text-lg font-bold">So we built a little Android app.</p>
                  <p className="text-sm md:text-base">It&apos;s called Scan Login.</p>
                  <p className="text-sm md:text-base mt-1">Your warehouse User ID and Password — as barcodes.</p>
                  <p className="text-base md:text-lg font-bold underline">No more typing with gloves on.</p>
                  <p className="text-xs md:text-sm mt-1">Tap the lock screen notification. Scan. Done.</p>
                  <p className="text-sm md:text-base font-bold mt-1">Free. No accounts. No internet.</p>
                  <p className="text-xs md:text-sm">Nothing leaves your phone.</p>
                  <p className="text-sm md:text-base font-bold mt-2">Built for the chiller. Tested at 3°C.</p>
                  <p className="text-sm md:text-base font-bold underline">Coming to the Play Store soon.</p>
                  <p className="text-sm md:text-base mt-2">
                    🏷️ <Link href="/scanlogin" className="underline hover:text-red-600">wearewacky.com/scanlogin</Link> ❤️
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* SCAN LOGIN — Prominent CTA Banner */}
          <motion.div
            className="perf-section mb-16 mx-auto max-w-2xl px-4 py-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            <Link href="/scanlogin">
              <div className="relative bg-black text-white p-8 md:p-10 border-4 border-black shadow-brutal hover:shadow-brutal-lg hover:-translate-x-1 hover:-translate-y-1 transition-[box-shadow,transform] duration-200 cursor-pointer -rotate-1 hover:rotate-0">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="text-center md:text-left flex-1">
                    <p className="text-sm font-bold uppercase tracking-widest mb-2 opacity-75">New App</p>
                    <h3
                      className="text-3xl md:text-4xl font-black leading-tight mb-3"
                      style={{ fontFamily: "var(--font-bebas), sans-serif" }}
                    >
                      SCAN LOGIN — YOUR LOGIN, AS A BARCODE
                    </h3>
                    <p
                      className="text-base md:text-lg opacity-90"
                      style={{ fontFamily: "var(--font-caveat), cursive" }}
                    >
                      For warehouse workers who&apos;d rather not type with cold gloves on. Free. Offline. Android.
                    </p>
                  </div>
                  <div className="shrink-0 bg-white text-black px-6 py-3 font-black uppercase text-sm border-2 border-black">
                    Check it out →
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* FLIP CARD HERO - "MEET THE AGENCY" POSTCARD */}
          <motion.div
            className="mb-16 mx-auto px-4 max-w-lg cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            onClick={() => setHeroFlipped(!heroFlipped)}
            style={{ perspective: "1000px" }}
          >
            <motion.div
              className="relative w-full"
              style={{
                transformStyle: "preserve-3d",
                transition: "transform 0.6s"
              }}
              animate={{ rotateY: heroFlipped ? 180 : 0 }}
            >
              {/* FRONT - Five-agent Team Polaroid */}
              <div
                className="bg-white p-4 border-4 border-black shadow-brutal -rotate-1"
                style={{ backfaceVisibility: "hidden" }}
              >
                <div className="relative aspect-[16/9] mb-4 overflow-hidden border-2 border-black">
                  <Image
                    src="/images/the-agency-group.webp"
                    alt="The Agency — Jess the receptionist, Sarah the social media manager, Freddie the UK tax advisor, Rosie the researcher, and Benny the sales advisor, standing as a team in a modern studio"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                <div className="text-center">
                  <h2
                    className="text-3xl md:text-4xl font-bold leading-tight -rotate-1"
                    style={{ fontFamily: "var(--font-caveat), cursive", color: "#1a365d" }}
                  >
                    meet the agency. your ai team.
                  </h2>
                </div>
              </div>

              {/* BACK - Handwritten The Agency Message */}
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
                  <p className="text-base md:text-lg font-bold">So we built an AI team.</p>
                  <p className="text-sm md:text-base">Jess runs your front desk.</p>
                  <p className="text-sm md:text-base">Sarah runs your social.</p>
                  <p className="text-sm md:text-base">Freddie runs your numbers.</p>
                  <p className="text-xs md:text-sm mt-1">Rosie + Benny coming soon — research + sales.</p>
                  <p className="text-base md:text-lg font-bold underline mt-1">One dashboard. One team. $49/mo.</p>
                  <p className="text-xs md:text-sm mt-1">They share an inbox, a calendar, and each other.</p>
                  <p className="text-sm md:text-base font-bold mt-1">Not another chatbot. An actual team.</p>
                  <p className="text-xs md:text-sm">Working while you sleep, eat, or go to Brighton.</p>
                  <p className="text-sm md:text-base font-bold mt-2">Your next hire doesn&apos;t need a salary.</p>
                  <p className="text-sm md:text-base font-bold underline">the agency gets the job done.</p>
                  <p className="text-sm md:text-base mt-2">
                    🤖 <Link href="/theagency" className="underline hover:text-red-600">wearewacky.com/theagency</Link> ❤️
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* HEY JESS — Prominent CTA Banner */}
          <motion.div
            className="perf-section mb-16 mx-auto max-w-2xl px-4 py-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
          >
            <Link href="/theagency">
              <div className="relative bg-[#1a365d] text-white p-8 md:p-10 border-4 border-black shadow-brutal hover:shadow-brutal-lg hover:-translate-x-1 hover:-translate-y-1 transition-[box-shadow,transform] duration-200 cursor-pointer rotate-1 hover:rotate-0">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="text-center md:text-left flex-1">
                    <p className="text-sm font-bold uppercase tracking-widest mb-2 opacity-75">New Product</p>
                    <h3
                      className="text-3xl md:text-4xl font-black leading-tight mb-3"
                      style={{ fontFamily: "var(--font-bebas), sans-serif" }}
                    >
                      MEET THE AGENCY — YOUR AI TEAM
                    </h3>
                    <p
                      className="text-base md:text-lg opacity-90"
                      style={{ fontFamily: "var(--font-caveat), cursive" }}
                    >
                      Jess runs your front desk. Sarah runs your social. Freddie runs your numbers. One dashboard. From $49/mo.
                    </p>
                  </div>
                  <div className="shrink-0 bg-white text-[#1a365d] px-6 py-3 font-black uppercase text-sm border-2 border-black">
                    Check it out →
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            className="perf-section text-center mb-16 relative py-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div
              className="mb-4 text-3xl animate-bounce-subtle"
              style={{ fontFamily: "var(--font-marker), cursive", color: TEXT }}
            >
              ↓ click me!
            </div>

            <Link href="/services">
              <motion.div
                className="inline-block bg-black text-white p-8 md:p-12 border-4 border-black shadow-brutal-lg hover:shadow-brutal hover:translate-x-2 hover:translate-y-2 transition-[box-shadow,transform] duration-200 cursor-pointer"
                whileHover={{ rotate: -2 }}
              >
                <h2 className="text-4xl md:text-6xl font-black uppercase">
                  SEE WHAT<br />WE DO
                </h2>
              </motion.div>
            </Link>
          </motion.div>

          {/* Slogan */}
          <motion.div
            className="perf-section text-center mb-16 py-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
          >
            <div className="inline-block bg-white p-8 md:p-10 border-4 border-black shadow-brutal rotate-1 max-w-2xl">
              <h3
                className="text-3xl md:text-5xl font-black uppercase leading-tight mb-1"
                style={{ fontFamily: "var(--font-bebas), sans-serif" }}
              >
                WE'RE NOT<br />FOR EVERYONE
              </h3>
              <p
                className="text-xl md:text-2xl -rotate-1"
                style={{ fontFamily: "var(--font-caveat), cursive" }}
              >
                and that's the point. honestly!
              </p>
            </div>
          </motion.div>

          {/* Bottom info card */}
          <motion.div
            className="perf-section text-center py-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <div className="inline-block bg-green-300 p-6 border-2 border-black shadow-brutal rotate-1 max-w-2xl">
              <p
                className="text-lg md:text-xl leading-snug"
                style={{ fontFamily: "var(--font-caveat), cursive" }}
              >
                UK-based • worldwide clients • 100% real humans
              </p>
              <p
                className="text-sm mt-1"
                style={{ fontFamily: "var(--font-caveat), cursive" }}
              >
                (we work WITH robots, not AS robots)
              </p>
              <div className="flex justify-center gap-4 mt-3 text-3xl">
                <span className="animate-pulse-subtle">🇬🇧</span>
                <span className="animate-spin-slow">🌍</span>
                <span className="animate-wiggle">👨‍💻</span>
              </div>
            </div>
          </motion.div>

          {/* WHACK-A-BOT GAME - Below the fold */}
          <motion.div
            className="perf-section mt-20 mb-16 mx-auto px-4 max-w-md py-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white p-6 border-4 border-black shadow-brutal -rotate-1">

              {/* Header - always show title */}
              <div className="flex justify-between items-center mb-4 pb-3 border-b-2 border-black">
                <div>
                  <h3
                    className="text-xl md:text-2xl font-black uppercase"
                    style={{ fontFamily: "var(--font-bebas), sans-serif" }}
                  >
                    {gameStarted ? "WHACK A BOT!" : "BORED?"}
                  </h3>
                  <p
                    className="text-xs"
                    style={{ fontFamily: "var(--font-caveat), cursive" }}
                  >
                    {!gameStarted
                      ? "spot the robot 👀"
                      : whackGameActive
                        ? "Quick! Tap them!"
                        : "Game Over!"}
                  </p>
                </div>
                {gameStarted && (
                  <div className="text-right">
                    <div className="text-2xl font-black">Score: {whackScore}</div>
                    <div className="text-lg font-mono">Time: {whackTime}s</div>
                  </div>
                )}
              </div>

              {/* Game Over Message */}
              {gameStarted && !whackGameActive && (
                <motion.div
                  className="mb-4 p-4 bg-yellow-200 border-2 border-black text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="text-xl font-black">Game Over!</div>
                  <div className="text-lg mb-2">Final Score: {whackScore}</div>
                  <button
                    onClick={() => startSecretGame()}
                    className="bg-black text-white px-6 py-2 text-sm font-black uppercase border-2 border-black shadow-brutal-sm hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-[box-shadow,transform] duration-200"
                  >
                    PLAY AGAIN
                  </button>
                </motion.div>
              )}

              {/* The Grid */}
              <div className="grid grid-cols-3 gap-3">
                {[...Array(9)].map((_, i) => {
                  const showRobot = gameStarted
                    ? activeMole === i
                    : idleMole === i;

                  return (
                    <button
                      key={i}
                      onClick={() => whackMole(i)}
                      disabled={!showRobot && !gameStarted}
                      className={`border-2 border-black aspect-square flex items-center justify-center text-3xl md:text-4xl transition-[background-color,transform] duration-150 disabled:cursor-default ${showRobot
                        ? 'bg-yellow-300 scale-110 cursor-pointer'
                        : 'bg-gradient-to-br from-green-100 to-blue-100'
                        }`}
                    >
                      {showRobot ? "🤖" : ""}
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Decorative elements — CSS animations (GPU composited, no JS) */}
          <div className="absolute top-40 right-10 text-6xl opacity-20 hidden lg:block pointer-events-none animate-spin-slow">
            ⚙️
          </div>
          <div className="absolute bottom-40 left-10 text-7xl opacity-20 hidden lg:block pointer-events-none animate-float">
            💡
          </div>

          {/* Legal Footer */}
          <LegalFooter />

        </div>
      </div>
    </main>
  );
}
