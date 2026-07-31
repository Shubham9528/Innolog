import React from 'react';
import { Sparkles, Cpu, CheckCircle2, Activity } from 'lucide-react';
import transducerHardwareImg from '../../assets/transducer_hardware.png';
import acousticPropagationImg from '../../assets/acoustic_propagation.png';

export const ProjectOverviewSection: React.FC = () => {
  return (
    <section id="project-overview" className="py-28 bg-white text-slate-900 border-b border-slate-200 relative overflow-hidden">
      {/* Decorative backdrop glow */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-indigo-100/50 blur-3xl pointer-events-none rounded-full"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-cyan-100/50 blur-3xl pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-28">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-indigo-50 border border-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>Project Technology Overview</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            Autoclave Data Logging Architecture
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Discover how INNOLOG streams, logs, and processes real-time temperature and pressure telemetry from sealed 134°C sterilization vessels.
          </p>
        </div>

        {/* Showcase Block 1: Hardware & Logger Unit (Image Right, Text Left) */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 text-indigo-700 font-mono text-xs font-semibold uppercase tracking-wider bg-indigo-50 px-3 py-1 rounded-md border border-indigo-100">
              <Cpu className="w-4 h-4 text-indigo-600" />
              <span>Hardware System Architecture</span>
            </div>
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
              High-Temperature Data Logger & Sensor Unit
            </h3>
            <p className="text-slate-600 text-base leading-relaxed">
              The INNOLOG telemetry logger is engineered specifically for hostile thermal environments up to 134°C and saturated steam pressures exceeding 3.1 bar. Placed inside or coupled to the chamber, it captures precision PT100 temperature readings and streams formatted data frames to the monitoring system.
            </p>
            
            <ul className="space-y-4 pt-2">
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-indigo-100 border border-indigo-200 flex items-center justify-center shrink-0 mt-0.5 text-indigo-600">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-slate-900 font-semibold text-sm">Precision PT100 RTD Sensor</h4>
                  <p className="text-slate-500 text-xs mt-0.5">High accuracy (0.01°C resolution) with 15-bit MAX31865 SPI digitizer.</p>
                </div>
              </li>

              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-indigo-100 border border-indigo-200 flex items-center justify-center shrink-0 mt-0.5 text-indigo-600">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-slate-900 font-semibold text-sm">STM32 Ultra-Low Power Core</h4>
                  <p className="text-slate-500 text-xs mt-0.5">ARM Cortex-M4 microcontroller for local data framing, non-volatile storage, and power control.</p>
                </div>
              </li>

              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-indigo-100 border border-indigo-200 flex items-center justify-center shrink-0 mt-0.5 text-indigo-600">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-slate-900 font-semibold text-sm">Hermetic Autoclave-Rated Enclosure</h4>
                  <p className="text-slate-500 text-xs mt-0.5">Thermally insulated battery chamber providing extended continuous operating hours.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Image Container 1 */}
          <div className="relative group max-w-xl mx-auto w-full">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-35 transition duration-500"></div>
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xl">
              <img 
                src={transducerHardwareImg} 
                alt="INNOLOG Data Logger & Autoclave Hardware Module" 
                className="w-full h-72 sm:h-88 lg:h-96 object-cover transform group-hover:scale-105 transition duration-500"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-900/90 via-slate-900/70 to-transparent p-5 text-white">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span>HARDWARE: LOG-9842 SENSOR MODULE</span>
                  <span className="text-emerald-400 font-bold">134°C RATED</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Showcase Block 2: Telemetry Stream & Processing (Image Left, Text Right) */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Image Container 2 */}
          <div className="relative group order-2 lg:order-1 max-w-xl mx-auto w-full">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-2xl blur opacity-20 group-hover:opacity-35 transition duration-500"></div>
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xl">
              <img 
                src={acousticPropagationImg} 
                alt="Real-Time Data Streaming & Telemetry Pipeline" 
                className="w-full h-72 sm:h-88 lg:h-96 object-cover transform group-hover:scale-105 transition duration-500"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-900/90 via-slate-900/70 to-transparent p-5 text-white">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span>DATA PAYLOAD: 14-BYTE BINARY</span>
                  <span className="text-cyan-400 font-bold">LIVE TELEMETRY</span>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content 2 */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center space-x-2 text-cyan-700 font-mono text-xs font-semibold uppercase tracking-wider bg-cyan-50 px-3 py-1 rounded-md border border-cyan-100">
              <Activity className="w-4 h-4 text-cyan-600" />
              <span>Real-Time Telemetry Pipeline</span>
            </div>
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
              High-Integrity Cycle Logging & Verification
            </h3>
            <p className="text-slate-600 text-base leading-relaxed">
              INNOLOG structures sensor readings into compact 14-byte data frames containing accurate timestamps, temperature, pressure, and device diagnostics. Data is processed instantly to generate real-time graphs and automated compliance audit reports.
            </p>
            
            <ul className="space-y-4 pt-2">
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-cyan-100 border border-cyan-200 flex items-center justify-center shrink-0 mt-0.5 text-cyan-600">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-slate-900 font-semibold text-sm">Real-Time Data Streaming</h4>
                  <p className="text-slate-500 text-xs mt-0.5">Streams live sensor telemetry directly to web dashboards for real-time cycle tracking.</p>
                </div>
              </li>

              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-cyan-100 border border-cyan-200 flex items-center justify-center shrink-0 mt-0.5 text-cyan-600">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-slate-900 font-semibold text-sm">Base Station Receiver Unit</h4>
                  <p className="text-slate-500 text-xs mt-0.5">Receives logger data frames and feeds live telemetry to web dashboard.</p>
                </div>
              </li>

              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-cyan-100 border border-cyan-200 flex items-center justify-center shrink-0 mt-0.5 text-cyan-600">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-slate-900 font-semibold text-sm">CRC-16 Hardware Payload Validation</h4>
                  <p className="text-slate-500 text-xs mt-0.5">Guarantees 100% data integrity with instant frame corruption rejection.</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};
