"use client";

// Pre-computed stable positions — never recalculated on re-render
const TRAIL_CONFIGS = [
  { d: "M -200 150 L 400 -100 L 1200 400", delay: "0s",   dur: "9s"  },
  { d: "M 100  300 L 700  50  L 1500 300", delay: "2s",   dur: "11s" },
  { d: "M -100 500 L 500  200 L 1300 600", delay: "4s",   dur: "10s" },
  { d: "M 200  100 L 900  -50 L 1600 350", delay: "1s",   dur: "13s" },
  { d: "M -50  400 L 600  100 L 1400 500", delay: "3s",   dur: "8s"  },
  { d: "M 300  200 L 800  400 L 1500 150", delay: "5s",   dur: "12s" },
];

const PARTICLE_CONFIGS = [
  { left: "5%",  top: "10%", delay: "0s",   dur: "7s"  },
  { left: "20%", top: "70%", delay: "1.5s", dur: "9s"  },
  { left: "35%", top: "30%", delay: "3s",   dur: "8s"  },
  { left: "50%", top: "80%", delay: "0.8s", dur: "10s" },
  { left: "65%", top: "20%", delay: "2.2s", dur: "7s"  },
  { left: "80%", top: "55%", delay: "4s",   dur: "9s"  },
  { left: "12%", top: "45%", delay: "1s",   dur: "8s"  },
  { left: "45%", top: "60%", delay: "3.5s", dur: "11s" },
  { left: "72%", top: "15%", delay: "0.5s", dur: "7s"  },
  { left: "90%", top: "75%", delay: "2s",   dur: "9s"  },
];

export const FlowingTrails = ({ color = "#6366f1", count = 5 }) => {
  const trails = TRAIL_CONFIGS.slice(0, Math.min(count, TRAIL_CONFIGS.length));
  return (
    // "hidden md:block" → display:none on mobile. Browsers PAUSE all CSS
    // animations on display:none elements, so mobile gets zero GPU cost.
    // Desktop is visually identical to the original.
    <div
      className="hidden md:block"
      style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0, contain: "strict" }}
    >
      <svg width="100%" height="100%" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id={`glow-${color.replace("#","")}`} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>
        {trails.map((t, i) => (
          <path
            key={i}
            d={t.d}
            fill="none"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeDasharray="180 900"
            filter={`url(#glow-${color.replace("#","")})`}
            style={{
              animation: `trailFlow ${t.dur} ${t.delay} infinite linear`,
              willChange: "opacity",
              opacity: 0,
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export const FloatingParticles = ({ color = "#6366f1", count = 10 }) => {
  const particles = PARTICLE_CONFIGS.slice(0, Math.min(count, PARTICLE_CONFIGS.length));
  return (
    <div
      className="hidden md:block"
      style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0, overflow: "hidden", contain: "strict" }}
    >
      {particles.map((p, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: 4,
            height: 4,
            borderRadius: "50%",
            left: p.left,
            top: p.top,
            backgroundColor: color,
            boxShadow: `0 0 6px ${color}`,
            animation: `particleFloat ${p.dur} ${p.delay} infinite ease-in-out`,
            willChange: "transform, opacity",
            opacity: 0,
          }}
        />
      ))}
    </div>
  );
};

export const DigitalGrid = () => (
  <div style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none", contain: "strict" }}>
    <div
      style={{
        position: "absolute",
        inset: 0,
        backgroundImage:
          "linear-gradient(to right,#80808013 1px,transparent 1px),linear-gradient(to bottom,#80808013 1px,transparent 1px)",
        backgroundSize: "50px 50px",
        maskImage: "radial-gradient(ellipse at center, black, transparent 88%)",
        WebkitMaskImage: "radial-gradient(ellipse at center, black, transparent 88%)",
        animation: "gridPulse 12s ease-in-out infinite",
        willChange: "opacity",
      }}
    />
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: "radial-gradient(circle at 50% 50%, rgba(99,102,241,0.10), transparent 65%)",
        animation: "radialPulse 12s ease-in-out infinite",
        willChange: "transform, opacity",
      }}
    />
  </div>
);

export const InteractiveGlow = () => (
  <div
    className="hidden md:block"
    style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none", overflow: "hidden", contain: "strict" }}
  >
    <div
      style={{
        position: "absolute",
        width: 500,
        height: 500,
        borderRadius: "50%",
        background: "radial-gradient(circle at center, rgba(99,102,241,0.15), transparent 70%)",
        left: "5%",
        top: "5%",
        animation: "glowFloat 14s ease-in-out infinite",
        willChange: "transform, opacity",
      }}
    />
    <div
      style={{
        position: "absolute",
        width: 420,
        height: 420,
        borderRadius: "50%",
        background: "radial-gradient(circle at center, rgba(139,92,246,0.12), transparent 70%)",
        right: "5%",
        bottom: "5%",
        animation: "glowFloat2 17s ease-in-out infinite",
        willChange: "transform, opacity",
      }}
    />
  </div>
);
