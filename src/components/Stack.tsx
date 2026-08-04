import React from 'react';
import { skillCategories } from '../data/portfolioData';
import Section from './ui/Section';
import Reveal from './ui/Reveal';
import Tag from './ui/Tag';

const Stack: React.FC = () => {
  return (
    <Section
      id="stack"
      eyebrow="// 04 — STACK"
      title="Stack"
      description="The tools and patterns I reach for when money is involved."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((cat) => (
          <Reveal key={cat.id} className="h-full">
            <div className="h-full border border-night-500 bg-night-800 rounded-sm p-6 md:p-8">
              <h3 className="font-heading text-lg font-medium text-ink mb-5">{cat.label}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default Stack;
