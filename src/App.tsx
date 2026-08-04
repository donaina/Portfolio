import React, { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import FeaturedProjects from './components/FeaturedProjects';
import Experience from './components/Experience';
import Stack from './components/Stack';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SEO from './components/SEO';

const App: React.FC = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <HelmetProvider>
      <SEO />
      <div className="font-sans bg-night-950 text-ink min-h-screen">
        <Header />
        <main>
          <Hero />
          <About />
          <FeaturedProjects />
          <Experience />
          <Stack />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default App;
