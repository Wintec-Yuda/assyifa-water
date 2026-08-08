import type { BlogPost } from "@/lib/blogs";

export default function BlogContent({ content }: { content: BlogPost["content"] }) {
  return (
    <div className="prose-custom">
      <p className="text-lg leading-relaxed text-ink-soft">{content.intro}</p>

      {content.sections.map((section, i) => {
        if (section.type === "heading") {
          return (
            <h2 key={i} className="mt-8 font-display text-xl font-bold text-ink sm:text-2xl">
              {section.text}
            </h2>
          );
        }
        if (section.type === "paragraph") {
          return (
            <p key={i} className="mt-4 text-base leading-relaxed text-ink-soft">
              {section.text}
            </p>
          );
        }
        if (section.type === "list") {
          return (
            <ul key={i} className="mt-4 space-y-2">
              {section.items.map((item, j) => (
                <li key={j} className="flex gap-2.5 text-base leading-relaxed text-ink-soft">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          );
        }
        if (section.type === "quote") {
          return (
            <blockquote
              key={i}
              className="mt-6 rounded-2xl border-l-4 border-badge bg-tint-soft p-5 font-display text-base font-medium text-ink"
            >
              {section.text}
            </blockquote>
          );
        }
        return null;
      })}
    </div>
  );
}
