import React from 'react';

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  banded?: boolean;
  className?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({
  id,
  eyebrow,
  title,
  description,
  banded = false,
  className = '',
  children,
}) => {
  return (
    <section
      id={id}
      className={`relative py-20 md:py-28 ${banded ? 'bg-night-900' : 'bg-night-950'} ${className}`}
    >
      <div className="container mx-auto px-4">
        <div className="mb-12 md:mb-16">
          <p className="font-mono text-xs tracking-[0.2em] text-champagne-400 mb-3">
            {eyebrow}
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-ink tracking-tight">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-ink-2 max-w-2xl leading-relaxed">{description}</p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;
