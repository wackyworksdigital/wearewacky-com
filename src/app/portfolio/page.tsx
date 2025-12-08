import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Wacky Works Digital",
  description: "Portfolio page placeholder.",
};

export default function PortfolioPage() {
  return (
    <main className="relative min-h-screen bg-[#f5ebe0] text-[#3d3428]">
      <div className="fixed inset-0 pointer-events-none mix-blend-overlay" style={{ opacity: 0.12, backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }} />
      <div className="fixed inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(0,0,0,0.08) 100%)" }} />

      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-[#b07c4f]">portfolio</p>
          <h1 className="text-4xl md:text-6xl font-black" style={{ fontFamily: "var(--font-space), Impact, sans-serif" }}>
            Coming soon
          </h1>
          <p className="text-lg opacity-70">Showcase in progress.</p>
        </div>
      </div>
    </main>
  );
}
