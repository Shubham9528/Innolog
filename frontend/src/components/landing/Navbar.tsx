import React, { useState } from 'react';
import { Radio, LogIn, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-slate-200/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer shrink-0" 
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setIsMobileMenuOpen(false);
            }}
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
              className="hidden lg:flex gradient-accent text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-indigo-500/25 transition-all transform hover:-translate-y-0.5 items-center space-x-2 cursor-pointer whitespace-nowrap shrink-0"
            >
              <span>Login</span>
              <LogIn className="w-4 h-4" />
            </a>

            {/* Mobile Menu Toggle Button */}
            <button 
              className="lg:hidden p-2 text-slate-600 hover:text-indigo-600 transition-colors"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-xl absolute top-20 left-0 right-0 w-full">
          <div className="px-4 pt-4 pb-6 space-y-2">
            <a href="#project-overview" onClick={toggleMobileMenu} className="block px-4 py-3 text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-colors">Overview</a>
            <a href="#features" onClick={toggleMobileMenu} className="block px-4 py-3 text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-colors">Features</a>
            <a href="#interactive-demo" onClick={toggleMobileMenu} className="block px-4 py-3 text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-colors">Live Simulation</a>
            <a href="#how-it-works" onClick={toggleMobileMenu} className="block px-4 py-3 text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-colors">Architecture</a>
            <a href="#specs" onClick={toggleMobileMenu} className="block px-4 py-3 text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-colors">Specs</a>
            <a href="#compliance" onClick={toggleMobileMenu} className="block px-4 py-3 text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-colors">Compliance</a>
            
            <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col space-y-3">
              <a 
                href="#login"
                onClick={toggleMobileMenu}
                className="w-full gradient-accent text-white px-4 py-3 rounded-xl text-base font-semibold shadow-md flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Login</span>
                <LogIn className="w-5 h-5" />
              </a>
              
              <div className="sm:hidden flex items-center justify-center space-x-2 px-4 py-3 rounded-xl bg-emerald-50 text-emerald-700 text-sm font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                <span>Base Station Active</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
