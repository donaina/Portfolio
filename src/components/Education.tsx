import React from 'react';
import { education, certifications } from '../data/portfolioData';
import Section from './ui/Section';
import Reveal from './ui/Reveal';

const Education: React.FC = () => {
  return (
    <Section
      id="education"
      eyebrow="// 05 — CREDENTIALS"
      title="Education & certifications"
      banded
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <h3 className="font-mono text-sm uppercase tracking-wider text-ink-3 mb-4">Education</h3>
          <div className="space-y-4">
            {education.map((edu) => (
              <Reveal key={edu.id}>
                <div className="border border-night-500 bg-night-800 rounded-sm p-6">
                  <h4 className="font-heading text-lg text-ink">{edu.degree}</h4>
                  <p className="mt-1 text-sm text-champagne-400">{edu.institution}</p>
                  <p className="mt-1 font-mono text-xs text-ink-3">{edu.period}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-mono text-sm uppercase tracking-wider text-ink-3 mb-4">
            Certifications
          </h3>
          <div className="space-y-4">
            {certifications.map((cert) => (
              <Reveal key={cert.id} delay={0.05}>
                <div className="border border-night-500 bg-night-800 rounded-sm p-6 flex items-start justify-between gap-4">
                  <div>
                    <h4 className="font-heading text-lg text-ink">{cert.name}</h4>
                    <p className="mt-1 text-sm text-champagne-400">{cert.issuer}</p>
                  </div>
                  <span className="font-mono text-xs text-ink-3 whitespace-nowrap">{cert.year}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Education;
