import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Wacky Works Digital - AI Agents, Automation, Web Development",
  description: "AI agents, workflow automation with n8n, RAG knowledge systems, Next.js websites, Shopify e-commerce, AI content creation, branding, and self-hosted solutions. UK-based, working worldwide.",
  keywords: [
    "AI agents UK",
    "n8n automation",
    "workflow automation",
    "Next.js development",
    "Shopify agency",
    "RAG knowledge base",
    "AI content creation",
    "self-hosted n8n",
    "digital agency UK",
  ],
  openGraph: {
    title: "Services | Wacky Works Digital",
    description: "AI agents, automation, websites, e-commerce, and more. We build digital assets that work while you sleep.",
    url: "https://wearewacky.com/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

