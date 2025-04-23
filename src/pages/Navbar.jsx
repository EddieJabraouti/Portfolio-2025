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

        {/* Navigation Links */}
        <nav>
          <ul className="hidden md:flex space-x-6 text-sm font-medium">
            <li>
              <Link to="/" className="hover:text-emerald-400 transition">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-emerald-400 transition">About Me</Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-emerald-400 transition">Projects</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-emerald-400 transition">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Dark Mode Toggle (Placeholder) */}
        <button className="ml-4 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 text-sm rounded-md transition">
          Dark Mode / Light Mode
        </button>
      </div>
    </header>
  );
};

export default Navbar;
