import { Metadata } from "next";
import { AboutHero } from "@/components/sections/about-hero";

export const metadata: Metadata = {
  title: "About | Wacky Works Digital",
  description: "Meet our totally real team. Not AI generated at all. We promise.",
};

export default function AboutPage() {
  return (
    <main className="relative">
      {/* Just the video + stacking text joke - nothing else */}
      <AboutHero />
    </main>
  );
}
