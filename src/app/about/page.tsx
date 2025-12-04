import { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { AboutContent } from "@/components/sections/about-content";
import { Footer } from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "About | Wacky Works Digital",
  description: "Our story: From WordPress agency to Custom Automation & SaaS Studio. Learn about our philosophy, values, and the team behind Wacky Works Digital.",
};

export default function AboutPage() {
  return (
    <main className="relative noise">
      <PageHeader
        badge="Our Story"
        title="From WordPress to"
        highlight="Revenue Engines"
        description="We started as a standard web design agency. Then we discovered what businesses really need: systems that generate revenue on autopilot."
      />
      <AboutContent />
      <Footer />
    </main>
  );
}

