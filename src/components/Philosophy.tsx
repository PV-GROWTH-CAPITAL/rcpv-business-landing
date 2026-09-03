import Reveal from './Reveal';

const concepts = [
  {
    title: 'Libertad',
    description: 'Más control sobre cómo utilizamos nuestro tiempo.',
  },
  {
    title: 'Control',
    description: 'Tomar decisiones con información, estructura y criterio.',
  },
  {
    title: 'Evolución',
    description: 'Construir, aprender y mejorar continuamente.',
  },
];

export default function Philosophy() {
  return (
    <section className="relative py-28 md:py-40 bg-navy-900 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/15 to-transparent" />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <Reveal className="flex items-center justify-center gap-4 mb-10">
          <span className="h-px w-10 bg-gold-400/40" />
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-gold-300/80">
            Nuestra Filosofía
          </span>
          <span className="h-px w-10 bg-gold-400/40" />
        </Reveal>

        {/* Main statement */}
        <Reveal delay={100}>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15] text-center text-balance">
            Negocios para una vida mejor
          </h2>
        </Reveal>

        {/* Body */}
        <Reveal delay={200}>
          <div className="mt-10 max-w-2xl mx-auto text-center">
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-light">
              El objetivo no es simplemente generar ingresos.
            </p>
            <p className="mt-4 text-lg md:text-xl text-slate-400 leading-relaxed font-light">
              Es construir sistemas que permitan ganar control sobre nuestro
              tiempo, nuestras decisiones y nuestro futuro.
            </p>
          </div>
        </Reveal>

        {/* Gold divider */}
        <Reveal delay={300}>
          <div className="gold-divider my-20 max-w-xs mx-auto" />
        </Reveal>

        {/* Concepts */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {concepts.map((c, i) => (
            <Reveal key={c.title} delay={i * 150} as="div">
              <div className="text-center group">
                {/* Decorative ring */}
                <div className="relative inline-flex items-center justify-center mb-6">
                  <div className="w-16 h-16 rounded-full border border-gold-400/20 group-hover:border-gold-400/40 transition-colors duration-500" />
                  <div className="absolute w-2 h-2 rounded-full bg-gold-400/50 group-hover:bg-gold-300 transition-colors duration-500" />
                </div>

                <h3 className="font-display text-xl md:text-2xl font-bold text-gold-100 mb-3 tracking-wide">
                  {c.title}
                </h3>
                <p className="text-sm md:text-base text-slate-400 leading-relaxed font-light max-w-xs mx-auto">
                  {c.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/10 to-transparent" />
    </section>
  );
}
