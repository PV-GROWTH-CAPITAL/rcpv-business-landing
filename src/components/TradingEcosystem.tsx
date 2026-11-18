import EcosystemSection, { type Pillar } from './EcosystemSection';

const pillars: Pillar[] = [
  {
    num: '01',
    title: 'Bitácora',
    description: 'Registro, análisis y seguimiento de la evolución de cada operación.',
    href: 'https://bitacora.rcpvbusiness.com',
  },
  {
    num: '02',
    title: 'Fiscalidad',
    description: 'Planificación y organización fiscal relacionada con la actividad de trading.',
    comingSoon: true,
  },
  {
    num: '03',
    title: 'Mentalidad',
    description: 'Trabajo sobre disciplina, gestión emocional y toma de decisiones.',
    comingSoon: true,
  },
];

export default function TradingEcosystem() {
  return (
    <EcosystemSection
      id="ecosistema"
      eyebrow="Ecosistema Trading"
      title="Trading es más que operar"
      subtitle="Construir una actividad sostenible alrededor del trading requiere mucho más que encontrar una estrategia."
      pillars={pillars}
      note="Cada pilar está diseñado para evolucionar como una plataforma independiente dentro del ecosistema RCPV BUSINESS."
    />
  );
}
