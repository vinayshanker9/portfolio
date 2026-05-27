"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { projectsData } from "@/utils/data/projects";
import { Play, Github, ChevronLeft, ChevronRight, Check, Plus, Star } from "lucide-react";

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [scrollIndex, setScrollIndex] = useState(0);
  const sliderRef = useRef(null);

  // Pad ID numbers and add movie metadata to project items
  const movies = projectsData.map((project, index) => {
    // Custom Netflix tags for each developer project
    const meta = {
      match: index === 0 ? "99% Match" : index === 1 ? "98% Match" : "97% Match",
      year: "2026",
      rating: index === 2 ? "AI 1.0" : "UA 16+",
      duration: index === 0 ? "1 Season" : index === 1 ? "2 Seasons" : "Movie",
      category: project.badge,
    };
    return { ...project, ...meta, index };
  });

  const handleSlide = (direction) => {
    if (direction === "left") {
      setScrollIndex(prev => Math.max(0, prev - 1));
    } else {
      setScrollIndex(prev => Math.min(movies.length - 1, prev + 1));
    }
  };

  return (
    <section 
      id="projects" 
      className="relative py-20 bg-[#141414] text-[#f5f5f7] overflow-visible border-t border-white/5 select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-12 relative overflow-visible">
        
        {/* Row Label Header */}
        <div className="mb-6 relative z-30">
          <span className="text-[#808080] font-sans text-sm tracking-[0.2em] font-extrabold uppercase block mb-1">
            PORTFOLIO SHOWCASE
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-black tracking-tight uppercase text-white">
            Trending Projects
          </h2>
        </div>

        {/* Netflix Slider Component Box */}
        <div className="relative group/slider overflow-visible w-full pb-12">
          
          {/* Slider Arrow Controls */}
          {scrollIndex > 0 && (
            <button
              onClick={() => handleSlide("left")}
              className="absolute left-[-24px] sm:left-[-40px] top-[100px] h-[150px] w-[35px] bg-[#141414]/80 hover:bg-[#141414] border border-white/10 rounded flex items-center justify-center z-40 transition-all opacity-0 group-hover/slider:opacity-100 shadow-2xl focus:outline-none"
            >
              <ChevronLeft size={24} className="text-white group-hover/slider:scale-110 transition-transform" />
            </button>
          )}

          {scrollIndex < movies.length - 1 && movies.length > 3 && (
            <button
              onClick={() => handleSlide("right")}
              className="absolute right-[-24px] sm:right-[-40px] top-[100px] h-[150px] w-[35px] bg-[#141414]/80 hover:bg-[#141414] border border-white/10 rounded flex items-center justify-center z-40 transition-all opacity-0 group-hover/slider:opacity-100 shadow-2xl focus:outline-none"
            >
              <ChevronRight size={24} className="text-white group-hover/slider:scale-110 transition-transform" />
            </button>
          )}

          {/* Sliding horizontal deck */}
          <div className="overflow-visible w-full py-4">
            <motion.div
              ref={sliderRef}
              animate={{ x: `-${scrollIndex * 15}%` }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              className="flex gap-5 overflow-visible"
              style={{ width: "fit-content" }}
            >
              {movies.map((movie) => {
                const isHovered = hoveredIndex === movie.index;

                return (
                  <motion.div
                    key={movie.id}
                    onMouseEnter={() => setHoveredIndex(movie.index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="relative flex-shrink-0 w-[280px] xs:w-[320px] sm:w-[360px] bg-[#181818] rounded-md overflow-visible shadow-[0_10px_25px_rgba(0,0,0,0.5)] border border-white/5 flex flex-col cursor-pointer transition-shadow"
                    animate={{
                      scale: isHovered ? 1.15 : 1,
                      zIndex: isHovered ? 50 : 10,
                      borderColor: isHovered ? "rgba(229, 9, 20, 0.4)" : "rgba(255, 255, 255, 0.05)",
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    
                    {/* Visual Card Cover / Top Thumbnail Half */}
                    <div className="relative h-[150px] sm:h-[180px] bg-[#1a1a1a] flex flex-col justify-between p-5 rounded-t-md overflow-hidden">
                      {/* Diagonal ambient cinematic glow inside thumbnail */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#E50914]/15 via-transparent to-black/80 pointer-events-none -z-10" />

                      {/* Top Bar inside thumbnail */}
                      <div className="flex justify-between items-start w-full">
                        <span className="font-sans font-bold text-[9px] text-[#808080] tracking-wider uppercase bg-[#141414]/60 px-2 py-0.5 rounded border border-white/5">
                          {movie.category}
                        </span>
                        
                        {/* Rating stars if high match */}
                        <div className="flex items-center gap-0.5 text-amber-500">
                          <Star size={10} className="fill-current" />
                          <Star size={10} className="fill-current" />
                          <Star size={10} className="fill-current" />
                        </div>
                      </div>

                      {/* Large Project Display Label inside cover */}
                      <div className="space-y-1">
                        <h4 className="text-lg sm:text-xl font-heading font-black text-white leading-tight uppercase group-hover:text-[#E50914] transition-colors">
                          {movie.name}
                        </h4>
                      </div>
                    </div>

                    {/* Expandable Lower Details Panel */}
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ 
                        height: isHovered ? "auto" : 0, 
                        opacity: isHovered ? 1 : 0 
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden bg-[#181818] rounded-b-md border-t border-white/5"
                    >
                      <div className="p-5 space-y-4">
                        
                        {/* Actions row: Play Icon, Github Icon, Match metrics */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            {/* Play button links to demo page or github repo */}
                            <a
                              href={movie.demo !== "#" ? movie.demo : movie.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-9 h-9 rounded-full bg-white hover:bg-white/90 text-black flex items-center justify-center transition-colors shadow"
                            >
                              <Play size={16} className="fill-current text-black ml-0.5" />
                            </a>

                            {/* Github button */}
                            <a
                              href={movie.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-9 h-9 rounded-full bg-[#2a2a2a] hover:bg-[#333333] text-white flex items-center justify-center border border-white/10 transition-colors shadow"
                            >
                              <Github size={16} />
                            </a>
                          </div>

                          <div className="flex items-center gap-1">
                            <div className="w-6 h-6 rounded-full border border-[#808080] flex items-center justify-center text-[#e5e5e5]">
                              <Plus size={12} />
                            </div>
                            <div className="w-6 h-6 rounded-full border border-[#808080] flex items-center justify-center text-[#e5e5e5]">
                              <Check size={12} />
                            </div>
                          </div>
                        </div>

                        {/* Netflix Metadata: Match, Year, Rating */}
                        <div className="flex items-center gap-2 text-xs font-bold font-sans">
                          <span className="text-[#46d369]">{movie.match}</span>
                          <span className="text-[#808080]">{movie.year}</span>
                          <span className="text-white border border-[#808080]/60 px-1 py-0.2 rounded-[3px] text-[9px] tracking-wide font-extrabold bg-transparent">
                            {movie.rating}
                          </span>
                          <span className="text-[#808080]">{movie.duration}</span>
                        </div>

                        {/* Description Summary */}
                        <p className="text-xs text-[#d2d2d2] leading-relaxed font-sans">
                          {movie.description}
                        </p>

                        {/* Tech stack capsules */}
                        <div className="pt-2 border-t border-white/5 space-y-2">
                          <span className="block text-[9px] text-[#808080] font-extrabold uppercase tracking-wider">
                            Technologies & Stack
                          </span>
                          <div className="flex flex-wrap gap-1">
                            {movie.tools.map((tool) => (
                              <span
                                key={tool}
                                className="text-[9px] text-[#e5e5e5] bg-white/5 border border-white/5 px-2 py-0.5 rounded-full hover:bg-white/10 transition-all font-mono"
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>

                      </div>
                    </motion.div>

                  </motion.div>
                );
              })}
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
