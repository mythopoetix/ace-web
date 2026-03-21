import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const CATEGORIES = ["All", "General", "Commands", "Integrations", "Coaching", "Feature Ideas"];

const DISCUSSIONS = [
  {
    id: "1",
    title: "How are you using /pulse in your daily routine?",
    author: "Marc",
    category: "Commands",
    replies: 5,
    lastActive: "3 hours ago",
    pinned: true,
  },
  {
    id: "2",
    title: "Fathom integration: best practices for call processing",
    author: "Joe",
    category: "Integrations",
    replies: 3,
    lastActive: "Yesterday",
    pinned: false,
  },
  {
    id: "3",
    title: "Feature idea: /weekly-review auto-summary",
    author: "Aleksander",
    category: "Feature Ideas",
    replies: 2,
    lastActive: "2 days ago",
    pinned: false,
  },
];

export default function DiscussionsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat, i) => (
            <button
              key={cat}
              className={`font-mono text-[10px] uppercase tracking-[1.5px] px-3 py-1.5 rounded-md transition-all ${
                i === 0
                  ? "bg-[var(--glow-primary)] text-[var(--text-primary)] border border-[var(--glass-border)]"
                  : "text-[var(--text-dim)] hover:text-[var(--text-secondary)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <Button variant="primary" size="sm">
          New Discussion
        </Button>
      </div>

      <div className="space-y-3">
        {DISCUSSIONS.map((d) => (
          <Link key={d.id} href={`/community/discussions/${d.id}`}>
            <Card hover className="cursor-pointer">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    {d.pinned && <Badge variant="authority">Pinned</Badge>}
                    <Badge variant="default">{d.category}</Badge>
                  </div>
                  <h3 className="font-heading text-sm font-medium mb-1">
                    {d.title}
                  </h3>
                  <span className="font-mono text-[10px] text-[var(--text-dim)]">
                    {d.author} · {d.lastActive}
                  </span>
                </div>
                <div className="text-center shrink-0">
                  <span className="font-mono text-sm text-[var(--text-secondary)]">
                    {d.replies}
                  </span>
                  <p className="font-mono text-[8px] text-[var(--text-dim)] uppercase">
                    replies
                  </p>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
