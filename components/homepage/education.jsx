"use client";

import { motion } from "framer-motion";
import { educationData } from "@/utils/data/education";
import { GraduationCap } from "lucide-react";
import { FlowingTrails } from "./background-effects";

export default function Education() {
  return (
    <section id="education" className="py-20 bg-background relative z-10 w-full overflow-hidden">
      <FlowingTrails color="#14b8a6" count={4} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-16 flex items-center justify-center">
            <div className="h-[1px] bg-gray-800 flex-1 mr-6 max-w-[80px]" />
            <span className="text-accent mr-3">04.</span>
            <span className="animated-underline">Education</span>
            <div className="h-[1px] bg-gray-800 flex-1 ml-6 max-w-[80px]" />
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l-2 border-gray-800 ml-3 md:ml-0 space-y-12">
          {/* Animated line fill */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{ originY: 0 }}
            className="absolute left-[-1px] top-0 bottom-0 w-[2px]
                       bg-gradient-to-b from-teal-500 via-accent to-transparent"
          />

          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15, type: "spring", stiffness: 70, damping: 16 }}
              className="relative pl-10 md:pl-14 group cursor-default"
            >
              {/* Animated dot */}
              <motion.span
                whileHover={{ scale: 1.4 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="absolute -left-3.5 flex items-center justify-center w-7 h-7
                           bg-background rounded-full ring-2 ring-teal-500/60
                           border border-gray-700 group-hover:border-teal-400 group-hover:ring-teal-400
                           transition-colors z-10"
              >
                <GraduationCap size={14} className="text-teal-400" />
              </motion.span>

              {/* Card */}
              <motion.div
                whileHover={{ x: 8, boxShadow: "0 16px 48px -8px rgba(20,184,166,0.25)" }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="card-shine bg-card/40 p-6 md:p-8 rounded-2xl
                           border border-gray-800 group-hover:border-teal-500/30
                           transition-colors duration-300"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3 gap-2">
                  <h3 className="text-xl font-bold font-heading text-foreground group-hover:text-shimmer transition-all">
                    {edu.degree}
                  </h3>
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    className="text-xs font-mono text-teal-400 bg-teal-500/10
                               px-3 py-1 rounded-full whitespace-nowrap self-start border border-teal-500/20"
                  >
                    {edu.year}
                  </motion.span>
                </div>
                <p className="text-textMuted font-medium mb-1 whitespace-pre-wrap">{edu.college}</p>
                <p className="text-sm font-mono text-gray-500">{edu.score}</p>

                {/* Bottom teal line */}
                <div className="mt-4 h-px w-0 group-hover:w-full rounded-full transition-all duration-500
                                bg-gradient-to-r from-teal-500 to-transparent" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
