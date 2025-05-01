import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white dark:bg-primary-800 shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link 
          to="home" 
          spy={true} 
          smooth={true} 
          offset={-70} 
          duration={500} 
          className="text-2xl font-bold text-primary-500 dark:text-white cursor-pointer"
        >
          Ayoola Aina
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="px-3 py-2 text-sm font-medium rounded-md text-primary-500 dark:text-white hover:bg-primary-50 dark:hover:bg-primary-700 transition-all duration-200 cursor-pointer"
              activeClass="bg-primary-50 dark:bg-primary-700"
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={toggleDarkMode}
            className="ml-4 p-2 rounded-full bg-primary-50 dark:bg-primary-700 text-primary-500 dark:text-white hover:bg-primary-100 dark:hover:bg-primary-600 transition-all"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>

        {/* Mobile Navigation Button */}
        <div className="flex md:hidden items-center space-x-2">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-primary-50 dark:bg-primary-700 text-primary-500 dark:text-white"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md text-primary-500 dark:text-white hover:bg-primary-50 dark:hover:bg-primary-700"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-primary-800 shadow-lg animate-fadeIn">
          <div className="container mx-auto px-4 py-2">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="block py-3 px-4 text-primary-500 dark:text-white hover:bg-primary-50 dark:hover:bg-primary-700 rounded-md transition-all duration-200"
                activeClass="bg-primary-50 dark:bg-primary-700"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;