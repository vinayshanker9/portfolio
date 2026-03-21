"use client";

import { motion } from "framer-motion";
import { educationData } from "@/utils/data/education";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-20 bg-background relative z-10 w-full">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-16 flex items-center justify-center">
            <div className="h-[1px] bg-gray-300 dark:bg-gray-800 flex-1 mr-6 max-w-[50px] md:max-w-[100px]"></div>
            <span className="text-accent mr-3">04.</span> Education
            <div className="h-[1px] bg-gray-300 dark:bg-gray-800 flex-1 ml-6 max-w-[50px] md:max-w-[100px]"></div>
          </h2>

          <div className="relative border-l border-gray-200 dark:border-gray-800 ml-3 md:ml-0 space-y-12">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 md:pl-12 group"
              >
                {/* Timeline Dot */}
                <span className="absolute -left-3.5 flex items-center justify-center w-7 h-7 bg-card rounded-full ring-4 ring-background border border-gray-200 dark:border-gray-800 group-hover:border-accent group-hover:scale-110 transition-all">
                  <GraduationCap size={14} className="text-accent" />
                </span>

                <div className="bg-card p-6 md:p-8 rounded-2xl border border-gray-100 dark:border-gray-800 group-hover:border-accent/30 transition-colors shadow-sm">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                    <h3 className="text-xl font-bold font-heading text-foreground">{edu.degree}</h3>
                    <span className="text-xs font-mono text-secondary bg-secondary/10 px-3 py-1 rounded-full whitespace-nowrap self-start">
                      {edu.year}
                    </span>
                  </div>
                  <p className="text-textMuted font-medium mb-2 whitespace-pre-wrap">{edu.college}</p>
                  <p className="text-sm font-mono text-gray-500">{edu.score}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
