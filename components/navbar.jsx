"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { personalData } from "@/utils/data/personal-data";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sections = ["about", "skills", "projects", "education", "contact"];

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Active link highlight
      let current = "";
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 100) {
          current = section;
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  if (!mounted) return null;

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm dark:shadow-none border-b border-gray-200 dark:border-gray-800" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 cursor-pointer flex items-center pr-4 group" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 mr-2 group-hover:bg-accent/20 transition-all shadow-[0_0_15px_rgba(99,102,241,0.15)]">
              <span className="text-accent font-mono font-bold text-sm tracking-tighter">VS</span>
            </div>
            <span className="font-heading font-bold text-xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">
              Vinay Shanker
            </span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollTo(section)}
                  className={`capitalize text-sm font-medium transition-colors hover:text-accent ${activeSection === section ? "text-accent" : "text-foreground"}`}
                >
                  {section}
                </button>
              ))}
              <a
                href={`mailto:${personalData.email}`}
                className="text-sm font-medium px-4 py-2 rounded-full bg-accent/10 text-accent border border-accent/20 hover:bg-accent hover:text-white transition-all shadow-[0_0_15px_rgba(99,102,241,0.15)]"
              >
                Hire Me
              </a>
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors text-foreground"
                aria-label="Toggle Theme"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
          
          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors text-foreground"
                aria-label="Toggle Theme"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-foreground focus:outline-none"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800"
          >
            <div className="px-4 pt-2 pb-6 space-y-2 shadow-lg">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollTo(section)}
                  className={`block w-full text-left px-3 py-3 rounded-md text-base font-medium capitalize ${
                    activeSection === section 
                      ? "text-accent bg-accent/10" 
                      : "text-foreground hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  {section}
                </button>
              ))}
              <a
                href={`mailto:${personalData.email}`}
                className="block w-full text-left px-3 py-3 rounded-md text-base font-medium text-accent bg-accent/5 border border-accent/10 hover:bg-accent/10 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
