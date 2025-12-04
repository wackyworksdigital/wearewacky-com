import { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { PortfolioContent } from "@/components/sections/portfolio-content";
import { Footer } from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "Portfolio | Wacky Works Digital",
  description: "See our work: AI Course Platform, automation projects, and more. Real results from real projects.",
};

export default function PortfolioPage() {
  return (
    <main className="relative noise">
      <PageHeader
        badge="Our Work"
        title="Projects That"
        highlight="Deliver Results"
        description="Every project we take on is designed to generate measurable outcomes. Here's proof."
      />
      <PortfolioContent />
      <Footer />
    </main>
  );
}

