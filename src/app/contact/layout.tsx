import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Wacky Works Digital - Let's Talk",
  description: "Get in touch about AI agents, workflow automation, websites, or any digital project. Based in UK, working worldwide. Every hour is office hour.",
  keywords: [
    "contact digital agency",
    "hire automation agency",
    "AI development agency UK",
    "n8n consultants",
    "Next.js developers UK",
  ],
  openGraph: {
    title: "Contact | Wacky Works Digital",
    description: "Let's talk about your project. AI, automation, websites - we're here to help.",
    url: "https://wearewacky.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

