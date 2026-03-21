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
          {/* Energy particle field */}
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
              A living intelligence that compounds everything you feed it.
              Not a tool you use. An infrastructure you inhabit.
            </p>

            <div className="animate-[fadeSlideUp_0.6s_ease_0.6s_both]">
              <EmailCapture />
            </div>
          </div>
        </section>

        {/* ═══ VELOCITY STRIP ═══ */}
        <section className="py-5 px-6 border-y border-[var(--glass-border)]" style={{ backgroundColor: "var(--bg-surface)" }}>
          <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-6 md:gap-14">
            {[
              { label: "A week of dev work", arrow: "→", result: "One afternoon" },
              { label: "A $20K brand strategy", arrow: "→", result: "Hours" },
              { label: "A full content team", arrow: "→", result: "Runs while you sleep" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <span className="text-xs text-[var(--text-dim)] line-through">{item.label}</span>
                <span className="text-[var(--capacity)] text-xs">{item.arrow}</span>
                <span className="text-xs font-medium text-[var(--text-primary)]">{item.result}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ═══ WHAT THIS ACTUALLY LOOKS LIKE ═══ */}
        <section className="py-28 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-5xl font-bold">
                This is what one person ships now.
              </h2>
            </div>

            <div className="space-y-5">
              {[
                {
                  action: "You say /start.",
                  result: "ACE reads your calendar, checks your nervous system state, and orients your entire day around the one thing that actually matters. Not a task list — a grounding.",
                  color: "var(--authority)",
                },
                {
                  action: "You're on a call.",
                  result: "Meanwhile, ACE is drafting your newsletter in your voice, processing yesterday's emails, scanning Reddit for market intelligence, and updating your revenue dashboard. All in parallel. All without asking.",
                  color: "var(--capacity)",
                },
                {
                  action: "You describe a website.",
                  result: "ACE builds the full thing — landing page, members area, onboarding system, knowledge base, payment integration — and deploys it to a live URL. You didn't write a single line of code.",
                  color: "var(--expansion)",
                },
                {
                  action: "You're running hot.",
                  result: "ACE catches it before you crash. It reads the pattern — 10 days without rest, decisions getting reactive. It doesn't push harder. It asks: \"What are you avoiding?\" The right question. Not a productivity tip.",
                  color: "var(--authority)",
                },
                {
                  action: "You say /eod.",
                  result: "ACE logs what shipped, captures the patterns, surfaces the decision you've been sitting on, and seeds tomorrow. Every session leaves residue. Your intelligence compounds overnight.",
                  color: "var(--capacity)",
                },
              ].map((item, i) => (
                <div key={i} className="glass rounded-xl p-5 md:p-6 hover:border-[var(--border-hover)] transition-all">
                  <p className="font-heading text-base font-semibold mb-2" style={{ color: item.color }}>
                    {item.action}
                  </p>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {item.result}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-center mt-10 text-[var(--text-dim)] text-sm italic">
              This isn&apos;t a product demo. This is a Tuesday.
            </p>
          </div>
        </section>

        {/* ═══ ARCHITECTURE PILLARS ═══ */}
        <section className="py-28 px-6" style={{ backgroundColor: "var(--bg-surface)" }}>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Built on four principles most systems ignore.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                {
                  title: "Extensible",
                  desc: "New skills, new integrations, new intelligence — pushed to your system weekly. ACE doesn't ship quarterly updates. It evolves continuously.",
                  color: "var(--authority)",
                },
                {
                  title: "Modular",
                  desc: "Use what serves you. Ignore what doesn't. Every skill, every integration, every workflow is a module you can add, remove, or customize.",
                  color: "var(--capacity)",
                },
                {
                  title: "Interoperable",
                  desc: "Gmail. Calendar. Fathom. Stripe. Telegram. Airtable. ACE doesn't ask you to centralize. It reaches into the tools you already use and operates with full context.",
                  color: "var(--expansion)",
                },
                {
                  title: "Sovereign",
                  desc: "Everything lives on your machine. Plain text. Git-backed. Your data never feeds someone else's model. Cancel anytime — your vault keeps working forever.",
                  color: "var(--authority)",
                },
              ].map((item) => (
                <Card key={item.title} hover className="group">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center font-heading text-lg font-bold shrink-0 transition-transform duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: `color-mix(in srgb, ${item.color} 12%, transparent)`,
                        color: item.color,
                        border: `1px solid color-mix(in srgb, ${item.color} 20%, transparent)`,
                      }}
                    >
                      {item.title[0]}
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ THE GAP ═══ */}
        <section className="py-28 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-center mb-6">
              The gap isn&apos;t who uses AI.
              <br />
              <span className="gradient-text">It&apos;s who compounds.</span>
            </h2>
            <p className="text-center text-[var(--text-secondary)] max-w-lg mx-auto mb-14 text-sm">
              Most people prompt. One question, one answer, start over. Every
              session begins from zero. That&apos;s context rot — and it&apos;s
              why your AI still sounds generic.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-l-2 border-l-[var(--red)]">
                <h3 className="font-heading text-sm font-semibold mb-4 text-[var(--red)]">
                  Prompting
                </h3>
                <ul className="space-y-3 text-sm text-[var(--text-secondary)]">
                  <li>Every conversation starts from scratch</li>
                  <li>Output sounds like everyone else</li>
                  <li>No memory of who you are or what you decided</li>
                  <li>You are the bottleneck, managing the AI</li>
                </ul>
              </Card>
              <Card gradient className="border-l-2 border-l-[var(--capacity)]">
                <h3 className="font-heading text-sm font-semibold mb-4 text-[var(--capacity)]">
                  Compounding
                </h3>
                <ul className="space-y-3 text-sm text-[var(--text-secondary)]">
                  <li>Every session deepens what the system knows about you</li>
                  <li>Writes in your voice. Coaches from your edges.</li>
                  <li>Remembers patterns, decisions, blind spots — for months</li>
                  <li>The system manages itself. You just operate.</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* ═══ LIVING INTELLIGENCE ═══ */}
        <section className="py-28 px-6" style={{ backgroundColor: "var(--bg-surface)" }}>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">
                It doesn&apos;t just assist.
                <span className="gradient-text"> It knows you.</span>
              </h2>
              <p className="text-sm text-[var(--text-secondary)] max-w-md mx-auto">
                Six months in, ACE knows your edges better than your therapist.
                It reads the pattern across 200 decisions and tells you what
                you&apos;re avoiding.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  title: "Reads your nervous system",
                  desc: "Running hot for 10 days? ACE catches it before you crash. It shifts to regulation — not more tasks.",
                  color: "var(--capacity)",
                },
                {
                  title: "Writes like you",
                  desc: "Your cadence. Your warmth. Your edge. Emails, newsletters, proposals — on your best day, every day.",
                  color: "var(--expansion)",
                },
                {
                  title: "Builds what you imagine",
                  desc: "Websites. Apps. Dashboards. PDFs. Presentations. Describe it. Walk away. Come back to a working product.",
                  color: "var(--authority)",
                },
                {
                  title: "Connects every tool",
                  desc: "Gmail, Calendar, Fathom, Telegram, Stripe, Airtable — one intelligence layer reaching into everything.",
                  color: "var(--capacity)",
                },
                {
                  title: "Coaches, not optimizes",
                  desc: "\"What are you avoiding?\" Potent questions from a system that knows your growth edges. Not productivity. Growth.",
                  color: "var(--authority)",
                },
                {
                  title: "Evolves every week",
                  desc: "New skills. New integrations. New intelligence. Pushed to your system automatically. It gets smarter while you sleep.",
                  color: "var(--expansion)",
                },
              ].map((item) => (
                <Card key={item.title} hover className="group">
                  <div
                    className="w-1 h-8 rounded-full mb-4 transition-all duration-300 group-hover:h-10"
                    style={{ backgroundColor: item.color, boxShadow: `0 0 8px ${item.color}` }}
                  />
                  <h3 className="font-heading text-sm font-semibold mb-2">
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
        <section className="py-28 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <p className="font-mono text-[10px] uppercase tracking-[2px] text-[var(--text-dim)] mb-3">
                The Coherence Triad
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">
                Most systems optimize for output.
                <br />
                ACE optimizes for <span className="gradient-text">coherence.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  name: "Authority",
                  color: "var(--authority)",
                  tagline: "You know who you are.",
                  signals: "Truth → Choice → Expression",
                  desc: "Identity shapes every decision. ACE reads whether your life matches your truth — and surfaces the gap when it doesn't.",
                },
                {
                  name: "Capacity",
                  color: "var(--capacity)",
                  tagline: "You can hold what comes.",
                  signals: "Regulation → Depth → Resilience",
                  desc: "Your nervous system is your infrastructure. ACE protects it — surfacing burnout before it hits, shifting to rest before you break.",
                },
                {
                  name: "Expansion",
                  color: "var(--expansion)",
                  tagline: "You expand into what's next.",
                  signals: "Rhythm → Containers → Realization",
                  desc: "Structure that produces without consuming you. Sustainable rhythm. Containers that hold complexity. Ideas that ship.",
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
                      <h3 className="font-heading text-lg font-semibold" style={{ color: pillar.color }}>
                        {pillar.name}
                      </h3>
                      <p className="text-xs italic" style={{ color: pillar.color, opacity: 0.7 }}>
                        {pillar.tagline}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                    {pillar.desc}
                  </p>

                  <p className="font-mono text-[8px] uppercase tracking-[1.5px] text-[var(--text-dim)]">
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
              <h2 className="font-heading text-3xl md:text-4xl font-bold mt-4 mb-3">
                The Paradigm Shift
              </h2>
              <p className="text-[var(--text-secondary)] text-sm">
                The masterclass that sold out Cohort 1. Watch the full replay.
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
        <section className="py-28 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Your intelligence. <span className="gradient-text">Yours.</span>
            </h2>
            <p className="text-[var(--text-secondary)] max-w-lg mx-auto text-sm leading-relaxed mb-8">
              Everything lives on your machine. Not in someone else&apos;s
              cloud. Not feeding someone else&apos;s model. Owning your
              intelligence is not a technical detail. It&apos;s a political one.
            </p>

            <div className="glass rounded-xl p-6 md:p-8 text-left">
              <p className="font-heading text-lg font-semibold mb-2 text-center">
                12–24 months to get ahead of the curve.
              </p>
              <p className="text-sm text-[var(--text-secondary)] text-center mb-6">
                The ones building the right architecture now compound first.
                Compounding advantages don&apos;t reverse.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
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
        <section className="py-28 px-6" style={{ backgroundColor: "var(--bg-surface)" }}>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">
                4 weeks. Zero to operational.
              </h2>
              <p className="text-[var(--text-secondary)] text-sm">
                Not a course. Not a template. A custom-built intelligence
                infrastructure configured around who you are.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
              {[
                { phase: "Week 1", title: "Identity + vault", desc: "Blueprint intake. Identity core compiled.", color: "var(--authority)" },
                { phase: "Week 1", title: "Custom skills", desc: "Built for YOUR workflow. Before you meet.", color: "var(--capacity)" },
                { phase: "Week 1–2", title: "1:1 build session", desc: "90 min with Nikhil. System comes alive.", color: "var(--expansion)" },
                { phase: "Week 2–5", title: "Compound", desc: "Daily use. Group calls. System learns you.", color: "var(--authority)" },
              ].map((item) => (
                <div key={item.title} className="glass rounded-lg p-4 hover:border-[var(--border-hover)] transition-all">
                  <span className="font-mono text-[9px] uppercase tracking-[2px] block mb-1.5" style={{ color: item.color }}>
                    {item.phase}
                  </span>
                  <p className="text-sm text-[var(--text-primary)] font-semibold mb-1">{item.title}</p>
                  <p className="text-xs text-[var(--text-dim)]">{item.desc}</p>
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
        <section className="py-20 px-6">
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
                  <div className="absolute top-4 left-4 text-4xl leading-none opacity-10 font-heading" style={{ color: "var(--authority)" }}>
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
        <section className="py-32 px-6 text-center relative overflow-hidden" style={{ backgroundColor: "var(--bg-surface)" }}>
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
