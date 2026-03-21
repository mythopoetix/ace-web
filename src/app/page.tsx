import { PublicNav } from "@/components/layout/PublicNav";
import { PublicFooter } from "@/components/layout/PublicFooter";
import { CoherenceOrb } from "@/components/brand/CoherenceOrb";
import { EnergyField } from "@/components/brand/EnergyField";
import { ScrollAnimations } from "@/components/providers/ScrollAnimations";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { EmailCapture } from "@/components/landing/EmailCapture";
import { VideoEmbed } from "@/components/landing/VideoEmbed";

/*
  DESIGN RULES (final):
  - Two visual modes only: glass panels OR open text. Nothing else.
  - Glass panels: var(--glass-bg), 1px border, 12px radius, 24-32px padding
  - Open text: left-aligned, max-w-3xl, no container
  - Thin gradient accent strip between major sections
  - Monospace micro-labels for categories (9px, 2px tracking, uppercase)
  - Heading scale: 2xl-4xl only. Never bigger.
  - Section padding: py-24 consistently
  - Max 7 sections total
*/

export default function LandingPage() {
  return (
    <>
      <PublicNav />
      <ScrollAnimations />

      <main className="pt-16">

        {/* ══════════════════════════════════════
            1. HERO
            ══════════════════════════════════════ */}
        <section className="relative min-h-[88vh] flex flex-col items-center justify-center px-6 overflow-hidden">
          <EnergyField />
          <div className="text-center max-w-2xl mx-auto relative z-10">
            <div className="mb-5 animate-[fadeSlideUp_0.5s_ease_both]">
              <Badge variant="sold-out">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--red)] inline-block" />
                Cohort 1: Sold Out
              </Badge>
            </div>

            <div className="flex justify-center mb-8 animate-[fadeIn_1s_ease_both]">
              <CoherenceOrb size="hero" />
            </div>

            <h1 className="font-heading text-4xl md:text-5xl font-semibold leading-[1.15] mb-4 animate-[fadeSlideUp_0.6s_ease_0.2s_both]">
              <span className="gradient-text">One system</span>{" "}
              to rule them all.
            </h1>

            <p className="text-base text-[var(--text-secondary)] max-w-md mx-auto mb-3 leading-relaxed animate-[fadeSlideUp_0.6s_ease_0.35s_both]">
              The AI operating system that knows your psychology, writes in your
              voice, coaches through your edges, and builds what you imagine.
            </p>

            <p className="font-mono text-[9px] uppercase tracking-[2px] text-[var(--text-dim)] mb-8 animate-[fadeSlideUp_0.6s_ease_0.45s_both]">
              Extensible &middot; Modular &middot; Interoperable &middot; Sovereign
            </p>

            <div className="animate-[fadeSlideUp_0.6s_ease_0.55s_both]">
              <EmailCapture />
            </div>
          </div>
        </section>

        {/* Accent strip */}
        <div className="h-px" style={{ background: "var(--gradient-accent)" }} />

        {/* ══════════════════════════════════════
            2. THE SHIFT — glass panel
            ══════════════════════════════════════ */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="glass rounded-xl p-8 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-10">
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[2px] text-[var(--text-dim)] mb-3">
                    The Shift
                  </p>
                  <h2 className="font-heading text-2xl md:text-3xl font-semibold leading-snug mb-4">
                    Something changed. What used to take weeks now takes hours.
                    What took a team runs in parallel while you&apos;re on a call.
                  </h2>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    The constraint is no longer capability. It&apos;s architecture.
                    The ones building the right infrastructure now are compounding
                    advantages that don&apos;t reverse.
                  </p>
                </div>

                <div className="space-y-4 flex flex-col justify-center">
                  {[
                    { before: "Week of dev work", after: "Afternoon", color: "var(--authority)" },
                    { before: "$20K brand strategy", after: "Hours", color: "var(--capacity)" },
                    { before: "Full content team", after: "Runs in parallel", color: "var(--expansion)" },
                    { before: "Analysis in days", after: "Overnight", color: "var(--authority)" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="text-xs text-[var(--text-dim)] line-through flex-1 text-right">{item.before}</span>
                      <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                      <span className="text-xs font-medium flex-1" style={{ color: item.color }}>{item.after}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            3. A DAY WITH ACE — glass panel
            ══════════════════════════════════════ */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="glass rounded-xl p-8 md:p-10">
              <p className="font-mono text-[9px] uppercase tracking-[2px] text-[var(--text-dim)] mb-2">
                What one person ships now
              </p>
              <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-8">
                This isn&apos;t a demo. This is a Tuesday.
              </h2>

              <div className="space-y-6">
                {[
                  { time: "6 AM", action: "/start", desc: "Reads your calendar, checks your nervous system, orients your day around the one thing that matters.", color: "var(--authority)" },
                  { time: "9 AM", action: "On a call", desc: "Meanwhile — newsletter drafted in your voice, emails processed, agents scanning Reddit, dashboard updated. All in parallel.", color: "var(--capacity)" },
                  { time: "11 AM", action: "\"Build me a website\"", desc: "Full landing page, members area, onboarding, knowledge base, payments. Deployed to a live URL. One session.", color: "var(--expansion)" },
                  { time: "2 PM", action: "Running hot", desc: "ACE catches the pattern — 10 days without rest. Doesn't push harder. Asks: \"What are you avoiding?\"", color: "var(--authority)" },
                  { time: "6 PM", action: "/eod", desc: "Logs what shipped, captures patterns, surfaces the decision you've been sitting on. Seeds tomorrow.", color: "var(--capacity)" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-5">
                    <div className="w-12 shrink-0 text-right">
                      <span className="font-mono text-[10px] text-[var(--text-dim)]">{item.time}</span>
                    </div>
                    <div className="relative pl-5 pb-2 border-l border-[var(--glass-border)]">
                      <div
                        className="absolute -left-[4px] top-1 w-[7px] h-[7px] rounded-full"
                        style={{ backgroundColor: item.color, boxShadow: `0 0 8px ${item.color}` }}
                      />
                      <span className="font-heading text-sm font-semibold" style={{ color: item.color }}>{item.action}</span>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Accent strip */}
        <div className="h-px" style={{ background: "var(--gradient-accent)" }} />

        {/* ══════════════════════════════════════
            4. THE GAP + CAPABILITIES — open text + glass panel
            ══════════════════════════════════════ */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            {/* Open text */}
            <div className="max-w-2xl mb-16">
              <p className="font-mono text-[9px] uppercase tracking-[2px] text-[var(--text-dim)] mb-3">
                Context Rot vs Compounding
              </p>
              <h2 className="font-heading text-2xl md:text-3xl font-semibold leading-snug mb-4">
                Most people prompt — one question, one answer, start over.
                ACE <span className="gradient-text">compounds</span>. Every session deepens
                what the system knows about you.
              </h2>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Six months in, it knows your edges better than your therapist. It writes in
                your cadence, coaches from your growth zones, and shifts to regulation when
                you&apos;re running hot. Not productivity tips. Intelligence infrastructure.
              </p>
            </div>

            {/* Capabilities — glass panel with internal grid */}
            <div className="glass rounded-xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3">
                {[
                  { title: "Reads your nervous system", desc: "Catches dysregulation before you crash. Shifts to coaching, not tasks.", color: "var(--capacity)" },
                  { title: "Writes in your voice", desc: "Your cadence, your warmth, your edge. Emails, newsletters, proposals.", color: "var(--expansion)" },
                  { title: "Builds what you imagine", desc: "Websites, apps, dashboards, PDFs. Describe it. Come back to a product.", color: "var(--authority)" },
                  { title: "Connects every tool", desc: "Gmail, Calendar, Fathom, Telegram, Stripe, Airtable. One layer.", color: "var(--capacity)" },
                  { title: "Coaches, not optimizes", desc: "\"What are you avoiding?\" Growth from a system that knows your edges.", color: "var(--authority)" },
                  { title: "Evolves every week", desc: "New skills pushed automatically. Gets smarter while you sleep.", color: "var(--expansion)" },
                ].map((item, i) => (
                  <div
                    key={item.title}
                    className={`p-6 hover:bg-[rgba(140,120,255,0.03)] transition-colors ${
                      i < 3 ? "border-b border-[var(--glass-border)]" : ""
                    } ${i % 3 !== 2 ? "md:border-r md:border-[var(--glass-border)]" : ""}`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div
                        className="w-[5px] h-[5px] rounded-full"
                        style={{ backgroundColor: item.color, boxShadow: `0 0 4px ${item.color}` }}
                      />
                      <p className="font-heading text-sm font-medium">{item.title}</p>
                    </div>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed pl-[13px]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            5. TRIAD + PARADIGM SHIFT — glass panel + video
            ══════════════════════════════════════ */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            {/* Triad — glass panel */}
            <div className="glass rounded-xl overflow-hidden mb-16">
              <div className="p-6 md:p-8 border-b border-[var(--glass-border)]">
                <p className="font-mono text-[9px] uppercase tracking-[2px] text-[var(--text-dim)] mb-2">
                  The Coherence Triad
                </p>
                <h2 className="font-heading text-xl md:text-2xl font-semibold">
                  Most systems optimize for output. ACE optimizes for{" "}
                  <span className="gradient-text">coherence.</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3">
                {[
                  { name: "Authority", tagline: "You know who you are.", signals: "Truth → Choice → Expression", desc: "The system reads whether your life matches your truth.", color: "var(--authority)" },
                  { name: "Capacity", tagline: "You can hold what comes.", signals: "Regulation → Depth → Resilience", desc: "Your nervous system is infrastructure. ACE protects it.", color: "var(--capacity)" },
                  { name: "Expansion", tagline: "You expand into what's next.", signals: "Rhythm → Containers → Realization", desc: "Structure that produces without consuming you.", color: "var(--expansion)" },
                ].map((p, i) => (
                  <div
                    key={p.name}
                    className={`p-6 md:p-8 ${i < 2 ? "md:border-r border-b md:border-b-0 border-[var(--glass-border)]" : ""}`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div
                        className="w-[6px] h-[6px] rounded-full"
                        style={{ backgroundColor: p.color, boxShadow: `0 0 6px ${p.color}` }}
                      />
                      <span className="font-heading text-base font-semibold" style={{ color: p.color }}>{p.name}</span>
                    </div>
                    <p className="text-xs italic mb-2" style={{ color: p.color, opacity: 0.6 }}>{p.tagline}</p>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-2">{p.desc}</p>
                    <p className="font-mono text-[7px] uppercase tracking-[1.5px] text-[var(--text-dim)]">{p.signals}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Paradigm Shift — glass panel with video */}
            <div className="glass rounded-xl p-8 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-8 items-center">
                <div>
                  <Badge variant="authority">Free Masterclass</Badge>
                  <h2 className="font-heading text-xl md:text-2xl font-semibold mt-3 mb-2">
                    The Paradigm Shift
                  </h2>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5">
                    60 minutes that sold out Cohort 1. Watch the full replay.
                  </p>
                  <EmailCapture />
                </div>
                <VideoEmbed
                  url="https://player.vimeo.com/video/placeholder"
                  title="The Paradigm Shift — ACE Masterclass"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Accent strip */}
        <div className="h-px" style={{ background: "var(--gradient-accent)" }} />

        {/* ══════════════════════════════════════
            6. SOVEREIGNTY + BUILD — open text + glass panel
            ══════════════════════════════════════ */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            {/* Sovereignty — open text */}
            <div className="max-w-2xl mb-20">
              <p className="font-mono text-[9px] uppercase tracking-[2px] text-[var(--text-dim)] mb-3">
                Sovereignty
              </p>
              <h2 className="font-heading text-2xl md:text-3xl font-semibold leading-snug mb-4">
                Your intelligence. Your patterns. Your context.{" "}
                <span className="gradient-text">Yours.</span>
              </h2>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5">
                Everything lives on your machine. Not in someone else&apos;s cloud.
                Not feeding someone else&apos;s model. Owning your intelligence
                infrastructure is not a technical detail. It&apos;s a political one.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Local-first", "Plain text", "Git-backed", "Portable forever"].map((tag) => (
                  <span key={tag} className="font-mono text-[8px] uppercase tracking-[1.5px] text-[var(--text-dim)] border border-[var(--border)] rounded px-2 py-0.5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* The Build — glass panel */}
            <div className="glass rounded-xl p-8 md:p-10">
              <p className="font-mono text-[9px] uppercase tracking-[2px] text-[var(--text-dim)] mb-2">
                The Build
              </p>
              <h2 className="font-heading text-xl md:text-2xl font-semibold mb-2">
                4 weeks. Zero to operational.
              </h2>
              <p className="text-sm text-[var(--text-secondary)] mb-8">
                Custom-built around your identity, your tools, your workflow.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                {[
                  { phase: "Week 1", title: "Identity + vault", desc: "Blueprint intake. Identity core compiled.", color: "var(--authority)" },
                  { phase: "Week 1", title: "Custom skills", desc: "Built for your workflow. Before you meet.", color: "var(--capacity)" },
                  { phase: "Week 1–2", title: "1:1 build session", desc: "90 min with Nikhil. System comes alive.", color: "var(--expansion)" },
                  { phase: "Week 2–5", title: "Compound", desc: "Daily use. Group calls. System learns you.", color: "var(--authority)" },
                ].map((item) => (
                  <div key={item.title}>
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className="w-[5px] h-[5px] rounded-full" style={{ backgroundColor: item.color }} />
                      <span className="font-mono text-[8px] uppercase tracking-[1.5px]" style={{ color: item.color }}>{item.phase}</span>
                    </div>
                    <p className="text-sm font-medium mb-0.5">{item.title}</p>
                    <p className="text-xs text-[var(--text-secondary)]">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-[var(--glass-border)] pt-5">
                <p className="font-mono text-[8px] uppercase tracking-[2px] text-[var(--text-dim)] mb-2">Included</p>
                <div className="flex flex-wrap gap-x-5 gap-y-1">
                  {["ACE vault + skills", "90-min 1:1 build", "4 weeks group calls", "Desktop app", "All integrations", "Asraya membership", "Video library", "Weekly updates"].map((item) => (
                    <span key={item} className="text-xs text-[var(--text-secondary)]">{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            7. SOCIAL PROOF + CTA
            ══════════════════════════════════════ */}
        <section className="py-24 px-6">
          <div className="max-w-3xl mx-auto">
            {/* Testimonials — open text */}
            <div className="space-y-10 mb-20">
              {[
                { quote: "ACE doesn't tell me what to do. It shows me who I am and lets me decide. That's the difference between productivity and sovereignty.", name: "Founding Member" },
                { quote: "None of the systems I tried started with identity. ACE does — everything else falls into place.", name: "Founding Member" },
              ].map((t, i) => (
                <div key={i} className={i === 1 ? "md:pl-16" : ""}>
                  <p className="text-base md:text-lg text-[var(--text-primary)] leading-relaxed italic mb-2">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <span className="font-mono text-[8px] uppercase tracking-[2px] text-[var(--text-dim)]">
                    {t.name} &middot; Cohort 1
                  </span>
                </div>
              ))}
            </div>

            {/* CTA — glass panel */}
            <div className="glass rounded-xl p-8 md:p-10 text-center relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(ellipse at 50% 60%, rgba(136,120,255,0.04) 0%, transparent 60%)" }}
              />
              <div className="relative">
                <Badge variant="sold-out">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--red)] inline-block" />
                  Cohort 1: Sold Out
                </Badge>
                <h2 className="font-heading text-2xl md:text-3xl font-semibold mt-4 mb-2">
                  Cohort 2 is forming.
                </h2>
                <p className="font-heading text-xl text-[var(--authority)] mb-0.5">$2,997</p>
                <p className="font-mono text-[8px] uppercase tracking-[1.5px] text-[var(--text-dim)] mb-7">
                  Founding rate &middot; Limited seats &middot; Price increases each cohort
                </p>
                <EmailCapture />
                <div className="mt-4">
                  <Button variant="ghost" size="sm" href="/paradigm-shift">
                    Watch the Paradigm Shift →
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <PublicFooter />
    </>
  );
}
