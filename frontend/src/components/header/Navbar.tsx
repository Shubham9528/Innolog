import { Activity, ArrowRight, ShieldCheck, Terminal, Layers } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 border-b border-slate-200/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-violet-500 p-0.5 shadow-md shadow-indigo-500/20 flex items-center justify-center">
            <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
              <Activity className="w-5 h-5 text-indigo-600" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-slate-900 via-indigo-950 to-indigo-700 bg-clip-text text-transparent">
                INNOLOG
              </span>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse mr-1" />
                v2.4 Live
              </span>
            </div>
            <span className="text-[11px] font-medium text-slate-500 -mt-1 hidden sm:inline-block">
              Telemetry & Log Intelligence
            </span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#overview" className="hover:text-indigo-600 transition-colors flex items-center gap-1.5">
            <Layers className="w-4 h-4 text-slate-400" />
            Overview
          </a>
          <a href="#features" className="hover:text-indigo-600 transition-colors flex items-center gap-1.5">
            <Activity className="w-4 h-4 text-slate-400" />
            Telemetry
          </a>
          <a href="#live-demo" className="hover:text-indigo-600 transition-colors flex items-center gap-1.5">
            <Terminal className="w-4 h-4 text-slate-400" />
            Live Stream
          </a>
          <a href="#security" className="hover:text-indigo-600 transition-colors flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-slate-400" />
            Enterprise
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <a
            href="#live-demo"
            className="hidden sm:inline-flex px-4 py-2 text-sm font-medium text-slate-700 hover:text-indigo-600 bg-slate-100/80 hover:bg-slate-100 rounded-lg transition-all"
          >
            Documentation
          </a>
          <a
            href="#get-started"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 rounded-lg shadow-md shadow-indigo-600/20 hover:shadow-indigo-600/30 transition-all cursor-pointer"
          >
            Launch Platform
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
