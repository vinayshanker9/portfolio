"use client";

import { motion } from "framer-motion";
import { personalData } from "@/utils/data/personal-data";
import { useState, useEffect } from "react";
import { Github, Linkedin, Code2 } from "lucide-react";

export default function HeroSection() {
  const titles = [
    "I build REST APIs with Spring Boot",
    "I design scalable backend systems",
    "I solve DSA problems with Java",
    "I craft full stack web applications"
  ];
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [titles.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70, damping: 15 } },
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex flex-col items-center justify-center min-h-[90vh]">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] -z-10 animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.p variants={itemVariants} className="text-secondary font-mono mb-4 text-lg tracking-wide">
            Hi, I&apos;m
          </motion.p>
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-heading font-extrabold tracking-tight mb-4 text-foreground">
            {personalData.name}.
          </motion.h1>
          <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-heading font-bold text-textMuted mb-6 tracking-tight">
            I turn ideas into reliable software.
          </motion.h2>

          <motion.div variants={itemVariants} className="h-10 mb-8 flex justify-center items-center">
            <motion.p
              key={titleIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-xl md:text-2xl font-mono text-accent"
            >
              {titles[titleIndex]}
            </motion.p>
          </motion.div>

          <motion.p variants={itemVariants} className="max-w-2xl mx-auto text-lg text-textMuted mb-10 leading-relaxed">
            {personalData.description}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-8 py-3 bg-accent text-white font-medium rounded-full shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:shadow-[0_0_30px_rgba(99,102,241,0.6)] transition-all"
            >
              Get In Touch
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={personalData.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-card border border-gray-700 hover:border-accent text-foreground font-medium rounded-full hover:bg-white/5 dark:hover:bg-white/5 transition-all"
            >
              View Resume
            </motion.a>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12 flex items-center justify-center space-x-6">
            <a href={personalData.github} target="_blank" rel="noopener noreferrer" className="text-textMuted hover:text-accent transition-colors">
              <Github size={28} />
            </a>
            <a href={personalData.linkedIn} target="_blank" rel="noopener noreferrer" className="text-textMuted hover:text-accent transition-colors">
              <Linkedin size={28} />
            </a>
            <a href={personalData.leetcode} target="_blank" rel="noopener noreferrer" className="text-textMuted hover:text-accent transition-colors">
              <Code2 size={28} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
