import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary-500 dark:bg-primary-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">{personalInfo.name}</h3>
            <p className="text-primary-200 text-sm mt-1">{personalInfo.title}</p>
          </div>
          
          <div className="flex flex-col items-center">
            <p className="text-primary-200 text-sm">
              © {currentYear} All Rights Reserved
            </p>
            <p className="text-primary-200 text-xs mt-1 flex items-center">
              Made with <Heart size={12} className="mx-1 text-accent-500" /> by Ayoola Aina
            </p>
          </div>
          
          <div className="mt-4 md:mt-0">
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <a 
                    href="#home" 
                    className="text-primary-200 hover:text-white transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a 
                    href="#about" 
                    className="text-primary-200 hover:text-white transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a 
                    href="#experience" 
                    className="text-primary-200 hover:text-white transition-colors"
                  >
                    Experience
                  </a>
                </li>
                <li>
                  <a 
                    href="#contact" 
                    className="text-primary-200 hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;