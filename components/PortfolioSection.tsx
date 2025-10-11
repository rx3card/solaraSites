import Image from "next/image";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Piquitours y eventos",
    subtitle: "Landing + catálogo dinámico",
    image: "/landing.png",
    badge: "✅ EN VIVO",
    badgeColor: "bg-solaraOrange/20 border-solaraOrange/40 text-solaraOrange",
    metric: "+40%",
    metricLabel: "Incremento en pedidos online",
    metricGradient: "from-solaraOrange to-solaraGold",
    technologies: "React · Tailwind",
    link: "https://www.piquitoursyeventos.com/",
    hoverBorder: "hover:border-solaraOrange/40",
    hoverBg: "group-hover:from-solaraOrange/10 group-hover:to-solaraGold/10",
  },
  {
    id: 2,
    title: "Tienda Online Premium",
    subtitle: "E-commerce con Pagos Integrados",
    image: "/premium-store.png",
    badge: "📊 DEMO",
    badgeColor: "bg-solaraBlue/20 border-solaraBlue/40 text-solaraBlue",
    metric: "SEO 95+",
    metricLabel: "Optimizado para buscadores",
    metricGradient: "from-solaraBlue to-solaraPurple",
    technologies: "Next.js · Stripe",
    hoverBorder: "hover:border-solaraBlue/40",
    hoverBg: "group-hover:from-solaraBlue/10 group-hover:to-solaraPurple/10",
  },
  {
    id: 3,
    title: "Gimnasio Premium Gym",
    subtitle: "Web corporativa + reservas",
    image: "/gimnasio-premium-gym.png",
    badge: "🏋️ DEMO",
    badgeColor: "bg-solaraPurple/20 border-solaraPurple/40 text-solaraPurple",
    metric: "Reservas Online",
    metricLabel: "Sistema integrado",
    metricGradient: "from-solaraPurple to-solaraPink",
    technologies: "React · Firebase",
    hoverBorder: "hover:border-solaraPurple/40",
    hoverBg: "group-hover:from-solaraPurple/10 group-hover:to-solaraPink/10",
  },
];

export const PortfolioSection = () => {
  return (
    <section id="portfolio" className="relative py-24 overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-solaraPurple/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-solaraPurple/20 to-solaraPink/20 border border-solaraPurple/30 mb-6">
            <span className="text-sm font-semibold bg-gradient-to-r from-solaraPurple to-solaraPink bg-clip-text text-transparent">
              🎨 NUESTRO TRABAJO
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-white mb-4">
            Proyectos que{" "}
            <span className="bg-gradient-to-r from-solaraPurple via-solaraPink to-solaraOrange bg-clip-text text-transparent">
              generan resultados
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Cada proyecto es una historia de éxito. Descubre cómo hemos ayudado a nuestros clientes a
            crecer en el mundo digital.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className={`group relative bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/[0.08] rounded-2xl overflow-hidden ${project.hoverBorder} transition-all duration-300 hover:-translate-y-2`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br from-solaraOrange/0 to-solaraGold/0 ${project.hoverBg} transition-all duration-300`}
              ></div>

              {/* Imagen */}
              <div className="relative h-56 overflow-hidden bg-gradient-to-t from-[#0a0a0b] via-transparent to-transparent">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <span
                    className={`px-3 py-1 rounded-full ${project.badgeColor} border backdrop-blur-md text-xs font-bold`}
                  >
                    {project.badge}
                  </span>
                </div>
              </div>

              {/* Contenido */}
              <div className="relative z-10 p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                    <p className="text-gray-400 text-sm">{project.subtitle}</p>
                  </div>
                </div>

                {/* Métrica destacada */}
                <div
                  className={`bg-gradient-to-r from-solaraOrange/10 to-solaraGold/10 border border-solaraOrange/20 rounded-xl p-4 mb-4`}
                >
                  <div
                    className={`text-2xl font-bold bg-gradient-to-r ${project.metricGradient} bg-clip-text text-transparent`}
                  >
                    {project.metric}
                  </div>
                  <p className="text-xs text-gray-400">{project.metricLabel}</p>
                </div>

                {/* Tecnologías */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="text-xs text-gray-300">{project.technologies}</div>
                </div>

                {/* Botón */}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-solaraOrange hover:gap-3 transition-all"
                  >
                    Ver proyecto en vivo
                    <ArrowRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
