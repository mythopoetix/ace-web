import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "sold-out" | "authority" | "capacity" | "expansion" | "default";
  pulse?: boolean;
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  pulse = false,
  className = "",
}: BadgeProps) {
  const variants = {
    "sold-out": `
      bg-[rgba(224,112,128,0.12)] text-[var(--red)] border border-[rgba(224,112,128,0.3)]
      ${pulse ? "animate-[attention-pulse_1.5s_ease-in-out_infinite]" : ""}
    `,
    authority:
      "bg-[rgba(200,160,240,0.08)] text-[var(--authority)] border border-[rgba(200,160,240,0.2)]",
    capacity:
      "bg-[rgba(96,216,168,0.08)] text-[var(--capacity)] border border-[rgba(96,216,168,0.2)]",
    expansion:
      "bg-[rgba(224,128,160,0.08)] text-[var(--expansion)] border border-[rgba(224,128,160,0.2)]",
    default:
      "bg-[var(--bg-elevated)] text-[var(--text-secondary)] border border-[var(--border)]",
  };

  return (
    <span
      className={`
        inline-flex items-center gap-1.5 px-3 py-1 rounded-full
        font-mono text-[10px] uppercase tracking-[2px] font-medium
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}
