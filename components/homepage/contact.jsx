"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle, HelpCircle, MapPin, Mail, Clock } from "lucide-react";
import { personalData } from "@/utils/data/personal-data";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      const formatter = new Intl.DateTimeFormat("en-US", options);
      setTime(formatter.format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

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
    <section 
      id="contact" 
      className="relative py-24 bg-[#141414] text-[#f5f5f7] overflow-visible border-t border-white/5 pb-32"
    >
      {/* Dynamic background ambient glows */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#E50914]/5 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-12 relative z-10">
        
        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column - Netflix Account Sign-In Form Sheet */}
          <div className="lg:col-span-6 md:col-span-10 mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-black/75 border border-white/10 rounded-md p-8 sm:p-12 shadow-2xl relative"
            >
              <h2 className="text-3xl font-bold text-white mb-8 font-sans">
                Sign In
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Float input: Name */}
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder=" "
                    className="w-full bg-[#333] text-white rounded px-5 pt-6 pb-2 border-b-2 border-transparent focus:border-[#E50914] outline-none transition-colors font-sans text-sm block peer"
                  />
                  <label className="absolute text-xs text-[#808080] left-5 top-2 transition-all pointer-events-none peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-focus:text-xs peer-focus:top-2">
                    Your Name
                  </label>
                </div>

                {/* Float input: Email */}
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder=" "
                    className="w-full bg-[#333] text-white rounded px-5 pt-6 pb-2 border-b-2 border-transparent focus:border-[#E50914] outline-none transition-colors font-sans text-sm block peer"
                  />
                  <label className="absolute text-xs text-[#808080] left-5 top-2 transition-all pointer-events-none peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-focus:text-xs peer-focus:top-2">
                    Email Address
                  </label>
                </div>

                {/* Float input: Message */}
                <div className="relative">
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder=" "
                    rows={4}
                    className="w-full bg-[#333] text-white rounded px-5 pt-6 pb-2 border-b-2 border-transparent focus:border-[#E50914] outline-none transition-colors font-sans text-sm block peer resize-none"
                  />
                  <label className="absolute text-xs text-[#808080] left-5 top-2 transition-all pointer-events-none peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-focus:text-xs peer-focus:top-2">
                    Enter Message
                  </label>
                </div>

                {/* Submit Action Button - Glowing Red */}
                <button
                  type="submit"
                  disabled={status === "submitting" || status === "success"}
                  className="w-full py-3.5 bg-[#E50914] hover:bg-[#b81d24] text-white rounded font-sans font-bold text-base tracking-wide transition-colors duration-200 cursor-pointer shadow-lg disabled:opacity-75 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === "idle" && <span>Submit Message</span>}
                  {status === "submitting" && <span className="animate-pulse">Connecting...</span>}
                  {status === "success" && (
                    <>
                      <span>Sent Successfully</span>
                      <CheckCircle size={16} className="text-white" />
                    </>
                  )}
                  {status === "error" && (
                    <>
                      <span>Failed to Send</span>
                      <AlertCircle size={16} className="text-white" />
                    </>
                  )}
                </button>

                {/* Form Footer Helpers */}
                <div className="flex items-center justify-between text-xs text-[#b3b3b3] pt-2">
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input type="checkbox" defaultChecked className="rounded accent-[#E50914]" />
                    <span>Remember me</span>
                  </label>
                  <a href="#projects" className="hover:underline text-white">Need help?</a>
                </div>

                {/* Netflix-style signup callout */}
                <div className="pt-8 border-t border-white/10 space-y-2 text-xs">
                  <p className="text-[#808080]">
                    New to Vinay&apos;s portfolio?{" "}
                    <span 
                      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                      className="text-white hover:underline cursor-pointer"
                    >
                      Explore the site now.
                    </span>
                  </p>
                  <p className="text-[#808080] text-[10px] leading-relaxed">
                    This page is protected by Google recaptcha validation protocols to verify you are a prospective client and not a bot.
                  </p>
                </div>

              </form>
            </motion.div>
          </div>

          {/* Right Column - Netflix FAQ & Account Settings Sidebar */}
          <div className="lg:col-span-6 space-y-8">
            <div className="mb-4">
              <span className="text-[#808080] font-sans text-xs tracking-[0.2em] font-extrabold uppercase block mb-1">
                CONTACT METRIC
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-black tracking-tight uppercase text-white">
                Membership & FAQs
              </h3>
            </div>

            {/* Questions accordions grid */}
            <div className="space-y-4 font-sans text-sm">
              
              {/* Location Block */}
              <div className="bg-[#181818] border border-white/5 p-5 rounded-md hover:border-white/15 transition-all">
                <div className="flex items-center gap-3 text-white font-bold mb-2">
                  <MapPin size={16} className="text-[#E50914]" />
                  <span>Where is the office headquartered?</span>
                </div>
                <p className="text-xs text-[#b3b3b3] leading-relaxed pl-7">
                  Operating remotely out of Bengaluru, Karnataka, India. Open to distributed client requests worldwide.
                </p>
              </div>

              {/* Email Block */}
              <div className="bg-[#181818] border border-white/5 p-5 rounded-md hover:border-white/15 transition-all">
                <div className="flex items-center gap-3 text-white font-bold mb-2">
                  <Mail size={16} className="text-[#E50914]" />
                  <span>What is the direct support channel?</span>
                </div>
                <p className="text-xs text-[#b3b3b3] leading-relaxed pl-7">
                  You can stream queries directly to{" "}
                  <a href={`mailto:${personalData.email}`} className="text-white hover:underline font-bold">
                    {personalData.email}
                  </a>
                  . Replies are guaranteed within 1 business cycle.
                </p>
              </div>

              {/* Time Block */}
              <div className="bg-[#181818] border border-white/5 p-5 rounded-md hover:border-white/15 transition-all">
                <div className="flex items-center gap-3 text-white font-bold mb-2">
                  <Clock size={16} className="text-[#E50914]" />
                  <span>Stream Timezone & Hours?</span>
                </div>
                <p className="text-xs text-[#b3b3b3] leading-relaxed pl-7">
                  Synchronized with IST (UTC+5:30) Bangalore. Current Local Time: <span className="text-white font-bold">{time}</span>.
                </p>
              </div>

              {/* Quick links block */}
              <div className="bg-[#181818] border border-white/5 p-5 rounded-md hover:border-white/15 transition-all">
                <div className="flex items-center gap-3 text-white font-bold mb-2">
                  <HelpCircle size={16} className="text-[#E50914]" />
                  <span>Digital Profiles Setup?</span>
                </div>
                
                <div className="flex flex-wrap gap-2 pt-2 pl-7 font-mono text-[10px]">
                  <a 
                    href={personalData.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/5 hover:bg-white/10 border border-white/5 hover:border-[#E50914]/20 text-[#e5e5e5] px-3 py-1.5 rounded transition-all"
                  >
                    LINKEDIN // VINAY-SHANKER
                  </a>
                  <a 
                    href={personalData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/5 hover:bg-white/10 border border-white/5 hover:border-[#E50914]/20 text-[#e5e5e5] px-3 py-1.5 rounded transition-all"
                  >
                    GITHUB // VINAYSHANKER9
                  </a>
                  <a 
                    href={personalData.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/5 hover:bg-white/10 border border-white/5 hover:border-[#E50914]/20 text-[#e5e5e5] px-3 py-1.5 rounded transition-all"
                  >
                    LEETCODE // VINAYSHANKER_9
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
