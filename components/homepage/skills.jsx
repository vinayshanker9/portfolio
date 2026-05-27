"use client";

import { motion } from "framer-motion";
import { Server, Layout, Database, BrainCircuit, Star, PlayCircle } from "lucide-react";

export default function Skills() {
  const genres = [
    {
      id: "01",
      title: "Backend Engines",
      subtitle: "Spring Boot & Java Enterprise",
      match: "99% Match",
      year: "2026",
      rating: "UA 18+",
      episodes: "REST APIs, Microservices, Security, JPA/Hibernate",
      description: "Engineering fault-tolerant, high-performance backends. Designing complex web services, transactional database schemas, and microservice mesh patterns.",
      tech: ["Spring Boot", "Spring Cloud", "JPA / Hibernate", "PostgreSQL", "Java Core"],
      icon: Server,
      accentColor: "#E50914"
    },
    {
      id: "02",
      title: "Distributed Systems",
      subtitle: "Event Messaging & Caching",
      match: "98% Match",
      year: "2026",
      rating: "UA 16+",
      episodes: "Kafka Streams, Redis Locks, MongoDB Clusters",
      description: "Building event-driven pipelines using Apache Kafka, managing distributed rollback loops with Saga, and implementing high-speed query layers via Redis.",
      tech: ["Apache Kafka", "Redis", "Saga Pattern", "MongoDB", "Distributed Systems"],
      icon: Database,
      accentColor: "#b81d24"
    },
    {
      id: "03",
      title: "AI & LLM Integration",
      subtitle: "Spring AI & Cognitive Architectures",
      match: "99% Match",
      year: "2026",
      rating: "AI 2.0",
      episodes: "Semantic Prompts, Vector Stores, RAG Systems, Cognitive Agents",
      description: "Architecting intelligent, cognitive backend servers using Spring AI. Orchestrating vector search embeddings, semantic prompt pipelines, RAG patterns, and structured model responses.",
      tech: ["Spring AI", "LLM Integration", "Vector Embeddings", "RAG Systems", "Prompt Pipelines"],
      icon: BrainCircuit,
      accentColor: "#E50914"
    },
    {
      id: "04",
      title: "Frontend Interfaces",
      subtitle: "Next.js & React Client Engines",
      match: "96% Match",
      year: "2026",
      rating: "UA 13+",
      episodes: "App Router, Framer Motion, Responsive UX, Tailwind CSS",
      description: "Crafting beautiful, hardware-accelerated user experiences. Leveraging dynamic client routes, component structures, and visual animation states.",
      tech: ["Next.js", "React.js", "Tailwind CSS", "Framer Motion", "CSS Variables"],
      icon: Layout,
      accentColor: "#b81d24"
    }
  ];

  return (
    <section id="services" className="relative py-24 bg-[#141414] text-[#f5f5f7] overflow-hidden border-t border-white/5">
      {/* Glow backgrounds */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#E50914]/5 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-12 relative z-10">
        
        {/* Row Label header */}
        <div className="mb-10">
          <span className="text-[#808080] font-sans text-sm tracking-[0.2em] font-extrabold uppercase block mb-1">
            CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-black tracking-tight uppercase text-white">
            Trending Tech Genres
          </h2>
        </div>

        {/* Cinematic Netflix Genre Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {genres.map((genre, index) => {
            const IconComponent = genre.icon;
            
            return (
              <motion.div
                key={genre.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -10, scale: 1.05, zIndex: 30 }}
                whileTap={{ scale: 0.96 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 400, 
                  damping: 24, 
                  delay: index * 0.1,
                  opacity: { duration: 0.35, delay: index * 0.1 } 
                }}
                className="bg-[#181818] border border-white/5 rounded-md overflow-hidden shadow-2xl group transition-colors duration-150 relative flex flex-col justify-between hover:border-[#E50914]/80 hover:shadow-[0_15px_30px_rgba(229,9,20,0.25)] cursor-pointer"
              >
                {/* Visual Accent Top Bar */}
                <div 
                  className="h-1.5 w-full bg-gradient-to-r"
                  style={{ backgroundImage: `linear-gradient(to right, ${genre.accentColor}, #000000)` }}
                />

                {/* Card Main Block */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Icon and Title block */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded bg-white/5 border border-white/10 flex items-center justify-center text-[#e5e5e5] group-hover:text-white group-hover:bg-[#E50914] group-hover:border-[#E50914] transition-colors duration-300">
                        <IconComponent size={20} />
                      </div>
                      <span className="font-mono text-xs text-[#808080] font-bold">
                        GENRE {genre.id}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-0.5 group-hover:text-[#E50914] transition-colors duration-300">
                      {genre.title}
                    </h3>
                    <p className="text-xs text-[#808080] font-medium mb-4">
                      {genre.subtitle}
                    </p>

                    {/* Netflix Specs Bar */}
                    <div className="flex items-center gap-2 mb-4 text-[10px] font-bold">
                      <span className="text-[#46d369]">{genre.match}</span>
                      <span className="text-white bg-white/10 px-1.5 py-0.5 rounded text-[8px] tracking-wide font-extrabold border border-white/10">
                        {genre.rating}
                      </span>
                      <span className="text-[#808080]">{genre.year}</span>
                    </div>

                    <p className="text-xs text-[#b3b3b3] leading-relaxed mb-6 font-sans">
                      {genre.description}
                    </p>
                  </div>

                  {/* Episodes (Tech stack details) */}
                  <div className="pt-4 border-t border-white/5">
                    <span className="block text-[10px] text-[#808080] font-bold uppercase mb-2">
                      Featured Modules
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {genre.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[9px] text-[#e5e5e5] bg-white/5 border border-white/5 px-2 py-0.5 rounded-full hover:bg-white/10 hover:border-[#E50914]/20 transition-all cursor-default font-sans"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
