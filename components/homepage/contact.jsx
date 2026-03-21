"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Phone, Send, Loader2 } from "lucide-react";
import { personalData } from "@/utils/data/personal-data";

export default function Contact() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "", type: "" });

  const showToast = (message, type) => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: "", type: "" }), 5000);
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData(e.target);
      const data = {
        name: formData.get("user_name"),
        email: formData.get("user_email"),
        message: formData.get("message"),
        _subject: `New message from ${formData.get("user_name")}`,
        _template: "box",
        _captcha: false
      };

      const response = await fetch("https://formsubmit.co/ajax/vinaymuddhe@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setLoading(false);
        showToast("Message sent successfully!", "success");
        e.target.reset();
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      setLoading(false);
      showToast("Oops! Something went wrong.", "error");
      console.error("Submission error:", error);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background relative z-10 w-full mb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-16 text-center">
            <span className="text-accent mr-3">05.</span> Get In Touch
          </h2>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div className="flex-1 space-y-8">
              <h3 className="text-2xl font-bold font-heading text-foreground mb-4">Let&apos;s talk about everything!</h3>
              <p className="text-textMuted mb-8">
                Thinking about a new project, a freelance inquiry, or even just wanting to say hi? Feel free to reach out. I&apos;m currently open to new opportunities.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-card border border-gray-200 dark:border-gray-800 rounded-full flex items-center justify-center group-hover:bg-accent/10 group-hover:border-accent/40 transition-colors">
                    <Mail size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-textMuted uppercase font-mono tracking-wider">Email</p>
                    <p className="font-medium text-foreground">{personalData.email}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-card border border-gray-200 dark:border-gray-800 rounded-full flex items-center justify-center group-hover:bg-accent/10 group-hover:border-accent/40 transition-colors">
                    <MapPin size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-textMuted uppercase font-mono tracking-wider">Location</p>
                    <p className="font-medium text-foreground">{personalData.address}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="flex-1">
              <div className="bg-card p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm relative">
                {/* Toast Notification */}
                {toast.show && (
                  <div className={`absolute top-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-lg text-sm font-medium shadow-md transition-all ${
                    toast.type === "success" ? "bg-success/20 text-success border border-success/30" : "bg-rose-500/20 text-rose-500 border border-rose-500/30"
                  }`}>
                    {toast.message}
                  </div>
                )}

                <form onSubmit={sendEmail} className="space-y-6 flex flex-col pt-8">
                  <div>
                    <label htmlFor="user_name" className="block text-sm font-medium text-textMuted mb-2 font-mono">Name</label>
                    <input
                      type="text"
                      name="user_name"
                      id="user_name"
                      required
                      className="w-full bg-background border border-gray-300 dark:border-gray-700 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="user_email" className="block text-sm font-medium text-textMuted mb-2 font-mono">Email</label>
                    <input
                      type="email"
                      name="user_email"
                      id="user_email"
                      required
                      className="w-full bg-background border border-gray-300 dark:border-gray-700 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-textMuted mb-2 font-mono">Message</label>
                    <textarea
                      name="message"
                      id="message"
                      required
                      rows="4"
                      className="w-full bg-background border border-gray-300 dark:border-gray-700 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                      placeholder="Hi, I think we need a full stack developer..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-accent text-white font-medium py-3 px-4 rounded-xl hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background transition-all flex items-center justify-center gap-2 shadow-[0_4px_14px_0_rgba(99,102,241,0.39)] hover:shadow-[0_6px_20px_rgba(99,102,241,0.23)] disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="animate-spin" size={20} /> Sending...
                      </>
                    ) : (
                      <>
                        Send Message <Send size={18} />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
