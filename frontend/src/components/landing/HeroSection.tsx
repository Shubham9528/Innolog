import React from 'react';
import { 
  Sparkles, 
  Activity, 
  ArrowRight, 
  Play 
} from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden bg-grid-pattern">
      {/* Glowing backdrop elements */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-indigo-200/40 via-blue-100/30 to-cyan-100/40 blur-3xl pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Pill Badge */}
          <div className="inline-flex items-center space-x-2 bg-indigo-50/90 border border-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-8 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>Autoclave Data Logging System • 134°C Sterilization Monitoring</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-8 leading-[1.15]">
            <span className="block mb-1">Sterilization Data Logging.</span>
            <span className="gradient-text inline-block pr-4 pb-1">Real-Time Precision & Compliance.</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            High-reliability IoT data logging system for medical and industrial autoclaves. Stream, record, and verify real-time temperature, pressure, and F0 lethality telemetry with automated compliance reporting.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a 
              href="#interactive-demo"
              className="w-full sm:w-auto gradient-accent text-white px-8 py-4 rounded-full text-base font-semibold hover:shadow-xl hover:shadow-indigo-500/30 transition-all transform hover:-translate-y-0.5 flex items-center justify-center space-x-3 cursor-pointer"
            >
              <Activity className="w-5 h-5" />
              <span>Explore Live Data Logging Demo</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <a 
              href="#project-overview"
              className="w-full sm:w-auto bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 px-8 py-4 rounded-full text-base font-semibold transition-all shadow-sm flex items-center justify-center space-x-2"
            >
              <Play className="w-4 h-4 text-indigo-600 fill-indigo-600" />
              <span>View System Overview</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
