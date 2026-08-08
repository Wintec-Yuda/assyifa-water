import { business } from "@/lib/data";
import WhatsAppButton from "@/components/WhatsAppButton";
import { MapPinIcon, ClockIcon, WhatsAppIcon } from "@/components/icons";

export default function ContactMap() {
  return (
    <section id="kontak" className="scroll-mt-20 py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Kontak</p>
          <h2 className="mt-2 font-display text-2xl font-bold text-ink sm:text-3xl">
            Kunjungi atau hubungi kami
          </h2>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col gap-4">
            <div className="rounded-2xl border border-line bg-white p-5">
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-tint text-brand-dark">
                  <MapPinIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-sm font-semibold text-ink">Alamat</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                    {business.address.full}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-line bg-white p-5">
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-tint text-brand-dark">
                  <ClockIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-sm font-semibold text-ink">Jam Operasional</p>
                  <p className="mt-1 text-sm text-ink-soft">{business.hours}</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-brand-dark p-5">
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/15 text-white">
                  <WhatsAppIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-sm font-semibold text-white">WhatsApp</p>
                  <p className="mt-1 text-sm text-white/75">{business.whatsappDisplay}</p>
                </div>
              </div>
              <WhatsAppButton
                message={`Halo ${business.name}, saya mau tanya-tanya.`}
                className="mt-4 w-full !bg-white !text-brand-dark hover:!bg-white/90"
              >
                Chat Sekarang
              </WhatsAppButton>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-sm">
            <iframe
              src={business.mapsEmbedSrc}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 380 }}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title={`Lokasi ${business.name} di Google Maps`}
              className="h-full min-h-[380px] w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
