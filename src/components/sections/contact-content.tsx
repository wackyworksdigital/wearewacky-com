"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Clock, Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { supabase, type ContactSubmission } from "@/lib/supabase";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@wearewacky.com",
    href: "mailto:hello@wearewacky.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "United Kingdom",
    href: null,
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 hours",
    href: null,
  },
];

export function ContactContent() {
  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");

    try {
      // Submit to Supabase
      const submission: ContactSubmission = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      };

      const { error } = await supabase
        .from("contact_submissions")
        .insert([submission]);

      if (error) throw error;

      setFormState("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Reset after 3 seconds
      setTimeout(() => setFormState("idle"), 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormState("error");
      
      // Reset after 3 seconds
      setTimeout(() => setFormState("idle"), 3000);
    }
  };

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-8">
              Contact <span className="text-gradient">Information</span>
            </h2>

            <div className="space-y-6 mb-12">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-purple" />
                  </div>
                  <div>
                    <span className="text-muted text-sm">{item.label}</span>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="block font-medium hover:text-purple transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Links */}
            <div className="p-6 rounded-2xl glass">
              <h3 className="font-bold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a
                  href="https://courses.wearewacky.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-muted hover:text-foreground transition-colors"
                >
                  → View our courses
                </a>
                <a
                  href="https://github.com/wackyworksdigital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-muted hover:text-foreground transition-colors"
                >
                  → Check our GitHub
                </a>
                <a
                  href="https://twitter.com/wearewacky"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-muted hover:text-foreground transition-colors"
                >
                  → Follow on Twitter
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-2xl font-bold mb-8">
              Send a <span className="text-gradient">Message</span>
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-purple focus:outline-none focus:ring-1 focus:ring-purple transition-all"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-purple focus:outline-none focus:ring-1 focus:ring-purple transition-all"
                  placeholder="your@email.com"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-purple focus:outline-none focus:ring-1 focus:ring-purple transition-all"
                >
                  <option value="" className="bg-void">Select a topic</option>
                  <option value="project" className="bg-void">New Project Inquiry</option>
                  <option value="courses" className="bg-void">About Courses</option>
                  <option value="consulting" className="bg-void">Automation Consulting</option>
                  <option value="partnership" className="bg-void">Partnership Opportunity</option>
                  <option value="other" className="bg-void">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-purple focus:outline-none focus:ring-1 focus:ring-purple transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={formState === "loading" || formState === "success"}
                className={cn(
                  "w-full py-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2",
                  formState === "success" && "bg-green-500 text-white",
                  formState === "error" && "bg-red-500 text-white",
                  formState === "idle" && "bg-purple hover:bg-purple-dark glow-purple",
                  formState === "loading" && "bg-purple opacity-80 cursor-not-allowed"
                )}
              >
                {formState === "loading" && (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                )}
                {formState === "success" && (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Message Sent!
                  </>
                )}
                {formState === "idle" && (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
                {formState === "error" && (
                  <>
                    <AlertCircle className="w-5 h-5" />
                    Error - Try Again
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

