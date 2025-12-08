import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact | Wacky Works Digital",
  description: "Get in touch with Wacky Works Digital.",
};

const accents = {
  bg: "#f5ebe0",
  text: "#3d3428",
  accent: "#B07C4F",
  offwhite: "#F7F4ED",
};

export default function ContactPage() {
  return (
    <main className="relative min-h-screen" style={{ backgroundColor: accents.bg, color: accents.text }}>
      {/* Noise + vignette */}
      <div
        className="fixed inset-0 pointer-events-none mix-blend-overlay"
        style={{
          opacity: 0.12,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
      <div
        className="fixed inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(0,0,0,0.08) 100%)" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 space-y-12">
        <div className="space-y-3 text-center">
          <p className="text-sm uppercase tracking-[0.35em]" style={{ color: accents.accent }}>
            contact
          </p>
          <h1 className="text-4xl md:text-6xl font-black" style={{ fontFamily: "var(--font-space), Impact, sans-serif", color: accents.text, textShadow: "0 6px 24px rgba(0,0,0,0.2)" }}>
            Let’s talk
          </h1>
          <p className="text-lg opacity-75 max-w-2xl mx-auto">
            Tell us about your project or idea. We’ll respond within one business day.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact form mock */}
          <div className="bg-white/6 backdrop-blur rounded-2xl p-6 shadow-[0_12px_30px_rgba(0,0,0,0.18)] border border-white/10 transition duration-200 hover:shadow-[0_16px_40px_rgba(0,0,0,0.24)] hover:-translate-y-1">
            <h2 className="text-xl font-semibold mb-4" style={{ color: accents.text }}>
              Drop us a line
            </h2>
            <form className="space-y-4">
              <div>
                <label className="text-sm opacity-80">Name</label>
                <input
                  className="w-full mt-1 rounded-lg px-4 py-3 bg-white/30 border border-white/30 focus:outline-none focus:ring-2 focus:ring-[rgba(176,124,79,0.6)] transition"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-sm opacity-80">Email</label>
                <input
                  className="w-full mt-1 rounded-lg px-4 py-3 bg-white/30 border border-white/30 focus:outline-none focus:ring-2 focus:ring-[rgba(176,124,79,0.6)] transition"
                  placeholder="you@example.com"
                  type="email"
                />
              </div>
              <div>
                <label className="text-sm opacity-80">Message</label>
                <textarea
                  className="w-full mt-1 rounded-lg px-4 py-3 bg-white/30 border border-white/30 focus:outline-none focus:ring-2 focus:ring-[rgba(176,124,79,0.6)] transition"
                  rows={4}
                  placeholder="How can we help?"
                />
              </div>
              <button
                type="button"
                className="w-full rounded-lg py-3 font-semibold text-white"
                style={{ background: accents.accent, boxShadow: "0 12px 24px rgba(0,0,0,0.2)" }}
              >
                Send
              </button>
            </form>
          </div>

          {/* Quick links / info */}
          <div className="space-y-6">
            <div className="bg-white/6 backdrop-blur rounded-2xl p-6 shadow-[0_12px_30px_rgba(0,0,0,0.18)] border border-white/10 transition duration-200 hover:shadow-[0_16px_40px_rgba(0,0,0,0.24)] hover:-translate-y-1">
              <h3 className="text-lg font-semibold mb-3" style={{ color: accents.text }}>
                Quick contact
              </h3>
              <ul className="space-y-2 text-lg">
                <li><Link href="mailto:hello@wackyworks.digital" className="hover:opacity-80">hello@wackyworks.digital</Link></li>
                <li><Link href="https://wa.me/123456789" className="hover:opacity-80">WhatsApp</Link></li>
              </ul>
            </div>

            <div className="bg-white/6 backdrop-blur rounded-2xl p-6 shadow-[0_12px_30px_rgba(0,0,0,0.18)] border border-white/10 transition duration-200 hover:shadow-[0_16px_40px_rgba(0,0,0,0.24)] hover:-translate-y-1">
              <h3 className="text-lg font-semibold mb-3" style={{ color: accents.text }}>
                Office hours
              </h3>
              <p className="opacity-75">Mon–Fri · 9am–6pm (UK)</p>
              <p className="opacity-75">Response within 1 business day</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

