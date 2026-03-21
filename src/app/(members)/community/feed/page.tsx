import { Card } from "@/components/ui/Card";

const MESSAGES = [
  {
    author: "Nikhil",
    text: "New culturescan dropped. The sovereignty conversation on r/awakened is heating up — people are starting to name the architecture gap. Full signal analysis in the Telegram group.",
    time: "2 hours ago",
  },
  {
    author: "Lane",
    text: "Just pushed the updated signal engine. 7 subreddits + 6 search queries running in parallel now. The quality of the cultural intelligence is compounding.",
    time: "Yesterday",
  },
  {
    author: "Nikhil",
    text: "Reminder: Weekly group call tomorrow at 11am CST. We're covering MCP integration patterns — bring your questions about connecting new tools to your vault.",
    time: "2 days ago",
  },
];

export default function CommunityFeedPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <p className="text-[var(--text-secondary)]">
        Live feed from the Asraya Sanctuary Telegram group. Read-only — join the group to participate.
      </p>

      <div className="space-y-3">
        {MESSAGES.map((msg, i) => (
          <Card key={i}>
            <div className="flex items-start gap-3">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center font-heading text-xs font-semibold shrink-0"
                style={{
                  backgroundColor: "rgba(140,120,255,0.1)",
                  color: "var(--authority)",
                }}
              >
                {msg.author[0]}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-heading text-sm font-medium">
                    {msg.author}
                  </span>
                  <span className="font-mono text-[9px] text-[var(--text-dim)]">
                    {msg.time}
                  </span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {msg.text}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
