// Tipe data untuk artikel blog. Satu artikel = satu object BlogPost.
// Setiap section punya "type" yang menentukan cara tampilnya:
// - "paragraph": teks biasa
// - "heading": sub-judul di dalam artikel
// - "list": daftar poin (butuh field `items`)
// - "quote": kutipan/kotak highlight

export type BlogSection =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string; // format: YYYY-MM-DD
  updatedAt?: string;
  readingMinutes: number;
  coverImageAlt: string;
  content: {
    intro: string;
    sections: BlogSection[];
  };
};
