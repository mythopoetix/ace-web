"use client";

import { useState } from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

const STEPS = [
  {
    title: "Authority",
    subtitle: "Truth → Choice → Expression",
    color: "var(--authority)",
    fields: [
      { key: "fullName", label: "Full Name", type: "input", placeholder: "Your name" },
      { key: "email", label: "Email", type: "input", placeholder: "your@email.com" },
      { key: "timezone", label: "Timezone", type: "input", placeholder: "e.g., CST, EST, GMT+1" },
      { key: "throughline", label: "What is your deepest creative ambition — the throughline of your life?", type: "textarea", placeholder: "The thing that runs through everything you do. Not a goal — an orientation..." },
      { key: "values", label: "What are your core values and non-negotiables?", type: "textarea", placeholder: "What do you stand for? What will you not compromise on, even under pressure?" },
      { key: "edges", label: "What are your edges and fears?", type: "textarea", placeholder: "Where do you get stuck? What patterns trip you up? What are you avoiding?" },
    ],
  },
  {
    title: "Capacity",
    subtitle: "Regulation → Depth → Resilience",
    color: "var(--capacity)",
    fields: [
      { key: "season", label: "What season of life are you in right now?", type: "textarea", placeholder: "What's your current chapter? What transitions are you navigating?" },
      { key: "regulation", label: "How do you regulate when you're activated or overwhelmed?", type: "textarea", placeholder: "Your nervous system toolkit: what grounds you, what restores you, what you do when you're running hot..." },
      { key: "burnout", label: "What are your burnout signals?", type: "textarea", placeholder: "How do you know when you've exceeded your capacity? What happens first?" },
      { key: "joy", label: "What brings you joy and aliveness?", type: "textarea", placeholder: "Not productivity — aliveness. What makes you feel most like yourself?" },
    ],
  },
  {
    title: "Expansion",
    subtitle: "Rhythm → Containers → Realization",
    color: "var(--expansion)",
    fields: [
      { key: "projects", label: "What are your current projects and ventures?", type: "textarea", placeholder: "List each project/domain: what it is, where it's at, what role you play..." },
      { key: "people", label: "Who are the key people in your life and work?", type: "textarea", placeholder: "Partners, collaborators, clients, family — and the nature of each relationship..." },
      { key: "tools", label: "What tools and systems do you currently use?", type: "textarea", placeholder: "Gmail, Calendar, Obsidian, Notion, Slack, Fathom, Airtable, CRM..." },
      { key: "rhythm", label: "Describe your typical week and daily rhythm", type: "textarea", placeholder: "When do you do deep work? When do you rest? What's your energy pattern?" },
      { key: "priorities", label: "What are your top 3 priorities for the next 90 days?", type: "textarea", placeholder: "These become your ACE outcomes. Be specific and honest." },
    ],
  },
];

export default function BlueprintPage() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"editing" | "submitting" | "done">("editing");

  const current = STEPS[step];

  function updateField(key: string, value: string) {
    setData((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit() {
    setStatus("submitting");
    try {
      await fetch("/api/onboarding/blueprint", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setStatus("done");
    } catch {
      setStatus("editing");
    }
  }

  if (status === "done") {
    return (
      <div className="max-w-2xl mx-auto text-center py-16">
        <div
          className="w-3 h-3 rounded-full mx-auto mb-4 animate-breathe"
          style={{ backgroundColor: "var(--capacity)", boxShadow: "0 0 8px var(--capacity)" }}
        />
        <h2 className="font-heading text-2xl font-semibold mb-3">
          Blueprint submitted.
        </h2>
        <p className="text-[var(--text-secondary)] mb-8">
          Nikhil will review this before your build session. Your custom skills
          will be built around these answers.
        </p>
        <Button href="/dashboard">Back to Dashboard</Button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress */}
      <div className="flex items-center gap-2 mb-8">
        {STEPS.map((s, i) => (
          <div key={s.title} className="flex items-center gap-2">
            <button
              onClick={() => i <= step && setStep(i)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-md font-mono text-[10px] uppercase tracking-[1.5px] transition-all ${
                i === step
                  ? "bg-[var(--glow-primary)] text-[var(--text-primary)] border border-[var(--glass-border)]"
                  : i < step
                    ? "text-[var(--capacity)] cursor-pointer"
                    : "text-[var(--text-dim)]"
              }`}
            >
              {i < step ? "✓" : i + 1}. {s.title}
            </button>
            {i < STEPS.length - 1 && (
              <span className="text-[var(--text-dim)]">→</span>
            )}
          </div>
        ))}
      </div>

      {/* Form */}
      <Card gradient>
        <div className="mb-6">
          <h2 className="font-heading text-xl font-semibold" style={{ color: current.color }}>
            {current.title}
          </h2>
          <p className="font-mono text-[10px] uppercase tracking-[2px] text-[var(--text-dim)]">
            {current.subtitle}
          </p>
        </div>

        <div className="space-y-5">
          {current.fields.map((field) =>
            field.type === "input" ? (
              <Input
                key={field.key}
                label={field.label}
                placeholder={field.placeholder}
                value={data[field.key] ?? ""}
                onChange={(e) => updateField(field.key, e.target.value)}
              />
            ) : (
              <div key={field.key}>
                <label className="block font-mono text-[10px] uppercase tracking-[2px] text-[var(--text-dim)] mb-2">
                  {field.label}
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-primary)] text-sm placeholder:text-[var(--text-dim)] focus:outline-none focus:border-[var(--border-hover)] focus:shadow-[0_0_0_3px_var(--glow-primary)] transition-all duration-200 resize-none"
                  placeholder={field.placeholder}
                  value={data[field.key] ?? ""}
                  onChange={(e) => updateField(field.key, e.target.value)}
                />
              </div>
            )
          )}
        </div>

        <div className="flex justify-between mt-8">
          {step > 0 ? (
            <Button variant="ghost" onClick={() => setStep(step - 1)}>
              ← Back
            </Button>
          ) : (
            <div />
          )}

          {step < STEPS.length - 1 ? (
            <Button variant="primary" onClick={() => setStep(step + 1)}>
              Next →
            </Button>
          ) : (
            <Button
              variant="primary"
              onClick={handleSubmit}
              disabled={status === "submitting"}
            >
              {status === "submitting" ? "Submitting..." : "Submit Blueprint"}
            </Button>
          )}
        </div>
      </Card>

      {/* Supporting Files — Google Drive */}
      {step === STEPS.length - 1 && (
        <Card className="mt-6" gradient>
          <h3 className="font-heading text-sm font-medium mb-2">
            Your Supporting Files Folder
          </h3>
          <p className="text-xs text-[var(--text-secondary)] mb-4">
            A Google Drive folder was created for you when you joined. Drop any
            supporting documents there — PDFs, brand guides, business plans,
            manuscripts. These get read during your vault build.
          </p>

          {/* TODO: Replace with actual Drive folder URL from user record */}
          <div className="glass rounded-lg p-4 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                style={{
                  backgroundColor: "rgba(96,216,168,0.1)",
                  color: "var(--capacity)",
                }}
              >
                📁
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium truncate">
                  ACE / {data.fullName || "Your Name"}
                </p>
                <p className="font-mono text-[9px] text-[var(--text-dim)]">
                  4 subfolders: Blueprint Docs, Brand Assets, Business Plans, Other
                </p>
              </div>
            </div>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[var(--authority)] hover:underline shrink-0"
            >
              Open in Drive →
            </a>
          </div>
        </Card>
      )}
    </div>
  );
}
