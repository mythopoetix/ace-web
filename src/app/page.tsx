import { PublicNav } from "@/components/layout/PublicNav";
import { PublicFooter } from "@/components/layout/PublicFooter";
import { CoherenceOrb } from "@/components/brand/CoherenceOrb";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { EmailCapture } from "@/components/landing/EmailCapture";
import { VideoEmbed } from "@/components/landing/VideoEmbed";

export default function LandingPage() {
  return (
    <>
      <PublicNav />

      <main className="pt-16">
        {/* ═══ HERO ═══ */}
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6">
          <div className="text-center max-w-3xl mx-auto animate-widget-reveal">
            <div className="mb-8">
              <Badge variant="sold-out">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--red)] inline-block" />
                Batch 1: Sold Out
              </Badge>
            </div>

            <div className="flex justify-center mb-12">
              <CoherenceOrb size="hero" />
            </div>

            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] mb-6">
              <span className="gradient-text">Stop prompting.</span>
              <br />
              <span className="text-[var(--text-primary)]">
                Start compounding.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-xl mx-auto mb-12 leading-relaxed">
              One intelligent system that knows who you are, connects your
              tools, and gets sharper every session.
            </p>

            <EmailCapture />
          </div>
        </section>

        {/* ═══ THE SHIFT ═══ */}
        <section className="py-28 px-6" style={{ backgroundColor: "var(--bg-surface)" }}>
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-center mb-16">
              Something changed. Most people missed it.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
              {[
                { before: "A week with developers and strategists", after: "An afternoon" },
                { before: "A full content team", after: "Runs while you're on a call" },
                { before: "Competitive analysis in days", after: "Overnight" },
                { before: "A $20K brand strategy", after: "Hours, refined in minutes" },
              ].map((item, i) => (
                <Card key={i}>
                  <p className="text-sm text-[var(--text-dim)] line-through mb-2">
                    {item.before}
                  </p>
                  <p className="font-heading text-base font-medium text-[var(--text-primary)]">
                    → {item.after}
                  </p>
                </Card>
              ))}
            </div>

            <p className="text-center text-lg text-[var(--text-secondary)] max-w-xl mx-auto">
              The constraint is no longer capability.{" "}
              <strong className="text-[var(--text-primary)]">It&apos;s architecture.</strong>
            </p>
          </div>
        </section>

        {/* ═══ CONTEXT ROT ═══ */}
        <section className="py-28 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-center mb-6">
              Every new chat starts from zero.
            </h2>
            <p className="text-center text-[var(--text-secondary)] max-w-lg mx-auto mb-14">
              No memory. No accumulation. This is{" "}
              <strong className="text-[var(--text-primary)]">context rot</strong> — not a tool
              problem, an architecture problem.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <h3 className="font-mono text-[10px] uppercase tracking-[2px] text-[var(--text-dim)] mb-4">
                  Prompting
                </h3>
                <ul className="space-y-2.5 text-sm text-[var(--text-secondary)]">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--red)] mt-0.5">✕</span>
                    One question, one answer, start over
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--red)] mt-0.5">✕</span>
                    Copy-paste context every session
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--red)] mt-0.5">✕</span>
                    Output sounds like anyone
                  </li>
                </ul>
              </Card>
              <Card gradient>
                <h3 className="font-mono text-[10px] uppercase tracking-[2px] text-[var(--capacity)] mb-4">
                  Compounding
                </h3>
                <ul className="space-y-2.5 text-sm text-[var(--text-secondary)]">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--capacity)] mt-0.5">◉</span>
                    Context compounds across months
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--capacity)] mt-0.5">◉</span>
                    Connected to your actual tools
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--capacity)] mt-0.5">◉</span>
                    Writes in your voice, coaches from your edges
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* ═══ NOT A SECOND BRAIN ═══ */}
        <section className="py-28 px-6" style={{ backgroundColor: "var(--bg-surface)" }}>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6">
              Not a second brain. <span className="gradient-text">An operating system.</span>
            </h2>
            <p className="text-[var(--text-secondary)] max-w-lg mx-auto mb-10 leading-relaxed">
              Your work lives in Gmail, Fathom, Calendar, Airtable, Telegram.
              A second brain centralizes. ACE <strong className="text-[var(--text-primary)]">connects</strong> — one
              system that reaches into the tools you already use and operates
              with full context.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { signal: "Your psychology", color: "var(--authority)" },
                { signal: "Your voice", color: "var(--expansion)" },
                { signal: "Your current mode", color: "var(--capacity)" },
                { signal: "Your regulation", color: "var(--authority)" },
              ].map((item) => (
                <div key={item.signal} className="glass rounded-lg px-4 py-3 text-center">
                  <div
                    className="w-2 h-2 rounded-full mx-auto mb-2"
                    style={{
                      backgroundColor: item.color,
                      boxShadow: `0 0 6px ${item.color}`,
                    }}
                  />
                  <span className="font-mono text-[9px] uppercase tracking-[1.5px] text-[var(--text-secondary)]">
                    {item.signal}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ THE TRIAD ═══ */}
        <section className="py-28 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <p className="font-mono text-[10px] uppercase tracking-[2px] text-[var(--text-dim)] mb-3">
                The Framework
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold">
                Three variables. One coherence verdict.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  name: "Authority",
                  color: "var(--authority)",
                  icon: "A",
                  tagline: "You know who you are.",
                  signals: "Truth → Choice → Expression",
                },
                {
                  name: "Capacity",
                  color: "var(--capacity)",
                  icon: "C",
                  tagline: "You can hold what comes.",
                  signals: "Regulation → Depth → Resilience",
                },
                {
                  name: "Expansion",
                  color: "var(--expansion)",
                  icon: "E",
                  tagline: "You expand into what's next.",
                  signals: "Rhythm → Containers → Realization",
                },
              ].map((pillar) => (
                <Card key={pillar.name} hover gradient>
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center font-heading text-base font-semibold"
                      style={{
                        backgroundColor: `color-mix(in srgb, ${pillar.color} 12%, transparent)`,
                        color: pillar.color,
                        border: `1px solid color-mix(in srgb, ${pillar.color} 20%, transparent)`,
                      }}
                    >
                      {pillar.icon}
                    </div>
                    <h3
                      className="font-heading text-lg font-medium"
                      style={{ color: pillar.color }}
                    >
                      {pillar.name}
                    </h3>
                  </div>
                  <p className="text-sm italic mb-2" style={{ color: pillar.color }}>
                    {pillar.tagline}
                  </p>
                  <p className="font-mono text-[9px] uppercase tracking-[1.5px] text-[var(--text-dim)]">
                    {pillar.signals}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ PARADIGM SHIFT ═══ */}
        <section className="py-28 px-6" style={{ backgroundColor: "var(--bg-surface)" }}>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <Badge variant="authority">Free Masterclass</Badge>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold mt-4 mb-3">
                The Paradigm Shift
              </h2>
              <p className="text-[var(--text-secondary)]">
                The masterclass that started it all. Watch the full replay.
              </p>
            </div>

            <VideoEmbed
              url="https://player.vimeo.com/video/placeholder"
              title="The Paradigm Shift — ACE Masterclass"
            />

            <div className="mt-8">
              <EmailCapture />
            </div>
          </div>
        </section>

        {/* ═══ SOVEREIGNTY + WINDOW ═══ */}
        <section className="py-28 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6">
              Your intelligence. <span className="gradient-text">Yours.</span>
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-8 max-w-lg mx-auto">
              Everything lives locally. Not in someone else&apos;s cloud. Not
              feeding someone else&apos;s model. Owning your own intelligence
              infrastructure is not a technical detail. It&apos;s a political one.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-16">
              {["Local-first", "Plain text", "Git-backed", "Portable forever"].map((tag) => (
                <Badge key={tag} variant="default">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="glass rounded-xl p-8">
              <p className="font-heading text-lg font-medium mb-2">
                12–24 months to get ahead of the curve.
              </p>
              <p className="text-sm text-[var(--text-secondary)]">
                The gap isn&apos;t between people who use AI and people who don&apos;t. It&apos;s
                between people who prompt and people who compound. Compounding
                advantages don&apos;t reverse.
              </p>
            </div>
          </div>
        </section>

        {/* ═══ THE BUILD ═══ */}
        <section className="py-28 px-6" style={{ backgroundColor: "var(--bg-surface)" }}>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-3">
                4 weeks. Zero to operational.
              </h2>
              <p className="text-[var(--text-secondary)]">
                Custom-built around your identity, your tools, your workflow.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
              {[
                { phase: "Week 1", title: "Identity + vault setup", color: "var(--authority)" },
                { phase: "Week 1", title: "Custom skills built for you", color: "var(--capacity)" },
                { phase: "Week 1–2", title: "1:1 build session", color: "var(--expansion)" },
                { phase: "Week 2–5", title: "Compound + iterate", color: "var(--authority)" },
              ].map((item) => (
                <div key={item.title} className="glass rounded-lg p-4">
                  <span
                    className="font-mono text-[9px] uppercase tracking-[2px] block mb-1.5"
                    style={{ color: item.color }}
                  >
                    {item.phase}
                  </span>
                  <p className="text-sm text-[var(--text-primary)] font-medium">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
              {[
                "ACE vault + custom skills",
                "90-min 1:1 build session",
                "4 weeks group calls",
                "Desktop app (Mac)",
                "Tool integrations",
                "Asraya membership",
                "Video library",
                "Weekly skill updates",
              ].map((item) => (
                <div key={item} className="flex items-start gap-1.5 text-xs text-[var(--text-secondary)]">
                  <span
                    className="w-1 h-1 rounded-full mt-1.5 shrink-0"
                    style={{
                      backgroundColor: "var(--capacity)",
                      boxShadow: "0 0 3px var(--capacity)",
                    }}
                  />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ SOCIAL PROOF ═══ */}
        <section className="py-28 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                {
                  quote:
                    "ACE doesn't tell me what to do. It shows me who I am and lets me decide.",
                  name: "Founding Member",
                },
                {
                  quote:
                    "None of the systems I tried started with identity. ACE does — everything else falls into place.",
                  name: "Founding Member",
                },
              ].map((t, i) => (
                <Card key={i} gradient>
                  <blockquote className="text-sm text-[var(--text-primary)] leading-relaxed mb-3 italic">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <span className="font-mono text-[9px] uppercase tracking-[1.5px] text-[var(--text-dim)]">
                    {t.name} — Beta 1
                  </span>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ CTA ═══ */}
        <section className="py-32 px-6 text-center" style={{ backgroundColor: "var(--bg-surface)" }}>
          <div className="max-w-xl mx-auto">
            <Badge variant="sold-out">
              Batch 1 ($2,497): Sold Out
            </Badge>
            <h2 className="font-heading text-3xl md:text-5xl font-semibold mt-6 mb-3">
              Batch 2 is forming.
            </h2>
            <p className="font-heading text-xl text-[var(--authority)] mb-1">
              $2,997
            </p>
            <p className="text-[var(--text-dim)] text-sm mb-10">
              Founding rate. Limited seats. Price increases each cohort.
            </p>
            <EmailCapture />
            <div className="mt-6">
              <Button variant="ghost" size="sm" href="/paradigm-shift">
                Watch the Paradigm Shift →
              </Button>
            </div>
          </div>
        </section>
      </main>

      <PublicFooter />
    </>
  );
}
