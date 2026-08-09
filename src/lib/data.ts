// =============================================================
// SEMUA DATA WEBSITE ADA DI SINI.
// Ganti nilai-nilai di bawah dengan data terbaru kapan pun perlu:
// harga, testimoni, FAQ, dll. Struktur/kode komponen lain
// TIDAK perlu diubah saat kamu update data.
// =============================================================

export const business = {
  name: "Assyifa Water",
  legalName: "Assyifa Water",
  tagline: "Isi ulang galon & air minum, langsung antar ke lokasi",
  description:
    "Assyifa Water melayani isi ulang galon, galon Aqua & Le Minerale asli, Aqua botolan, Aqua gelas, dan Club di wilayah Kediri sejak 2021. Terima eceran, partai/grosir, langganan rutin, dan kebutuhan acara seperti hajatan.",
  foundedYear: 2021,
  owner: "Pak Yunus",
  hasCertification: true,
  certificationLabel: "Bersertifikat Depot Air Minum",
  // Nomor WhatsApp format internasional TANPA tanda + atau spasi
  whatsapp: "6281230490961",
  whatsappDisplay: "0812-3049-0961",
  address: {
    street: "Tundan RT 04",
    village: "Tundan, Purwotengah",
    district: "Kec. Papar",
    city: "Kabupaten Kediri",
    province: "Jawa Timur",
    postalCode: "64153",
    full: "Tundan RT 04, Purwotengah, Kec. Papar, Kabupaten Kediri, Jawa Timur 64153",
  },
  geo: {
    latitude: -7.730605,
    longitude: 112.048592,
  },
  hours: "06.00 - 21.00",
  hoursSpec: {
    opens: "06:00",
    closes: "21:00",
  },
  serviceAreas: ["Kediri"],
  serviceAreaNote: "Melayani Kota & Kabupaten Kediri",
  deliveryPolicy:
    "Pengiriman tersedia setiap hari selama stok mencukupi. Tidak ada biaya tambahan ongkir untuk area layanan, cukup konfirmasi ketersediaan & jadwal antar langsung via WhatsApp.",
  paymentMethods: ["Tunai", "Transfer Bank", "QRIS"],
  mapsEmbedSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1012278.5093317991!2d110.87038786874002!3d-7.6602415773587245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e785b0d36d855cb%3A0x3cbd048183597f7c!2sAssyifa%20water!5e0!3m2!1sid!2sid!4v1786177545492!5m2!1sid!2sid",
  socials: {
    // Kosongkan dulu ("") sampai akun sosial media dibuat. Footer otomatis
    // menyembunyikan tautan yang kosong.
    instagram: "",
    facebook: "",
    googleBusiness: "",
  },
  siteUrl: "https://assyifawater.biz.id",
};

export type ProductCategory = {
  id: string;
  name: string;
  description: string;
  unit: string;
  retailPrice: string;
  wholesalePrice?: string;
  badge?: string;
  imageAlt: string;
};

// Harga di bawah ini CONTOH UMUM. Update ke harga asli kapan saja di sini.
export const products: ProductCategory[] = [
  {
    id: "galon-isi-ulang",
    name: "Galon Isi Ulang",
    description:
      "Air isi ulang melalui proses filtrasi & UV sebelum diisi ke galon bersih milik pelanggan.",
    unit: "per galon (19L)",
    retailPrice: "Rp5.000",
    wholesalePrice: "Rp4.000 - Harga khusus untuk pembelian partai",
    badge: "Paling Laris",
    imageAlt: "Galon isi ulang 19 liter",
  },
  {
    id: "galon-aqua",
    name: "Galon Aqua Asli",
    description: "Galon Aqua bersegel pabrik, tutup masih tersegel rapat, bukan isi ulang.",
    unit: "per galon (19L)",
    retailPrice: "Rp21.000",
    wholesalePrice: "Rp20.000 - Harga khusus untuk pembelian partai",
    badge: "Asli & Bersegel",
    imageAlt: "Galon Aqua asli bersegel",
  },
  {
    id: "galon-cleo",
    name: "Galon Cleo Asli",
    description: "Galon Cleo 19L asli, bersegel pabrik, tutup masih tersegel rapat dan siap digunakan.",
    unit: "per galon (19L)",
    retailPrice: "Rp21.000",
    wholesalePrice: "Rp20.000 - Harga khusus untuk pembelian partai",
    badge: "Asli & Bersegel",
    imageAlt: "Galon Cleo asli bersegel",
  },
  {
    id: "galon-le-minerale",
    name: "Galon Le Minerale",
    description: "Le Minerale galon dengan tutup segel plastik anti-bocor, aman untuk dispenser.",
    unit: "per galon (19L)",
    retailPrice: "Rp22.000",
    wholesalePrice: "Rp21.000 - Harga khusus untuk pembelian partai",
    imageAlt: "Galon Le Minerale asli bersegel",
  },
  {
    id: "galon-kosong",
    name: "Galon Kosongan",
    description: "Galon kosong ukuran 19L tanpa isi air, cocok untuk isi ulang.",
    unit: "per galon (19L)",
    retailPrice: "Rp45.000",
    wholesalePrice: "Rp45.000",
    badge: "Galon Kosong",
    imageAlt: "Galon Kosongan 19L",
  },
];

export type ServiceOption = {
  id: string;
  title: string;
  description: string;
  whatsappMessage: string;
  icon: "cart" | "boxes" | "repeat" | "map-pin" | "party";
};

