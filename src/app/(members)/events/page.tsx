import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

const UPCOMING = [
  {
    title: "Weekly Group Call — Week 3",
    type: "LIVE_SESSION",
    date: "Mar 25, 2026",
    time: "11:00 AM CST",
    capacity: "8 seats",
    registered: false,
  },
  {
    title: "Q&A: MCP Integrations Deep Dive",
    type: "QA_CALL",
    date: "Mar 28, 2026",
    time: "2:00 PM CST",
    capacity: "Open",
    registered: false,
  },
];

const PAST = [
  {
    title: "The Paradigm Shift — Masterclass",
    type: "MASTERCLASS",
    date: "Feb 15, 2026",
    hasRecording: true,
  },
  {
    title: "Weekly Group Call — Week 1",
    type: "LIVE_SESSION",
    date: "Mar 11, 2026",
    hasRecording: true,
  },
];

export default function EventsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-10">
      {/* Upcoming */}
      <div>
        <p className="font-mono text-[9px] uppercase tracking-[2px] text-[var(--text-dim)] mb-3">
          Upcoming
        </p>
        <div className="space-y-3">
          {UPCOMING.map((evt) => (
            <Card key={evt.title} hover>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                <div>
                  <h3 className="font-heading text-sm font-medium mb-1">
                    {evt.title}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-[var(--text-secondary)]">
                    <span>{evt.date}</span>
                    <span className="text-[var(--text-dim)]">·</span>
                    <span>{evt.time}</span>
                    <span className="text-[var(--text-dim)]">·</span>
                    <span>{evt.capacity}</span>
                  </div>
                </div>
                <Button variant="secondary" size="sm">
                  Register
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Past */}
      <div>
        <p className="font-mono text-[9px] uppercase tracking-[2px] text-[var(--text-dim)] mb-3">
          Past Events
        </p>
        <div className="space-y-3">
          {PAST.map((evt) => (
            <Card key={evt.title}>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-heading text-sm font-medium mb-1">
                    {evt.title}
                  </h3>
                  <span className="text-xs text-[var(--text-dim)]">{evt.date}</span>
                </div>
                {evt.hasRecording && (
                  <Badge variant="capacity">Recording Available</Badge>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
