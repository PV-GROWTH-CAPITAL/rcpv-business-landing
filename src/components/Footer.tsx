import { Instagram, Youtube } from 'lucide-react';

interface FooterLink {
  label: string;
  href?: string;
  comingSoon?: boolean;
}

const DESARROLLO = 'https://desarrollo.rcpvbusiness.com';

const columns: { title: string; links: FooterLink[] }[] = [
  {
    title: 'Empresa',
    links: [
      { label: 'Inicio', href: '#inicio' },
      { label: 'Nosotros', href: '#nosotros' },
      { label: 'Contacto', href: '#contacto' },
    ],
  },
  {
    title: 'Áreas',
    links: [
      { label: 'Trading', href: '#ecosistema' },
      { label: 'Desarrollo personal', href: DESARROLLO },
      { label: 'E-commerce', comingSoon: true },
      { label: 'Creadores', comingSoon: true },
      { label: 'Nuevos proyectos', comingSoon: true },
    ],
  },
  {
    title: 'Trading',
    links: [
      { label: 'Bitácora', href: 'https://bitacora.rcpvbusiness.com' },
      { label: 'Fiscalidad', href: 'https://fiscalidadtrading.rcpvbusiness.com' },
      { label: 'Mentalidad', href: 'https://mentalidadtrading.rcpvbusiness.com' },
    ],
  },
  {
    title: 'Desarrollo personal',
    links: [
      { label: 'Series', href: `${DESARROLLO}/series` },
      { label: 'Mentalidad', href: `${DESARROLLO}/mentalidad` },
      { label: 'Mi proceso', href: `${DESARROLLO}/mi-proceso` },
      { label: 'Reto de hábitos', comingSoon: true },
    ],
  },
];

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/rcpvbusiness?stkn=amIwZ2N6ZGs2Mmx1&utm_source=qr',
    icon: <Instagram size={15} strokeWidth={1.8} />,
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@rcpvbusiness',
    icon: (
      <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true" fill="currentColor">
        <path d="M15.5 3c.3 2.1 1.5 3.5 3.5 3.7v3.1a8.3 8.3 0 0 1-3.5-1v6.5a5.7 5.7 0 1 1-4.9-5.7v3.2a2.5 2.5 0 1 0 1.8 2.4V3h3.1Z" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@rcpvbusiness',
    icon: <Youtube size={16} strokeWidth={1.8} />,
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-navy-950 border-t border-white/[0.06] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 md:py-20">
        <div className="grid lg:grid-cols-[1.5fr_2fr] gap-12 lg:gap-20">
          <div className="max-w-sm">
            <div className="flex items-center gap-2 mb-6">
              <span className="font-display text-xl font-semibold tracking-[0.2em] text-white">
                RCPV
              </span>
              <span className="font-sans text-xs font-medium tracking-[0.3em] text-gold-300/80 uppercase">
                Business
              </span>
            </div>

            <p className="font-display text-lg text-slate-300 italic mb-8">
              Construyendo negocios. Diseñando libertad.
            </p>

            <div className="flex items-center gap-3">
              <span className="text-xs text-slate-600 tracking-wide">Redes sociales</span>
              <div className="flex gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Visitar ${social.label}`}
                    className="w-8 h-8 rounded-sm border border-white/[0.08] flex items-center justify-center text-slate-500 hover:text-gold-200 hover:border-gold-400/40 transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="text-xs font-semibold tracking-[0.25em] uppercase text-gold-300/70 mb-5">
                  {col.title}
                </h4>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      {link.comingSoon || !link.href ? (
                        <span className="text-sm text-slate-600 font-light cursor-default">
                          {link.label}
                          <span className="block mt-0.5 text-[10px] tracking-[0.15em] uppercase text-slate-700">
                            Próximamente
                          </span>
                        </span>
                      ) : (
                        <a
                          href={link.href}
                          className="text-sm text-slate-400 hover:text-gold-200 transition-colors duration-300 font-light"
                        >
                          {link.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/[0.05] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600 tracking-wide">
            © 2026 RCPV BUSINESS. Todos los derechos reservados.
          </p>
          <p className="text-xs text-slate-700 tracking-wide">
            Construyendo negocios con visión de largo plazo.
          </p>
        </div>
      </div>
    </footer>
  );
}
