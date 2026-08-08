import { waLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/icons";
import { business } from "@/lib/data";

export default function FloatingWhatsApp() {
  return (
    <a
      href={waLink(`Halo ${business.name}, saya mau order.`)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Pesan via WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-wa text-white shadow-lg transition-transform hover:scale-105 hover:bg-wa-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
