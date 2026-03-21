"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CoherenceOrb } from "@/components/brand/CoherenceOrb";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const NAV_ITEMS = [
  { label: "Dashboard", href: "/dashboard", icon: "◉" },
  { label: "Videos", href: "/videos", icon: "▶" },
  { label: "Booking", href: "/booking", icon: "◫" },
  { label: "Events", href: "/events", icon: "◈" },
  { label: "Knowledge", href: "/knowledge", icon: "◇" },
];

const COMMUNITY_ITEMS = [
  { label: "Feed", href: "/community/feed", icon: "⊕" },
  { label: "Discussions", href: "/community/discussions", icon: "⊞" },
  { label: "Changelog", href: "/community/changelog", icon: "⊡" },
];

const SYSTEM_ITEMS = [
  { label: "Roadmap", href: "/product-roadmap", icon: "→" },
  { label: "Feedback", href: "/feedback", icon: "◌" },
];

function NavSection({
  label,
  items,
  pathname,
}: {
  label: string;
  items: { label: string; href: string; icon: string }[];
  pathname: string;
}) {
  return (
    <div className="mb-6">
      <p className="font-mono text-[9px] uppercase tracking-[2px] text-[var(--text-dim)] px-3 mb-2">
        {label}
      </p>
      <ul className="space-y-0.5">
        {items.map((item) => {
          const active = pathname === item.href || pathname.startsWith(item.href + "/");
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-all duration-150 ${
                  active
                    ? "bg-[var(--glow-primary)] text-[var(--text-primary)] border border-[var(--glass-border)]"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[rgba(140,120,255,0.05)]"
                }`}
              >
                <span className="text-xs opacity-60">{item.icon}</span>
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function MembersSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-56 shrink-0 h-screen sticky top-0 flex flex-col border-r border-[var(--glass-border)] bg-[rgba(10,12,22,0.88)] backdrop-blur-[12px]">
      {/* Logo */}
      <div className="px-4 h-14 flex items-center gap-2.5 border-b border-[var(--glass-border)]">
        <CoherenceOrb size="nav" animate={false} />
        <span className="font-heading text-xs font-medium uppercase tracking-[2px]">
          ACE
        </span>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto py-4 px-2">
        <NavSection label="Core" items={NAV_ITEMS} pathname={pathname} />
        <NavSection label="Community" items={COMMUNITY_ITEMS} pathname={pathname} />
        <NavSection label="System" items={SYSTEM_ITEMS} pathname={pathname} />
      </nav>

      {/* Footer */}
      <div className="px-4 py-3 border-t border-[var(--glass-border)] flex items-center justify-between">
        <ThemeToggle />
        <Link
          href="/"
          className="font-mono text-[9px] uppercase tracking-[1.5px] text-[var(--text-dim)] hover:text-[var(--text-secondary)] transition-colors"
        >
          Home
        </Link>
      </div>
    </aside>
  );
}
