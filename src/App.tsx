import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Areas from './components/Areas';
import TradingEcosystem from './components/TradingEcosystem';
import DesarrolloEcosystem from './components/DesarrolloEcosystem';
import Philosophy from './components/Philosophy';
import AboutCompany from './components/AboutCompany';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-navy-950 text-slate-200 antialiased">
      <Header />
      <main>
        <Hero />
        <About />
        <Areas />
        <TradingEcosystem />
        <DesarrolloEcosystem />
        <Philosophy />
        <AboutCompany />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
