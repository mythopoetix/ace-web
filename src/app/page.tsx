import { PublicNav } from "@/components/layout/PublicNav";
import { PublicFooter } from "@/components/layout/PublicFooter";
import { CoherenceOrb } from "@/components/brand/CoherenceOrb";
import { EnergyField } from "@/components/brand/EnergyField";
import { ScrollAnimations } from "@/components/providers/ScrollAnimations";
import { Badge } from "@/components/ui/Badge";
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
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 overflow-hidden">
          <EnergyField />

          <div className="text-center max-w-3xl mx-auto relative z-10">
            <div className="mb-6 animate-[fadeSlideUp_0.5s_ease_both]">
              <Badge variant="sold-out">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--red)] inline-block" />
                Cohort 1: Sold Out
              </Badge>
            </div>

            <div className="flex justify-center mb-8 animate-[fadeIn_1s_ease_both]">
              <CoherenceOrb size="hero" />
            </div>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] mb-5 animate-[fadeSlideUp_0.6s_ease_0.2s_both]">
              <span className="gradient-text">One system</span>{" "}
              to rule them all.
            </h1>

            <p className="text-base md:text-lg text-[var(--text-secondary)] max-w-lg mx-auto mb-4 leading-relaxed animate-[fadeSlideUp_0.6s_ease_0.4s_both]">
              The AI operating system that knows your psychology, writes in your
              voice, coaches through your edges, and builds what you imagine.
            </p>

            <p className="font-mono text-[10px] uppercase tracking-[2px] text-[var(--text-dim)] mb-8 animate-[fadeSlideUp_0.6s_ease_0.5s_both]">
              Extensible &middot; Modular &middot; Interoperable &middot; Sovereign
            </p>

            <div className="animate-[fadeSlideUp_0.6s_ease_0.6s_both]">
              <EmailCapture />
            </div>
          </div>
        </section>

        {/* ═══ VELOCITY BAR ═══ */}
        <div className="border-y border-[var(--glass-border)] py-4 px-6" style={{ backgroundColor: "var(--bg-surface)" }}>
          <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-8 md:gap-14">
            {[
              { before: "Week of dev work", after: "Afternoon" },
              { before: "$20K brand strategy", after: "Hours" },
              { before: "Full content team", after: "Runs in parallel" },
            ].map((item) => (
              <div key={item.before} className="flex items-center gap-2">
                <span className="font-mono text-[9px] uppercase tracking-[1.5px] text-[var(--text-dim)] line-through">{item.before}</span>
                <span className="text-[var(--capacity)] text-[10px]">→</span>
                <span className="font-mono text-[9px] uppercase tracking-[1.5px] text-[var(--capacity)] font-medium">{item.after}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ═══ A DAY WITH ACE ═══ */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-x-12 gap-y-0 mb-12">
              <div className="md:col-span-2 mb-10">
                <p className="font-mono text-[9px] uppercase tracking-[2px] text-[var(--text-dim)] mb-2">
                  What one person ships now
                </p>
                <h2 className="font-heading text-2xl md:text-3xl font-semibold">
                  This isn&apos;t a demo. This is a Tuesday.
                </h2>
              </div>

              {[
                { time: "6 AM", action: "/start", desc: "Reads your calendar, checks your nervous system state, orients your day around the one thing that matters.", color: "var(--authority)" },
                { time: "9 AM", action: "On a call", desc: "Meanwhile — newsletter drafted in your voice, emails processed, 13 agents scanning Reddit, revenue dashboard updated. All in parallel.", color: "var(--capacity)" },
                { time: "11 AM", action: "\"Build me a website\"", desc: "Full landing page, members area, onboarding flow, knowledge base, payment integration. Deployed to a live URL. One session.", color: "var(--expansion)" },
                { time: "2 PM", action: "Running hot", desc: "ACE catches the pattern — 10 days without rest. Doesn't push harder. Asks: \"What are you avoiding?\" The right question.", color: "var(--authority)" },
                { time: "6 PM", action: "/eod", desc: "Logs what shipped, captures patterns, surfaces the decision you've been sitting on. Seeds tomorrow. Intelligence compounds overnight.", color: "var(--capacity)" },
              ].map((item, i) => (
                <div key={i} className="contents">
                  <div className="text-right pr-4 pt-3 hidden md:block">
                    <span className="font-mono text-[10px] text-[var(--text-dim)]">{item.time}</span>
                  </div>
                  <div className="border-l border-[var(--glass-border)] pl-6 pb-8 relative">
                    <div
                      className="absolute -left-[3px] top-3 w-[5px] h-[5px] rounded-full"
                      style={{ backgroundColor: item.color, boxShadow: `0 0 6px ${item.color}` }}
                    />
                    <span className="font-mono text-[10px] text-[var(--text-dim)] md:hidden">{item.time} &middot; </span>
                    <span className="font-heading text-sm font-semibold" style={{ color: item.color }}>{item.action}</span>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ THE GAP — OPEN TEXT ═══ */}
        <section className="py-20 px-6" style={{ backgroundColor: "var(--bg-surface)" }}>
          <div className="max-w-3xl mx-auto">
            <p className="font-mono text-[9px] uppercase tracking-[2px] text-[var(--text-dim)] mb-4">
              The real gap
            </p>
            <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-4 leading-snug">
              Most people prompt. One question, one answer, start over.
              That&apos;s context rot. ACE{" "}
              <span className="gradient-text">compounds</span> — every session
              deepens what the system knows about you.
            </h2>
            <p className="text-sm text-[var(--text-secondary)] max-w-xl leading-relaxed">
              Six months in, it knows your edges better than your therapist. It
              reads the pattern across 200 decisions and tells you what
              you&apos;re avoiding. It writes in your cadence, coaches from your
              growth zones, and shifts to regulation when you&apos;re running hot.
            </p>
          </div>
        </section>

        {/* ═══ CAPABILITIES — DENSE GRID ═══ */}
        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr] gap-px bg-[var(--glass-border)] rounded-xl overflow-hidden">
              {[
                { title: "Reads your nervous system", desc: "Catches dysregulation before you crash. Shifts to coaching, not more tasks.", color: "var(--capacity)" },
                { title: "Writes in your voice", desc: "Emails, newsletters, proposals. Your cadence, your warmth, your edge.", color: "var(--expansion)" },
                { title: "Builds what you imagine", desc: "Websites, apps, dashboards, PDFs. Describe it. Come back to a working product.", color: "var(--authority)" },
                { title: "Connects every tool", desc: "Gmail, Calendar, Fathom, Telegram, Stripe, Airtable. One intelligence layer.", color: "var(--capacity)" },
                { title: "Coaches, not optimizes", desc: "\"What are you avoiding?\" Growth questions from a system that knows your edges.", color: "var(--authority)" },
                { title: "Evolves every week", desc: "New skills pushed automatically. The system gets smarter while you sleep.", color: "var(--expansion)" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-[var(--bg-deep)] p-6 hover:bg-[var(--bg-card)] transition-colors cursor-default"
                >
                  <div
                    className="w-0.5 h-5 rounded-full mb-3"
                    style={{ backgroundColor: item.color }}
                  />
                  <p className="font-heading text-sm font-medium mb-1">{item.title}</p>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ ARCHITECTURE STRIP ═══ */}
        <div className="border-y border-[var(--glass-border)] py-4 px-6" style={{ backgroundColor: "var(--bg-surface)" }}>
          <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-6 md:gap-12">
            {[
              { word: "Extensible", desc: "New skills weekly" },
              { word: "Modular", desc: "Use what serves you" },
              { word: "Interoperable", desc: "Reaches into your tools" },
              { word: "Sovereign", desc: "Your machine, your data" },
            ].map((item, i) => (
              <div key={item.word} className="flex items-center gap-3">
                {i > 0 && <div className="w-px h-4 bg-[var(--glass-border)] hidden md:block" />}
                <div>
                  <p className="font-heading text-sm font-medium">{item.word}</p>
                  <p className="font-mono text-[8px] uppercase tracking-[1.5px] text-[var(--text-dim)]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ═══ THE TRIAD ═══ */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <p className="font-mono text-[9px] uppercase tracking-[2px] text-[var(--text-dim)] mb-2">
              The Coherence Triad
            </p>
            <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-12">
              Most systems optimize for output.
              ACE optimizes for <span className="gradient-text">coherence.</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[var(--glass-border)] rounded-xl overflow-hidden">
              {[
                { name: "Authority", tagline: "You know who you are.", signals: "Truth → Choice → Expression", desc: "Identity shapes every decision. The system reads whether your life matches your truth.", color: "var(--authority)" },
                { name: "Capacity", tagline: "You can hold what comes.", signals: "Regulation → Depth → Resilience", desc: "Your nervous system is infrastructure. ACE protects it — surfacing burnout before it hits.", color: "var(--capacity)" },
                { name: "Expansion", tagline: "You expand into what's next.", signals: "Rhythm → Containers → Realization", desc: "Structure that produces without consuming you. Ideas that ship.", color: "var(--expansion)" },
              ].map((p, i) => (
                <div
                  key={p.name}
                  className={`p-6 md:p-8 ${i < 2 ? "md:border-r border-b md:border-b-0 border-[var(--glass-border)]" : ""}`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: p.color, boxShadow: `0 0 6px ${p.color}` }}
                    />
                    <span className="font-heading text-base font-semibold" style={{ color: p.color }}>{p.name}</span>
                  </div>
                  <p className="text-xs italic mb-2" style={{ color: p.color, opacity: 0.7 }}>{p.tagline}</p>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-3">{p.desc}</p>
                  <p className="font-mono text-[7px] uppercase tracking-[1.5px] text-[var(--text-dim)]">{p.signals}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ PARADIGM SHIFT — SIDE BY SIDE ═══ */}
        <section className="py-24 px-6" style={{ backgroundColor: "var(--bg-surface)" }}>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-8 items-center">
              <div>
                <Badge variant="authority">Free Masterclass</Badge>
                <h2 className="font-heading text-2xl md:text-3xl font-semibold mt-3 mb-3">
                  The Paradigm Shift
                </h2>
                <p className="text-sm text-[var(--text-secondary)] mb-6 leading-relaxed">
                  60 minutes that redefine how you think about personal systems.
                  The masterclass that sold out Cohort 1.
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

        {/* ═══ SOVEREIGNTY — LEFT ALIGNED, OPEN ═══ */}
        <section className="py-24 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="font-mono text-[9px] uppercase tracking-[2px] text-[var(--text-dim)] mb-4">
              Sovereignty
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold leading-tight mb-6">
              Your intelligence.
              <br />
              Your patterns.
              <br />
              Your context.
              <br />
              <span className="gradient-text">Yours.</span>
            </h2>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed max-w-lg mb-8">
              Everything lives on your machine. Not in someone else&apos;s cloud.
              Not feeding someone else&apos;s model. Owning your intelligence
              infrastructure is not a technical detail. It&apos;s a political one.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Local-first", "Plain text", "Git-backed", "Portable forever"].map((tag) => (
                <span key={tag} className="font-mono text-[9px] uppercase tracking-[1.5px] text-[var(--text-dim)] border border-[var(--border)] rounded px-2.5 py-1">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ WINDOW BAND ═══ */}
        <div className="border-y border-[var(--glass-border)] py-5 px-6" style={{ backgroundColor: "var(--bg-surface)" }}>
          <p className="max-w-3xl mx-auto text-center font-heading text-base md:text-lg font-medium">
            12–24 months to get ahead of the curve.
            <span className="text-[var(--text-dim)]"> Compounding advantages don&apos;t reverse.</span>
          </p>
        </div>

        {/* ═══ THE BUILD ═══ */}
        <section className="py-24 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="font-mono text-[9px] uppercase tracking-[2px] text-[var(--text-dim)] mb-2">
              The Build
            </p>
            <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-3">
              4 weeks. Zero to operational.
            </h2>
            <p className="text-sm text-[var(--text-secondary)] mb-10">
              Custom-built around your identity, your tools, your workflow.
            </p>

            {/* Inline timeline */}
            <div className="space-y-6 mb-12">
              {[
                { phase: "Week 1", title: "Identity + vault", desc: "Blueprint intake. Your identity core compiled.", color: "var(--authority)" },
                { phase: "Week 1", title: "Custom skills built", desc: "Configured for your workflow before you meet.", color: "var(--capacity)" },
                { phase: "Week 1–2", title: "1:1 build session", desc: "90 min with Nikhil. Integrations go live.", color: "var(--expansion)" },
                { phase: "Week 2–5", title: "Compound + iterate", desc: "Daily use. Group calls. System learns you.", color: "var(--authority)" },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-16 shrink-0 text-right pt-0.5">
                    <span className="font-mono text-[9px] uppercase tracking-[1.5px]" style={{ color: item.color }}>{item.phase}</span>
                  </div>
                  <div className="border-l border-[var(--glass-border)] pl-4">
                    <p className="text-sm font-medium">{item.title}</p>
                    <p className="text-xs text-[var(--text-secondary)]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-[var(--glass-border)] pt-6">
              <p className="font-mono text-[8px] uppercase tracking-[2px] text-[var(--text-dim)] mb-3">
                Included
              </p>
              <div className="flex flex-wrap gap-x-5 gap-y-1.5">
                {[
                  "ACE vault + custom skills", "90-min 1:1 build", "4 weeks group calls",
                  "Desktop app", "All integrations", "Asraya membership", "Video library", "Weekly updates"
                ].map((item) => (
                  <span key={item} className="text-xs text-[var(--text-secondary)]">{item}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══ TESTIMONIALS — UNBOXED ═══ */}
        <section className="py-20 px-6" style={{ backgroundColor: "var(--bg-surface)" }}>
          <div className="max-w-3xl mx-auto space-y-12">
            {[
              { quote: "ACE doesn't tell me what to do. It shows me who I am and lets me decide.", name: "Founding Member" },
              { quote: "None of the systems I tried started with identity. ACE does — everything else falls into place.", name: "Founding Member" },
            ].map((t, i) => (
              <div key={i} className={i === 1 ? "md:text-right" : ""}>
                <p className="font-heading text-lg md:text-xl font-medium leading-snug italic text-[var(--text-primary)] mb-2">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <span className="font-mono text-[8px] uppercase tracking-[2px] text-[var(--text-dim)]">
                  {t.name} &middot; Cohort 1
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ═══ CTA ═══ */}
        <section className="py-28 px-6 text-center relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 50% 60%, rgba(136,120,255,0.04) 0%, transparent 50%)" }}
          />

          <div className="max-w-md mx-auto relative">
            <Badge variant="sold-out">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--red)] inline-block" />
              Cohort 1: Sold Out
            </Badge>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold mt-5 mb-2">
              Cohort 2 is forming.
            </h2>
            <p className="font-heading text-xl text-[var(--authority)] mb-1">$2,997</p>
            <p className="font-mono text-[9px] uppercase tracking-[1.5px] text-[var(--text-dim)] mb-8">
              Founding rate &middot; Limited seats &middot; Price increases each cohort
            </p>
            <EmailCapture />
            <div className="mt-5">
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
