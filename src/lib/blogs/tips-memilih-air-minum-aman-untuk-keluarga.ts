import type { BlogPost } from "./types";

const post: BlogPost = {
  slug: "tips-memilih-air-minum-aman-untuk-keluarga",
  title: "5 Tips Memilih Air Minum yang Aman untuk Keluarga",
  excerpt:
    "Air minum yang dikonsumsi setiap hari perlu dipastikan aman. Berikut tips praktis memilih sumber air minum yang layak untuk keluarga di rumah.",
  publishedAt: "2026-01-20",
  readingMinutes: 3,
  coverImageAlt: "Keluarga menuangkan air minum yang aman dan bersih",
  content: {
    intro:
      "Kualitas air minum berpengaruh langsung pada kesehatan keluarga. Berikut beberapa hal yang bisa kamu perhatikan sebelum memilih sumber air minum harian, baik dari depot isi ulang maupun air kemasan.",
    sections: [
      { type: "heading", text: "1. Pastikan sumbernya jelas dan bersertifikat" },
      {
        type: "paragraph",
        text: "Pilih depot air minum yang memiliki izin usaha dan sertifikat kelayakan, bukan sekadar depot tanpa identitas jelas. Ini menjamin proses pengolahan air sudah melalui standar tertentu.",
      },
      { type: "heading", text: "2. Perhatikan kebersihan galon" },
      {
        type: "paragraph",
        text: "Galon yang dipakai untuk isi ulang sebaiknya dicuci dan disterilkan sebelum diisi air baru. Galon yang kotor atau berjamur di bagian dalam bisa mencemari air meski proses filtrasinya baik.",
      },
      { type: "heading", text: "3. Rasakan dan cium air sebelum dikonsumsi" },
      {
        type: "paragraph",
        text: "Air minum yang layak biasanya tidak berbau dan tidak berasa aneh. Jika air terasa atau berbau tidak biasa, sebaiknya jangan dikonsumsi dan segera informasikan ke penyedia air.",
      },
      { type: "heading", text: "4. Simpan di tempat yang tepat" },
      {
        type: "list",
        items: [
          "Letakkan galon di tempat sejuk, hindari terkena sinar matahari langsung.",
          "Gunakan dispenser atau pompa galon yang bersih dan rutin dicuci.",
          "Habiskan air dalam waktu wajar, jangan biarkan galon terbuka terlalu lama.",
        ],
      },
      { type: "heading", text: "5. Rutin ganti pemasok bila perlu" },
      {
        type: "paragraph",
        text: "Jika kualitas air dari satu depot menurun atau ada keluhan, jangan ragu untuk berpindah ke penyedia lain yang lebih terpercaya dan konsisten menjaga kebersihan.",
      },
      {
        type: "quote",
        text: "Air minum yang aman bukan hanya soal rasa, tapi soal proses dan kebersihan dari hulu ke hilir — mulai dari sumber, pengolahan, sampai galon di rumah.",
      },
    ],
  },
};

export default post;
