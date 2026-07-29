import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureSection from './components/FeatureSection';
import Stats from './components/Stats';
import Footer from './components/Footer';

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
