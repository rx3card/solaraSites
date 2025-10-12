import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { StarsBackground } from "@/components/StarsBackground";
import { FloatingLogo } from "@/components/FloatingLogo";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-poppins",
  display: "swap",
  preload: true,
  fallback: ['system-ui', '-apple-system', 'sans-serif'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://solarasites.vercel.app'),
  title: {
    default: "SolaraSites — Diseño Web Premium en Colombia | Landing Pages & E-commerce",
    template: "%s | SolaraSites",
  },
  description: "🚀 Creamos páginas web minimalistas, rápidas y profesionales que convierten visitantes en clientes. Landing pages desde $350k, sitios corporativos, e-commerce. ⚡ Entrega en 7 días. ⭐ 4.9/5 rating.",
  keywords: [
    "diseño web Colombia",
    "páginas web profesionales",
    "landing page Colombia",
    "desarrollo web Bogotá",
    "e-commerce Colombia",
    "tienda online",
    "sitio web corporativo",
    "diseño responsive",
    "SEO técnico",
    "páginas web rápidas",
    "diseño minimalista",
    "desarrollo Next.js",
    "React Colombia",
    "Tailwind CSS",
    "web performance",
    "optimización web",
  ],
  authors: [{ name: "SolaraSites", url: "https://solarasites.vercel.app" }],
  creator: "SolaraSites",
  publisher: "SolaraSites",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "/",
    siteName: "SolaraSites",
    title: "SolaraSites — Webs que eclipsan a las demás ✨",
    description: "⚡ Landing pages desde $350k | 🎨 Diseño premium minimalista | 🚀 Entrega en 7 días | ⭐ +20 proyectos exitosos. Haz que tu negocio brille online.",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "SolaraSites - Diseño Web Premium en Colombia",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@solarasites",
    creator: "@solarasites",
    title: "SolaraSites — Webs que eclipsan a las demás ✨",
    description: "⚡ Landing pages desde $350k | 🎨 Diseño premium | 🚀 Entrega en 7 días. Haz que tu negocio brille online.",
    images: ["/api/og"],
  },
  icons: {
    icon: [
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/logo_solaraSites-dark.svg", color: "#FF8C29" },
    ],
  },
  manifest: "/manifest.json",
  applicationName: "SolaraSites",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "SolaraSites",
  },
  formatDetection: {
    telephone: true,
    email: true,
  },
  category: "technology",
  classification: "Business",
  verification: {
    // Agrega aquí tus códigos de verificación cuando los tengas:
    // google: "tu-codigo-google-search-console",
    // yandex: "tu-codigo-yandex",
    // bing: "tu-codigo-bing",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'SolaraSites',
    description: 'Agencia de diseño y desarrollo web en Colombia especializada en landing pages, sitios corporativos y e-commerce.',
    url: 'https://solarasites.vercel.app',
    logo: 'https://solarasites.vercel.app/logo_solaraSites-dark.svg',
    image: 'https://solarasites.vercel.app/api/og',
    telephone: '+57-XXX-XXX-XXXX',
    email: 'contacto@solarasites.com',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'CO',
      addressRegion: 'Colombia',
    },
    geo: {
      '@type': 'GeoCoordinates',
      addressCountry: 'CO',
    },
    priceRange: '$350.000 - $900.000+',
    areaServed: {
      '@type': 'Country',
      name: 'Colombia',
    },
    serviceType: ['Web Design', 'Web Development', 'E-commerce', 'SEO'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios de Diseño Web',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Landing Page Premium',
            description: 'Página web de una sola página, diseño premium, optimizada para conversiones',
            priceSpecification: {
              '@type': 'PriceSpecification',
              price: '350000',
              priceCurrency: 'COP',
            },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Sitio Web Corporativo',
            description: 'Sitio web multi-página con blog, portafolio y sistema de contenido',
            priceSpecification: {
              '@type': 'PriceSpecification',
              price: '550000',
              priceCurrency: 'COP',
            },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'E-commerce Completo',
            description: 'Tienda online con carrito, pasarela de pagos y gestión de productos',
            priceSpecification: {
              '@type': 'PriceSpecification',
              price: '900000',
              priceCurrency: 'COP',
            },
          },
        },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      bestRating: '5',
      ratingCount: '20',
    },
    sameAs: [
      'https://instagram.com/solarasites',
      'https://wa.me/57XXXXXXXXXX',
    ],
  };

  return (
    <html lang="es" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        {/* Preconnect to external domains for faster resource loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans">
        <StarsBackground />
        <FloatingLogo />
        {children}
      </body>
    </html>
  );
}
