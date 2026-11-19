import React from 'react';
import { ProjectDiagramKey } from '../types';

const COLORS = {
  surface: '#0F1830',
  surfaceAccent: '#131C33',
  border: '#223056',
  accent: '#D4AF6A',
  accentText: '#E4C580',
  text: '#EAF0FA',
  textDim: '#A6B2C8',
  arrow: '#93723C',
};

interface BoxProps {
  x: number;
  y: number;
  w: number;
  h: number;
  title: string;
  sub?: string;
  accent?: boolean;
}

const Box: React.FC<BoxProps> = ({ x, y, w, h, title, sub, accent }) => (
  <g>
    <rect
      x={x}
      y={y}
      width={w}
      height={h}
      rx={2}
      fill={accent ? COLORS.surfaceAccent : COLORS.surface}
      stroke={accent ? COLORS.accent : COLORS.border}
      strokeWidth={accent ? 1.4 : 1}
    />
    <text
      x={x + w / 2}
      y={sub ? y + h / 2 - 4 : y + h / 2 + 4}
      textAnchor="middle"
      fill={accent ? COLORS.accentText : COLORS.text}
      fontFamily="'Space Grotesk', sans-serif"
      fontSize="12"
      fontWeight="600"
    >
      {title}
    </text>
    {sub && (
      <text
        x={x + w / 2}
        y={y + h / 2 + 11}
        textAnchor="middle"
        fill={COLORS.textDim}
        fontFamily="'JetBrains Mono', monospace"
        fontSize="8.5"
      >
        {sub}
      </text>
    )}
  </g>
);

interface ArrowProps {
  marker: string;
  x1?: number;
  y1?: number;
  x2?: number;
  y2?: number;
  path?: string;
  dashed?: boolean;
}

const Arrow: React.FC<ArrowProps> = ({ marker, x1, y1, x2, y2, path, dashed }) => {
  const props = {
    stroke: COLORS.arrow,
    strokeWidth: 1.2,
    markerEnd: `url(#${marker})`,
    fill: 'none',
    strokeDasharray: dashed ? '4 4' : undefined,
  };
  return path ? (
    <path d={path} {...props} />
  ) : (
    <line x1={x1} y1={y1} x2={x2} y2={y2} {...props} />
  );
};

const Defs: React.FC<{ marker: string }> = ({ marker }) => (
  <defs>
    <marker id={marker} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.arrow} />
    </marker>
  </defs>
);

const Svg: React.FC<{ id: string; label: string; children: React.ReactNode }> = ({
  id,
  label,
  children,
}) => (
  <svg
    viewBox="0 0 760 290"
    className="w-full min-w-[640px]"
    role="img"
    aria-labelledby={`${id}-title`}
  >
    <title id={`${id}-title`}>{label}</title>
    {children}
  </svg>
);

const NipDiagram: React.FC<{ id: string }> = ({ id }) => {
  const marker = `${id}-arrow`;
  return (
    <Svg id={id} label="NIP Simulator: client, middleware, mock NIBSS switch and beneficiary bank, with Redis cache, Fineract shadow ledger and three-source reconciliation">
      <Defs marker={marker} />
      <Box x={16} y={112} w={104} h={58} title="Client" sub="banking UI" />
      <Box x={156} y={88} w={168} h={106} title="Middleware" sub="holds · outbox · idempotency" accent />
      <Box x={362} y={112} w={126} h={58} title="Mock NIBSS" sub="fault injection" />
      <Box x={526} y={112} w={150} h={58} title="Beneficiary bank" sub="mock" />
      <Box x={156} y={228} w={120} h={48} title="Redis" sub="balance cache" />
      <Box x={314} y={228} w={150} h={48} title="Fineract" sub="shadow ledger" />
      <Box x={526} y={24} w={150} h={52} title="Reconciliation" sub="DB · cache · core" />
      <Arrow marker={marker} x1={120} y1={141} x2={156} y2={141} />
      <Arrow marker={marker} x1={324} y1={141} x2={362} y2={141} />
      <Arrow marker={marker} x1={488} y1={141} x2={526} y2={141} />
      <Arrow marker={marker} x1={216} y1={194} x2={216} y2={228} dashed />
      <Arrow marker={marker} x1={300} y1={194} x2={300} y2={228} dashed />
      <Arrow marker={marker} path="M 464 252 H 500 V 50 H 526" dashed />
    </Svg>
  );
};

const BellMonieDiagram: React.FC<{ id: string }> = ({ id }) => {
  const marker = `${id}-arrow`;
  return (
    <Svg id={id} label="BellMonie: auth service to middleware ledger to Fineract core and payment rail, with business sub-ledgers, reconciliation, and notifications">
      <Defs marker={marker} />
      <Box x={16} y={72} w={126} h={62} title="Auth service" sub="identity · KYC" />
      <Box x={168} y={56} w={190} h={94} title="Middleware ledger" sub="idempotency · atomic postings" accent />
      <Box x={386} y={72} w={136} h={62} title="Fineract core" sub="pooled account" />
      <Box x={550} y={72} w={194} h={62} title="NIP / Bloc rail" sub="payments & collections" />
      <Box x={168} y={196} w={190} h={62} title="Business sub-ledgers" sub="payroll · agents · branches" />
      <Box x={386} y={196} w={136} h={62} title="Reconciliation" sub="core vs main + subs" />
      <Box x={550} y={196} w={194} h={62} title="Notifications & VAS" sub="email · SMS · bills" />
      <Arrow marker={marker} x1={142} y1={103} x2={168} y2={103} />
      <Arrow marker={marker} x1={358} y1={103} x2={386} y2={103} />
      <Arrow marker={marker} x1={522} y1={103} x2={550} y2={103} />
      <Arrow marker={marker} x1={263} y1={150} x2={263} y2={196} dashed />
      <Arrow marker={marker} x1={454} y1={134} x2={454} y2={196} />
      <Arrow marker={marker} x1={358} y1={227} x2={386} y2={227} />
      <Arrow marker={marker} path="M 330 150 V 172 H 647 V 196" dashed />
    </Svg>
  );
};

