import React from 'react';
import { 
  Wifi, 
  ThermometerSun, 
  ShieldCheck, 
  Cpu, 
  Activity, 
  FileCheck 
} from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-28 bg-white border-y border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-3">HARDWARE & SOFTWARE EXCELLENCE</h2>
          <h3 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            Engineered for Hostile 134°C Environments
          </h3>
          <p className="text-lg text-slate-600 leading-relaxed">
            Combining industrial thermal sensor precision with low-power microelectronics and modern software visualization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="glass-card glass-card-hover p-8 rounded-3xl">
            <div className="w-14 h-14 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center mb-6 text-indigo-600">
              <Wifi className="w-7 h-7" />
            </div>
            <h4 className="font-display text-xl font-bold text-slate-900 mb-3">Real-Time Data Streaming</h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              Continuous sensor data logging captures high-frequency telemetry packets and streams live sterilization readings to the dashboard.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="glass-card glass-card-hover p-8 rounded-3xl">
            <div className="w-14 h-14 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center mb-6 text-rose-600">
              <ThermometerSun className="w-7 h-7" />
            </div>
            <h4 className="font-display text-xl font-bold text-slate-900 mb-3">PT100 High-Precision RTD</h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              Precision RTD paired with MAX31865 15-bit ADC converter delivers 0.01°C temperature resolution under extreme 134°C steam pressure.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="glass-card glass-card-hover p-8 rounded-3xl">
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-6 text-emerald-600">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h4 className="font-display text-xl font-bold text-slate-900 mb-3">14-Byte Hardware CRC-16</h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              Every data payload includes START/END frame markers, RTC timestamps, logger ID, battery %, and CRC-16 polynomial payload validation.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="glass-card glass-card-hover p-8 rounded-3xl">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-6 text-blue-600">
              <Cpu className="w-7 h-7" />
            </div>
            <h4 className="font-display text-xl font-bold text-slate-900 mb-3">STM32L452 Ultra-Low Power</h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              ARM Cortex-M4 microcontroller inside the logger handles local data framing, non-volatile FRAM storage, and sensor power management.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="glass-card glass-card-hover p-8 rounded-3xl">
            <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center mb-6 text-amber-600">
              <Activity className="w-7 h-7" />
            </div>
            <h4 className="font-display text-xl font-bold text-slate-900 mb-3">Live Pressure & Thermal Sensing</h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              Dual sensor acquisition channels accurately log saturated steam pressure alongside chamber temperature for comprehensive validation.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="glass-card glass-card-hover p-8 rounded-3xl">
            <div className="w-14 h-14 rounded-2xl bg-cyan-50 border border-cyan-100 flex items-center justify-center mb-6 text-cyan-600">
              <FileCheck className="w-7 h-7" />
            </div>
            <h4 className="font-display text-xl font-bold text-slate-900 mb-3">EN 285 & ISO 17665 Compliant</h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              Automated sterilization cycle verification, F0 thermal lethality calculation, and exportable PDF audit logs for medical compliance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
