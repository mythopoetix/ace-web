import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

const FEEDBACK_ITEMS = [
  {
    title: "Windows desktop app support",
    type: "FEATURE",
    status: "PLANNED",
    votes: 4,
    date: "Mar 18, 2026",
  },
  {
    title: "Mobile companion app",
    type: "FEATURE",
    status: "PLANNED",
    votes: 3,
    date: "Mar 15, 2026",
  },
  {
    title: "/pulse signal colors not updating",
    type: "BUG",
    status: "IN_PROGRESS",
    votes: 1,
    date: "Mar 20, 2026",
  },
];

const STATUS_MAP: Record<string, { label: string; variant: "capacity" | "authority" | "default" | "expansion" }> = {
  OPEN: { label: "Open", variant: "default" },
  IN_PROGRESS: { label: "In Progress", variant: "authority" },
  SHIPPED: { label: "Shipped", variant: "capacity" },
  CLOSED: { label: "Closed", variant: "default" },
};

export default function FeedbackPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-[var(--text-secondary)]">
          Report bugs, request features, or ask questions.
        </p>
        <Button variant="primary" size="sm" href="/feedback/new">
          New Submission
        </Button>
      </div>

      {/* Filters */}
      <div className="flex gap-2">
        {["All", "Bugs", "Features", "Questions"].map((f, i) => (
          <button
            key={f}
            className={`font-mono text-[10px] uppercase tracking-[1.5px] px-3 py-1.5 rounded-md transition-all ${
              i === 0
                ? "bg-[var(--glow-primary)] text-[var(--text-primary)] border border-[var(--glass-border)]"
                : "text-[var(--text-dim)] hover:text-[var(--text-secondary)]"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Items */}
      <div className="space-y-3">
        {FEEDBACK_ITEMS.map((item) => {
          const status = STATUS_MAP[item.status] ?? STATUS_MAP.OPEN;
          return (
            <Card key={item.title} hover>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant={item.type === "BUG" ? "expansion" : "default"}>
                      {item.type}
                    </Badge>
                    <Badge variant={status.variant}>{status.label}</Badge>
                  </div>
                  <h3 className="font-heading text-sm font-medium">{item.title}</h3>
                  <span className="font-mono text-[10px] text-[var(--text-dim)]">
                    {item.date}
                  </span>
                </div>
                <div className="text-center shrink-0">
                  <button className="glass rounded-md px-3 py-1.5 text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                    ▲ {item.votes}
                  </button>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
