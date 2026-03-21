"use client";

import { motion } from "framer-motion";
import { skillsData } from "@/utils/data/skills";
import { useState } from "react";

export default function Skills() {
  const categories = Object.keys(skillsData);
  const [activeTab, setActiveTab] = useState(categories[0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-20 bg-background relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-12 flex items-center justify-center">
            <div className="h-[1px] bg-gray-300 dark:bg-gray-800 flex-1 mr-6 max-w-[100px] md:max-w-xs"></div>
            <span className="text-accent mr-3">02.</span> Technical Skills
            <div className="h-[1px] bg-gray-300 dark:bg-gray-800 flex-1 ml-6 max-w-[100px] md:max-w-xs"></div>
          </h2>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-6 py-2 rounded-full font-mono text-sm transition-all duration-300 ${
                  activeTab === category
                    ? "bg-accent text-white shadow-[0_0_15px_rgba(99,102,241,0.5)]"
                    : "bg-card text-textMuted hover:text-foreground border border-gray-200 dark:border-gray-800 hover:border-accent"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Skill Items container */}
          <div className="min-h-[250px] flex items-start justify-center">
            <motion.div
              key={activeTab} // triggers re-animation when tab changes
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap justify-center gap-4 max-w-4xl"
            >
              {skillsData[activeTab].map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-card px-6 py-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 hover:border-accent/50 dark:hover:border-accent/80 hover:shadow-[0_10px_30px_-10px_rgba(99,102,241,0.4)] transition-all flex items-center gap-3 group cursor-pointer"
                >
                  <div className="w-2 h-2 rounded-full bg-secondary group-hover:scale-150 transition-transform"></div>
                  <span className="text-foreground font-medium text-lg tracking-wide">{skill}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
