import type { Metadata } from "next";
import { 
  Space_Grotesk, 
  Playfair_Display, 
  Bebas_Neue, 
  Permanent_Marker,
  Archivo_Black,
  Syne,
  DM_Serif_Display,
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

export const metadata: Metadata = {
  title: "Wacky Works Digital | We Build Revenue Engines",
  description:
    "Custom Automation & SaaS Studio. We build Digital Assets that generate revenue, save time, and automate your workflows. Next.js, Supabase, n8n, AI Agents.",
  keywords: [
    "automation",
    "saas",
    "next.js",
    "ai courses",
    "n8n",
    "digital agency",
    "web development",
    "uk",
  ],
  authors: [{ name: "Wacky Works Digital" }],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://wearewacky.com",
    siteName: "Wacky Works Digital",
    title: "Wacky Works Digital | We Build Revenue Engines",
    description:
      "Custom Automation & SaaS Studio. We build Digital Assets that generate revenue, save time, and automate your workflows.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wacky Works Digital | We Build Revenue Engines",
    description:
      "Custom Automation & SaaS Studio. We build Digital Assets that generate revenue, save time, and automate your workflows.",
    creator: "@wearewacky",
  },
  robots: {
    index: true,
    follow: true,
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
        "https://twitter.com/wearewacky",
        "https://github.com/wackyworksdigital",
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
        className={`${archivo.variable} ${syne.variable} ${dmSerif.variable} ${spaceGrotesk.variable} ${playfair.variable} ${bebas.variable} ${marker.variable} antialiased`}
      >
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
