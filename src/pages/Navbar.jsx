import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-black text-white border-b border-gray-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        
        <div className="flex justify-between items-center md:hidden">
          <h2 className="text-base font-semibold tracking-tight">
            Eddie Jabraouti <span className="text-base">| Portfolio</span>
          </h2>
          <button
            className="text-white"
            onClick={toggleMobileMenu}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        <div className="hidden md:flex justify-between items-center">
          <h2 className="text-lg font-semibold tracking-tight">
            Eddie Jabraouti <span className="text-lg">| Portfolio</span>
          </h2>
          
          <nav className="flex-1 flex justify-center">
            <ul className="flex space-x-6 text-sm font-medium">
              <li>
                <Link to="/" className="underline hover:text-gray-400 transition">Home</Link>
              </li>
              <li>
                <Link to="/about" className="underline hover:text-gray-400 transition">About Me</Link>
              </li>
              <li>
                <Link to="/projects" className="underline hover:text-gray-400 transition">Projects</Link>
              </li>
              <li>
                <Link to="/contact" className="underline hover:text-gray-400 transition">Contact</Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center space-x-4">
            <a href="https://github.com/EddieJabraouti" target="_blank" rel="noopener noreferrer">
              <img src="/images/github-white.png" alt="Github" className="h-8 w-8 hover:opacity-80 transition-opacity" />
            </a>
            <a href="https://www.linkedin.com/in/eddie-jabraouti-77948a321/" target="_blank" rel="noopener noreferrer">
              <img src="/images/linkedin.png" alt="LinkedIn" className="h-8 w-8 hover:opacity-80 transition-opacity" />
            </a>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-800">
            <nav className="pt-4">
              <ul className="space-y-4 text-sm font-medium">
                <li>
                  <Link to="/" className="block hover:text-gray-400 transition" onClick={toggleMobileMenu}>Home</Link>
                </li>
                <li>
                  <Link to="/about" className="block hover:text-gray-400 transition" onClick={toggleMobileMenu}>About Me</Link>
                </li>
                <li>
                  <Link to="/projects" className="block hover:text-gray-400 transition" onClick={toggleMobileMenu}>Projects</Link>
                </li>
                <li>
                  <Link to="/contact" className="block hover:text-gray-400 transition" onClick={toggleMobileMenu}>Contact</Link>
                </li>
              </ul>
              
              <div className="flex items-center justify-center space-x-6 mt-6 pt-4 border-t border-gray-800">
                <a href="https://github.com/EddieJabraouti" target="_blank" rel="noopener noreferrer">
                  <img src="/images/github-white.png" alt="Github" className="h-8 w-8" />
                </a>
                <a href="https://www.linkedin.com/in/eddie-jabraouti-77948a321/" target="_blank" rel="noopener noreferrer">
                  <img src="/images/linkedin.png" alt="LinkedIn" className="h-8 w-8" />
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;