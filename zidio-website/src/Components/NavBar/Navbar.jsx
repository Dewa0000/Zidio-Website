import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  
  const linkClass = ({isActive}) => 
              isActive ? "hover:text-gray-400" : "hover:text-red-400"
  
  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <a href="/">Zidio Learning</a>
        </div>
        <ul className="flex space-x-6">
          <li><NavLink to="/" className={linkClass}>Home</NavLink></li>
          <li><NavLink to="/about" className={linkClass}>About</NavLink></li>
          <li><NavLink to="/JobsPage" className={linkClass }>Careers</NavLink></li>
          <li><NavLink to="/Services" className={linkClass}>Services</NavLink></li>
          <li><NavLink to="/Contact" className={linkClass}>Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
