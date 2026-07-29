import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Install Lightweight Agent',
      description: 'Deploy our zero-dependency binary via a single terminal command. Compatible with Linux, Windows, Docker, and Kubernetes.',
      icon: (
        <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      codeSnippet: 'curl -fsSL https://get.innolog.io | sh',
    },
    {
      step: '02',
      title: 'Auto-Discover Fleet',
      description: 'INNOLOG agents automatically scan local interfaces, pair hardware nodes, and begin streaming encrypted telemetry instantly.',
      icon: (
        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      badge: 'Auto-Detect',
    },
    {
      step: '03',
      title: 'Stream Real-Time Analytics',
      description: 'Visualize metrics, set up custom alert triggers, and query logs across your global infrastructure in real time.',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      badge: 'Live Dashboard',
    },
  ];

  return (
    <section className="bg-white py-24 border-b border-gray-100 overflow-hidden" id="how-it-works">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-wider mb-4">
            How It Works
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Up and running in <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              under 3 minutes.
            </span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            No complex setup scripts or firewall reconfigurations. Simple steps to total fleet control.
          </p>
        </div>

        {/* 3-Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-gray-50 border border-gray-200/80 rounded-3xl p-8 relative flex flex-col justify-between group hover:border-indigo-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                {/* Step Number & Icon */}
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-3xl font-black text-gray-300 group-hover:text-indigo-600 transition-colors">
                    {item.step}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Code Snippet / Badge Preview */}
              {item.codeSnippet && (
                <div className="bg-slate-900 text-slate-200 text-xs font-mono p-3 rounded-xl border border-slate-800 flex items-center justify-between gap-2 overflow-x-auto">
                  <span className="truncate">{item.codeSnippet}</span>
                  <span className="text-slate-500 hover:text-white cursor-pointer select-none">📋</span>
                </div>
              )}

              {item.badge && (
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-full w-fit">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
                  {item.badge}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
