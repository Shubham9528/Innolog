import React from 'react';

const Stats: React.FC = () => {
  return (
    <section className="bg-white py-8 border-b border-gray-100 relative z-10 shadow-sm">
      <div className="container-max">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:divide-x divide-gray-100">
          <div className="text-center px-4 group">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 tracking-tight group-hover:text-indigo-600 transition-colors">1M+</h2>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Logs Processed</p>
          </div>
          
          <div className="text-center px-4 group">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 tracking-tight group-hover:text-purple-600 transition-colors">99.9%</h2>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Uptime</p>
          </div>
          
          <div className="text-center px-4 group">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 tracking-tight group-hover:text-pink-600 transition-colors">500+</h2>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Hardware Types</p>
          </div>
          
          <div className="text-center px-4 group">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 tracking-tight group-hover:text-blue-600 transition-colors">24/7</h2>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Real-time Sync</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
