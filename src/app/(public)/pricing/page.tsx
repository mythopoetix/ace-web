import { Metadata } from "next";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { EmailCapture } from "@/components/landing/EmailCapture";

export const metadata: Metadata = {
  title: "Pricing — ACE",
  description:
    "Join the next cohort of ACE — the intelligent operating system built around who you are. Founding rates increase each batch.",
};

export default function PricingPage() {
  return (
    <div className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-widget-reveal">
          <p className="font-mono text-[10px] uppercase tracking-[2px] text-[var(--text-dim)] mb-3">
            Pricing
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-semibold mb-6">
            One system. One investment.
            <br />
            <span className="gradient-text">Compounding returns.</span>
          </h1>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
            ACE is built in small cohorts. Each batch gets the full system,
            custom-configured around your identity and workflow. Founding rates
            increase with each cohort.
          </p>
        </div>

        {/* Pricing ladder */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Batch 1 — Sold Out */}
          <Card className="opacity-60 relative">
            <div className="absolute top-4 right-4">
              <Badge variant="sold-out">Sold Out</Badge>
            </div>
            <span className="font-mono text-[9px] uppercase tracking-[2px] text-[var(--text-dim)]">
              Batch 1 — Founding
            </span>
            <h3 className="font-heading text-xl font-semibold mt-1 mb-1 text-[var(--text-dim)]">
              $2,497
            </h3>
            <p className="text-sm text-[var(--text-dim)] mb-4">
              8 seats. All filled.
            </p>
            <p className="text-sm text-[var(--text-dim)] line-through">
              First cohort founding rate
            </p>
          </Card>

          {/* Batch 2 — Current */}
          <Card
            gradient
            className="relative ring-1 ring-[var(--border-hover)] md:scale-105"
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <Badge variant="capacity">Now Forming</Badge>
            </div>
            <span className="font-mono text-[9px] uppercase tracking-[2px] text-[var(--capacity)]">
              Batch 2
            </span>
            <h3 className="font-heading text-4xl font-semibold mt-1 mb-1">
              $2,997
            </h3>
            <p className="text-sm text-[var(--text-secondary)] mb-6">
              Limited seats. Founding rate.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                "Full ACE template vault + custom skills",
                "90-minute 1:1 build session with Nikhil",
                "4 weeks of group calls + community support",
                "Desktop Command Center app (Mac)",
                "MCP integration setup (Gmail, Calendar, Fathom, etc.)",
                "1-year Asraya membership ($397 value)",
                "Video library + masterclass recordings",
                "Weekly skill updates pushed to your vault",
              ].map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2 text-sm text-[var(--text-secondary)]"
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                    style={{
                      backgroundColor: "var(--capacity)",
                      boxShadow: "0 0 4px var(--capacity)",
                    }}
                  />
                  {f}
                </li>
              ))}
            </ul>

            <Button variant="primary" href="#waitlist" className="w-full">
              Join the Waitlist
            </Button>
          </Card>

          {/* Future Batches */}
          <Card>
            <span className="font-mono text-[9px] uppercase tracking-[2px] text-[var(--text-dim)]">
              Batch 3+
            </span>
            <h3 className="font-heading text-xl font-semibold mt-1 mb-1">
              $3,997+
            </h3>
            <p className="text-sm text-[var(--text-secondary)] mb-6">
              Price increases each cohort.
            </p>

            <div className="space-y-4 text-sm text-[var(--text-secondary)]">
              <p>
                Every cohort gets the same full build — but founding rates are
                only available early.
              </p>
              <p>
                Post-beta pricing will shift to a two-layer model:
              </p>
              <div className="space-y-2 ml-1">
                <div className="flex items-start gap-2">
                  <span
                    className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                    style={{
                      backgroundColor: "var(--authority)",
                      boxShadow: "0 0 4px var(--authority)",
                    }}
                  />
                  <span>
                    <strong className="text-[var(--text-primary)]">
                      Sovereign Base
                    </strong>{" "}
                    — one-time purchase, yours forever
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span
                    className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                    style={{
                      backgroundColor: "var(--capacity)",
                      boxShadow: "0 0 4px var(--capacity)",
                    }}
                  />
                  <span>
                    <strong className="text-[var(--text-primary)]">
                      ACE Live
                    </strong>{" "}
                    — subscription for evolving intelligence
                  </span>
                </div>
              </div>
              <p className="text-[var(--text-dim)] italic">
                Beta members get both layers at founding rates.
              </p>
            </div>
          </Card>
        </div>

        {/* What makes this different */}
        <div className="max-w-3xl mx-auto mb-16">
          <h3 className="font-heading text-xl font-semibold mb-6 text-center">
            What you&apos;re actually investing in
          </h3>
          <div className="space-y-4">
            {[
              {
                q: "This isn't a course or a template.",
                a: "It's a custom-built intelligent system configured around your identity, connected to your tools, and getting smarter every week. You walk away with a working operating system, not a PDF.",
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
                q: "Post-beta: $5,000+",
                a: "Founding cohort rates are a fraction of what this will cost at scale. The people in Batch 1 and 2 are building the compounding advantage first.",
              },
            ].map((item) => (
              <Card key={item.q}>
                <h4 className="font-heading text-sm font-medium mb-2">
                  {item.q}
                </h4>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {item.a}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center" id="waitlist">
          <h3 className="font-heading text-2xl font-semibold mb-4">
            Batch 2 is forming now.
          </h3>
          <p className="text-[var(--text-secondary)] mb-8 max-w-lg mx-auto">
            Enter your email to get first access when seats open. Watch the
            Paradigm Shift masterclass while you wait.
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
