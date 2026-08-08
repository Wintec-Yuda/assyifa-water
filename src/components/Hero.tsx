import WhatsAppButton from "@/components/WhatsAppButton";
import { business } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-tint-soft">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-brand-dark shadow-sm ring-1 ring-line">
            Melayani {business.serviceAreaNote.replace("Melayani ", "")} sejak {business.foundedYear}
          </span>

          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
            Air minum bersih,
            <br />
            <span className="text-brand">langsung diantar</span> hari ini juga.
          </h1>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-ink-soft sm:text-lg">
            {business.name} melayani isi ulang galon, galon Aqua &amp; Le Minerale asli, Aqua
            botolan, Aqua gelas, hingga Club — eceran, partai, langganan, sampai kebutuhan acara.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton
              message={`Halo ${business.name}, saya mau order. Boleh minta info produk & harganya?`}
              className="text-base"
            >
              Pesan via WhatsApp
            </WhatsAppButton>
            <a
              href="#produk"
              className="inline-flex items-center justify-center rounded-full border-2 border-ink/15 px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-brand hover:text-brand"
            >
              Lihat Produk &amp; Harga
            </a>
          </div>

          <dl className="mt-9 grid grid-cols-3 gap-4 border-t border-line pt-6">
            <div>
              <dt className="text-xs text-ink-soft">Jam Operasional</dt>
              <dd className="mt-1 font-display text-sm font-semibold text-ink sm:text-base">
                {business.hours}
              </dd>
            </div>
            <div>
              <dt className="text-xs text-ink-soft">Area Layanan</dt>
              <dd className="mt-1 font-display text-sm font-semibold text-ink sm:text-base">
                {business.serviceAreas.join(", ")}
              </dd>
            </div>
            <div>
              <dt className="text-xs text-ink-soft">Sejak</dt>
              <dd className="mt-1 font-display text-sm font-semibold text-ink sm:text-base">
                {business.foundedYear}
              </dd>
            </div>
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <HeroIllustration />
        </div>
      </div>

      <svg
        className="absolute inset-x-0 -bottom-1 h-10 w-full text-paper sm:h-16"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0 40C240 80 480 0 720 20C960 40 1200 80 1440 40V80H0V40Z" fill="currentColor" />
      </svg>
    </section>
  );
}

function HeroIllustration() {
  return (
    <svg viewBox="0 0 360 380" className="w-full drop-shadow-xl" aria-hidden="true">
      <ellipse cx="180" cy="345" rx="130" ry="20" fill="#0E7C86" opacity="0.08" />
      {/* Galon body */}
      <rect x="95" y="120" width="170" height="200" rx="24" fill="#FFFFFF" stroke="#DCEEF0" strokeWidth="2" />
      <rect x="95" y="120" width="170" height="200" rx="24" fill="url(#waterFill)" opacity="0.9" />
      <rect x="140" y="70" width="80" height="55" rx="12" fill="#0E7C86" />
      <rect x="150" y="52" width="60" height="26" rx="8" fill="#0A5F67" />
      <circle cx="180" cy="65" r="8" fill="#FFC94A" />
      {/* Water waves inside */}
      <path d="M95 210C130 195 160 225 195 210C225 197 245 215 265 205V300C265 311 256 320 245 320H115C104 320 95 311 95 300V210Z" fill="#7FD2D9" opacity="0.55" />
      {/* Seal ring badge */}
      <circle cx="180" cy="220" r="34" fill="#FFFFFF" stroke="#FFC94A" strokeWidth="4" />
      <path d="M167 220l9 9 18-20" stroke="#0E7C86" strokeWidth="4.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {/* Floating droplets */}
      <path d="M60 90c0 8-6.5 14-14.5 14S31 98 31 90c0-9 14.5-27 14.5-27S60 81 60 90Z" fill="#0E7C86" opacity="0.85" />
      <path d="M330 150c0 6.6-5.4 12-12 12s-12-5.4-12-12c0-7.5 12-22.5 12-22.5S330 142.5 330 150Z" fill="#FFC94A" />
      <path d="M300 300c0 5.5-4.5 10-10 10s-10-4.5-10-10c0-6.3 10-19 10-19S300 293.7 300 300Z" fill="#FF6B3D" opacity="0.85" />
      <defs>
        <linearGradient id="waterFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#EEF7F8" />
          <stop offset="1" stopColor="#DCEEF0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
