"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import WhatsAppButton from "@/components/WhatsAppButton";
import { business } from "@/lib/data";

const navLinks = [
  { href: "/#produk", label: "Produk" },
  { href: "/#layanan", label: "Layanan" },
  { href: "/#cara-pesan", label: "Cara Pesan" },
  { href: "/#testimoni", label: "Testimoni" },
  { href: "/#faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
  { href: "/#kontak", label: "Kontak" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur supports-[backdrop-filter]:bg-paper/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <WhatsAppButton message={`Halo ${business.name}, saya mau tanya-tanya.`}>
            Pesan via WhatsApp
          </WhatsAppButton>
        </div>

        <button
          type="button"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink lg:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
            {open ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-line bg-paper px-4 pb-4 pt-2 lg:hidden">
          <ul className="flex flex-col divide-y divide-line/70">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base font-medium text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <WhatsAppButton
            message={`Halo ${business.name}, saya mau tanya-tanya.`}
            className="mt-3 w-full"
          >
            Pesan via WhatsApp
          </WhatsAppButton>
        </nav>
      )}
    </header>
  );
}
