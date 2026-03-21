"use client";

import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Input({ label, className = "", ...props }: InputProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block font-mono text-[10px] uppercase tracking-[2px] text-[var(--text-dim)] mb-2">
          {label}
        </label>
      )}
      <input
        className={`
          w-full px-4 py-3 rounded-lg
          bg-[var(--bg-card)] border border-[var(--border)]
          text-[var(--text-primary)] font-sans text-sm
          placeholder:text-[var(--text-dim)]
          focus:outline-none focus:border-[var(--border-hover)]
          focus:shadow-[0_0_0_3px_var(--glow-primary)]
          transition-all duration-200
          ${className}
        `}
        {...props}
      />
    </div>
  );
}
