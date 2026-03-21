"use client";

import { useState } from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const CHECKLIST = [
  {
    id: "obsidian",
    title: "Install Obsidian",
    desc: "Free download. This is where your vault lives.",
    link: "https://obsidian.md/download",
    linkLabel: "Download Obsidian",
  },
  {
    id: "git",
    title: "Install Git",
    desc: "Required for vault syncing and skill updates.",
    link: "https://git-scm.com/downloads",
    linkLabel: "Download Git",
  },
  {
    id: "github",
    title: "Create a GitHub account",
    desc: "Your vault is backed up and synced via a private GitHub repo.",
    link: "https://github.com/signup",
    linkLabel: "Sign up for GitHub",
  },
  {
    id: "claude",
    title: "Get Claude Max subscription",
    desc: "ACE runs on Claude. You need a Max subscription for the CLI.",
    link: "https://claude.ai",
    linkLabel: "Get Claude",
  },
];

export default function PrepPage() {
  const [checked, setChecked] = useState<Set<string>>(new Set());
  const [confirmed, setConfirmed] = useState(false);

  function toggle(id: string) {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  const allChecked = checked.size === CHECKLIST.length;

  async function handleConfirm() {
    await fetch("/api/onboarding/progress", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ step: "prepDone" }),
    });
    setConfirmed(true);
  }

  if (confirmed) {
    return (
      <div className="max-w-2xl mx-auto text-center py-16">
        <div
          className="w-3 h-3 rounded-full mx-auto mb-4 animate-breathe"
          style={{ backgroundColor: "var(--capacity)", boxShadow: "0 0 8px var(--capacity)" }}
        />
        <h2 className="font-heading text-2xl font-semibold mb-3">
          You&apos;re prepped.
        </h2>
        <p className="text-[var(--text-secondary)] mb-8">
          Next step: book your build session.
        </p>
        <Button href="/dashboard">Back to Dashboard</Button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <p className="text-[var(--text-secondary)] mb-8">
        Before your build session, make sure these are installed on your machine.
        Your vault needs these to work.
      </p>

      <div className="space-y-3 mb-8">
        {CHECKLIST.map((item) => (
          <Card key={item.id} hover className="cursor-pointer" >
            <div className="flex items-start gap-4" onClick={() => toggle(item.id)}>
              <button
                className={`w-5 h-5 rounded border shrink-0 mt-0.5 flex items-center justify-center transition-all ${
                  checked.has(item.id)
                    ? "bg-[var(--capacity)] border-[var(--capacity)]"
                    : "border-[var(--border)] hover:border-[var(--border-hover)]"
                }`}
              >
                {checked.has(item.id) && (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </button>
              <div className="flex-1">
                <h3 className="font-heading text-sm font-medium mb-0.5">
                  {item.title}
                </h3>
                <p className="text-xs text-[var(--text-secondary)] mb-1">
                  {item.desc}
                </p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[var(--authority)] hover:underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  {item.linkLabel} →
                </a>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Button
        variant="primary"
        onClick={handleConfirm}
        disabled={!allChecked}
        className="w-full"
      >
        {allChecked ? "I'm Ready" : `${checked.size}/${CHECKLIST.length} — Complete all to continue`}
      </Button>
    </div>
  );
}
