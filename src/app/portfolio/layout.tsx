import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI & Automation Projects Portfolio",
  description: "Real projects: n8n Google Cloud hosting, custom AI agents, Shopify blog automation, Etsy listing AI, company RAG systems, WordPress to Next.js migrations. UK agency, worldwide clients.",
  keywords: [
    "n8n hosting projects",
    "AI agent development portfolio",
    "Shopify automation examples",
    "workflow automation case studies",
    "WordPress to Next.js migration",
    "AI Etsy listing automation",
    "RAG knowledge base implementation",
    "self-hosted course platform",
    "n8n consultant UK",
  ],
  alternates: {
    canonical: "https://wearewacky.com/portfolio",
  },
  openGraph: {
    title: "AI & Automation Portfolio | Wacky Works Digital",
    description: "Real projects: n8n hosting, AI agents, Shopify automation, RAG systems. Currently working on a WordPress to Next.js migration.",
    url: "https://wearewacky.com/portfolio",
    type: "website",
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

