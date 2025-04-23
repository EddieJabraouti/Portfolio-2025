import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
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
        
        {/* Navigation Links */}
        <nav>
          <ul className="hidden md:flex space-x-6 text-sm font-medium -ml-60">
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
        
        {/* Dark Mode Toggle */}
        <button className="border border-white rounded ml-4 bg-black hover:bg-gray-700 text-white px-4 py-2 text-sm rounded-md transition">
          Dark Mode / Light Mode
        </button>
      </div>
    </header>
  );
};

export default Navbar;