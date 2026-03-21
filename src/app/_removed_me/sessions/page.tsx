import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const SESSIONS = [
  {
    title: "Build Session — Vault Configuration",
    date: "Mar 17, 2026",
    duration: "92 min",
    hasTranscript: true,
    hasSynthesis: true,
  },
  {
    title: "Coaching Call — Edge Work",
    date: "Mar 14, 2026",
    duration: "58 min",
    hasTranscript: true,
    hasSynthesis: true,
  },
  {
    title: "Discovery Call",
    date: "Mar 10, 2026",
    duration: "22 min",
    hasTranscript: true,
    hasSynthesis: false,
  },
];

export default function SessionsPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <p className="text-[var(--text-secondary)]">
        Your past coaching calls, recordings, and session syntheses.
      </p>

      <div className="space-y-3">
        {SESSIONS.map((s) => (
          <Card key={s.title + s.date} hover>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-heading text-sm font-medium mb-1">
                  {s.title}
                </h3>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[10px] text-[var(--text-dim)]">
                    {s.date}
                  </span>
                  <span className="text-[var(--text-dim)]">·</span>
                  <span className="font-mono text-[10px] text-[var(--text-dim)]">
                    {s.duration}
                  </span>
                </div>
              </div>
              <div className="flex gap-2 shrink-0">
                {s.hasTranscript && <Badge variant="default">Transcript</Badge>}
                {s.hasSynthesis && <Badge variant="capacity">Synthesis</Badge>}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
