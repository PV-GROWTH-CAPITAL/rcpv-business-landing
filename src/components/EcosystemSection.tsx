import { ArrowUpRight, Lock } from 'lucide-react';
import type { ReactNode } from 'react';
import Reveal from './Reveal';

export interface Pillar {
  num: string;
  title: string;
  description: string;
  href?: string;
  comingSoon?: boolean;
}

interface EcosystemSectionProps {
  id: string;
  eyebrow: string;
  title: ReactNode;
  subtitle: ReactNode;
  pillars: Pillar[];
  note?: ReactNode;
  topDivider?: boolean;
}

// Clases literales para que Tailwind las detecte en el build.
const gridCols: Record<number, string> = {
  1: '',
  2: 'sm:grid-cols-2',
  3: 'md:grid-cols-3',
  4: 'sm:grid-cols-2 lg:grid-cols-4',
};

export default function EcosystemSection({
  id,
  eyebrow,
  title,
  subtitle,
  pillars,
  note,
  topDivider = false,
}: EcosystemSectionProps) {
  return (
    <section id={id} className="relative py-28 md:py-40 bg-navy-950 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      {topDivider && (
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/20 to-transparent" />
      )}

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <Reveal className="flex items-center gap-4 mb-6">
            <span className="h-px w-12 bg-gold-400/40" />
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-gold-300/80">
              {eyebrow}
            </span>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight text-balance">
              {title}
            </h2>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-6 text-lg text-slate-400 font-light max-w-2xl">{subtitle}</p>
          </Reveal>
        </div>

        {/* Pillars grid */}
        <div
          className={`grid ${gridCols[pillars.length] ?? gridCols[4]} gap-px bg-white/[0.06] border border-white/[0.06] rounded-sm overflow-hidden`}
        >
          {pillars.map((p, i) => (
            <Reveal key={p.num} delay={i * 100} as="div">
              {p.comingSoon || !p.href ? (
                <div className="block h-full p-8 lg:p-10 bg-navy-900 relative cursor-not-allowed">
                  {/* Number */}
                  <span className="font-display text-2xl font-bold text-slate-600">{p.num}</span>

                  {/* Title */}
                  <h3 className="mt-6 font-display text-xl md:text-2xl font-bold text-slate-400">
                    {p.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm text-slate-500 leading-relaxed font-light">
                    {p.description}
                  </p>

                  {/* Coming soon */}
                  <span className="mt-8 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.2em] uppercase text-slate-500">
                    <Lock size={13} />
                    Próximamente
                  </span>
                </div>
              ) : (
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
              )}
            </Reveal>
          ))}
        </div>

        {/* Note */}
        {note && (
          <Reveal delay={400}>
            <p className="mt-10 text-xs text-slate-600 font-light tracking-wide">{note}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