export const serviceOptions: ServiceOption[] = [
  {
    id: "eceran",
    title: "Eceran",
    description: "Beli satuan sesuai kebutuhan harian, dari 1 galon atau 1 dus saja.",
    whatsappMessage: "Halo Assyifa Water, saya mau order eceran. Boleh minta info produk & harganya?",
    icon: "cart",
  },
  {
    id: "partai",
    title: "Partai / Grosir",
    description: "Untuk toko, warung, atau kebutuhan besar dengan harga khusus.",
    whatsappMessage: "Halo Assyifa Water, saya mau tanya harga partai/grosir untuk pembelian dalam jumlah besar.",
    icon: "boxes",
  },
  {
    id: "langganan",
    title: "Langganan Rutin",
    description: "Order galon isi ulang tiap kali habis, tinggal chat WA — data kamu kami simpan.",
    whatsappMessage: "Halo Assyifa Water, saya mau langganan galon isi ulang rutin. Boleh minta info caranya?",
    icon: "repeat",
  },
  {
    id: "acara",
    title: "Kebutuhan Acara",
    description: "Hajatan, pernikahan, atau acara lain — pesan air minum dalam jumlah besar.",
    whatsappMessage: "Halo Assyifa Water, saya mau pesan air minum untuk kebutuhan acara/hajatan.",
    icon: "party",
  },
  {
    id: "survey",
    title: "Survey Lokasi",
    description: "Untuk kantor, kos, atau perumahan baru — kami cek dulu jangkauan & kebutuhan air harian.",
    whatsappMessage: "Halo Assyifa Water, saya mau minta survey lokasi untuk kebutuhan air minum rutin.",
    icon: "map-pin",
  },
];

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Chat via WhatsApp",
    description: "Kirim pesan, sebutkan produk & jumlah yang dibutuhkan.",
  },
  {
    step: "02",
    title: "Konfirmasi & Diproses",
    description: "Kami cek stok dan jadwal antar, lalu siapkan pesanan.",
  },
  {
    step: "03",
    title: "Diantar ke Lokasi",
    description: "Kurir mengantar langsung sesuai alamat, hari yang sama selama stok cukup.",
  },
  {
    step: "04",
    title: "Sampai & Dicek",
    description: "Cek segel & kondisi galon saat diterima, langsung bisa dipakai.",
  },
];

export type Testimonial = {
  name: string;
  location: string;
  quote: string;
  rating: number;
};

// Data dummy untuk contoh tampilan. Ganti dengan testimoni asli pelanggan kapan pun.
export const testimonials: Testimonial[] = [
  {
    name: "Ibu Ratna",
    location: "Papar, Kediri",
    quote:
      "Langganan galon isi ulang di sini sudah lama, airnya bersih dan antarnya selalu tepat waktu.",
    rating: 5,
  },
  {
    name: "Pak Hari",
    location: "Pemilik Warung, Kediri",
    quote:
      "Ambil partai buat dijual lagi di warung, harganya bersaing dan stok selalu ada.",
    rating: 5,
  },
  {
    name: "Dinda",
    location: "Kabupaten Kediri",
    quote: "Order lewat WA gampang banget, prosesnya cepat sampainya juga sama hari.",
    rating: 4,
  },
  {
    name: "Mas Rian",
    location: "Panitia Hajatan",
    quote:
      "Pesan air gelas & botol buat acara nikahan, jumlah banyak tetap bisa dan datang sesuai jadwal.",
    rating: 5,
  },
];

export type FaqItem = {
  question: string;
  answer: string;
};

// Data dummy — sesuaikan dengan pertanyaan yang benar-benar sering ditanyakan pelanggan.
export const faqs: FaqItem[] = [
  {
    question: "Apa bedanya galon isi ulang dengan galon Aqua/Le Minerale asli?",
    answer:
      "Galon isi ulang adalah galon kosong milik pelanggan yang diisi ulang air melalui proses filtrasi di depot kami, harganya lebih murah. Galon Aqua/Le Minerale asli adalah galon baru dari distributor resmi yang masih tersegel rapat, belum pernah dibuka.",
  },
  {
    question: "Apakah ada biaya tambahan (ongkir) untuk pengiriman?",
    answer:
      "Tidak ada biaya tambahan selama pesanan berada di area layanan (Kediri) dan stok mencukupi. Konfirmasi ketersediaan langsung lewat WhatsApp sebelum pengiriman.",
  },
  {
    question: "Apakah bisa langganan galon rutin tanpa order ulang setiap saat?",
    answer:
      "Saat ini sistem langganan masih dengan order manual setiap kali kamu butuh — cukup chat WA, data kamu akan kami simpan supaya proses order berikutnya lebih cepat.",
  },
  {
    question: "Bagaimana cara memesan dalam jumlah partai/grosir?",
    answer:
      "Hubungi kami via WhatsApp dan sebutkan jenis produk serta perkiraan jumlah yang dibutuhkan. Kami akan infokan harga khusus partai dan estimasi waktu pengiriman.",
  },
  {
    question: "Bisa pesan untuk kebutuhan acara atau hajatan?",
    answer:
      "Bisa. Kami melayani pemesanan air minum dalam jumlah besar (galon, botol, gelas) untuk acara seperti pernikahan dan hajatan. Sebaiknya konfirmasi kebutuhan beberapa hari sebelum acara lewat WhatsApp.",
  },
  {
    question: "Metode pembayaran apa saja yang diterima?",
    answer: "Kami menerima pembayaran tunai, transfer bank, dan QRIS.",
  },
  {
    question: "Apakah air yang digunakan terjamin higienis?",
    answer:
      "Ya. Air isi ulang diproses melalui tahap filtrasi dan sterilisasi UV, dan Assyifa Water memiliki sertifikat depot air minum. Galon branded (Aqua, Le Minerale, Club) kami kirim dalam kondisi tersegel asli dari distributor resmi.",
  },
];
