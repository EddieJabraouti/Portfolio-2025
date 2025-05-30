import React from 'react';

const BottomNav = () => {
  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h2 className="text-lg font-semibold tracking-tight">
          Eddie Jabraouti <span className="text-lg">| Portfolio</span>
        </h2>
        
        <div className="flex items-center space-x-4 ml-20">
          <a href="https://github.com/EddieJabraouti" target="_blank" rel="noopener noreferrer">
            <img src="/images/github-white.png" alt="Github" className="h-16 w-16" /> 
          </a>
          <a href="https://www.linkedin.com/in/eddie-jabraouti-77948a321/" target="_blank" rel="noopener noreferrer">
            <img src="/images/linkedin.png" alt="LinkedIn" className="h-15 w-15" /> 
          </a>
        </div>
        
        <p className="pt-0 text-sm text-white">&copy; {new Date().getFullYear()} Eddie Jabraouti · All rights reserved.</p>
      </div>
    </footer>
  );
};

export default BottomNav;
