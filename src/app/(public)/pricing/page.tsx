"use client";

import { useState } from "react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { EmailCapture } from "@/components/landing/EmailCapture";

const BETAS = [
  { cohort: 1, price: 2497, status: "sold-out" as const },
  { cohort: 2, price: 2997, status: "current" as const },
  { cohort: 3, price: 3497, status: "future" as const },
  { cohort: 4, price: 3997, status: "future" as const },
  { cohort: 5, price: 4997, status: "future" as const },
];

const CALC_CATEGORIES = [
  { label: "Content & copywriting", detail: "Emails, newsletters, social posts, articles", defaultHours: 6 },
  { label: "Research & strategy", detail: "Competitive analysis, market research, planning", defaultHours: 5 },
  { label: "Email & communication", detail: "Processing inbox, drafting replies, follow-ups", defaultHours: 5 },
  { label: "Coding & design", detail: "Websites, apps, dashboards, presentations, PDFs", defaultHours: 6 },
  { label: "Admin & coordination", detail: "Scheduling, CRM updates, data entry, reporting", defaultHours: 4 },
  { label: "Coaching & reflection", detail: "Journaling, pattern recognition, decision review", defaultHours: 2 },
];

export default function PricingPage() {
  const [rate, setRate] = useState(150);
  const [hours, setHours] = useState<Record<number, number>>(
    Object.fromEntries(CALC_CATEGORIES.map((c, i) => [i, c.defaultHours]))
  );

  const totalHours = Object.values(hours).reduce((a, b) => a + b, 0);
  const savedHoursWeek = Math.round(totalHours * 0.7);
  const savedHoursYear = savedHoursWeek * 50;
  const savedValue = savedHoursYear * rate;
  const roi = Math.round(savedValue / 2997);

  return (
    <div className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Five cohorts. One escalating price.
          </h1>
          <p className="text-[var(--text-secondary)] max-w-lg mx-auto text-sm">
            Every cohort gets the full system. The earlier you join, the less
            you pay. The price never goes down.
          </p>
        </div>

        {/* ═══ PRICING LADDER ═══ */}
        <div className="mb-8">
          {/* Progress bar */}
          <div className="relative h-1 bg-[var(--bg-elevated)] rounded-full mb-8 mx-4">
            <div
              className="absolute left-0 top-0 h-full rounded-full"
              style={{
                width: "20%",
                background: "var(--gradient-accent)",
              }}
            />
            {/* Cohort markers */}
            {BETAS.map((beta, i) => (
              <div
                key={beta.cohort}
                className="absolute top-1/2 -translate-y-1/2"
                style={{ left: `${(i / (BETAS.length)) * 100 + 10}%` }}
              >
                <div
                  className={`w-3 h-3 rounded-full border-2 ${
                    beta.status === "sold-out"
                      ? "bg-[var(--text-dim)] border-[var(--text-dim)]"
                      : beta.status === "current"
                        ? "bg-[var(--capacity)] border-[var(--capacity)]"
                        : "bg-[var(--bg-card)] border-[var(--border)]"
                  }`}
                  style={
                    beta.status === "current"
                      ? { boxShadow: "0 0 8px var(--capacity)" }
                      : undefined
                  }
                />
              </div>
            ))}
            {/* Post-beta marker */}
            <div className="absolute top-1/2 -translate-y-1/2 right-0">
              <div className="w-3 h-3 rounded-full bg-[var(--bg-card)] border-2 border-[var(--border)]" />
            </div>
          </div>

          {/* Cohort cards */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
            {BETAS.map((beta) => {
              const isCurrent = beta.status === "current";
              const isSoldOut = beta.status === "sold-out";

              return (
                <div
                  key={beta.cohort}
                  className={`rounded-xl p-4 text-center transition-all ${
                    isCurrent
                      ? "glass ring-1 ring-[var(--capacity)] relative"
                      : isSoldOut
                        ? "glass opacity-40"
                        : "glass opacity-50"
                  }`}
                >
                  {isCurrent && (
                    <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap">
                      <Badge variant="capacity">Now</Badge>
                    </div>
                  )}
                  <p className="font-mono text-[8px] uppercase tracking-[2px] text-[var(--text-dim)] mb-1">
                    {isSoldOut ? "Sold Out" : `Cohort ${beta.cohort}`}
                  </p>
                  <p
                    className={`font-heading text-lg md:text-xl font-bold ${
                      isSoldOut ? "line-through text-[var(--text-dim)]" : ""
                    } ${isCurrent ? "text-[var(--capacity)]" : ""}`}
                  >
                    ${beta.price.toLocaleString()}
                  </p>
                </div>
              );
            })}

            {/* Post-beta */}
            <div className="rounded-xl glass p-4 text-center opacity-40">
              <p className="font-mono text-[8px] uppercase tracking-[2px] text-[var(--text-dim)] mb-1">
                Post-Beta
              </p>
              <p className="font-heading text-lg md:text-xl font-bold">$5K+</p>
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-[var(--text-dim)] mb-20">
          Founding rates are a fraction of what this will cost at scale. They don&apos;t come back.
        </p>

        {/* ═══ WHAT'S INCLUDED ═══ */}
        <div className="mb-20">
          <h2 className="font-heading text-2xl font-bold text-center mb-8">
            Every cohort gets everything.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { item: "Full ACE vault built around your identity", color: "var(--authority)" },
              { item: "21+ intelligent skills, custom-configured for you", color: "var(--authority)" },
              { item: "90-minute 1:1 build session with Nikhil", color: "var(--capacity)" },
              { item: "4 weeks of group calls + community", color: "var(--capacity)" },
              { item: "Desktop Command Center app (Mac)", color: "var(--expansion)" },
              { item: "All integrations — Gmail, Calendar, Fathom, Stripe, etc.", color: "var(--expansion)" },
              { item: "Video library + Paradigm Shift masterclass", color: "var(--authority)" },
              { item: "Weekly skill updates pushed to your vault", color: "var(--capacity)" },
              { item: "Knowledge base + full documentation", color: "var(--expansion)" },
              { item: "1-year Asraya community membership ($397 value)", color: "var(--authority)" },
            ].map((i) => (
              <div key={i.item} className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={i.color}
                  strokeWidth="2.5"
                  className="mt-0.5 shrink-0"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {i.item}
              </div>
            ))}
          </div>
        </div>

        {/* ═══ ROI CALCULATOR ═══ */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">
              What&apos;s your time actually worth?
            </h2>
            <p className="text-sm text-[var(--text-secondary)] max-w-md mx-auto">
              Adjust the sliders to match your week. ACE handles ~70% of these
              tasks — see what that means for you.
            </p>
          </div>

          <Card className="mb-6">
            {/* Hourly rate */}
            <div className="mb-8 pb-6 border-b border-[var(--glass-border)]">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-[var(--text-secondary)]">
                  Your effective hourly rate
                </span>
                <span className="font-heading text-2xl font-bold text-[var(--authority)]">
                  ${rate}
                  <span className="text-sm font-normal text-[var(--text-dim)]">/hr</span>
                </span>
              </div>
              <input
                type="range"
                min={50}
                max={500}
                step={25}
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, var(--authority) ${((rate - 50) / 450) * 100}%, var(--bg-elevated) ${((rate - 50) / 450) * 100}%)`,
                }}
              />
              <div className="flex justify-between mt-1">
                <span className="font-mono text-[8px] text-[var(--text-dim)]">$50/hr</span>
                <span className="font-mono text-[8px] text-[var(--text-dim)]">$500/hr</span>
              </div>
            </div>

            {/* Task categories */}
            <div className="space-y-5">
              {CALC_CATEGORIES.map((cat, i) => (
                <div key={i}>
                  <div className="flex items-start justify-between mb-1.5 gap-4">
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-[var(--text-primary)]">{cat.label}</p>
                      <p className="text-[11px] text-[var(--text-dim)]">{cat.detail}</p>
                    </div>
                    <span className="font-mono text-sm font-medium text-[var(--text-secondary)] shrink-0 w-16 text-right">
                      {hours[i]}h
                      <span className="text-[var(--text-dim)]">/wk</span>
                    </span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={20}
                    step={1}
                    value={hours[i]}
                    onChange={(e) =>
                      setHours((prev) => ({ ...prev, [i]: Number(e.target.value) }))
                    }
                    className="w-full h-1 rounded-full appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, var(--capacity) ${(hours[i] / 20) * 100}%, var(--bg-elevated) ${(hours[i] / 20) * 100}%)`,
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Summary line */}
            <div className="mt-6 pt-4 border-t border-[var(--glass-border)] flex items-center justify-between">
              <span className="text-sm text-[var(--text-dim)]">
                Total: {totalHours}h/week on tasks ACE can handle
              </span>
              <span className="text-sm text-[var(--capacity)] font-medium">
                ACE saves ~{savedHoursWeek}h/week
              </span>
            </div>
          </Card>

          {/* Results */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <Card gradient className="text-center py-6">
              <p className="font-heading text-3xl md:text-4xl font-bold text-[var(--capacity)]">
                {savedHoursWeek}h
              </p>
              <p className="font-mono text-[8px] uppercase tracking-[2px] text-[var(--text-dim)] mt-1">
                Saved weekly
              </p>
            </Card>
            <Card gradient className="text-center py-6">
              <p className="font-heading text-3xl md:text-4xl font-bold text-[var(--authority)]">
                {savedHoursYear.toLocaleString()}h
              </p>
              <p className="font-mono text-[8px] uppercase tracking-[2px] text-[var(--text-dim)] mt-1">
                Saved yearly
              </p>
            </Card>
            <Card gradient className="text-center py-6">
              <p className="font-heading text-3xl md:text-4xl font-bold gradient-text">
                ${(savedValue / 1000).toFixed(0)}K
              </p>
              <p className="font-mono text-[8px] uppercase tracking-[2px] text-[var(--text-dim)] mt-1">
                Value reclaimed
              </p>
            </Card>
          </div>

          <div className="glass rounded-xl p-5 text-center">
            <p className="text-sm text-[var(--text-secondary)]">
              At ${rate}/hr, ACE saves you{" "}
              <strong className="text-[var(--text-primary)]">
                ${savedValue.toLocaleString()}
              </strong>{" "}
              in reclaimed capacity per year. That&apos;s a{" "}
              <strong className="text-[var(--capacity)] text-lg">
                {roi}x return
              </strong>{" "}
              on a $2,997 investment.
            </p>
          </div>
        </div>

        {/* ═══ FAQ ═══ */}
        <div className="max-w-3xl mx-auto mb-20">
          <h3 className="font-heading text-xl font-bold mb-6 text-center">
            Questions
          </h3>
          <div className="space-y-3">
            {[
              {
                q: "What is this exactly?",
                a: "A custom-built AI operating system configured around your identity, connected to your tools, and getting smarter every week. Not a course. Not a template. A working intelligence infrastructure you own.",
              },
              {
                q: "What do I own if I cancel?",
                a: "Everything. Your vault is plain text on your machine, backed by Git. Even if ACE disappeared, your vault keeps working. That's sovereignty.",
              },
              {
                q: "How is the 70% time savings calculated?",
                a: "Based on actual usage patterns from founding members. Content drafting, email processing, research, scheduling, and admin work are the highest-impact categories. Coding and design vary by complexity but ACE routinely builds complete projects in single sessions.",
              },
              {
                q: "Why does the price go up?",
                a: "Each cohort benefits from everything built before it — more skills, more integrations, more intelligence. Early adopters build alongside us and get the best rate for life.",
              },
            ].map((item) => (
              <Card key={item.q}>
                <h4 className="font-heading text-sm font-semibold mb-1">{item.q}</h4>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.a}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* ═══ CTA ═══ */}
        <div className="text-center">
          <h3 className="font-heading text-2xl font-bold mb-3">
            Cohort 2 is open.
          </h3>
          <p className="text-[var(--text-secondary)] text-sm mb-8 max-w-md mx-auto">
            Join the waitlist for first access when seats open.
          </p>
          <EmailCapture />
          <div className="mt-6">
            <Button variant="ghost" size="sm" href="/paradigm-shift">
              Watch the Paradigm Shift →
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
