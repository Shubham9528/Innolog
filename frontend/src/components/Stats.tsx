import { ShieldCheck, Server, Globe2, BarChart2 } from 'lucide-react';

export default function Stats() {
  return (
    <section className="py-16 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle ambient glowing spots */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2 p-4">
            <div className="w-10 h-10 mx-auto rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-3">
              <BarChart2 className="w-5 h-5" />
            </div>
            <div className="text-3xl sm:text-4xl font-bold text-white tracking-tight">50B+</div>
            <div className="text-xs sm:text-sm font-medium text-slate-400">Daily Ingested Events</div>
          </div>

          <div className="space-y-2 p-4">
            <div className="w-10 h-10 mx-auto rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-3">
              <Server className="w-5 h-5" />
            </div>
            <div className="text-3xl sm:text-4xl font-bold text-white tracking-tight">&lt; 2.5ms</div>
            <div className="text-xs sm:text-sm font-medium text-slate-400">Global Query Speed</div>
          </div>

          <div className="space-y-2 p-4">
            <div className="w-10 h-10 mx-auto rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 mb-3">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="text-3xl sm:text-4xl font-bold text-white tracking-tight">99.999%</div>
            <div className="text-xs sm:text-sm font-medium text-slate-400">Guaranteed SLA Uptime</div>
          </div>

          <div className="space-y-2 p-4">
            <div className="w-10 h-10 mx-auto rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-3">
              <Globe2 className="w-5 h-5" />
            </div>
            <div className="text-3xl sm:text-4xl font-bold text-white tracking-tight">1,200+</div>
            <div className="text-xs sm:text-sm font-medium text-slate-400">Enterprise Clusters</div>
          </div>
        </div>
      </div>
    </section>
  );
}
