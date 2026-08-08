import { processSteps } from "@/lib/data";

export default function ProcessStrip() {
  return (
    <section className="bg-brand-dark py-14 sm:py-18" aria-labelledby="cara-pesan-heading">
      <div id="cara-pesan" className="mx-auto max-w-6xl scroll-mt-20 px-4 sm:px-6">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            Cara Pesan
          </p>
          <h2 id="cara-pesan-heading" className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
            Dari chat sampai galon di depan rumah
          </h2>
        </div>

        <ol className="relative mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* wavy route line, desktop only */}
          <svg
            className="pointer-events-none absolute left-0 right-0 top-6 hidden w-full lg:block"
            height="16"
            viewBox="0 0 1000 16"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0 8C120 -4 220 20 340 8C460 -4 560 20 680 8C800 -4 900 20 1000 8"
              stroke="#7FD2D9"
              strokeWidth="2"
              fill="none"
              className="route-dash"
            />
          </svg>

          {processSteps.map((item) => (
            <li key={item.step} className="relative">
              <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white font-display text-sm font-bold text-brand-dark ring-4 ring-brand-dark">
                {item.step}
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-white/70">{item.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
