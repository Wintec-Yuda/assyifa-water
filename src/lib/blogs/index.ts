// =============================================================
// Untuk menambah artikel blog baru:
// 1. Buat file baru di folder ini, contoh: nama-artikel-baru.ts
//    (contoh formatnya bisa dicontek dari file .ts lain di folder ini)
// 2. Import file itu di bawah, dan tambahkan ke array `allPosts`.
// Halaman /blog dan /blog/[slug] otomatis membaca dari sini,
// tidak perlu mengubah kode komponen manapun.
// =============================================================

import type { BlogPost } from "./types";
import post1 from "./cara-membedakan-galon-isi-ulang-vs-asli";
import post2 from "./tips-memilih-air-minum-aman-untuk-keluarga";
import post3 from "./kapan-waktu-tepat-ganti-cuci-galon";
import post4 from "./langganan-isi-ulang-galon-kediri";
import post5 from "./pentingnya-air-untuk-kehidupan";

export const allPosts: BlogPost[] = [post1, post2, post3, post4, post5].sort(
  (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
);

export function getPostBySlug(slug: string): BlogPost | undefined {
  return allPosts.find((post) => post.slug === slug);
}

export function getAllSlugs(): string[] {
  return allPosts.map((post) => post.slug);
}

export type { BlogPost, BlogSection } from "./types";
