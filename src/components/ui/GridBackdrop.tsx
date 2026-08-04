import React from 'react';

const GridBackdrop: React.FC<{ className?: string }> = ({ className = '' }) => {
  return <div aria-hidden className={`absolute inset-0 bg-grid pointer-events-none ${className}`} />;
};

export default GridBackdrop;
