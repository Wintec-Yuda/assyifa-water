import { products } from "@/lib/data";
import { DropletIcon, BoxesIcon } from "@/components/icons";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Products() {
  function splitWholesalePrice(text: string) {
    const [price, ...rest] = text.split(" - ");
    return { price: price.trim(), label: rest.join(" - ").trim() };
}

  return (
    <section id="produk" className="scroll-mt-20 py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            Produk &amp; Harga
          </p>
          <h2 className="mt-2 font-display text-2xl font-bold text-ink sm:text-3xl">
            Pilihan lengkap air minum
          </h2>
          <p className="mt-2 text-sm text-ink-soft sm:text-base">
            Harga di bawah adalah harga umum eceran. Untuk harga partai/grosir, konfirmasi via
            WhatsApp.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.id}
              className="flex flex-col rounded-2xl border border-line bg-white p-5 shadow-sm"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-tint text-brand-dark">
                  <DropletIcon className="h-5 w-5" />
                </span>
                {product.badge && (
                  <span className="rounded-full bg-badge/25 px-2.5 py-1 text-[11px] font-semibold text-brand-dark">
                    {product.badge}
                  </span>
                )}
              </div>

              <h3 className="mt-4 font-display text-lg font-semibold text-ink">{product.name}</h3>
              <p className="mt-1.5 flex-1 text-sm leading-relaxed text-ink-soft">
                {product.description}
              </p>

              <div className="mt-4 border-t border-line pt-4">
                  <div className="flex items-baseline justify-between gap-2">
                    <p className="font-mono text-xl font-semibold text-brand-dark">
                      {product.retailPrice}
                    </p>
                    <span className="text-xs text-ink-soft">{product.unit}</span>
                  </div>
                
                  {product.wholesalePrice &&
                    (() => {
                      const { price, label } = splitWholesalePrice(product.wholesalePrice);
                      return (
                        <div className="mt-3 flex items-center justify-between gap-3 rounded-lg bg-tint-soft px-3 py-2">
                          <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-brand-dark">
                            <BoxesIcon className="h-3.5 w-3.5" />
                            Partai
                          </span>
                          <span className="text-right">
                            <span className="font-mono text-sm font-semibold text-ink">{price}</span>
                            {label && (
                              <span className="block text-[11px] leading-tight text-ink-soft">
                                {label}
                              </span>
                            )}
                          </span>
                        </div>
                      );
                    })()}
                </div>

              <WhatsAppButton
                message={`Halo, saya mau tanya harga & stok ${product.name}.`}
                variant="outline"
                className="mt-4 w-full"
              >
                Tanya &amp; Pesan
              </WhatsAppButton>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
