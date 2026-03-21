import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const CATEGORIES = ["All", "Getting Started", "Masterclass", "Deep Dive", "Live Session"];

const VIDEOS = [
  {
    title: "The Paradigm Shift",
    category: "Masterclass",
    duration: "62 min",
    thumbnail: null,
    progress: 100,
  },
  {
    title: "ACE Vault Setup Walkthrough",
    category: "Getting Started",
    duration: "28 min",
    thumbnail: null,
    progress: 45,
  },
  {
    title: "The Coherence Triad Deep Dive",
    category: "Deep Dive",
    duration: "41 min",
    thumbnail: null,
    progress: 0,
  },
  {
    title: "Building Your Identity Core",
    category: "Getting Started",
    duration: "35 min",
    thumbnail: null,
    progress: 0,
  },
  {
    title: "MCP Integrations: Gmail, Calendar, Fathom",
    category: "Deep Dive",
    duration: "48 min",
    thumbnail: null,
    progress: 0,
  },
  {
    title: "Live Build Session — Week 1",
    category: "Live Session",
    duration: "92 min",
    thumbnail: null,
    progress: 0,
  },
];

export default function VideosPage() {
  return (
    <div className="max-w-5xl mx-auto">
      {/* Categories */}
      <div className="flex flex-wrap gap-2 mb-8">
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

      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {VIDEOS.map((video) => (
          <Card key={video.title} hover className="cursor-pointer">
            {/* Thumbnail placeholder */}
            <div className="aspect-video rounded-lg bg-[var(--bg-elevated)] mb-3 flex items-center justify-center">
              <span className="text-2xl text-[var(--text-dim)]">▶</span>
            </div>

            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="font-heading text-sm font-medium leading-tight">
                {video.title}
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <Badge variant="default">{video.category}</Badge>
              <span className="font-mono text-[9px] text-[var(--text-dim)]">
                {video.duration}
              </span>
            </div>

            {/* Progress bar */}
            {video.progress > 0 && (
              <div className="mt-3 h-0.5 bg-[var(--bg-elevated)] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${video.progress}%`,
                    backgroundColor:
                      video.progress === 100
                        ? "var(--capacity)"
                        : "var(--authority)",
                  }}
                />
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}
