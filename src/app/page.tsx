import { PublicNav } from "@/components/layout/PublicNav";
import { PublicFooter } from "@/components/layout/PublicFooter";
import { CoherenceOrb } from "@/components/brand/CoherenceOrb";
import { EnergyField } from "@/components/brand/EnergyField";
import { ScrollAnimations } from "@/components/providers/ScrollAnimations";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { EmailCapture } from "@/components/landing/EmailCapture";
import { VideoEmbed } from "@/components/landing/VideoEmbed";

export default function LandingPage() {
  return (
    <>
      <PublicNav />
      <ScrollAnimations />

      <main className="pt-16">
        {/* ═══ HERO ═══ */}
        <section className="relative min-h-[92vh] flex flex-col items-center justify-center px-6 overflow-hidden">
          <EnergyField />

          <div className="text-center max-w-4xl mx-auto relative z-10">
            <div className="mb-6 animate-[fadeSlideUp_0.5s_ease_both]">
              <Badge variant="sold-out">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--red)] inline-block" />
                Cohort 1: Sold Out
              </Badge>
            </div>

            <div className="flex justify-center mb-10 animate-[fadeIn_1s_ease_both]">
              <CoherenceOrb size="hero" />
            </div>

            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-6 animate-[fadeSlideUp_0.6s_ease_0.2s_both]">
              <span className="gradient-text">One system</span>
              <br />
              to rule them all.
            </h1>

            <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-4 leading-relaxed animate-[fadeSlideUp_0.6s_ease_0.4s_both]">
              ACE is the AI operating system that knows your psychology, writes
              in your voice, coaches through your edges, and builds what you
              imagine — while you sleep.
            </p>

            <p className="text-sm text-[var(--text-dim)] max-w-lg mx-auto mb-10 animate-[fadeSlideUp_0.6s_ease_0.5s_both]">
              A living intelligence that compounds everything you feed it.
              Not a tool you use. An infrastructure you inhabit.
            </p>

            <div className="animate-[fadeSlideUp_0.6s_ease_0.6s_both]">
              <EmailCapture />
            </div>
          </div>
        </section>

        {/* ═══ FULL-WIDTH STATEMENT ═══ */}
        <section className="py-20 md:py-28 px-6 border-y border-[var(--glass-border)]" style={{ backgroundColor: "var(--bg-surface)" }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-center leading-[1.15]">
              Something changed in the last six months.
              <br />
              <span className="text-[var(--text-dim)]">Most people missed it.</span>
            </h2>
          </div>
        </section>

        {/* ═══ VELOCITY — ASYMMETRIC ═══ */}
        <section className="py-28 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-16 items-center">
              {/* Left — statement */}
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[2px] text-[var(--text-dim)] mb-4">
                  Time Collapse
                </p>
                <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4 leading-tight">
                  What used to take weeks now takes hours. What took a team now
                  runs in parallel while you&apos;re on a call.
                </h2>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                  The constraint is no longer capability. It&apos;s architecture. The
                  people building the right infrastructure now are compounding
                  advantages that don&apos;t reverse.
                </p>
              </div>

              {/* Right — velocity examples, no cards */}
              <div className="space-y-6">
                {[
                  { before: "A week with developers and strategists", after: "One afternoon", color: "var(--authority)" },
                  { before: "A $20K brand strategy", after: "Drafted in hours", color: "var(--capacity)" },
                  { before: "A full content team", after: "Runs while you sleep", color: "var(--expansion)" },
                  { before: "Competitive analysis in days", after: "Overnight", color: "var(--authority)" },
                ].map((item, i) => (
                  <div key={i} className="flex items-baseline gap-4">
                    <span className="text-sm text-[var(--text-dim)] line-through shrink-0 w-[45%] text-right">
                      {item.before}
                    </span>
                    <span style={{ color: item.color }} className="text-sm">→</span>
                    <span className="font-heading text-lg font-semibold" style={{ color: item.color }}>
                      {item.after}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══ FULL-BLEED PULL QUOTE ═══ */}
        <section className="py-16 px-6 border-y border-[var(--glass-border)]">
          <p className="max-w-4xl mx-auto text-center font-heading text-2xl md:text-4xl font-bold leading-snug">
            &ldquo;The gap isn&apos;t who uses AI.{" "}
            <span className="gradient-text">It&apos;s who compounds.</span>&rdquo;
          </p>
        </section>

        {/* ═══ A DAY WITH ACE — NARRATIVE FLOW ═══ */}
        <section className="py-28 px-6" style={{ backgroundColor: "var(--bg-surface)" }}>
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">
              This is what one person ships now.
            </h2>
            <p className="text-center text-sm text-[var(--text-dim)] mb-16 italic">
              Not a demo. A Tuesday.
            </p>

            {/* Timeline — alternating layout */}
            <div className="space-y-16">
              {[
                {
                  action: "You say /start.",
                  result: "ACE reads your calendar, checks your nervous system state, and orients your day around the one thing that matters. Not a task list — a grounding.",
                  color: "var(--authority)",
                  align: "left" as const,
                },
                {
                  action: "You're on a call.",
                  result: "Meanwhile, ACE is drafting your newsletter in your voice, processing yesterday's emails, scanning Reddit for market intelligence, and updating your revenue dashboard. All in parallel.",
                  color: "var(--capacity)",
                  align: "right" as const,
                },
                {
                  action: "You describe a website.",
                  result: "ACE builds the full thing — landing page, members area, onboarding system, knowledge base, payment integration — and deploys it to a live URL. No code written.",
                  color: "var(--expansion)",
                  align: "left" as const,
                },
                {
                  action: "You're running hot.",
                  result: "ACE catches it. 10 days without rest, decisions getting reactive. It doesn't push harder. It asks: \"What are you avoiding?\" The right question. Not a productivity tip.",
                  color: "var(--authority)",
                  align: "right" as const,
                },
                {
                  action: "You say /eod.",
                  result: "ACE logs what shipped, surfaces the decision you've been sitting on, and seeds tomorrow. Every session leaves residue. Your intelligence compounds overnight.",
                  color: "var(--capacity)",
                  align: "left" as const,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`md:max-w-[65%] ${item.align === "right" ? "md:ml-auto" : ""}`}
                >
                  <p
                    className="font-heading text-xl md:text-2xl font-bold mb-3"
                    style={{ color: item.color }}
                  >
                    {item.action}
                  </p>
                  <p className="text-[var(--text-secondary)] leading-relaxed">
                    {item.result}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ ARCHITECTURE — HORIZONTAL STRIP, NO CARDS ═══ */}
        <section className="py-28 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-16">
              Built different. On purpose.
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-[var(--glass-border)] rounded-xl overflow-hidden">
              {[
                { word: "Extensible", desc: "New skills pushed weekly. The system never stops evolving.", color: "var(--authority)" },
                { word: "Modular", desc: "Use what serves you. Every capability is optional.", color: "var(--capacity)" },
                { word: "Interoperable", desc: "Reaches into Gmail, Calendar, Fathom, Stripe — all of them.", color: "var(--expansion)" },
                { word: "Sovereign", desc: "Your machine. Your data. Plain text. Git-backed. Yours forever.", color: "var(--authority)" },
              ].map((item, i) => (
                <div
                  key={item.word}
                  className={`p-6 md:p-8 ${i < 3 ? "border-r border-[var(--glass-border)]" : ""} ${i < 2 ? "md:border-r" : "md:border-r-0"} hover:bg-[var(--glow-primary)] transition-colors cursor-default`}
                >
                  <p className="font-heading text-lg md:text-xl font-bold mb-2" style={{ color: item.color }}>
                    {item.word}
                  </p>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ LIVING INTELLIGENCE — ASYMMETRIC SPLIT ═══ */}
        <section className="py-28 px-6" style={{ backgroundColor: "var(--bg-surface)" }}>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-16 items-start">
              {/* Left — big statement + details */}
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">
                  It doesn&apos;t just assist.
                  <span className="gradient-text"> It knows you.</span>
                </h2>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-8">
                  Six months in, ACE knows your edges better than your therapist.
                  It reads the pattern across 200 decisions and tells you what
                  you&apos;re avoiding.
                </p>

                <div className="space-y-5">
                  {[
                    { title: "Reads your nervous system", desc: "Running hot for 10 days? ACE catches it before you crash.", color: "var(--capacity)" },
                    { title: "Writes like you", desc: "Your cadence, your warmth, your edge. On your best day, every day.", color: "var(--expansion)" },
                    { title: "Builds what you imagine", desc: "Websites. Apps. Dashboards. Describe it. Come back to a working product.", color: "var(--authority)" },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-3">
                      <div
                        className="w-1 h-full min-h-[40px] rounded-full shrink-0"
                        style={{ backgroundColor: item.color }}
                      />
                      <div>
                        <p className="font-heading text-sm font-semibold mb-0.5">{item.title}</p>
                        <p className="text-xs text-[var(--text-secondary)]">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — remaining capabilities */}
              <div className="space-y-5 md:mt-20">
                {[
                  { title: "Connects every tool", desc: "Gmail, Calendar, Fathom, Telegram, Stripe, Airtable — one intelligence layer.", color: "var(--capacity)" },
                  { title: "Coaches, not optimizes", desc: "\"What are you avoiding?\" Potent questions from your edges. Not tips — growth.", color: "var(--authority)" },
                  { title: "Evolves every week", desc: "New skills pushed automatically. It gets smarter while you sleep.", color: "var(--expansion)" },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div
                      className="w-1 h-full min-h-[40px] rounded-full shrink-0"
                      style={{ backgroundColor: item.color }}
                    />
                    <div>
                      <p className="font-heading text-sm font-semibold mb-0.5">{item.title}</p>
                      <p className="text-xs text-[var(--text-secondary)]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══ THE TRIAD — VISUAL, NOT BOXES ═══ */}
        <section className="py-28 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-mono text-[10px] uppercase tracking-[2px] text-[var(--text-dim)] mb-3">
              The Coherence Triad
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">
              Most systems optimize for output.
              <br />
              ACE optimizes for <span className="gradient-text">coherence.</span>
            </h2>
            <p className="text-sm text-[var(--text-secondary)] max-w-md mx-auto mb-16">
              When all three align, you move with life. When one fractures,
              everything downstream fragments.
            </p>

            {/* Triad as three columns with vertical dividers */}
            <div className="flex flex-col md:flex-row md:divide-x md:divide-[var(--glass-border)]">
              {[
                {
                  name: "Authority",
                  color: "var(--authority)",
                  tagline: "You know who you are.",
                  signals: "Truth → Choice → Expression",
                },
                {
                  name: "Capacity",
                  color: "var(--capacity)",
                  tagline: "You can hold what comes.",
                  signals: "Regulation → Depth → Resilience",
                },
                {
                  name: "Expansion",
                  color: "var(--expansion)",
                  tagline: "You expand into what's next.",
                  signals: "Rhythm → Containers → Realization",
                },
              ].map((pillar) => (
                <div key={pillar.name} className="flex-1 px-6 md:px-8 py-6 md:py-0">
                  <p
                    className="font-heading text-3xl font-bold mb-2"
                    style={{ color: pillar.color }}
                  >
                    {pillar.name}
                  </p>
                  <p className="text-sm italic mb-3" style={{ color: pillar.color, opacity: 0.7 }}>
                    {pillar.tagline}
                  </p>
                  <p className="font-mono text-[8px] uppercase tracking-[1.5px] text-[var(--text-dim)]">
                    {pillar.signals}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ PARADIGM SHIFT — FULL WIDTH VIDEO ═══ */}
        <section className="py-28 px-6" style={{ backgroundColor: "var(--bg-surface)" }}>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-10 items-center">
              <div>
                <Badge variant="authority">Free Masterclass</Badge>
                <h2 className="font-heading text-3xl md:text-4xl font-bold mt-4 mb-3">
                  The Paradigm Shift
                </h2>
                <p className="text-[var(--text-secondary)] text-sm mb-6">
                  The masterclass that sold out Cohort 1. 60 minutes that
                  redefine how you think about personal systems.
                </p>
                <EmailCapture />
              </div>
              <VideoEmbed
                url="https://player.vimeo.com/video/placeholder"
                title="The Paradigm Shift — ACE Masterclass"
              />
            </div>
          </div>
        </section>

        {/* ═══ SOVEREIGNTY — OPEN TEXT, NO BOX ═══ */}
        <section className="py-28 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
              Your intelligence.
              <br />
              Your patterns.
              <br />
              Your context.
              <br />
              <span className="gradient-text">Yours.</span>
            </h2>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-xl mb-6">
              Everything lives on your machine. Not in someone else&apos;s
              cloud. Not feeding someone else&apos;s model.
            </p>
            <p className="text-lg text-[var(--text-primary)] font-medium max-w-xl mb-10">
              Owning your intelligence infrastructure is not a technical detail.
              It&apos;s a political one.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Local-first", "Plain text", "Git-backed", "Portable forever", "Your machine", "Your rules"].map((tag) => (
                <Badge key={tag} variant="default">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ FULL-WIDTH URGENCY BAND ═══ */}
        <section className="py-12 px-6 border-y border-[var(--glass-border)]" style={{ backgroundColor: "var(--bg-surface)" }}>
          <p className="max-w-3xl mx-auto text-center font-heading text-xl md:text-2xl font-bold">
            12–24 months to get ahead of the curve.
            <span className="text-[var(--text-dim)]"> Compounding advantages don&apos;t reverse.</span>
          </p>
        </section>

        {/* ═══ THE BUILD — TIMELINE, NOT GRID ═══ */}
        <section className="py-28 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3 text-center">
              4 weeks. Zero to operational.
            </h2>
            <p className="text-center text-sm text-[var(--text-secondary)] mb-14">
              Not a course. A custom-built intelligence infrastructure.
            </p>

            {/* Vertical timeline */}
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--authority)] via-[var(--capacity)] to-[var(--expansion)]" />

              <div className="space-y-10">
                {[
                  { phase: "Week 1", title: "Identity + vault", desc: "Blueprint intake. Your identity core — values, edges, voice — compiled into the system.", color: "var(--authority)" },
                  { phase: "Week 1", title: "Custom skills built", desc: "Configured for YOUR workflow before you even meet. The system arrives pre-loaded.", color: "var(--capacity)" },
                  { phase: "Week 1–2", title: "1:1 build session", desc: "90 minutes with Nikhil. Integrations go live. Your system comes alive.", color: "var(--expansion)" },
                  { phase: "Week 2–5", title: "Compound + iterate", desc: "Daily use. Group calls. The system learns you. Every session deepens the intelligence.", color: "var(--authority)" },
                ].map((item) => (
                  <div key={item.title} className="flex gap-6 md:gap-8 pl-2">
                    {/* Dot */}
                    <div className="relative shrink-0 mt-1.5">
                      <div
                        className="w-5 h-5 md:w-7 md:h-7 rounded-full border-2 bg-[var(--bg-deep)]"
                        style={{ borderColor: item.color }}
                      />
                    </div>
                    {/* Content */}
                    <div>
                      <span className="font-mono text-[9px] uppercase tracking-[2px] block mb-1" style={{ color: item.color }}>
                        {item.phase}
                      </span>
                      <p className="font-heading text-base font-semibold mb-1">{item.title}</p>
                      <p className="text-sm text-[var(--text-secondary)]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Includes — inline, not a card */}
            <div className="mt-14 pt-8 border-t border-[var(--glass-border)]">
              <p className="font-mono text-[9px] uppercase tracking-[2px] text-[var(--text-dim)] mb-4">
                Everything included
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {[
                  "ACE vault + custom skills",
                  "90-min 1:1 build session",
                  "4 weeks group calls",
                  "Desktop Command Center",
                  "All integrations",
                  "Asraya membership",
                  "Video library",
                  "Weekly updates",
                ].map((item) => (
                  <span key={item} className="text-sm text-[var(--text-secondary)]">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══ SOCIAL PROOF — LARGE QUOTES, NO CARDS ═══ */}
        <section className="py-24 px-6" style={{ backgroundColor: "var(--bg-surface)" }}>
          <div className="max-w-4xl mx-auto space-y-16">
            {[
              {
                quote: "ACE doesn't tell me what to do. It shows me who I am and lets me decide. That's the difference between productivity and sovereignty.",
                name: "Founding Member — Cohort 1",
              },
              {
                quote: "I've tried every system. None of them started with identity. ACE does — and everything else falls into place.",
                name: "Founding Member — Cohort 1",
              },
            ].map((t, i) => (
              <div key={i} className={`${i === 1 ? "md:ml-auto md:max-w-[75%] text-right" : "md:max-w-[75%]"}`}>
                <p className="font-heading text-xl md:text-2xl font-medium leading-snug mb-3 italic text-[var(--text-primary)]">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <span className="font-mono text-[9px] uppercase tracking-[1.5px] text-[var(--text-dim)]">
                  {t.name}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ═══ CTA ═══ */}
        <section className="py-32 px-6 text-center relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(136,120,255,0.06) 0%, transparent 60%)" }}
          />

          <div className="max-w-xl mx-auto relative">
            <Badge variant="sold-out">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--red)] inline-block" />
              Cohort 1 ($2,497): Sold Out
            </Badge>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mt-6 mb-3">
              Cohort 2 is forming.
            </h2>
            <p className="font-heading text-2xl text-[var(--authority)] mb-1">$2,997</p>
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
