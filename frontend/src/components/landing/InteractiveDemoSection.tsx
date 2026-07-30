import React, { useState, useEffect } from 'react';
import { Play, RotateCcw } from 'lucide-react';

export const InteractiveDemoSection: React.FC = () => {
  // Interactive Telemetry Simulator state
  const [cyclePhase, setCyclePhase] = useState<'heating' | 'sterilizing' | 'exhaust'>('sterilizing');
  const [currentTemp, setCurrentTemp] = useState<number>(134.2);
  const [currentPressure, setCurrentPressure] = useState<number>(2.12);
  const [sampleBit, setSampleBit] = useState<number>(1);
  const [packetCount, setPacketCount] = useState<number>(1420);

  // Live simulation tick effect
  useEffect(() => {
    const timer = setInterval(() => {
      setPacketCount(prev => prev + 1);
      setSampleBit(prev => (prev === 0 ? 1 : 0));

      if (cyclePhase === 'sterilizing') {
        setCurrentTemp(+(134.0 + Math.random() * 0.4).toFixed(2));
        setCurrentPressure(+(2.10 + Math.random() * 0.05).toFixed(2));
      } else if (cyclePhase === 'heating') {
        setCurrentTemp(prev => (prev < 134.0 ? +(prev + 1.2).toFixed(2) : 134.0));
        setCurrentPressure(prev => (prev < 2.1 ? +(prev + 0.08).toFixed(2) : 2.1));
      } else if (cyclePhase === 'exhaust') {
        setCurrentTemp(prev => (prev > 60.0 ? +(prev - 2.5).toFixed(2) : 60.0));
        setCurrentPressure(prev => (prev > 0.1 ? +(prev - 0.15).toFixed(2) : 0.0));
      }
    }, 1200);

    return () => clearInterval(timer);
  }, [cyclePhase]);

  const handleStartCycle = (phase: 'heating' | 'sterilizing' | 'exhaust') => {
    setCyclePhase(phase);
    if (phase === 'heating') {
      setCurrentTemp(85.0);
      setCurrentPressure(0.8);
    } else if (phase === 'sterilizing') {
      setCurrentTemp(134.2);
      setCurrentPressure(2.12);
    } else {
      setCurrentTemp(120.0);
      setCurrentPressure(1.5);
    }
  };

  return (
    <section id="interactive-demo" className="py-28 bg-slate-100/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-indigo-100 text-indigo-700 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <Play className="w-3.5 h-3.5 fill-indigo-700" />
            <span>Interactive Telemetry Simulation</span>
          </div>
          <h3 className="font-display text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Experience Real-Time Telemetry & Data Logging
          </h3>
          <p className="text-slate-600">
            Test how the INNOLOG software logs and decodes live telemetry packets during different sterilization cycle stages.
          </p>
        </div>

        {/* Interactive Simulator Box */}
        <div className="glass-card rounded-3xl p-8 border border-slate-200 shadow-xl max-w-5xl mx-auto">
          {/* Controls Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-200">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">SELECT AUTOCLAVE CYCLE PHASE</span>
              <div className="flex flex-wrap gap-3 mt-2">
                <button 
                  onClick={() => handleStartCycle('heating')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${cyclePhase === 'heating' ? 'bg-indigo-600 text-white shadow-md' : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'}`}
                >
                  1. Heating Phase (85°C → 134°C)
                </button>
                <button 
                  onClick={() => handleStartCycle('sterilizing')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${cyclePhase === 'sterilizing' ? 'bg-indigo-600 text-white shadow-md' : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'}`}
                >
                  2. Sterilization Hold (134.0°C Target)
                </button>
                <button 
                  onClick={() => handleStartCycle('exhaust')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${cyclePhase === 'exhaust' ? 'bg-indigo-600 text-white shadow-md' : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'}`}
                >
                  3. Rapid Exhaust & Cooling
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="text-xs font-mono font-semibold text-slate-600 bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-lg flex items-center space-x-1.5">
                <span className="text-slate-400 font-sans text-[11px] uppercase tracking-wider">Packets:</span>
                <span className="text-indigo-600 font-bold">{packetCount.toLocaleString()}</span>
              </div>
              <button 
                onClick={() => setPacketCount(0)}
                className="p-2 text-slate-500 hover:text-slate-800 bg-slate-100 rounded-lg hover:bg-slate-200 text-xs flex items-center space-x-1 cursor-pointer"
                title="Reset counter"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Counter</span>
              </button>
            </div>
          </div>

          {/* Live Data Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="text-xs font-semibold text-slate-500 mb-1">CHAMBER TEMPERATURE</div>
              <div className="font-display text-4xl font-extrabold text-slate-900 mb-2">
                {currentTemp} <span className="text-lg font-normal text-slate-400">°C</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                <div className="bg-indigo-600 h-full transition-all duration-500" style={{ width: `${Math.min(100, (currentTemp / 140) * 100)}%` }}></div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="text-xs font-semibold text-slate-500 mb-1">SATURATED STEAM PRESSURE</div>
              <div className="font-display text-4xl font-extrabold text-slate-900 mb-2">
                {currentPressure} <span className="text-lg font-normal text-slate-400">bar</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                <div className="bg-blue-500 h-full transition-all duration-500" style={{ width: `${Math.min(100, (currentPressure / 3) * 100)}%` }}></div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="text-xs font-semibold text-slate-500 mb-1">TELEMETRY SAMPLE RATE</div>
              <div className="font-display text-4xl font-extrabold text-indigo-600 mb-2">
                500 <span className="text-lg font-normal text-slate-400">Hz</span>
              </div>
              <div className="text-xs font-mono text-emerald-600 flex items-center font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-ping"></span>
                Channel {sampleBit + 1} Active
              </div>
            </div>
          </div>

          {/* Raw 14-Byte Binary Packet Stream Box */}
          <div className="bg-slate-900 text-emerald-400 p-5 rounded-2xl font-mono text-xs shadow-inner">
            <div className="flex justify-between items-center mb-3 text-slate-400 pb-2 border-b border-slate-800">
              <span className="font-semibold text-slate-200">14-BYTE RAW SENSOR PAYLOAD (HEX)</span>
              <span className="text-emerald-400">DECODER STATUS: 100% INTEGRITY</span>
            </div>
            <div className="flex flex-wrap gap-2 text-sm font-bold tracking-widest py-2">
              <span className="bg-slate-800 text-indigo-300 px-2 py-1 rounded">0xAA</span>
              <span className="bg-slate-800 text-indigo-300 px-2 py-1 rounded">0x55</span>
              <span className="bg-slate-800 text-white px-2 py-1 rounded">0x09</span>
              <span className="bg-slate-800 text-white px-2 py-1 rounded">0x84</span>
              <span className="bg-slate-800 text-amber-300 px-2 py-1 rounded">0x64</span>
              <span className="bg-slate-800 text-amber-300 px-2 py-1 rounded">0xC2</span>
              <span className="bg-slate-800 text-emerald-300 px-2 py-1 rounded">0x34</span>
              <span className="bg-slate-800 text-emerald-300 px-2 py-1 rounded">0x68</span>
              <span className="bg-slate-800 text-cyan-300 px-2 py-1 rounded">0x57</span>
              <span className="bg-slate-800 text-cyan-300 px-2 py-1 rounded">0x01</span>
              <span className="bg-slate-800 text-purple-300 px-2 py-1 rounded">0x9F</span>
              <span className="bg-slate-800 text-purple-300 px-2 py-1 rounded">0xE2</span>
              <span className="bg-slate-800 text-indigo-300 px-2 py-1 rounded">0x55</span>
              <span className="bg-slate-800 text-indigo-300 px-2 py-1 rounded">0xAA</span>
            </div>
            <div className="text-[11px] text-slate-400 mt-2 flex justify-between">
              <span>[START: 0xAA55] [ID: 0x0984] [TIMESTAMP: RTC] [TEMP_RAW: PT100] [BATTERY: 87%] [CRC16: 0x9FE2] [END: 0x55AA]</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
