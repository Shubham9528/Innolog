import React from 'react';
import { 
  Radio, 
  ShieldCheck, 
  Zap, 
  Cpu, 
  CheckCircle2, 
  ArrowUpRight 
} from 'lucide-react';
import showcaseImg from '../../assets/autoclave_telemetry_showcase.png';

export const ShowcaseSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 border-b border-slate-200/80 text-slate-900 relative overflow-hidden">
      {/* Background soft glow accents */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-indigo-200/30 blur-3xl pointer-events-none rounded-full"></div>
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-cyan-200/25 blur-3xl pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 bg-indigo-100/80 border border-indigo-200 text-indigo-700 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
              <Zap className="w-3.5 h-3.5 text-indigo-600 animate-pulse" />
              <span>Smart Autoclave Telemetry</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Real-Time Data Stream. <br />
              <span className="gradient-text block">
                Continuous Cycle Logging.
              </span>
            </h2>
          </div>
          <p className="text-slate-600 text-base max-w-md leading-relaxed">
            INNOLOG continuously logs critical sterilization metrics (temperature, pressure, lethality F0) during high-temperature autoclave cycles with total accuracy and data integrity.
          </p>
        </div>

        {/* Grid Showcase */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Showcase Image */}
          <div className="lg:col-span-7 relative group">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 bg-white shadow-xl shadow-slate-200/60">
              <img 
                src={showcaseImg} 
                alt="INNOLOG Autoclave Sterilization Data Logging Showcase" 
                className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
              
              {/* Overlay Gradient for contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none"></div>

              {/* Status Badge Tag */}
              <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-md border border-slate-200 px-3.5 py-1.5 rounded-full flex items-center space-x-2 text-xs font-mono font-bold text-emerald-700 shadow-md">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                <span>DATA STREAM: ACTIVE (LIVE LOGGING)</span>
              </div>

              {/* Floating Live Data Metric Chips */}
              <div className="absolute bottom-5 left-5 right-5 flex flex-wrap justify-between items-center gap-3">
                <div className="bg-white/95 backdrop-blur-md border border-slate-200/90 p-3 rounded-2xl flex items-center space-x-3 shadow-lg">
                  <div className="w-9 h-9 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
                    <Radio className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Chamber Temp</div>
                    <div className="text-sm font-bold text-slate-900 font-mono">134.2 °C</div>
                  </div>
                </div>

                <div className="bg-white/95 backdrop-blur-md border border-slate-200/90 p-3 rounded-2xl flex items-center space-x-3 shadow-lg">
                  <div className="w-9 h-9 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-600">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Saturated Pressure</div>
                    <div className="text-sm font-bold text-slate-900 font-mono">2.12 bar</div>
                  </div>
                </div>

                <div className="bg-white/95 backdrop-blur-md border border-slate-200/90 p-3 rounded-2xl flex items-center space-x-3 shadow-lg">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Payload Integrity</div>
                    <div className="text-sm font-bold text-emerald-600 font-mono">100% CRC16</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Feature Highlights */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Highlight Item 1 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-indigo-300 hover:shadow-lg transition-all group">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0 group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-indigo-600 transition-colors">
                    Continuous High-Frequency Logging
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Captures high-frequency temperature and pressure readings throughout heating, sterilization hold, and cooling phases without interruption.
                  </p>
                </div>
              </div>
            </div>

            {/* Highlight Item 2 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-cyan-300 hover:shadow-lg transition-all group">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-600 shrink-0 group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-cyan-600 transition-colors">
                    High-Precision PT100 RTD Sensor Suite
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Utilizes precision RTD sensors to measure sub-degree thermal variations (0.01°C resolution) under harsh 134°C steam pressure.
                  </p>
                </div>
              </div>
            </div>

            {/* Highlight Item 3 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-emerald-300 hover:shadow-lg transition-all group">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-emerald-600 transition-colors">
                    Automated Compliance & Live F0 Verification
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Calculates cumulative thermal lethality (F0) on the fly to confirm sterilization efficacy compliant with EN 285 & ISO 17665 standards.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Action Link */}
            <div className="pt-2">
              <a 
                href="#interactive-demo" 
                className="inline-flex items-center space-x-2 text-indigo-600 hover:text-indigo-700 text-sm font-semibold transition-colors group cursor-pointer"
              >
                <span>Test live data logging in interactive demo</span>
                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
