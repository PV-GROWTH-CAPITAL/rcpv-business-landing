const columns = [
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
      { label: 'E-commerce', href: '#' },
      { label: 'Creadores', href: '#' },
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
];

export default function Footer() {
  return (
    <footer className="relative bg-navy-950 border-t border-white/[0.06] overflow-hidden">
      {/* Top gold accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 md:py-20">
        <div className="grid lg:grid-cols-[1.5fr_2fr] gap-12 lg:gap-20">
          {/* Brand side */}
          <div className="max-w-sm">
            {/* Logo */}
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

            {/* Social placeholder */}
            <div className="flex items-center gap-3">
              <span className="text-xs text-slate-600 tracking-wide">Redes sociales</span>
              <div className="flex gap-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-sm border border-white/[0.08] flex items-center justify-center text-slate-600 text-xs"
                  >
                    {/* placeholder icon */}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="text-xs font-semibold tracking-[0.25em] uppercase text-gold-300/70 mb-5">
                  {col.title}
                </h4>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-slate-400 hover:text-gold-200 transition-colors duration-300 font-light"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
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
