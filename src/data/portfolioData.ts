import profileImage from '../assets/ayo.jpg';
import {
  PersonalInfo,
  Experience,
  EducationEntry,
  Certification,
  SkillCategory,
  Project,
} from '../types';

export const personalInfo: PersonalInfo = {
  name: 'Ayoola Aina',
  title: 'Payments & Core Banking Engineer',
  tagline:
    'Building the rails money moves on — NIP middleware, core banking platforms, and the systems that keep them in balance.',
  email: 'ayoolaina@gmail.com',
  phone: '+2348054771205',
  location: 'Lagos, Nigeria',
  availability: 'Open to Senior Engineering / Payments roles',
  bio: [
    'Payments and core-banking engineer with 9+ years across retail banking, microfinance and mortgage. I currently lead the engineering team building BellBank MFB’s payment infrastructure — a NestJS/TypeScript middleware layer over Apache Fineract, integrated with the NIBSS Instant Payment (NIP) rail and Banking-as-a-Service partners.',
    'I have run core banking platforms end-to-end: account structure, loan origination, disbursement, repayment and collections, reconciliation — for a 5,000+ account microfinance bank. And I design tools that make money movement safe to test, including a fault-injecting NIP simulator that reproduces timeouts, duplicates and declined funds on demand.',
    'The thread through all of it: money must be safe first and fast second. Idempotency, holds, double-entry ledgers, outbox patterns, and reconciliation that never auto-heals to zero.',
  ],
  profileImage,
  resumeUrl: '/documents/ayoola-aina-resume.pdf',
  socialLinks: {
    linkedin: 'https://www.linkedin.com/in/ayoola-aina-10940976/',
    twitter: 'https://twitter.com/don_aina',
    github: 'https://github.com/donaina',
  },
  stats: [
    { value: '9+', label: 'years in payments & banking' },
    { value: '68', label: 'automated tests on the NIP simulator' },
    { value: '5,000+', label: 'accounts on a Fineract core' },
    { value: '3-source', label: 'drift reconciliation' },
  ],
};

