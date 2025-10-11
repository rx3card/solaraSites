import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { StarsBackground } from "@/components/StarsBackground";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SolaraSites — Diseño y desarrollo de páginas web en Colombia",
  description: "SolaraSites: Creamos páginas web minimalistas, rápidas y profesionales que convierten visitantes en clientes. Diseño web, landing pages, sitios corporativos y e-commerce en Colombia.",
  keywords: "diseño web Colombia, páginas web profesionales, landing page, desarrollo web, e-commerce, SEO técnico, páginas corporativas",
  authors: [{ name: "SolaraSites" }],
  creator: "SolaraSites",
  publisher: "SolaraSites",
  robots: "index, follow",
  alternates: {
    canonical: "https://solarasites.vercel.app/",
  },
  openGraph: {
    title: "SolaraSites — Webs que eclipsan a las demás",
    description: "Diseño y desarrollo de páginas web premium, minimalistas y efectivas. Haz que tu negocio brille online con SolaraSites.",
    url: "https://solarasites.vercel.app/",
    siteName: "SolaraSites",
    images: [
      {
        url: "https://solarasites.vercel.app/logoV2.png",
        alt: "Logotipo de SolaraSites",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SolaraSites — Webs que eclipsan a las demás",
    description: "Diseño web minimalista y profesional que convierte visitantes en clientes.",
    images: ["https://solarasites.vercel.app/logoV2.png"],
  },
  icons: {
    icon: "/logoV2.png",
    apple: "/logoV2.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans">
        <StarsBackground />
        {children}
      </body>
    </html>
  );
}
