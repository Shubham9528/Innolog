import React, { useState } from 'react';
import {
  Search,
  Filter,
  CheckCircle2
} from 'lucide-react';

export const LiveLogTable: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const logs = [
    { id: 'PKT-1094', time: '19:12:44', temp: '134.30 °C', pressure: '2.18 bar', rssi: '-68 dBm', crc: 'PASSED', status: 'Hold Phase', statusBg: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
    { id: 'PKT-1093', time: '19:12:43', temp: '134.28 °C', pressure: '2.17 bar', rssi: '-68 dBm', crc: 'PASSED', status: 'Hold Phase', statusBg: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
    { id: 'PKT-1092', time: '19:12:42', temp: '134.25 °C', pressure: '2.17 bar', rssi: '-67 dBm', crc: 'PASSED', status: 'Hold Phase', statusBg: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
    { id: 'PKT-1091', time: '19:12:41', temp: '134.20 °C', pressure: '2.16 bar', rssi: '-69 dBm', crc: 'PASSED', status: 'Hold Phase', statusBg: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
    { id: 'PKT-1090', time: '19:12:40', temp: '134.15 °C', pressure: '2.15 bar', rssi: '-68 dBm', crc: 'PASSED', status: 'Hold Phase', statusBg: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
    { id: 'PKT-1089', time: '19:12:39', temp: '134.00 °C', pressure: '2.12 bar', rssi: '-69 dBm', crc: 'PASSED', status: 'Hold Phase', statusBg: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
    { id: 'PKT-1088', time: '19:12:38', temp: '133.85 °C', pressure: '2.09 bar', rssi: '-70 dBm', crc: 'PASSED', status: 'Heating', statusBg: 'bg-indigo-50 text-indigo-700 border-indigo-200' },
    { id: 'PKT-1087', time: '19:12:37', temp: '133.40 °C', pressure: '2.05 bar', rssi: '-68 dBm', crc: 'PASSED', status: 'Heating', statusBg: 'bg-indigo-50 text-indigo-700 border-indigo-200' }
  ];

  const filteredLogs = logs.filter(
    (log) =>
      log.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
      {/* Table Header & Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-5 border-b border-slate-100">
        <div>
          <div className="flex items-center space-x-2">
            <h3 className="font-extrabold text-slate-900 text-base">Telemetry Audit Stream</h3>
            <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
              14-Byte Packets
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            Real-time incoming telemetry packets with hardware CRC-16 validation.
          </p>
        </div>

        {/* Search Bar & Actions */}
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Search packet ID or status..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8 pr-4 py-1.5 rounded-xl border border-slate-200 text-xs bg-slate-50 text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 w-56"
            />
          </div>

          <button className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 cursor-pointer">
            <Filter className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Table Component */}
      <div className="overflow-x-auto mt-4">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase tracking-wider bg-slate-50/60">
              <th className="py-3 px-4 rounded-l-xl">Packet ID</th>
              <th className="py-3 px-4">Timestamp</th>
              <th className="py-3 px-4">Temperature (°C)</th>
              <th className="py-3 px-4">Steam Pressure</th>
              <th className="py-3 px-4">Ultrasonic RSSI</th>
              <th className="py-3 px-4">CRC-16</th>
              <th className="py-3 px-4 rounded-r-xl">Cycle Phase</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 font-medium">
            {filteredLogs.map((log) => (
              <tr key={log.id} className="hover:bg-slate-50/80 transition-colors">
                <td className="py-3 px-4 font-mono font-bold text-slate-900">{log.id}</td>
                <td className="py-3 px-4 text-slate-500 font-mono">{log.time}</td>
                <td className="py-3 px-4 font-extrabold text-amber-700 font-mono">{log.temp}</td>
                <td className="py-3 px-4 font-extrabold text-indigo-700 font-mono">{log.pressure}</td>
                <td className="py-3 px-4 text-slate-600 font-mono">{log.rssi}</td>
                <td className="py-3 px-4">
                  <span className="inline-flex items-center space-x-1 text-emerald-600 font-bold text-[11px]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{log.crc}</span>
                  </span>
                </td>
                <td className="py-3 px-4">
                  <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${log.statusBg}`}>
                    {log.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
