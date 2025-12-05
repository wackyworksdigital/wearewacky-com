import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import { LenisProvider } from "@/components/providers/lenis-provider";
import { Navigation } from "@/components/layout/navigation";
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
        className={`${plusJakarta.variable} ${geistMono.variable} antialiased bg-cream text-charcoal`}
      >
        <LenisProvider>
          <Navigation />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
