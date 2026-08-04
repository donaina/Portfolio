import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';

const menuItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'stack', label: 'Stack' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-night-900/85 backdrop-blur border-b border-line py-2.5'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-72}
          duration={500}
          className="font-heading text-lg font-semibold text-ink tracking-tight cursor-pointer"
        >
          Ayoola <span className="text-champagne-400">Aina</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              spy={true}
              smooth={true}
              offset={-72}
              duration={500}
              className="px-3 py-2 text-sm font-medium rounded-sm text-ink-2 hover:text-ink hover:bg-night-800 transition-all duration-200 cursor-pointer"
              activeClass="text-champagne-400"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation Button */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setIsOpen((o) => !o)}
            className="p-2 rounded-sm text-ink hover:bg-night-800"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-night-900/95 backdrop-blur border-b border-line">
          <div className="container mx-auto px-4 py-2">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                spy={true}
                smooth={true}
                offset={-72}
                duration={500}
                className="block py-3 px-4 text-ink-2 hover:text-ink hover:bg-night-800 rounded-sm transition-all duration-200"
                activeClass="text-champagne-400"
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
