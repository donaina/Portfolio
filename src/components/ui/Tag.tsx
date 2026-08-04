import React from 'react';

const Tag: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <span className="inline-block px-2.5 py-1 font-mono text-xs text-ink-2 bg-night-800 border border-night-500 rounded-sm whitespace-nowrap">
      {children}
    </span>
  );
};

export default Tag;
