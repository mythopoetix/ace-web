import { Card } from "@/components/ui/Card";

const EVENT_TYPES = [
  { name: "Connection Call", duration: "30 min", desc: "Quick check-in or follow-up" },
  { name: "Discovery Call", duration: "20 min", desc: "Explore if ACE is right for you" },
  { name: "Clarity Session", duration: "60 min", desc: "Deep dive on a specific challenge" },
  { name: "Lucidity Session", duration: "90 min", desc: "Extended coaching session" },
  { name: "ACE Build Session", duration: "120 min", desc: "Configure your vault from scratch" },
];

export default function BookingPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <p className="text-[var(--text-secondary)] mb-8">
        Book a 1:1 with Nikhil. All times shown in your local timezone.
      </p>

      {/* Cal.com embed placeholder */}
      <Card gradient className="mb-8">
        <div className="aspect-[4/3] flex items-center justify-center rounded-lg bg-[var(--bg-elevated)]">
          <div className="text-center">
            <p className="font-heading text-lg font-medium mb-2 text-[var(--text-dim)]">
              Cal.com Embed
            </p>
            <p className="text-sm text-[var(--text-dim)]">
              Will load the live booking widget when Cal.com is connected.
            </p>
          </div>
        </div>
      </Card>

      {/* Available session types */}
      <p className="font-mono text-[9px] uppercase tracking-[2px] text-[var(--text-dim)] mb-3">
        Session Types
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {EVENT_TYPES.map((evt) => (
          <Card key={evt.name} hover>
            <div className="flex items-center justify-between mb-1">
              <h3 className="font-heading text-sm font-medium">{evt.name}</h3>
              <span className="font-mono text-[10px] text-[var(--text-dim)]">
                {evt.duration}
              </span>
            </div>
            <p className="text-xs text-[var(--text-secondary)]">{evt.desc}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
