import Reveal from './Reveal';

const milestones = [
  { num: '01', label: 'Trading', active: true },
  { num: '02', label: 'E-commerce', active: false },
  { num: '03', label: 'Creadores', active: false },
  { num: '04', label: 'Nuevos proyectos', active: false },
];

export default function AboutCompany() {
  return (
    <section id="nosotros" className="relative py-28 md:py-40 bg-navy-950 overflow-hidden">
      <div className="absolute inset-0 bg-radial-glow opacity-40" />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <Reveal className="flex items-center gap-4 mb-10">
          <span className="h-px w-12 bg-gold-400/40" />
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-gold-300/80">
            Sobre RCPV Business
          </span>
        </Reveal>

        {/* Title */}
        <Reveal delay={100}>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15] text-balance max-w-3xl">
            Una marca. <span className="text-gradient-gold">Diferentes caminos.</span>
          </h2>
        </Reveal>

        {/* Body */}
        <Reveal delay={200}>
          <p className="mt-10 text-lg text-slate-400 leading-relaxed font-light max-w-3xl">
            RCPV BUSINESS está construyendo un ecosistema alrededor de los
            negocios online. Cada área responde a una forma diferente de crear
            valor, pero todas comparten una misma filosofía: construir negocios
            con visión de largo plazo.
          </p>
        </Reveal>

        {/* Roadmap */}
        <div className="mt-24">
          <Reveal delay={100}>
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-gold-300/60 mb-12">
              Roadmap
            </p>
          </Reveal>

          {/* Timeline */}
          <div className="relative">
            {/* Horizontal line */}
            <div className="absolute top-6 left-0 right-0 h-px bg-gradient-to-r from-gold-400/30 via-white/[0.08] to-transparent hidden md:block" />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
              {milestones.map((m, i) => (
                <Reveal key={m.num} delay={i * 150} as="div">
                  <div className="relative flex flex-col items-start md:items-center text-center">
                    {/* Dot */}
                    <div
                      className={`relative z-10 w-3 h-3 rounded-full mb-6 ${
                        m.active
                          ? 'bg-gold-400 shadow-[0_0_12px_rgba(201,169,78,0.4)]'
                          : 'bg-navy-600 border border-white/15'
                      }`}
                    />

                    {/* Number */}
                    <span
                      className={`font-display text-3xl font-bold mb-2 ${
                        m.active ? 'text-gold-200' : 'text-slate-600'
                      }`}
                    >
                      {m.num}
                    </span>

                    {/* Label */}
                    <span
                      className={`text-sm font-medium tracking-wide ${
                        m.active ? 'text-white' : 'text-slate-500'
                      }`}
                    >
                      {m.label}
                    </span>

                    {/* Status pill */}
                    <span
                      className={`mt-3 text-[10px] font-semibold tracking-[0.15em] uppercase ${
                        m.active ? 'text-gold-300/80' : 'text-slate-600'
                      }`}
                    >
                      {m.active ? 'En desarrollo' : i === 3 ? 'Futuro' : 'Planificado'}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
