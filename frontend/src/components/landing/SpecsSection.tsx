import React, { useState } from 'react';

export const SpecsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'transmitter' | 'receiver' | 'software'>('transmitter');

  return (
    <section id="specs" className="py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-3">HARDWARE & SOFTWARE SPECIFICATIONS</h2>
          <h3 className="font-display text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Technical Datasheet
          </h3>
          <p className="text-slate-600">
            Complete hardware architecture and software protocol specifications.
          </p>

          {/* Tabs */}
          <div className="flex justify-center space-x-3 mt-8">
            <button 
              onClick={() => setActiveTab('transmitter')}
              className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${activeTab === 'transmitter' ? 'bg-slate-900 text-white shadow-md' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'}`}
            >
              Data Logger Unit (Chamber)
            </button>
            <button 
              onClick={() => setActiveTab('receiver')}
              className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${activeTab === 'receiver' ? 'bg-slate-900 text-white shadow-md' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'}`}
            >
              Base Station Receiver
            </button>
            <button 
              onClick={() => setActiveTab('software')}
              className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${activeTab === 'software' ? 'bg-slate-900 text-white shadow-md' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'}`}
            >
              INNOLOG Dashboard Software
            </button>
          </div>
        </div>

        {/* Specs Table Card */}
        <div className="glass-card rounded-3xl p-8 border border-slate-200 max-w-4xl mx-auto shadow-lg">
          {activeTab === 'transmitter' && (
            <div className="space-y-4">
              <div className="flex justify-between py-3 border-b border-slate-100 text-sm">
                <span className="font-semibold text-slate-700">Microcontroller MCU</span>
                <span className="font-mono text-slate-900">STM32L452 (ARM Cortex-M4, Low Power)</span>
              </div>
              <div className="flex justify-between py-3 border-b border-slate-100 text-sm">
                <span className="font-semibold text-slate-700">Temperature Sensor</span>
                <span className="font-mono text-slate-900">PT100 Class A RTD (Range: -40°C to +150°C)</span>
              </div>
              <div className="flex justify-between py-3 border-b border-slate-100 text-sm">
                <span className="font-semibold text-slate-700">RTD Converter</span>
                <span className="font-mono text-slate-900">MAX31865 SPI RTD-to-Digital Converter</span>
              </div>
              <div className="flex justify-between py-3 border-b border-slate-100 text-sm">
                <span className="font-semibold text-slate-700">Pressure Sensor Interface</span>
                <span className="font-mono text-slate-900">High-Precision Saturated Steam Pressure Probe</span>
              </div>
              <div className="flex justify-between py-3 border-b border-slate-100 text-sm">
                <span className="font-semibold text-slate-700">Real-Time Clock (RTC)</span>
                <span className="font-mono text-slate-900">DS3231 Extremely Accurate I2C RTC</span>
              </div>
              <div className="flex justify-between py-3 text-sm">
                <span className="font-semibold text-slate-700">Non-Volatile Memory</span>
                <span className="font-mono text-slate-900">SPI FRAM (Ferroelectric RAM) + Flash Storage</span>
              </div>
            </div>
          )}

          {activeTab === 'receiver' && (
            <div className="space-y-4">
              <div className="flex justify-between py-3 border-b border-slate-100 text-sm">
                <span className="font-semibold text-slate-700">Sensor Interface Pickup</span>
                <span className="font-mono text-slate-900">High-Precision Telemetry Receiver Probe</span>
              </div>
              <div className="flex justify-between py-3 border-b border-slate-100 text-sm">
                <span className="font-semibold text-slate-700">Low Noise Amplifier</span>
                <span className="font-mono text-slate-900">OPA1612 Dual Ultra-Low Distortion Op-Amp</span>
              </div>
              <div className="flex justify-between py-3 border-b border-slate-100 text-sm">
                <span className="font-semibold text-slate-700">Band-Pass Filter</span>
                <span className="font-mono text-slate-900">Analog High-Selectivity BPF</span>
              </div>
              <div className="flex justify-between py-3 border-b border-slate-100 text-sm">
                <span className="font-semibold text-slate-700">Analog-to-Digital Converter</span>
                <span className="font-mono text-slate-900">24-bit High-Speed Delta-Sigma ADC</span>
              </div>
              <div className="flex justify-between py-3 text-sm">
                <span className="font-semibold text-slate-700">PC Interface</span>
                <span className="font-mono text-slate-900">High-Speed USB Virtual COM / Ethernet TCP</span>
              </div>
            </div>
          )}

          {activeTab === 'software' && (
            <div className="space-y-4">
              <div className="flex justify-between py-3 border-b border-slate-100 text-sm">
                <span className="font-semibold text-slate-700">Frontend Stack</span>
                <span className="font-mono text-slate-900">React 19, Vite, TypeScript, Tailwind CSS</span>
              </div>
              <div className="flex justify-between py-3 border-b border-slate-100 text-sm">
                <span className="font-semibold text-slate-700">Backend API Framework</span>
                <span className="font-mono text-slate-900">Node.js, Express, Helmet, Morgan, CORS</span>
              </div>
              <div className="flex justify-between py-3 border-b border-slate-100 text-sm">
                <span className="font-semibold text-slate-700">Payload Format</span>
                <span className="font-mono text-slate-900">14-Byte Packets with CRC-16 Checksum</span>
              </div>
              <div className="flex justify-between py-3 border-b border-slate-100 text-sm">
                <span className="font-semibold text-slate-700">Real-Time Streaming</span>
                <span className="font-mono text-slate-900">Server-Sent Events (SSE) / WebSocket Stream</span>
              </div>
              <div className="flex justify-between py-3 text-sm">
                <span className="font-semibold text-slate-700">Compliance Reporting</span>
                <span className="font-mono text-slate-900">EN 285 & ISO 17665 PDF Audit Logs</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
