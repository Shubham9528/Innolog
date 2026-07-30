import React from 'react';
import { ShieldCheck, CheckCircle2, Lock } from 'lucide-react';

export const ComplianceSection: React.FC = () => {
  return (
    <section id="compliance" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 bg-emerald-50 text-emerald-700 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Certified Regulatory Compliance</span>
            </div>
            <h3 className="font-display text-4xl font-extrabold text-slate-900 tracking-tight mb-6">
              Designed for Medical, Pharmaceutical & Lab Standards
            </h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              Hospital central sterilization departments and pharmaceutical bio-reactors demand continuous, tamper-proof thermal logging. INNOLOG ensures compliance without breaching chamber hermetic seals.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 text-sm block">EN 285 Sterilization Standard</strong>
                  <span className="text-slate-500 text-xs">Automated thermal hold time calculation at 134°C for medical steam sterilizers.</span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 text-sm block">ISO 17665 Moisture & Heat Compliance</strong>
                  <span className="text-slate-500 text-xs">Continuous F0 lethality integration for moist heat sterilization validation.</span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 text-sm block">FDA 21 CFR Part 11 Audit Trails</strong>
                  <span className="text-slate-500 text-xs">Crypto-signed timestamps and encrypted 14-byte CRC logs prevent data tampering.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Card Graphic */}
          <div className="glass-card p-8 rounded-3xl border border-slate-200 shadow-xl bg-gradient-to-br from-indigo-50/50 to-cyan-50/30">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center">
                <Lock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display text-lg font-bold text-slate-900">Zero-Leakage Assurance</h4>
                <span className="text-xs text-slate-500">100% Hermetic Pressure Seal Maintained</span>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 text-slate-700 text-xs leading-relaxed space-y-3 shadow-sm">
              <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                <span className="font-semibold text-slate-900">CHAMBER INTEGRITY</span>
                <span className="text-emerald-600 font-bold">100% SEALED</span>
              </div>
              <p>
                Traditional wired sensors require bulky passthroughs that degrade pressure gaskets and risk steam leakage. INNOLOG smart data logging maintains continuous, high-integrity telemetry without seal degradation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
