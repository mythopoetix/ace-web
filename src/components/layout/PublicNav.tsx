"use client";

import Link from "next/link";
import { useState } from "react";
import { CoherenceOrb } from "@/components/brand/CoherenceOrb";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Button } from "@/components/ui/Button";

const NAV_LINKS = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "Roadmap", href: "/roadmap" },
  { label: "Affiliates", href: "/affiliates" },
];

export function PublicNav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div
        className="glass"
        style={{
          background: "rgba(8,10,18,0.85)",
          borderTop: "none",
          borderLeft: "none",
          borderRight: "none",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <CoherenceOrb size="nav" animate={false} />
            <span className="font-heading text-sm font-medium uppercase tracking-[2px] text-[var(--text-primary)] group-hover:text-[var(--authority)] transition-colors">
              ACE
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-mono text-[11px] uppercase tracking-[1.5px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Button variant="ghost" size="sm" href="/login">
              Log In
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`w-5 h-px bg-[var(--text-secondary)] transition-all duration-200 ${mobileOpen ? "rotate-45 translate-y-1" : ""}`}
            />
            <span
              className={`w-5 h-px bg-[var(--text-secondary)] transition-all duration-200 ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`w-5 h-px bg-[var(--text-secondary)] transition-all duration-200 ${mobileOpen ? "-rotate-45 -translate-y-1" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden glass animate-fade-slide-up"
          style={{
            background: "rgba(8,10,18,0.95)",
            borderTop: "none",
          }}
        >
          <div className="px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-mono text-xs uppercase tracking-[1.5px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors py-2"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-3 pt-2 border-t border-[var(--border)]">
              <ThemeToggle />
              <Button variant="ghost" size="sm" href="/login">
                Log In
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
