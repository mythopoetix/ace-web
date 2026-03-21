"use client";

import { useState } from "react";
import { Card } from "@/components/ui/Card";
import { CoherenceOrb } from "@/components/brand/CoherenceOrb";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { VideoEmbed } from "@/components/landing/VideoEmbed";

// TODO: Replace with real data from API/session
const MOCK_ONBOARDING = {
  buildComplete: false,
  watchedIntro: false,
  blueprintDone: false,
  prepDone: false,
  sessionBooked: false,
};

/* ═══════════════════════════════════════════
   ONBOARDING CHECKLIST (Pre-Build Members)
   ═══════════════════════════════════════════ */

function OnboardingChecklist() {
  const [progress, setProgress] = useState(MOCK_ONBOARDING);
  const [showVideo, setShowVideo] = useState(false);

  const steps = [
    {
      key: "watchedIntro" as const,
      number: 1,
      title: "Watch: Getting Started",
      desc: "5-minute overview of what ACE is and what happens next.",
      color: "var(--authority)",
      done: progress.watchedIntro,
      locked: false,
    },
    {
      key: "blueprintDone" as const,
      number: 2,
      title: "Complete Your Blueprint",
      desc: "Identity, workflow, and context questionnaire. This shapes your custom build.",
      color: "var(--authority)",
      done: progress.blueprintDone,
      locked: !progress.watchedIntro,
      href: "/onboarding/blueprint",
    },
    {
      key: "prepDone" as const,
      number: 3,
      title: "Prep Your Machine",
      desc: "Install Obsidian, Git, and Claude. Takes 10 minutes.",
      color: "var(--expansion)",
      done: progress.prepDone,
      locked: !progress.blueprintDone,
      href: "/onboarding/prep",
    },
    {
      key: "sessionBooked" as const,
      number: 4,
      title: "Book Your Build Session",
      desc: "2-hour 1:1 with Nikhil to configure your vault.",
      color: "var(--capacity)",
      done: progress.sessionBooked,
      locked: !progress.prepDone,
      href: "/booking",
    },
    {
      key: "buildComplete" as const,
      number: 5,
      title: "Build Session Complete",
      desc: "After your session, Nikhil activates your full member access.",
      color: "var(--capacity)",
      done: false,
      locked: true,
    },
  ];

  const completedCount = steps.filter((s) => s.done).length;

  async function markWatched() {
    await fetch("/api/onboarding/progress", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ step: "watchedIntro" }),
    });
    setProgress((p) => ({ ...p, watchedIntro: true }));
    setShowVideo(false);
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* Welcome header */}
      <div className="text-center mb-10">
        <CoherenceOrb size="dashboard" className="mx-auto mb-4" />
        <h1 className="font-heading text-2xl font-semibold mb-2">
          Welcome to ACE.
        </h1>
        <p className="text-[var(--text-secondary)]">
          Your coherence engine is being built. Complete these steps to get started.
        </p>
      </div>

      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="font-mono text-[10px] uppercase tracking-[2px] text-[var(--text-dim)]">
            Progress
          </span>
          <span className="font-mono text-[10px] text-[var(--text-dim)]">
            {completedCount}/5
          </span>
        </div>
        <div className="h-1 bg-[var(--bg-elevated)] rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{
              width: `${(completedCount / 5) * 100}%`,
              background: "var(--gradient-accent)",
            }}
          />
        </div>
      </div>

      {/* Steps */}
      <div className="space-y-3">
        {steps.map((step) => (
          <Card
            key={step.key}
            className={`transition-all ${step.locked ? "opacity-40" : ""} ${step.done ? "opacity-70" : ""}`}
          >
            <div className="flex items-start gap-4">
              {/* Status indicator */}
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center font-heading text-sm font-semibold shrink-0 ${
                  step.done
                    ? "bg-[rgba(96,216,168,0.12)] text-[var(--capacity)]"
                    : step.locked
                      ? "bg-[var(--bg-elevated)] text-[var(--text-dim)]"
                      : "bg-[rgba(140,120,255,0.1)] text-[var(--authority)]"
                }`}
              >
                {step.done ? "✓" : step.locked ? "🔒" : step.number}
              </div>

              <div className="flex-1">
                <h3 className="font-heading text-sm font-medium mb-0.5">
                  {step.title}
                </h3>
                <p className="text-xs text-[var(--text-secondary)]">
                  {step.desc}
                </p>

                {/* Step 1 special: inline video */}
                {step.key === "watchedIntro" && !step.done && !step.locked && (
                  <div className="mt-3">
                    {showVideo ? (
                      <div className="space-y-3">
                        <VideoEmbed
                          url="https://player.vimeo.com/video/placeholder"
                          title="Getting Started with ACE"
                        />
                        <Button variant="primary" size="sm" onClick={markWatched}>
                          I&apos;ve Watched This
                        </Button>
                      </div>
                    ) : (
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => setShowVideo(true)}
                      >
                        ▶ Watch Now
                      </Button>
                    )}
                  </div>
                )}

                {/* Steps 2-4: link to page */}
                {step.href && !step.done && !step.locked && (
                  <div className="mt-3">
                    <Button variant="secondary" size="sm" href={step.href}>
                      {step.key === "sessionBooked" ? "Book Session" : "Start →"}
                    </Button>
                  </div>
                )}

                {/* Done badge */}
                {step.done && (
                  <Badge variant="capacity" className="mt-2">
                    Complete
                  </Badge>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   MEMBER HUB (Post-Build Active Members)
   ═══════════════════════════════════════════ */

function MemberHub() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Welcome back */}
      <div className="flex items-center gap-4">
        <CoherenceOrb size="dashboard" />
        <div>
          <h1 className="font-heading text-xl font-semibold">Welcome back.</h1>
          <p className="text-sm text-[var(--text-secondary)]">
            Your ACE system is active. Here&apos;s what&apos;s happening.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* What's New */}
        <Card gradient>
          <h2 className="font-mono text-[9px] uppercase tracking-[2px] text-[var(--text-dim)] mb-3">
            What&apos;s New
          </h2>
          <div className="space-y-2.5">
            {[
              { skill: "/build-vault", msg: "New skill for client onboarding", date: "Today" },
              { skill: "/sync-core", msg: "AI-assisted conflict resolution", date: "Yesterday" },
              { skill: "/signal", msg: "Weekly content generation engine", date: "3 days ago" },
            ].map((item) => (
              <div key={item.skill} className="flex items-start gap-2">
                <code className="font-mono text-[10px] text-[var(--authority)] shrink-0">
                  {item.skill}
                </code>
                <span className="text-xs text-[var(--text-secondary)] flex-1">
                  {item.msg}
                </span>
                <span className="font-mono text-[9px] text-[var(--text-dim)] shrink-0">
                  {item.date}
                </span>
              </div>
            ))}
          </div>
          <Button variant="ghost" size="sm" href="/community/changelog" className="mt-3">
            Full Changelog →
          </Button>
        </Card>

        {/* Upcoming */}
        <Card>
          <h2 className="font-mono text-[9px] uppercase tracking-[2px] text-[var(--text-dim)] mb-3">
            Upcoming
          </h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Weekly Group Call</p>
                <p className="font-mono text-[10px] text-[var(--text-dim)]">
                  Mar 25 · 11:00 AM CST
                </p>
              </div>
              <Badge variant="capacity">Registered</Badge>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">MCP Deep Dive Q&A</p>
                <p className="font-mono text-[10px] text-[var(--text-dim)]">
                  Mar 28 · 2:00 PM CST
                </p>
              </div>
              <Button variant="ghost" size="sm">
                Register
              </Button>
            </div>
          </div>
          <Button variant="ghost" size="sm" href="/events" className="mt-3">
            All Events →
          </Button>
        </Card>

        {/* Continue Watching */}
        <Card>
          <h2 className="font-mono text-[9px] uppercase tracking-[2px] text-[var(--text-dim)] mb-3">
            Continue Watching
          </h2>
          <div className="flex items-center gap-3">
            <div className="w-20 h-12 rounded bg-[var(--bg-elevated)] flex items-center justify-center shrink-0">
              <span className="text-[var(--text-dim)]">▶</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">ACE Vault Setup Walkthrough</p>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex-1 h-0.5 bg-[var(--bg-elevated)] rounded-full overflow-hidden">
                  <div className="w-[45%] h-full bg-[var(--authority)] rounded-full" />
                </div>
                <span className="font-mono text-[9px] text-[var(--text-dim)]">45%</span>
              </div>
            </div>
          </div>
          <Button variant="ghost" size="sm" href="/videos" className="mt-3">
            All Videos →
          </Button>
        </Card>

        {/* Community Pulse */}
        <Card>
          <h2 className="font-mono text-[9px] uppercase tracking-[2px] text-[var(--text-dim)] mb-3">
            Community
          </h2>
          <div className="space-y-2.5">
            {[
              { title: "How are you using /pulse?", replies: 5, author: "Marc" },
              { title: "Fathom integration tips", replies: 3, author: "Joe" },
            ].map((d) => (
              <div key={d.title} className="flex items-center justify-between">
                <div className="min-w-0">
                  <p className="text-sm truncate">{d.title}</p>
                  <span className="font-mono text-[9px] text-[var(--text-dim)]">
                    {d.author} · {d.replies} replies
                  </span>
                </div>
              </div>
            ))}
          </div>
          <Button variant="ghost" size="sm" href="/community/discussions" className="mt-3">
            All Discussions →
          </Button>
        </Card>
      </div>

      {/* Quick links */}
      <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
        {[
          { label: "Videos", href: "/videos", icon: "▶" },
          { label: "Book a Call", href: "/booking", icon: "◫" },
          { label: "Knowledge", href: "/knowledge", icon: "◇" },
          { label: "Feedback", href: "/feedback", icon: "◌" },
          { label: "Roadmap", href: "/product-roadmap", icon: "→" },
        ].map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="glass rounded-lg p-3 text-center hover:border-[var(--border-hover)] transition-all"
          >
            <span className="block text-lg mb-1 opacity-50">{link.icon}</span>
            <span className="font-mono text-[9px] uppercase tracking-[1.5px] text-[var(--text-secondary)]">
              {link.label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   DASHBOARD — JOURNEY-AWARE ROUTING
   ═══════════════════════════════════════════ */

export default function DashboardPage() {
  // TODO: Fetch real onboarding state from API/session
  const buildComplete = MOCK_ONBOARDING.buildComplete;

  return buildComplete ? <MemberHub /> : <OnboardingChecklist />;
}
