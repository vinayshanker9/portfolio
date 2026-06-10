"use client";

import { motion } from "framer-motion";
import { Award, Film, PlayCircle, Star, Calendar } from "lucide-react";

export default function Education() {
  const seasons = [
    {
      id: "Season 2",
      title: "B.Tech in Information Science & Engineering",
      college: "Jain University, Bangalore",
      year: "2023 – 2027",
      score: "CGPA: 8.3/10",
      rating: "UA 18+",
      match: "99% Match",
      episodesCount: "8 Semesters",
      overview: "Rigorous focus on advanced backend engineering systems, cognitive integration, automated pipelines, object state persistence, and enterprise software design patterns. Currently building high-efficiency microservices, intelligent caching models, and vector database systems.",
      highlights: ["Spring AI & Cognitive Embeddings", "Database Systems (SQL & NoSQL)", "Microservice Architectures", "Web Engineering"]
    },
    {
      id: "Season 1",
      title: "Higher Secondary Education (12th Grade)",
      college: "Bharatiya Vidya Bhavan's, Bhimavaram",
      year: "2021 – 2023",
      rating: "UA 16+",
      match: "95% Match",
      episodesCount: "2 Academic Years",
      overview: "Deep specialization in analytical mathematics, mechanics physics, and fundamental computer science syntax (C++ / Java object-oriented principles). Laid a strong foundation for advanced system designs.",
      highlights: ["Advanced Mathematics", "Physics & Mechanics", "OOP Programming Syntax"]
    }
  ];

  return (
    <section id="education" className="relative py-24 bg-[#141414] text-[#f5f5f7] overflow-visible border-t border-white/5">
      {/* Cinematic ambient background glow */}
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-[#E50914]/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-12 relative z-10">
        
        {/* Row Label Header */}
        <div className="mb-12 text-center sm:text-left">
          <span className="text-[#808080] font-sans text-sm tracking-[0.2em] font-extrabold uppercase block mb-1">
            QUALIFICATIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-black tracking-tight uppercase text-white">
            Academic Seasons
          </h2>
        </div>

        {/* Modular Academic Seasons Container */}
        <div className="space-y-12">
          {seasons.map((season, index) => (
            <motion.div
              key={season.id}
              whileHover={{ scale: 1.025, y: -4, zIndex: 10 }}
              whileTap={{ scale: 0.985 }}
              transition={{ 
                type: "spring", 
                stiffness: 400, 
                damping: 24
              }}
              className="bg-[#181818] border border-white/5 rounded-lg p-6 sm:p-8 shadow-2xl relative overflow-hidden group hover:border-[#E50914]/50 hover:shadow-[0_12px_24px_rgba(229,9,20,0.15)] transition-colors duration-150 cursor-pointer"
            >
              {/* Season Red Sidebar Accent */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#E50914]" />

              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                {/* Left block: Title details */}
                <div className="flex-1 space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-[#E50914] font-black text-xl tracking-wider uppercase font-sans">
                      {season.id}
                    </span>
                    <span className="text-[#808080]">|</span>
                    <div className="flex items-center gap-2 text-xs font-bold font-sans">
                      <span className="text-[#46d369]">{season.match}</span>
                      <span className="text-white border border-[#808080]/60 px-1 py-0.2 rounded-[3px] text-[9px] tracking-wide font-extrabold bg-transparent">
                        {season.rating}
                      </span>
                      <span className="text-[#e5e5e5] bg-white/10 px-2 py-0.5 rounded text-[10px]">
                        {season.episodesCount}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#E50914] transition-colors leading-tight">
                      {season.title}
                    </h3>
                    <p className="text-[#b3b3b3] font-medium text-sm">
                      {season.college}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#808080] leading-relaxed font-sans max-w-2xl">
                    {season.overview}
                  </p>

                  {/* Highlights checklist */}
                  <div className="pt-2">
                    <span className="block text-[10px] text-[#808080] font-bold uppercase tracking-wider mb-2">
                      Core Syllabus Modules
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {season.highlights.map((item) => (
                        <span
                          key={item}
                          className="text-[9px] text-[#e5e5e5] bg-white/5 border border-white/5 px-2.5 py-1 rounded hover:border-[#E50914]/20 transition-all font-sans"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right block: Year and grade badge info */}
                <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-start gap-4 md:border-l md:border-white/5 md:pl-8 md:min-w-[150px]">
                  <div className="flex items-center gap-1.5 text-xs text-[#808080] font-mono">
                    <Calendar size={14} className="text-[#E50914]" />
                    <span>{season.year}</span>
                  </div>

                  {season.score && (
                    <div className="bg-white/5 border border-white/10 rounded px-4 py-2 text-center">
                      <span className="block text-[8px] text-[#808080] font-extrabold uppercase tracking-widest mb-0.5">
                        FINAL GRADE
                      </span>
                      <span className="text-white font-bold text-sm tracking-wide">
                        {season.score}
                      </span>
                    </div>
                  )}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
