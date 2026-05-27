import Navbar from "@/components/navbar";
import HeroSection from "@/components/homepage/hero-section";
import Skills from "@/components/homepage/skills";
import Projects from "@/components/homepage/projects";
import Education from "@/components/homepage/education";
import Contact from "@/components/homepage/contact";
import { personalData } from "@/utils/data/personal-data";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#141414] text-foreground selection:bg-[#E50914]/30 selection:text-[#E50914]">
      <Navbar />
      <HeroSection />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      
      {/* High-Fidelity Netflix 4-Column Gray Index Directory Footer */}
      <footer className="relative py-12 bg-[#141414] border-t border-white/10 overflow-hidden w-full select-none text-[#808080] font-sans text-xs">
        <div className="max-w-5xl mx-auto px-6 sm:px-12">
          
          {/* Top customer care link typical of Netflix */}
          <div className="mb-8 hover:underline">
            <a href="mailto:vinaymuddhe@gmail.com" className="text-[#808080] hover:text-white font-medium">
              Questions? Contact developer: vinaymuddhe@gmail.com
            </a>
          </div>

          {/* 4-Column Index Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            
            {/* Column 1 */}
            <div className="flex flex-col gap-3">
              <a href="#services" className="hover:underline">FAQ (Skills Genres)</a>
              <a href="#projects" className="hover:underline">Investor Relations (Projects)</a>
              <span className="text-[#555] cursor-default">Privacy Protocol</span>
              <span className="text-[#555] cursor-default">Speed Test: 100 Mbps</span>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-3">
              <a 
                href={personalData.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:underline"
              >
                GitHub Source Code
              </a>
              <a 
                href="https://spring.io/projects/spring-ai" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:underline"
              >
                Spring AI Ecosystem
              </a>
              <a 
                href={personalData.linkedIn} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:underline"
              >
                LinkedIn Stream
              </a>
              <span className="text-[#555] cursor-default">Terms of Use</span>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-3">
              <span className="text-[#e50914] font-bold">Status: 100% Active</span>
              <span className="text-[#555] cursor-default">Spring Boot REST API</span>
              <span className="text-[#555] cursor-default">Next.js Client Engine</span>
              <span className="text-[#555] cursor-default">Cookie Preferences</span>
            </div>

            {/* Column 4 */}
            <div className="flex flex-col gap-3">
              <a 
                href={personalData.resume} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:underline"
              >
                Resume Stream
              </a>
              <a href="#education" className="hover:underline">Jain University Season 2</a>
              <span className="text-[#555] cursor-default">B.Tech ISE Class of 2027</span>
              <span className="text-[#555] cursor-default">Legal Notices</span>
            </div>

          </div>

          {/* Service Code Badge typical of Netflix */}
          <div className="mb-6">
            <button className="border border-[#808080] hover:text-white hover:border-white px-3 py-1.5 rounded-none font-mono text-[10px] uppercase tracking-wider transition-colors bg-transparent">
              Service Code: 2023-2027
            </button>
          </div>

          {/* Lower Copyright tag */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-[10px] text-[#555]">
            <p>Made with <span className="text-[#E50914] animate-pulse">❤️</span> by Vinay Shanker</p>
          </div>

        </div>
      </footer>
    </main>
  );
}
