"use client";

import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export default function NewFeedbackPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <Card>
        <h2 className="font-heading text-lg font-semibold mb-6">
          Submit Feedback
        </h2>

        <form className="space-y-5">
          {/* Type */}
          <div>
            <label className="block font-mono text-[10px] uppercase tracking-[2px] text-[var(--text-dim)] mb-2">
              Type
            </label>
            <div className="flex gap-2">
              {["Bug", "Feature", "Question"].map((type) => (
                <button
                  key={type}
                  type="button"
                  className="glass rounded-md px-4 py-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-hover)] transition-all"
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Title */}
          <Input label="Title" placeholder="Brief description of the issue or idea" />

          {/* Description */}
          <div>
            <label className="block font-mono text-[10px] uppercase tracking-[2px] text-[var(--text-dim)] mb-2">
              Description
            </label>
            <textarea
              rows={6}
              className="w-full px-4 py-3 rounded-lg bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-primary)] text-sm placeholder:text-[var(--text-dim)] focus:outline-none focus:border-[var(--border-hover)] focus:shadow-[0_0_0_3px_var(--glow-primary)] transition-all duration-200 resize-none"
              placeholder="Tell us more. Steps to reproduce for bugs, use case for features..."
            />
          </div>

          <div className="flex gap-3">
            <Button type="submit" variant="primary">
              Submit
            </Button>
            <Button variant="ghost" href="/feedback">
              Cancel
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
