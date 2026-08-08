import { serviceOptions } from "@/lib/data";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CartIcon, BoxesIcon, RepeatIcon, MapPinIcon, PartyIcon } from "@/components/icons";

const iconMap = {
  cart: CartIcon,
  boxes: BoxesIcon,
  repeat: RepeatIcon,
  "map-pin": MapPinIcon,
  party: PartyIcon,
};

export default function ServiceOptions() {
  return (
    <section id="layanan" className="scroll-mt-20 bg-tint-soft py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Layanan</p>
          <h2 className="mt-2 font-display text-2xl font-bold text-ink sm:text-3xl">
            Sesuaikan dengan kebutuhanmu
          </h2>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {serviceOptions.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <article
                key={service.id}
                className="flex flex-col rounded-2xl bg-white p-5 shadow-sm ring-1 ring-line"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                  {service.title}
                </h3>
                <p className="mt-1.5 flex-1 text-sm leading-relaxed text-ink-soft">
                  {service.description}
                </p>
                <WhatsAppButton
                  message={service.whatsappMessage}
                  variant="outline"
                  className="mt-4 w-full"
                >
                  Chat WhatsApp
                </WhatsAppButton>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
