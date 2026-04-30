import React from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { APP_NAME } from '../../utils/constants';
import ThemeToggle from './ThemeToggle';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/select-ride' },
    { name: 'Fleet', path: '/pricing' },
    { name: 'Driver', path: '/dashboard/driver' },
    { name: 'About', path: '/about' },
    { name: 'Support', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md border-b border-gray-100 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-black italic tracking-tighter text-gray-900 dark:text-white">
          {APP_NAME}
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isServicesActive = link.name === 'Services' && 
              (location.pathname === '/select-ride' || location.pathname === '/dashboard/user');
            
            return (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium tracking-tight transition-all duration-200 hover:text-primary-500 dark:hover:text-primary-400 ${
                    isActive || isServicesActive
                      ? 'text-primary-600 dark:text-primary-400 border-b-2 border-primary-500 pb-1'
                      : 'text-gray-600 dark:text-zinc-400'
                  }`
                }
              >
                {link.name}
              </NavLink>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Status Indicator (Senior UI Touch) */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 dark:bg-zinc-800 border border-gray-100 dark:border-zinc-700 mr-2 transition-all">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
            <span className="text-[10px] uppercase font-black tracking-tight text-gray-500 dark:text-zinc-500">Live Status</span>
          </div>
          
          <ThemeToggle />
          <Link to="/book-ride" className="hidden sm:block bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold text-sm px-6 py-3 rounded-lg transition-all active:scale-95 shadow-md hover:shadow-lg">
            Book Now
          </Link>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-600 dark:text-zinc-400"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-zinc-950 border-b border-gray-100 dark:border-zinc-800 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => {
              const isServicesActive = link.name === 'Services' && 
                (location.pathname === '/select-ride' || location.pathname === '/dashboard/user');

              return (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium ${
                    isServicesActive ? 'text-primary-600 dark:text-primary-400' : 'text-gray-900 dark:text-white'
                  }`}
                >
                  {link.name}
                </NavLink>
              );
            })}
            <Link to="/book-ride" className="w-full bg-yellow-500 text-center text-gray-900 font-semibold py-4 rounded-lg mt-4 shadow-md">
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
