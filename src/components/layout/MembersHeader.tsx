"use client";

import { usePathname } from "next/navigation";

const TITLES: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/videos": "Video Library",
  "/booking": "Book a Call",
  "/events": "Events",
  "/knowledge": "Knowledge Base",
  "/product-roadmap": "Roadmap",
  "/feedback": "Feedback",
  "/community/feed": "Community Feed",
  "/community/discussions": "Discussions",
  "/community/changelog": "Changelog",
  "/onboarding": "Onboarding",
};

export function MembersHeader() {
  const pathname = usePathname();
  const title =
    Object.entries(TITLES).find(([path]) => pathname.startsWith(path))?.[1] ??
    "ACE";

  return (
    <header className="h-14 shrink-0 flex items-center px-6 border-b border-[var(--glass-border)] bg-[rgba(8,10,18,0.6)] backdrop-blur-[12px]">
      <h1 className="font-heading text-sm font-medium uppercase tracking-[1.5px]">
        {title}
      </h1>
    </header>
  );
}
