"use client";

const SIGNALS = [
  { label: "Truth", color: "var(--authority)", leg: "A" },
  { label: "Choice", color: "var(--authority)", leg: "A" },
  { label: "Expression", color: "var(--authority)", leg: "A" },
  { label: "Regulation", color: "var(--capacity)", leg: "C" },
  { label: "Depth", color: "var(--capacity)", leg: "C" },
  { label: "Resilience", color: "var(--capacity)", leg: "C" },
  { label: "Rhythm", color: "var(--expansion)", leg: "E" },
  { label: "Containers", color: "var(--expansion)", leg: "E" },
  { label: "Realization", color: "var(--expansion)", leg: "E" },
];

export function SignalDots({ className = "" }: { className?: string }) {
  return (
    <div className={`grid grid-cols-3 gap-2 ${className}`}>
      {SIGNALS.map((s, i) => (
        <div
          key={s.label}
          className="w-2.5 h-2.5 rounded-full"
          title={s.label}
          style={{
            backgroundColor: s.color,
            boxShadow: `0 0 5px ${s.color}`,
            opacity: 0.8,
            animation: `breathe ${2 + (i % 3) * 0.3}s ease-in-out infinite`,
            animationDelay: `${i * 0.15}s`,
          }}
        />
      ))}
    </div>
  );
}
