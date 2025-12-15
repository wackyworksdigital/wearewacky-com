"use client";

import Link from "next/link";

export function LegalFooter() {
  return (
    <footer className="mt-8 pt-6 pb-4 border-t-4 border-black">
      <div className="flex flex-wrap justify-center gap-6 text-sm">
        <Link href="/" className="hover:underline font-bold">Home</Link>
        <Link href="/privacy" className="hover:underline font-bold">Privacy Policy</Link>
        <Link href="/terms" className="hover:underline font-bold">Terms of Service</Link>
        <Link href="/contact" className="hover:underline font-bold">Contact</Link>
      </div>
      <p className="text-center mt-4 text-sm opacity-60">
        © {new Date().getFullYear()} Wacky Works Digital. Made with questionable amounts of coffee.
      </p>
    </footer>
  );
}

