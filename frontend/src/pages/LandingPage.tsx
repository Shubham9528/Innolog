import React from 'react';
import {
  Navbar,
  HeroSection,
  ShowcaseSection,
  FeaturesSection,
  ProjectOverviewSection,
  ArchitectureSection,
  DataIntegritySection,
  SpecsSection,
  ComplianceSection,
  CallToActionSection,
  Footer
} from '../components/landing';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-500 selection:text-white">
      <Navbar />
      <HeroSection />
      <ShowcaseSection />
      <FeaturesSection />
      <ProjectOverviewSection />
      <ArchitectureSection />
      <DataIntegritySection />
      <SpecsSection />
      <ComplianceSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
