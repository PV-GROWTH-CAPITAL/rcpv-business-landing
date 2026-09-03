import { ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal';

const pillars = [
  {
    num: '01',
    title: 'Operativa',
    description: 'Desarrollo y seguimiento de la operativa de trading.',
    href: '#',
  },
  {
    num: '02',
    title: 'Bitácora',
    description: 'Registro, análisis y seguimiento de la evolución de cada operación.',
    href: 'https://bitacora.rcpvbusiness.com',
  },
  {
    num: '03',
    title: 'Fiscalidad',
    description: 'Planificación y organización fiscal relacionada con la actividad de trading.',
    href: 'https://fiscalidadtrading.rcpvbusiness.com',
  },
  {
    num: '04',
    title: 'Mentalidad',
    description: 'Trabajo sobre disciplina, gestión emocional y toma de decisiones.',
    href: 'https://mentalidadtrading.rcpvbusiness.com',
  },
];

export default function TradingEcosystem() {
  return (
    <section id="ecosistema" className="relative py-28 md:py-40 bg-navy-950 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <Reveal className="flex items-center gap-4 mb-6">
            <span className="h-px w-12 bg-gold-400/40" />
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-gold-300/80">
              Ecosistema Trading
            </span>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight text-balance">
              Trading es más que operar
            </h2>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-6 text-lg text-slate-400 font-light max-w-2xl">
              Construir una actividad sostenible alrededor del trading requiere
              mucho más que encontrar una estrategia.
            </p>
          </Reveal>
        </div>

        {/* Pillars grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] border border-white/[0.06] rounded-sm overflow-hidden">
          {pillars.map((p, i) => (
            <Reveal key={p.num} delay={i * 100} as="div">
              <a
                href={p.href}
                className="group block h-full p-8 lg:p-10 bg-navy-900 hover:bg-navy-800/80 transition-colors duration-500 relative"
              >
                {/* Number */}
                <span className="font-display text-2xl font-bold text-gold-300/50 group-hover:text-gold-300 transition-colors duration-500">
                  {p.num}
                </span>

                {/* Title */}
                <h3 className="mt-6 font-display text-xl md:text-2xl font-bold text-white group-hover:text-gold-100 transition-colors duration-500">
                  {p.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm text-slate-400 leading-relaxed font-light">
                  {p.description}
                </p>

                {/* External link icon */}
                <ArrowUpRight
                  size={18}
                  className="mt-8 text-slate-600 group-hover:text-gold-300 transition-colors duration-500"
                />

                {/* Bottom gold accent on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gold-400/0 group-hover:bg-gold-400/30 transition-all duration-500" />
              </a>
            </Reveal>
          ))}
        </div>

        {/* Note */}
        <Reveal delay={400}>
          <p className="mt-10 text-xs text-slate-600 font-light tracking-wide">
            Cada pilar está diseñado para evolucionar como una plataforma
            independiente dentro del ecosistema RCPV BUSINESS.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