export const experiences: Experience[] = [
  {
    id: 1,
    role: 'Engineering Lead, Payment Infrastructure',
    company: 'BellBank MFB (Consulting)',
    period: 'Jul 2026 – Present',
    location: 'Lagos, Nigeria',
    current: true,
    summary:
      'Leading the engineering team building BellBank’s payment infrastructure: a NestJS/TypeScript microservices middleware over Apache Fineract, migrated from legacy Java services.',
    highlights: [
      'Own the NIBSS Instant Payment (NIP) integration end-to-end, plus Banking-as-a-Service (Bloc) partner integration.',
      'Designed the NIP Simulator — a fault-injecting mock switch, shadow ledger, outbox pattern and 3-source drift reconciliation (68 tests).',
      'Redis write-through balance caching and BullMQ-based async processing for resilient core-banking writes.',
      'Docker + Traefik blue-green deployments and GitHub Actions CI on a VPS migration that eliminated downtime risk.',
    ],
    stack: ['NestJS', 'TypeScript', 'Redis', 'BullMQ', 'Apache Fineract', 'Docker', 'Traefik', 'GitHub Actions'],
  },
  {
    id: 2,
    role: 'Core Banking Platform & Operations Lead',
    company: 'KATSU MFB (SABI Africa)',
    period: 'Jun 2024 – Present',
    location: 'Lagos, Nigeria',
    current: true,
    summary:
      'Set up and ran a microfinance bank’s core banking platform from inception — Apache Fineract, account structure, loan workflows, reconciliation and regulatory readiness.',
    highlights: [
      'Delivered the full platform setup: account opening, account structure, charge rules, reconciliation models and reporting — with CBN regulatory readiness.',
      'Administered the MIFOS/Apache Fineract core for 5,000+ customer accounts, optimizing performance across all banking functions.',
      'Designed loan origination, disbursement and journal-entry processes for retail and MSME lending.',
      'Automated back-office operations, cutting manual workflows by 40%, and integrated third-party APIs (KYC, disbursement, SMS).',
    ],
    stack: ['Apache Fineract', 'MySQL', 'Loan Lifecycle', 'Reconciliation', 'API Integration'],
  },
  {
    id: 3,
    role: 'Application Support Engineer (BaaS Operations)',
    company: 'VFD Tech',
    period: 'Nov 2023 – Sep 2024',
    location: 'Lagos, Nigeria',
    summary:
      'Front-line support for Banking-as-a-Service transaction processing across VFD Group entities.',
    highlights: [
      'Monitored API and payment-gateway transactions for accuracy and availability across BaaS products.',
      'Produced daily operational and transaction reports that drove decisions and resolved customer-impacting issues.',
    ],
    stack: ['Banking-as-a-Service', 'SQL', 'Postman', 'JIRA'],
  },
  {
    id: 4,
    role: 'Team Lead, CBA, Database & Digital Channels Support',
    company: 'Abbey Mortgage Bank PLC',
    period: 'Feb 2022 – Oct 2023',
    location: 'Lagos, Nigeria',
    summary:
      'Led the core banking support team and owned database performance, high availability and disaster recovery.',
    highlights: [
      'Restructured escalation workflows between IT and operations, cutting unresolved tickets by 30%.',
      'Ensured availability of digital channels (Mobile, Card, USSD, Internet Banking) and optimized MSSQL performance via query tuning.',
      'Spearheaded disaster-recovery tests across critical infrastructure; improved bug-resolution cycles by 25% via structured JIRA/TestRail workflows.',
    ],
    stack: ['MSSQL', 'MySQL', 'Disaster Recovery', 'TestRail', 'JIRA'],
  },
  {
    id: 5,
    role: 'Lead Network Administrator, DBA & Infrastructure',
    company: 'Abbey Mortgage Bank PLC',
    period: 'Mar 2020 – Jan 2022',
    location: 'Lagos, Nigeria',
    summary:
      'Managed critical banking infrastructure and database operations across multiple branches.',
    highlights: [
      'Implemented security and control measures for data integrity and regulatory compliance.',
      'Managed database backup, replication and access control; supported business continuity and DR planning.',
    ],
    stack: ['MSSQL', 'Networking', 'Firewalls', 'Backup & DR'],
  },
  {
    id: 6,
    role: 'Quality Assurance Engineer',
    company: 'Xiaomi Technologies (Contract)',
    period: 'Sep 2021 – Sep 2022',
    location: 'Remote',
    summary:
      'Functional and network testing across Xiaomi device software release stages.',
    highlights: [
      'Designed test plans, scenarios and scripts; tracked defects via JIRA and TestRail across releases.',
    ],
    stack: ['TestRail', 'JIRA', 'QA', 'Network Testing'],
  },
  {
    id: 7,
    role: 'Technical Support Engineer',
    company: 'Abbey Mortgage Bank PLC',
    period: 'Jun 2017 – Feb 2020',
    location: 'Lagos, Nigeria',
    summary:
      'Enterprise-wide technical support and e-channels platform operations.',
    highlights: [
      'Supported e-channels platforms (mobile, USSD, cards) ensuring optimal uptime across departments.',
    ],
    stack: ['IT Support', 'E-Channels', 'Incident Management'],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: 'backend',
    label: 'Backend & Services',
    skills: ['NestJS', 'TypeScript', 'Node.js', 'Fastify', 'REST APIs', 'BullMQ', 'Redis'],
  },
  {
    id: 'data',
    label: 'Data & Storage',
    skills: ['MySQL', 'Redis', 'PostgreSQL', 'Apache Fineract', 'SQL', 'Backup & DR'],
  },
  {
    id: 'banking',
    label: 'Banking Domain',
    skills: ['NIBSS NIP', 'ISO 8583', 'Banking-as-a-Service', 'Outbox Pattern', 'Reconciliation', 'Loan Lifecycle'],
  },
  {
    id: 'infra',
    label: 'Infrastructure & DevOps',
    skills: ['Docker', 'Docker Compose', 'Traefik', 'GitHub Actions', 'VPS / k8s', 'PM2'],
  },
];

