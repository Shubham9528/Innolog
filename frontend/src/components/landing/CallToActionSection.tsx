import React from 'react';
import { ArrowRight, LogIn } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CallToActionSection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-indigo-500 blur-3xl opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-cyan-500 blur-3xl opacity-20 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="font-display text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight">
          Ready to monitor your autoclave with precision data logging?
        </h2>
        <p className="text-indigo-200 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          Experience the next generation of sterilization telemetry. Access real-time temperature, pressure, and automated compliance logging.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link 
            to="/signup"
            className="w-full sm:w-auto gradient-accent text-white px-9 py-4 rounded-full text-base font-bold hover:shadow-2xl hover:shadow-indigo-500/40 transition-all transform hover:-translate-y-1 flex items-center justify-center space-x-3 cursor-pointer"
          >
            <span>Get Started / Create Account</span>
            <ArrowRight className="w-5 h-5" />
          </Link>

          <Link 
            to="/login"
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-full text-base font-bold transition-all flex items-center justify-center space-x-2 cursor-pointer"
          >
            <span>Sign In</span>
            <LogIn className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
