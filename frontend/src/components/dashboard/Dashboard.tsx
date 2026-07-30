import React, { useState } from 'react';
import { DashboardSidebar } from './component/DashboardSidebar';
import { DashboardHeader } from './component/DashboardHeader';
import { TelemetryCards } from './component/statistics/TelemetryCards';
import { TelemetryChart } from './component/statistics/TelemetryChart';
import { CycleStatusCard } from './component/statistics/CycleStatusCard';
import { LiveLogTable } from './component/statistics/LiveLogTable';

export const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const handleExportCSV = () => {
    alert('Exporting INNOLOG Telemetry Statistics to CSV format...');
  };

  const handleExportPDF = () => {
    alert('Generating EN 285 & ISO 17665 PDF Compliance Audit Report...');
  };

  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-500 selection:text-white">
      {/* Sidebar Navigation */}
      <DashboardSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        {/* Header Bar */}
        <DashboardHeader onExportCSV={handleExportCSV} onExportPDF={handleExportPDF} />

        {/* Content Container */}
        <main className="p-6 space-y-6 max-w-7xl mx-auto w-full">
          {activeTab === 'overview' && (
            <>
              {/* Top KPI Telemetry Metric Cards */}
              <TelemetryCards />

              {/* Middle Row: Main Telemetry Curve Chart & Cycle Monitor */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <TelemetryChart />
                </div>
                <div>
                  <CycleStatusCard />
                </div>
              </div>

              {/* Bottom Row: Live Telemetry Audit Packet Stream Table */}
              <LiveLogTable />
            </>
          )}

          {activeTab === 'realtime' && (
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
                <h2 className="text-lg font-bold text-slate-900 mb-2">High Frequency Telemetry Stream</h2>
                <p className="text-xs text-slate-500 mb-4">10 Hz Real-Time Ultrasonic Data Feed</p>
                <TelemetryChart />
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
              <h2 className="text-lg font-bold text-slate-900 mb-2">System Parameters & Thresholds</h2>
              <p className="text-xs text-slate-500 mb-4">EN 285 & ISO 17665 Compliance Settings</p>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-slate-50 border border-slate-200 rounded-xl">
                  <span className="text-xs font-semibold text-slate-700">Sterilization Target Hold Temperature</span>
                  <span className="text-xs font-mono font-bold text-indigo-600">134.0 °C</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-50 border border-slate-200 rounded-xl">
                  <span className="text-xs font-semibold text-slate-700">Minimum Steam Pressure Threshold</span>
                  <span className="text-xs font-mono font-bold text-indigo-600">2.10 bar</span>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
