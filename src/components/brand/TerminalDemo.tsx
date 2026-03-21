"use client";

import { useEffect, useState, useRef } from "react";

const LINES = [
  { type: "input" as const, text: "/start", delay: 800 },
  { type: "output" as const, text: "", delay: 400 },
  { type: "output" as const, text: "  ◉ Reading state.md... mode: execute, energy: high", delay: 60 },
  { type: "output" as const, text: "  ◉ Checking calendar... 2 events today", delay: 60 },
  { type: "output" as const, text: "  ◉ Scanning active outcomes... 3 tracked", delay: 60 },
  { type: "output" as const, text: "", delay: 200 },
  { type: "output" as const, text: "  ┌─ AUTHORITY ──────────────────────────────", delay: 40 },
  { type: "output" as const, text: "  │  Truth: aligned. Last /coach 2 days ago.", delay: 50 },
  { type: "output" as const, text: "  │  Identity core: active. Voice calibrated.", delay: 50 },
  { type: "output" as const, text: "  └────────────────────────────── ● GROUNDED", delay: 40 },
  { type: "output" as const, text: "", delay: 150 },
  { type: "output" as const, text: "  ┌─ CAPACITY ───────────────────────────────", delay: 40 },
  { type: "output" as const, text: "  │  Energy: high. Sleep: good. No burnout", delay: 50 },
  { type: "output" as const, text: "  │  signals. Last regulation block: yesterday.", delay: 50 },
  { type: "output" as const, text: "  └────────────────────────────── ● GROUNDED", delay: 40 },
  { type: "output" as const, text: "", delay: 150 },
  { type: "output" as const, text: "  ┌─ EXPANSION ──────────────────────────────", delay: 40 },
  { type: "output" as const, text: "  │  3 outcomes active. Weekly targets fresh.", delay: 50 },
  { type: "output" as const, text: "  │  Velocity: 12 actions in last 7 days.", delay: 50 },
  { type: "output" as const, text: "  └────────────────────────────── ● GROUNDED", delay: 40 },
  { type: "output" as const, text: "", delay: 300 },
  { type: "output" as const, text: "  Today's orientation:", delay: 80 },
  { type: "output" as const, text: "  → First block: ACE website — deploy to Vercel", delay: 70 },
  { type: "output" as const, text: "  → 11:00 AM: Group call (Cohort 2 prep)", delay: 70 },
  { type: "output" as const, text: "  → Protect 2:00–3:00 PM for deep work", delay: 70 },
  { type: "output" as const, text: "", delay: 200 },
  { type: "output" as const, text: "  All three legs grounded. You're clear to execute.", delay: 100 },
];

export function TerminalDemo() {
  const [visibleLines, setVisibleLines] = useState<typeof LINES>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [started, setStarted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!started) return;

    let lineIndex = 0;
    let timeout: NodeJS.Timeout;

    function showNextLine() {
      if (lineIndex >= LINES.length) {
        setIsTyping(false);
        return;
      }

      const line = LINES[lineIndex];
      setVisibleLines((prev) => [...prev, line]);
      lineIndex++;

      // Auto-scroll
      if (containerRef.current) {
        containerRef.current.scrollTop = containerRef.current.scrollHeight;
      }

      timeout = setTimeout(showNextLine, line.delay);
    }

    setIsTyping(true);
    timeout = setTimeout(showNextLine, 500);

    return () => clearTimeout(timeout);
  }, [started]);

  // Start when scrolled into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [started]);

  return (
    <div className="glass rounded-xl overflow-hidden" style={{ boxShadow: "0 0 40px rgba(136,120,255,0.06), 0 20px 60px rgba(0,0,0,0.2)" }}>
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[var(--glass-border)]" style={{ background: "rgba(8,10,18,0.8)" }}>
        <div className="flex gap-1.5">
          <div className="w-[10px] h-[10px] rounded-full bg-[#ff5f57]" />
          <div className="w-[10px] h-[10px] rounded-full bg-[#febc2e]" />
          <div className="w-[10px] h-[10px] rounded-full bg-[#28c840]" />
        </div>
        <span className="font-mono text-[8px] uppercase tracking-[2px] text-[var(--text-dim)] ml-3">
          ACE Terminal
        </span>
        {isTyping && (
          <div className="ml-auto flex items-center gap-1">
            <div className="w-1 h-1 rounded-full bg-[var(--capacity)] animate-breathe" />
            <span className="font-mono text-[7px] text-[var(--capacity)]">running</span>
          </div>
        )}
      </div>

      {/* Terminal body */}
      <div
        ref={containerRef}
        className="p-4 md:p-5 font-mono text-[11px] leading-[1.7] h-[340px] overflow-y-auto"
        style={{ background: "rgba(6,8,16,0.9)" }}
      >
        {visibleLines.map((line, i) => (
          <div key={i} className={line.type === "input" ? "text-[var(--text-primary)]" : ""}>
            {line.type === "input" ? (
              <span>
                <span className="text-[var(--capacity)]">❯ </span>
                <span className="text-[var(--text-primary)] font-medium">{line.text}</span>
              </span>
            ) : (
              <span className="text-[var(--text-secondary)]">{line.text}</span>
            )}
          </div>
        ))}
        {isTyping && (
          <span className="inline-block w-[6px] h-[13px] bg-[var(--authority)] animate-[cursor-blink_1s_step-end_infinite] ml-1" />
        )}
      </div>
    </div>
  );
}
