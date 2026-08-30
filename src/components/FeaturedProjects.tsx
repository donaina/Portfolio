import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { projects } from '../data/portfolioData';
import Section from './ui/Section';
import Reveal from './ui/Reveal';
import Tag from './ui/Tag';
import CaseStudy from './CaseStudy';
import { ArrowUpRight, BookOpen, FileCode2 } from 'lucide-react';

const FeaturedProjects: React.FC = () => {
  const featured = projects.filter((p) => p.featured);

  const [openSlug, setOpenSlug] = useState<string | null>(() => {
    if (typeof window !== 'undefined') {
      const match = window.location.hash.match(/^#build-(.+)$/);
      if (match) return match[1];
    }
    return null;
  });

  const toggle = (slug: string) => {
    const next = openSlug === slug ? null : slug;
    setOpenSlug(next);
    if (next) {
      window.location.hash = `build-${slug}`;
    } else {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  };

  return (
    <Section
      id="projects"
      eyebrow="// 02 — SELECTED WORK"
      title="Selected work"
      banded
      description="The systems I build move money. Here are the two I can talk about publicly — one simulated, one in production."
    >
      <div className="space-y-12">
        {featured.map((project, idx) => (
          <Reveal key={project.id} delay={idx * 0.08}>
            <article className="border border-night-500 bg-night-800 rounded-sm frame-corners">
              <div className="p-6 md:p-10">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center flex-wrap gap-x-3 gap-y-1 mb-3">
                      <span className="font-mono text-xs text-ink-3">{project.role}</span>
                      <span className="font-mono text-xs text-ink-3">· {project.year}</span>
                      {project.status === 'live' && (
                        <span className="flex items-center gap-1.5 font-mono text-xs text-success-500">
                          <span className="w-1.5 h-1.5 rounded-full bg-success-500" />
                          live demo
                        </span>
                      )}
                      {project.status === 'production' && (
                        <span className="flex items-center gap-1.5 font-mono text-xs text-champagne-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-champagne-400" />
                          in production
                        </span>
                      )}
                    </div>
                    <h3 className="font-heading text-2xl md:text-3xl font-semibold text-ink tracking-tight">
                      {project.title}
                    </h3>
                    <p className="mt-1 font-mono text-sm text-champagne-400">{project.subtitle}</p>
                  </div>
                </div>

                <p className="mt-6 text-ink-2 leading-relaxed max-w-3xl">{project.summary}</p>

                {/* metrics */}
                <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="border-t border-champagne-500/40 pt-3">
                      <p className="font-mono text-2xl md:text-3xl text-champagne-400">{m.value}</p>
                      <p className="mt-1 text-xs text-ink-3 leading-snug">{m.label}</p>
                    </div>
                  ))}
                </div>

                {/* highlights */}
                <ul className="mt-8 space-y-2">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-ink-2 leading-relaxed">
                      <span className="text-champagne-400 font-mono mt-0.5">▸</span>
                      {h}
                    </li>
                  ))}
                </ul>

                {/* stack */}
                <div className="mt-8 space-y-3">
                  {project.stack.map((area) => (
                    <div key={area.area} className="flex flex-wrap items-center gap-2">
                      <span className="w-28 shrink-0 font-mono text-xs text-ink-3 uppercase tracking-wider">
                        {area.area}
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {area.items.map((item) => (
                          <Tag key={item}>{item}</Tag>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* actions */}
                <div className="mt-8 flex flex-wrap gap-3">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-champagne-400 text-night-950 font-medium text-sm hover:bg-champagne-300 transition-colors"
                    >
                      Live demo <ArrowUpRight size={16} />
                    </a>
                  )}
                  {project.sourceUrl && (
                    <a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 border border-night-500 text-ink-2 text-sm hover:border-champagne-500/50 hover:text-ink transition-colors"
                    >
                      <FileCode2 size={16} /> Source
                    </a>
                  )}
                  {project.buildStory && (
                    <button
                      type="button"
                      onClick={() => toggle(project.slug)}
                      aria-expanded={openSlug === project.slug}
                      className="inline-flex items-center gap-2 px-5 py-2.5 border border-champagne-500/40 text-champagne-400 text-sm hover:bg-champagne-500/10 transition-colors"
                    >
                      <BookOpen size={16} />
                      {openSlug === project.slug ? 'Close build story' : 'Read the build story'}
                    </button>
                  )}
                </div>
              </div>

              <AnimatePresence>
                {openSlug === project.slug && <CaseStudy project={project} />}
              </AnimatePresence>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default FeaturedProjects;
