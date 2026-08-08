import type { BlogPost } from "./types";

const post: BlogPost = {
  slug: "cara-membedakan-galon-isi-ulang-vs-asli",
  title: "Cara Membedakan Galon Isi Ulang dan Galon Segel Asli",
  excerpt:
    "Sering bingung pilih galon isi ulang atau galon bersegel asli seperti Aqua dan Le Minerale? Ini perbedaan dan cara memilih sesuai kebutuhan.",
  publishedAt: "2026-01-10",
  readingMinutes: 4,
  coverImageAlt: "Perbandingan galon isi ulang dan galon bersegel asli",
  content: {
    intro:
      "Banyak orang masih menganggap semua galon air itu sama, padahal ada perbedaan penting antara galon isi ulang dan galon segel asli dari pabrik. Memahami perbedaan ini membantu kamu memilih sesuai kebutuhan dan bujet rumah tangga.",
    sections: [
      { type: "heading", text: "Apa itu galon isi ulang?" },
      {
        type: "paragraph",
        text: "Galon isi ulang adalah galon kosong milik pelanggan yang diisi kembali dengan air minum melalui proses filtrasi di depot air. Karena galonnya dipakai berulang kali dan tidak melalui proses segel pabrik, harganya jauh lebih murah dibanding galon branded.",
      },
      { type: "heading", text: "Apa itu galon segel asli?" },
      {
        type: "paragraph",
        text: "Galon segel asli seperti Aqua atau Le Minerale adalah produk baru dari distributor resmi yang masih tersegel rapat dari pabrik, belum pernah dibuka sebelumnya. Karena melalui proses produksi dan distribusi resmi, harganya lebih tinggi dari galon isi ulang.",
      },
      { type: "heading", text: "Cara membedakan keduanya secara fisik" },
      {
        type: "list",
        items: [
          "Cek segel plastik di tutup galon — galon asli memiliki segel utuh dengan logo merek yang jelas dan tidak mudah dilepas.",
          "Perhatikan kondisi galon — galon isi ulang biasanya sedikit lebih usang karena dipakai berulang, sedangkan galon baru terlihat lebih mulus.",
          "Cek label/stiker produksi — galon branded punya kode produksi dan tanggal kedaluwarsa tercetak jelas.",
        ],
      },
      { type: "heading", text: "Mana yang sebaiknya dipilih?" },
      {
        type: "paragraph",
        text: "Untuk konsumsi harian rumah tangga, galon isi ulang dari depot terpercaya sudah cukup aman dan lebih hemat. Untuk acara atau saat butuh jaminan segel pabrik, galon branded seperti Aqua atau Le Minerale lebih cocok.",
      },
      {
        type: "quote",
        text: "Yang paling penting bukan sekadar merek, tapi memastikan galon berasal dari depot atau distributor yang menjaga kebersihan proses pengisian.",
      },
    ],
  },
};

export default post;
