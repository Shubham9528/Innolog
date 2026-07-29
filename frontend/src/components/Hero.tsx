import { ArrowRight, Sparkles, Cpu, Zap, Shield, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section id="overview" className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-gradient-to-b from-indigo-50/60 via-slate-50/40 to-white">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-indigo-200/30 via-violet-100/40 to-emerald-100/20 blur-3xl pointer-events-none rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/90 border border-indigo-100 shadow-sm text-xs font-semibold text-indigo-900 mb-6 hover:border-indigo-200 transition-colors">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600" />
            </span>
            <Sparkles className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
            <span>Next-Gen Architecture</span>
            <span className="text-slate-300 select-none">•</span>
            <span className="text-indigo-600 font-medium">Sub-millisecond Log Ingestion</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.18] sm:leading-[1.15] mb-6 max-w-4xl mx-auto">
            <span className="block sm:inline">Unified System Telemetry</span>{' '}
            <span className="block sm:inline bg-gradient-to-r from-indigo-600 via-violet-600 to-emerald-600 bg-clip-text text-transparent">
              &amp; Intelligent Log Analytics
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed mb-8 max-w-2xl mx-auto">
            INNOLOG delivers real-time distributed log ingestion, deep hardware performance metrics, and instant anomaly detection built for engineering teams who demand precision.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="#live-demo"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 rounded-xl shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/35 transition-all group"
            >
              Explore Live Console
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#features"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200/90 rounded-xl shadow-sm hover:shadow transition-all"
            >
              <Play className="w-4 h-4 text-indigo-600 fill-indigo-600" />
              Watch 2-Min Demo
            </a>
          </div>

          {/* Metric Highlights Pill Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-3 bg-white/90 backdrop-blur-md rounded-2xl border border-slate-200/80 shadow-md shadow-slate-200/40 text-left max-w-3xl mx-auto mb-14">
            <div className="p-3 px-4 border-r border-slate-100 last:border-r-0">
              <div className="flex items-center gap-1.5 text-slate-500 text-xs font-medium mb-1">
                <Zap className="w-3.5 h-3.5 text-amber-500" /> Latency
              </div>
              <div className="text-lg font-bold text-slate-900">&lt; 3.2 ms</div>
            </div>
            <div className="p-3 px-4 border-r border-slate-100 last:border-r-0">
              <div className="flex items-center gap-1.5 text-slate-500 text-xs font-medium mb-1">
                <Cpu className="w-3.5 h-3.5 text-indigo-500" /> Throughput
              </div>
              <div className="text-lg font-bold text-slate-900">1.8M / sec</div>
            </div>
            <div className="p-3 px-4 border-r border-slate-100 last:border-r-0">
              <div className="flex items-center gap-1.5 text-slate-500 text-xs font-medium mb-1">
                <Shield className="w-3.5 h-3.5 text-emerald-500" /> Reliability
              </div>
              <div className="text-lg font-bold text-slate-900">99.999% SLA</div>
            </div>
            <div className="p-3 px-4">
              <div className="flex items-center gap-1.5 text-slate-500 text-xs font-medium mb-1">
                <Sparkles className="w-3.5 h-3.5 text-violet-500" /> Overhead
              </div>
              <div className="text-lg font-bold text-slate-900">&lt; 0.4% CPU</div>
            </div>
          </div>
        </div>

        {/* Hero Image Combination Display */}
        <div className="relative max-w-5xl mx-auto">
          {/* Decorative frame shadow */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500 via-violet-500 to-emerald-500 rounded-3xl opacity-20 blur-lg" />
          
          <div className="relative bg-white rounded-2xl border border-slate-200/90 shadow-2xl shadow-slate-300/60 overflow-hidden">
            {/* Header bar of UI preview */}
            <div className="px-4 py-3 bg-slate-50/90 border-b border-slate-200/80 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
                <span className="ml-2 text-xs font-semibold text-slate-500 font-mono">
                  https://app.innolog.io/telemetry/live-cluster-01
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-100 text-emerald-800">
                  Cluster Healthy
                </span>
              </div>
            </div>

            {/* Generated High-Res Dashboard Image */}
            <img
              src="/hero-dashboard.png"
              alt="INNOLOG Telemetry & Analytics Dashboard"
              className="w-full h-auto object-cover max-h-[580px]"
            />

            {/* Floating Live Badge 1 */}
            <div className="absolute bottom-6 left-6 hidden sm:flex items-center gap-3 bg-white/95 backdrop-blur-md p-3 px-4 rounded-xl border border-slate-200 shadow-xl animate-float">
              <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
              <div>
                <p className="text-xs font-semibold text-slate-900">Real-time Telemetry Active</p>
                <p className="text-[11px] text-slate-500">Node-04 • 14,280 metrics/sec</p>
              </div>
            </div>

            {/* Floating Live Badge 2 */}
            <div className="absolute top-16 right-6 hidden md:flex items-center gap-3 bg-white/95 backdrop-blur-md p-3 px-4 rounded-xl border border-slate-200 shadow-xl animate-float-reverse">
              <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold text-xs">
                99%
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-900">Zero Parsing Delay</p>
                <p className="text-[11px] text-slate-500">Structured JSON / Syslog</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
