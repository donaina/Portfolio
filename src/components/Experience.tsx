import React from 'react';
import { experiences } from '../data/portfolioData';
import Section from './ui/Section';
import Reveal from './ui/Reveal';
import Tag from './ui/Tag';

const Experience: React.FC = () => {
  return (
    <Section
      id="experience"
      eyebrow="// 03 — EXPERIENCE"
      title="Experience"
      description="Nine years across core banking, payments and financial infrastructure."
    >
      <div className="relative">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-night-500" aria-hidden />

        <div className="space-y-12">
          {experiences.map((exp) => (
            <Reveal key={exp.id}>
              <div className="relative pl-10">
                <span
                  className={`absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border bg-night-900 ${
                    exp.current ? 'border-champagne-400' : 'border-champagne-500'
                  }`}
                  aria-hidden
                />
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1">
                  <h3 className="font-heading text-xl font-medium text-ink">{exp.role}</h3>
                  {exp.current && (
                    <span className="font-mono text-[10px] text-success-500 border border-success-500/40 px-2 py-0.5 rounded-full">
                      CURRENT
                    </span>
                  )}
                </div>
                <p className="font-mono text-sm text-champagne-400">
                  {exp.company}
                  <span className="text-ink-3"> · {exp.period}</span>
                </p>

                <p className="mt-3 text-ink-2 leading-relaxed max-w-3xl">{exp.summary}</p>

                <ul className="mt-3 space-y-1.5">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-ink-2 leading-relaxed">
                      <span className="text-champagne-400 font-mono mt-0.5">▸</span>
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.stack.map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;
