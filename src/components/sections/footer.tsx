"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, Twitter, Linkedin, Mail, MessageCircle } from "lucide-react";

const links = {
  products: [
    { name: "Learn Our Secrets", href: "https://courses.wearewacky.com" },
    { name: "Robot Training", href: "/services#automation" },
    { name: "Website Wizardry", href: "/services#apps" },
  ],
  resources: [
    { name: "Our Code (Yes, Really)", href: "https://github.com/wackyworksdigital" },
    { name: "Yell At Us", href: "/contact" },
  ],
  company: [
    { name: "Who Are We?", href: "/about" },
    { name: "What We Do", href: "/services" },
    { name: "Proof We're Good", href: "/portfolio" },
    { name: "Summon Us", href: "/contact" },
  ],
};

const socials = [
  { name: "GitHub", icon: Github, href: "https://github.com/wackyworksdigital" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com/wearewacky" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/wackyworksdigital" },
  { name: "WhatsApp", icon: MessageCircle, href: "https://wa.me/447460460318" },
  { name: "Email", icon: Mail, href: "mailto:hello@wearewacky.com" },
];

export function Footer() {
  return (
    <footer className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-charcoal text-white">
      {/* Top Border Gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple/50 to-transparent" />
      
      <div className="max-w-5xl mx-auto px-6 py-20 w-full">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.a
              href="/"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block mb-6"
            >
              <Image
                src="/Wacky Works Digital transparent logo colour - 4096x4096.png"
                alt="Wacky Works Digital"
                width={180}
                height={50}
                className="h-12 w-auto brightness-0 invert"
              />
            </motion.a>
            <p className="text-white/60 mb-6 max-w-sm">
              A small team of humans (and one dog) who build digital things 
              that actually work. Based nowhere and everywhere. Probably caffeinated.
            </p>
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-white/60 hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Cool Stuff</h4>
            <ul className="space-y-3">
              {links.products.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Useful Links</h4>
            <ul className="space-y-3">
              {links.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">The Boring Stuff</h4>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Wacky Works Digital. Made with questionable amounts of coffee.
          </p>
          <div className="flex gap-6 text-sm text-white/40">
            <a href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
