import { Metadata } from "next";
import { VideoEmbed } from "@/components/landing/VideoEmbed";
import { EmailCapture } from "@/components/landing/EmailCapture";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "The Paradigm Shift — ACE Masterclass",
  description:
    "The free masterclass that redefines how operators think about personal systems. Watch the full replay.",
};

export default function ParadigmShiftPage() {
  return (
    <div className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-widget-reveal">
          <div className="mb-4">
            <Badge variant="authority">Free Masterclass</Badge>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-semibold mb-6">
            The Paradigm Shift
          </h1>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
            Most personal systems are productivity tools wearing a mask. This
            masterclass reveals the operating model underneath — and why starting
            with identity changes everything.
          </p>
        </div>

        {/* Video */}
        <div className="mb-12">
          <VideoEmbed
            url="https://player.vimeo.com/video/placeholder"
            title="The Paradigm Shift — ACE Masterclass"
          />
        </div>

        {/* Post-video CTA */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-2xl font-semibold mb-4">
            Ready to go deeper?
          </h2>
          <p className="text-[var(--text-secondary)] mb-8 max-w-lg mx-auto">
            Enter your email to join the Batch 2 waitlist. You&apos;ll get first
            access when seats open — plus a follow-up sequence with case studies
            and methodology deep dives.
          </p>
          <EmailCapture />
        </div>

        {/* What you'll learn */}
        <div
          className="glass rounded-xl p-8"
          style={{ backgroundColor: "var(--bg-surface)" }}
        >
          <h3 className="font-heading text-lg font-semibold mb-6">
            What you&apos;ll learn
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Why productivity systems fail sovereign operators",
              "The ACE Triad — Authority, Capacity, Expansion",
              "How to build an identity-first operating system",
              "The difference between management and coherence",
              "Why your nervous system is your real infrastructure",
              "How ACE uses AI as a coaching layer, not a replacement",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2">
                <span
                  className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                  style={{
                    backgroundColor: "var(--authority)",
                    boxShadow: "0 0 4px var(--authority)",
                  }}
                />
                <span className="text-sm text-[var(--text-secondary)]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
