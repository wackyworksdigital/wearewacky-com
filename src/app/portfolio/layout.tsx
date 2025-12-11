import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Wacky Works Digital - AI & Automation Projects",
  description: "Real projects: n8n cloud hosting, AI agents, Shopify automation, self-hosted learning platforms, RAG knowledge bases, Next.js websites, and more. See what we've built.",
  keywords: [
    "n8n projects",
    "AI automation portfolio",
    "Shopify automation",
    "workflow automation examples",
    "Next.js portfolio",
    "AI agent case studies",
    "self-hosted platforms",
    "digital agency portfolio UK",
  ],
  openGraph: {
    title: "Portfolio | Wacky Works Digital",
    description: "Real projects we've built: AI agents, automation workflows, websites, and more. Currently working on a WordPress to Next.js migration.",
    url: "https://wearewacky.com/portfolio",
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

