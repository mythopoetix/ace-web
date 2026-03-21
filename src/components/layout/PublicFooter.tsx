import Link from "next/link";
import { CoherenceOrb } from "@/components/brand/CoherenceOrb";

export function PublicFooter() {
  return (
    <footer className="border-t border-[var(--border)] mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <CoherenceOrb size="nav" animate={false} />
              <span className="font-heading text-sm font-medium uppercase tracking-[2px]">
                ACE
              </span>
            </div>
            <p className="text-[var(--text-dim)] text-sm leading-relaxed">
              Actualize Coherence Engine. The operating system for sovereign
              operators.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[2px] text-[var(--text-dim)] mb-4">
              Product
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/how-it-works"
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/roadmap"
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                >
                  Roadmap
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[2px] text-[var(--text-dim)] mb-4">
              Resources
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/paradigm-shift"
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                >
                  Paradigm Shift
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                >
                  Members Area
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[2px] text-[var(--text-dim)] mb-4">
              Connect
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://t.me/+AsrayaSanctuary"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                >
                  Telegram Community
                </a>
              </li>
              <li>
                <a
                  href="mailto:nikhil@asraya.io"
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                >
                  nikhil@asraya.io
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-[var(--border)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[10px] uppercase tracking-[1.5px] text-[var(--text-dim)]">
            &copy; {new Date().getFullYear()} Actualize. Authority + Capacity +
            Expansion.
          </p>
          <div className="flex items-center gap-1.5">
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{
                backgroundColor: "var(--authority)",
                boxShadow: "0 0 4px var(--authority)",
              }}
            />
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{
                backgroundColor: "var(--capacity)",
                boxShadow: "0 0 4px var(--capacity)",
              }}
            />
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{
                backgroundColor: "var(--expansion)",
                boxShadow: "0 0 4px var(--expansion)",
              }}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
