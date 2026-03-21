"use client";

import { useState } from "react";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import Link from "next/link";
import { KB_CATEGORIES, KB_ARTICLES, searchArticles } from "@/lib/kb-articles";

export default function KnowledgePage() {
  const [query, setQuery] = useState("");
  const results = query.length > 1 ? searchArticles(query) : [];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Search */}
      <Input
        placeholder="Search the knowledge base..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {/* Search results */}
      {query.length > 1 && (
        <div>
          <p className="font-mono text-[9px] uppercase tracking-[2px] text-[var(--text-dim)] mb-3">
            {results.length} result{results.length !== 1 ? "s" : ""} for &ldquo;{query}&rdquo;
          </p>
          <div className="space-y-2">
            {results.map((article) => (
              <Link key={article.slug} href={`/knowledge/${article.slug}`}>
                <Card hover className="cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium">{article.title}</h3>
                      <p className="text-xs text-[var(--text-secondary)] mt-0.5">
                        {article.excerpt}
                      </p>
                    </div>
                    <span className="font-mono text-[9px] text-[var(--text-dim)] uppercase tracking-[1.5px] shrink-0 ml-4">
                      {article.category}
                    </span>
                  </div>
                </Card>
              </Link>
            ))}
            {results.length === 0 && (
              <p className="text-sm text-[var(--text-dim)]">No articles found.</p>
            )}
          </div>
        </div>
      )}

      {/* Categories */}
      {query.length <= 1 && (
        <>
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[2px] text-[var(--text-dim)] mb-3">
              Categories
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {KB_CATEGORIES.map((cat) => (
                <button
                  key={cat.slug}
                  onClick={() => {
                    const el = document.getElementById(`cat-${cat.slug}`);
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-left"
                >
                  <Card hover className="cursor-pointer">
                    <div className="flex items-center gap-2 mb-1">
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: cat.color, boxShadow: `0 0 4px ${cat.color}` }}
                      />
                      <h3 className="font-heading text-sm font-medium">{cat.name}</h3>
                    </div>
                    <p className="font-mono text-[10px] text-[var(--text-dim)]">
                      {cat.count} articles
                    </p>
                  </Card>
                </button>
              ))}
            </div>
          </div>

          {/* All articles by category */}
          {KB_CATEGORIES.map((cat) => {
            const articles = KB_ARTICLES.filter((a) => a.category === cat.name);
            return (
              <div key={cat.slug} id={`cat-${cat.slug}`}>
                <p className="font-mono text-[9px] uppercase tracking-[2px] text-[var(--text-dim)] mb-3">
                  {cat.name}
                </p>
                <div className="space-y-2">
                  {articles.map((article) => (
                    <Link key={article.slug} href={`/knowledge/${article.slug}`}>
                      <Card hover className="cursor-pointer">
                        <h3 className="text-sm font-medium mb-0.5">{article.title}</h3>
                        <p className="text-xs text-[var(--text-secondary)]">
                          {article.excerpt}
                        </p>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}
