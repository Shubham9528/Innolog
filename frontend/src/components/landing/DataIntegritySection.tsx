import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Lock, 
  CheckCircle2, 
  Cpu, 
  Zap, 
  Database, 
  FileCheck 
} from 'lucide-react';

interface IntegrityFeature {
  id: string;
  title: string;
  badge: string;
  description: string;
  specs: string[];
  statValue: string;
  statLabel: string;
}

const FEATURES: IntegrityFeature[] = [
  {
    id: 'crc',
    title: 'Hardware CRC-16 Checksum',
    badge: '14-Byte Binary Frame',
    description: 'Every 14-byte telemetry payload emitted by the MCU is wrapped with a hardware CRC-16 error detection checksum before transmission.',
    specs: ['Zero-bit corruption tolerance', 'Hardware polynomial engine', '100% frame validation'],
    statValue: '100%',
    statLabel: 'Packet Integrity'
  },
  {
    id: 'crypto',
    title: 'Cryptographic Audit Trail',
    badge: 'FDA 21 CFR Part 11',
    description: 'Sterilization telemetry streams are timestamped with an onboard RTC and signed using cryptographic hashes to prevent data tampering.',
    specs: ['Tamper-evident log chain', 'Onboard RTC timestamps', 'Immutable audit export'],
    statValue: 'SHA-256',
    statLabel: 'Log Authentication'
  },
  {
    id: 'failover',
    title: 'Dual-Buffer Fallback',
    badge: 'Non-Volatile Memory',
    description: 'If wireless telemetry experiences interference, the transmitter caches up to 10,000 cycle records locally in non-volatile flash EEPROM.',
    specs: ['Zero data loss on drops', 'Auto catch-up sync', 'Self-healing retransmission'],
    statValue: '10k',
    statLabel: 'Cached Frames'
  }
];

export const DataIntegritySection: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState<string>('crc');
  const activeFeature = FEATURES.find(f => f.id === activeTabId) || FEATURES[0];

  return (
    <section id="data-integrity" className="py-24 bg-slate-50 text-slate-900 relative overflow-hidden border-b border-slate-200">
      {/* Soft light glow background accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-100/50 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-cyan-100/40 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-indigo-50 border border-indigo-100 text-indigo-700 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-indigo-600" />
            <span>High-Reliability Telemetry</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            Uncompromising <span className="bg-gradient-to-r from-indigo-600 via-indigo-700 to-cyan-600 bg-clip-text text-transparent">Data Integrity</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Engineered for high-temperature autoclave environments where lost data means compromised compliance and lost sterilization batches.
          </p>
        </div>

        {/* Unique Asymmetric Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive Feature Selector (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              {FEATURES.map((feature) => {
                const isActive = feature.id === activeTabId;
                return (
                  <button
                    key={feature.id}
                    onClick={() => setActiveTabId(feature.id)}
                    className={`w-full text-left p-5 rounded-2xl transition-all border cursor-pointer ${
                      isActive
                        ? 'bg-white border-indigo-500 shadow-md shadow-indigo-100 ring-1 ring-indigo-500/20'
                        : 'bg-white/70 border-slate-200 hover:bg-white hover:border-slate-300 text-slate-600'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className={`text-xs font-mono font-semibold px-2 py-0.5 rounded ${
                        isActive ? 'bg-indigo-50 text-indigo-700 border border-indigo-100' : 'bg-slate-100 text-slate-500'
                      }`}>
                        {feature.badge}
                      </span>
                      {isActive && <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />}
                    </div>

                    <h3 className={`text-base font-bold transition-colors ${
                      isActive ? 'text-slate-900' : 'text-slate-600'
                    }`}>
                      {feature.title}
                    </h3>
                  </button>
                );
              })}
            </div>

            {/* Quick Stat Pill Footer */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-100">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Stream Transmission</div>
                  <div className="text-sm font-bold text-slate-900">Sub-10ms Latency</div>
                </div>
              </div>
              <span className="text-xs font-mono text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 font-semibold">
                ACTIVE
              </span>
            </div>

          </div>

          {/* Right Column: Feature Spotlight Card (7 Cols) */}
          <div className="lg:col-span-7 bg-white border border-slate-200/90 rounded-3xl p-8 relative flex flex-col justify-between shadow-xl shadow-slate-200/60">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
                    {activeFeature.id === 'crc' && <Cpu className="w-6 h-6" />}
                    {activeFeature.id === 'crypto' && <Lock className="w-6 h-6" />}
                    {activeFeature.id === 'failover' && <Database className="w-6 h-6" />}
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900">{activeFeature.title}</h3>
                    <span className="text-xs text-slate-500 font-mono">Protocol Guarantee</span>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-2xl font-extrabold font-mono text-indigo-600">{activeFeature.statValue}</div>
                  <div className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold">{activeFeature.statLabel}</div>
                </div>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                {activeFeature.description}
              </p>

              {/* Bullet Highlights */}
              <div className="grid sm:grid-cols-3 gap-3 mb-6">
                {activeFeature.specs.map((spec, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start space-x-2 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Verification Code Block */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-mono">
              <div className="flex items-center space-x-2">
                <FileCheck className="w-4 h-4 text-indigo-600" />
                <span>Verification Hash: <strong className="text-slate-800">0x7F9A..B31C</strong></span>
              </div>
              <span className="text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100 flex items-center gap-1 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Validated
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
