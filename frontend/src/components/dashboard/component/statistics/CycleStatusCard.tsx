import React from 'react';
import {
  CheckCircle2,
  Award,
  Sparkles
} from 'lucide-react';

export const CycleStatusCard: React.FC = () => {
  return (
    <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-xl relative overflow-hidden flex flex-col justify-between border border-slate-800">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div>
        {/* Top Header & Compliance Badge */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-extrabold text-sm text-slate-100">Sterilization Cycle #842</h3>
              <p className="text-[11px] text-slate-400">EN 285 Steam Sterilization Protocol</p>
            </div>
          </div>

          <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-black bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>EN 285 PASS</span>
          </span>
        </div>

        {/* Phase Progress Bar */}
        <div className="mt-5">
          <div className="flex justify-between items-center text-xs font-bold mb-2">
            <span className="text-amber-400 uppercase tracking-wider flex items-center">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping mr-2"></span>
              Current Phase: Sterilization Hold
            </span>
            <span className="text-slate-300 font-mono">03:45 / 05:00 min</span>
          </div>

          <div className="w-full bg-slate-800 rounded-full h-3 p-0.5 border border-slate-700/60 overflow-hidden">
            <div
              className="bg-gradient-to-r from-amber-500 via-indigo-500 to-emerald-400 h-full rounded-full transition-all duration-500"
              style={{ width: '75%' }}
            ></div>
          </div>

          {/* Phase Markers */}
          <div className="grid grid-cols-4 gap-1 text-[10px] text-slate-400 mt-3 font-semibold text-center">
            <span className="text-emerald-400 font-bold">1. Pre-Vac ✓</span>
            <span className="text-emerald-400 font-bold">2. Heating ✓</span>
            <span className="text-amber-400 font-extrabold underline">3. Hold (134°C)</span>
            <span className="text-slate-500">4. Exhaust</span>
          </div>
        </div>

        {/* Target Specs Summary */}
        <div className="grid grid-cols-2 gap-3 mt-6">
          <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
            <span className="text-[10px] font-bold text-slate-400 uppercase">Target Temp</span>
            <div className="flex items-baseline space-x-1 mt-0.5">
              <span className="text-xl font-black text-slate-100 font-mono">134.0</span>
              <span className="text-xs text-slate-400">°C</span>
            </div>
            <span className="text-[10px] text-emerald-400 font-semibold">Actual: 134.3 °C (OK)</span>
          </div>

          <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
            <span className="text-[10px] font-bold text-slate-400 uppercase">Target Hold Time</span>
            <div className="flex items-baseline space-x-1 mt-0.5">
              <span className="text-xl font-black text-slate-100 font-mono">5.0</span>
              <span className="text-xs text-slate-400">mins</span>
            </div>
            <span className="text-[10px] text-emerald-400 font-semibold">Remaining: 01:15 min</span>
          </div>
        </div>
      </div>

      {/* Footer Audit Standard ISO 17665 */}
      <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
        <div className="flex items-center space-x-2 text-slate-400">
          <Award className="w-4 h-4 text-indigo-400" />
          <span>Validated ISO 17665 Standard</span>
        </div>
        <span className="text-[11px] font-mono text-slate-400">Audit ID: #LOG-2026-981</span>
      </div>
    </div>
  );
};
