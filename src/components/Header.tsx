import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

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
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // While the mobile menu is open: Escape closes it and returns focus to the
  // trigger, an outside pointer closes it, and growing past md collapses it.
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    const handlePointerDown = (event: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const desktop = window.matchMedia('(min-width: 768px)');
    const handleViewportChange = () => {
      if (desktop.matches) setIsOpen(false);
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('pointerdown', handlePointerDown);
    desktop.addEventListener('change', handleViewportChange);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('pointerdown', handlePointerDown);
      desktop.removeEventListener('change', handleViewportChange);
    };
  }, [isOpen]);

  return (
    <header
      ref={headerRef}
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
          smooth={!prefersReducedMotion}
          offset={-72}
          duration={500}
          className="font-heading text-lg font-semibold text-ink tracking-tight cursor-pointer"
        >
          Ayoola <span className="text-champagne-400">Aina</span>
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Primary" className="hidden md:flex items-center">
          <ul className="flex items-center">
            {menuItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.id}
                  spy={true}
                  smooth={!prefersReducedMotion}
                  offset={-72}
                  duration={500}
                  className="block px-3 py-2 text-sm font-medium rounded-sm text-ink-2 hover:text-ink hover:bg-night-800 transition-all duration-200 cursor-pointer"
                  activeClass="text-champagne-400"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Navigation Button */}
        <div className="flex md:hidden items-center">
          <button
            type="button"
            ref={menuButtonRef}
            onClick={() => setIsOpen((o) => !o)}
            className="p-2 rounded-sm text-ink hover:bg-night-800"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={24} aria-hidden /> : <Menu size={24} aria-hidden />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        hidden={!isOpen}
        className="md:hidden bg-night-900/95 backdrop-blur border-b border-line"
      >
        <nav aria-label="Mobile" className="container mx-auto px-4 py-2">
          <ul>
            {menuItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.id}
                  spy={true}
                  smooth={!prefersReducedMotion}
                  offset={-72}
                  duration={500}
                  className="block py-3 px-4 text-ink-2 hover:text-ink hover:bg-night-800 rounded-sm transition-all duration-200"
                  activeClass="text-champagne-400"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
