import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
}

export function Card({
  children,
  className = "",
  hover = false,
  gradient = false,
}: CardProps) {
  return (
    <div
      className={`
        glass rounded-xl p-6
        ${hover ? "glass-hover transition-all duration-200 cursor-pointer" : ""}
        ${gradient ? "relative overflow-hidden" : ""}
        ${className}
      `}
    >
      {gradient && (
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{ background: "var(--gradient-accent)" }}
        />
      )}
      <div className={gradient ? "relative z-10" : ""}>{children}</div>
    </div>
  );
}
