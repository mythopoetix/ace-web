"use client";

import { useState } from "react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { EmailCapture } from "@/components/landing/EmailCapture";

const BETAS = [
  { batch: 1, price: 2497, status: "sold-out" as const, seats: 8 },
  { batch: 2, price: 2997, status: "current" as const, seats: 8 },
  { batch: 3, price: 3497, status: "upcoming" as const, seats: null },
  { batch: 4, price: 3997, status: "upcoming" as const, seats: null },
  { batch: 5, price: 4997, status: "upcoming" as const, seats: null },
];

const CALC_ITEMS = [
  { label: "Content creation (emails, posts, newsletters)", hours: 8 },
  { label: "Admin & email processing", hours: 6 },
  { label: "Strategy & planning", hours: 5 },
  { label: "Research & competitive analysis", hours: 4 },
  { label: "Scheduling, follow-ups, coordination", hours: 3 },
];

export default function PricingPage() {
  const [rate, setRate] = useState(150);
  const [selectedHours, setSelectedHours] = useState<Record<number, number>>(
    Object.fromEntries(CALC_ITEMS.map((_, i) => [i, CALC_ITEMS[i].hours]))
  );

  const totalHoursWeek = Object.values(selectedHours).reduce((a, b) => a + b, 0);
  const aceReduction = 0.7; // ACE saves ~70% of this time
  const savedHoursWeek = Math.round(totalHoursWeek * aceReduction);
  const savedHoursYear = savedHoursWeek * 50;
  const savedMoneyYear = savedHoursYear * rate;

  return (
    <div className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Five cohorts. One escalating price.
          </h1>
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto">
            ACE is built in small batches. Every cohort gets the full system.
            The earlier you join, the less you pay. Post-beta price: $5,000+.
          </p>
        </div>

        {/* Beta Ladder */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row items-stretch gap-3">
            {BETAS.map((beta) => {
              const isCurrent = beta.status === "current";
              const isSoldOut = beta.status === "sold-out";

              return (
                <div
                  key={beta.batch}
                  className={`flex-1 glass rounded-xl p-5 relative transition-all ${
                    isCurrent
                      ? "ring-1 ring-[var(--capacity)] md:scale-105 md:z-10"
                      : isSoldOut
                        ? "opacity-50"
                        : "opacity-70"
                  }`}
                >
                  {isCurrent && (
                    <div className="absolute -top-2.5 left-1/2 -translate-x-1/2">
                      <Badge variant="capacity">You Are Here</Badge>
                    </div>
                  )}
                  {isSoldOut && (
                    <div className="absolute -top-2.5 left-1/2 -translate-x-1/2">
                      <Badge variant="sold-out">Sold Out</Badge>
                    </div>
                  )}

                  <p className="font-mono text-[9px] uppercase tracking-[2px] text-[var(--text-dim)] mb-1">
                    Batch {beta.batch}
                  </p>
                  <p className={`font-heading text-2xl font-bold ${isSoldOut ? "line-through text-[var(--text-dim)]" : ""}`}>
                    ${beta.price.toLocaleString()}
                  </p>
                  {beta.seats && (
                    <p className="font-mono text-[9px] text-[var(--text-dim)] mt-1">
                      {isSoldOut ? `${beta.seats}/${beta.seats} filled` : `${beta.seats} seats`}
                    </p>
                  )}
                </div>
              );
            })}

            {/* Post-beta */}
            <div className="flex-1 glass rounded-xl p-5 opacity-50">
              <p className="font-mono text-[9px] uppercase tracking-[2px] text-[var(--text-dim)] mb-1">
                Post-Beta
              </p>
              <p className="font-heading text-2xl font-bold">$5,000+</p>
              <p className="font-mono text-[9px] text-[var(--text-dim)] mt-1">
                Full price
              </p>
            </div>
          </div>

          {/* Arrow indicator */}
          <div className="flex justify-center mt-4">
            <p className="text-xs text-[var(--text-dim)] italic">
              Price increases with each cohort. Founding rates don&apos;t come back.
            </p>
          </div>
        </div>

        {/* What's included */}
        <Card gradient className="mb-20">
          <h2 className="font-heading text-lg font-semibold mb-4 text-center">
            Every cohort gets the full system.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              "Full ACE vault built around your identity",
              "21+ intelligent skills, custom-configured",
              "90-minute 1:1 build session with Nikhil",
              "4 weeks of group calls + community",
              "Desktop Command Center app",
              "All integrations (Gmail, Calendar, Fathom, etc.)",
              "1-year Asraya community membership",
              "Video library + masterclass recordings",
              "Weekly skill updates pushed to your vault",
              "Knowledge base access",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                <span
                  className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                  style={{ backgroundColor: "var(--capacity)", boxShadow: "0 0 4px var(--capacity)" }}
                />
                {item}
              </div>
            ))}
          </div>
        </Card>

        {/* ═══ ROI CALCULATOR ═══ */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">
              What&apos;s your time worth?
            </h2>
            <p className="text-sm text-[var(--text-secondary)] max-w-md mx-auto">
              Adjust the hours below to match your week. See what ACE saves you.
            </p>
          </div>

          <Card className="mb-6">
            {/* Hourly rate */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <label className="font-mono text-[10px] uppercase tracking-[2px] text-[var(--text-dim)]">
                  Your effective hourly rate
                </label>
                <span className="font-heading text-lg font-bold text-[var(--authority)]">
                  ${rate}/hr
                </span>
              </div>
              <input
                type="range"
                min={50}
                max={500}
                step={25}
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="w-full h-1 rounded-full appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, var(--authority) ${((rate - 50) / 450) * 100}%, var(--bg-elevated) ${((rate - 50) / 450) * 100}%)`,
                }}
              />
              <div className="flex justify-between mt-1">
                <span className="font-mono text-[8px] text-[var(--text-dim)]">$50</span>
                <span className="font-mono text-[8px] text-[var(--text-dim)]">$500</span>
              </div>
            </div>

            {/* Task hours */}
            <div className="space-y-4">
              {CALC_ITEMS.map((item, i) => (
                <div key={i}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-[var(--text-secondary)]">{item.label}</span>
                    <span className="font-mono text-xs text-[var(--text-dim)]">
                      {selectedHours[i]}h/week
                    </span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={20}
                    step={1}
                    value={selectedHours[i]}
                    onChange={(e) =>
                      setSelectedHours((prev) => ({
                        ...prev,
                        [i]: Number(e.target.value),
                      }))
                    }
                    className="w-full h-0.5 rounded-full appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, var(--capacity) ${(selectedHours[i] / 20) * 100}%, var(--bg-elevated) ${(selectedHours[i] / 20) * 100}%)`,
                    }}
                  />
                </div>
              ))}
            </div>
          </Card>

          {/* Results */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card gradient className="text-center">
              <p className="font-heading text-3xl font-bold text-[var(--capacity)]">
                {savedHoursWeek}h
              </p>
              <p className="font-mono text-[9px] uppercase tracking-[2px] text-[var(--text-dim)] mt-1">
                Saved per week
              </p>
            </Card>
            <Card gradient className="text-center">
              <p className="font-heading text-3xl font-bold text-[var(--authority)]">
                {savedHoursYear.toLocaleString()}h
              </p>
              <p className="font-mono text-[9px] uppercase tracking-[2px] text-[var(--text-dim)] mt-1">
                Saved per year
              </p>
            </Card>
            <Card gradient className="text-center">
              <p className="font-heading text-3xl font-bold gradient-text">
                ${savedMoneyYear.toLocaleString()}
              </p>
              <p className="font-mono text-[9px] uppercase tracking-[2px] text-[var(--text-dim)] mt-1">
                Value reclaimed annually
              </p>
            </Card>
          </div>

          <p className="text-center mt-4 text-xs text-[var(--text-dim)]">
            ACE handles ~70% of these tasks autonomously. That&apos;s {savedHoursWeek} hours back
            every week — at your rate, that&apos;s a{" "}
            <strong className="text-[var(--capacity)]">
              {Math.round(savedMoneyYear / 2997)}x return
            </strong>{" "}
            on a $2,997 investment.
          </p>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto mb-16">
          <h3 className="font-heading text-xl font-semibold mb-6 text-center">
            Common questions
          </h3>
          <div className="space-y-3">
            {[
              {
                q: "This isn't a course or a template.",
                a: "It's a custom-built intelligent system configured around your identity, connected to your tools, and getting smarter every week. You walk away with a working operating system.",
              },
              {
                q: "Your vault is yours forever.",
                a: "Plain text. Git-backed. Runs on your machine. Even if ACE disappeared tomorrow, your vault keeps working. That's sovereignty.",
              },
              {
                q: "The system compounds.",
                a: "Every session leaves residue. Your patterns, decisions, voice — they accumulate. Six months from now, your ACE knows you better than any tool you've ever used.",
              },
              {
                q: "Why does price increase?",
                a: "Each cohort benefits from everything built before it. The system is more powerful with every batch. Early adopters get the best rate because they're building alongside us.",
              },
            ].map((item) => (
              <Card key={item.q}>
                <h4 className="font-heading text-sm font-semibold mb-1">{item.q}</h4>
                <p className="text-sm text-[var(--text-secondary)]">{item.a}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="font-heading text-2xl font-bold mb-3">
            Batch 2 is forming now.
          </h3>
          <p className="text-[var(--text-secondary)] text-sm mb-8 max-w-md mx-auto">
            Join the waitlist for first access. Watch the Paradigm Shift while you wait.
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
