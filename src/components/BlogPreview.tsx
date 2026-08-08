import Link from "next/link";
import { allPosts } from "@/lib/blogs";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPreview() {
  const latest = allPosts.slice(0, 3);
  if (latest.length === 0) return null;

  return (
    <section className="bg-tint-soft py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
              Artikel
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold text-ink sm:text-3xl">
              Tips seputar air minum
            </h2>
          </div>
          <Link
            href="/blog"
            className="text-sm font-semibold text-brand hover:text-brand-dark"
          >
            Lihat semua artikel →
          </Link>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {latest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col rounded-2xl bg-white p-5 shadow-sm ring-1 ring-line transition-shadow hover:shadow-md"
            >
              <p className="text-xs text-ink-soft">
                {formatDate(post.publishedAt)} · {post.readingMinutes} menit baca
              </p>
              <h3 className="mt-2 font-display text-lg font-semibold text-ink group-hover:text-brand">
                {post.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{post.excerpt}</p>
              <span className="mt-4 text-sm font-semibold text-brand">Baca selengkapnya →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
