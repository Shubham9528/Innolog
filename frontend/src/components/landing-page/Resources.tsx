import React from 'react';

const Resources: React.FC = () => {
  const resourcesList = [
    {
      category: 'Documentation',
      title: 'REST & gRPC API Reference',
      description: 'Comprehensive endpoint references, schema definitions, and interactive API playgrounds.',
      tag: 'API Docs',
      icon: '📘',
      linkText: 'Explore APIs',
    },
    {
      category: 'Guides',
      title: 'Edge Deployment Quickstarts',
      description: 'Step-by-step guides for configuring Raspberry Pi, NVIDIA Jetson, and Linux edge nodes.',
      tag: 'Hardware SDKs',
      icon: '🚀',
      linkText: 'Read Quickstart',
    },
    {
      category: 'Security',
      title: 'Enterprise Compliance Whitepaper',
      description: 'Learn how INNOLOG enforces AES-256 encryption, SOC2 Type II compliance, and RBAC.',
      tag: 'Whitepaper',
      icon: '🛡️',
      linkText: 'Download PDF',
    },
    {
      category: 'Community',
      title: 'Developer Discord & GitHub',
      description: 'Join over 4,000+ hardware engineers. Ask questions, contribute plugins, and share setups.',
      tag: 'Community',
      icon: '💬',
      linkText: 'Join Discord',
    },
  ];

  return (
    <section className="bg-gray-50 py-24 border-b border-gray-100 overflow-hidden" id="resources">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 text-purple-600 text-xs font-bold uppercase tracking-wider mb-4">
            Developer Resources
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Everything you need to <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
              build and scale.
            </span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Explore our developer documentation, SDK libraries, and community forums.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {resourcesList.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white border border-gray-200/80 rounded-3xl p-8 flex flex-col justify-between group hover:border-purple-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl">{item.icon}</span>
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                    {item.tag}
                  </span>
                </div>

                <span className="text-xs font-bold text-purple-600 uppercase tracking-wider block mb-2">
                  {item.category}
                </span>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-8">
                  {item.description}
                </p>
              </div>

              <div className="flex items-center gap-2 text-sm font-bold text-indigo-600 group-hover:text-purple-600 transition-colors">
                <span>{item.linkText}</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;
