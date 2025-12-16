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
import { ExitIntentPopup } from "@/components/ui/exit-popup";
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
      "@type": ["Organization", "LocalBusiness"],
      "@id": "https://wearewacky.com/#organization",
      name: "Wacky Works Digital",
      url: "https://wearewacky.com",
      logo: "https://wearewacky.com/logo.png",
      image: "https://wearewacky.com/og-image.png",
      description: "Custom Automation & SaaS Studio. We build digital assets that generate revenue, save time, and automate workflows.",
      foundingDate: "2024",
      areaServed: [
        { "@type": "Country", name: "United Kingdom" },
        { "@type": "Country", name: "Worldwide" },
        { "@type": "City", name: "London" },
        { "@type": "AdministrativeArea", name: "South London" },
        { "@type": "AdministrativeArea", name: "South East England" },
        { "@type": "AdministrativeArea", name: "Surrey" },
        { "@type": "City", name: "Croydon" },
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Coulsdon",
        addressRegion: "South London",
        postalCode: "CR5",
        addressCountry: "GB",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Customer Service",
        email: "hello@wearewacky.com",
        availableLanguage: ["English"],
      },
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
        "Photo Shoots",
        "Video Production",
      ],
      slogan: "We're not for everyone. And that's the point.",
      priceRange: "££-£££",
      openingHours: "Mo-Fr 09:00-17:00",
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
      "@type": "BreadcrumbList",
      "@id": "https://wearewacky.com/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://wearewacky.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "About",
          item: "https://wearewacky.com/about",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Services",
          item: "https://wearewacky.com/services",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Portfolio",
          item: "https://wearewacky.com/portfolio",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Contact",
          item: "https://wearewacky.com/contact",
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "FAQ",
          item: "https://wearewacky.com/faq",
        },
        {
          "@type": "ListItem",
          position: 7,
          name: "Pricing",
          item: "https://wearewacky.com/pricing",
        },
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
      offers: {
        "@type": "Offer",
        priceCurrency: "GBP",
        price: "500",
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: "500",
          priceCurrency: "GBP",
          description: "AI chatbots from £500, AI agents from £800",
        },
      },
    },
    {
      "@type": "Service",
      "@id": "https://wearewacky.com/services#automation",
      name: "Workflow Automation",
      provider: { "@id": "https://wearewacky.com/#organization" },
      description: "Connect your apps using n8n, Zapier, and Make.com. Google Cloud VMs, Docker hosting, zero subscription fees.",
      serviceType: "Business Automation",
      offers: {
        "@type": "Offer",
        priceCurrency: "GBP",
        price: "300",
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: "300",
          priceCurrency: "GBP",
          description: "Simple automations from £300, complex workflows from £800",
        },
      },
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
      offers: {
        "@type": "Offer",
        priceCurrency: "GBP",
        price: "500",
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: "500",
          priceCurrency: "GBP",
          description: "Landing pages from £500, full websites from £800",
        },
      },
    },
    {
      "@type": "Service",
      "@id": "https://wearewacky.com/services#ecommerce",
      name: "E-commerce",
      provider: { "@id": "https://wearewacky.com/#organization" },
      description: "Shopify stores, product listings, checkout optimization, automated blog posts, Etsy listing automation.",
      serviceType: "E-commerce Development",
      offers: {
        "@type": "Offer",
        priceCurrency: "GBP",
        price: "800",
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: "800",
          priceCurrency: "GBP",
          description: "Shopify store setup from £800",
        },
      },
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
    {
      "@type": "Service",
      "@id": "https://wearewacky.com/services#photo-video",
      name: "Photo & Video Production",
      provider: { "@id": "https://wearewacky.com/#organization" },
      description: "Professional photo and video shoots for London and South East England businesses. Product photography, brand videos, social media content. Based in South London, covering Greater London, Surrey, Kent, Sussex, and Hampshire.",
      serviceType: "Photography",
      areaServed: [
        {
          "@type": "GeoCircle",
          geoMidpoint: {
            "@type": "GeoCoordinates",
            latitude: 51.3214,
            longitude: -0.1386,
            name: "Coulsdon, South London",
          },
          geoRadius: "64374", // 40 miles in meters
        },
        { "@type": "City", name: "London" },
        { "@type": "AdministrativeArea", name: "Greater London" },
        { "@type": "AdministrativeArea", name: "South East England" },
        { "@type": "AdministrativeArea", name: "Surrey" },
        { "@type": "AdministrativeArea", name: "Kent" },
        { "@type": "AdministrativeArea", name: "Sussex" },
        { "@type": "AdministrativeArea", name: "Hampshire" },
        { "@type": "AdministrativeArea", name: "Berkshire" },
      ],
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
        {
          "@type": "Question",
          name: "Where is Wacky Works Digital based?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We're based in Coulsdon, South London, UK. For digital services like AI agents, automation, and web development, we work with clients worldwide. For photo and video shoots, we cover a 40-mile radius including all of London, Surrey, Kent, Sussex, Hampshire, and Berkshire.",
          },
        },
        {
          "@type": "Question",
          name: "Do you offer photo and video shoots for businesses?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes! We offer professional photo and video production for businesses in London and South East England. Product photography, brand videos, social media content, and behind-the-scenes footage. Based in South London, we cover Greater London, Surrey, Kent, Sussex, Hampshire, and Berkshire.",
          },
        },
        {
          "@type": "Question",
          name: "How much does a business website cost in the UK?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A professional business website typically costs £2,000-£10,000 in the UK. Basic brochure sites start around £2,000, while e-commerce stores with custom features range £5,000-£15,000. We build with Next.js and React for speed and SEO - no WordPress maintenance nightmares.",
          },
        },
        {
          "@type": "Question",
          name: "Can you automate my Shopify store?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely! We automate Shopify stores with AI-powered blog posts, inventory syncing, order processing, customer emails, review requests, and even cross-listing to Etsy and Amazon. Most store owners save 10-20 hours per week after automation.",
          },
        },
        {
          "@type": "Question",
          name: "What's the best automation tool for small businesses?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It depends on your needs. Zapier is easiest for beginners with 6,000+ app integrations. Make.com offers powerful visual workflows at lower cost. n8n is self-hosted with zero per-task fees - best for scaling. We help you choose and set up the right tool for your specific workflows.",
          },
        },
        {
          "@type": "Question",
          name: "Do you build mobile apps?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes! We build mobile apps using React Native for both iOS and Android from a single codebase. Also web apps, PWAs, and full SaaS platforms. From initial idea through app store submission and beyond.",
          },
        },
        {
          "@type": "Question",
          name: "How do I get started with AI for my business?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Start with one specific pain point - customer support queries, content creation, data entry, or repetitive admin tasks. We offer free discovery calls to identify quick wins that deliver ROI within weeks, not months. Most businesses see results from their first AI automation within 2-4 weeks.",
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
        className={`${archivo.variable} ${syne.variable} ${dmSerif.variable} ${spaceGrotesk.variable} ${playfair.variable} ${bebas.variable} ${marker.variable} ${caveat.variable} ${kalam.variable} antialiased overflow-x-hidden`}
      >
        <LenisProvider>
          {children}
          <ExitIntentPopup />
        </LenisProvider>
      </body>
    </html>
  );
}
