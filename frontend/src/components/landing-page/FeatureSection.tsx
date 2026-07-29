import React from 'react';

const FeatureSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-32 relative" id="features">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container-max relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Seamless tracking. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Powerful analytics.
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Designed for engineering teams who demand precision, speed, and reliability without the clunky interfaces of the past.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Feature Card 1 */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(79,70,229,0.08)] hover:border-indigo-200 group">
            <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-indigo-500 group-hover:text-white transition-colors duration-300">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Real-Time Sync</h3>
            <p className="text-gray-600 leading-relaxed">
              Instantly collect logs from remote hardware. See updates appear on your dashboard with zero latency.
            </p>
          </div>

          {/* Feature Card 2 */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(168,85,247,0.08)] hover:border-purple-200 group">
            <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-purple-500 group-hover:text-white transition-colors duration-300">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Advanced Analytics</h3>
            <p className="text-gray-600 leading-relaxed">
              Transform raw logs into actionable insights. Built-in graphing, reporting, and anomaly detection.
            </p>
          </div>

          {/* Feature Card 3 */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(236,72,153,0.08)] hover:border-pink-200 group">
            <div className="w-14 h-14 bg-pink-50 text-pink-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-pink-500 group-hover:text-white transition-colors duration-300">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise Security</h3>
            <p className="text-gray-600 leading-relaxed">
              Your data is encrypted at rest and in transit. Role-based access control out of the box.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
