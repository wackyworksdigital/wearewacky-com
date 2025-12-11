import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Get a Quote for AI & Automation",
  description: "Get in touch about AI agents, n8n workflow automation, Next.js websites, or any digital project. UK-based, working worldwide. Free initial consultation.",
  keywords: [
    "hire AI automation agency",
    "n8n consultant quote",
    "automation agency contact",
    "AI development agency UK contact",
    "Next.js developers UK hire",
    "workflow automation consultation",
  ],
  alternates: {
    canonical: "https://wearewacky.com/contact",
  },
  openGraph: {
    title: "Contact Wacky Works Digital",
    description: "Let's talk about AI agents, automation, and websites. UK-based, working worldwide.",
    url: "https://wearewacky.com/contact",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

