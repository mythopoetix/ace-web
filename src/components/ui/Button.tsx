"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  href,
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-heading font-medium uppercase tracking-wider transition-all duration-200 rounded-lg";

  const variants = {
    primary: `
      bg-gradient-to-r from-[#8878ff] via-[#c8a0f0] to-[#60d8a8]
      text-white shadow-lg
      shadow-[0_0_20px_rgba(136,120,255,0.3)]
      hover:shadow-[0_0_30px_rgba(136,120,255,0.5)]
      hover:scale-[1.02] active:scale-[0.98]
      disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
    `,
    secondary: `
      glass glass-hover
      text-[var(--text-primary)]
    `,
    ghost: `
      bg-transparent border border-[var(--border)]
      text-[var(--text-secondary)]
      hover:border-[var(--border-hover)]
      hover:text-[var(--text-primary)]
      hover:bg-[var(--glow-primary)]
    `,
  };

  const sizes = {
    sm: "px-4 py-2 text-xs gap-1.5",
    md: "px-6 py-3 text-sm gap-2",
    lg: "px-8 py-4 text-base gap-2.5",
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}
