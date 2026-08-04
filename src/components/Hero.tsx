import React from 'react';
import { Link } from 'react-scroll';
import { ArrowDown, ArrowUpRight, FileDown, Linkedin, Twitter, Github } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import GridBackdrop from './ui/GridBackdrop';
import FlowLine from './ui/FlowLine';
import Stat from './ui/Stat';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      <GridBackdrop />
      <div className="container mx-auto px-4 relative">
        <p className="font-mono text-sm text-champagne-400 tracking-wider mb-5">
          {personalInfo.location} — {personalInfo.availability}
        </p>

        <h1 className="font-heading text-5xl md:text-7xl font-semibold text-ink tracking-tight">
          {personalInfo.name}
        </h1>
        <p className="mt-4 font-heading text-xl md:text-2xl text-champagne-300">
          {personalInfo.title}
        </p>
        <p className="mt-6 text-ink-2 text-lg leading-relaxed max-w-2xl">
          {personalInfo.tagline}
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-72}
            duration={500}
            className="inline-flex items-center gap-2 px-6 py-3 bg-champagne-400 text-night-950 font-medium text-sm hover:bg-champagne-300 transition-colors cursor-pointer"
          >
            View selected work <ArrowUpRight size={16} />
          </Link>
          <a
            href={personalInfo.resumeUrl}
            download
            className="inline-flex items-center gap-2 px-6 py-3 border border-night-500 text-ink-2 text-sm hover:border-champagne-500/50 hover:text-ink transition-colors"
          >
            <FileDown size={16} /> Download resume
          </a>
        </div>

        <div className="mt-10 flex gap-4">
          <a
            href={personalInfo.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-night-500 rounded-sm text-ink-2 hover:border-champagne-500/50 hover:text-champagne-400 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          {personalInfo.socialLinks.twitter && (
            <a
              href={personalInfo.socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-night-500 rounded-sm text-ink-2 hover:border-champagne-500/50 hover:text-champagne-400 transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </a>
          )}
          {personalInfo.socialLinks.github && (
            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-night-500 rounded-sm text-ink-2 hover:border-champagne-500/50 hover:text-champagne-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
          )}
        </div>

        {/* stat tiles */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10">
          {personalInfo.stats.map((stat) => (
            <Stat key={stat.label} stat={stat} />
          ))}
        </div>

        {/* NIP flow rail */}
        <div className="mt-16 max-w-3xl">
          <p className="font-mono text-xs tracking-[0.2em] text-ink-3 mb-4">
            // THE RAIL I BUILD ON — NIP TRANSFER FLOW
          </p>
          <FlowLine />
        </div>
      </div>

      <Link
        to="about"
        spy={true}
        smooth={true}
        offset={-72}
        duration={500}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center justify-center w-11 h-11 border border-night-500 rounded-full text-ink-3 hover:text-champagne-400 hover:border-champagne-500/50 transition-colors cursor-pointer"
        aria-label="Scroll to About section"
      >
        <ArrowDown size={20} className="animate-bounce" />
      </Link>
    </section>
  );
};

export default Hero;
