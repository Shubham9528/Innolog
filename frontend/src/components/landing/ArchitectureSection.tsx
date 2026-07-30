import React from 'react';

export const ArchitectureSection: React.FC = () => {
  return (
    <section id="how-it-works" className="py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-3">END-TO-END DATA PIPELINE</h2>
          <h3 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            End-to-End Data Logging Architecture
          </h3>
          <p className="text-lg text-slate-600 leading-relaxed">
            From high-precision RTD sensing inside the 134°C chamber to live real-time web dashboards.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6 relative">
          {/* Step 1 */}
          <div className="glass-card p-6 rounded-3xl border border-slate-200 relative flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 font-extrabold font-display flex items-center justify-center mb-6 text-base">
                01
              </div>
              <h4 className="font-display text-lg font-bold text-slate-900 mb-2">Precision Sensor Acquisition</h4>
              <p className="text-slate-600 text-xs leading-relaxed mb-4">
                PT100 RTD sensor measures temperature inside the 134°C chamber. MAX31865 digitizes signal to STM32L452 MCU with onboard RTC timestamps.
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl text-[11px] font-mono text-slate-600">
              Components: PT100, MAX31865, STM32L452, DS3231 RTC
            </div>
          </div>

          {/* Step 2 */}
          <div className="glass-card p-6 rounded-3xl border border-slate-200 relative flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 font-extrabold font-display flex items-center justify-center mb-6 text-base">
                02
              </div>
              <h4 className="font-display text-lg font-bold text-slate-900 mb-2">Binary Frame Packaging</h4>
              <p className="text-slate-600 text-xs leading-relaxed mb-4">
                Microcontroller packages sensor data into structured 14-byte binary telemetry frames with hardware CRC-16 integrity validation.
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl text-[11px] font-mono text-slate-600">
              Data Framing: 14-Byte Frame + CRC-16 Checksum
            </div>
          </div>

          {/* Step 3 */}
          <div className="glass-card p-6 rounded-3xl border border-slate-200 relative flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-700 font-extrabold font-display flex items-center justify-center mb-6 text-base">
                03
              </div>
              <h4 className="font-display text-lg font-bold text-slate-900 mb-2">Base Station Receiver</h4>
              <p className="text-slate-600 text-xs leading-relaxed mb-4">
                Receiver module captures data packets, verifies payload checksums, and forwards telemetry to the backend server.
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl text-[11px] font-mono text-slate-600">
              Signal Processing: Serial Receiver + CRC Validation
            </div>
          </div>

          {/* Step 4 */}
          <div className="glass-card p-6 rounded-3xl border border-slate-200 relative flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 font-extrabold font-display flex items-center justify-center mb-6 text-base">
                04
              </div>
              <h4 className="font-display text-lg font-bold text-slate-900 mb-2">INNOLOG Software Suite</h4>
              <p className="text-slate-600 text-xs leading-relaxed mb-4">
                Telemetry packets received over USB/Ethernet are processed by Express backend and rendered on the React live dashboard with compliance logs.
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl text-[11px] font-mono text-slate-600">
              Stack: Node.js, Express, React, TypeScript
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
