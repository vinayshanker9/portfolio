"use client";

import { motion } from "framer-motion";
import { Sparkles, MapPin, Calendar, GraduationCap, Code2, Layers, Terminal } from "lucide-react";

export default function About() {
  // Key developer proof points mapped exactly to Nik R's high-impact grid stats
  const stats = [
    { label: "B.Tech CGPA", value: "8.3", desc: "Information Science" },
    { label: "DSA Java Solved", value: "500+", desc: "LeetCode & Platforms" },
    { label: "Projects Built", value: "15+", desc: "Full Stack & Backend" },
    { label: "Core Technologies", value: "5+", desc: "Spring Boot, Next.js, etc." },
  ];

  // Vertical timeline representing career milestones and academic history
  const journey = [
    {
      id: 1,
      role: "B.Tech in Information Science & Engineering",
      company: "Jain University, Bangalore",
      duration: "2023 – 2027",
      details: "Specializing in software design, algorithms, database systems, and full-stack integration. Current CGPA: 8.3/10",
      icon: GraduationCap,
    },
    {
      id: 2,
      role: "Java DSA Architect",
      company: "LeetCode & Competitive Programming",
      duration: "2023 – Present",
      details: "Optimized complex data structures and algorithm runtimes. Handled 500+ advanced dynamic programming, graph, and tree problems.",
      icon: Code2,
    },
    {
      id: 3,
      role: "Full-Stack Engineer",
      company: "Spring Boot & React Systems",
      duration: "2024 – Present",
      details: "Creating resilient server interfaces using Spring Boot API microservices, JPA Hibernate data mapping, and modern Next.js client setups.",
      icon: Terminal,
    },
    {
      id: 4,
      role: "Higher Secondary Education (12th Grade)",
      company: "Bharatiya Vidya Bhavan's, Bhimavaram",
      duration: "2021 – 2023",
      details: "Completed high school with 83%. Rigorous specialization in Mathematics, Physics, and Computer Science.",
      icon: Layers,
    },
  ];

  return (
    <section id="about" className="relative py-28 bg-[#07070a] text-foreground overflow-hidden border-t border-white/5">
      {/* Immersive Deep-Dark Background Gradients */}
      <div className="absolute top-1/4 left-[-10%] w-[45%] h-[45%] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-10%] w-[45%] h-[45%] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

      {/* Grid Lines Overlay to replicate Nikola Radeski's HUD UI structure */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HUD Subtitle Tag */}
        <div className="flex items-center gap-4 mb-6">
          <span className="font-mono text-xs tracking-[0.25em] text-accent/80 font-bold uppercase">02 // PORTFOLIO BIO</span>
          <div className="h-px bg-gradient-to-r from-accent/20 to-transparent flex-1" />
        </div>

        {/* Section Headline — Awwwards Style Massive Typography */}
        <div className="border-b border-white/5 pb-12 mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-7xl font-heading font-extrabold tracking-tight leading-[1.05] uppercase"
          >
            Creative at the core,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-blue-400 to-indigo-500">
              Developer by nature.
            </span>
          </motion.h2>
        </div>

        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column — Bio & Narrative */}
          <div className="lg:col-span-6 space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-2 text-accent font-mono text-sm uppercase tracking-wider font-semibold"
            >
              <Sparkles size={16} />
              <span>Hello, it&apos;s me</span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 text-lg md:text-xl text-textMuted leading-relaxed font-sans"
            >
              <p>
                I am <span className="text-foreground font-semibold">Vinay Shanker</span>, a passionate full-stack engineer driven by systems complexity, high-performance logic, and beautiful interfaces. I bridge the gaps between highly performant, scalable backends built on <span className="text-foreground font-semibold underline decoration-accent/40 decoration-2">Spring Boot</span> and responsive, modern frontends using <span className="text-foreground font-semibold underline decoration-accent/40 decoration-2">Next.js/React</span>.
              </p>
              <p>
                My software engineering journey is rooted in an early passion for creating logical solutions to complex challenges. Over the years, this has evolved into designing scalable REST architectures, data schemas, and sharpening my analytical capabilities through competitive programming, where I regularly optimize code for latency, scale, and performance.
              </p>
              <p>
                With a deep foundation in <span className="text-foreground font-semibold">Data Structures & Algorithms</span> using Java, I view coding not just as writing syntax, but as designing efficient, elegant digital solutions that stand the test of load and time.
              </p>
            </motion.div>

            {/* Quick Metadata Block */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-6 flex flex-wrap gap-6 border-t border-white/5 font-mono text-sm text-textMuted"
            >
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-accent" />
                <span>Bengaluru, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-accent" />
                <span>B.Tech ISE (Class of 2027)</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column — Stats & Journey */}
          <div className="lg:col-span-6 space-y-16">
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -4, borderColor: "rgba(99, 102, 241, 0.3)", boxShadow: "0 12px 30px -10px rgba(99, 102, 241, 0.1)" }}
                  className="bg-card/30 backdrop-blur-sm border border-white/5 p-6 rounded-2xl transition-all duration-300 group"
                >
                  <span className="block font-heading font-black text-3xl md:text-4xl text-accent group-hover:text-shimmer transition-all">
                    {stat.value}
                  </span>
                  <span className="block font-mono text-xs text-textMuted tracking-wider uppercase mt-2">
                    {stat.label}
                  </span>
                  <span className="block text-xs text-gray-500 mt-1 font-sans">
                    {stat.desc}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Career/Journey Timeline */}
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <h3 className="font-mono text-sm tracking-wider uppercase font-bold text-accent">
                  My Journey // History & Education
                </h3>
                <div className="h-px bg-white/5 flex-grow" />
              </div>

              <div className="space-y-6 relative before:absolute before:left-6 before:top-4 before:bottom-4 before:w-px before:bg-white/5">
                {journey.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.01 }}
                      className="flex gap-6 relative group"
                    >
                      {/* Timeline Icon Node */}
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-card/50 border border-white/5 flex items-center justify-center relative z-10 transition-all duration-300 group-hover:border-accent/40 group-hover:shadow-[0_0_15px_rgba(99,102,241,0.2)]">
                        <IconComponent size={18} className="text-accent group-hover:text-blue-400 transition-colors" />
                      </div>

                      {/* Content Panel */}
                      <div className="flex-grow bg-card/10 backdrop-blur-sm border border-white/5 p-6 rounded-2xl transition-all duration-300 group-hover:border-white/10 group-hover:bg-card/20">
                        <div className="flex flex-wrap justify-between items-start mb-2 gap-2">
                          <div>
                            <h4 className="font-heading font-bold text-base md:text-lg text-foreground group-hover:text-accent transition-colors">
                              {item.role}
                            </h4>
                            <p className="text-sm text-textMuted font-medium">
                              {item.company}
                            </p>
                          </div>
                          <span className="font-mono text-xs text-accent/80 bg-accent/5 px-2.5 py-1 rounded-full border border-accent/10">
                            {item.duration}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 leading-relaxed mt-2 font-sans">
                          {item.details}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
