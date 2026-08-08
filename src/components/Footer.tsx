import Link from "next/link";
import Logo from "@/components/Logo";
import { business } from "@/lib/data";

const quickLinks = [
  { href: "/#produk", label: "Produk" },
  { href: "/#layanan", label: "Layanan" },
  { href: "/#faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
];

export default function Footer() {
  const hasSocials = Object.values(business.socials).some((v) => v);
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white/70">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <Logo mark="white" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              {business.tagline}. Melayani {business.serviceAreaNote.replace("Melayani ", "")}{" "}
              sejak {business.foundedYear}.
            </p>
          </div>

          <div>
            <p className="font-display text-sm font-semibold text-white">Tautan</p>
            <ul className="mt-3 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-sm font-semibold text-white">Kontak</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>{business.address.full}</li>
              <li>WhatsApp: {business.whatsappDisplay}</li>
              <li>{business.hours}</li>
            </ul>

            {hasSocials && (
              <div className="mt-4 flex gap-3">
                {business.socials.instagram && (
                  <a href={business.socials.instagram} className="text-sm hover:text-white">
                    Instagram
                  </a>
                )}
                {business.socials.facebook && (
                  <a href={business.socials.facebook} className="text-sm hover:text-white">
                    Facebook
                  </a>
                )}
                {business.socials.googleBusiness && (
                  <a href={business.socials.googleBusiness} className="text-sm hover:text-white">
                    Google Business
                  </a>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/50">
          © {year} {business.name}. Semua hak dilindungi.{" "}
          <Link href="/blog" className="hover:text-white">
            Blog
          </Link>
        </div>
      </div>
    </footer>
  );
}
