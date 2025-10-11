import Image from "next/image";
import { Check, Rocket } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Landing Page",
    subtitle: "Tu vitrina digital lista para vender",
    image: "/images/services/Landing_Basic_WebSite.png",
    badge: "⚡ 3-5 DÍAS",
    badgeColor: "from-solaraOrange/90 to-solaraGold/90",
    badgeTextColor: "text-black",
    price: "$350K",
    priceGradient: "from-solaraOrange to-solaraGold",
    buttonColor: "from-solaraOrange to-solaraGold",
    buttonText: "text-black",
    hoverBorder: "hover:border-solaraOrange/50",
    hoverShadow: "hover:shadow-solaraOrange/20",
    checkColor: "text-solaraGold",
    features: ["Diseño premium", "SEO optimizado", "Responsive"],
    whatsappText: "Hola,%20quiero%20una%20Landing%20Page",
  },
  {
    id: 2,
    title: "Web Corporativa",
    subtitle: "Sitio completo con blog y CMS",
    image: "/images/services/Corporate_Website.png",
    badge: "⭐ POPULAR",
    badgeColor: "from-solaraBlue/90 to-solaraPurple/90",
    badgeTextColor: "text-white",
    price: "$550K",
    priceGradient: "from-solaraBlue to-solaraPurple",
    buttonColor: "from-solaraBlue to-solaraPurple",
    buttonText: "text-white",
    hoverBorder: "hover:border-solaraBlue/50",
    hoverShadow: "hover:shadow-solaraBlue/20",
    checkColor: "text-solaraBlue",
    features: ["Múltiples páginas", "Blog + CMS", "SEO avanzado"],
    whatsappText: "Hola,%20quiero%20una%20Web%20Corporativa",
  },
  {
    id: 3,
    title: "E-commerce / App",
    subtitle: "Tienda online o app a medida",
    image: "/images/services/App_Ecommerce.png",
    badge: "🚀 ENTERPRISE",
    badgeColor: "from-solaraPurple/90 to-solaraPink/90",
    badgeTextColor: "text-white",
    price: "$900K+",
    priceLabel: "Variable",
    priceGradient: "from-solaraPurple to-solaraPink",
    buttonColor: "from-solaraPurple to-solaraPink",
    buttonText: "text-white",
    hoverBorder: "hover:border-solaraPurple/50",
    hoverShadow: "hover:shadow-solaraPurple/20",
    checkColor: "text-solaraPurple",
    features: ["Usuarios y roles", "Pagos integrados", "Dashboard admin"],
    whatsappText: "Hola,%20quiero%20un%20E-commerce%20o%20App",
    buttonLabel: "Consultar proyecto",
  },
];

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
        {/* Header de sección */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-solaraOrange/20 to-solaraBlue/20 border border-solaraOrange/30 mb-4">
            <Rocket className="w-4 h-4 text-solaraOrange" />
            <span className="text-xs font-bold bg-gradient-to-r from-solaraOrange to-solaraGold bg-clip-text text-transparent">
              🚀 SOLUCIONES QUE CONVIERTEN
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl text-white mb-3 leading-tight">
            Tu negocio merece{" "}
            <span className="bg-gradient-to-r from-solaraOrange via-solaraGold to-solaraBlue bg-clip-text text-transparent">
              destacar en línea
            </span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Diseño premium, velocidad extrema y resultados medibles.{" "}
            <strong className="text-white">Todo en un solo lugar.</strong>
          </p>
        </div>

        {/* Grid de servicios - Bento Box Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <article
              key={service.id}
              className={`group relative bg-gradient-to-br from-white/[0.05] to-white/[0.01] border border-white/[0.08] rounded-2xl overflow-hidden ${service.hoverBorder} hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl ${service.hoverShadow}`}
            >
              {/* Imagen arriba */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-gradient-to-br from-[#0b0b0d] to-[#121214]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                {/* Badge en la imagen */}
                <div
                  className={`absolute top-4 left-4 px-3 py-1.5 rounded-full bg-gradient-to-r ${service.badgeColor} backdrop-blur-md`}
                >
                  <span className={`text-xs font-bold ${service.badgeTextColor}`}>
                    {service.badge}
                  </span>
                </div>
              </div>

              {/* Contenido abajo */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-2xl font-display text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{service.subtitle}</p>
                </div>

                <div className="space-y-2">
                  {service.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-sm text-gray-300"
                    >
                      <Check className={`w-4 h-4 ${service.checkColor}`} />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/10">
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={`text-3xl font-bold bg-gradient-to-r ${service.priceGradient} bg-clip-text text-transparent`}
                    >
                      {service.price}
                    </div>
                    <span className="text-xs text-gray-500">
                      {service.priceLabel || "Pago único"}
                    </span>
                  </div>
                  <a
                    href={`https://wa.me/+573184961233?text=${service.whatsappText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block text-center px-4 py-2.5 rounded-xl bg-gradient-to-r ${service.buttonColor} ${service.buttonText} font-bold hover:scale-105 transition-all text-sm`}
                  >
                    {service.buttonLabel || "Comenzar ahora"}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
