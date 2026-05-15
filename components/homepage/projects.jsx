"use client";

import { motion } from "framer-motion";
import { projectsData } from "@/utils/data/projects";
import { Folder, Github, ExternalLink } from "lucide-react";
import { FlowingTrails } from "./background-effects";

const GRID = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const CARD = {
  hidden: { opacity: 0, y: 50, scale: 0.94 },
  show: {
    opacity: 1, y: 0, scale: 1,
    transition: { type: "spring", stiffness: 80, damping: 16 },
  },
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-background relative z-10 w-full overflow-hidden">
      <FlowingTrails color="#a855f7" count={5} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-12 flex items-center">
            <span className="text-accent mr-3">03.</span>
            <span className="animated-underline">Some Things I&apos;ve Built</span>
            <div className="h-[1px] bg-gray-800 flex-1 ml-6" />
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={GRID}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              variants={CARD}
              whileHover={{ y: -14, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
              className="card-shine relative bg-card/40 rounded-3xl p-8 h-full flex flex-col
                         border border-white/5 hover:border-purple-500/40
                         hover:shadow-[0_24px_60px_-10px_rgba(168,85,247,0.45)]
                         transition-colors duration-400 group cursor-pointer"
            >
              {/* Top row */}
              <div className="flex justify-between items-center mb-8">
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-accent"
                >
                  <Folder size={40} className="stroke-1" />
                </motion.div>
                <div className="flex gap-4 items-center">
                  {project.github && project.github !== "#" && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -3, color: "#6366f1" }}
                      className="text-textMuted transition-colors"
                    >
                      <Github size={20} />
                    </motion.a>
                  )}
                  {project.demo && project.demo !== "#" && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -3, color: "#6366f1" }}
                      className="text-textMuted transition-colors"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-bold font-heading text-foreground mb-2
                               group-hover:text-shimmer transition-all">
                  {project.name}
                </h3>
                {project.badge && (
                  <span className="inline-block px-3 py-1 mb-4 text-xs font-mono
                                   text-secondary bg-secondary/10 rounded-full border border-secondary/20">
                    {project.badge}
                  </span>
                )}
                <p className="text-textMuted text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Tech stack tags */}
              <ul className="flex flex-wrap gap-x-3 gap-y-1.5 text-xs font-mono text-gray-500 mt-auto">
                {project.tools.map((tool, i) => (
                  <motion.li
                    key={i}
                    whileHover={{ color: "#a855f7" }}
                    className="transition-colors cursor-default"
                  >
                    {tool}
                  </motion.li>
                ))}
              </ul>

              {/* Animated bottom border */}
              <div className="mt-5 h-px w-0 group-hover:w-full rounded-full transition-all duration-500
                              bg-gradient-to-r from-purple-500 to-transparent" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
