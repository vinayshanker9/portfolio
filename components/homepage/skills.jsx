"use client";

import { motion } from "framer-motion";
import { Server, Layout, Database, BrainCircuit } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "High-Performance Backend Systems",
      description: "Architecting scalable, non-blocking APIs and robust microservices utilizing Java, Spring Boot, and Spring WebFlux.",
      icon: <Server size={32} className="text-accent" />
    },
    {
      id: 2,
      title: "Distributed & Event-Driven Architecture",
      description: "Designing fault-tolerant systems using the Saga Pattern, orchestrating event streams with Apache Kafka, and managing state with Redis.",
      icon: <Database size={32} className="text-secondary" />
    },
    {
      id: 3,
      title: "AI & RAG Pipeline Integration",
      description: "Building intelligent, LLM-powered applications with Spring AI and pgvector, featuring seamless document search and vector embeddings.",
      icon: <BrainCircuit size={32} className="text-warning" />
    },
    {
      id: 4,
      title: "Full-Stack Application Delivery",
      description: "Developing end-to-end solutions combining responsive React.js frontends with secure, database-backed (PostgreSQL, MongoDB) backend engines.",
      icon: <Layout size={32} className="text-success" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60 } }
  };

  return (
    <section id="services" className="py-20 bg-background relative z-10 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-16 flex items-center justify-center">
            <div className="h-[1px] bg-gray-300 dark:bg-gray-800 flex-1 mr-6 max-w-[100px] md:max-w-xs"></div>
            <span className="text-accent mr-3">02.</span> Services Offered
            <div className="h-[1px] bg-gray-300 dark:bg-gray-800 flex-1 ml-6 max-w-[100px] md:max-w-xs"></div>
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10"
        >
          {services.map((service) => (
            <motion.div 
              key={service.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-card/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 p-8 rounded-2xl hover:border-accent/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] transition-all group"
            >
              <div className="bg-background w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-sm border border-gray-100 dark:border-gray-800 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-textMuted text-lg leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
