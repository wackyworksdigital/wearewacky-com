"use client";

import { motion } from "framer-motion";
import { Sparkles, Github, Twitter, Linkedin, Mail, MessageCircle } from "lucide-react";

const links = {
  products: [
    { name: "AI Course", href: "https://courses.wearewacky.com" },
    { name: "n8n Workflows", href: "/services" },
    { name: "Consulting", href: "/contact" },
  ],
  resources: [
    { name: "Documentation", href: "#" },
    { name: "GitHub", href: "https://github.com/wackyworksdigital" },
    { name: "Support", href: "/contact" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
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
    <footer className="relative py-20 overflow-hidden">
      {/* Top Border Gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.a
              href="/"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <Sparkles className="w-6 h-6 text-purple" />
              <span className="text-xl font-bold">Wacky Works Digital</span>
            </motion.a>
            <p className="text-muted mb-6 max-w-sm">
              🚀 Remote-first automation studio for UK SMEs. We build AI systems, 
              n8n workflows & low-code tools that generate revenue on autopilot.
            </p>
            <div className="flex gap-4">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-muted hover:text-foreground transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-3">
              {links.products.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-muted hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {links.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted text-sm">
            © {new Date().getFullYear()} Wacky Works Digital. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

