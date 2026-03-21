import { notFound } from "next/navigation";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { KB_ARTICLES } from "@/lib/kb-articles";

export function generateStaticParams() {
  return KB_ARTICLES.map((article) => ({ slug: article.slug }));
}

export default async function KBArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = KB_ARTICLES.find((a) => a.slug === slug);

  if (!article) notFound();

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-6">
        <Button variant="ghost" size="sm" href="/knowledge">
          ← Knowledge Base
        </Button>
      </div>

      <Card gradient>
        <Badge variant="default" className="mb-3">
          {article.category}
        </Badge>
        <h1 className="font-heading text-2xl font-semibold mb-2">
          {article.title}
        </h1>
        <p className="text-[var(--text-secondary)] mb-6 italic">
          {article.excerpt}
        </p>

        <div className="prose-ace space-y-4">
          {article.content.split("\n\n").map((paragraph, i) => {
            // Handle headers
            if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
              return (
                <h3
                  key={i}
                  className="font-heading text-base font-semibold mt-6 mb-2"
                >
                  {paragraph.replace(/\*\*/g, "")}
                </h3>
              );
            }

            // Handle list items
            if (paragraph.includes("\n-")) {
              const lines = paragraph.split("\n");
              const header = lines[0];
              const items = lines.slice(1).filter((l) => l.startsWith("- "));
              return (
                <div key={i}>
                  {header && (
                    <p
                      className="text-sm text-[var(--text-primary)] mb-2"
                      dangerouslySetInnerHTML={{
                        __html: header
                          .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                          .replace(/`(.*?)`/g, '<code class="font-mono text-xs text-[var(--authority)]">$1</code>'),
                      }}
                    />
                  )}
                  <ul className="space-y-1.5 ml-1">
                    {items.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-sm text-[var(--text-secondary)]"
                      >
                        <span
                          className="w-1 h-1 rounded-full mt-2 shrink-0"
                          style={{
                            backgroundColor: "var(--capacity)",
                            boxShadow: "0 0 3px var(--capacity)",
                          }}
                        />
                        <span
                          dangerouslySetInnerHTML={{
                            __html: item
                              .replace(/^- /, "")
                              .replace(/\*\*(.*?)\*\*/g, '<strong class="text-[var(--text-primary)]">$1</strong>')
                              .replace(/`(.*?)`/g, '<code class="font-mono text-xs text-[var(--authority)]">$1</code>'),
                          }}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              );
            }

            // Regular paragraphs
            return (
              <p
                key={i}
                className="text-sm text-[var(--text-secondary)] leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: paragraph
                    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-[var(--text-primary)]">$1</strong>')
                    .replace(/`(.*?)`/g, '<code class="font-mono text-xs text-[var(--authority)]">$1</code>'),
                }}
              />
            );
          })}
        </div>
      </Card>
    </div>
  );
}
