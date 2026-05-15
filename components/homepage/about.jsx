"use client";

import { motion } from "framer-motion";
import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 bg-background relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, type: "spring", stiffness: 50 }}
            className="flex-1 order-2 md:order-1"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6 flex items-center">
              <span className="text-accent mr-3">01.</span> About Me
              <div className="h-[1px] bg-gray-300 dark:bg-gray-800 flex-1 ml-6"></div>
            </h2>
            <div className="text-lg text-textMuted space-y-4 font-sans max-w-2xl leading-relaxed">
              <p>
                Hello! I&apos;m  <span className="text-secondary font-medium">{personalData.name}</span> and I enjoy creating things that live on the internet. My interest in software engineering started back when I decided to try editing custom Tumblr themes — turns out hacking together HTML & CSS taught me a lot about logic and problem-solving!
              </p>
              <p>
                Fast-forward to today, and I&apos;ve had the privilege of building <span className="text-accent font-medium">robust Rest APIs with Spring Boot</span> and full-stack platforms using React.js. My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
              </p>
              <p>
                I also have a deep foundation in <span className="text-secondary font-medium">Data Structures and Algorithms</span>, frequently solving problems using Java to sharpen my logic. When I&apos;m not at the computer, I&apos;m usually hanging out with friends, reading, or exploring new places.
              </p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 50 }}
            className="flex-1 order-1 md:order-2 flex justify-center md:justify-end w-full max-w-sm md:max-w-md"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative group w-64 md:w-80 aspect-[3/4]"
            >
              <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl bg-card">
                <Image
                  src={personalData.profilePhoto || "/profile.png"}
                  alt={personalData.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-all duration-300 group-hover:scale-[1.03]"
                  priority={false}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
