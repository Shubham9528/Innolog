import React from 'react';

const ArchitectureOverview: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 border-b border-gray-100 overflow-hidden" id="architecture">
      <div className="container-max">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-wider mb-4">
            System Architecture
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Complete Fleet Visibility. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              From Edge Devices to Cloud Clusters.
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            INNOLOG continuously ingests telemetry, hardware logs, and performance metrics across hybrid environments—giving your engineering team a single source of truth.
          </p>
        </div>

        {/* Compact Architecture Image Showcase Container */}
        <div className="relative max-w-3xl mx-auto group">
          {/* Decorative glow behind image */}
          <div className="absolute inset-0 bg-indigo-500/10 rounded-2xl blur-xl transform transition-transform duration-700 group-hover:scale-105"></div>
          
          {/* Main Container */}
          <div className="relative bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden group transition-all duration-500 hover:shadow-xl">
            {/* Architecture Image */}
            <div className="w-full bg-white">
              <img 
                src="/architecture.png" 
                alt="System Architecture Diagram" 
                className="w-full h-auto block rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureOverview;
