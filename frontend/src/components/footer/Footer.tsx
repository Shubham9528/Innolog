import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 py-12 border-t border-gray-200 relative z-10">
      <div className="container-max">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center opacity-90 shadow-sm">
              <span className="text-white font-bold text-sm">IN</span>
            </div>
            <span className="font-bold text-gray-900">INNOLOG</span>
          </div>
          
          <div className="flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Contact</a>
          </div>
          
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} INNOLOG. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
