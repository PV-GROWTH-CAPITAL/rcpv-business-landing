import { ArrowRight } from 'lucide-react';
import Reveal from './Reveal';

export default function CTA() {
  return (
    <section
      id="contacto"
      className="relative py-28 md:py-40 bg-navy-900 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-hero-glow opacity-60" />
      <div className="absolute inset-0 bg-grid opacity-15" />

      {/* Decorative border frame */}
      <div className="absolute inset-6 md:inset-12 border border-gold-400/10 rounded-sm pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <Reveal>
          <div className="flex items-center justify-center gap-4 mb-10">
            <span className="h-px w-10 bg-gold-400/40" />
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-gold-300/80">
              RCPV Business
            </span>
            <span className="h-px w-10 bg-gold-400/40" />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15] text-balance">
            Tu negocio es el medio.
            <br />
            <span className="text-gradient-gold">Tu vida es el objetivo.</span>
          </h2>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-8 text-lg text-slate-400 font-light max-w-xl mx-auto">
            Descubre lo que estamos construyendo en RCPV BUSINESS.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#areas"
              className="group inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-navy-950 bg-gradient-gold px-8 py-3.5 rounded-sm hover:shadow-[0_0_30px_rgba(201,169,78,0.25)] transition-all duration-300 hover:scale-[1.02]"
            >
              EXPLORAR RCPV BUSINESS
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </a>
            <a
              href="mailto:contacto@rcpvbusiness.com"
              className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-slate-200 border border-white/15 px-8 py-3.5 rounded-sm hover:border-gold-400/40 hover:text-gold-200 transition-all duration-300"
            >
              CONTACTAR
            </a>
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/15 to-transparent" />
    </section>
  );
}
