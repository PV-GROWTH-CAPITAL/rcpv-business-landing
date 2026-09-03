import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-950"
    >
      {/* Layered abstract background */}
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 bg-hero-glow" />

      {/* Decorative geometric lines */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(201,169,78,0)" />
              <stop offset="50%" stopColor="rgba(201,169,78,0.12)" />
              <stop offset="100%" stopColor="rgba(201,169,78,0)" />
            </linearGradient>
          </defs>
          <line x1="0" y1="100%" x2="100%" y2="0" stroke="url(#lineGrad)" strokeWidth="1" />
          <line x1="20%" y1="0" x2="80%" y2="100%" stroke="url(#lineGrad)" strokeWidth="1" />
          <line x1="0" y1="50%" x2="100%" y2="30%" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
        </svg>

        {/* Subtle floating circles */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full border border-gold-400/[0.04]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full border border-gold-400/[0.06]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/[0.02]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-24 pb-16">
        {/* Top label */}
        <div
          className="flex items-center justify-center gap-3 mb-8 reveal is-visible"
          style={{ transitionDelay: '100ms' }}
        >
          <span className="h-px w-10 bg-gold-400/40" />
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-gold-300/90">
            Ecosistema de Negocios Online
          </span>
          <span className="h-px w-10 bg-gold-400/40" />
        </div>

        {/* Main headline */}
        <h1
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-white text-balance reveal is-visible"
          style={{ transitionDelay: '200ms' }}
        >
          Construye el negocio.
          <br />
          <span className="text-gradient-gold">Diseña tu vida.</span>
        </h1>

        {/* Subtitle */}
        <p
          className="mt-8 text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed font-light reveal is-visible"
          style={{ transitionDelay: '350ms' }}
        >
          RCPV BUSINESS nace para ayudar a quienes construyen su futuro a través
          de negocios online.
        </p>

        {/* Tag line */}
        <p
          className="mt-5 text-sm tracking-[0.15em] uppercase text-gold-300/70 reveal is-visible"
          style={{ transitionDelay: '450ms' }}
        >
          Trading · E-commerce · Creadores
        </p>

        {/* CTAs */}
        <div
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 reveal is-visible"
          style={{ transitionDelay: '550ms' }}
        >
          <a
            href="#areas"
            className="group inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-navy-950 bg-gradient-gold px-8 py-3.5 rounded-sm hover:shadow-[0_0_30px_rgba(201,169,78,0.25)] transition-all duration-300 hover:scale-[1.02]"
          >
            EXPLORAR RCPV BUSINESS
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          <a
            href="#nosotros"
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-slate-200 border border-white/15 px-8 py-3.5 rounded-sm hover:border-gold-400/40 hover:text-gold-200 transition-all duration-300"
          >
            CONOCER LA EMPRESA
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-950 to-transparent pointer-events-none" />
    </section>
  );
}
