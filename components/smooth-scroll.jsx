"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    // 1. Honor accessibility preference for reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    // 2. Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => 1 - Math.pow(1 - t, 4), // Silky-smooth quartic-out deceleration curve
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.15,
      touchMultiplier: 1.85,
      infinite: false,
    });

    // 3. Setup RAF scroll loop
    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // 4. Handle smooth anchor scrolls through Lenis when clicking hash links
    const handleAnchorClick = (e) => {
      const target = e.target.closest("a[href^='#']");
      if (!target) return;

      const href = target.getAttribute("href");
      if (href === "#") return;

      const element = document.querySelector(href);
      if (element) {
        e.preventDefault();
        lenis.scrollTo(element, {
          offset: -80, // Match navbar height offset
          duration: 1.2,
        });
      }
    };

    document.addEventListener("click", handleAnchorClick);

    // 5. Cleanup
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return null;
}
