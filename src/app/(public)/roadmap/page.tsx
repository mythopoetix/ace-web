import { Metadata } from "next";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Roadmap — ACE",
  description:
    "What we're building, what's shipped, and where ACE is headed. Full transparency.",
};

const ROADMAP = [
  {
    phase: "Beta 1",
    status: "shipped" as const,
    eta: "Feb–Mar 2026",
    items: [
      { name: "Personal vault architecture (Obsidian + Claude)", done: true },
      { name: "21 core skills (coaching, triage, pulse, etc.)", done: true },
      { name: "Founding cohort (8/8 seats filled)", done: true },
      { name: "Identity core + voice profile system", done: true },
      { name: "ACE Desktop app (Mac alpha)", done: true },
      { name: "1:1 build sessions", done: true },
    ],
  },
  {
    phase: "Beta 2",
    status: "active" as const,
    eta: "Apr–Jun 2026",
    items: [
      { name: "ACE Website + Members Area", done: false },
      { name: "Knowledge base (35+ pages)", done: false },
      { name: "Video library + masterclass recordings", done: false },
      { name: "/sync-core — automated skill updates", done: false },
      { name: "Affiliate program (founding partners)", done: false },
      { name: "Community discussions + Telegram integration", done: false },
    ],
  },
  {
    phase: "Beta 3",
    status: "planned" as const,
    eta: "Jun–Sep 2026",
    items: [
      { name: "Two-layer architecture (Sovereign Base + ACE Live)", done: false },
      { name: "Windows desktop app", done: false },
      { name: "Personal coherence dashboard on web", done: false },
      { name: "Practitioner tier + client deployment tools", done: false },
      { name: "Session history + transcript integration", done: false },
    ],
  },
  {
    phase: "Beta 4–5",
    status: "planned" as const,
    eta: "Sep 2026 – Feb 2027",
    items: [
      { name: "ACE-delivers-ACE (self-onboarding)", done: false },
      { name: "Mobile companion app", done: false },
      { name: "200+ active subscribers", done: false },
      { name: "65+ documented case studies", done: false },
      { name: "Strategic investment readiness", done: false },
    ],
  },
];

const STATUS_COLORS = {
  shipped: { bg: "rgba(96,216,168,0.08)", text: "var(--capacity)", label: "Shipped" },
  active: { bg: "rgba(200,160,240,0.08)", text: "var(--authority)", label: "In Progress" },
  planned: { bg: "rgba(96,152,184,0.08)", text: "var(--text-dim)", label: "Planned" },
};

export default function RoadmapPage() {
  return (
    <div className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-widget-reveal">
          <p className="font-mono text-[10px] uppercase tracking-[2px] text-[var(--text-dim)] mb-3">
            Roadmap
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-semibold mb-6">
            Where ACE is headed.
          </h1>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Full transparency on what&apos;s shipped, what&apos;s in progress, and
            what&apos;s coming. This is a living system — the roadmap evolves with
            the community.
          </p>
        </div>

        {/* Roadmap phases */}
        <div className="space-y-8">
          {ROADMAP.map((phase) => {
            const statusStyle = STATUS_COLORS[phase.status];
            return (
              <Card key={phase.phase}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-3">
                  <div className="flex items-center gap-3">
                    <h2 className="font-heading text-xl font-semibold">
                      {phase.phase}
                    </h2>
                    <Badge
                      variant={
                        phase.status === "shipped"
                          ? "capacity"
                          : phase.status === "active"
                            ? "authority"
                            : "default"
                      }
                    >
                      {statusStyle.label}
                    </Badge>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[1.5px] text-[var(--text-dim)]">
                    {phase.eta}
                  </span>
                </div>

                <ul className="space-y-3">
                  {phase.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-start gap-3 text-sm"
                    >
                      <span
                        className={`mt-1 shrink-0 ${item.done ? "text-[var(--capacity)]" : "text-[var(--text-dim)]"}`}
                      >
                        {item.done ? (
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        ) : (
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <circle cx="12" cy="12" r="10" />
                          </svg>
                        )}
                      </span>
                      <span
                        className={
                          item.done
                            ? "text-[var(--text-secondary)]"
                            : "text-[var(--text-primary)]"
                        }
                      >
                        {item.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
