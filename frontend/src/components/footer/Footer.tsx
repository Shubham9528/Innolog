import { Activity } from 'lucide-react';
import { FaGithub, FaXTwitter, FaLinkedin } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-12 text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Info */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
              <Activity className="w-4 h-4" />
            </div>
            <span className="text-lg font-bold text-slate-900 tracking-tight">
              INNOLOG
            </span>
            <span className="text-xs text-slate-400">|</span>
            <span className="text-xs text-slate-500">
              © {new Date().getFullYear()} INNOLOG Inc. All rights reserved.
            </span>
          </div>

          {/* Nav Links */}
          <div className="flex items-center gap-6 text-xs font-medium text-slate-500">
            <a href="#overview" className="hover:text-indigo-600 transition-colors">Overview</a>
            <a href="#features" className="hover:text-indigo-600 transition-colors">Features</a>
            <a href="#live-demo" className="hover:text-indigo-600 transition-colors">Console</a>
            <a href="#privacy" className="hover:text-indigo-600 transition-colors">Privacy</a>
            <a href="#terms" className="hover:text-indigo-600 transition-colors">Terms</a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 text-slate-400">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-slate-900 transition-colors" title="GitHub">
              <FaGithub className="w-4 h-4" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-slate-900 transition-colors" title="X / Twitter">
              <FaXTwitter className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-slate-900 transition-colors" title="LinkedIn">
              <FaLinkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
