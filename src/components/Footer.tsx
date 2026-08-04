import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Link } from 'react-scroll';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-night-900 border-t border-line py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <p className="font-heading text-lg font-semibold text-ink">
              {personalInfo.name} <span className="text-champagne-400">· {personalInfo.title}</span>
            </p>
            <p className="mt-1 font-mono text-xs text-ink-3">
              money-safe by default
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.id}
                    spy={true}
                    smooth={true}
                    offset={-72}
                    duration={500}
                    className="text-sm text-ink-2 hover:text-champagne-400 transition-colors cursor-pointer"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <p className="font-mono text-xs text-ink-3">
            © {currentYear} Ayoola Aina
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
