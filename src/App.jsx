import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Home from './pages/Home'; 
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import AnimatedHero from './pages/AnimatedHero';

import './index.css';
        // Main homepage


const App = () => {
  return (
    <Router>
      <Navbar /> 
      <AnimatedHero/>
      <Home/>
      <Routes>
        <Route path="/about" element={<About />} />  
        <Route path="/projects" element={<Projects />} /> 
        <Route path="/contact" element={<Contact />} />   
      </Routes>
    </Router>
  );
};

export default App;