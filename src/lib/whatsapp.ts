import { business } from "@/lib/data";

/**
 * Membuat link wa.me dengan nomor & pesan yang sudah di-encode.
 * Dipakai di semua tombol "Pesan via WhatsApp" di seluruh halaman.
 */
export function waLink(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${business.whatsapp}?text=${encoded}`;
}
