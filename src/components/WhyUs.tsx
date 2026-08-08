import { business } from "@/lib/data";
import { ShieldCheckIcon, TruckIcon, ClockIcon, MapPinIcon } from "@/components/icons";

const points = [
  {
    icon: ShieldCheckIcon,
    title: business.certificationLabel,
    description: `Beroperasi sejak ${business.foundedYear} di bawah pengawasan ${business.owner}, air melalui proses filtrasi & sterilisasi.`,
  },
  {
    icon: TruckIcon,
    title: "Tanpa Ongkir Tambahan",
    description: business.deliveryPolicy,
  },
  {
    icon: ClockIcon,
    title: "Buka Setiap Hari",
    description: `Operasional ${business.hours}, order kapan saja lewat WhatsApp.`,
  },
  {
    icon: MapPinIcon,
    title: "Jangkauan Luas",
    description: `${business.serviceAreaNote}, termasuk untuk kebutuhan acara & hajatan.`,
  },
];

export default function WhyUs() {
  return (
    <section className="py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
              Kenapa {business.name}
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold text-ink sm:text-3xl">
              Dipercaya rumah tangga & acara di {business.serviceAreas.join(", ")}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft sm:text-base">
              {business.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {business.paymentMethods.map((method) => (
                <span
                  key={method}
                  className="rounded-full bg-tint px-3 py-1.5 text-xs font-medium text-brand-dark"
                >
                  {method}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {points.map((point) => (
              <div key={point.title} className="rounded-2xl border border-line bg-white p-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-tint text-brand-dark">
                  <point.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-3 font-display text-base font-semibold text-ink">
                  {point.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {business.hasCertification && (
          <div className="mt-10 flex flex-col items-center gap-4 rounded-2xl bg-tint-soft p-6 sm:flex-row sm:justify-between">
            <div className="flex items-center gap-4">
              <CertificateDummyBadge />
              <div>
                <p className="font-display text-sm font-semibold text-ink">
                  Sertifikat Depot Air Minum
                </p>
                <p className="text-xs text-ink-soft">
                  Gambar sertifikat contoh — ganti dengan foto sertifikat asli di komponen ini.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function CertificateDummyBadge() {
  return (
    <svg viewBox="0 0 64 64" className="h-14 w-14 shrink-0" aria-hidden="true">
      <rect x="4" y="4" width="56" height="56" rx="10" fill="#FFFFFF" stroke="#DCEEF0" strokeWidth="2" />
      <path d="M20 22h24M20 30h24M20 38h16" stroke="#7FD2D9" strokeWidth="3" strokeLinecap="round" />
      <circle cx="46" cy="46" r="10" fill="#FFC94A" />
      <path d="M42 46l3 3 6-6" stroke="#123A40" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
