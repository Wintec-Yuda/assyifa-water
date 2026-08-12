import type { BlogPost } from "./types";

const post: BlogPost = {
  slug: "isi-ulang-galon-air-sumber-gunung",
  title: "Isi Ulang Galon Air Sumber Gunung, Apa Bedanya?",
  excerpt:
    "Bukan sekadar isi ulang biasa, air di Assyifa Water berasal dari sumber gunung. Simak apa bedanya dan kenapa ini penting buat air minum harianmu.",
  publishedAt: "2026-08-12",
  readingMinutes: 3,
  coverImageAlt: "Galon air minum yang diisi dari sumber air pegunungan",
  content: {
    intro:
      "Kalau ditanya soal isi ulang galon, banyak orang mikirnya cuma soal proses filtrasi di depot. Padahal ada satu hal yang sering luput: dari mana sebenarnya air itu berasal. Di Assyifa Water, air yang dipakai untuk isi ulang galon berasal dari sumber gunung, bukan sekadar air tanah biasa yang disaring ulang.",
    sections: [
      { type: "heading", text: "Kenapa asal air itu penting?" },
      {
        type: "paragraph",
        text: "Filtrasi memang bikin air jadi jernih dan aman dari kotoran kasar, tapi kualitas dasar air tetap dipengaruhi dari mana sumbernya. Air yang berasal dari mata air gunung biasanya lebih alami, minim paparan polusi, dan punya karakter rasa yang lebih segar dibanding air tanah dari area padat penduduk.",
      },
      { type: "heading", text: "Bedanya air sumber gunung dengan air isi ulang biasa" },
      {
        type: "list",
        items: [
          "Rasanya lebih ringan dan segar, tidak ada aroma atau rasa aneh saat diminum.",
          "Berasal dari mata air pegunungan, bukan air tanah yang diproses ulang di area padat kota.",
          "Melalui proses isi ulang tetap dengan standar kebersihan galon dan alat isi.",
          "Cocok untuk konsumsi harian karena kualitas sumbernya lebih terjaga.",
        ],
      },
      { type: "heading", text: "Tetap higienis dari sumber sampai galon" },
      {
        type: "paragraph",
        text: "Air dari sumber gunung saja tidak cukup kalau proses isi ulangnya sembarangan. Di Assyifa Water, galon yang masuk tetap dicuci dan dipastikan bersih sebelum diisi, jadi kualitas air yang bagus dari sumbernya tidak sia-sia karena galon kotor atau alat isi yang jarang dibersihkan.",
      },
      { type: "heading", text: "Cara order dan area layanan" },
      {
        type: "paragraph",
        text: "Assyifa Water melayani isi ulang galon dan grosir air minum (Aqua, Club, Le Minerale) untuk area Kediri, mulai dari rumah tangga, warung, sampai kebutuhan acara. Untuk isi ulang, harga eceran mulai Rp5.000 dan harga grosir mulai Rp4.000 — hubungi kami untuk harga terbaru dan penyesuaian jumlah pesanan.",
      },
      {
        type: "list",
        items: [
          "Order via WhatsApp ke 6281230490961.",
          "Layanan antar ke rumah, warung, atau lokasi acara.",
          "Buka setiap hari pukul 06.00 - 21.00.",
          "Bisa langganan bulanan biar tidak perlu order ulang tiap kali galon habis.",
        ],
      },
      {
        type: "quote",
        text: "Air yang enak diminum bukan cuma soal jernih, tapi soal dari mana asalnya dan seberapa terjaga prosesnya sampai ke galon di rumahmu.",
      },
    ],
  },
};

export default post;
