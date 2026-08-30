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
    id: 4,
    slug: 'bellmonie-banking-platform',
    title: 'BellMonie Banking Platform',
    subtitle: 'A safer ledger and service architecture for digital banking',
    role: 'Engineering Lead / Payments & Core Banking Engineer',
    year: '2026',
    status: 'production',
    summary:
      'A multi-service digital-banking platform that connects customer onboarding, wallet balances, core banking, payment rails, notifications and utility payments. I strengthened the money-movement controls, clarified the BaaS account model, and prepared the services for an isolated staging rollout.',
    highlights: [
      'Designed pooled business accounts: one core-banking account for a business, with multiple Middleware-ledger sub-accounts for payroll, agents, branches or customer balances',
      'Added idempotent, owner-authorised allocation and sweep flows so a retry cannot move funds twice and one business cannot access another business’s accounts',
      'Reworked reconciliation to compare a business’s core-banking balance against its main ledger plus every sub-account ledger balance',
      'Hardened payment boundaries: atomic ledger updates, optimistic locking, protected webhooks, and direct NIP payouts blocked for local-only sub-accounts',
      'Set up containerised staging builds for Middleware, Auth, Notification and Utility services, with Fineract core banking and Redis supporting the platform',
    ],
    metrics: [
      { value: '429', label: 'automated Middleware tests' },
      { value: '51', label: 'test suites' },
      { value: '4', label: 'application services' },
      { value: '1 → many', label: 'business pool to sub-ledgers' },
    ],
    stack: [
      { area: 'Services', items: ['NestJS', 'TypeScript', 'Node.js', 'REST APIs'] },
      { area: 'Financial core', items: ['Apache Fineract', 'MySQL', 'Prisma', 'Redis'] },
      { area: 'Integrations', items: ['Bloc', 'NIP', 'AWS SMTP', 'HollaTags', 'CoralPay'] },
      { area: 'Delivery', items: ['Docker', 'Jenkins', 'GitHub', 'Netlify-safe staging workflow'] },
    ],
    featured: true,
    buildStory: {
      overview: [
        'BellMonie is a digital-banking platform with separate services for identity and onboarding, financial-account orchestration, notifications and utility payments. The platform connects those services to Apache Fineract for core banking, a payment-rail partner for transfers and collections, and providers for email, SMS and value-added services.',
        'My work focused on making the system safer to operate and easier to test before production rollout. The central question was simple: when several services participate in a money movement, how do we make every balance explainable and every retry safe?',
        'The answer was not a single feature. It was a set of clear boundaries: Auth establishes identity, Middleware owns the wallet ledger and money movement, Fineract owns the core-banking record, and provider calls are treated as external operations that can fail or be repeated.',
      ],
      challenge: [
        'Financial software has unusual failure modes. A customer can tap “send” twice, a provider can time out after receiving a request, two requests can arrive at the same time, or a service can restart halfway through a workflow. Without deliberate controls, these cases can double-credit, double-debit or leave balances inconsistent.',
        'Business accounts created a second design problem. A BaaS customer may need many operational sub-accounts, but creating a full core-banking customer and savings account for each one would add cost, clutter and operational risk. The platform needed separate balances without pretending that each sub-account was an independent bank account.',
        'Finally, the team needed a staging environment that could build and test changes independently of the existing production deployment process.',
      ],
      architecture: [
        'A customer starts in mobile or internet banking. The Auth Service manages registration, login, OTPs and KYC progress. When a user or business is ready, Auth sends an authenticated onboarding webhook to Middleware.',
        'Middleware provisions and operates the financial layer: wallet accounts, balance snapshots, transaction records, holds, internal transfers, business sub-accounts, provider calls and notifications. It communicates with Fineract for core-banking accounts and with the payment rail for NIP-related actions.',
        'For a business, Fineract holds one main pooled account. Middleware can create many local sub-ledger accounts beneath it. Allocating money reduces the main available ledger balance and increases the selected sub-ledger balance; sweeping does the reverse. The pooled core balance remains the combined value of both.',
      ],
      implementation: [
        'I introduced idempotency keys for sensitive money movements. If a client retries the same request, the platform returns the earlier result instead of executing the movement again. Every allocation and sweep also verifies that the authenticated user owns the business account involved.',
        'Ledger movements use an atomic database transaction: a debit record, a credit record, double-entry ledger entries and both balance updates either commit together or do not happen. Optimistic locking detects competing updates instead of allowing a stale request to overwrite a newer balance.',
        'Each business sub-account now has a real Middleware ledger account and balance snapshot, but no automatic Fineract client, savings account or NUBAN. Direct NIP payouts from those local-only accounts are rejected. Funds must first be swept to the business pool, which is the configured external payment source.',
        'Reconciliation was updated to understand the pooled model. Rather than comparing Fineract only with the main Middleware balance, it compares Fineract with the main balance plus all linked sub-ledger balances. This prevents an automated reconciliation from accidentally recreating money after a valid allocation.',
      ],
      testing: [
        'The Middleware service runs 429 automated tests across 51 suites. The relevant tests cover ledger creation, allocation and sweep authorisation, idempotency, blocked sub-account payouts, account closure safety, payment failure paths, webhook validation and reconciliation behaviour.',
        'The staging build also runs a production dependency audit and compiles the service before creating a versioned Docker image. This gives the team a repeatable checkpoint before deploying a candidate build to the staging server.',
      ],
      outcomes: [
        'The platform has a scalable BaaS account model: a business can organise money across many sub-accounts while maintaining one real core-banking account and payment-rail source.',
        'Money movement is safer under retries, concurrent requests and provider failures. The design makes audit trails, balance ownership and recovery paths explicit instead of relying on best-effort application logic.',
        'The services are prepared for controlled staging validation of onboarding, sub-account funding, core-banking reconciliation, payment callbacks and notification delivery before production rollout.',
      ],
      links: [],
    },
  },
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
      'Redis write-through balance cache that keeps Fineract off the transfer hot path, so accounts with large transaction volumes stay fast',
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
        'It exists to prove out a specific fix. Apache Fineract computes an account’s balance from its transaction history, so accounts with large transaction volumes get progressively slower to read and post to — and against NIP’s tight NIBSS timeout window, a slow core lookup can tip an otherwise-healthy transfer into a timeout. The simulator is where I validated a Redis write-through balance cache that keeps those checks fast regardless of an account’s history, without giving up Fineract as the system of record.',
        'It also makes the rail deterministic: because you cannot safely integration-test a bank’s NIP integration against the live NIBSS switch, every success and every failure mode here is reproducible on demand.',
      ],
      challenge: [
        'Fineract derives an account’s balance from its full transaction history, so high-volume accounts get slower to read and post to as they grow. Putting a Redis cache in front of the core makes balance checks constant-time — but the cache then has to be provably correct, because a stale or drifted balance would block a legitimate transfer or, worse, allow an overdraft.',
        'Correctness is hardest in the failure modes. Timeouts, duplicate references and insufficient funds each have distinct settlement behavior, and getting them wrong loses money or double-spends it.',
        'A transfer that times out must not be blindly reversed: the switch may already have settled it. It needs a Transaction Status Query (TSQ) loop to resolve the true outcome before funds are released or recovered.',
      ],
      architecture: [
        'Client → Middleware → Mock NIBSS Switch → Mock Beneficiary Bank. The middleware is the bank’s engine: accounts, balances, transactions and the NIP module.',
        'Wallet balance and the outbox event are written in a single database transaction; a poller posts to the Fineract shadow ledger. A reconciliation job diffs three balance sources — DB, cache and core — every few minutes.',
      ],
      implementation: [
        'Balance reads and holds go through a Redis write-through cache instead of the core, so an account’s transaction volume no longer drives transfer latency. Every movement is replayed to the Fineract shadow ledger through the outbox, and the 3-source reconciliation catches any drift between cache, DB and core — healing toward the core, but never to zero when it is unreachable.',
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
  {
    id: 3,
    slug: 'kobo-insights',
    title: 'Kobo Insights',
    subtitle: 'Transaction intelligence for Nigerian bank statements',
    role: 'Full-Stack Engineer',
    year: '2026',
    status: 'live',
    summary:
      'A clean-room NestJS + React app that ingests a Nigerian bank statement CSV, categorizes every transaction using a deterministic narration rule engine (with optional AI upgrade), and surfaces cash-flow charts, recurring/subscription detection, income analysis, an explainable affordability signal (0–100 score with 20 named reason codes), and a natural-language “Ask your statement” Q&A panel.',
    highlights: [
      'Deterministic Nigerian narration categorizer — 60+ ordered rules, 17-category fixed taxonomy — runs fully offline with zero external deps',
      'Explainable affordability signal: integer-kobo math, base-50 scoring with 20 reason codes (income stability, expense-to-income, gambling exposure, balance buffer, etc.) — shaped to hand off to a future credit-decisioning engine',
      'Optional AI upgrade (Claude) mirrors the NIP sim’s optional-Redis pattern: zero-config fallback, AI only sees uncategorized rows, Ask panel gracefully shows “AI not configured” hint',
      'Premium fintech dark theme (champagne accent, Space Grotesk + JetBrains Mono) hand-rolled SVG charts — no chart library',
      '145 unit tests, Docker compose verified, synthetic Lagos professional seed data (3 months, 141 txns)',
    ],
    metrics: [
      { value: '145', label: 'unit tests' },
      { value: '17', label: 'transaction categories' },
      { value: '141', label: 'seeded transactions' },
      { value: '20', label: 'affordability reason codes' },
    ],
    stack: [
      { area: 'Backend', items: ['NestJS 10', 'Fastify', 'Prisma', 'SQLite'] },
      { area: 'Frontend', items: ['React 18', 'Vite', 'Tailwind', 'TypeScript'] },
      { area: 'AI', items: ['Claude (opt-in)', 'Anthropic SDK'] },
      { area: 'Testing', items: ['Jest', 'Supertest'] },
    ],
    featured: true,
    sourceUrl: 'https://github.com/donaina/kobo-insights',
    buildStory: {
      overview: [
        'Kobo Insights turns a Nigerian bank statement CSV into actionable financial intelligence: category breakdowns, cash-flow trends, recurring bills, income sources and an explainable affordability snapshot.',
        'It exists because no open, offline-first tool does this for Nigerian data — narration patterns are too specific (NIP/ transfer markers, VTU, DStv, Bet9ja, Piggyvest, etc.) and generic spend-categorizers miss them.',
        'The deliberate architecture choice: rules-first, AI-opt-in. The categorizer runs entirely on deterministic rules; setting ANTHROPIC_API_KEY upgrades uncategorized rows and unlocks the Ask panel. This mirrors the NIP Simulator’s optional-Redis balance cache — zero-config clone-and-run, better with the optional service.',
        'Money is integer kobo end-to-end; no floating-point. The affordability signal is transparent: every point traces to a named reason a human can audit. It is not a black-box ML score; it is a bridge toward a future credit-decisioning engine.',
      ],
      challenge: [
        'Nigerian bank narration variance: the same merchant can appear as “POS PURCHASE SHOPRITE”, “WEB PURCHASE SHOPRITE”, “SHOPRITE IKEJA” — rules must handle the variance while keeping false positives low.',
        'Running balance reconstruction: statements vary between Debit/Credit columns and single Amount+Type columns; CSV parsing must be tolerant and reconstruct opening/closing balances correctly.',
        'Rules ordering precedence: a Bet9ja top-up arrives as “NIP/TRF/BET9JA/...” — the betting rule must win before the generic transfer catch-all. The rule engine is entirely top-to-bottom first-match-wins.',
        'AI as upgrade, not dependency: the app must be fully functional without ANTHROPIC_API_KEY. The Ask panel shows a clear hint instead of erroring; categorization quality is 100% rules on the seeded sample.',
      ],
      architecture: [
        'Backend modules: ingest (CSV parser) → categorization (rules + optional AI) → insights (cashflow, merchants, recurring, income) → affordability (feature extraction + scored with reason codes) → ask (compact structured context → LLM → answer). Each module is independently testable.',
        'Frontend: single dashboard SPA with statement selector, CSV upload, summary cards, hand-rolled SVG charts (cash-flow bars, category donut), top merchants, recurring list, income card, affordability card, Ask panel, and filterable transactions table with RULES/AI provenance badges.',
        'Data flow: CSV → normalized txns (kobo, ISO dates) → Prisma/SQLite → categorization → insights aggregation → affordability features → scored with reason codes. All paths work without AI.',
      ],
      implementation: [
        'Categorization: 60+ RegExp rules over upper-cased narrations; 17-category taxonomy with spendClass metadata (income/essential/discretionary/transfer/savings/charges/debt) driving affordability features. Counterparty extraction from transfer narrations via FROM/TO/FRM markers.',
        'Insights: monthly cash-flow (in/out/net), category breakdown, top merchants by outflow, recurring detection (≥3 hits, median gap → weekly/biweekly/monthly, amount stability ±35%), income detection (explicit income credits + recurring sizeable credits ≥₦5k median, stability = 1 − CV).',
        'Affordability: 13 numeric features → base 50 score → 20 signed reason codes (NO_INCOME −25, INCOME_STABLE +10, LIVES_WITHIN_MEANS +14, OVERSPENDS −18, HIGH_GAMBLING −16, HITS_ZERO −10, HEALTHY_BUFFER +8, etc.) → clamp 0..100 → band A≥80, B≥65, C≥50, D≥35, E. Disclaimer baked in.',
        'Ask panel: compact context builder (period, totals, monthly CF, category spend, income sources, recurring, top merchants, affordability reasons, 40 largest txns by amount) → optional Claude Sonnet → answer. Graceful “AI not configured” banner when key absent.',
        'Docker: multi-stage builds (NestJS builder → node:20-alpine runner with prisma migrate deploy; Vite builder → nginx:alpine SPA server). docker-compose.yml with API + Web, SQLite volume, API healthcheck.',
        'Tests: 145 unit tests (money helpers, 60+ Nigerian narration cases for categorizer, CSV parser edge cases, cash-flow/merchants/recurring/income exact assertions). Synthetic seed data generated by mulberry32 PRNG (seed 20250809).',
      ],
      testing: [
        '145 Jest unit tests pass; categorizer rules verified against 60+ Nigerian narration patterns covering all 17 categories; CSV parser handles ISO, DD-Mon-YYYY, DD/MM/YYYY, Amount+Type, signed Amount, quoted fields with commas.',
        'Insights exact assertions: cashflowByMonth, categoryBreakdown, topMerchants, detectRecurring (weekly/monthly cadence, stability filter), detectIncome (explicit + recurring credits, stability = 1 − CV).',
        'Affordability exact assertions: score compute with reason codes, band mapping, clamp 0..100.',
        'Synthetic seed: 3 months, 141 txns (136 debits, 5 credits), Lagos professional ₦520k/mo salary, closing ₦930,672 — renders fully in dashboard.',
      ],
      outcomes: [
        'Clone-and-run: npm install → prisma migrate dev → npm run seed → docker compose up — no external services required.',
        'Dashboard renders seeded statement: ₦520k/mo income, stability 0.995; recurring detects DStv, Netflix, Spotify, Piggyvest, Bet9ja, IKEDC; affordability Band B (68) with 8 reason codes.',
        'PR-first published to donaina/kobo-insights with full CI, safety scan and documentation.',
      ],
      links: [
        { label: 'Source', url: 'https://github.com/donaina/kobo-insights' },
      ],
    },
  },
];
