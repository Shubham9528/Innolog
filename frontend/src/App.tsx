import Navbar from './components/header/Navbar';
import Hero from './components/landing-page/Hero';
import FeatureSection from './components/landing-page/FeatureSection';
import Stats from './components/landing-page/Stats';
import Footer from './components/footer/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#fafbfc] text-slate-900 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <main className="flex-grow">
        <Hero />

        {/* Feature Information & Image Combination Showcase */}
        <FeatureSection />

        {/* Key SLA & Telemetry Metrics Banner */}
        <Stats />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
