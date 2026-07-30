import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  Activity,
  Settings,
  Zap,
  ShieldCheck,
  ChevronRight,
  User,
  Radio,
  LogOut
} from 'lucide-react';

interface DashboardSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const DashboardSidebar: React.FC<DashboardSidebarProps> = ({ activeTab, setActiveTab }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  const navItems = [
    { id: 'overview', label: 'Telemetry Statistics', icon: LayoutDashboard, badge: 'Live' },
    { id: 'realtime', label: 'Live Data Stream', icon: Activity },
    { id: 'settings', label: 'System Settings', icon: Settings },
  ];

  return (
    <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col h-screen sticky top-0 border-r border-slate-800 shrink-0">
      {/* Brand Header */}
      <div className="p-6 border-b border-slate-800/80 flex items-center space-x-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center shadow-lg shadow-indigo-500/25">
          <Radio className="w-5 h-5 text-white animate-pulse" />
        </div>
        <div>
          <div className="flex items-center space-x-1.5">
            <span className="font-display font-black text-lg text-white tracking-wider">INNOLOG</span>
            <span className="text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">v2.4</span>
          </div>
          <p className="text-[11px] text-slate-400 font-medium">Telemetry & Logging</p>
        </div>
      </div>

      {/* Hardware Link Status Card */}
      <div className="mx-4 mt-5 p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/50">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-semibold text-slate-200">Ultrasonic Telemetry</span>
          </div>
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
        </div>
        <div className="flex justify-between text-[11px] text-slate-400 font-mono">
          <span>Signal: <strong className="text-slate-200">-68 dBm</strong></span>
          <span>CRC: <strong className="text-emerald-400">100% OK</strong></span>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 px-3 py-6 space-y-1 overflow-y-auto">
        <div className="px-3 mb-2 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
          Main Navigation
        </div>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                isActive
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              <div className="flex items-center space-x-3">
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                <span>{item.label}</span>
              </div>
              {item.badge ? (
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                  isActive ? 'bg-indigo-500 text-white' : 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/30'
                }`}>
                  {item.badge}
                </span>
              ) : (
                <ChevronRight className={`w-3.5 h-3.5 opacity-0 transition-opacity ${isActive ? 'opacity-100' : ''}`} />
              )}
            </button>
          );
        })}
      </nav>

      {/* Autoclave Chamber Info & Logout */}
      <div className="p-4 border-t border-slate-800/80 bg-slate-950/40 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300">
              <User className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-200">Operator Tech</p>
              <p className="text-[10px] text-slate-400">Lab Unit #4 • EN 285</p>
            </div>
          </div>
          <Zap className="w-4 h-4 text-amber-400" />
        </div>

        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center space-x-2 py-2 px-3 rounded-xl bg-slate-800/80 hover:bg-rose-500/10 text-slate-300 hover:text-rose-400 border border-slate-700/60 hover:border-rose-500/30 text-xs font-semibold transition-all cursor-pointer"
        >
          <LogOut className="w-4 h-4" />
          <span>Sign Out</span>
        </button>
      </div>
    </aside>
  );
};
