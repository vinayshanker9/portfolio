"use client";

import { motion } from "framer-motion";
import { projectsData } from "@/utils/data/projects";
import { Folder, Github, ExternalLink } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-background relative z-10 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-12 flex items-center">
            <span className="text-accent mr-3">03.</span> Some Things I&apos;ve Built
            <div className="h-[1px] bg-gray-300 dark:bg-gray-800 flex-1 ml-6"></div>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10, scale: 1.02 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 100 }}
                className="bg-card rounded-2xl p-6 h-full flex flex-col border border-gray-200 dark:border-gray-800 transition-colors duration-300 hover:shadow-[0_15px_30px_-10px_rgba(99,102,241,0.4)] hover:border-accent/50 group cursor-pointer"
              >
                <div className="flex justify-between items-center mb-8">
                  <div className="text-accent">
                    <Folder size={40} className="stroke-1" />
                  </div>
                  <div className="flex gap-4 items-center">
                    {project.github && project.github !== "#" && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-textMuted hover:text-accent transition-colors">
                        <Github size={20} />
                      </a>
                    )}
                    {project.demo && project.demo !== "#" && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-textMuted hover:text-accent transition-colors">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl font-bold font-heading text-foreground group-hover:text-accent transition-colors">
                      {project.name}
                    </h3>
                  </div>
                  {project.badge && (
                    <span className="inline-block px-3 py-1 mb-4 text-xs font-mono text-secondary bg-secondary/10 rounded-full border border-secondary/20">
                      {project.badge}
                    </span>
                  )}
                  <p className="text-textMuted text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <ul className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-mono text-gray-500 dark:text-gray-400 mt-auto">
                  {project.tools.map((tool, i) => (
                    <li key={i}>{tool}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
