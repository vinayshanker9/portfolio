"use client";

import { motion, AnimatePresence } from "framer-motion";
import { personalData } from "@/utils/data/personal-data";
import { useState, useEffect } from "react";
import { Github, Linkedin, Code2 } from "lucide-react";
import { FlowingTrails, FloatingParticles, DigitalGrid } from "./background-effects";

const WORD_VARIANTS = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  show: {
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { type: "spring", stiffness: 90, damping: 18 },
  },
};

const CONTAINER = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const ITEM = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 18 } },
};

// Splits a string into individually animated word spans
function AnimatedText({ text, className }) {
  return (
    <span className={className} style={{ display: "inline-flex", flexWrap: "wrap", gap: "0 0.28em" }}>
      {text.split(" ").map((word, i) => (
        <motion.span key={i} variants={WORD_VARIANTS} style={{ display: "inline-block" }}>
          {word}
        </motion.span>
      ))}
    </span>
  );
}

export default function HeroSection() {
  const titles = [
    "I build REST APIs with Spring Boot",
    "I design scalable backend systems",
    "I solve DSA problems with Java",
    "I craft full stack web applications",
  ];
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex flex-col items-center justify-center min-h-screen bg-background">
      <DigitalGrid />
      <FloatingParticles count={10} color="#6366f1" />
      <FlowingTrails color="#6366f1" count={5} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full">
        <motion.div variants={CONTAINER} initial="hidden" animate="show">

          {/* Greeting */}
          <motion.p
            variants={ITEM}
            className="text-secondary font-mono mb-3 text-lg tracking-widest uppercase"
          >
            Hi, I&apos;m
          </motion.p>

          {/* Name — blue gradient */}
          <motion.h1
            variants={ITEM}
            className="text-5xl md:text-7xl font-heading font-extrabold tracking-tight mb-3"
          >
            <span
              style={{
                background: "linear-gradient(120deg, #3b82f6, #60a5fa, #2563eb)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {personalData.name}
            </span>
            <span className="text-foreground">.</span>
          </motion.h1>

          {/* Tagline — word-by-word reveal */}
          <motion.h2
            variants={CONTAINER}
            className="text-3xl md:text-5xl font-heading font-bold text-textMuted mb-6 tracking-tight"
          >
            <AnimatedText text="I turn ideas into reliable software." />
          </motion.h2>

          {/* Rotating subtitle */}
          <motion.div variants={ITEM} className="h-10 mb-8 flex justify-center items-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={titleIndex}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="text-xl md:text-2xl font-mono text-accent"
              >
                {titles[titleIndex]}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={ITEM}
            className="max-w-2xl mx-auto text-lg text-textMuted mb-10 leading-relaxed"
          >
            {personalData.description}
          </motion.p>

          {/* CTA buttons */}
          <motion.div variants={ITEM} className="flex flex-wrap items-center justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.07, boxShadow: "0 0 36px rgba(99,102,241,0.7)" }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-8 py-3 bg-accent text-white font-semibold rounded-full shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all"
            >
              Get In Touch
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.07, borderColor: "#6366f1" }}
              whileTap={{ scale: 0.95 }}
              href={personalData.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-card border border-gray-700 text-foreground font-semibold rounded-full hover:bg-white/5 transition-all"
            >
              View Resume
            </motion.a>
          </motion.div>

          {/* Social icons — staggered pop-in */}
          <motion.div
            variants={CONTAINER}
            className="mt-12 flex items-center justify-center space-x-8"
          >
            {[
              { href: personalData.github,   Icon: Github,   label: "GitHub"   },
              { href: personalData.linkedIn,  Icon: Linkedin,  label: "LinkedIn" },
              { href: personalData.leetcode,  Icon: Code2,     label: "LeetCode" },
            ].map(({ href, Icon, label }) => (
              <motion.a
                key={label}
                variants={WORD_VARIANTS}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, color: "#6366f1", scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={label}
                className="text-textMuted transition-colors"
              >
                <Icon size={28} />
              </motion.a>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
