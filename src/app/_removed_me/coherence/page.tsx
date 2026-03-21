import { Card } from "@/components/ui/Card";
import { CoherenceOrb } from "@/components/brand/CoherenceOrb";

const SIGNALS = [
  { name: "Truth", leg: "Authority", status: "green", color: "var(--authority)" },
  { name: "Choice", leg: "Authority", status: "green", color: "var(--authority)" },
  { name: "Expression", leg: "Authority", status: "yellow", color: "var(--authority)" },
  { name: "Regulation", leg: "Capacity", status: "green", color: "var(--capacity)" },
  { name: "Depth", leg: "Capacity", status: "green", color: "var(--capacity)" },
  { name: "Resilience", leg: "Capacity", status: "yellow", color: "var(--capacity)" },
  { name: "Rhythm", leg: "Expansion", status: "green", color: "var(--expansion)" },
  { name: "Containers", leg: "Expansion", status: "green", color: "var(--expansion)" },
  { name: "Realization", leg: "Expansion", status: "green", color: "var(--expansion)" },
];

const STATUS_COLORS: Record<string, string> = {
  green: "var(--capacity)",
  yellow: "#f0e070",
  red: "var(--red)",
};

export default function CoherencePage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Orb + Score */}
      <Card gradient>
        <div className="flex items-center gap-8">
          <CoherenceOrb size="dashboard" />
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[2px] text-[var(--text-dim)] mb-1">
              Overall Coherence
            </p>
            <p className="font-heading text-3xl font-semibold text-[var(--capacity)]">
              Stable
            </p>
            <p className="text-sm text-[var(--text-secondary)] mt-1">
              7/9 signals green. 2 signals yellow.
            </p>
          </div>
        </div>
      </Card>

      {/* Signal Grid */}
      <div>
        <p className="font-mono text-[9px] uppercase tracking-[2px] text-[var(--text-dim)] mb-3">
          9 Signals
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {SIGNALS.map((s) => (
            <Card key={s.name} hover>
              <div className="flex items-center gap-3">
                <div
                  className="w-2.5 h-2.5 rounded-full"
                  style={{
                    backgroundColor: STATUS_COLORS[s.status],
                    boxShadow: `0 0 6px ${STATUS_COLORS[s.status]}`,
                  }}
                />
                <div>
                  <p className="text-sm font-medium">{s.name}</p>
                  <p className="font-mono text-[9px] uppercase tracking-[1.5px] text-[var(--text-dim)]">
                    {s.leg}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Sync notice */}
      <Card>
        <p className="text-sm text-[var(--text-secondary)]">
          Coherence data syncs from your ACE vault. Run{" "}
          <code className="font-mono text-xs text-[var(--authority)]">/sync-web</code>{" "}
          in your vault to push the latest snapshot.
        </p>
      </Card>
    </div>
  );
}
