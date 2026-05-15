import Navbar from "@/components/navbar";
import HeroSection from "@/components/homepage/hero-section";
import About from "@/components/homepage/about";
import Skills from "@/components/homepage/skills";
import Projects from "@/components/homepage/projects";
import Education from "@/components/homepage/education";
import Contact from "@/components/homepage/contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent text-foreground selection:bg-accent/30 selection:text-accent">
      <Navbar />
      <HeroSection />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      
      {/* Attractive Footer */}
      <footer className="relative py-12 border-t border-gray-200 dark:border-gray-800 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent pointer-events-none -z-10"></div>
        <p className="text-textMuted text-base font-medium tracking-wide">
          Crafted with <span className="text-rose-500 inline-block animate-[pulse_2s_ease-in-out_infinite] px-1">❤️</span> by{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary font-bold font-heading ml-1 text-lg">
            Vinay Shanker
          </span>
        </p>
      </footer>
    </main>
  );
}
