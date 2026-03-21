"use client";

interface CoherenceOrbProps {
  size?: "hero" | "nav" | "dashboard";
  animate?: boolean;
  className?: string;
}

export function CoherenceOrb({
  size = "hero",
  animate = true,
  className = "",
}: CoherenceOrbProps) {
  const sizeMap = {
    hero: "w-48 h-48 md:w-64 md:h-64",
    nav: "w-7 h-7",
    dashboard: "w-[72px] h-[72px]",
  };

  return (
    <div className={`relative ${sizeMap[size]} ${className}`}>
      {/* Pulse ring */}
      {animate && size !== "nav" && (
        <div
          className="absolute inset-0 rounded-full"
          style={{
            border: "1px solid rgba(136,120,255,0.4)",
            animation: "orbPulseRing 2.5s ease-out infinite",
          }}
        />
      )}

      {/* Main orb */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 38% 38%, #8878ff, #c8a0f0, #60d8a8)",
          backgroundSize: "200% 200%",
          boxShadow: `
            0 0 ${size === "hero" ? "40px" : "20px"} rgba(136,120,255,0.5),
            0 0 ${size === "hero" ? "80px" : "50px"} rgba(200,160,240,0.25),
            0 0 ${size === "hero" ? "140px" : "80px"} rgba(96,216,168,0.12)
          `,
          animation: animate
            ? `orbShift 8s ease-in-out infinite, ${size === "hero" ? "cc-orb-pulse 3.5s ease-in-out infinite" : "breathe 2.5s ease-in-out infinite"}`
            : undefined,
        }}
      />

      {/* Spinning conic ring */}
      {animate && size === "hero" && (
        <div
          className="absolute inset-[-4px] rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, #8878ff, #60d8a8, #e080a0, #c8a0f0, #8878ff)",
            animation: "orbRingSpin 3s linear infinite",
            mask: "radial-gradient(circle, transparent 68%, black 70%, black 100%)",
            WebkitMask:
              "radial-gradient(circle, transparent 68%, black 70%, black 100%)",
            opacity: 0.6,
          }}
        />
      )}
    </div>
  );
}
