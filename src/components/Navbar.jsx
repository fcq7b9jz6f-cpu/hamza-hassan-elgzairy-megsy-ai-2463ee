import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ShoppingCart, User } from 'lucide-react';
import { ui } from '../lib/theme';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/projects', label: 'Projects' },
  { path: '/store', label: 'Store' },
  { path: '/support', label: 'Support' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const activeLinkClass = "text-violet-400";

  return (
    <header className="sticky top-0 z-50 glass">
      <div className={`${ui.container} flex items-center justify-between h-20`}>
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight">Hamza Elgzairy</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(link => (
            <NavLink key={link.path} to={link.path} className={({ isActive }) => 
              `font-medium text-white/80 hover:text-white transition-colors ${isActive ? activeLinkClass : ''}`
            }>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
           <NavLink to="/cart" className={({isActive}) => `relative text-white/80 hover:text-white ${isActive ? activeLinkClass : ''}`}>
            <ShoppingCart size={22} />
            {/* Add a badge for cart items count later */}
          </NavLink>
          <NavLink to="/account" className={({isActive}) => `text-white/80 hover:text-white ${isActive ? activeLinkClass : ''}`}>
            <User size={22} />
          </NavLink>

          <button 
            className="md:hidden text-white/80 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-surface pb-6">
          <nav className="flex flex-col items-center gap-6 pt-6">
            {navLinks.map(link => (
              <NavLink 
                key={link.path} 
                to={link.path} 
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => 
                  `text-lg font-medium text-white/80 hover:text-white transition-colors ${isActive ? activeLinkClass : ''}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
