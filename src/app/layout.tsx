import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { business } from "@/lib/data";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(business.siteUrl),
  title: {
    default: `${business.name} — Isi Ulang Galon & Air Minum Antar ${business.serviceAreas.join(", ")}`,
    template: `%s — ${business.name}`,
  },
  description: business.description,
  keywords: [
    "isi ulang galon Kediri",
    "depot air minum Kediri",
    "galon Aqua Kediri",
    "galon Le Minerale Kediri",
    "jual air minum partai Kediri",
    "langganan galon isi ulang Papar",
    "air minum acara hajatan Kediri",
    business.name,
  ],
  authors: [{ name: business.name }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: business.siteUrl,
    siteName: business.name,
    title: `${business.name} — Isi Ulang Galon & Air Minum Antar ${business.serviceAreas.join(", ")}`,
    description: business.description,
  },
  twitter: {
    card: "summary",
    title: business.name,
    description: business.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${business.siteUrl}/#business`,
    name: business.name,
    description: business.description,
    url: business.siteUrl,
    telephone: `+${business.whatsapp}`,
    priceRange: "Rp",
    foundingDate: String(business.foundedYear),
    address: {
      "@type": "PostalAddress",
      streetAddress: `${business.address.street}, ${business.address.village}`,
      addressLocality: business.address.district,
      addressRegion: `${business.address.city}, ${business.address.province}`,
      postalCode: business.address.postalCode,
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: business.hoursSpec.opens,
      closes: business.hoursSpec.closes,
    },
    areaServed: business.serviceAreas.map((area) => ({
      "@type": "City",
      name: area,
    })),
    paymentAccepted: business.paymentMethods,
  };

  return (
    <html
      lang="id"
      className={`${spaceGrotesk.variable} ${inter.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        {children}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </body>
    </html>
  );
}
