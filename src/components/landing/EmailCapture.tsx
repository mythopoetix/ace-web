"use client";

import { useState } from "react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export function EmailCapture() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/fluentcrm/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "landing" }),
      });

      if (res.ok) {
        setStatus("success");
        setMessage("You're on the list. Watch your inbox.");
        setEmail("");
      } else {
        const data = await res.json();
        setStatus("error");
        setMessage(data.error || "Something went wrong. Try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Connection error. Try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="animate-fade-slide-up text-center">
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[rgba(96,216,168,0.08)] border border-[rgba(96,216,168,0.2)]">
          <span
            className="w-2 h-2 rounded-full animate-breathe"
            style={{
              backgroundColor: "var(--capacity)",
              boxShadow: "0 0 6px var(--capacity)",
            }}
          />
          <span className="text-[var(--capacity)] text-sm font-medium">
            {message}
          </span>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div className="flex gap-2">
        <Input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Button
          type="submit"
          variant="primary"
          size="md"
          disabled={status === "loading"}
        >
          {status === "loading" ? (
            <span className="animate-breathe">...</span>
          ) : (
            "Join"
          )}
        </Button>
      </div>
      {status === "error" && (
        <p className="mt-2 text-xs text-[var(--red)]">{message}</p>
      )}
      <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-[1.5px] text-[var(--text-dim)]">
        Join the Batch 2 waitlist. No spam.
      </p>
    </form>
  );
}
