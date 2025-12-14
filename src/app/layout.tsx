import type { Metadata } from "next";
import { 
  Space_Grotesk, 
  Playfair_Display, 
  Bebas_Neue, 
  Permanent_Marker,
  Archivo_Black,
  Syne,
  DM_Serif_Display,
  Caveat,
  Kalam,
} from "next/font/google";
import { LenisProvider } from "@/components/providers/lenis-provider";
import "./globals.css";

// WACKY DISPLAY - Bold, architectural, attention-grabbing headlines
const archivo = Archivo_Black({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400"],
});

// SYNE - Quirky, modern, unexpected geometric shapes
const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

// DM SERIF DISPLAY - Elegant but with personality for accents
const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

// Different sans for body text
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// Stylish serif for some areas
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

// Bold display font - impactful headlines
const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: ["400"],
});

// Handwritten marker style - wacky/playful
const marker = Permanent_Marker({
  variable: "--font-marker",
  subsets: ["latin"],
  weight: ["400"],
});

// Caveat - handwritten/cursive style for annotations
const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Kalam - another handwritten style (more informal notes)
const kalam = Kalam({
  variable: "--font-kalam",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wearewacky.com"),
  title: {
    default: "Wacky Works Digital | AI Agents & Workflow Automation Agency UK",
    template: "%s | Wacky Works Digital",
  },
  description:
    "UK digital agency building AI agents, n8n workflow automation, RAG systems, and Next.js websites. We help businesses automate tasks, save 10-30 hours per week, and build custom solutions that actually work.",
  keywords: [
    "AI agents UK",
    "n8n automation agency",
    "workflow automation UK",
    "Next.js agency",
    "RAG system development",
    "Zapier automation",
    "custom AI development",
    "business automation",
    "digital agency London",
    "Shopify automation",
  ],
  authors: [{ name: "Wacky Works Digital", url: "https://wearewacky.com" }],
  creator: "Wacky Works Digital",
  publisher: "Wacky Works Digital",
  alternates: {
    canonical: "https://wearewacky.com",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://wearewacky.com",
    siteName: "Wacky Works Digital",
    title: "Wacky Works Digital | AI Agents & Workflow Automation Agency UK",
    description:
      "UK digital agency building AI agents, n8n workflow automation, and modern web solutions. Save 10-30 hours per week with custom automation.",
    images: [{
      url: "/og-image.png",
      width: 1200,
      height: 630,
      alt: "Wacky Works Digital - AI Agents & Automation",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wacky Works Digital | AI Agents & Automation UK",
    description:
      "UK digital agency building AI agents, n8n workflow automation, and modern web solutions.",
    creator: "@wearewacky",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// JSON-LD Schema for SEO and AI search
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://wearewacky.com/#organization",
      name: "Wacky Works Digital",
      url: "https://wearewacky.com",
      logo: "https://wearewacky.com/logo.png",
      description: "Custom Automation & SaaS Studio. We build digital assets that generate revenue, save time, and automate workflows.",
      foundingDate: "2024",
      areaServed: "Worldwide",
      knowsAbout: [
        "AI Agents",
        "Workflow Automation",
        "n8n",
        "Zapier",
        "Next.js",
        "React",
        "Shopify",
        "RAG Systems",
        "Web Development",
        "App Development",
        "Branding",
      ],
      slogan: "We're not for everyone. And that's the point.",
      sameAs: [
        "https://www.instagram.com/wackyworksdigital/",
        "https://www.facebook.com/wackyworksdigital/",
        "https://www.threads.com/@wackyworksdigital",
        "https://x.com/wackywdigital",
        "https://uk.pinterest.com/wackyworksdigital/",
        "https://www.linkedin.com/company/109555093/",
        "https://www.tiktok.com/@wackyworksdigital",
        "https://www.youtube.com/channel/UCg5R_Elt0Li5gI2gyZi6ajw",
        "https://www.reddit.com/user/wackyworksdigital/",
        "https://www.twitch.tv/wackyworksdigital",
        "https://github.com/wackyworksdigital",
        "https://medium.com/@wackyworksdigital",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://wearewacky.com/#website",
      url: "https://wearewacky.com",
      name: "Wacky Works Digital",
      publisher: { "@id": "https://wearewacky.com/#organization" },
      inLanguage: "en-GB",
    },
    {
      "@type": "Service",
      "@id": "https://wearewacky.com/services#ai-agents",
      name: "AI Agents",
      provider: { "@id": "https://wearewacky.com/#organization" },
      description: "Custom AI assistants that handle customer support, data analysis, and repetitive tasks 24/7. Multi-agent setups with shared knowledge bases.",
      serviceType: "AI Development",
    },
    {
      "@type": "Service",
      "@id": "https://wearewacky.com/services#automation",
      name: "Workflow Automation",
      provider: { "@id": "https://wearewacky.com/#organization" },
      description: "Connect your apps using n8n, Zapier, and Make.com. Google Cloud VMs, Docker hosting, zero subscription fees.",
      serviceType: "Business Automation",
    },
    {
      "@type": "Service",
      "@id": "https://wearewacky.com/services#rag",
      name: "RAG & Knowledge Systems",
      provider: { "@id": "https://wearewacky.com/#organization" },
      description: "Turn documents into AI that knows your business. Living knowledge bases that constantly update themselves.",
      serviceType: "AI Development",
    },
    {
      "@type": "Service",
      "@id": "https://wearewacky.com/services#apps",
      name: "App Development",
      provider: { "@id": "https://wearewacky.com/#organization" },
      description: "Mobile apps, web apps, SaaS platforms. React Native, Next.js, modern tech stack.",
      serviceType: "Software Development",
    },
    {
      "@type": "Service",
      "@id": "https://wearewacky.com/services#websites",
      name: "Website Development",
      provider: { "@id": "https://wearewacky.com/#organization" },
      description: "Fast, modern websites built with Next.js and React. WordPress to Next.js migrations.",
      serviceType: "Web Development",
    },
    {
      "@type": "Service",
      "@id": "https://wearewacky.com/services#ecommerce",
      name: "E-commerce",
      provider: { "@id": "https://wearewacky.com/#organization" },
      description: "Shopify stores, product listings, checkout optimization, automated blog posts, Etsy listing automation.",
      serviceType: "E-commerce Development",
    },
    {
      "@type": "Service",
      "@id": "https://wearewacky.com/services#ai-content",
      name: "AI Content Creation",
      provider: { "@id": "https://wearewacky.com/#organization" },
      description: "AI-powered videos, images, blog posts, social media. Faceless YouTube channels, automated content pipelines.",
      serviceType: "Content Marketing",
    },
    {
      "@type": "Service",
      "@id": "https://wearewacky.com/services#branding",
      name: "Branding",
      provider: { "@id": "https://wearewacky.com/#organization" },
      description: "Full brand identity packages. Strategy, visual identity, tone of voice, 20+ social handles, complete setup.",
      serviceType: "Branding",
    },
    {
      "@type": "Service",
      "@id": "https://wearewacky.com/services#self-hosted",
      name: "Self-Hosted Tools",
      provider: { "@id": "https://wearewacky.com/#organization" },
      description: "n8n, Home Assistant, private AI on your own servers. Zero subscriptions, full data control.",
      serviceType: "IT Infrastructure",
    },
    // FAQPage schema for AI citations
    {
      "@type": "FAQPage",
      "@id": "https://wearewacky.com/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does AI workflow automation cost for a small business?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AI workflow automation typically costs £2,000-£15,000 for SMBs depending on complexity. Simple n8n or Zapier integrations start lower, while custom AI agent development requires larger investment. Most clients save 10-30 hours per week, delivering ROI within 2-3 months.",
          },
        },
        {
          "@type": "Question",
          name: "What's the difference between n8n and Zapier?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "n8n is self-hosted and open-source, giving you full control and significantly lower costs at scale with no per-task fees. Zapier is cloud-based with 6,000+ integrations but higher monthly fees. n8n suits technical teams wanting control; Zapier suits non-technical users wanting simplicity.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to build a custom AI agent?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A basic AI agent takes 2-4 weeks from brief to deployment. Complex multi-agent systems with shared knowledge bases take 6-12 weeks. We deliver working prototypes within the first week so you can test and iterate quickly.",
          },
        },
        {
          "@type": "Question",
          name: "Do you work with international clients?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we're UK-based but work with clients worldwide. Our robots work 24/7 across all timezones. We've delivered projects for clients in the US, Europe, and Asia-Pacific regions.",
          },
        },
        {
          "@type": "Question",
          name: "What is RAG and why do businesses use it?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "RAG (Retrieval-Augmented Generation) turns your company documents into an AI that knows your business. Instead of generic AI responses, RAG systems pull from your actual data - policies, procedures, product info - to give accurate, company-specific answers. Perfect for customer support, internal knowledge bases, and employee onboarding.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${archivo.variable} ${syne.variable} ${dmSerif.variable} ${spaceGrotesk.variable} ${playfair.variable} ${bebas.variable} ${marker.variable} ${caveat.variable} ${kalam.variable} antialiased`}
      >
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
