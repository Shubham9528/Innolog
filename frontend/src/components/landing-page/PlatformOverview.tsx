import React from 'react';

const PlatformOverview: React.FC = () => {
  return (
    <section className="bg-white py-24 border-b border-gray-100 overflow-hidden" id="overview">
      <div className="container-max space-y-24">
        
        {/* Part 1: Mission Feature Card Banner */}
        <div className="relative rounded-3xl bg-slate-900 text-white p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl border border-slate-800">
          {/* Background Accent Glow & Grid */}
          <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/20 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-500/20 rounded-full blur-[80px] pointer-events-none"></div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            {/* Shimmer Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-indigo-300 uppercase tracking-widest mb-8 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
              Our Platform Mission
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-8 tracking-tight leading-[1.2]">
              We believe hardware management shouldn't be{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
                harder than the hardware itself.
              </span>
            </h2>

            {/* Content Cards / Story Split */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mt-10">
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 flex items-center justify-center font-bold mb-4 text-sm">
                  ⚠️
                </div>
                <h4 className="text-base font-semibold text-white mb-2">The Legacy Dilemma</h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  For decades, engineering teams relied on scattered spreadsheets, legacy databases, and manual data entry—causing critical data loss, downtime, and compliance headaches.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-indigo-400/30 transition-all">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 flex items-center justify-center font-bold mb-4 text-sm">
                  🚀
                </div>
                <h4 className="text-base font-semibold text-white mb-2">The INNOLOG Standard</h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Built from the ground up to solve this exact problem. By combining real-time sync with an intuitive interface, we give teams complete visibility over their physical assets globally.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Part 2: Deployment Highlights (Text + Image Split) */}
        <div className="pt-12 border-t border-gray-100 flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Column: Key Deployment Highlights */}
          <div className="flex-1 w-full text-center lg:text-left">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
              Lightning-fast deployments. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                Zero configuration required.
              </span>
            </h3>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Connect your existing hardware infrastructure in minutes using our plug-and-play agents. We automatically detect device types, configure optimal polling rates, and establish secure tunnels without requiring firewall changes.
            </p>
            
            <ul className="space-y-4 mb-8 text-left inline-block lg:block">
              <li className="flex items-start gap-3 text-gray-700 font-medium">
                <svg className="w-6 h-6 text-emerald-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Automated device discovery & polling optimization</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700 font-medium">
                <svg className="w-6 h-6 text-emerald-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Out-of-the-box anomaly detection & alerting rules</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700 font-medium">
                <svg className="w-6 h-6 text-emerald-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>End-to-end AES-256 encrypted hardware streams</span>
              </li>
            </ul>
            
            <button className="px-8 py-3.5 text-sm font-semibold text-white bg-gray-900 hover:bg-gray-800 rounded-full transition-all shadow-sm hover:shadow-md">
              Read Documentation
            </button>
          </div>
          
          {/* Right Column: Visual Component Graphic */}
          <div className="flex-1 w-full relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
            
            <div className="bg-white border border-gray-200/90 rounded-2xl shadow-xl overflow-hidden group transform transition-transform duration-500 hover:scale-[1.02]">
              <img 
                src="/deployment.png" 
                alt="Zero-Touch Deployment Pipeline" 
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
};

export default PlatformOverview;
