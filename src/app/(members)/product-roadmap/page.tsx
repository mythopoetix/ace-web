import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const ROADMAP = [
  {
    title: "Windows Desktop App",
    category: "Desktop",
    status: "PLANNED",
    eta: "Beta 3",
    votes: 6,
    description: "Native Windows build of the ACE Command Center.",
  },
  {
    title: "Mobile Companion App",
    category: "Mobile",
    status: "PLANNED",
    eta: "Beta 4",
    votes: 5,
    description: "Quick capture, coherence check, and signal view on mobile.",
  },
  {
    title: "Personal Coherence Dashboard",
    category: "Web",
    status: "IN_PROGRESS",
    eta: "Beta 2",
    votes: 4,
    description: "See your Triad health signals on the web — synced from your vault.",
  },
  {
    title: "Practitioner Tier + Client Tools",
    category: "Product",
    status: "PLANNED",
    eta: "Beta 3",
    votes: 3,
    description: "Deploy ACE to your own clients with white-label tools.",
  },
  {
    title: "/sync-core Automated Updates",
    category: "Skills",
    status: "IN_PROGRESS",
    eta: "Beta 2",
    votes: 7,
    description: "Automatic skill updates pushed to your vault with conflict resolution.",
  },
  {
    title: "ACE-Delivers-ACE Self-Onboarding",
    category: "Product",
    status: "PLANNED",
    eta: "Beta 4–5",
    votes: 2,
    description: "The system onboards new users into itself — no manual build session needed.",
  },
];

const STATUS_MAP: Record<string, { label: string; variant: "capacity" | "authority" | "default" }> = {
  SHIPPED: { label: "Shipped", variant: "capacity" },
  IN_PROGRESS: { label: "In Progress", variant: "authority" },
  PLANNED: { label: "Planned", variant: "default" },
};

export default function MemberRoadmapPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <p className="text-[var(--text-secondary)]">
        Vote on what gets built next. Your votes directly influence priority.
      </p>

      <div className="space-y-3">
        {ROADMAP.sort((a, b) => b.votes - a.votes).map((item) => {
          const status = STATUS_MAP[item.status] ?? STATUS_MAP.PLANNED;
          return (
            <Card key={item.title} hover>
              <div className="flex items-start gap-4">
                {/* Vote button */}
                <button className="glass rounded-lg px-3 py-2 text-center shrink-0 hover:border-[var(--border-hover)] transition-all">
                  <span className="block text-xs text-[var(--text-dim)]">▲</span>
                  <span className="font-mono text-sm font-medium text-[var(--text-primary)]">
                    {item.votes}
                  </span>
                </button>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant={status.variant}>{status.label}</Badge>
                    <Badge variant="default">{item.category}</Badge>
                    {item.eta && (
                      <span className="font-mono text-[9px] text-[var(--text-dim)]">
                        ETA: {item.eta}
                      </span>
                    )}
                  </div>
                  <h3 className="font-heading text-sm font-medium mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)]">
                    {item.description}
                  </p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
