import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo';

const Navbar = () => {

  const linkClass = ({ isActive }) =>
    isActive ? "hover:text-red-400 border-b-2 border-red-400 py-1.5" : "hover:text-red-400 py-1.5"

  return (
    <nav className="bg-white text-red py-5 ">
      <div className="container mx-auto flex justify-between items-center ">
        <div>
          {/* <div className="text-2xl font-bold">
            <NavLink to='/'>Zidio Development</NavLink>
          </div> */}
          <div className=' w-36'>
            <div className=' bg-white'>
            <NavLink to='/'><img src='./images/zidio.png' /></NavLink>
            </div>
          </div>
        </div>
        <ul className="flex space-x-6 text-[16px] font-semibold">
          <li><NavLink to="/" className={linkClass}>Home</NavLink></li>
          <li><NavLink to="/about" className={linkClass}>About</NavLink></li>
          <li><NavLink to="/JobsPage" className={linkClass}>Careers</NavLink></li>
          <li><NavLink to="/Services" className={linkClass}>Services</NavLink></li>
          <li><NavLink to="/Contact" className={linkClass}>Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
