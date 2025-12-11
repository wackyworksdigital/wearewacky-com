import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Agents & Workflow Automation Services UK",
  description: "Custom AI agents, n8n workflow automation, RAG knowledge systems, Next.js websites, Shopify stores, and self-hosted solutions. UK digital agency helping businesses save 10-30 hours per week with automation.",
  keywords: [
    "AI agents UK",
    "n8n automation agency",
    "workflow automation consultant UK",
    "custom AI development",
    "Next.js agency UK",
    "Shopify automation",
    "RAG system implementation",
    "AI content creation",
    "self-hosted n8n setup",
    "business automation UK",
    "Zapier alternative",
  ],
  alternates: {
    canonical: "https://wearewacky.com/services",
  },
  openGraph: {
    title: "AI Agents & Automation Services | Wacky Works Digital",
    description: "Custom AI agents, n8n workflow automation, and modern web solutions. UK-based agency helping businesses automate and save 10-30 hours per week.",
    url: "https://wearewacky.com/services",
    type: "website",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

