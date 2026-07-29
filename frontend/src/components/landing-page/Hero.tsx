import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden bg-slate-50/50">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none"></div>

      {/* Ambient Gradient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-indigo-300/30 to-purple-300/30 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      
      <div className="container-max relative z-10 flex flex-col items-center text-center">
        {/* Shimmer Badge */}
        <a href="#features" className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/80 border border-slate-200/80 text-xs font-semibold text-slate-700 hover:text-indigo-600 shadow-sm backdrop-blur-md mb-8 transition-all hover:scale-105 hover:border-indigo-200">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
          </span>
          <span className="text-slate-900 font-medium">INNOLOG v2.0 Released</span>
          <span className="text-slate-300">|</span>
          <span className="text-indigo-600 font-medium flex items-center gap-1">
            See What's New
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </a>
        
        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight max-w-4xl leading-[1.15] mb-6">
          <span className="inline-block">Real-Time Hardware Logging</span>{" "}
          <br className="hidden md:inline" />
          <span className="bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-600 bg-clip-text text-transparent inline-block">
            Without the Complexity.
          </span>
        </h1>
        
        {/* Subheadline */}
        <p className="text-base sm:text-lg lg:text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed">
          Monitor hardware metrics, capture distributed logs, and automate incident response across your entire IoT and server fleet.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 w-full sm:w-auto">
          <button className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-full shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/35 transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2">
            <span>Start Free Trial</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>

          <button className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200/90 shadow-sm rounded-full transition-all duration-300 flex items-center justify-center gap-2">
            <svg className="w-4 h-4 text-indigo-600 fill-current" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
            <span>Watch 2-Min Overview</span>
          </button>
        </div>

        {/* Integration Micro Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 font-medium">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            No Credit Card Required
          </span>
          <span className="text-slate-300">•</span>
          <span>MQTT & WebSockets Ready</span>
          <span className="text-slate-300">•</span>
          <span>Docker & K8s Support</span>
        </div>

      </div>
    </section>
  );
};

export default Hero;

