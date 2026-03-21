"use client";

import { motion } from "framer-motion";
import { dsaTopics } from "@/utils/data/dsa-topics";

export default function DsaProgress() {
  const getStatusBadge = (status) => {
    if (status === "Done") {
      return <span className="px-2 py-1 text-xs rounded-md bg-success/20 text-success border border-success/30 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-success"></span> Done</span>;
    }
    if (status === "In Progress") {
      return <span className="px-2 py-1 text-xs rounded-md bg-warning/20 text-warning border border-warning/30 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-warning"></span> Active</span>;
    }
    return <span className="px-2 py-1 text-xs rounded-md bg-muted/20 text-muted border border-muted/30 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-muted"></span> Next</span>;
  };

  return (
    <section id="dsa" className="py-20 bg-background relative z-10 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-12 flex items-center justify-end">
            <div className="h-[1px] bg-gray-300 dark:bg-gray-800 flex-1 mr-6"></div>
            <span className="text-accent mr-3">04.</span> My DSA Journey
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Topic Tracker List */}
            <div className="bg-card border border-gray-200 dark:border-gray-800 rounded-2xl p-6 md:p-8 flex flex-col">
              <h3 className="text-xl font-bold font-heading mb-6 text-foreground">Topic Progress</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 content-start">
                {dsaTopics.map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-2.5 rounded-lg border border-gray-100 dark:border-gray-800 hover:bg-white/5 transition-colors group shadow-sm">
                    <span className="font-medium text-sm text-foreground group-hover:text-accent transition-colors">{item.topic}</span>
                    {getStatusBadge(item.status)}
                  </div>
                ))}
              </div>
            </div>

            {/* Problem Solving Approach Widget */}
            <div className="flex flex-col gap-6">
              <div className="bg-card border border-gray-200 dark:border-gray-800 rounded-2xl p-6 md:p-8 flex-1 flex flex-col group">
                <h3 className="text-xl font-bold font-heading mb-8 text-foreground group-hover:text-accent transition-colors">My Algorithm Approach</h3>
                
                <motion.div 
                  className="space-y-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
                  }}
                >
                  <motion.div variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } } }} className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-accent/20 text-accent flex items-center justify-center flex-shrink-0 font-mono font-bold text-sm shadow-[0_0_10px_rgba(99,102,241,0.2)]">1</div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">Clarify & Understand</h4>
                      <p className="text-xs text-textMuted mt-1.5 leading-relaxed">Deconstruct the problem, ask about edge cases, and define constraints.</p>
                    </div>
                  </motion.div>
                  
                  <motion.div variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } } }} className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-secondary/20 text-secondary flex items-center justify-center flex-shrink-0 font-mono font-bold text-sm shadow-[0_0_10px_rgba(34,211,238,0.2)]">2</div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">Design & Optimize</h4>
                      <p className="text-xs text-textMuted mt-1.5 leading-relaxed">Evaluate time and space complexity tradeoffs before writing any code.</p>
                    </div>
                  </motion.div>

                  <motion.div variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } } }} className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-success/20 text-success flex items-center justify-center flex-shrink-0 font-mono font-bold text-sm shadow-[0_0_10px_rgba(34,197,94,0.2)]">3</div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">Clean Implementation</h4>
                      <p className="text-xs text-textMuted mt-1.5 leading-relaxed">Write modular, self-documenting Java code that handles edge cases robustly.</p>
                    </div>
                  </motion.div>

                  <motion.div variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } } }} className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-rose-500/20 text-rose-500 flex items-center justify-center flex-shrink-0 font-mono font-bold text-sm shadow-[0_0_10px_rgba(244,63,94,0.2)]">4</div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">Test & Dry-run</h4>
                      <p className="text-xs text-textMuted mt-1.5 leading-relaxed">Step through the code with sample inputs to ensure 100% correctness.</p>
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              {/* Quote */}
              <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-2xl p-6 flex flex-col items-center text-center justify-center transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]">
                <span className="text-2xl mb-2 block">💡</span>
                <p className="font-mono text-sm text-accent leading-relaxed italic">
                  &quot;First solve the problem. Then, write the code.&quot;
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
