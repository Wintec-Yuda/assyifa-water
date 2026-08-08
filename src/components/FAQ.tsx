import { faqs } from "@/lib/data";

export default function FAQ() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section id="faq" className="scroll-mt-20 py-14 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">FAQ</p>
          <h2 className="mt-2 font-display text-2xl font-bold text-ink sm:text-3xl">
            Pertanyaan yang sering ditanyakan
          </h2>
        </div>

        <div className="mt-8 divide-y divide-line overflow-hidden rounded-2xl border border-line bg-white">
          {faqs.map((item) => (
            <details key={item.question} className="faq-item group p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <span className="font-display text-sm font-semibold text-ink sm:text-base">
                  {item.question}
                </span>
                <span className="faq-icon flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-tint text-brand-dark">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
                    <path
                      d="M12 5v14M5 12h14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>

      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </section>
  );
}
