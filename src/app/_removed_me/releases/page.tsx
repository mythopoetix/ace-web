import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const RELEASES = [
  {
    version: "v2.4",
    date: "Mar 20, 2026",
    changes: [
      "New /build-vault skill for client onboarding",
      "/sync-core now supports AI-assisted conflict resolution",
      "3 new widget types in Desktop Command Center",
    ],
  },
  {
    version: "v2.3",
    date: "Mar 15, 2026",
    changes: [
      "Signal engine (/signal) for content generation",
      "Culturescan scanner with 13 parallel agents",
      "/pulse E1b signal for target freshness",
    ],
  },
  {
    version: "v2.2",
    date: "Mar 10, 2026",
    changes: [
      "Desktop app Neo-Glassmorphic UI overhaul",
      "Coherence orb with 5 state visualizations",
      "Collapsible sidebar + zoom controls",
    ],
  },
];

export default function ReleasesPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <p className="text-[var(--text-secondary)]">
        What&apos;s new in your ACE system. Updates arrive via{" "}
        <code className="font-mono text-xs text-[var(--authority)]">/sync-core</code>.
      </p>

      <div className="space-y-4">
        {RELEASES.map((r) => (
          <Card key={r.version}>
            <div className="flex items-center gap-3 mb-3">
              <Badge variant="capacity">{r.version}</Badge>
              <span className="font-mono text-[10px] text-[var(--text-dim)]">
                {r.date}
              </span>
            </div>
            <ul className="space-y-1.5">
              {r.changes.map((c) => (
                <li key={c} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <span
                    className="w-1 h-1 rounded-full mt-2 shrink-0"
                    style={{ backgroundColor: "var(--capacity)", boxShadow: "0 0 3px var(--capacity)" }}
                  />
                  {c}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </div>
  );
}
