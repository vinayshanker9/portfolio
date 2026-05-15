"use client";

import { motion } from "framer-motion";
import { Server, Layout, Database, BrainCircuit } from "lucide-react";
import { DigitalGrid, FlowingTrails } from "./background-effects";

const CONTAINER = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const CARD = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { type: "spring", stiffness: 70, damping: 16 },
  },
};

export default function Services() {
  const services = [
    {
      id: 1,
      title: "High-Performance Backend Systems",
      description: "Architecting scalable, non-blocking APIs and robust microservices utilizing Java, Spring Boot, and Spring WebFlux.",
      icon: <Server size={32} className="text-accent" />,
      accent: "rgba(99,102,241,0.35)",
    },
    {
      id: 2,
      title: "Distributed & Event-Driven Architecture",
      description: "Designing fault-tolerant systems using the Saga Pattern, orchestrating event streams with Apache Kafka, and managing state with Redis.",
      icon: <Database size={32} className="text-secondary" />,
      accent: "rgba(168,85,247,0.35)",
    },
    {
      id: 3,
      title: "AI & RAG Pipeline Integration",
      description: "Building intelligent, LLM-powered applications with Spring AI and pgvector, featuring seamless document search and vector embeddings.",
      icon: <BrainCircuit size={32} className="text-warning" />,
      accent: "rgba(234,179,8,0.35)",
    },
    {
      id: 4,
      title: "Full-Stack Application Delivery",
      description: "Developing end-to-end solutions combining responsive React.js frontends with secure, database-backed (PostgreSQL, MongoDB) backend engines.",
      icon: <Layout size={32} className="text-success" />,
      accent: "rgba(34,197,94,0.35)",
    },
  ];

  return (
    <section id="services" className="py-20 bg-background relative z-10 overflow-hidden">
      <DigitalGrid />
      <FlowingTrails color="#22d3ee" count={4} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-16 flex items-center justify-center">
            <div className="h-[1px] bg-gray-800 flex-1 mr-6 max-w-[100px] md:max-w-xs" />
            <span className="text-accent mr-3">02.</span>
            <span className="animated-underline">Services Offered</span>
            <div className="h-[1px] bg-gray-800 flex-1 ml-6 max-w-[100px] md:max-w-xs" />
          </h2>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={CONTAINER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={CARD}
              whileHover={{ y: -10, scale: 1.02 }}
              className="card-shine bg-card/40 border border-white/8 p-8 rounded-3xl
                         hover:border-white/20 transition-colors duration-300 group cursor-default"
              style={{ "--card-accent": service.accent }}
            >
              {/* Hover accent glow behind card */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ boxShadow: `0 20px 60px -10px ${service.accent}` }}
              />

              {/* Icon box */}
              <motion.div
                whileHover={{ rotate: [0, -8, 8, 0], scale: 1.15 }}
                transition={{ duration: 0.4 }}
                className="bg-background w-16 h-16 rounded-2xl flex items-center justify-center mb-6
                           border border-gray-800 group-hover:border-accent/40 transition-colors shadow-sm"
              >
                {service.icon}
              </motion.div>

              {/* Title */}
              <h3 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-shimmer transition-all">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-textMuted leading-relaxed text-base">
                {service.description}
              </p>

              {/* Bottom accent line */}
              <div
                className="mt-6 h-0.5 w-0 group-hover:w-full rounded-full transition-all duration-500"
                style={{ background: `linear-gradient(90deg, ${service.accent}, transparent)` }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
