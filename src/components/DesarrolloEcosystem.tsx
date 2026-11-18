import EcosystemSection, { type Pillar } from './EcosystemSection';

// Slugs tomados de RCPV-CONTENIDO/src/config/sitios.ts (sitio "desarrollo").
const BASE = 'https://desarrollo.rcpvbusiness.com';

const pillars: Pillar[] = [
  {
    num: '01',
    title: 'Series',
    description: 'Recorridos en varios episodios, para ver en orden.',
    href: `${BASE}/series`,
  },
  {
    num: '02',
    title: 'Mentalidad',
    description: 'Ideas para pensar con más claridad y actuar con más calma.',
    href: `${BASE}/mentalidad`,
  },
  {
    num: '03',
    title: 'Mi proceso',
    description: 'Lo que estoy haciendo, lo que funciona y lo que no.',
    href: `${BASE}/mi-proceso`,
  },
  {
    num: '04',
    title: 'Reto de hábitos',
    description: 'Un reto guiado para construir hábitos que duren.',
    comingSoon: true,
  },
];

export default function DesarrolloEcosystem() {
  return (
    <EcosystemSection
      id="desarrollo"
      eyebrow="Ecosistema Desarrollo personal"
      title="Lo que construyes cuando nadie mira"
      subtitle="Series, reflexiones y procesos reales de desarrollo personal: disciplina, mentalidad y hábitos."
      pillars={pillars}
      topDivider
    />
  );
}
