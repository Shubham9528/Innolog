import React from 'react';
import './index.css';
import Navbar from './components/header/Navbar';
import Hero from './components/landing-page/Hero';
import Stats from './components/landing-page/Stats';
import FeatureSection from './components/landing-page/FeatureSection';
import PlatformOverview from './components/landing-page/PlatformOverview';
import HowItWorks from './components/landing-page/HowItWorks';
import ArchitectureOverview from './components/landing-page/ArchitectureOverview';
import Resources from './components/landing-page/Resources';
import Footer from './components/footer/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-inter selection:bg-indigo-500/20">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Stats />
        <FeatureSection />
        <PlatformOverview />
        <HowItWorks />
        <Resources />
        <ArchitectureOverview />
      </main>
      <Footer />
    </div>
  );
}
