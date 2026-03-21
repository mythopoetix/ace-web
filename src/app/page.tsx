import { PublicNav } from "@/components/layout/PublicNav";
import { PublicFooter } from "@/components/layout/PublicFooter";
import { CoherenceOrb } from "@/components/brand/CoherenceOrb";
import { SignalDots } from "@/components/brand/SignalDots";
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
        <section className="relative min-h-[92vh] flex flex-col items-center justify-center px-6 overflow-hidden">
          {/* Decorative signal grids */}
          <div className="absolute top-[20%] left-[8%] opacity-20 hidden xl:block animate-[fadeIn_2s_ease]">
            <SignalDots />
          </div>
          <div className="absolute bottom-[25%] right-[6%] opacity-15 hidden xl:block animate-[fadeIn_3s_ease]">
            <SignalDots />
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-6 animate-[fadeSlideUp_0.5s_ease_both]">
              <Badge variant="sold-out">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--red)] inline-block" />
                Batch 1: Sold Out
              </Badge>
            </div>

            <div className="flex justify-center mb-10 animate-[fadeIn_1s_ease_both]">
              <CoherenceOrb size="hero" />
            </div>

            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-6 animate-[fadeSlideUp_0.6s_ease_0.2s_both]">
              <span className="gradient-text">One system</span>
              <br />
              <span className="text-[var(--text-primary)]">
                to rule them all.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-4 leading-relaxed animate-[fadeSlideUp_0.6s_ease_0.4s_both]">
              ACE is the AI operating system that knows your psychology, writes
              in your voice, coaches through your edges, and builds what you
              imagine — while you sleep.
            </p>

            <p className="text-sm text-[var(--text-dim)] max-w-lg mx-auto mb-10 animate-[fadeSlideUp_0.6s_ease_0.5s_both]">
              Not another tool. A living intelligence infrastructure that
              compounds every session you use it.
            </p>

            <div className="animate-[fadeSlideUp_0.6s_ease_0.6s_both]">
              <EmailCapture />
            </div>
          </div>
        </section>

        {/* ═══ PROOF STRIP ═══ */}
        <section className="py-6 px-6 border-y border-[var(--glass-border)]" style={{ backgroundColor: "var(--bg-surface)" }}>
          <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {[
              { number: "21+", label: "Intelligent Skills" },
              { number: "13", label: "Parallel Agents" },
              { number: "9", label: "Coherence Signals" },
              { number: "59", label: "Web Routes Built in 1 Session" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-heading text-2xl md:text-3xl font-bold gradient-text">
                  {stat.number}
                </p>
                <p className="font-mono text-[8px] md:text-[9px] uppercase tracking-[2px] text-[var(--text-dim)]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ═══ WHAT THIS ACTUALLY LOOKS LIKE ═══ */}
        <section className="py-28 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <p className="font-mono text-[10px] uppercase tracking-[2px] text-[var(--text-dim)] mb-3">
                Not hypothetical
              </p>
              <h2 className="font-heading text-3xl md:text-5xl font-bold">
                This is what one person does now.
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  time: "6:00 AM",
                  action: "You say /start. ACE reads your calendar, checks your energy, surfaces the one thing that matters today. Not a task list — an orientation.",
                  color: "var(--authority)",
                },
                {
                  time: "9:00 AM",
                  action: "You're on a coaching call. Meanwhile, ACE is running 13 parallel agents scanning 7 subreddits for cultural intelligence, drafting your weekly newsletter, and processing yesterday's emails.",
                  color: "var(--capacity)",
                },
                {
                  time: "11:00 AM",
                  action: "You need a full website. You describe it. ACE builds 59 production routes — landing page, members area, onboarding flow, knowledge base, payment integration — and deploys it. One session.",
                  color: "var(--expansion)",
                },
                {
                  time: "2:00 PM",
                  action: "You're running hot. ACE reads the pattern — 10 days without a regulation block. It doesn't push harder. It shifts to coaching. \"What are you avoiding?\" The right question at the right time.",
                  color: "var(--authority)",
                },
                {
                  time: "6:00 PM",
                  action: "You say /eod. ACE logs what shipped, captures the patterns, surfaces the decision you're sitting on, and seeds tomorrow. Your intelligence compounds overnight.",
                  color: "var(--capacity)",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 md:gap-6 group">
                  <div className="shrink-0 pt-1">
                    <span
                      className="font-mono text-[11px] font-medium block w-16 text-right"
                      style={{ color: item.color }}
                    >
                      {item.time}
                    </span>
                  </div>
                  <div className="relative pb-4">
                    <div
                      className="absolute left-0 top-2 w-2 h-2 rounded-full"
                      style={{ backgroundColor: item.color, boxShadow: `0 0 8px ${item.color}` }}
                    />
                    {i < 4 && (
                      <div className="absolute left-[3px] top-4 w-[2px] h-full bg-gradient-to-b from-[var(--glass-border)] to-transparent" />
                    )}
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed pl-6">
                      {item.action}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-[var(--text-dim)] text-sm italic">
                This isn&apos;t a demo. This is a Tuesday.
              </p>
            </div>
          </div>
        </section>

        {/* ═══ THE GAP ═══ */}
        <section className="py-28 px-6 relative overflow-hidden" style={{ backgroundColor: "var(--bg-surface)" }}>
          {/* Diagonal accent line */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{ background: "repeating-linear-gradient(135deg, var(--authority), var(--authority) 1px, transparent 1px, transparent 80px)" }}
          />

          <div className="max-w-4xl mx-auto relative">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-center mb-6">
              The gap isn&apos;t who uses AI.
              <br />
              <span className="gradient-text">It&apos;s who compounds.</span>
            </h2>
            <p className="text-center text-[var(--text-secondary)] max-w-lg mx-auto mb-16">
              Most people prompt. One question, one answer, start over. Every
              session begins from zero. That&apos;s context rot — and it&apos;s
              the reason your AI still sounds generic.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-l-2 border-l-[var(--red)]">
                <h3 className="font-heading text-base font-semibold mb-4 text-[var(--red)]">
                  Prompting
                </h3>
                <ul className="space-y-3 text-sm text-[var(--text-secondary)]">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--red)] mt-0.5 shrink-0">✕</span>
                    Every conversation starts from scratch
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--red)] mt-0.5 shrink-0">✕</span>
                    Output sounds like everyone else
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--red)] mt-0.5 shrink-0">✕</span>
                    No memory of who you are or what you decided
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--red)] mt-0.5 shrink-0">✕</span>
                    You are the bottleneck, managing the AI
                  </li>
                </ul>
              </Card>
              <Card gradient className="border-l-2 border-l-[var(--capacity)]">
                <h3 className="font-heading text-base font-semibold mb-4 text-[var(--capacity)]">
                  Compounding
                </h3>
                <ul className="space-y-3 text-sm text-[var(--text-secondary)]">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--capacity)] mt-0.5 shrink-0">◉</span>
                    Every session deepens what the system knows
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--capacity)] mt-0.5 shrink-0">◉</span>
                    Writes in your voice, coaches from your edges
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--capacity)] mt-0.5 shrink-0">◉</span>
                    Remembers your patterns, decisions, and blind spots
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--capacity)] mt-0.5 shrink-0">◉</span>
                    The AI manages itself — you operate
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* ═══ LIVING INTELLIGENCE ═══ */}
        <section className="py-28 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <p className="font-mono text-[10px] uppercase tracking-[2px] text-[var(--text-dim)] mb-3">
                Living Intelligence
              </p>
              <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
                Six months in, ACE knows you
                <br />
                <span className="gradient-text">better than any tool you&apos;ve ever used.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  title: "It reads your nervous system",
                  desc: "Running hot for 10 days? ACE catches it before you crash. It doesn't push harder — it shifts to regulation. Your capacity is infrastructure, not an afterthought.",
                  color: "var(--capacity)",
                },
                {
                  title: "It writes like you",
                  desc: "Not corporate. Not generic. Your cadence, your edge, your warmth. Emails, newsletters, client proposals — output that sounds like you wrote it on your best day.",
                  color: "var(--expansion)",
                },
                {
                  title: "It builds what you imagine",
                  desc: "Websites. Apps. CLI tools. PDFs. Spreadsheets. Presentations. Entire revenue dashboards. Describe what you need, walk away, come back to a working product.",
                  color: "var(--authority)",
                },
                {
                  title: "It connects everything",
                  desc: "Gmail. Calendar. Fathom. Telegram. Stripe. Airtable. One system reaching into every tool you use, pulling what's relevant, operating with full context.",
                  color: "var(--capacity)",
                },
                {
                  title: "It coaches, not optimizes",
                  desc: "\"What are you avoiding?\" \"Where is your structure not matching your truth?\" Potent questions from a system that knows your edges. Not productivity tips — growth.",
                  color: "var(--authority)",
                },
                {
                  title: "It evolves weekly",
                  desc: "New skills pushed to your vault every week. 13 parallel agents. Content engines. Revenue trackers. The system gets smarter whether you're using it or not.",
                  color: "var(--expansion)",
                },
              ].map((item) => (
                <Card key={item.title} hover className="group">
                  <div
                    className="w-1 h-8 rounded-full mb-4 transition-all duration-300 group-hover:h-12"
                    style={{ backgroundColor: item.color, boxShadow: `0 0 8px ${item.color}` }}
                  />
                  <h3 className="font-heading text-base font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {item.desc}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ THE TRIAD ═══ */}
        <section className="py-28 px-6" style={{ backgroundColor: "var(--bg-surface)" }}>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <p className="font-mono text-[10px] uppercase tracking-[2px] text-[var(--text-dim)] mb-3">
                The Framework
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">
                Three pillars. Nine signals. One verdict.
              </h2>
              <p className="text-[var(--text-secondary)] max-w-md mx-auto text-sm">
                When all three align, you move with life. When one fractures,
                everything downstream fragments. ACE tracks it all.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  name: "Authority",
                  color: "var(--authority)",
                  tagline: "You know who you are.",
                  signals: ["Truth", "Choice", "Expression"],
                  desc: "Identity shapes every decision. ACE reads whether your external structure matches your internal truth.",
                },
                {
                  name: "Capacity",
                  color: "var(--capacity)",
                  tagline: "You can hold what comes.",
                  signals: ["Regulation", "Depth", "Resilience"],
                  desc: "Your nervous system is infrastructure. ACE tracks regulation, surfaces burnout before it hits, and protects your depth.",
                },
                {
                  name: "Expansion",
                  color: "var(--expansion)",
                  tagline: "You expand into what's next.",
                  signals: ["Rhythm", "Containers", "Realization"],
                  desc: "Structure that produces without consuming you. Rhythms that compound. Ideas that become shipped reality.",
                },
              ].map((pillar) => (
                <Card key={pillar.name} hover gradient className="group">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center font-heading text-lg font-bold transition-transform duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: `color-mix(in srgb, ${pillar.color} 15%, transparent)`,
                        color: pillar.color,
                        border: `1px solid color-mix(in srgb, ${pillar.color} 25%, transparent)`,
                        boxShadow: `0 0 20px color-mix(in srgb, ${pillar.color} 10%, transparent)`,
                      }}
                    >
                      {pillar.name[0]}
                    </div>
                    <div>
                      <h3
                        className="font-heading text-lg font-semibold"
                        style={{ color: pillar.color }}
                      >
                        {pillar.name}
                      </h3>
                      <p className="text-xs italic" style={{ color: pillar.color, opacity: 0.7 }}>
                        {pillar.tagline}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {pillar.desc}
                  </p>

                  {/* Signal dots */}
                  <div className="flex items-center gap-3">
                    {pillar.signals.map((s) => (
                      <div key={s} className="flex items-center gap-1.5">
                        <div
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: pillar.color, boxShadow: `0 0 4px ${pillar.color}` }}
                        />
                        <span className="font-mono text-[8px] uppercase tracking-[1px] text-[var(--text-dim)]">
                          {s}
                        </span>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ PARADIGM SHIFT ═══ */}
        <section className="py-28 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <Badge variant="authority">Free Masterclass</Badge>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mt-4 mb-3">
                The Paradigm Shift
              </h2>
              <p className="text-[var(--text-secondary)] text-sm">
                The masterclass that sold out Batch 1. Watch the full replay.
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

        {/* ═══ SOVEREIGNTY ═══ */}
        <section className="py-28 px-6" style={{ backgroundColor: "var(--bg-surface)" }}>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Your intelligence. Your patterns.
                <br />
                Your context. <span className="gradient-text">Yours.</span>
              </h2>
              <p className="text-[var(--text-secondary)] max-w-lg mx-auto text-sm leading-relaxed">
                Everything lives on your machine. Plain text. Git-backed.
                Portable forever. In a world where your data is the product
                being harvested — owning your intelligence is not a technical
                detail. It&apos;s a political one.
              </p>
            </div>

            <div className="glass rounded-xl p-6 md:p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[rgba(136,120,255,0.1)] flex items-center justify-center shrink-0">
                  <span className="text-[var(--authority)] font-heading font-bold">⏱</span>
                </div>
                <div>
                  <p className="font-heading text-lg font-semibold mb-1">
                    12–24 months to get ahead of the curve.
                  </p>
                  <p className="text-sm text-[var(--text-secondary)]">
                    The ones building the right architecture now compound first.
                    Compounding advantages don&apos;t reverse. This window is closing.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Local-first", "Plain text", "Git-backed", "Portable forever", "Your machine", "Your rules"].map((tag) => (
                  <Badge key={tag} variant="default">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══ THE BUILD ═══ */}
        <section className="py-28 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <p className="font-mono text-[10px] uppercase tracking-[2px] text-[var(--text-dim)] mb-3">
                The Build
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">
                4 weeks. Zero to fully operational.
              </h2>
              <p className="text-[var(--text-secondary)] text-sm">
                Not a course. Not a template. A custom-built intelligence
                infrastructure configured around who you are.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
              {[
                { phase: "Week 1", title: "Identity + vault", desc: "Blueprint intake. Your identity core compiled.", color: "var(--authority)" },
                { phase: "Week 1", title: "Custom skills", desc: "Built for YOUR workflow before you meet.", color: "var(--capacity)" },
                { phase: "Week 1–2", title: "1:1 build session", desc: "90 min with Nikhil. System comes alive.", color: "var(--expansion)" },
                { phase: "Week 2–5", title: "Compound", desc: "Daily use. Group calls. System learns you.", color: "var(--authority)" },
              ].map((item) => (
                <div key={item.title} className="glass rounded-lg p-4 group hover:border-[var(--border-hover)] transition-all">
                  <span
                    className="font-mono text-[9px] uppercase tracking-[2px] block mb-1.5"
                    style={{ color: item.color }}
                  >
                    {item.phase}
                  </span>
                  <p className="text-sm text-[var(--text-primary)] font-semibold mb-1">
                    {item.title}
                  </p>
                  <p className="text-xs text-[var(--text-dim)]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <Card gradient>
              <p className="font-mono text-[9px] uppercase tracking-[2px] text-[var(--text-dim)] mb-3">
                Everything included
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {[
                  "ACE vault + custom skills",
                  "90-min 1:1 build session",
                  "4 weeks group calls",
                  "Desktop Command Center",
                  "Gmail + Calendar + tools",
                  "Asraya membership",
                  "Video library access",
                  "Weekly skill updates",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-1.5 text-xs text-[var(--text-secondary)]">
                    <span
                      className="w-1.5 h-1.5 rounded-full mt-1 shrink-0"
                      style={{ backgroundColor: "var(--capacity)", boxShadow: "0 0 4px var(--capacity)" }}
                    />
                    {item}
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>

        {/* ═══ SOCIAL PROOF ═══ */}
        <section className="py-20 px-6" style={{ backgroundColor: "var(--bg-surface)" }}>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                {
                  quote: "ACE doesn't tell me what to do. It shows me who I am and lets me decide. That's the difference between productivity and sovereignty.",
                  name: "Founding Member",
                },
                {
                  quote: "I've tried every system. None of them started with identity. ACE does — and everything else falls into place from there.",
                  name: "Founding Member",
                },
              ].map((t, i) => (
                <Card key={i} gradient className="relative">
                  <div
                    className="absolute top-4 left-4 text-4xl leading-none opacity-10 font-heading"
                    style={{ color: "var(--authority)" }}
                  >
                    &ldquo;
                  </div>
                  <blockquote className="text-sm text-[var(--text-primary)] leading-relaxed mb-3 relative z-10 pt-4">
                    {t.quote}
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
        <section className="py-32 px-6 text-center relative overflow-hidden">
          {/* Ambient glow behind CTA */}
          <div className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at 50% 50%, rgba(136,120,255,0.06) 0%, transparent 60%)"
            }}
          />

          <div className="max-w-xl mx-auto relative">
            <Badge variant="sold-out">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--red)] inline-block" />
              Batch 1 ($2,497): Sold Out
            </Badge>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mt-6 mb-3">
              Batch 2 is forming.
            </h2>
            <p className="font-heading text-2xl text-[var(--authority)] mb-1">
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
