import React from 'react';
import { Stat as StatType } from '../../types';

const Stat: React.FC<{ stat: StatType }> = ({ stat }) => {
  return (
    <div className="border-t border-champagne-500/40 pt-4">
      <p className="font-mono text-4xl md:text-5xl text-champagne-400">{stat.value}</p>
      <p className="mt-2 text-sm text-ink-2 leading-snug">{stat.label}</p>
    </div>
  );
};

export default Stat;
