import { Metadata } from "next";
import { Card } from "@/components/ui/Card";
import { CoherenceOrb } from "@/components/brand/CoherenceOrb";
import { SignalDots } from "@/components/brand/SignalDots";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "How ACE Works — Actualize Coherence Engine",
  description:
    "The ACE Triad: Authority, Capacity, Expansion. Three pillars that map your entire operating system to one coherent framework.",
};

const SIGNALS = {
  authority: [
    {
      name: "Truth",
      desc: "What is actually real for you — not what you perform for others.",
    },
    {
      name: "Choice",
      desc: "Deciding from your center, not from obligation or anxiety.",
    },
    {
      name: "Expression",
      desc: "Making your inner world visible. Creating from identity, not approval.",
    },
  ],
  capacity: [
    {
      name: "Regulation",
      desc: "Your ability to return to center when activated. The foundation of everything.",
    },
    {
      name: "Depth",
      desc: "The quality of your presence — in relationships, in work, in solitude.",
    },
    {
      name: "Resilience",
      desc: "How quickly you recover. Not toughness — adaptive capacity.",
    },
  ],
  expansion: [
    {
      name: "Rhythm",
      desc: "Sustainable pace. Not hustle, not collapse — pulse.",
    },
    {
      name: "Containers",
      desc: "The structures that hold your energy: rituals, systems, boundaries.",
    },
    {
      name: "Realization",
      desc: "Outputs that reflect who you actually are. Shipping as self-expression.",
    },
  ],
};

export default function HowItWorksPage() {
  return (
    <div className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 animate-widget-reveal">
          <p className="font-mono text-[10px] uppercase tracking-[2px] text-[var(--text-dim)] mb-3">
            How It Works
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-semibold mb-6">
            <span className="gradient-text">One engine.</span> Nine signals.
          </h1>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
            ACE maps your operating state across three pillars — Authority,
            Capacity, Expansion — each with three signals. When all nine align,
            that&apos;s coherence.
          </p>
        </div>

        {/* Orb + Signal Grid visual */}
        <div className="flex flex-col items-center mb-24">
          <div className="relative">
            <CoherenceOrb size="dashboard" />
            <div className="absolute -right-16 top-1/2 -translate-y-1/2">
              <SignalDots />
            </div>
          </div>
          <p className="mt-6 font-mono text-[10px] uppercase tracking-[2px] text-[var(--text-dim)]">
            9 signals &middot; 3 pillars &middot; 1 score
          </p>
        </div>

        {/* Three Pillars Detailed */}
        {[
          {
            name: "Authority",
            color: "var(--authority)",
            mode: "Vision",
            tagline: "Who you are when nobody's watching.",
            signals: SIGNALS.authority,
            desc: "Authority is the identity leg. It answers: Are you living from truth, or performing for approval? Every productivity system skips this. ACE starts here.",
          },
          {
            name: "Capacity",
            color: "var(--capacity)",
            mode: "Nourish",
            tagline: "Your nervous system is your infrastructure.",
            signals: SIGNALS.capacity,
            desc: "Capacity is the regulation leg. Without it, ambition becomes self-destruction. ACE tracks your regulation state, depth of engagement, and recovery patterns.",
          },
          {
            name: "Expansion",
            color: "var(--expansion)",
            mode: "Execute",
            tagline: "Structure that produces without consuming you.",
            signals: SIGNALS.expansion,
            desc: "Expansion is the structure leg. It turns identity and energy into tangible output. Not hustle culture — sustainable containers that ship consistently.",
          },
        ].map((pillar, i) => (
          <div
            key={pillar.name}
            className="mb-20 last:mb-0"
          >
            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center font-heading text-xl font-semibold"
                style={{
                  backgroundColor: `color-mix(in srgb, ${pillar.color} 12%, transparent)`,
                  color: pillar.color,
                  border: `1px solid color-mix(in srgb, ${pillar.color} 25%, transparent)`,
                }}
              >
                {pillar.name[0]}
              </div>
              <div>
                <h2
                  className="font-heading text-2xl font-semibold"
                  style={{ color: pillar.color }}
                >
                  {pillar.name}
                </h2>
                <span className="font-mono text-[9px] uppercase tracking-[1.5px] text-[var(--text-dim)]">
                  Mode: {pillar.mode}
                </span>
              </div>
            </div>

            <p className="text-lg text-[var(--text-secondary)] mb-2 italic">
              {pillar.tagline}
            </p>
            <p className="text-[var(--text-secondary)] mb-8 leading-relaxed max-w-3xl">
              {pillar.desc}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {pillar.signals.map((signal) => (
                <Card key={signal.name}>
                  <div className="flex items-center gap-2 mb-2">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{
                        backgroundColor: pillar.color,
                        boxShadow: `0 0 5px ${pillar.color}`,
                      }}
                    />
                    <h3 className="font-heading text-sm font-medium">
                      {signal.name}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {signal.desc}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        ))}

        {/* CTA */}
        <div className="text-center mt-24 pt-16 border-t border-[var(--border)]">
          <h3 className="font-heading text-2xl font-semibold mb-4">
            Ready to see it in action?
          </h3>
          <p className="text-[var(--text-secondary)] mb-8">
            Watch the Paradigm Shift masterclass — free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/paradigm-shift">Watch the Paradigm Shift</Button>
            <Button variant="ghost" href="/pricing">
              See Pricing →
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
