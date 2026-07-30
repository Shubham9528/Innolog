import React from 'react';
import { Radio, LogIn } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-slate-200/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer shrink-0" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-10 h-10 rounded-xl gradient-accent flex items-center justify-center shadow-md shadow-indigo-500/20">
              <Radio className="text-white w-5 h-5 animate-pulse" />
            </div>
            <div>
              <span className="font-display font-extrabold text-2xl tracking-tight text-slate-900 leading-none">INNOLOG</span>
              <span className="block text-[10px] font-semibold uppercase tracking-widest text-indigo-600 font-mono mt-0.5">Autoclave Data Logging</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <a href="#project-overview" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors whitespace-nowrap">Overview</a>
            <a href="#features" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors whitespace-nowrap">Features</a>
            <a href="#interactive-demo" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors whitespace-nowrap">Live Simulation</a>
            <a href="#how-it-works" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors whitespace-nowrap">Architecture</a>
            <a href="#specs" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors whitespace-nowrap">Specs</a>
            <a href="#compliance" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors whitespace-nowrap">Compliance</a>
          </div>

          {/* Header Right Actions */}
          <div className="flex items-center space-x-3 sm:space-x-4 shrink-0">
            <div className="hidden sm:flex items-center space-x-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold whitespace-nowrap shrink-0">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span>Base Station Active</span>
            </div>
            
            <a 
              href="#login"
              className="gradient-accent text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-indigo-500/25 transition-all transform hover:-translate-y-0.5 flex items-center space-x-2 cursor-pointer whitespace-nowrap shrink-0"
            >
              <span>Login</span>
              <LogIn className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
