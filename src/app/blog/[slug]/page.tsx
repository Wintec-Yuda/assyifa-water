import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import BlogContent from "@/components/BlogContent";
import WhatsAppButton from "@/components/WhatsAppButton";
import { allPosts, getPostBySlug, getAllSlugs } from "@/lib/blogs";
import { business } from "@/lib/data";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.publishedAt,
      url: `${business.siteUrl}/blog/${post.slug}`,
    },
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = allPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: {
      "@type": "Organization",
      name: business.name,
    },
    publisher: {
      "@type": "Organization",
      name: business.name,
    },
    mainEntityOfPage: `${business.siteUrl}/blog/${post.slug}`,
  };

  return (
    <>
      <Header />
      <main>
        <article className="py-10 sm:py-14">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <nav className="text-xs text-ink-soft">
              <Link href="/blog" className="hover:text-brand">
                Blog
              </Link>{" "}
              / <span>{post.title}</span>
            </nav>

            <p className="mt-4 text-xs text-ink-soft">
              {formatDate(post.publishedAt)} · {post.readingMinutes} menit baca
            </p>
            <h1 className="mt-2 font-display text-2xl font-bold leading-tight text-ink sm:text-4xl">
              {post.title}
            </h1>

            <div className="mt-8">
              <BlogContent content={post.content} />
            </div>

            <div className="mt-10 rounded-2xl bg-tint-soft p-6">
              <p className="font-display text-base font-semibold text-ink">
                Butuh air minum hari ini?
              </p>
              <p className="mt-1 text-sm text-ink-soft">
                Chat WhatsApp untuk order eceran, partai, atau langganan galon isi ulang.
              </p>
              <WhatsAppButton
                message={`Halo ${business.name}, saya baca artikel "${post.title}" dan mau order.`}
                className="mt-4"
              >
                Pesan via WhatsApp
              </WhatsAppButton>
            </div>

            {related.length > 0 && (
              <div className="mt-12 border-t border-line pt-8">
                <p className="font-display text-sm font-semibold text-ink">Artikel lainnya</p>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  {related.map((r) => (
                    <Link
                      key={r.slug}
                      href={`/blog/${r.slug}`}
                      className="rounded-xl border border-line p-4 text-sm font-medium text-ink hover:border-brand hover:text-brand"
                    >
                      {r.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </article>
      </main>
      <Footer />
      <FloatingWhatsApp />

      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
    </>
  );
}
