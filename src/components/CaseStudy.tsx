import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Project } from '../types';
import { ArrowUpRight, X } from 'lucide-react';

const SECTIONS: {
  key: 'overview' | 'challenge' | 'architecture' | 'implementation' | 'testing' | 'outcomes';
  label: string;
}[] = [
  { key: 'overview', label: 'Overview' },
  { key: 'challenge', label: 'Challenge' },
  { key: 'architecture', label: 'Architecture' },
  { key: 'implementation', label: 'Implementation' },
  { key: 'testing', label: 'Testing' },
  { key: 'outcomes', label: 'Outcomes' },
];

interface CaseStudyProps {
  project: Project;
  /** Standalone panel under a compact card instead of a section inside an expanded card. */
  flush?: boolean;
  onClose?: () => void;
}

const CaseStudy: React.FC<CaseStudyProps> = ({ project, flush, onClose }) => {
  const prefersReducedMotion = useReducedMotion();
  const story = project.buildStory;
  if (!story) return null;

  return (
    <motion.div
      id={`build-${project.slug}`}
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.35, ease: 'easeInOut' }}
      className={`overflow-hidden scroll-mt-24 ${flush ? 'mt-4 border border-night-500 bg-night-800 rounded-sm' : ''}`}
    >
      <div
        className={
          flush
            ? 'bg-night-900/60 p-6 md:p-8'
            : 'mt-6 border-t border-night-500 bg-night-900/60 p-6 md:p-10'
        }
      >
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-line">
          <p className="font-mono text-xs tracking-[0.2em] text-ink-3">
            BUILD STORY<span className="sr-only"> — {project.title}</span>
          </p>
          <div className="flex flex-wrap items-center gap-3">
            {story.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 font-mono text-xs text-champagne-400 border border-champagne-500/40 hover:bg-champagne-500/10 transition-colors"
              >
                {link.label} <ArrowUpRight size={14} />
              </a>
            ))}
            {onClose && (
              <button
                type="button"
                onClick={onClose}
                aria-label={`Close build story — ${project.title}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 font-mono text-xs text-ink-3 hover:text-ink border border-night-500 transition-colors"
              >
                Close <X size={14} />
              </button>
            )}
          </div>
        </div>

        <div className="space-y-8">
          {SECTIONS.map(({ key, label }) => {
            const paragraphs = story[key];
            if (!paragraphs || paragraphs.length === 0) return null;
            return (
              <div key={key}>
                <h4 className="font-heading text-sm text-champagne-400 uppercase tracking-wider mb-2">
                  {label}
                </h4>
                {paragraphs.map((p, i) => (
                  <p key={i} className="text-ink-2 leading-relaxed mb-2">
                    {p}
                  </p>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default CaseStudy;
