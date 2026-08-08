import type { BlogPost } from "./types";

const post: BlogPost = {
  slug: "kapan-waktu-tepat-ganti-cuci-galon",
  title: "Kapan Waktu yang Tepat Mengganti atau Mencuci Galon di Rumah?",
  excerpt:
    "Galon yang jarang dicuci berisiko jadi sarang bakteri. Kenali tanda-tanda galon perlu dicuci atau diganti agar air minum di rumah tetap sehat.",
  publishedAt: "2026-02-02",
  readingMinutes: 3,
  coverImageAlt: "Galon air minum yang sedang dicuci bersih",
  content: {
    intro:
      "Galon air minum yang dipakai berulang kali perlu perawatan rutin. Tanpa perawatan yang benar, bagian dalam galon bisa jadi tempat berkembangnya bakteri atau lumut meski airnya sendiri terlihat jernih.",
    sections: [
      { type: "heading", text: "Tanda-tanda galon perlu dicuci" },
      {
        type: "list",
        items: [
          "Muncul bau tidak sedap saat galon dibuka, meski air belum habis.",
          "Terlihat lapisan licin atau berlendir di bagian dalam galon.",
          "Air terasa berbeda dari biasanya walau berasal dari sumber yang sama.",
          "Galon sudah dipakai lebih dari beberapa siklus isi ulang tanpa pernah dicuci menyeluruh.",
        ],
      },
      { type: "heading", text: "Seberapa sering galon harus dicuci?" },
      {
        type: "paragraph",
        text: "Idealnya, galon dicuci setiap kali proses isi ulang di depot yang menerapkan standar kebersihan. Untuk penggunaan di rumah, bilas bagian luar galon dan area mulut galon secara berkala, terutama sebelum dipasang ke dispenser.",
      },
      { type: "heading", text: "Kapan galon sebaiknya diganti dengan yang baru?" },
      {
        type: "paragraph",
        text: "Galon yang sudah retak, penyok parah, atau bagian dalamnya sulit dibersihkan meski sudah dicuci berkali-kali sebaiknya diganti. Galon dengan kondisi fisik yang rusak berisiko menjadi sumber kontaminasi meski airnya baru diisi.",
      },
      { type: "heading", text: "Tips menjaga galon tetap higienis" },
      {
        type: "list",
        items: [
          "Simpan galon kosong dalam posisi tertutup, jangan biarkan mulut galon terbuka begitu saja.",
          "Hindari menaruh galon langsung di lantai tanpa alas, terutama di area lembap.",
          "Gunakan jasa isi ulang yang mencuci dan mensterilkan galon sebelum mengisi air baru.",
        ],
      },
      {
        type: "quote",
        text: "Galon yang terlihat bersih dari luar belum tentu bersih di bagian dalam — perawatan rutin tetap kunci utama air minum yang sehat.",
      },
    ],
  },
};

export default post;
