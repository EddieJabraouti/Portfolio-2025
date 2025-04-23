import React from 'react';

const BottomNav = () => {
  return (
    <header className="bg-black text-white border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h2 className="text-lg font-semibold tracking-tight">
          Eddie Jabraouti <span className="text-lg">| Portfolio</span>
        </h2>
        
        {/* Social Icons - Adjusted to eliminate spacing */}
        <div className="flex items-center">
          <a href="https://github.com/Mogdi3" target="_blank" rel="noopener noreferrer" className="-ml-60">
            <img src="/images/github-white.png" alt="Github"/>
          </a>
          <a href="https://www.linkedin.com/in/eddie-jabraouti-77948a321/" target="_blank" rel="noopener noreferrer" className="-ml-1">
            <img src="/images/linkedin.png" alt="LinkedIn" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default BottomNav;