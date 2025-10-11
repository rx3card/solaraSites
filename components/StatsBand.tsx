export const StatsBand = () => {
  const stats = [
    { value: "20+", label: "Proyectos", gradient: "from-solaraOrange to-solaraGold", hoverBorder: "hover:border-solaraOrange/30" },
    { value: "7 días", label: "Entrega promedio", gradient: "from-solaraBlue to-solaraPurple", hoverBorder: "hover:border-solaraBlue/30" },
    { value: "95%", label: "Satisfacción", gradient: "from-solaraGreen to-solaraBlue", hoverBorder: "hover:border-solaraGreen/30" },
    { value: "100", label: "Lighthouse Perf", gradient: "from-solaraPurple to-solaraPink", hoverBorder: "hover:border-solaraPurple/30" },
  ];

  return (
    <section id="stats" className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`group rounded-xl bg-gradient-to-b from-white/[0.02] to-white/[0.01] border border-white/[0.03] backdrop-blur-md p-5 ${stat.hoverBorder} transition-all hover:-translate-y-1`}
          >
            <div className={`text-3xl font-extrabold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
              {stat.value}
            </div>
            <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
