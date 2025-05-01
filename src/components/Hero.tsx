import React from 'react';
import { Link } from 'react-scroll';
import { ArrowDown, FileDown, Linkedin, Twitter, Github } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import profileImage from '/Images/ayoola.png';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-white to-primary-50 dark:from-primary-900 dark:to-primary-800"
    >
      <div className="container mx-auto px-4 py-12 md:py-20 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-10 md:mb-0 animate-fadeIn">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-primary-500 dark:text-white">
            Hi, I'm <span className="text-accent-500">{personalInfo.name}</span>
          </h1>
          <p className="text-lg sm:text-xl font-medium mt-3 mb-6 text-primary-400 dark:text-primary-200">
            {personalInfo.title}
          </p>
          <p className="text-base sm:text-lg mb-8 text-primary-400 dark:text-primary-200 max-w-lg">
            {personalInfo.bio}
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href={personalInfo.resumeUrl} 
              className="inline-flex items-center px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-md transition-all duration-300 shadow-md hover:shadow-lg"
              download
            >
              <FileDown size={18} className="mr-2" />
              Download CV
            </a>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="inline-flex items-center px-6 py-3 bg-accent-500 hover:bg-accent-600 text-primary-800 rounded-md transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
            >
              Contact Me
            </Link>
          </div>
          
          <div className="mt-8 flex space-x-4">
            <a 
              href={personalInfo.socialLinks.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-primary-100 dark:bg-primary-700 rounded-full text-primary-500 dark:text-white hover:bg-primary-200 dark:hover:bg-primary-600 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            {personalInfo.socialLinks.twitter && (
              <a 
                href={personalInfo.socialLinks.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-primary-100 dark:bg-primary-700 rounded-full text-primary-500 dark:text-white hover:bg-primary-200 dark:hover:bg-primary-600 transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            )}
            {personalInfo.socialLinks.github && (
              <a 
                href={personalInfo.socialLinks.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-primary-100 dark:bg-primary-700 rounded-full text-primary-500 dark:text-white hover:bg-primary-200 dark:hover:bg-primary-600 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            )}
          </div>
        </div>
        
        <div className="w-full md:w-1/2 flex justify-center animate-fadeIn">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-accent-500 shadow-xl">
            <img 
              src={profileImage} 
              alt={personalInfo.name} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 md:bottom-8 z-10">
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-white/90 dark:bg-primary-700/90 backdrop-blur rounded-full text-primary-500 dark:text-white shadow-lg hover:shadow-xl hover:bg-white dark:hover:bg-primary-700 transition-all duration-300 cursor-pointer"
          aria-label="Scroll to About section"
        >
          <ArrowDown size={24} strokeWidth={2.5} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;