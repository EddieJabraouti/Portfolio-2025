import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-black text-white border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h2 className="text-lg font-semibold tracking-tight">
          Eddie Jabraouti <span className="text-lg">| Portfolio</span>
        </h2>
        
        <div className="flex items-center ml-20">
          <a href="https://github.com/EddieJabraouti" target="_blank" rel="noopener noreferrer" className="ml-4">
            <img src="/images/github-white.png" alt="Github" className="h-16 w-16" /> 
          </a>
          <a href="https://www.linkedin.com/in/eddie-jabraouti-77948a321/" target="_blank" rel="noopener noreferrer" className="ml-4">
            <img src="/images/linkedin.png" alt="LinkedIn" className="h-15 w-15" /> 
          </a>
        </div>

        <button
          className="md:hidden text-white"
          onClick={toggleMobileMenu}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8"> {/* Increased hamburger size */}
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        <nav>
          <ul className="hidden md:flex space-x-6 text-sm font-medium">
            <li>
              <Link to="/" className="underline hover:text-emerald-400 transition">Home</Link>
            </li>
            <li>
              <Link to="/about" className="underline hover:text-emerald-400 transition">About Me</Link>
            </li>
            <li>
              <Link to="/projects" className="underline hover:text-emerald-400 transition">Projects</Link>
            </li>
            <li>
              <Link to="/contact" className="underline hover:text-emerald-400 transition">Contact</Link>
            </li>
          </ul>
        </nav>

        {isMobileMenuOpen && (
          <nav className="md:hidden absolute top-16 left-0 right-0 bg-black text-white p-4">
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <Link to="/" className="hover:text-emerald-400 transition" onClick={toggleMobileMenu}>Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-emerald-400 transition" onClick={toggleMobileMenu}>About Me</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-emerald-400 transition" onClick={toggleMobileMenu}>Projects</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-emerald-400 transition" onClick={toggleMobileMenu}>Contact</Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
