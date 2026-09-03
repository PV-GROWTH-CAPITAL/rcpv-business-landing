import Reveal from './Reveal';

export default function About() {
  return (
    <section className="relative py-28 md:py-40 bg-navy-950 overflow-hidden">
      {/* Subtle backdrop */}
      <div className="absolute inset-0 bg-radial-glow opacity-50" />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-10">
        {/* Section label */}
        <Reveal className="flex items-center gap-4 mb-12">
          <span className="h-px w-12 bg-gold-400/40" />
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-gold-300/80">
            Qué es RCPV Business
          </span>
        </Reveal>

        {/* Main statement */}
        <Reveal delay={100}>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] text-white text-balance max-w-4xl">
            No construimos solo negocios.
            <br />
            <span className="text-gradient-gold">Construimos libertad.</span>
          </h2>
        </Reveal>

        {/* Gold divider */}
        <Reveal delay={200}>
          <div className="gold-divider my-14 max-w-xs" />
        </Reveal>

        {/* Body text */}
        <div className="max-w-3xl space-y-6">
          <Reveal delay={250}>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-light">
              RCPV BUSINESS es una marca empresarial creada alrededor de una idea
              sencilla: los negocios online pueden convertirse en una herramienta
              para construir una vida con más libertad, control y posibilidades.
            </p>
          </Reveal>
          <Reveal delay={350}>
            <p className="text-base md:text-lg text-slate-400 leading-relaxed font-light">
              Trabajamos alrededor de diferentes modelos de negocio digitales,
              desarrollando herramientas, servicios y sistemas destinados a
              ayudar a las personas a mejorar su forma de trabajar, gestionar y
              hacer crecer sus negocios.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
