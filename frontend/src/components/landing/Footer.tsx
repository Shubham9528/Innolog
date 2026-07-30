import React from 'react';
import { Radio } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg gradient-accent flex items-center justify-center shadow-sm">
            <Radio className="text-white w-4 h-4" />
          </div>
          <span className="font-display font-bold text-xl text-slate-900">INNOLOG</span>
          <span className="text-xs text-slate-400 font-mono">v1.0.0</span>
        </div>

        <p className="text-slate-500 text-xs text-center md:text-left">
          &copy; {new Date().getFullYear()} INNOLOG Autoclave Telemetry Systems. Built for high-reliability medical & industrial environments.
        </p>

        <div className="flex space-x-6 text-xs font-medium text-slate-500">
          <a href="#features" className="hover:text-indigo-600 transition-colors">Features</a>
          <a href="#specs" className="hover:text-indigo-600 transition-colors">Specs</a>
          <a href="#compliance" className="hover:text-indigo-600 transition-colors">Compliance</a>
        </div>
      </div>
    </footer>
  );
};
