import React, { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SEO from './components/SEO';

const App: React.FC = () => {
  useEffect(() => {
    // Enable smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Cleanup
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <HelmetProvider>
      <SEO />
      <ThemeProvider>
        <div className="font-sans text-primary-800 dark:text-white bg-white dark:bg-primary-900 min-h-screen">
          <Header />
          <main>
            <Hero />
            <About />
            <Experience />
            <Skills />
            <Education />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;