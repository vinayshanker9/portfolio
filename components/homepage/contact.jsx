"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, ArrowRight, Send, X, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import { personalData } from "@/utils/data/personal-data";
import { InteractiveGlow, FlowingTrails } from "./background-effects";

const CONTAINER = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const ITEM = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 16 } },
};

const contactLinks = [
  {
    id: "email",
    label: "Email",
    value: personalData.email,
    href: `mailto:${personalData.email}`,
    icon: Mail,
    color: "#6366f1",
    glow: "rgba(99,102,241,0.3)",
    description: "Drop me a message anytime",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/vinay-shanker",
    href: personalData.linkedIn,
    icon: Linkedin,
    color: "#0a66c2",
    glow: "rgba(10,102,194,0.3)",
    description: "Let's connect professionally",
  },
  {
    id: "github",
    label: "GitHub",
    value: "github.com/vinayshanker9",
    href: personalData.github,
    icon: Github,
    color: "var(--github-color)",
    colorHex: "#6e7681",
    glow: "rgba(87,96,106,0.3)",
    description: "Explore my open-source work",
  },
  {
    id: "location",
    label: "Location",
    value: personalData.address,
    href: null,
    icon: MapPin,
    color: "#14b8a6",
    glow: "rgba(20,184,166,0.3)",
    description: "Available for remote work worldwide",
  },
];

export default function Contact() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${personalData.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setTimeout(() => {
          setShowForm(false);
          setStatus("idle");
          setFormData({ name: "", email: "", message: "" });
        }, 3000);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background relative z-10 w-full mb-10 overflow-hidden">
      <FlowingTrails color="#6366f1" count={4} />
      <InteractiveGlow />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <p className="text-secondary font-mono text-sm tracking-widest uppercase mb-3">
            05. Get In Touch
          </p>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold mb-5">
            <span className="text-shimmer">Let&apos;s Build Something Together</span>
          </h2>
          <p className="text-textMuted text-lg max-w-xl mx-auto leading-relaxed">
            I&apos;m currently open to new opportunities. Whether you have a project
            in mind, a question, or just want to say hi — my inbox is always open.
          </p>
        </motion.div>

        {/* Contact cards */}
        <motion.div
          variants={CONTAINER}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {contactLinks.map(({ id, label, value, href, icon: Icon, color, colorHex, glow, description }) => {
            // For CSS-variable colors (github), use colorHex for template literals
            const hexColor = colorHex ?? color;
            return (
            <motion.div
              key={id}
              variants={ITEM}
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="card-shine relative bg-card/40 rounded-2xl p-6 border border-white/5
                         hover:border-white/15 transition-colors duration-300 group"
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ boxShadow: `0 20px 60px -12px ${glow}` }}
              />

              {/* Icon */}
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.15 }}
                transition={{ duration: 0.35 }}
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 border border-white/10"
                style={{ backgroundColor: `${hexColor}22` }}
              >
                <Icon size={22} style={{ color }} />
              </motion.div>

              {/* Text */}
              <p className="text-xs font-mono uppercase tracking-widest mb-1" style={{ color }}>
                {label}
              </p>
              <p className="text-foreground font-semibold text-base mb-1 group-hover:text-shimmer transition-all">
                {value}
              </p>
              <p className="text-textMuted text-sm">{description}</p>

              {/* Link / arrow */}
              {href ? (
                <motion.a
                  href={href}
                  target={href.startsWith("mailto") ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  className="inline-flex items-center gap-1 mt-4 text-xs font-mono transition-colors"
                  style={{ color }}
                >
                  {href.startsWith("mailto") ? "Send email" : "Open profile"}
                  <ArrowRight size={12} />
                </motion.a>
              ) : (
                <p className="mt-4 text-xs font-mono text-gray-600">Remote-friendly</p>
              )}

              {/* Bottom accent line */}
              <div
                className="mt-5 h-px w-0 group-hover:w-full rounded-full transition-all duration-500"
                style={{ background: `linear-gradient(90deg, ${hexColor}, transparent)` }}
              />
            </motion.div>
            );
          })}
        </motion.div>

        {/* CTA & Form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-14 max-w-lg mx-auto w-full"
        >
          <AnimatePresence mode="wait">
            {!showForm ? (
              <motion.div
                key="button"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                className="flex justify-center"
              >
                <motion.button
                  onClick={() => setShowForm(true)}
                  whileHover={{ scale: 1.06, boxShadow: "0 0 36px rgba(99,102,241,0.6)" }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-white
                             font-semibold rounded-full shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all"
                >
                  <Mail size={18} />
                  Say Hello
                </motion.button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0, height: 0, y: 20 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{ opacity: 0, height: 0, y: -20 }}
                transition={{ duration: 0.4, type: "spring", bounce: 0.2 }}
                onSubmit={handleSubmit}
                className="bg-card/40 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-md relative overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
                
                <h3 className="text-xl font-semibold mb-6 text-shimmer text-center">Send a Message</h3>
                
                <div className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full bg-background/50 border border-white/5 rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-accent/50 transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      className="w-full bg-background/50 border border-white/5 rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-accent/50 transition-colors"
                    />
                  </div>
                  <div>
                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message"
                      rows={4}
                      className="w-full bg-background/50 border border-white/5 rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-accent/50 transition-colors resize-none"
                    />
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={status === "submitting" || status === "success"}
                    className="w-full py-3 bg-accent text-white rounded-xl font-medium flex items-center justify-center gap-2 transition-colors hover:bg-accent/90 disabled:opacity-70"
                  >
                    {status === "idle" && <><Send size={18} /> Send Message</>}
                    {status === "submitting" && <span className="animate-pulse">Sending...</span>}
                    {status === "success" && <><CheckCircle size={18} className="text-green-400" /> Sent Successfully!</>}
                    {status === "error" && <><AlertCircle size={18} className="text-red-400" /> Error Sending</>}
                  </motion.button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
