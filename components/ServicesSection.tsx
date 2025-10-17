"use client";

import Image from "next/image";
import { Check, Rocket, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const services = [
  {
    id: 1,
    title: "Landing Page",
    subtitle: "Tu vitrina digital lista para vender",
    images: [
      "/services/landing_1.webp",
      "/services/landing_2.webp",
      "/services/landing_3.webp",
    ],
    badge: "3-5 días",
    badgeColor: "bg-[#0071e3]/15 border-[#0071e3]/40",
    badgeTextColor: "text-[#2196F3]",
    price: "$200K",
    priceColor: "from-[#0071e3] to-[#2196F3]",
    hoverBorder: "hover:border-[#0071e3]/40",
    hoverShadow: "hover:shadow-[#0071e3]/20",
    checkColor: "text-[#0071e3]",
    cardBg: "from-[#0071e3]/5 to-transparent",
    features: ["Diseño premium", "SEO optimizado", "Responsive"],
    whatsappText: "Hola,%20quiero%20una%20Landing%20Page",
  },
  {
    id: 2,
    title: "Web Corporativa",
    subtitle: "Sitio completo con blog y CMS",
    images: [
      "/services/corporate_1.webp",
      "/services/corporate_2.webp",
      "/services/corporate_3.webp",
    ],
    badge: "Más popular",
    badgeColor: "bg-gradient-to-r from-[#7C3AED]/15 to-[#EC4899]/15 border-[#7C3AED]/40",
    badgeTextColor: "text-[#A78BFA]",
    price: "$550K",
    priceColor: "from-[#7C3AED] via-[#A78BFA] to-[#EC4899]",
    hoverBorder: "hover:border-[#7C3AED]/40",
    hoverShadow: "hover:shadow-[#7C3AED]/20",
    checkColor: "text-[#A78BFA]",
    cardBg: "from-[#7C3AED]/5 to-[#EC4899]/5",
    features: ["Múltiples páginas", "Blog + CMS", "SEO avanzado"],
    whatsappText: "Hola,%20quiero%20una%20Web%20Corporativa",
    isPopular: true,
  },
  {
    id: 3,
    title: "E-commerce / App",
    subtitle: "Tienda online o app a medida",
    images: [
      "/services/app_1.webp",
      "/services/app_2.webp",
      "/services/app_3.webp",
    ],
    badge: "Enterprise",
    badgeColor: "bg-gradient-to-r from-[#06B6D4]/15 to-[#10B981]/15 border-[#06B6D4]/40",
    badgeTextColor: "text-[#06B6D4]",
    price: "$900K+",
    priceLabel: "Variable",
    priceColor: "from-[#06B6D4] via-[#0EA5E9] to-[#10B981]",
    hoverBorder: "hover:border-[#06B6D4]/40",
    hoverShadow: "hover:shadow-[#06B6D4]/20",
    checkColor: "text-[#06B6D4]",
    cardBg: "from-[#06B6D4]/5 to-[#10B981]/5",
    features: ["Usuarios y roles", "Pagos integrados", "Dashboard admin"],
    whatsappText: "Hola,%20quiero%20un%20E-commerce%20o%20App",
    buttonLabel: "Consultar",
  },
];

const ServiceCard = ({ service }: { service: typeof services[0] }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % service.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + service.images.length) % service.images.length
    );
  };

  return (
    <article
      className={`group relative bg-gradient-to-br ${
        service.cardBg
      } border border-white/[0.08] rounded-2xl overflow-hidden ${
        service.hoverBorder
      } hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl ${
        service.hoverShadow
      } ${service.isPopular ? "ring-2 ring-[#7C3AED]/30" : ""}`}
    >
      {/* Imagen arriba con carrusel */}
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-bgCard">
        <Image
          src={service.images[currentImageIndex]}
          alt={`${service.title} - Imagen ${currentImageIndex + 1}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />

        {/* Controles de navegación */}
        <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={prevImage}
            className="bg-black/50 hover:bg-black/70 text-white rounded-full p-2 backdrop-blur-sm transition-all"
            aria-label="Imagen anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextImage}
            className="bg-black/50 hover:bg-black/70 text-white rounded-full p-2 backdrop-blur-sm transition-all"
            aria-label="Siguiente imagen"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Indicadores de imagen */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {service.images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentImageIndex
                  ? "bg-white w-6"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Ir a imagen ${index + 1}`}
            />
          ))}
        </div>

        {/* Badge minimalista */}
        <div
          className={`absolute top-4 right-4 px-3 py-1.5 rounded-full ${
            service.badgeColor
          } border backdrop-blur-xl`}
        >
          <span className={`text-xs font-semibold ${service.badgeTextColor}`}>
            {service.badge}
          </span>
        </div>
      </div>

      {/* Contenido abajo */}
      <div className="p-6 space-y-5">
        <div>
          <h3 className="text-2xl font-semibold text-white mb-2">
            {service.title}
          </h3>
          <p className="text-textSecondary text-sm">{service.subtitle}</p>
        </div>

        <div className="space-y-2.5">
          {service.features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-2.5 text-sm text-textSecondary"
            >
              <Check
                className={`w-4 h-4 ${service.checkColor} flex-shrink-0`}
              />
              {feature}
            </div>
          ))}
        </div>

        <div className="pt-4 border-t border-white/[0.06]">
          <div className="flex items-baseline justify-between mb-4">
            <div
              className={`text-3xl font-semibold bg-gradient-to-r ${
                service.priceColor
              } bg-clip-text text-transparent`}
            >
              {service.price}
            </div>
            <span className="text-xs text-gray-400">
              {service.priceLabel || "Pago único"}
            </span>
          </div>
          <a
            href={`https://wa.me/+573184961233?text=${service.whatsappText}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`block text-center px-4 py-3 rounded-full bg-gradient-to-r ${
              service.priceColor
            } text-white font-semibold hover:scale-105 hover:shadow-lg transition-all text-sm`}
          >
            {service.buttonLabel || "Solicitar"}
          </a>
        </div>
      </div>
    </article>
  );
};

export const ServicesSection = () => {
  return (
    <section id="services" className="relative py-24 overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-solaraOrange/5 to-transparent"></div>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(255, 107, 0, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(0, 153, 255, 0.08) 0%, transparent 50%)",
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header de sección minimalista */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] mb-6">
            <Rocket className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-textSecondary">
              Nuestros servicios
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-4 leading-tight font-bold">
            Soluciones{" "}
            <span 
              className="bg-gradient-to-r from-[#0071e3] via-[#7C3AED] to-[#06B6D4] bg-clip-text text-transparent"
              style={{ backgroundSize: '200% 200%' }}
            >
              profesionales
            </span>
          </h2>
          <p className="text-textSecondary text-lg md:text-xl max-w-2xl mx-auto font-light">
            Desde landing pages hasta aplicaciones complejas.{" "}
            <span className="text-white font-medium">Siempre con calidad premium.</span>
          </p>
        </div>

        {/* Grid de servicios - Bento Box Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};
