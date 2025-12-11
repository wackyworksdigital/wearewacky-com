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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
