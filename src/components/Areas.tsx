import { ArrowRight, Lock } from 'lucide-react';
import Reveal from './Reveal';

const areas = [
  {
    id: 'trading',
    name: 'Trading',
    description:
      'Desarrollo, gestión y herramientas alrededor del trading y la operativa en mercados financieros.',
    label: 'Área Activa',
    active: true,
    href: '#ecosistema',
  },
  {
    id: 'ecommerce',
    name: 'E-commerce',
    description:
      'Construcción y desarrollo de negocios basados en comercio electrónico.',
    label: 'Próximamente',
    active: false,
    href: '#',
  },
  {
    id: 'habitos-salud',
    name: 'Hábitos y salud',
    description:
      'Seguimiento de hábitos y salud aplicado a emprendedores, para sostener resultados sin quemarte.',
    label: 'Área Activa',
    active: true,
    href: 'https://habitosysalud.rcpvbusiness.com',
  },
];

export default function Areas() {
  return (
    <section id="areas" className="relative py-28 md:py-40 bg-navy-900 overflow-hidden">
      {/* Subtle top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <Reveal className="flex items-center justify-center gap-4 mb-6">
            <span className="h-px w-10 bg-gold-400/40" />
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-gold-300/80">
              Nuestras Áreas
            </span>
            <span className="h-px w-10 bg-gold-400/40" />
          </Reveal>

          <Reveal delay={100}>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight text-balance">
              Un ecosistema de negocios online
            </h2>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-6 text-lg text-slate-400 font-light">
              Distintas vías. Una misma visión.
            </p>
          </Reveal>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {areas.map((area, i) => (
            <Reveal key={area.id} delay={i * 150} as="article">
              <div
                className={`group relative h-full p-8 lg:p-10 rounded-sm border transition-all duration-500 ${
                  area.active
                    ? 'bg-navy-800/60 border-gold-400/20 hover:border-gold-400/40 hover:shadow-gold-glow'
                    : 'bg-navy-800/30 border-white/[0.06] hover:border-white/[0.12]'
                }`}
              >
                {/* Number */}
                <span className="font-display text-5xl font-bold text-white/[0.06] absolute top-6 right-8 select-none">
                  0{i + 1}
                </span>

                {/* Label badge */}
                <div className="flex items-center gap-2 mb-6">
                  <span
                    className={`text-[10px] font-semibold tracking-[0.2em] uppercase px-3 py-1 rounded-sm border ${
                      area.active
                        ? 'text-gold-200 border-gold-400/30 bg-gold-400/5'
                        : 'text-slate-500 border-white/10'
                    }`}
                  >
                    {area.label}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
                  {area.name}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base text-slate-400 leading-relaxed font-light mb-10">
                  {area.description}
                </p>

                {/* Button */}
                {area.active ? (
                  <a
                    href={area.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-gold-200 hover:text-gold-100 transition-colors duration-300 group/btn"
                  >
                    EXPLORAR {area.name.toUpperCase()}
                    <ArrowRight
                      size={15}
                      className="group-hover/btn:translate-x-1 transition-transform duration-300"
                    />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-slate-500 cursor-not-allowed">
                    <Lock size={14} />
                    PRÓXIMAMENTE
                  </span>
                )}

                {/* Bottom gold line for active card */}
                {area.active && (
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/10 to-transparent" />
    </section>
  );
}
