"use client";

import { useEffect, useState } from "react";
import { CoherenceOrb } from "./CoherenceOrb";

const SIGNALS = [
  { name: "Truth", leg: "A", status: "green" },
  { name: "Choice", leg: "A", status: "green" },
  { name: "Expression", leg: "A", status: "yellow" },
  { name: "Regulation", leg: "C", status: "green" },
  { name: "Depth", leg: "C", status: "green" },
  { name: "Resilience", leg: "C", status: "yellow" },
  { name: "Rhythm", leg: "E", status: "green" },
  { name: "Containers", leg: "E", status: "green" },
  { name: "Realization", leg: "E", status: "green" },
];

const STATUS_COLORS: Record<string, string> = {
  green: "#60d8a8",
  yellow: "#f0e070",
  red: "#e07080",
};

const PRIORITIES = [
  { text: "Ship ACE website to production", color: "var(--expansion)" },
  { text: "Process Blueprint for Cohort 2 member", color: "var(--authority)" },
  { text: "Weekly group call prep", color: "var(--capacity)" },
];

export function LiveCommandCenter() {
  const [activeSignal, setActiveSignal] = useState(-1);
  const [coherenceState, setCoherenceState] = useState("Stable");
  const [score, setScore] = useState(7);
  const [time, setTime] = useState("");

  useEffect(() => {
    // Cycle through signals with a subtle highlight
    const interval = setInterval(() => {
      setActiveSignal((prev) => (prev + 1) % 9);
    }, 2000);

    // Update time
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
    };
    updateTime();
    const timeInterval = setInterval(updateTime, 60000);

    // Subtle score fluctuation
    const scoreInterval = setInterval(() => {
      setScore((prev) => {
        const delta = Math.random() > 0.5 ? 0 : Math.random() > 0.5 ? 1 : -1;
        return Math.min(9, Math.max(5, prev + delta));
      });
    }, 5000);

    return () => {
      clearInterval(interval);
      clearInterval(timeInterval);
      clearInterval(scoreInterval);
    };
  }, []);

  useEffect(() => {
    if (score >= 8) setCoherenceState("Coherent");
    else if (score >= 6) setCoherenceState("Stable");
    else setCoherenceState("Drifting");
  }, [score]);

  return (
    <div className="glass rounded-xl overflow-hidden" style={{ boxShadow: "0 0 40px rgba(136,120,255,0.06), 0 20px 60px rgba(0,0,0,0.2)" }}>
      {/* Title bar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-[var(--glass-border)]" style={{ background: "rgba(8,10,18,0.8)" }}>
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-[10px] h-[10px] rounded-full bg-[#ff5f57]" />
            <div className="w-[10px] h-[10px] rounded-full bg-[#febc2e]" />
            <div className="w-[10px] h-[10px] rounded-full bg-[#28c840]" />
          </div>
          <span className="font-mono text-[8px] uppercase tracking-[2px] text-[var(--text-dim)] ml-3">
            ACE Desktop — Command Center
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-mono text-[8px] text-[var(--text-dim)]">{time}</span>
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full border border-[rgba(96,216,168,0.2)]" style={{ background: "rgba(96,216,168,0.06)" }}>
            <div className="w-[5px] h-[5px] rounded-full animate-breathe" style={{ backgroundColor: "#60d8a8", boxShadow: "0 0 6px rgba(96,216,168,0.6)" }} />
            <span className="font-mono text-[7px] uppercase tracking-[1.5px] text-[var(--capacity)]">
              {coherenceState}
            </span>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 md:p-8" style={{ background: "rgba(8,10,18,0.4)" }}>
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8">
          {/* Left — Orb + Signals */}
          <div className="flex flex-col items-center gap-4">
            <CoherenceOrb size="dashboard" />

            {/* Score */}
            <div className="text-center">
              <p className="font-heading text-2xl font-semibold text-[var(--capacity)]">
                {score}/9
              </p>
              <p className="font-mono text-[7px] uppercase tracking-[2px] text-[var(--text-dim)]">
                Signals Green
              </p>
            </div>

            {/* 3x3 Signal Grid */}
            <div className="grid grid-cols-3 gap-2">
              {SIGNALS.map((s, i) => (
                <div
                  key={s.name}
                  className="relative group cursor-default"
                  title={`${s.name} — ${s.status.toUpperCase()}`}
                >
                  <div
                    className={`w-3 h-3 rounded-full transition-all duration-500 ${activeSignal === i ? "scale-125" : ""}`}
                    style={{
                      backgroundColor: STATUS_COLORS[s.status],
                      boxShadow: `0 0 ${activeSignal === i ? "10px" : "4px"} ${STATUS_COLORS[s.status]}`,
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Legend */}
            <div className="flex gap-3">
              {[
                { leg: "A", color: "var(--authority)", label: "Auth" },
                { leg: "C", color: "var(--capacity)", label: "Cap" },
                { leg: "E", color: "var(--expansion)", label: "Exp" },
              ].map((l) => (
                <div key={l.leg} className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: l.color }} />
                  <span className="font-mono text-[6px] uppercase tracking-[1px] text-[var(--text-dim)]">{l.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Priorities + Activity */}
          <div className="space-y-6">
            {/* Mode + Energy */}
            <div className="flex gap-3">
              <div className="px-2.5 py-1 rounded-md border border-[var(--border)]">
                <span className="font-mono text-[7px] uppercase tracking-[1.5px] text-[var(--text-dim)]">Mode</span>
                <p className="font-mono text-[9px] font-medium text-[var(--expansion)]">EXECUTE</p>
              </div>
              <div className="px-2.5 py-1 rounded-md border border-[var(--border)]">
                <span className="font-mono text-[7px] uppercase tracking-[1.5px] text-[var(--text-dim)]">Energy</span>
                <p className="font-mono text-[9px] font-medium text-[var(--capacity)]">HIGH</p>
              </div>
              <div className="px-2.5 py-1 rounded-md border border-[var(--border)]">
                <span className="font-mono text-[7px] uppercase tracking-[1.5px] text-[var(--text-dim)]">Streak</span>
                <p className="font-mono text-[9px] font-medium text-[var(--authority)]">14 days</p>
              </div>
            </div>

            {/* Priorities */}
            <div>
              <p className="font-mono text-[7px] uppercase tracking-[2px] text-[var(--text-dim)] mb-2">
                Today&apos;s Priorities
              </p>
              <div className="space-y-2">
                {PRIORITIES.map((p, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <div className="w-[5px] h-[5px] rounded-full" style={{ backgroundColor: p.color, boxShadow: `0 0 4px ${p.color}` }} />
                    <span className="text-xs text-[var(--text-secondary)]">{p.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent */}
            <div>
              <p className="font-mono text-[7px] uppercase tracking-[2px] text-[var(--text-dim)] mb-2">
                Recent Activity
              </p>
              <div className="space-y-1.5">
                {[
                  { action: "/start completed", time: "8:02 AM", color: "var(--capacity)" },
                  { action: "Blueprint processed — Joe H.", time: "Yesterday", color: "var(--authority)" },
                  { action: "3 skills pushed via /sync-core", time: "Yesterday", color: "var(--expansion)" },
                ].map((a, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full" style={{ backgroundColor: a.color }} />
                      <span className="text-[10px] text-[var(--text-secondary)]">{a.action}</span>
                    </div>
                    <span className="font-mono text-[8px] text-[var(--text-dim)]">{a.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
