import React from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div> 
      <header> 
        <h2>Eddie Jabraouti | Portfolio</h2>
        <nav>
         <ul> 
            <li> 
                <Link to="/">Home</Link>
            </li>
            <li> 
                <Link to="/about">About Me</Link>
            </li>
            <li> 
                <Link to="/projects">Projects</Link>
            </li>
            <li> 
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
        <button>Dark Mode/Light Mode</button>
        </nav>
      </header>
      </div>
  );
};

export default Navbar;