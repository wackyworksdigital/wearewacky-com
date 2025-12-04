import { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { ServicesContent } from "@/components/sections/services-content";
import { Footer } from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "Services | Wacky Works Digital",
  description: "Education, SaaS Products, and Automation Consulting. Discover how we can help your business generate revenue and save time.",
};

export default function ServicesPage() {
  return (
    <main className="relative noise">
      <PageHeader
        badge="What We Do"
        title="Services That"
        highlight="Generate Results"
        description="We don't just build websites. We create digital assets that work for you around the clock."
      />
      <ServicesContent />
      <Footer />
    </main>
  );
}

