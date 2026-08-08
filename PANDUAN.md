# Panduan Assyifa Water Website

Website satu halaman (landing page) + blog untuk Assyifa Water, dibangun dengan
Next.js, Tailwind CSS, dan data TypeScript. Order diarahkan ke WhatsApp.

## Cara jalanin di komputer sendiri

```bash
npm install
npm run dev
```

Buka `http://localhost:3000` di browser.

## File yang paling sering kamu edit

Kamu TIDAK perlu menyentuh file komponen (`src/components/`) untuk update
konten sehari-hari. Cukup edit file data berikut:

| Yang mau diubah | Edit file ini |
|---|---|
| Nama usaha, alamat, jam buka, nomor WA, kebijakan antar | `src/lib/data.ts` → object `business` |
| Daftar produk & harga | `src/lib/data.ts` → array `products` |
| Layanan (eceran/partai/langganan/acara/survey) | `src/lib/data.ts` → array `serviceOptions` |
| Testimoni pelanggan | `src/lib/data.ts` → array `testimonials` |
| Pertanyaan FAQ | `src/lib/data.ts` → array `faqs` |
| Link Instagram/Facebook/Google Business | `src/lib/data.ts` → object `business.socials` (kosongkan `""` untuk sembunyikan) |
| Artikel blog | folder `src/lib/blogs/` (lihat bagian bawah) |

## Cara menambah artikel blog baru

1. Buat file baru di `src/lib/blogs/`, misalnya `nama-artikel-baru.ts`.
   Contoh isinya bisa dicontek dari file lain di folder yang sama, bentuknya:

   ```ts
   import type { BlogPost } from "./types";

   const post: BlogPost = {
     slug: "nama-artikel-baru",
     title: "Judul Artikel",
     excerpt: "Ringkasan singkat 1-2 kalimat.",
     publishedAt: "2026-03-01",
     readingMinutes: 3,
     coverImageAlt: "Deskripsi gambar sampul",
     content: {
       intro: "Paragraf pembuka artikel.",
       sections: [
         { type: "heading", text: "Sub Judul" },
         { type: "paragraph", text: "Isi paragraf." },
         { type: "list", items: ["Poin 1", "Poin 2"] },
         { type: "quote", text: "Kutipan penting." },
       ],
     },
   };

   export default post;
   ```

2. Buka `src/lib/blogs/index.ts`, tambahkan baris import dan masukkan ke
   array `allPosts`. Artikel otomatis muncul di `/blog` dan homepage.

## Mengganti gambar

Belum ada foto asli (semua ilustrasi masih berupa SVG/gambar buatan). Untuk
ganti dengan foto asli:

1. Taruh file foto di folder `public/images/`.
2. Di komponen yang relevan (misalnya `src/components/WhyUs.tsx` untuk foto
   sertifikat), ganti elemen SVG dengan komponen `<Image>` dari `next/image`.

## Deploy ke Vercel

1. Push project ini ke repo GitHub.
2. Buka [vercel.com](https://vercel.com), pilih "Import Project", hubungkan
   ke repo tersebut.
3. Vercel otomatis mendeteksi Next.js, tinggal klik Deploy.
4. Domain sementara akan berbentuk `nama-project.vercel.app` — kamu bisa
   ganti ke `assyifawater.biz.id` lewat Project Settings → Domains.

## Yang masih perlu kamu lengkapi

- [ ] Harga produk asli (saat ini masih harga umum/contoh)
- [ ] Testimoni asli dari pelanggan (saat ini masih dummy)
- [ ] Foto sertifikat depot air minum asli
- [ ] Foto produk & galon (saat ini masih ilustrasi SVG)
- [ ] Link Google Business Profile (setelah dibuat)
