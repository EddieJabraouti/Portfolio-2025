import React from 'react';

const BottomNav = () => {
  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex flex-col space-y-4 sm:hidden">
          <h2 className="text-base font-semibold tracking-tight text-center">
            Eddie Jabraouti <span className="text-base">| Portfolio</span>
          </h2>
          
          <div className="flex items-center justify-center space-x-6">
            <a href="https://github.com/EddieJabraouti" target="_blank" rel="noopener noreferrer">
              <img src="/images/github-white.png" alt="Github" className="h-8 w-8" />
            </a>
            <a href="https://www.linkedin.com/in/eddie-jabraouti-77948a321/" target="_blank" rel="noopener noreferrer">
              <img src="/images/linkedin.png" alt="LinkedIn" className="h-8 w-8" />
            </a>
          </div>
          
          <p className="text-xs text-center text-gray-300">
            &copy; {new Date().getFullYear()} Eddie Jabraouti · All rights reserved.
          </p>
        </div>

        <div className="hidden sm:flex justify-between items-center">
          <h2 className="text-lg font-semibold tracking-tight">
            Eddie Jabraouti <span className="text-lg">| Portfolio</span>
          </h2>
          
          <div className="flex items-center space-x-4">
            <a href="https://github.com/EddieJabraouti" target="_blank" rel="noopener noreferrer">
              <img src="/images/github-white.png" alt="Github" className="h-8 w-8 hover:opacity-80 transition-opacity" />
            </a>
            <a href="https://www.linkedin.com/in/eddie-jabraouti-77948a321/" target="_blank" rel="noopener noreferrer">
              <img src="/images/linkedin.png" alt="LinkedIn" className="h-8 w-8 hover:opacity-80 transition-opacity" />
            </a>
          </div>
          
          <p className="text-sm text-gray-300">
            &copy; {new Date().getFullYear()} Eddie Jabraouti · All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default BottomNav;