"use client";

import { motion } from "framer-motion";
import { personalData } from "@/utils/data/personal-data";
import { Play, Info, Award, Calendar } from "lucide-react";

export default function HeroSection() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      const offset = 70;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-start bg-[#141414] text-foreground overflow-hidden pt-28 pb-16 px-4 sm:px-12"
    >
      {/* Cinematic Vignette Overlay to replicate Netflix's gradient shading */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-black/30 pointer-events-none z-0" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#141414]/90 via-[#141414]/30 to-transparent pointer-events-none z-0" />

      {/* Main Content Box */}
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headline copy, metrics, and actions */}
          <div className="lg:col-span-8 flex flex-col items-start text-left">
            
            {/* Featured Tagline Branding */}
            <div className="flex flex-wrap items-center gap-3 mb-6 font-mono text-xs uppercase tracking-widest text-[#e5e5e5]">
              <div className="flex items-center gap-1.5 bg-[#E50914] text-white px-2 py-0.5 rounded-sm font-bold text-[10px] tracking-wide shadow-sm shadow-[#E50914]/30 animate-pulse">
                <Award size={10} />
                <span>TOP 1% DEVELOPER</span>
              </div>
              <span className="text-[#808080]">|</span>
              <span className="text-[#e5e5e5] font-semibold text-[10px] sm:text-xs">
                B.TECH ISE {"//"} SPRING BOOT & COGNITIVE AI ENGINEER
              </span>
            </div>

            {/* Netflix Original Series Tag */}
            <div className="flex items-center gap-2 mb-2">
              {/* Glowing VS Logo symbol */}
              <div className="relative w-6 h-5 overflow-visible flex items-center">
                <svg viewBox="0 0 50 35" className="w-full h-full filter drop-shadow-[0_1px_3px_rgba(229,9,20,0.5)]">
                  <defs>
                    <linearGradient id="heroRed1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#E50914" />
                      <stop offset="100%" stopColor="#B81D24" />
                    </linearGradient>
                    <linearGradient id="heroRed2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#B81D24" />
                      <stop offset="100%" stopColor="#7E0D11" />
                    </linearGradient>
                  </defs>
                  {/* V Left Leg */}
                  <path d="M 4 2 L 11 2 L 18 32 L 11 32 Z" fill="url(#heroRed1)" />
                  {/* V Right Leg overlapping */}
                  <path d="M 25 2 L 18 2 L 11 32 L 18 32 Z" fill="url(#heroRed2)" opacity="0.95" />
                  
                  {/* Normal S Path */}
                  <path d="M 39 5 C 39 1.5, 27 1.5, 27 9 C 27 15, 41 14, 41 21 C 41 28, 28 28, 28 24" fill="none" stroke="url(#heroRed1)" strokeWidth="6" strokeLinecap="round" />
                </svg>
              </div>
              <span className="text-[#808080] font-sans text-xs tracking-[0.4em] font-extrabold uppercase mt-0.5">
                O R I G I N A L
              </span>
            </div>

            {/* Headline Title */}
            <div className="max-w-3xl mb-6">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl sm:text-7xl md:text-8xl font-heading font-black tracking-tighter leading-[0.9] uppercase text-white shadow-sm"
              >
                VINAY SHANKER
              </motion.h1>
            </div>

            {/* Description Text - Styled exactly like Netflix description block */}
            <div className="max-w-2xl mb-8">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-base sm:text-lg md:text-xl text-[#e5e5e5] font-sans leading-relaxed tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
              >
                Spring Boot backends. React client interfaces. Enterprise AI integrations. Class of 2027 Information Science student specialized in building enterprise-grade, cognitive server components, intelligent microservices, and reactive data pipelines.
              </motion.p>
            </div>

            {/* Netflix Iconic CTA Buttons: ▶ Play (Contact) and ℹ More Info (Resume) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-12 sm:mb-16"
            >
              {/* Play Button - scrolls to Contact */}
              <button
                onClick={scrollToContact}
                className="flex items-center justify-center gap-2 px-8 py-3 bg-white hover:bg-white/90 text-black font-sans font-bold text-base rounded transition-colors duration-200 shadow-lg cursor-pointer"
              >
                <Play size={20} className="fill-current text-black" />
                <span>Play</span>
              </button>

              {/* More Info Button - opens Resume */}
              <a
                href={personalData.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-3 bg-[#5a5a5a]/60 hover:bg-[#5a5a5a]/40 text-white font-sans font-bold text-base rounded transition-colors duration-200 shadow-lg backdrop-blur-sm"
              >
                <Info size={20} />
                <span>More Info</span>
              </a>
            </motion.div>

            {/* Bottom Technical Badges and Metadata */}
            <div className="pt-6 border-t border-white/10 w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 font-mono text-[10px] sm:text-xs text-[#808080] tracking-wider">
              <div className="flex flex-wrap gap-x-8 gap-y-4">
                <div>
                  <span className="text-[#E50914] font-bold">{"//"}</span> ENGINE CAPACITY
                  <span className="block text-white text-xs sm:text-sm font-semibold mt-1">SPRING BOOT + CLOUD</span>
                </div>
                <div>
                  <span className="text-[#E50914] font-bold">{"//"}</span> COGNITIVE ENGINE
                  <span className="block text-white text-xs sm:text-sm font-semibold mt-1">SPRING AI + VECTOR SEARCH</span>
                </div>
                <div>
                  <span className="text-[#E50914] font-bold">{"//"}</span> INTERFACE ENGINE
                  <span className="block text-white text-xs sm:text-sm font-semibold mt-1">REACT/NEXT + TAILWIND</span>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded font-sans text-xs text-[#e5e5e5]">
                <Calendar size={12} className="text-[#E50914]" />
                <span>B.Tech Session: 2023 - 2027</span>
              </div>
            </div>

          </div>

          {/* Right Column: Premium Netflix-style Movie Character Poster showing Profile Photo */}
          <div className="lg:col-span-4 flex justify-center items-center w-full mt-10 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-[280px] h-[380px] sm:w-[320px] sm:h-[440px] bg-[#1a1a1a] rounded border border-white/10 shadow-[0_15px_35px_rgba(0,0,0,0.8)] hover:border-[#E50914]/40 hover:shadow-[#E50914]/15 transition-all duration-500 group overflow-hidden"
            >
              {/* Profile Photo as key show poster */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={personalData.profilePhoto} 
                alt={personalData.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Cinematic color cast and shadow overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
              
              {/* Glowing red bottom border shine */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#E50914] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Netflix Red Bottom Character Info Tag */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-sm border border-white/10 p-3 rounded flex items-center justify-between shadow-lg">
                <div>
                  <span className="text-[9px] text-[#E50914] font-black tracking-widest block uppercase font-mono">STARRING</span>
                  <span className="text-sm font-bold text-white block">Vinay Shanker</span>
                </div>
                <div className="bg-[#E50914] text-white text-[9px] px-2 py-0.5 rounded font-black font-mono tracking-wide">
                  SEASON 2
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
