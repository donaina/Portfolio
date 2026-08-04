import React from 'react';
import { motion } from 'framer-motion';

const NODES = [
  { x: 20, label: 'CLIENT' },
  { x: 145, label: 'MIDDLEWARE' },
  { x: 270, label: 'MOCK NIBSS' },
  { x: 395, label: 'BANK B' },
];

const FlowLine: React.FC = () => {
  return (
    <svg
      viewBox="0 0 430 78"
      className="w-full h-auto"
      role="img"
      aria-label="NIP transfer flow: Client to Middleware to Mock NIBSS Switch to Beneficiary Bank"
    >
      {/* rail line */}
      <line x1="20" y1="28" x2="410" y2="28" stroke="#223056" strokeWidth="1" />
      {/* dashed return rail */}
      <line
        x1="20"
        y1="40"
        x2="410"
        y2="40"
        stroke="#223056"
        strokeWidth="0.5"
        strokeDasharray="3 4"
      />
      {/* nodes */}
      {NODES.map((n) => (
        <g key={n.label}>
          <circle cx={n.x} cy="28" r="6" fill="#0A101F" stroke="#D4AF6A" strokeWidth="1.5" />
          <text
            x={n.x}
            y="60"
            textAnchor="middle"
            fill="#6B7A93"
            fontSize="8.5"
            fontFamily="'JetBrains Mono', monospace"
            letterSpacing="1"
          >
            {n.label}
          </text>
        </g>
      ))}
      {/* animated packet */}
      <motion.circle
        cx="20"
        cy="28"
        r="3"
        fill="#E4C580"
        animate={{ cx: [20, 410] }}
        transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', repeatDelay: 1.4 }}
      />
    </svg>
  );
};

export default FlowLine;
