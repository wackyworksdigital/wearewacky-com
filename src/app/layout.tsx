import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Geist_Mono, Cormorant_Garamond, Space_Grotesk, Playfair_Display } from "next/font/google";
import { LenisProvider } from "@/components/providers/lenis-provider";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Unusual serif font - elegant but quirky
const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

// Different sans for services ticker
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

// Stylish, trendy serif for menu items
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakarta.variable} ${geistMono.variable} ${cormorant.variable} ${spaceGrotesk.variable} ${playfair.variable} antialiased`}
      >
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
