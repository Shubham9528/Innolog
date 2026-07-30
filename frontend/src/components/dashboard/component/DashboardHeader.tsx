import React, { useState } from 'react';
import {
  Download,
  Clock,
  RefreshCw,
  Bell,
  Cpu,
  CheckCircle2,
  FileText
} from 'lucide-react';

interface DashboardHeaderProps {
  onExportCSV?: () => void;
  onExportPDF?: () => void;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({ onExportCSV, onExportPDF }) => {
  const [selectedUnit, setSelectedUnit] = useState('Unit-01 (Main Autoclave)');
  const [timeRange, setTimeRange] = useState('15m');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 800);
  };

  return (
    <header className="bg-white border-b border-slate-200 px-6 py-4 sticky top-0 z-10 shadow-xs">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        
        {/* Title & Status */}
        <div>
          <div className="flex items-center space-x-3">
            <h1 className="text-xl font-extrabold text-slate-900 tracking-tight">
              Telemetry Statistics & Analytics
            </h1>
            <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              <span>Live Stream 10 Hz</span>
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            Real-time ultrasonic sensors monitoring for PT100 RTD temperature & steam pressure.
          </p>
        </div>

        {/* Controls Header Bar */}
        <div className="flex flex-wrap items-center gap-3">
          
          {/* Unit Selector */}
          <div className="relative flex items-center bg-slate-100/80 rounded-xl px-3 py-1.5 border border-slate-200 text-xs">
            <Cpu className="w-3.5 h-3.5 text-indigo-600 mr-2" />
            <select
              value={selectedUnit}
              onChange={(e) => setSelectedUnit(e.target.value)}
              className="bg-transparent text-slate-800 font-semibold focus:outline-none cursor-pointer pr-2"
            >
              <option>Unit-01 (Main Autoclave)</option>
              <option>Unit-02 (Ultrasonic Probe B)</option>
              <option>Unit-03 (Backup Logger)</option>
            </select>
          </div>

          {/* Time Range Selector */}
          <div className="flex items-center bg-slate-100 rounded-xl p-1 border border-slate-200 text-xs">
            <Clock className="w-3.5 h-3.5 text-slate-500 ml-2 mr-1" />
            {['15m', '1h', '6h', '24h'].map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-2.5 py-1 rounded-lg font-bold text-[11px] transition-all cursor-pointer ${
                  timeRange === range
                    ? 'bg-white text-indigo-600 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {range}
              </button>
            ))}
          </div>

          {/* Refresh Action */}
          <button
            onClick={handleRefresh}
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-all border border-slate-200 cursor-pointer"
            title="Refresh Telemetry"
          >
            <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin text-indigo-600' : ''}`} />
          </button>

          {/* Notification Button */}
          <button className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-all border border-slate-200 relative cursor-pointer">
            <Bell className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-indigo-600 rounded-full animate-ping"></span>
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-indigo-600 rounded-full"></span>
          </button>

          {/* Export Actions */}
          <div className="flex items-center space-x-2">
            <button
              onClick={onExportCSV}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV</span>
            </button>
            <button
              onClick={onExportPDF}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Export PDF</span>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};
