"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Premium warp-drive colored streams inspired by Netflix's fiber-optic intro
const WARP_STREAMS = [
  { left: "4%", width: "2px", color: "#E50914", delay: 1.0, duration: 0.6 },
  { left: "10%", width: "1px", color: "#8A2BE2", delay: 1.1, duration: 0.5 },
  { left: "16%", width: "3px", color: "#B81D24", delay: 0.9, duration: 0.7 },
  { left: "22%", width: "2px", color: "#FF69B4", delay: 1.2, duration: 0.4 },
  { left: "28%", width: "4px", color: "#E50914", delay: 1.0, duration: 0.6 },
  { left: "35%", width: "1px", color: "#FFBF00", delay: 1.3, duration: 0.5 },
  { left: "42%", width: "2px", color: "#8B0000", delay: 1.1, duration: 0.7 },
  { left: "48%", width: "3px", color: "#E50914", delay: 0.9, duration: 0.6 },
  { left: "55%", width: "1.5px", color: "#FF00FF", delay: 1.2, duration: 0.5 },
  { left: "62%", width: "2px", color: "#4B0082", delay: 1.0, duration: 0.7 },
  { left: "68%", width: "4px", color: "#B81D24", delay: 1.1, duration: 0.6 },
  { left: "75%", width: "1px", color: "#FF69B4", delay: 0.9, duration: 0.4 },
  { left: "82%", width: "3px", color: "#E50914", delay: 1.3, duration: 0.6 },
  { left: "88%", width: "2px", color: "#8A2BE2", delay: 1.0, duration: 0.5 },
  { left: "95%", width: "2px", color: "#E50914", delay: 0.9, duration: 0.6 },
];

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [warpActive, setWarpActive] = useState(false);

  useEffect(() => {
    // 1. Lock scrolling while cinematic preloader is playing
    document.body.style.overflow = "hidden";

    // 2. Trigger high-speed warp speed streams slightly before the logo zoom peaks
    const warpTimer = setTimeout(() => {
      setWarpActive(true);
    }, 1000);

    // 3. SNAPPY 2.1-second timer to dismantle preloader and restore scrolling
    const exitTimer = setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = "unset";
    }, 2100);

    return () => {
      clearTimeout(warpTimer);
      clearTimeout(exitTimer);
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            filter: "blur(10px)",
            transition: { duration: 0.4, ease: "easeInOut" } 
          }}
          className="fixed inset-0 bg-[#000000] z-[99999] flex items-center justify-center select-none overflow-hidden"
        >
          {/* Warp-drive Speed Streams Overlay */}
          {warpActive && (
            <div className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-hidden">
              {WARP_STREAMS.map((stream, idx) => (
                <motion.div
                  key={idx}
                  initial={{ y: "-120vh", opacity: 0, scaleY: 0.1 }}
                  animate={{
                    y: "120vh",
                    opacity: [0, 1, 1, 0],
                    scaleY: [0.1, 3.5, 0.1],
                  }}
                  transition={{
                    duration: stream.duration,
                    delay: stream.delay - 1.0, // offset delay based on activation
                    ease: "easeInOut",
                    repeat: 1,
                  }}
                  style={{
                    position: "absolute",
                    left: stream.left,
                    width: stream.width,
                    backgroundColor: stream.color,
                    boxShadow: `0 0 15px ${stream.color}, 0 0 5px ${stream.color}`,
                    height: "30vh",
                  }}
                />
              ))}
            </div>
          )}

          {/* Main Cinematic Box */}
          <div className="relative flex flex-col items-center justify-center w-full h-full px-6 z-20">
            
            {/* The Logo & Wordmark Container */}
            <motion.div
              initial={{ scale: 0.75, opacity: 0, filter: "blur(5px)" }}
              animate={{
                scale: [0.75, 1.0, 1.15, 38.0],
                opacity: [0, 1, 1, 0],
                filter: ["blur(5px)", "blur(0px)", "blur(0px)", "blur(12px)"],
              }}
              transition={{
                times: [0, 0.25, 0.55, 1], // Timing markers for 3 stages
                duration: 1.8,
                ease: [0.25, 0.1, 0.25, 1], // Cinematic cubic curve
              }}
              className="flex flex-col items-center justify-center w-full max-w-lg"
            >
              
              {/* Giant Glowing Red VS Monogram SVG */}
              <div className="relative w-40 h-28 mb-6 overflow-visible">
                <svg viewBox="0 0 50 35" className="w-full h-full filter drop-shadow-[0_0_20px_rgba(229,9,20,0.65)]">
                  <defs>
                    <linearGradient id="preloaderRed1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#E50914" />
                      <stop offset="100%" stopColor="#B81D24" />
                    </linearGradient>
                    <linearGradient id="preloaderRed2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#B81D24" />
                      <stop offset="100%" stopColor="#7E0D11" />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  
                  {/* V Left Leg */}
                  <motion.path 
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    d="M 4 2 L 11 2 L 18 32 L 11 32 Z" 
                    fill="url(#preloaderRed1)" 
                  />
                  {/* V Right Leg */}
                  <motion.path 
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
                    d="M 25 2 L 18 2 L 11 32 L 18 32 Z" 
                    fill="url(#preloaderRed2)" 
                    opacity="0.95" 
                  />
                  
                  {/* Normal S Path with beautiful drawing animation */}
                  <motion.path 
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
                    d="M 39 5 C 39 1.5, 27 1.5, 27 9 C 27 15, 41 14, 41 21 C 41 28, 28 28, 28 24" 
                    fill="none" 
                    stroke="url(#preloaderRed1)" 
                    strokeWidth="6.5" 
                    strokeLinecap="round" 
                  />
                </svg>
              </div>

              {/* Arched Netflix-serif text for VINAY SHANKER */}
              <div className="relative w-full h-16 flex items-center justify-center overflow-visible">
                <svg viewBox="0 0 500 70" className="w-full h-auto">
                  <defs>
                    <linearGradient id="textRed" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#E50914" />
                      <stop offset="100%" stopColor="#9C0A0F" />
                    </linearGradient>
                    {/* The curved smile path for text arching */}
                    <path id="netflixSmileCurve" d="M 30 25 Q 250 48 470 25" fill="none" />
                  </defs>

                  <text fill="url(#textRed)" className="font-sans font-black tracking-[0.28em] text-[36px]" style={{ fontWeight: 950 }}>
                    <textPath href="#netflixSmileCurve" startOffset="50%" textAnchor="middle">
                      VINAY SHANKER
                    </textPath>
                  </text>
                </svg>
              </div>

            </motion.div>

            {/* Glowing audio wave lazers representing the TUDUM sound pulses */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0, 0.6, 0.85, 0],
                scaleX: [1, 1.4, 2.8, 5.5],
              }}
              transition={{ delay: 0.5, duration: 1.0, ease: "easeOut" }}
              className="absolute h-full w-[2px] bg-gradient-to-t from-transparent via-[#E50914] to-transparent pointer-events-none z-0 blur-[2px]"
            />
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0, 0.4, 0.65, 0],
                scaleX: [1, 1.5, 3.2, 6.5],
              }}
              transition={{ delay: 0.6, duration: 1.0, ease: "easeOut" }}
              className="absolute h-full w-[4px] bg-gradient-to-t from-transparent via-[#E50914]/40 to-transparent pointer-events-none z-0 blur-[8px]"
            />



          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
