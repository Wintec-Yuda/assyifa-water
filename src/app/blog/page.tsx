import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { allPosts } from "@/lib/blogs";
import { business } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog & Tips Air Minum",
  description: `Kumpulan artikel seputar air minum, kebersihan galon, dan tips rumah tangga dari ${business.name}.`,
  alternates: { canonical: "/blog" },
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogIndexPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-tint-soft py-12 sm:py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Blog</p>
            <h1 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">
              Tips seputar air minum
            </h1>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-soft sm:text-base">
              Artikel ringan tentang kualitas air, perawatan galon, dan tips rumah tangga dari{" "}
              {business.name}.
            </p>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="grid gap-5 sm:grid-cols-2">
              {allPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col rounded-2xl border border-line bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
                >
                  <p className="text-xs text-ink-soft">
                    {formatDate(post.publishedAt)} · {post.readingMinutes} menit baca
                  </p>
                  <h2 className="mt-2 font-display text-lg font-semibold text-ink group-hover:text-brand">
                    {post.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 text-sm font-semibold text-brand">
                    Baca selengkapnya →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
