import { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { ContactContent } from "@/components/sections/contact-content";
import { Footer } from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "Contact | Wacky Works Digital",
  description: "Let's build something amazing together. Get in touch to discuss your project or just say hello.",
};

export default function ContactPage() {
  return (
    <main className="relative noise">
      <PageHeader
        badge="Get In Touch"
        title="Let's Build Something"
        highlight="Amazing"
        description="Have a project in mind? Want to learn more about what we do? We'd love to hear from you."
      />
      <ContactContent />
      <Footer />
    </main>
  );
}

