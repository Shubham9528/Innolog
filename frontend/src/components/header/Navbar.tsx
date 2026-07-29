import React from 'react';

const Navbar: React.FC = () => {
  return (
    <header className="w-full fixed top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-gray-200/50 transition-all">
      <div className="container-max flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all duration-300">
            <span className="text-white font-bold text-xl tracking-tighter">IN</span>
          </div>
          <span className="font-bold text-2xl text-gray-900 tracking-tight">INNOLOG</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
          <a href="#overview" className="hover:text-gray-900 transition-colors">Overview</a>
          <a href="#how-it-works" className="hover:text-gray-900 transition-colors">How it Works</a>
          <a href="#architecture" className="hover:text-gray-900 transition-colors">Architecture</a>
          <a href="#resources" className="hover:text-gray-900 transition-colors">Resources</a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-6">
          <button className="hidden sm:block text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            Log In
          </button>
          <button className="px-6 py-2.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-full transition-all duration-300 shadow-md shadow-indigo-500/20">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