export const education: EducationEntry[] = [
  {
    id: 1,
    degree: 'BSc Computer Science (in view)',
    institution: 'University of the People',
    period: '2025 – 2029',
  },
  {
    id: 2,
    degree: 'Higher National Diploma — Computer Science',
    institution: 'Yaba College of Technology',
    period: '2020 – 2025',
  },
  {
    id: 3,
    degree: 'National Diploma — Computer Hardware Engineering',
    institution: 'Dalewares Institute of Technology',
    period: '2015 – 2017',
  },
];

export const certifications: Certification[] = [
  { id: 1, name: 'Database & Data Processing with AWS', issuer: 'Amazon Web Services', year: '2023' },
  { id: 2, name: 'ITIL v4 Foundation', issuer: 'PeopleCert', year: '2021' },
  { id: 3, name: 'Sophos XG Firewall Administrator', issuer: 'Sophos', year: '2018' },
];

export const projects: Project[] = [
  {
    id: 1,
    slug: 'nip-simulator',
    title: 'NIP Simulator',
    subtitle: 'Mock NIBSS switch, fault injection and 3-source reconciliation',
    role: 'Engineering Lead / Platform Engineer',
    year: '2026',
    status: 'live',
    summary:
      'A NestJS + Fastify middleware that simulates the entire NIBSS Instant Payments rail — mock switch, mock beneficiary bank and an Apache Fineract shadow ledger — so interbank flows can be tested, broken and reconciled before touching a live switch.',
    highlights: [
      'Fault injection: timeouts that resolve via TSQ, duplicate references, insufficient funds',
      'Outbox pattern for durable async core-banking sync, with idempotency on inbound credits',
      '3-source drift reconciliation (DB, cache, core) with auto-heal that never zeroes on outage',
      '68 automated tests across middleware, mock switch and e2e flows',
    ],
    metrics: [
      { value: '68', label: 'automated tests' },
      { value: '3', label: 'fault classes injected' },
      { value: '2', label: 'mock institutions' },
      { value: '3-source', label: 'reconciliation' },
    ],
    stack: [
      { area: 'Middleware', items: ['NestJS', 'Fastify', 'TypeScript'] },
      { area: 'Data', items: ['Redis', 'Apache Fineract', 'PostgreSQL'] },
      { area: 'Infra', items: ['Docker', 'GitHub Actions'] },
      { area: 'Testing', items: ['Jest', 'Supertest'] },
    ],
    sourceUrl: 'https://github.com/donaina/Fineract-NIP-Simulator',
    featured: true,
    buildStory: {
      overview: [
        'The NIP Simulator reproduces the Nigerian Instant Payment rail in miniature: a NestJS/Fastify middleware acting as a bank’s payment engine, a mock NIBSS switch, a mock beneficiary bank, and an Apache Fineract shadow ledger.',
        'It exists because you cannot safely integration-test a bank’s NIP integration against the live NIBSS switch. A simulator makes the rail deterministic — every success and every failure mode is reproducible on demand.',
      ],
      challenge: [
        'The hard part is not moving money when everything works — it is the failure modes. Timeouts, duplicate references and insufficient funds each have distinct settlement behavior, and getting them wrong loses money or double-spends it.',
        'A transfer that times out must not be blindly reversed: the switch may already have settled it. It needs a Transaction Status Query (TSQ) loop to resolve the true outcome before funds are released or recovered.',
      ],
      architecture: [
        'Client → Middleware → Mock NIBSS Switch → Mock Beneficiary Bank. The middleware is the bank’s engine: accounts, balances, transactions and the NIP module.',
        'Wallet balance and the outbox event are written in a single database transaction; a poller posts to the Fineract shadow ledger. A reconciliation job diffs three balance sources — DB, cache and core — every few minutes.',
      ],
      implementation: [
        'Outbound transfers follow hold → name enquiry → fund transfer → capture/release. Funds are reserved before execution; a definitive failure releases the hold.',
        'Inbound credits carry idempotency keys so a retried NIP push cannot double-credit. TSQ resolution releases holds on definitive failure and keeps them on ambiguity.',
        'Money is integer kobo end-to-end; sub-kobo values are rejected before they can reach the core.',
      ],
      testing: [
        '68 automated tests (Jest + Supertest) across the middleware, plus the mock switch’s fault-injection harness: account suffixes map to success, insufficient funds, timeout-then-success, timeout-then-failed, unresolved timeout, and duplicate-reference rejection.',
      ],
      outcomes: [
        'Pre-live validation of a real NIP integration without touching the production switch.',
        'A deterministic regression suite that reproduces every failure class on demand.',
        'A public, clone-and-run repo with a browser banking UI that drives the whole rail.',
      ],
      links: [
        { label: 'Source', url: 'https://github.com/donaina/Fineract-NIP-Simulator' },
      ],
    },
  },
  {
    id: 2,
    slug: 'fineract-core-banking-platform',
    title: 'Fineract Core Banking Platform',
    subtitle: 'Deploy, extend and operate Apache Fineract core banking',
    role: 'Platform Engineer / Engineering Lead',
    year: '2025',
    status: 'production',
    summary:
      'Took Apache Fineract — the open-source core banking platform — from a vanilla release to a production system for a 5,000+ account microfinance bank: full Docker stack, custom modules, and day-to-day operation.',
    highlights: [
      'Full production stack via Docker Compose: MySQL 8, Redis 7, Fineract API, Angular web-app',
      'Custom Fineract modules for loan origination, disbursement and repayment processing',
      'VPS deployment with Traefik routing and encrypted offsite backups',
      'Money safety at the boundary: exact kobo conversion, no float math',
    ],
    metrics: [
      { value: '5,000+', label: 'live accounts' },
      { value: '3', label: 'custom business modules' },
      { value: '4', label: 'core services in stack' },
      { value: '1', label: 'shadow-ledger integration' },
    ],
    stack: [
      { area: 'Core', items: ['Apache Fineract', 'Java 21'] },
      { area: 'Data', items: ['MySQL 8', 'Redis 7'] },
      { area: 'Web', items: ['Angular'] },
      { area: 'Infra', items: ['Docker Compose', 'Traefik', 'VPS / k8s'] },
    ],
    featured: true,
    buildStory: {
      overview: [
        'Apache Fineract is the open-source core banking platform that runs microfinance banks and smaller lenders across the developing world. This project took a vanilla Fineract release, made it production-ready for a microfinance bank, and operated it in production.',
        'The full stack: MySQL 8, Redis 7, the Fineract provider (Java/Spring) and the Angular web app, fronted by Traefik and deployed to a VPS.',
      ],
      challenge: [
        'Vanilla Fineract does not ship a deployable production profile. Secrets handling, migrations, seeding, backups and high availability all had to be engineered around it.',
        'The core also has sharp edges — currency scaling rules that silently misbehave if you feed the wrong units — so money had to be guarded at the boundary.',
      ],
      architecture: [
        'Docker Compose services: MySQL 8 primary, Redis 7 cache, Fineract provider, Angular web-app. Traefik routes and terminates TLS in front of the stack.',
        'Custom Fineract modules extend the platform for the bank’s business: loan origination, disbursement and repayment processing.',
      ],
      implementation: [
        'Forked Fineract and added the custom modules; containerized the provisioning path so a fresh environment comes up reproducibly.',
        'Money safety at the boundary: exact integer-kobo conversion (no float math) and whole-kobo guards before posting to the core.',
      ],
      testing: [
        'Smoke tests and reconciliation runs against live balances; backup/restore drills; the upgrade path rehearsed.',
        'Reconciliation compares middleware balances to the core and never auto-heals to zero when the core is unreachable.',
      ],
      outcomes: [
        '5,000+ customer accounts served in production with the platform and back-office run end-to-end.',
        'The loan lifecycle automated end-to-end — origination through disbursement, repayment and collections.',
      ],
      links: [],
    },
  },
];
