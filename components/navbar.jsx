"use client";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, Github, Linkedin, ExternalLink, Award } from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import { AnimatePresence, motion } from "framer-motion";

const sections = [
  { id: "home", label: "Home" },
  { id: "services", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" }
];

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // High-performance IntersectionObserver for tracking active sections
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -60% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections on the page
    const sectionsToObserve = ["home", "services", "about", "projects", "education", "contact"];
    sectionsToObserve.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id === "home" ? "home" : id);
    if (el) {
      const offset = 70; // Netflix-style fixed navbar height offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: id === "home" ? 0 : offsetPosition,
        behavior: "smooth"
      });
    }
    setMobileMenuOpen(false);
  };

  if (!mounted) return null;

  return (
    <>
      {/* 
         Top Fixed Netflix-themed Translucent Navigation Header
      */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-[9999] select-none transition-colors duration-500 py-4 px-4 sm:px-12 ${
          isScrolled 
            ? "bg-[#141414] border-b border-white/5 shadow-lg shadow-black/50" 
            : "bg-gradient-to-b from-black/90 to-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Left Side: Brand Logo and Navigation Links */}
          <div className="flex items-center gap-8 sm:gap-12">
            
            {/* Iconic Custom Geometric Netflix-themed Logo */}
            <div 
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2 cursor-pointer group"
            >
              {/* Geometric glowing red letter VS */}
              <div className="relative w-10 h-7 overflow-visible transition-transform duration-300 group-hover:scale-105">
                <svg viewBox="0 0 50 35" className="w-full h-full filter drop-shadow-[0_1px_4px_rgba(229,9,20,0.4)]">
                  <defs>
                    <linearGradient id="navRed1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#E50914" />
                      <stop offset="100%" stopColor="#B81D24" />
                    </linearGradient>
                    <linearGradient id="navRed2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#B81D24" />
                      <stop offset="100%" stopColor="#7E0D11" />
                    </linearGradient>
                  </defs>
                  {/* V Left Leg */}
                  <path d="M 4 2 L 11 2 L 18 32 L 11 32 Z" fill="url(#navRed1)" />
                  {/* V Right Leg overlapping */}
                  <path d="M 25 2 L 18 2 L 11 32 L 18 32 Z" fill="url(#navRed2)" opacity="0.95" />
                  
                  {/* Normal S Path */}
                  <path d="M 39 5 C 39 1.5, 27 1.5, 27 9 C 27 15, 41 14, 41 21 C 41 28, 28 28, 28 24" fill="none" stroke="url(#navRed1)" strokeWidth="6" strokeLinecap="round" />
                </svg>
              </div>
              <span className="text-[#E50914] font-black text-xl tracking-[0.15em] hidden xs:inline-block font-sans">
                VS
              </span>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-5 text-sm text-[#e5e5e5]">
              {sections.map((section) => {
                const isActive = activeSection === section.id || (section.id === "services" && activeSection === "about");
                return (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className={`transition-colors duration-300 hover:text-white font-medium ${
                      isActive ? "text-white font-bold" : "text-[#b3b3b3] text-xs sm:text-sm"
                    }`}
                  >
                    {section.label}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Side: Account Manager Profile Dropdown & Mobile Menu Trigger */}
          <div className="flex items-center gap-4">
            
            {/* High-Fidelity Netflix Profile Dropdown Selector */}
            <div className="relative">
              <button 
                onClick={() => setDropdownOpen(!dropdownOpen)}
                onBlur={() => setTimeout(() => setDropdownOpen(false), 200)}
                className="flex items-center gap-2 focus:outline-none group py-1"
              >
                {/* Profile Custom Avatar */}
                <div className="w-8 h-8 rounded bg-[#1f80eb] flex flex-col justify-end items-center overflow-hidden border border-[#2b90ff] shadow-[0_2px_10px_rgba(0,0,0,0.4)] relative cursor-pointer">
                  {/* Simplistic stylized smiling face */}
                  <div className="absolute top-[8px] w-3 h-3 bg-white rounded-full flex justify-between px-[1.5px] items-center shadow-inner">
                    <div className="w-[2px] h-[2px] bg-[#1f80eb] rounded-full" />
                    <div className="w-[2px] h-[2px] bg-[#1f80eb] rounded-full" />
                  </div>
                  <div className="absolute top-[14px] w-2.5 h-1 border-b-[1.5px] border-white rounded-b-full" />
                </div>
                <ChevronDown size={14} className={`text-white transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Profile Dropdown Options Menu */}
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-3 w-56 bg-[#141414]/95 border border-white/10 rounded shadow-2xl py-2 z-[99999] backdrop-blur-md"
                  >
                    {/* Tiny visual triangular tip */}
                    <div className="absolute right-[22px] -top-[6px] w-3 h-3 bg-[#141414] border-t border-l border-white/10 rotate-45 pointer-events-none" />

                    <div className="px-4 py-2 border-b border-white/10 mb-2">
                      <p className="text-xs text-[#808080]">Who&apos;s Watching?</p>
                      <p className="text-sm font-semibold text-white mt-0.5">Guest Profile</p>
                    </div>

                    {/* Links styled as secondary active profiles */}
                    <a 
                      href="https://github.com/vinayshanker9" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-2 text-sm text-[#e5e5e5] hover:bg-white/5 hover:text-white transition-colors"
                    >
                      <div className="w-6 h-6 rounded bg-[#e50914] flex items-center justify-center border border-[#ff3d47]">
                        <Github size={12} className="text-white" />
                      </div>
                      <span className="flex-1 truncate">GitHub Profile</span>
                      <ExternalLink size={10} className="opacity-50" />
                    </a>

                    <a 
                      href="https://www.linkedin.com/in/vinay-shanker-135660291/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-2 text-sm text-[#e5e5e5] hover:bg-white/5 hover:text-white transition-colors"
                    >
                      <div className="w-6 h-6 rounded bg-[#0077b5] flex items-center justify-center border border-[#26a7eb]">
                        <Linkedin size={12} className="text-white" />
                      </div>
                      <span className="flex-1 truncate">LinkedIn Profile</span>
                      <ExternalLink size={10} className="opacity-50" />
                    </a>

                    <a 
                      href="https://leetcode.com/u/vinayshanker_9" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-2 text-sm text-[#e5e5e5] hover:bg-white/5 hover:text-white transition-colors"
                    >
                      <div className="w-6 h-6 rounded bg-[#ffa116] flex items-center justify-center border border-[#ffb84d]">
                        <SiLeetcode size={12} className="text-white" />
                      </div>
                      <span className="flex-1 truncate">LeetCode Profile</span>
                      <ExternalLink size={10} className="opacity-50" />
                    </a>

                    <div className="h-px bg-white/10 my-2" />

                    <button 
                      onClick={() => scrollTo("contact")}
                      className="w-full text-left px-4 py-2 text-xs font-semibold text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      Manage Account (Contact)
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-sm bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors focus:outline-none"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Sidebar Dropdown Screen */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[68px] left-0 right-0 z-[9998] bg-[#141414]/95 border-b border-white/10 px-4 py-6 shadow-2xl backdrop-blur-lg md:hidden"
          >
            <div className="flex flex-col gap-4">
              {sections.map((section) => {
                const isActive = activeSection === section.id || (section.id === "services" && activeSection === "about");
                return (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`w-full text-left font-sans text-base font-semibold py-2 px-3 rounded transition-colors ${
                      isActive 
                        ? "text-[#E50914] bg-white/5" 
                        : "text-[#b3b3b3] hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {section.label}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