const FineractDiagram: React.FC<{ id: string }> = ({ id }) => {
  const marker = `${id}-arrow`;
  return (
    <Svg id={id} label="Fineract platform: Traefik in front of the Fineract API and Angular back office, backed by MySQL 8, Redis 7 and encrypted offsite backups">
      <Defs marker={marker} />
      <Box x={16} y={112} w={110} h={62} title="Traefik" sub="TLS + routing" />
      <Box x={166} y={52} w={190} h={70} title="Fineract API" sub="Java 21 · custom modules" accent />
      <Box x={166} y={176} w={190} h={62} title="Angular web app" sub="back office" />
      <Box x={396} y={112} w={130} h={62} title="MySQL 8" sub="system of record" />
      <Box x={566} y={52} w={174} h={56} title="Redis 7" sub="cache" />
      <Box x={566} y={176} w={174} h={56} title="Offsite backups" sub="encrypted" />
      <Arrow marker={marker} x1={126} y1={128} x2={166} y2={95} />
      <Arrow marker={marker} x1={126} y1={160} x2={166} y2={200} />
      <Arrow marker={marker} x1={261} y1={176} x2={261} y2={122} />
      <Arrow marker={marker} x1={356} y1={108} x2={396} y2={128} />
      <Arrow marker={marker} x1={356} y1={87} x2={566} y2={80} />
      <Arrow marker={marker} x1={526} y1={143} x2={566} y2={190} />
    </Svg>
  );
};

const DriftwoodDiagram: React.FC<{ id: string }> = ({ id }) => {
  const marker = `${id}-arrow`;
  return (
    <Svg id={id} label="Driftwood: client traffic through the reverse proxy to the upstream API, with schema inference, a locked contract baseline and a local structural-diff dashboard">
      <Defs marker={marker} />
      <Box x={16} y={112} w={110} h={62} title="Client" />
      <Box x={166} y={88} w={190} h={106} title="Driftwood" sub="reverse proxy · capture" accent />
      <Box x={396} y={112} w={140} h={62} title="Upstream API" sub="responses unchanged" />
      <Box x={566} y={32} w={178} h={62} title="Schema inference" sub="field · type · nullability" />
      <Box x={566} y={122} w={178} h={58} title="Contract baseline" sub="locked per route" />
      <Box x={566} y={212} w={178} h={58} title="Local dashboard" sub="structural diff" />
      <Arrow marker={marker} x1={126} y1={143} x2={166} y2={143} />
      <Arrow marker={marker} x1={356} y1={143} x2={396} y2={143} />
      <Arrow marker={marker} path="M 300 88 V 63 H 566" dashed />
      <Arrow marker={marker} x1={655} y1={94} x2={655} y2={122} />
      <Arrow marker={marker} x1={655} y1={180} x2={655} y2={212} />
    </Svg>
  );
};

const DIAGRAMS: Record<
  ProjectDiagramKey,
  { label: string; caption: string; Component: React.FC<{ id: string }> }
> = {
  'nip-simulator': {
    label: 'NIP simulator architecture',
    caption: 'NIP rail under test — mock switch, shadow ledger, three balance sources',
    Component: NipDiagram,
  },
  bellmonie: {
    label: 'BellMonie architecture',
    caption: 'Pooled core account, ledger sub-accounts and the payment boundary',
    Component: BellMonieDiagram,
  },
  fineract: {
    label: 'Fineract platform architecture',
    caption: 'Production Docker stack for Apache Fineract',
    Component: FineractDiagram,
  },
  driftwood: {
    label: 'Driftwood architecture',
    caption: 'Traffic → inferred contract → structural diff',
    Component: DriftwoodDiagram,
  },
};

const ProjectDiagram: React.FC<{ diagram: ProjectDiagramKey }> = ({ diagram }) => {
  const meta = DIAGRAMS[diagram];
  const id = `diagram-${diagram}`;
  return (
    <figure className="mt-8 border border-night-500 bg-night-900/60 rounded-sm p-4 md:p-5">
      <figcaption className="flex flex-wrap items-center justify-between gap-2 mb-4">
        <span className="font-mono text-[10px] tracking-[0.2em] text-ink-3">
          // ARCHITECTURE
        </span>
        <span className="font-mono text-[10px] text-ink-3">{meta.caption}</span>
      </figcaption>
      <div className="overflow-x-auto">
        <meta.Component id={id} />
      </div>
    </figure>
  );
};

export default ProjectDiagram;
