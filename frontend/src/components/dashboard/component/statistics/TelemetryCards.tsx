import React from 'react';
import {
  Thermometer,
  Gauge,
  Wifi,
  HardDrive
} from 'lucide-react';

export const TelemetryCards: React.FC = () => {
  const cards = [
    {
      title: 'Chamber Temperature',
      sensor: 'PT100 RTD Probe',
      value: '134.3',
      unit: '°C',
      target: 'Target: 134.0 °C',
      change: '+0.2°C/sec',
      isUp: true,
      status: 'In Sterilization Hold',
      statusBg: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20',
      icon: Thermometer,
      gradient: 'from-amber-500/10 via-amber-500/5 to-transparent',
      borderColor: 'border-amber-200/80',
      iconBg: 'bg-amber-500/10 text-amber-600'
    },
    {
      title: 'Steam Pressure',
      sensor: 'Saturated Steam Probe',
      value: '2.18',
      unit: 'bar',
      target: 'Target: 2.10 - 2.25 bar',
      change: 'Stable (±0.02 bar)',
      isUp: true,
      status: 'Optimal Pressure',
      statusBg: 'bg-indigo-500/10 text-indigo-600 border-indigo-500/20',
      icon: Gauge,
      gradient: 'from-indigo-500/10 via-indigo-500/5 to-transparent',
      borderColor: 'border-indigo-200/80',
      iconBg: 'bg-indigo-500/10 text-indigo-600'
    },
    {
      title: 'Ultrasonic Signal (RSSI)',
      sensor: 'Through-wall Transducer',
      value: '-68',
      unit: 'dBm',
      target: 'Packet Loss: 0.02%',
      change: '99.9% Delivery',
      isUp: true,
      status: 'Link Strong',
      statusBg: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20',
      icon: Wifi,
      gradient: 'from-emerald-500/10 via-emerald-500/5 to-transparent',
      borderColor: 'border-emerald-200/80',
      iconBg: 'bg-emerald-500/10 text-emerald-600'
    },
    {
      title: 'FRAM Data Storage',
      sensor: 'Non-Volatile Storage',
      value: '84',
      unit: '% Free',
      target: '14-Byte Packets Saved',
      change: '4,280 Logs Saved',
      isUp: true,
      status: 'Logging Active',
      statusBg: 'bg-violet-500/10 text-violet-600 border-violet-500/20',
      icon: HardDrive,
      gradient: 'from-violet-500/10 via-violet-500/5 to-transparent',
      borderColor: 'border-violet-200/80',
      iconBg: 'bg-violet-500/10 text-violet-600'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      {cards.map((card, index) => {
        const Icon = card.icon;
        return (
          <div
            key={index}
            className={`relative overflow-hidden rounded-2xl bg-white border ${card.borderColor} p-5 shadow-xs hover:shadow-md transition-all duration-300 group`}
          >
            {/* Top Row */}
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  {card.sensor}
                </span>
                <h3 className="text-sm font-extrabold text-slate-800 mt-0.5">
                  {card.title}
                </h3>
              </div>
              <div className={`p-2.5 rounded-xl ${card.iconBg} transition-transform group-hover:scale-110`}>
                <Icon className="w-5 h-5" />
              </div>
            </div>

            {/* Main Value Display */}
            <div className="mt-4 flex items-baseline space-x-1.5">
              <span className="text-3xl font-black text-slate-900 tracking-tight font-display">
                {card.value}
              </span>
              <span className="text-sm font-bold text-slate-500">{card.unit}</span>
            </div>

            {/* Sub details */}
            <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="font-medium text-slate-500">{card.target}</span>
              <span className={`inline-flex items-center text-[10px] font-bold px-2 py-0.5 rounded-full border ${card.statusBg}`}>
                {card.status}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
