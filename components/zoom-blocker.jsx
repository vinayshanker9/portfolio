"use client";

import { useEffect } from "react";

export default function ZoomBlocker() {
  useEffect(() => {
    // 1. Prevent double-tap zoom and pinch-to-zoom on touch devices
    const preventTouchZoom = (e) => {
      if (e.touches && e.touches.length > 1) {
        e.preventDefault();
      }
    };

    // 2. Prevent iOS Safari gesture zoom
    const preventGestureZoom = (e) => {
      e.preventDefault();
    };

    // 3. Prevent mouse wheel zoom (Ctrl/Cmd + Wheel)
    const preventWheelZoom = (e) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
      }
    };

    // 4. Prevent keyboard zoom (Ctrl/Cmd + Plus/Minus/Equal)
    const preventKeyZoom = (e) => {
      if (
        (e.ctrlKey || e.metaKey) &&
        (e.key === "=" ||
          e.key === "-" ||
          e.key === "+" ||
          e.key === "_" ||
          e.keyCode === 187 ||
          e.keyCode === 189 ||
          e.keyCode === 107 ||
          e.keyCode === 109)
      ) {
        e.preventDefault();
      }
    };

    // Register active listeners to allow preventDefault()
    document.addEventListener("touchstart", preventTouchZoom, { passive: false });
    document.addEventListener("touchmove", preventTouchZoom, { passive: false });
    document.addEventListener("gesturestart", preventGestureZoom, { passive: false });
    document.addEventListener("gesturechange", preventGestureZoom, { passive: false });
    document.addEventListener("wheel", preventWheelZoom, { passive: false });
    document.addEventListener("keydown", preventKeyZoom, { passive: false });

    return () => {
      document.removeEventListener("touchstart", preventTouchZoom);
      document.removeEventListener("touchmove", preventTouchZoom);
      document.removeEventListener("gesturestart", preventGestureZoom);
      document.removeEventListener("gesturechange", preventGestureZoom);
      document.removeEventListener("wheel", preventWheelZoom);
      document.removeEventListener("keydown", preventKeyZoom);
    };
  }, []);

  return null;
}
