import React from 'react';
import { personalInfo } from '../data/portfolioData';
import Section from './ui/Section';
import Reveal from './ui/Reveal';

const FOCUS_AREAS = [
  {
    title: 'Payment rails',
    description: 'NIBSS NIP integration — outbound and inbound transfers, holds, idempotency, TSQ timeout recovery.',
  },
  {
    title: 'Core banking',
    description: 'Apache Fineract — deployment, custom modules and day-to-day production operation.',
  },
  {
    title: 'Reconciliation',
    description: '3-source drift detection with auto-heal that never zeroes a balance on outage.',
  },
  {
    title: 'Reliability',
    description: 'Outbox patterns, retries, blue-green deploys, disaster recovery and audit readiness.',
  },
];

const About: React.FC = () => {
  return (
    <Section id="about" eyebrow="// 01 — ENGINEER" title="About">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="space-y-5">
          {personalInfo.bio.map((paragraph, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <p className="text-ink-2 leading-relaxed">{paragraph}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="h-full border border-night-500 bg-night-800 rounded-sm p-8 frame-corners">
            <h3 className="font-heading text-lg font-medium text-ink mb-6">What I own end to end</h3>
            <ul className="space-y-5">
              {FOCUS_AREAS.map((item) => (
                <li key={item.title} className="flex gap-3">
                  <span className="text-champagne-400 font-mono mt-0.5">▸</span>
                  <div>
                    <p className="text-ink font-medium">{item.title}</p>
                    <p className="text-sm text-ink-3 mt-0.5 leading-relaxed">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
};

export default About;
