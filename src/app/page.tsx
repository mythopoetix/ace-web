import { PublicNav } from "@/components/layout/PublicNav";
import { PublicFooter } from "@/components/layout/PublicFooter";
import { LiveCommandCenter } from "@/components/brand/LiveCommandCenter";
import { TerminalDemo } from "@/components/brand/TerminalDemo";
import { ScrollAnimations } from "@/components/providers/ScrollAnimations";
import { EmailCapture } from "@/components/landing/EmailCapture";
import { VideoEmbed } from "@/components/landing/VideoEmbed";
import { ArrowRight } from "lucide-react";

export default function LandingPage() {
  return (
    <>
      <PublicNav />
      <ScrollAnimations />

      <main className="pt-16">

        {/* ═══ HERO ═══ */}
        <section className="min-h-[92vh] flex flex-col justify-center px-6 md:px-16 lg:px-24 overflow-hidden">
          <div className="max-w-[1400px] mx-auto w-full">
            <p className="reveal-up font-mono text-[10px] md:text-xs uppercase tracking-[4px] text-[var(--expansion)] mb-8 md:mb-12">
              <span className="inline-block w-2 h-2 rounded-full bg-[var(--expansion)] mr-3 animate-breathe" />
              Cohort 1: Sold Out
            </p>

            <h1 className="reveal-up reveal-up-d1 display-giant text-[clamp(3.5rem,10vw,9.5rem)] mb-6">
              One system.
              <br />
              <span className="gradient-text">Total coherence.</span>
            </h1>

            <p className="reveal-up reveal-up-d2 text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl leading-relaxed mb-12">
              The AI operating system that knows your psychology, writes in your
              voice, coaches through your edges, and builds what you imagine.
            </p>

            <div className="reveal-up reveal-up-d3 flex flex-wrap gap-6 mb-14">
              {["Extensible", "Modular", "Interoperable", "Sovereign"].map((label) => (
                <span key={label} className="font-mono text-[10px] uppercase tracking-[3px] text-[var(--text-dim)] hover:text-[var(--text-secondary)] transition-colors duration-300">
                  {label}
                </span>
              ))}
            </div>

            <div className="reveal-up reveal-up-d4 max-w-md">
              <EmailCapture />
            </div>
          </div>
        </section>

        {/* ═══ COMMAND CENTER ═══ */}
        <section className="py-24 md:py-40 px-6 md:px-16 lg:px-24">
          <div className="max-w-[1400px] mx-auto">
            <p className="font-mono text-[10px] uppercase tracking-[4px] text-[var(--text-dim)] mb-4">
              The Interface
            </p>
            <h2 className="display-giant text-3xl md:text-5xl lg:text-6xl mb-16">
              Your command center.
              <br />
              <span className="text-[var(--text-dim)]">Always on. Always aware.</span>
            </h2>
            <LiveCommandCenter />
          </div>
        </section>

        <hr className="sep max-w-[1400px] mx-auto" />

        {/* ═══ TERMINAL ═══ */}
        <section className="py-24 md:py-32 px-6 md:px-16 lg:px-24">
          <div className="max-w-[1400px] mx-auto">
            <p className="font-mono text-[10px] uppercase tracking-[4px] text-[var(--text-dim)] mb-4">
              Watch it work
            </p>
            <h2 className="display-giant text-2xl md:text-4xl lg:text-5xl mb-14">
              One command. Full orientation.
            </h2>
            <TerminalDemo />
          </div>
        </section>

        <hr className="sep max-w-[1400px] mx-auto" />

        {/* ═══ THE SHIFT ═══ */}
        <section className="py-24 md:py-40 px-6 md:px-16 lg:px-24">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[4px] text-[var(--text-dim)] mb-4">
                The Shift
              </p>
              <h2 className="display-giant text-4xl md:text-5xl lg:text-6xl mb-6">
                What used to take weeks now takes hours.
              </h2>
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                The constraint is no longer capability. It&apos;s architecture.
              </p>
            </div>

            <div className="space-y-10 lg:pt-6">
              {[
                { before: "Week of dev work", after: "Afternoon", color: "var(--authority)" },
                { before: "$20K brand strategy", after: "Hours", color: "var(--capacity)" },
                { before: "Full content team", after: "Runs in parallel", color: "var(--expansion)" },
                { before: "Analysis in days", after: "Overnight", color: "var(--authority)" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6">
                  <span className="text-base md:text-lg text-[var(--text-dim)] line-through flex-1 text-right">
                    {item.before}
                  </span>
                  <ArrowRight size={16} style={{ color: item.color }} strokeWidth={1.5} className="shrink-0" />
                  <span className="text-xl md:text-2xl font-heading font-bold flex-1" style={{ color: item.color }}>
                    {item.after}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ A DAY WITH ACE ═══ */}
        <section className="py-24 md:py-40 px-6 md:px-16 lg:px-24">
          <div className="max-w-[1400px] mx-auto">
            <p className="font-mono text-[10px] uppercase tracking-[4px] text-[var(--text-dim)] mb-4">
              A day with ACE
            </p>
            <h2 className="display-giant text-4xl md:text-5xl lg:text-6xl mb-20">
              This isn&apos;t a demo.
              <br />
              <span className="text-[var(--text-dim)]">This is a Tuesday.</span>
            </h2>

            <div className="space-y-16 md:space-y-20">
              {[
                { time: "6 AM", action: "/start", desc: "Reads your calendar, checks your nervous system, orients your day around the one thing that matters.", color: "var(--authority)" },
                { time: "9 AM", action: "On a call", desc: "Meanwhile — newsletter drafted in your voice, emails processed, agents scanning Reddit, dashboard updated.", color: "var(--capacity)" },
                { time: "11 AM", action: "\"Build me a website\"", desc: "Full landing page, members area, onboarding, knowledge base, payments. Deployed live. One session.", color: "var(--expansion)" },
                { time: "2 PM", action: "Running hot", desc: "ACE catches the pattern — 10 days without rest. Asks: \"What are you avoiding?\"", color: "var(--authority)" },
                { time: "6 PM", action: "/eod", desc: "Logs what shipped, captures patterns, surfaces the decision you've been sitting on.", color: "var(--capacity)" },
              ].map((item, i) => (
                <div key={i} className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-4 md:gap-12 group">
                  <div className="md:text-right">
                    <span className="display-giant text-3xl md:text-4xl text-[var(--text-dim)] group-hover:text-[var(--text-secondary)] transition-colors duration-500">
                      {item.time}
                    </span>
                  </div>
                  <div className="border-l-2 pl-8 md:pl-10 pb-2" style={{ borderColor: `color-mix(in srgb, ${item.color} 30%, transparent)` }}>
                    <span className="font-heading text-xl md:text-2xl font-bold block mb-2 transition-colors duration-300" style={{ color: item.color }}>
                      {item.action}
                    </span>
                    <p className="text-base text-[var(--text-secondary)] leading-relaxed max-w-xl">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <hr className="sep max-w-[1400px] mx-auto" />

        {/* ═══ COMPOUNDING ═══ */}
        <section className="py-28 md:py-44 px-6 md:px-16 lg:px-24">
          <div className="max-w-[1400px] mx-auto">
            <p className="font-mono text-[10px] uppercase tracking-[4px] text-[var(--text-dim)] mb-4">
              Compounding Intelligence
            </p>
            <h2 className="display-giant text-4xl md:text-6xl lg:text-7xl mb-8">
              Most people prompt.
              <br />
              ACE <span className="gradient-text">compounds.</span>
            </h2>
            <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed max-w-2xl">
              Six months in, it knows your edges better than your therapist. It writes in
              your cadence, coaches from your growth zones, and shifts to regulation when
              you&apos;re running hot. Every session leaves residue. Your intelligence
              infrastructure deepens overnight.
            </p>
          </div>
        </section>

        {/* ═══ CAPABILITIES ═══ */}
        <section className="py-24 md:py-32 px-6 md:px-16 lg:px-24">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-16 md:gap-y-20">
              {[
                { title: "Reads your nervous system", desc: "Catches dysregulation before you crash. Shifts to coaching, not tasks.", color: "var(--capacity)" },
                { title: "Writes in your voice", desc: "Your cadence, your warmth, your edge. On your best day, every day.", color: "var(--expansion)" },
                { title: "Builds what you imagine", desc: "Websites, apps, dashboards, PDFs. Describe it. Come back to a product.", color: "var(--authority)" },
                { title: "Connects every tool", desc: "Gmail, Calendar, Fathom, Telegram, Stripe, Airtable. One intelligence layer.", color: "var(--capacity)" },
                { title: "Coaches, not optimizes", desc: "\"What are you avoiding?\" Growth from a system that knows your edges.", color: "var(--authority)" },
                { title: "Evolves every week", desc: "New skills pushed to your vault automatically. Gets smarter while you sleep.", color: "var(--expansion)" },
              ].map((item) => (
                <div key={item.title} className="group cursor-default">
                  <h3
                    className="font-heading text-xl md:text-2xl font-bold mb-3 hover-triad"
                    style={{ color: item.color }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-base text-[var(--text-secondary)] leading-relaxed group-hover:text-[var(--text-primary)] transition-colors duration-300">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <hr className="sep max-w-[1400px] mx-auto" />

        {/* ═══ TRIAD ═══ */}
        <section className="py-24 md:py-40 px-6 md:px-16 lg:px-24">
          <div className="max-w-[1400px] mx-auto">
            <p className="font-mono text-[10px] uppercase tracking-[4px] text-[var(--text-dim)] mb-4">
              The Coherence Triad
            </p>
            <h2 className="display-giant text-3xl md:text-5xl lg:text-6xl mb-20">
              Most systems optimize for output.
              <br />
              ACE optimizes for <span className="gradient-text">coherence.</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 lg:gap-20">
              {[
                { name: "Authority", tagline: "You know who you are.", signals: "Truth → Choice → Expression", desc: "The system reads whether your life matches your truth — and surfaces the gap.", color: "var(--authority)" },
                { name: "Capacity", tagline: "You can hold what comes.", signals: "Regulation → Depth → Resilience", desc: "Your nervous system is infrastructure. ACE protects it.", color: "var(--capacity)" },
                { name: "Expansion", tagline: "You expand into what's next.", signals: "Rhythm → Containers → Realization", desc: "Structure that produces without consuming you. Ideas that ship.", color: "var(--expansion)" },
              ].map((p) => (
                <div key={p.name} className="group">
                  <h3
                    className="display-giant text-4xl md:text-5xl lg:text-6xl mb-4 transition-opacity duration-500 group-hover:opacity-80"
                    style={{ color: p.color }}
                  >
                    {p.name}
                  </h3>
                  <p className="text-base italic mb-4" style={{ color: p.color, opacity: 0.5 }}>
                    {p.tagline}
                  </p>
                  <p className="text-base text-[var(--text-secondary)] leading-relaxed mb-5">
                    {p.desc}
                  </p>
                  <p className="font-mono text-[9px] uppercase tracking-[2px] text-[var(--text-dim)]">
                    {p.signals}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <hr className="sep max-w-[1400px] mx-auto" />

        {/* ═══ VIDEO ═══ */}
        <section className="py-24 md:py-40 px-6 md:px-16 lg:px-24">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-center">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[4px] text-[var(--authority)] mb-3">
                Free Masterclass
              </p>
              <h2 className="display-giant text-3xl md:text-4xl lg:text-5xl mb-3">
                The Paradigm Shift
              </h2>
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-8">
                60 minutes that sold out Cohort 1.
              </p>
              <EmailCapture />
            </div>
            <VideoEmbed url="https://player.vimeo.com/video/placeholder" title="The Paradigm Shift" />
          </div>
        </section>

        <hr className="sep max-w-[1400px] mx-auto" />

        {/* ═══ SOVEREIGNTY ═══ */}
        <section className="py-28 md:py-44 px-6 md:px-16 lg:px-24">
          <div className="max-w-[1400px] mx-auto">
            <p className="font-mono text-[10px] uppercase tracking-[4px] text-[var(--text-dim)] mb-4">
              Sovereignty
            </p>
            <h2 className="display-giant text-4xl md:text-6xl lg:text-7xl mb-8">
              Your intelligence. Your patterns.
              <br />
              Your context. <span className="gradient-text">Yours.</span>
            </h2>
            <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed max-w-2xl mb-12">
              Everything lives on your machine. Not in someone else&apos;s cloud.
              Not feeding someone else&apos;s model. Owning your intelligence
              infrastructure is not a technical detail. It&apos;s a political one.
            </p>
            <div className="flex flex-wrap gap-4">
              {["Local-first", "Git-backed", "Portable forever", "Your machine"].map((label) => (
                <span key={label} className="font-mono text-[10px] uppercase tracking-[3px] text-[var(--text-dim)] border border-[var(--border)] px-4 py-2 hover:border-[var(--border-hover)] hover:text-[var(--text-secondary)] transition-all duration-300">
                  {label}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ THE BUILD ═══ */}
        <section className="py-24 md:py-40 px-6 md:px-16 lg:px-24">
          <div className="max-w-[1400px] mx-auto">
            <p className="font-mono text-[10px] uppercase tracking-[4px] text-[var(--text-dim)] mb-4">
              The Build
            </p>
            <h2 className="display-giant text-3xl md:text-5xl lg:text-6xl mb-6">
              4 weeks. Zero to operational.
            </h2>
            <p className="text-lg text-[var(--text-secondary)] mb-20 max-w-xl">
              Custom-built around your identity, your tools, your workflow.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
              {[
                { phase: "Week 1", title: "Identity + vault", desc: "Blueprint intake. Identity core compiled.", color: "var(--authority)" },
                { phase: "Week 1", title: "Custom skills", desc: "Built for your workflow. Before you meet.", color: "var(--capacity)" },
                { phase: "Week 1–2", title: "1:1 build session", desc: "90 min with Nikhil. System comes alive.", color: "var(--expansion)" },
                { phase: "Week 2–5", title: "Compound", desc: "Daily use. Group calls. System learns you.", color: "var(--authority)" },
              ].map((item) => (
                <div key={item.title}>
                  <span className="font-mono text-[10px] uppercase tracking-[3px] block mb-3" style={{ color: item.color }}>
                    {item.phase}
                  </span>
                  <h3 className="font-heading text-xl font-bold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-base text-[var(--text-secondary)] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <hr className="sep mb-8" />
            <p className="font-mono text-[10px] uppercase tracking-[3px] text-[var(--text-dim)] mb-4">
              Included
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-2">
              {["ACE vault + skills", "90-min 1:1 build", "4 weeks group calls", "Desktop app", "All integrations", "Asraya membership", "Video library", "Weekly updates"].map((item) => (
                <span key={item} className="text-base text-[var(--text-secondary)]">{item}</span>
              ))}
            </div>
          </div>
        </section>

        <hr className="sep max-w-[1400px] mx-auto" />

        {/* ═══ TESTIMONIALS ═══ */}
        <section className="py-24 md:py-40 px-6 md:px-16 lg:px-24">
          <div className="max-w-[1400px] mx-auto">
            <div className="space-y-20 md:space-y-28">
              {[
                { quote: "ACE doesn't tell me what to do. It shows me who I am and lets me decide. That's the difference between productivity and sovereignty.", name: "Founding Member", align: "left" as const },
                { quote: "None of the systems I tried started with identity. ACE does — everything else falls into place.", name: "Founding Member", align: "right" as const },
              ].map((t, i) => (
                <div key={i} className={t.align === "right" ? "md:ml-auto md:max-w-3xl" : "md:max-w-3xl"}>
                  <p className="font-heading text-2xl md:text-3xl lg:text-4xl font-light leading-snug italic text-[var(--text-primary)] mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <span className="font-mono text-[10px] uppercase tracking-[3px] text-[var(--text-dim)]">
                    {t.name} &middot; Cohort 1
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <hr className="sep max-w-[1400px] mx-auto" />

        {/* ═══ CTA ═══ */}
        <section className="py-28 md:py-44 px-6 md:px-16 lg:px-24">
          <div className="max-w-[1400px] mx-auto text-center">
            <p className="font-mono text-[10px] uppercase tracking-[4px] text-[var(--expansion)] mb-6">
              <span className="inline-block w-2 h-2 rounded-full bg-[var(--expansion)] mr-3 animate-breathe" />
              Cohort 1: Sold Out
            </p>
            <h2 className="display-giant text-4xl md:text-6xl lg:text-7xl mb-4">
              Cohort 2 is forming.
            </h2>
            <p className="display-giant text-5xl md:text-7xl lg:text-8xl mb-2" style={{ color: "var(--authority)" }}>
              $2,997
            </p>
            <p className="font-mono text-[10px] uppercase tracking-[3px] text-[var(--text-dim)] mb-14">
              Founding rate &middot; Limited seats &middot; Price increases each cohort
            </p>
            <div className="max-w-md mx-auto mb-8">
              <EmailCapture />
            </div>
            <a href="/paradigm-shift" className="uline font-mono text-xs uppercase tracking-[3px] text-[var(--text-dim)] hover:text-[var(--text-secondary)] transition-colors duration-300">
              Watch the Paradigm Shift
            </a>
          </div>
        </section>

      </main>

      <PublicFooter />
    </>
  );
}
