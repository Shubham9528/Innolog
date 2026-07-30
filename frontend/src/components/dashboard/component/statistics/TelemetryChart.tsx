import React, { useState } from 'react';

export const TelemetryChart: React.FC = () => {
  const [activeMetric, setActiveMetric] = useState<'both' | 'temp' | 'pressure'>('both');

  // Simulated telemetry data points for sterilization cycle
  const points = [
    { time: '00:00', temp: 25, pressure: 0.1, phase: 'Pre-Vacuum' },
    { time: '02:00', temp: 45, pressure: 0.3, phase: 'Pre-Vacuum' },
    { time: '04:00', temp: 85, pressure: 0.9, phase: 'Heating' },
    { time: '06:00', temp: 115, pressure: 1.6, phase: 'Heating' },
    { time: '08:00', temp: 134.1, pressure: 2.15, phase: 'Sterilization Hold' },
    { time: '10:00', temp: 134.3, pressure: 2.18, phase: 'Sterilization Hold' },
    { time: '12:00', temp: 134.2, pressure: 2.17, phase: 'Sterilization Hold' },
    { time: '14:00', temp: 134.0, pressure: 2.16, phase: 'Sterilization Hold' },
    { time: '16:00', temp: 102, pressure: 1.2, phase: 'Exhaust' },
    { time: '18:00', temp: 65, pressure: 0.4, phase: 'Drying' },
    { time: '20:00', temp: 35, pressure: 0.1, phase: 'Completed' },
  ];

  // Map data to SVG viewport coordinates (width 800, height 260)
  const chartWidth = 760;
  const chartHeight = 220;
  const paddingX = 40;
  const paddingY = 20;

  const minTemp = 20;
  const maxTemp = 150;

  const minPress = 0;
  const maxPress = 3.0;

  const getTempY = (temp: number) => {
    return chartHeight - ((temp - minTemp) / (maxTemp - minTemp)) * (chartHeight - paddingY * 2) - paddingY;
  };

  const getPressY = (press: number) => {
    return chartHeight - ((press - minPress) / (maxPress - minPress)) * (chartHeight - paddingY * 2) - paddingY;
  };

  const getX = (index: number) => {
    return paddingX + (index / (points.length - 1)) * (chartWidth - paddingX * 2);
  };

  const tempPath = points
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${getX(i)} ${getTempY(p.temp)}`)
    .join(' ');

  const pressPath = points
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${getX(i)} ${getPressY(p.pressure)}`)
    .join(' ');

  const tempArea = `${tempPath} L ${getX(points.length - 1)} ${chartHeight} L ${getX(0)} ${chartHeight} Z`;
  const pressArea = `${pressPath} L ${getX(points.length - 1)} ${chartHeight} L ${getX(0)} ${chartHeight} Z`;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs relative overflow-hidden">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-5 border-b border-slate-100">
        <div>
          <div className="flex items-center space-x-2">
            <h3 className="font-extrabold text-slate-900 text-base">Sterilization Telemetry Curve</h3>
            <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-indigo-50 text-indigo-600 border border-indigo-200">
              EN 285 Cycle Standard
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            Synchronized PT100 RTD Temperature (°C) and Steam Pressure (bar) real-time profile.
          </p>
        </div>

        {/* Legend & Filter Controls */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center bg-slate-100 rounded-xl p-1 text-xs border border-slate-200">
            <button
              onClick={() => setActiveMetric('both')}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeMetric === 'both' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Dual View
            </button>
            <button
              onClick={() => setActiveMetric('temp')}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeMetric === 'temp' ? 'bg-amber-500 text-white shadow-xs' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Temp (°C)
            </button>
            <button
              onClick={() => setActiveMetric('pressure')}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeMetric === 'pressure' ? 'bg-indigo-600 text-white shadow-xs' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Pressure (bar)
            </button>
          </div>
        </div>
      </div>

      {/* Main Chart Canvas */}
      <div className="pt-6 relative">
        
        {/* Phase Zone Labels Overlay */}
        <div className="grid grid-cols-4 text-center text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 border-b border-slate-100 pb-2">
          <div className="text-slate-500 bg-slate-50 py-1 rounded-md border border-slate-200/60 mx-1">1. Pre-Vacuum</div>
          <div className="text-indigo-600 bg-indigo-50 py-1 rounded-md border border-indigo-200/60 mx-1">2. Heating</div>
          <div className="text-amber-700 bg-amber-50 py-1 rounded-md border border-amber-200/60 mx-1">3. Sterilization (134°C Hold)</div>
          <div className="text-slate-500 bg-slate-50 py-1 rounded-md border border-slate-200/60 mx-1">4. Exhaust & Dry</div>
        </div>

        {/* SVG Graphic */}
        <div className="w-full overflow-x-auto">
          <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="w-full h-56">
            <defs>
              <linearGradient id="tempGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.0" />
              </linearGradient>
              <linearGradient id="pressGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#4f46e5" stopOpacity="0.0" />
              </linearGradient>
            </defs>

            {/* Grid horizontal lines */}
            {[0, 0.25, 0.5, 0.75, 1].map((ratio, i) => {
              const y = paddingY + ratio * (chartHeight - paddingY * 2);
              return (
                <line
                  key={i}
                  x1={paddingX}
                  y1={y}
                  x2={chartWidth - paddingX}
                  y2={y}
                  stroke="#e2e8f0"
                  strokeDasharray="4 4"
                  strokeWidth="1"
                />
              );
            })}

            {/* Sterilization Hold Threshold Marker (134°C line) */}
            <line
              x1={paddingX}
              y1={getTempY(134)}
              x2={chartWidth - paddingX}
              y2={getTempY(134)}
              stroke="#ef4444"
              strokeDasharray="6 3"
              strokeWidth="1.5"
            />
            <text x={chartWidth - paddingX - 90} y={getTempY(134) - 6} fill="#ef4444" fontSize="10" fontWeight="bold">
              134°C Target Hold
            </text>

            {/* Temperature Fill & Line */}
            {(activeMetric === 'both' || activeMetric === 'temp') && (
              <>
                <path d={tempArea} fill="url(#tempGradient)" />
                <path d={tempPath} fill="none" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                {points.map((p, i) => (
                  <circle
                    key={`temp-${i}`}
                    cx={getX(i)}
                    cy={getTempY(p.temp)}
                    r="4"
                    fill="#ffffff"
                    stroke="#f59e0b"
                    strokeWidth="2.5"
                  />
                ))}
              </>
            )}

            {/* Steam Pressure Fill & Line */}
            {(activeMetric === 'both' || activeMetric === 'pressure') && (
              <>
                <path d={pressArea} fill="url(#pressGradient)" />
                <path d={pressPath} fill="none" stroke="#4f46e5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                {points.map((p, i) => (
                  <circle
                    key={`press-${i}`}
                    cx={getX(i)}
                    cy={getPressY(p.pressure)}
                    r="4"
                    fill="#ffffff"
                    stroke="#4f46e5"
                    strokeWidth="2.5"
                  />
                ))}
              </>
            )}
          </svg>
        </div>

        {/* Bottom Legend Labels */}
        <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs font-semibold text-slate-600">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
              <span>Chamber Temp (°C)</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-indigo-600 inline-block"></span>
              <span>Steam Pressure (bar)</span>
            </div>
            <div className="flex items-center space-x-2 text-red-500">
              <span className="w-3 h-0.5 bg-red-500 inline-block border-b border-dashed"></span>
              <span>EN 285 Threshold (134.0°C)</span>
            </div>
          </div>
          <span className="text-[11px] text-slate-400 font-mono">10 Hz Telemetry Sync</span>
        </div>

      </div>
    </div>
  );
};
