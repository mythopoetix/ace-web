import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const CHANGELOG = [
  {
    date: "Mar 20, 2026",
    entries: [
      { skill: "/build-vault", message: "New skill: automates vault creation for new clients from Blueprint intake", type: "new" },
      { skill: "/sync-core", message: "Improved conflict resolution — AI-assisted merge for custom skill edits", type: "improved" },
    ],
  },
  {
    date: "Mar 18, 2026",
    entries: [
      { skill: "/signal", message: "Weekly signal engine — generates platform-specific content from your activity", type: "new" },
      { skill: "/pulse", message: "Added E1b signal: weekly target freshness validation", type: "improved" },
    ],
  },
  {
    date: "Mar 15, 2026",
    entries: [
      { skill: "/culturescan", message: "Reddit cultural intelligence scanner — 13 parallel subagents", type: "new" },
      { skill: "/start", message: "Now validates active.md weekly targets and flags stale entries", type: "improved" },
      { skill: "/close", message: "Bug fix: session log entries now correctly append to daily note", type: "fix" },
    ],
  },
];

const TYPE_BADGE: Record<string, "capacity" | "authority" | "expansion"> = {
  new: "capacity",
  improved: "authority",
  fix: "expansion",
};

export default function ChangelogPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <p className="text-[var(--text-secondary)]">
        Updates pushed to your vault via <code className="font-mono text-xs text-[var(--authority)]">/sync-core</code>. Newest first.
      </p>

      {CHANGELOG.map((group) => (
        <div key={group.date}>
          <p className="font-mono text-[10px] uppercase tracking-[2px] text-[var(--text-dim)] mb-3">
            {group.date}
          </p>
          <div className="space-y-2">
            {group.entries.map((entry) => (
              <Card key={entry.skill + entry.message}>
                <div className="flex items-start gap-3">
                  <Badge variant={TYPE_BADGE[entry.type]}>
                    {entry.type}
                  </Badge>
                  <div>
                    <code className="font-mono text-xs text-[var(--authority)]">
                      {entry.skill}
                    </code>
                    <p className="text-sm text-[var(--text-secondary)] mt-0.5">
                      {entry.message}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
