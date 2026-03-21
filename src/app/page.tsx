import Image from "next/image";
import { PublicNav } from "@/components/layout/PublicNav";
import { PublicFooter } from "@/components/layout/PublicFooter";
import { CoherenceOrb } from "@/components/brand/CoherenceOrb";
import { EnergyField } from "@/components/brand/EnergyField";
import { ScrollAnimations } from "@/components/providers/ScrollAnimations";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { EmailCapture } from "@/components/landing/EmailCapture";
import { VideoEmbed } from "@/components/landing/VideoEmbed";
import {
  Zap, ArrowRight, Sunrise, Phone, Globe, Flame, Moon,
  Activity, Pen, Hammer, Link2, MessageCircle, RefreshCw,
  Shield, Puzzle, Network, Box,
  Eye, Heart, Rocket, Play, Lock, GitBranch, HardDrive
} from "lucide-react";

export default function LandingPage() {
  return (
    <>
      <PublicNav />
      <ScrollAnimations />

      <main className="pt-16">

        {/* ═══ HERO ═══ */}
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

            <h1 className="hero-title font-heading text-4xl md:text-5xl font-semibold leading-[1.15] mb-4 animate-[fadeSlideUp_0.6s_ease_0.2s_both]">
              <span className="gradient-text">One system</span>{" "}
              to rule them all.
            </h1>

            <p className="text-base text-[var(--text-secondary)] max-w-md mx-auto mb-3 leading-relaxed animate-[fadeSlideUp_0.6s_ease_0.35s_both]">
              The AI operating system that knows your psychology, writes in your
              voice, coaches through your edges, and builds what you imagine.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-8 animate-[fadeSlideUp_0.6s_ease_0.45s_both]">
              {[
                { icon: Puzzle, label: "Extensible" },
                { icon: Box, label: "Modular" },
                { icon: Network, label: "Interoperable" },
                { icon: Shield, label: "Sovereign" },
              ].map(({ icon: Icon, label }) => (
                <span key={label} className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[1.5px] text-[var(--text-dim)]">
                  <Icon size={11} strokeWidth={1.5} className="opacity-50" />
                  {label}
                </span>
              ))}
            </div>

            <div className="animate-[fadeSlideUp_0.6s_ease_0.55s_both]">
              <EmailCapture />
            </div>
          </div>
        </section>

        {/* Accent strip */}
        <div className="accent-strip h-px origin-center" style={{ background: "var(--gradient-accent)" }} />

        {/* ═══ DESKTOP APP PREVIEW ═══ */}
        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <p className="font-mono text-[9px] uppercase tracking-[2px] text-[var(--text-dim)] mb-3">
              The Interface
            </p>
            <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-12">
              Your command center. Always on. Always aware.
            </h2>

            {/* Desktop preview with glow frame */}
            <div className="desktop-preview relative mx-auto max-w-4xl">
              <div className="absolute -inset-1 rounded-2xl opacity-30 blur-xl pointer-events-none" style={{ background: "var(--gradient-accent)" }} />
              <div className="relative rounded-xl overflow-hidden border border-[var(--glass-border)]" style={{ boxShadow: "0 0 40px rgba(136,120,255,0.08), 0 20px 60px rgba(0,0,0,0.3)" }}>
                <Image
                  src="/desktop-preview.png"
                  alt="ACE Desktop — Command Center"
                  width={1400}
                  height={860}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* ═══ THE SHIFT ═══ */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="glass rounded-xl p-8 md:p-10 relative overflow-hidden">
              <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(136,120,255,0.06), transparent 70%)" }} />

              <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-12 relative">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="icon-badge w-7 h-7 rounded-lg flex items-center justify-center" style={{ backgroundColor: "rgba(200,160,240,0.1)", boxShadow: "0 0 12px rgba(200,160,240,0.08)" }}>
                      <Zap size={14} className="text-[var(--authority)]" strokeWidth={1.5} />
                    </div>
                    <p className="font-mono text-[9px] uppercase tracking-[2px] text-[var(--text-dim)]">The Shift</p>
                  </div>
                  <h2 className="font-heading text-2xl md:text-3xl font-semibold leading-snug mb-5">
                    What used to take weeks now takes hours.
                  </h2>
                  <p className="reveal-text text-sm text-[var(--text-secondary)] leading-relaxed">
                    The constraint is no longer capability. It&apos;s architecture.
                  </p>
                </div>

                <div className="space-y-5 flex flex-col justify-center">
                  {[
                    { before: "Week of dev work", after: "Afternoon", color: "var(--authority)" },
                    { before: "$20K brand strategy", after: "Hours", color: "var(--capacity)" },
                    { before: "Full content team", after: "Runs in parallel", color: "var(--expansion)" },
                    { before: "Analysis in days", after: "Overnight", color: "var(--authority)" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="text-xs text-[var(--text-dim)] line-through flex-1 text-right">{item.before}</span>
                      <div className="icon-badge w-6 h-6 rounded-md flex items-center justify-center shrink-0" style={{ backgroundColor: `color-mix(in srgb, ${item.color} 12%, transparent)` }}>
                        <ArrowRight size={11} style={{ color: item.color }} strokeWidth={2} />
                      </div>
                      <span className="text-sm font-semibold flex-1" style={{ color: item.color }}>{item.after}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Accent strip */}
        <div className="accent-strip h-px origin-center" style={{ background: "var(--gradient-accent)" }} />

        {/* ═══ A DAY WITH ACE ═══ */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="glass rounded-xl p-8 md:p-10 relative overflow-hidden">
              <div className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(96,216,168,0.05), transparent 70%)" }} />

              <div className="flex items-center gap-2 mb-2 relative">
                <div className="icon-badge w-7 h-7 rounded-lg flex items-center justify-center" style={{ backgroundColor: "rgba(96,216,168,0.1)", boxShadow: "0 0 12px rgba(96,216,168,0.08)" }}>
                  <Activity size={14} className="text-[var(--capacity)]" strokeWidth={1.5} />
                </div>
                <p className="font-mono text-[9px] uppercase tracking-[2px] text-[var(--text-dim)]">A day with ACE</p>
              </div>
              <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-10 relative">
                This isn&apos;t a demo. This is a Tuesday.
              </h2>

              <div className="space-y-8 relative">
                {[
                  { icon: Sunrise, time: "6 AM", action: "/start", desc: "Reads your calendar, checks your nervous system, orients your day around the one thing that matters.", color: "var(--authority)" },
                  { icon: Phone, time: "9 AM", action: "On a call", desc: "Meanwhile — newsletter drafted in your voice, emails processed, agents scanning Reddit, dashboard updated.", color: "var(--capacity)" },
                  { icon: Globe, time: "11 AM", action: "\"Build me a website\"", desc: "Full landing page, members area, onboarding, knowledge base, payments. Deployed live. One session.", color: "var(--expansion)" },
                  { icon: Flame, time: "2 PM", action: "Running hot", desc: "ACE catches the pattern — 10 days without rest. Asks: \"What are you avoiding?\"", color: "var(--authority)" },
                  { icon: Moon, time: "6 PM", action: "/eod", desc: "Logs what shipped, captures patterns, surfaces the decision you've been sitting on.", color: "var(--capacity)" },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex gap-5">
                      <div className="w-14 shrink-0 text-right flex flex-col items-end gap-1.5">
                        <div className="icon-badge w-7 h-7 rounded-lg flex items-center justify-center" style={{ backgroundColor: `color-mix(in srgb, ${item.color} 10%, transparent)`, boxShadow: `0 0 10px color-mix(in srgb, ${item.color} 6%, transparent)` }}>
                          <Icon size={13} style={{ color: item.color }} strokeWidth={1.5} />
                        </div>
                        <span className="font-mono text-[9px] text-[var(--text-dim)]">{item.time}</span>
                      </div>
                      <div className="relative pl-5 pb-2 border-l border-[var(--glass-border)]">
                        <div className="absolute -left-[4px] top-1 w-[7px] h-[7px] rounded-full" style={{ backgroundColor: item.color, boxShadow: `0 0 10px ${item.color}` }} />
                        <span className="font-heading text-sm font-semibold" style={{ color: item.color }}>{item.action}</span>
                        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mt-1">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ═══ COMPOUNDING — OPEN TEXT ═══ */}
        <section className="py-28 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <div className="icon-badge w-7 h-7 rounded-lg flex items-center justify-center" style={{ backgroundColor: "rgba(224,128,160,0.1)", boxShadow: "0 0 12px rgba(224,128,160,0.08)" }}>
                <RefreshCw size={14} className="text-[var(--expansion)]" strokeWidth={1.5} />
              </div>
              <p className="font-mono text-[9px] uppercase tracking-[2px] text-[var(--text-dim)]">
                Compounding Intelligence
              </p>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold leading-snug mb-6">
              Most people prompt.
              <br />
              ACE <span className="gradient-text">compounds.</span>
            </h2>
            <p className="reveal-text text-base text-[var(--text-secondary)] leading-relaxed max-w-xl">
              Six months in, it knows your edges better than your therapist. It writes in
              your cadence, coaches from your growth zones, and shifts to regulation when
              you&apos;re running hot. Every session leaves residue. Your intelligence
              infrastructure deepens overnight.
            </p>
          </div>
        </section>

        {/* ═══ CAPABILITIES ═══ */}
        <section className="py-4 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="glass rounded-xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3">
                {[
                  { icon: Activity, title: "Reads your nervous system", desc: "Catches dysregulation before you crash. Shifts to coaching, not tasks.", color: "var(--capacity)" },
                  { icon: Pen, title: "Writes in your voice", desc: "Your cadence, your warmth, your edge. On your best day, every day.", color: "var(--expansion)" },
                  { icon: Hammer, title: "Builds what you imagine", desc: "Websites, apps, dashboards, PDFs. Describe it. Come back to a product.", color: "var(--authority)" },
                  { icon: Link2, title: "Connects every tool", desc: "Gmail, Calendar, Fathom, Telegram, Stripe, Airtable. One intelligence layer.", color: "var(--capacity)" },
                  { icon: MessageCircle, title: "Coaches, not optimizes", desc: "\"What are you avoiding?\" Growth from a system that knows your edges.", color: "var(--authority)" },
                  { icon: RefreshCw, title: "Evolves every week", desc: "New skills pushed to your vault automatically. Gets smarter while you sleep.", color: "var(--expansion)" },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className={`p-6 hover:bg-[rgba(140,120,255,0.03)] transition-colors group cursor-default ${i < 3 ? "border-b border-[var(--glass-border)]" : ""} ${i % 3 !== 2 ? "md:border-r md:border-[var(--glass-border)]" : ""}`}>
                      <div className="flex items-center gap-2.5 mb-3">
                        <div className="icon-badge w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 group-hover:scale-110" style={{ backgroundColor: `color-mix(in srgb, ${item.color} 10%, transparent)`, boxShadow: `0 0 12px color-mix(in srgb, ${item.color} 8%, transparent), 0 0 0 1px color-mix(in srgb, ${item.color} 12%, transparent)` }}>
                          <Icon size={15} style={{ color: item.color }} strokeWidth={1.5} />
                        </div>
                        <p className="font-heading text-sm font-medium">{item.title}</p>
                      </div>
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed pl-[42px]">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Accent strip */}
        <div className="accent-strip h-px origin-center mt-20" style={{ background: "var(--gradient-accent)" }} />

        {/* ═══ TRIAD ═══ */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="glass rounded-xl overflow-hidden relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(136,120,255,0.03), transparent 70%)" }} />

              <div className="p-6 md:p-8 border-b border-[var(--glass-border)] relative">
                <div className="flex items-center gap-2 mb-2">
                  <div className="icon-badge w-7 h-7 rounded-lg flex items-center justify-center" style={{ backgroundColor: "rgba(200,160,240,0.1)", boxShadow: "0 0 12px rgba(200,160,240,0.06)" }}>
                    <Eye size={14} className="text-[var(--authority)]" strokeWidth={1.5} />
                  </div>
                  <p className="font-mono text-[9px] uppercase tracking-[2px] text-[var(--text-dim)]">The Coherence Triad</p>
                </div>
                <h2 className="font-heading text-xl md:text-2xl font-semibold">
                  Most systems optimize for output. ACE optimizes for <span className="gradient-text">coherence.</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 relative">
                {[
                  { icon: Eye, name: "Authority", tagline: "You know who you are.", signals: "Truth → Choice → Expression", desc: "The system reads whether your life matches your truth — and surfaces the gap.", color: "var(--authority)" },
                  { icon: Heart, name: "Capacity", tagline: "You can hold what comes.", signals: "Regulation → Depth → Resilience", desc: "Your nervous system is infrastructure. ACE protects it.", color: "var(--capacity)" },
                  { icon: Rocket, name: "Expansion", tagline: "You expand into what's next.", signals: "Rhythm → Containers → Realization", desc: "Structure that produces without consuming you. Ideas that ship.", color: "var(--expansion)" },
                ].map((p, i) => {
                  const Icon = p.icon;
                  return (
                    <div key={p.name} className={`p-6 md:p-8 ${i < 2 ? "md:border-r border-b md:border-b-0 border-[var(--glass-border)]" : ""}`}>
                      <div className="flex items-center gap-2.5 mb-3">
                        <div className="icon-badge w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: `color-mix(in srgb, ${p.color} 12%, transparent)`, boxShadow: `0 0 16px color-mix(in srgb, ${p.color} 8%, transparent), 0 0 0 1px color-mix(in srgb, ${p.color} 15%, transparent)` }}>
                          <Icon size={16} style={{ color: p.color }} strokeWidth={1.5} />
                        </div>
                        <span className="font-heading text-lg font-semibold" style={{ color: p.color }}>{p.name}</span>
                      </div>
                      <p className="text-xs italic mb-3" style={{ color: p.color, opacity: 0.6 }}>{p.tagline}</p>
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-3">{p.desc}</p>
                      <p className="font-mono text-[7px] uppercase tracking-[1.5px] text-[var(--text-dim)]">{p.signals}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ═══ VIDEO ═══ */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="glass rounded-xl p-8 md:p-10 relative overflow-hidden">
              <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(200,160,240,0.05), transparent 70%)" }} />
              <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-8 items-center relative">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="icon-badge w-7 h-7 rounded-lg flex items-center justify-center" style={{ backgroundColor: "rgba(200,160,240,0.1)" }}>
                      <Play size={13} className="text-[var(--authority)]" strokeWidth={1.5} />
                    </div>
                    <Badge variant="authority">Free Masterclass</Badge>
                  </div>
                  <h2 className="font-heading text-xl md:text-2xl font-semibold mb-2">The Paradigm Shift</h2>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5">60 minutes that sold out Cohort 1.</p>
                  <EmailCapture />
                </div>
                <VideoEmbed url="https://player.vimeo.com/video/placeholder" title="The Paradigm Shift" />
              </div>
            </div>
          </div>
        </section>

        {/* Accent strip */}
        <div className="accent-strip h-px origin-center" style={{ background: "var(--gradient-accent)" }} />

        {/* ═══ SOVEREIGNTY — OPEN TEXT ═══ */}
        <section className="py-28 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <div className="icon-badge w-7 h-7 rounded-lg flex items-center justify-center" style={{ backgroundColor: "rgba(200,160,240,0.1)" }}>
                <Lock size={14} className="text-[var(--authority)]" strokeWidth={1.5} />
              </div>
              <p className="font-mono text-[9px] uppercase tracking-[2px] text-[var(--text-dim)]">Sovereignty</p>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold leading-snug mb-6">
              Your intelligence. Your patterns.
              <br />
              Your context. <span className="gradient-text">Yours.</span>
            </h2>
            <p className="reveal-text text-base text-[var(--text-secondary)] leading-relaxed max-w-xl mb-8">
              Everything lives on your machine. Not in someone else&apos;s cloud.
              Not feeding someone else&apos;s model. Owning your intelligence
              infrastructure is not a technical detail. It&apos;s a political one.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                { icon: HardDrive, label: "Local-first" },
                { icon: GitBranch, label: "Git-backed" },
                { icon: Shield, label: "Portable forever" },
                { icon: Lock, label: "Your machine" },
              ].map(({ icon: Icon, label }) => (
                <span key={label} className="flex items-center gap-1.5 font-mono text-[8px] uppercase tracking-[1.5px] text-[var(--text-dim)] border border-[var(--border)] rounded px-2.5 py-1 hover:border-[var(--border-hover)] transition-colors">
                  <Icon size={10} strokeWidth={1.5} className="opacity-50" />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ BUILD + PROOF + CTA ═══ */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            {/* Build */}
            <div className="glass rounded-xl p-8 md:p-10 relative overflow-hidden mb-20">
              <div className="absolute -bottom-16 -left-16 w-40 h-40 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(96,216,168,0.04), transparent 70%)" }} />
              <div className="flex items-center gap-2 mb-2 relative">
                <div className="icon-badge w-7 h-7 rounded-lg flex items-center justify-center" style={{ backgroundColor: "rgba(96,216,168,0.1)" }}>
                  <Rocket size={14} className="text-[var(--expansion)]" strokeWidth={1.5} />
                </div>
                <p className="font-mono text-[9px] uppercase tracking-[2px] text-[var(--text-dim)]">The Build</p>
              </div>
              <h2 className="font-heading text-xl md:text-2xl font-semibold mb-2 relative">4 weeks. Zero to operational.</h2>
              <p className="text-sm text-[var(--text-secondary)] mb-8 relative">Custom-built around your identity, your tools, your workflow.</p>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8 relative">
                {[
                  { phase: "Week 1", title: "Identity + vault", desc: "Blueprint intake. Identity core compiled.", color: "var(--authority)" },
                  { phase: "Week 1", title: "Custom skills", desc: "Built for your workflow. Before you meet.", color: "var(--capacity)" },
                  { phase: "Week 1–2", title: "1:1 build session", desc: "90 min with Nikhil. System comes alive.", color: "var(--expansion)" },
                  { phase: "Week 2–5", title: "Compound", desc: "Daily use. Group calls. System learns you.", color: "var(--authority)" },
                ].map((item) => (
                  <div key={item.title}>
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className="w-[6px] h-[6px] rounded-full" style={{ backgroundColor: item.color, boxShadow: `0 0 6px ${item.color}` }} />
                      <span className="font-mono text-[8px] uppercase tracking-[1.5px]" style={{ color: item.color }}>{item.phase}</span>
                    </div>
                    <p className="text-sm font-medium mb-0.5">{item.title}</p>
                    <p className="text-xs text-[var(--text-secondary)]">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-[var(--glass-border)] pt-5 relative">
                <p className="font-mono text-[8px] uppercase tracking-[2px] text-[var(--text-dim)] mb-2">Included</p>
                <div className="flex flex-wrap gap-x-5 gap-y-1">
                  {["ACE vault + skills", "90-min 1:1 build", "4 weeks group calls", "Desktop app", "All integrations", "Asraya membership", "Video library", "Weekly updates"].map((item) => (
                    <span key={item} className="text-xs text-[var(--text-secondary)]">{item}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Testimonials */}
            <div className="max-w-3xl mx-auto space-y-12 mb-20">
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

            {/* CTA */}
            <div className="glass rounded-xl p-8 md:p-10 text-center relative overflow-hidden max-w-2xl mx-auto">
              <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 40%, rgba(136,120,255,0.06), transparent 60%)" }} />
              <div className="relative">
                <Badge variant="sold-out">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--red)] inline-block" />
                  Cohort 1: Sold Out
                </Badge>
                <h2 className="font-heading text-2xl md:text-3xl font-semibold mt-4 mb-2">Cohort 2 is forming.</h2>
                <p className="font-heading text-xl text-[var(--authority)] mb-0.5">$2,997</p>
                <p className="font-mono text-[8px] uppercase tracking-[1.5px] text-[var(--text-dim)] mb-7">
                  Founding rate &middot; Limited seats &middot; Price increases each cohort
                </p>
                <EmailCapture />
                <div className="mt-4">
                  <Button variant="ghost" size="sm" href="/paradigm-shift">Watch the Paradigm Shift →</Button>
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
